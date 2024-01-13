// src/components/HowItWorks.js
import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const steps = [
  'Select your service',
  'Enter your details',
  'Confirm and pay',
  // Add more steps as needed
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          How It Works
        </Typography>
        <List>
          {steps.map((step, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary={step} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default HowItWorks;
