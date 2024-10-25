import React, { useState } from 'react';
import {
  Container, Grid, Paper, TextField, Button,
  Typography, Radio, RadioGroup, FormControlLabel, FormControl,
  useTheme, useMediaQuery
} from '@mui/material';
import { styled } from '@mui/system';
// import mobileRechargeImage from './path-to-your-image.jpg'; // Replace with path to your image
import image2 from "../images/recharge_image.jpg"
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3, 0),
  display:'flex',
  flexDirection:'column',
  gap:10,
 marginTop:'50px'
}));

const StyledFormControl = styled(FormControl)({
  width: '100%',
  marginBottom: '20px',
  margin:"10px"
});

const StyledButton = styled(Button)({
  marginTop: '20px',
});

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

const RechargeForm = () => {
  const [formValues, setFormValues] = useState({
    mobileNumber: '',
    operator: '',
    circle: '',
    amount: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors(prevState => ({
      ...prevState,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formValues.mobileNumber) errors.mobileNumber = 'Mobile number is required';
    if (!formValues.operator) errors.operator = 'Operator is required';
    if (!formValues.circle) errors.circle = 'Circle is required';
    if (!formValues.amount) errors.amount = 'Amount is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(formValues);
      // Perform the recharge action here
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <StyledPaper>
            <Typography variant="h5" gutterBottom>Prepaid Mobile Recharge</Typography>
            <StyledFormControl component="fieldset">
              <RadioGroup row>
                <FormControlLabel value="prepaid" control={<Radio />} label="Prepaid" />
                <FormControlLabel value="postpaid" control={<Radio />} label="Postpaid" />
              </RadioGroup>
            </StyledFormControl>
            <TextField 
              label="Enter Mobile Number"
              name="mobileNumber"
              value={formValues.mobileNumber}
              onChange={handleInputChange}
              fullWidth
              error={!!formErrors.mobileNumber}
              helperText={formErrors.mobileNumber}
              required
            />
            <TextField
              label="Select Operator"
              name="operator"
              value={formValues.operator}
              onChange={handleInputChange}
              fullWidth
              error={!!formErrors.operator}
              helperText={formErrors.operator}
              required
            />
            <TextField
              label="Choose Circle"
              name="circle"
              value={formValues.circle}
              onChange={handleInputChange}
              fullWidth
              error={!!formErrors.circle}
              helperText={formErrors.circle}
              required
            />
            <TextField
              label="Enter Amount"
              name="amount"
              type="number"
              value={formValues.amount}
              onChange={handleInputChange}
              fullWidth
              error={!!formErrors.amount}
              helperText={formErrors.amount}
              required
            />
            <StyledButton 
              variant="contained" 
              color="primary" 
              fullWidth 
              onClick={handleSubmit}
            >
              Proceed to Recharge
            </StyledButton>
          </StyledPaper>
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={6}>
            <ResponsiveImage  src={image2} alt="Mobile Recharge" />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default RechargeForm;
