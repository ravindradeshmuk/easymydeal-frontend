// src/pages/TransactionPage.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TransactionHistory from '../components/TransactionHistory';

// Example static data
const transactionsData = [
  { id: 1, amount: 50.0, date: '2023-01-01', description: 'Grocery Shopping' },
  { id: 2, amount: 75.0, date: '2023-01-05', description: 'Electronics' },
  // ... other transactions
];

const TransactionPage = () => {
  // This would be replaced with a real data fetching mechanism
  const transactions = transactionsData;

  return (
    <Container component="main" maxWidth="sm">
      <Typography component="h1" variant="h5">
        Transaction History
      </Typography>
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};

export default TransactionPage;
