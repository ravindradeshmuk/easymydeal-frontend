// src/components/PaymentForm.js
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from '@mui/material';

const PaymentForm = ({ onSubmit }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    amount: '',
    method: '',
    details: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(paymentDetails);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Payment Details</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Amount"
                name="amount"
                type="number"
                fullWidth
                value={paymentDetails.amount}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Method</InputLabel>
                <Select
                  name="method"
                  value={paymentDetails.method}
                  label="Method"
                  onChange={handleInputChange}
                >
                  <MenuItem value="creditCard">Credit Card</MenuItem>
                  <MenuItem value="debitCard">Debit Card</MenuItem>
                  <MenuItem value="paypal">PayPal</MenuItem>
                  <MenuItem value="wallet">Mobile Wallet</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Details"
                name="details"
                type="text"
                fullWidth
                value={paymentDetails.details}
                onChange={handleInputChange}
                placeholder="Card number/Wallet ID"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Payment
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
