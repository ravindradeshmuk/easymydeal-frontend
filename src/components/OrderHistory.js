import React, { useState } from 'react';
import { Box, Button, Paper, Typography, Grid } from '@mui/material';

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState('recharge');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'recharge':
        return 'Recharge & Bill Content'; // Replace with actual content
      case 'rent':
        return 'Pay Rent & Bills Content'; // Replace with actual content
      case 'booking':
        return 'Other Bookings Content'; // Replace with actual content
      default:
        return 'Select a category';
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Order History
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant={activeTab === 'recharge' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleTabChange('recharge')}
            >
              Recharge & Bill
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={activeTab === 'rent' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleTabChange('rent')}
            >
              Pay Rent & Bills
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={activeTab === 'booking' ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleTabChange('booking')}
            >
              Other Bookings
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

export default OrderHistory;
