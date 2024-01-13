// src/components/PromoBanner.js
import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';

const PromoBanner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: 'secondary.main',
        color: 'white',
        display: 'flex',
        flexDirection: matches ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2
      }}
    >
      <Box>
        <Typography variant="h5" component="div">
          GET A CHANCE TO WIN
        </Typography>
        <Typography variant="h4" component="div" fontWeight="bold">
          100% CASHBACK
        </Typography>
        <Typography variant="body1">
          ON MOBILE RECHARGE (PREPAID/POSTPAID)
        </Typography>
      </Box>
      <Button variant="contained" color="primary">
        RECHARGE NOW
      </Button>
    </Box>
  );
};

export default PromoBanner;
