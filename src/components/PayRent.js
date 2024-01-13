import React, { useState } from 'react';
import {
  Box, Grid, Paper, TextField, Button, Radio, RadioGroup,
  FormControlLabel, FormControl, Typography,  useMediaQuery, useTheme,  Menu, MenuItem,
  ListItemIcon
} from '@mui/material';
import { styled } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
import CreditCardInfo from './CreditCardInfo';
import image1 from '../images/bbps.jpg';
import { useNavigate } from 'react-router-dom'; // If you're using React Router v6, replace this with useNavigate


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(5),
  textAlign: 'center',
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));
// Styled components


const PayRent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPaymentType, setSelectedPaymentType] = useState('');
  const open = Boolean(anchorEl);


  const [amount, setAmount] = useState(''); // State to hold the amount
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
 // Include this line
    bankAccountNo: '',
    ifscCode: '',
    accountHolderName: '',
    amount:'10',
  });
  const [errors, setErrors] = useState({});
   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
    // Reset errors as the user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Assuming the user's email is stored in local storage
     

         // Retrieve 'userInfo' from local storage
    const userInfoString = localStorage.getItem('userInfo');
    console.log('Retrieved userInfo:', userInfoString); // Debugging line

    // Parse the JSON string to get the userInfo object
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    console.log('Parsed userInfo object:', userInfo); // Debugging line

    // Extract the email from the userInfo object
    const email = userInfo ? userInfo.email : null;
    console.log('Extracted email:', email); // Debugging line

    if (!selectedPaymentType || !email) {
      console.error('User email not found');
      // Handle the case where the email is not found
      return;
      
    }
      const dataToSend = {
        ...paymentDetails,
        amount,
        selectedPaymentType, // Include this line
        email, // Add user email to the payment details
      };

      axios.post('http://localhost:5000/api/payment/submit', dataToSend)
        .then(response => {
          console.log('Payment submitted:', response.data);
          // alert('Your payment has been processed successfully!')
          // navigate('/paynow', { state: { paymentDetails: response.data } });
          navigate(`/paynow/${response.data.orderNumber}`);
          // Handle successful submission (e.g., showing a success message)
        })
        .catch(error => {
          console.error('Error submitting payment:', error);
          // Handle submission error (e.g., showing an error message)
        });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!paymentDetails.bankAccountNo) tempErrors.bankAccountNo = 'Bank account number is required';
    if (!paymentDetails.ifscCode) tempErrors.ifscCode = 'IFSC code is required';
    if (!paymentDetails.accountHolderName) tempErrors.accountHolderName = 'Account holder name is required';
    if (!paymentDetails.amount) tempErrors.amount = 'Amount is required';
    if (!selectedPaymentType) tempErrors.selectedPaymentType = 'Payment type is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  
  const handlePaymentTypeClick = (event) => {
    setAnchorEl(event.currentTarget);
  
  };
 
  const handlePaymentTypeClose = () => {
    setAnchorEl(null);
  };
  const handlePaymentTypeSelect = ( type) => {
    setSelectedPaymentType(type);
    handlePaymentTypeClose();
  };
  // const handleAmountChange = (event) => {
  //   setAmount(event.target.value); // Update the amount state when the input changes
  // };
  // ... handleInputChange, handleSubmit, validateForm functions ...
  // const handlePaymentTypeChange = (type) => {
  //   setSelectedPaymentType(type);
  // };


  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={isSmallScreen ? 12 : 6}>
     <StyledPaper>
            <Typography variant="h5" gutterBottom>Pay Rent</Typography>
            <Grid item xs={6} md={12} container alignItems="flex-start" justifyContent="flex-end">
                <Button
                  aria-controls="payment-type-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handlePaymentTypeClick}
                  endIcon={<MoreVertIcon />}
                  size="small"
                >
                  {selectedPaymentType || 'select payment type'}
                </Button>
                <Menu
                  id="payment-type-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handlePaymentTypeClose}
                >
                  {['Tuition fee', 'House Rent', 'Vendor Pay', 'Office/Shop Rent', 'School/College fees','Society Maintenance','Property Token','Property Deposit','Brokerage','Utility Payment'].map((option) => (
                    <MenuItem
                    key={option}
                    selected={option === selectedPaymentType}
                    onClick={() => handlePaymentTypeSelect(option)}
                  >
                    {option === selectedPaymentType && (
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                    )}
                    {option}
                  </MenuItem>
                  ))}
                </Menu>
              </Grid>
          <StyledFormControl component="fieldset" fullWidth>
          <RadioGroup
  row
  name="paymentType"
  value={selectedPaymentType} // Use selectedPaymentType here
  onChange={(e) => setSelectedPaymentType(e.target.value)} // Update the state directly
>
               
            </RadioGroup>
            <FormControlLabel value="bank" control={<Radio />} label="To Bank A/C" />
            </StyledFormControl>
            <TextField
              label="Bank Account no"
              name="bankAccountNo"
              required
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              value={paymentDetails.bankAccountNo}
              error={!!errors.bankAccountNo}
              helperText={errors.bankAccountNo || ''}
            />
            <TextField
              label="IFSC Code"
              name="ifscCode"
              required
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              value={paymentDetails.ifscCode}
              error={!!errors.ifscCode}
              helperText={errors.ifscCode || ''}
            />
            <TextField
              label="Account Holder Name"
              name="accountHolderName"
              required
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              value={paymentDetails.accountHolderName}
              error={!!errors.accountHolderName}
              helperText={errors.accountHolderName || ''}
            />
           <TextField
  label="Enter Amount"
  name="amount"
  type="number"
  required
  fullWidth
  margin="normal"
  onChange={(e) => setAmount(e.target.value)} // Use setAmount here
  value={amount} // Use amount here
  error={!!errors.amount}
  helperText={errors.amount || ''}
/>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              sx={{ mt: 2 }}
            >
              Proceed
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              By proceeding, you agree to Terms & Conditions
            </Typography>
            
          </StyledPaper>
        </Grid>
         {/* Payment Type List */}
        
  {/* Promo Grid Item */}
        {!isSmallScreen && (
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Pay Rent & win Scratch Card Upto Rs 100 Cashback
              </Typography>
              <img
                src={image1}
                alt="Cashback Promotion"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              
            </StyledPaper>
            
          </Grid>
          
        )}
      </Grid>
      <CreditCardInfo/>
    </Box>
  );
};

export default PayRent;
