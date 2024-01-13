// src/components/WhyChooseUsSection.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const whyChooseUsPoints = [
  "It's one of the best and most secure platforms for Prepaid Mobile Recharge.",
  "It provides excellent customer support on calls, emails, and WhatsApp.",
  "The main benefit to transact through EasyMyDeal is that it never stores payment details with them.",
  // ... add more points
];

const WhyChooseUsSection = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Why to choose EasyMyDeal for Recharge
      </Typography>
      <List>
        {whyChooseUsPoints.map((point, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={point} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default WhyChooseUsSection;
