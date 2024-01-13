// src/components/HowToGuide.js
import React from 'react';
import {Container, Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const steps = [
  {
    text: 'Visit our website and go to the prepaid mobile number recharge section.'
  },
  {
    text: 'Enter your prepaid mobile number.'
  },
  {
    text: 'Select your operator.'
  },
  {
    text: 'Choose the plan.'
  },
  {
    text: 'Enter the amount to pay the bill.'
  },
  {
    text: 'Choose your payment method and pay the bill.'
  },
  // Add additional steps as needed
];

const HowToGuide = () => {
  return (
    <Container component="section" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        How to Recharge Online?
      </Typography>
      <List>
        {steps.map((step, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={step.text} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default HowToGuide;
