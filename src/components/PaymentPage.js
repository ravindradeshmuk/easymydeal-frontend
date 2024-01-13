// src/pages/PaymentPage.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PaymentForm from '../components/PaymentForm';

const PaymentPage = () => {
  const handlePaymentSubmit = (paymentData) => {
    // Here you would typically handle the submission to a backend service
    console.log('Payment Data:', paymentData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Make a Payment
      </Typography>
      <PaymentForm onSubmit={handlePaymentSubmit} />
    </Container>
  );
};

export default PaymentPage;
