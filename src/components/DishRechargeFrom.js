import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Paper, Typography, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import image3 from "../images/DTH RECHARGE.jpg"
const DishRechargeForm = () => {
  const [formData, setFormData] = useState({
    operator: '',
    subscriberId: '',
    circle: '',
    amount: ''
  });
  const [formErrors, setFormErrors] = useState({
    operator: false,
    subscriberId: false,
    circle: false,
    amount: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: false }); // Reset specific field error
  };

  const validateForm = () => {
    const newErrors = {};
    // Add validation logic here
    newErrors.operator = formData.operator === '';
    newErrors.subscriberId = formData.subscriberId === '' || !formData.subscriberId.match(/^SUB[0-9]{6}$/);
    newErrors.circle = formData.circle === '';
    newErrors.amount = formData.amount === '' || isNaN(formData.amount) || formData.amount <= 0;
    
    setFormErrors(newErrors);
    // Form is valid if there are no errors
    return Object.keys(newErrors).every((key) => !newErrors[key]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      // Proceed with form submission (e.g., API call)
    }
  };
  const ResponsiveImage = styled('img')({

  width: '100%', // Image will take up 100% of the container's width
  height: '70vh', // Height will scale automatically to maintain aspect ratio
  borderRadius: '10px',
  marginTop: '50px',
  // Remove background properties since they don't apply to img tags
  objectFit: 'cover', // This will ensure the image covers the area, similar to background-size: cover
  maxWidth: '100%', // This ensures the image is not larger than the container
  maxHeight: '100vh', // This sets a maximum height for the image

});

  return (
    <Container component="main" maxWidth="md" sx={{ m: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              DTH Recharge Online
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="operator"
                label="Search Operator"
                name="operator"
                value={formData.operator}
                onChange={handleChange}
                error={formErrors.operator}
                helperText={formErrors.operator ? "Operator is required" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="subscriberId"
                label="Subscriber ID"
                name="subscriberId"
                value={formData.subscriberId}
                onChange={handleChange}
                error={formErrors.subscriberId}
                helperText={formErrors.subscriberId ? "Invalid Subscriber ID" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="circle"
                label="Choose Circle"
                name="circle"
                value={formData.circle}
                onChange={handleChange}
                error={formErrors.circle}
                helperText={formErrors.circle ? "Circle is required" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="amount"
                label="Enter Amount"
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleChange}
                error={formErrors.amount}
                helperText={formErrors.amount ? "Invalid amount" : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="outlined"
                        onClick={() => alert('Check Plans Clicked')}
                      >
                        Check Plans
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
               <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: 16 }}
                disabled={Object.values(formErrors).some((e) => e)} // Disable if there are any errors
              >
                Proceed to Recharge
              </Button>
                  </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <ResponsiveImage  src={image3} alt="Mobile Recharge" />
          {/* Image placeholder */}
          {/* <Paper sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="subtitle1">
            Image Placeholder
            </Typography>
          </Paper> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DishRechargeForm;
