// src/components/TransactionList.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// This mock data would be replaced by data fetched from your backend
const mockTransactions = [
  { id: 1, title: 'Mobile Recharge', amount: '-$50', date: '2023-03-01' },
  { id: 2, title: 'Electricity Bill', amount: '-$75', date: '2023-03-02' },
  // ...other transactions
];

const TransactionList = () => {
  return (
    <List>
      {mockTransactions.map((transaction) => (
        <React.Fragment key={transaction.id}>
          <ListItem>
            <ListItemText
              primary={transaction.title}
              secondary={`Amount: ${transaction.amount} Date: ${transaction.date}`}
            />
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default TransactionList;
