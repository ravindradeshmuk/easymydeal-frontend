import React, { useState } from 'react';
import axios from 'axios';
import { Container, Paper, Typography, Button, Grid, IconButton, CircularProgress } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CancelIcon from '@mui/icons-material/Cancel';

const DocumentKYCPage= () => {
  const [userData, setUserData] = useState({ documents: [] });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.some(file => file.size > 500000 || !/\.(pdf|jpg|jpeg|png)$/i.test(file.name))) {
      setError('Invalid file. Please upload PDF, JPG, or PNG files not larger than 500KB.');
      return;
    }
    setUserData({ ...userData, documents: [...userData.documents, ...files] });
  };

  const handleRemoveFile = (fileName) => {
    setUserData({ ...userData, documents: userData.documents.filter(file => file.name !== fileName) });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    const formData = new FormData();
    userData.documents.forEach(file => {
      formData.append('documents', file);
    });

    try {
      // Replace with your API endpoint and authentication method
      const response = await axios.post('http://yourapi.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Add other headers like Authorization if needed
        },
      });

      // Handle response here
      console.log('Response:', response.data);
      // Reset form or give feedback to the user
    } catch (error) {
      setError('Failed to upload documents. Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>Upload KYC Documents</Typography>
       {error && <Typography color="error">{error}</Typography>}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
            >
              Upload Documents
              <input
                type="file"
                hidden
                multiple
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            {userData.documents.map((file, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <Typography variant="body2">{file.name}</Typography>
                <IconButton onClick={() => handleRemoveFile(file.name)} size="small">
                  <CancelIcon fontSize="small" />
                </IconButton>
              </div>
            ))}
          </Grid>
          <h5 variant="body2" sx={{ mb: 2 }}>
          (Documents accepted for KYC include Pancard, Aadhaar, driving license, and passport. 
          The acceptable file formats are PDF, JPG, and PNG, and each document must not exceed 500 KB in size.)
        </h5>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Submit Documents'}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default DocumentKYCPage;
