import React, { useState } from 'react';
import { Box, Button, Paper, Typography, Grid } from '@mui/material';

const MyWallet = () => {
  const [activeSection, setActiveSection] = useState('all');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'all':
        return 'All Transactions Content'; // Replace with actual content
      case 'easyCash':
        return 'EasyCash Content'; // Replace with actual content
      case 'giftCard':
        return 'Gift Card Content'; // Replace with actual content
      case 'cashback':
        return 'Cashback Points Content'; // Replace with actual content
      default:
        return 'No transactions found';
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3,width:"100%" }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          My Wallet
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant={activeSection === 'all' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSectionChange('all')}
            >
              All
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={activeSection === 'easyCash' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSectionChange('easyCash')}
            >
              EasyCash
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={activeSection === 'giftCard' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSectionChange('giftCard')}
            >
              Gift Card
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={activeSection === 'cashback' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSectionChange('cashback')}
            >
              Cashback Points
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1">{renderContent()}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default MyWallet;
