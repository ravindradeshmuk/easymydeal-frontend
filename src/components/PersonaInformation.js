import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, IconButton, CircularProgress, Alert, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const PersonalInformationPage = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    dateOfBirth: '',
    address: '',
  });

  const [isEditing, setIsEditing] = useState({
    email: false,
    mobile: false,
    password: false,
    dateOfBirth: false,
    address: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
          setUserData(JSON.parse(storedUserInfo));
        } else {
          const response = await axios.get('http://localhost:5000/api/user/user-data', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });

          if (response.data) {
            localStorage.setItem('userData', JSON.stringify(response.data));
            setUserData(response.data);
          }
        }
      } catch (error) {
        setError('Failed to fetch user data. Error: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    if (!token) {
      setError('No authentication token found. Please log in again.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        'http://localhost:5000/api/user/update/profile',
        userData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }
      );

      setSuccess(response.data.message);
      setIsEditing({ email: false, mobile: false, password: false, dateOfBirth: false, address: false });
      localStorage.setItem('userData', JSON.stringify(userData)); // Update local storage with the new user data
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to update user data.');
    } finally {
      setLoading(false);
    }
  };
    
  
    return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>Login and Security</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <form onSubmit={handleUpdateProfile}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="subtitle1">Full Name</Typography>
              <Typography variant="body1">{userData.fullName}</Typography>
            </Grid>

            <Grid item>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                fullWidth
                disabled={!isEditing.email}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => handleEditClick('email')}>
                        <EditIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Mobile Number"
                type="tel"
                name="mobile"
                value={userData.mobile}
                onChange={handleInputChange}
                fullWidth
                disabled={!isEditing.mobile}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => handleEditClick('mobile')}>
                        <EditIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Password"
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                fullWidth
                disabled={!isEditing.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => handleEditClick('password')}>
                        <EditIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
        <TextField
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          value={userData.dateOfBirth}
          onChange={handleInputChange}
          fullWidth
          disabled={!isEditing.dateOfBirth}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleEditClick('dateOfBirth')}>
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Address"
          type="text"
          name="address"
          value={userData.address}
          onChange={handleInputChange}
          fullWidth
          disabled={!isEditing.address}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleEditClick('address')}>
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
         
         <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateProfile}
                disabled={loading}
             style={{
              
              alignItems:'center',
               width:'100%'
             }} >
                {loading ? <CircularProgress size={30} /> : 'Update Profile'}
              </Button>
            </Grid>
          </Grid>
     
        </form>
      </Paper>
    </Container>
  );
};

export default PersonalInformationPage;
