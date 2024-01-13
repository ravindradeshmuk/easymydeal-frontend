// src/components/InformationSection.js
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const InformationSection = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        Why to choose Easydeal for Recharge
      </Typography>
      <Typography variant="body1" gutterBottom>
        Easydeal is one of the best and most secure platforms for Prepaid Mobile Recharge. It provides excellent customer support on calls, emails, and WhatsApp. The main benefit to transact through Easydeal is that it never stores payment details with them. It provides qualitative services like 24/7 uptime, instant refunds, the lowest downtime, 99.9% success rate, long-term credibility, its interface is very smooth and user-friendly. One doesn’t worry about security issues while transacting through Easydeal; it never stores payment details with them which makes Easydeal a secured website.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" gutterBottom>
        How to pay Prepaid Recharge Online?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Easydeal ensures the course of action to pay Mobile Recharge Online. One must just need an internet connection to get Prepaid Mobile Recharge. Easydeal is available 24/7 to provide its services. Just follow below mentioned simple steps!
      </Typography>
      {/* You can continue to add more details or list the steps as needed */}
    </Box>
  );
};

export default InformationSection;
