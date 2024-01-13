// src/components/ServiceInfo.js
import React from 'react';
import {  Typography, Paper } from '@mui/material';

const ServiceInfo = () => {
  return (
    <Paper elevation={1} sx={{ p: 2, my: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Why to choose EasyMyDeal for Recharge
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        EasyMyDeal is one of the best and most secure platforms for Prepaid Mobile Recharge. It...
      </Typography>
      {/* ... other text elements */}
    </Paper>
  );
};

export default ServiceInfo;
