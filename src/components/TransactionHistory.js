// src/components/TransactionHistory.js
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const TransactionHistory = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // This is where you would fetch the transaction data from the server
    // For now, we'll just use some dummy data
    const fetchTransactions = async () => {
      const response = await fetch(`/api/transactions?user=${userId}`);
      const data = await response.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, [userId]);

  if (transactions.length === 0) {
    return <Typography>No transactions found.</Typography>;
  }

  return (
    <List>
      {transactions.map((transaction, index) => (
        <React.Fragment key={transaction.id}>
          <ListItem>
            <ListItemText
              primary={`$${transaction.amount} - ${transaction.type}`}
              secondary={transaction.date}
            />
          </ListItem>
          {index < transactions.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default TransactionHistory;
