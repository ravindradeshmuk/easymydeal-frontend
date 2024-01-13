// src/components/HeroSection.js
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
// import PhoneMockupImage from '../assets/phone-mockup.png'; // Replace with path to your image

const HeroSection = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item md={6} xs={12}>
          <Typography variant="h3" component="h1" gutterBottom>
            GET A CHANCE TO WIN
          </Typography>
          <Typography variant="h2" color="secondary" gutterBottom>
            100% CASHBACK
          </Typography>
          <Typography paragraph>
            ON MOBILE RECHARGE (PREPAID/POSTPAID)
          </Typography>
          <Button variant="contained" color="primary" size="large">
            RECHARGE NOW
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            component="img"
            sx={{
              height: 'auto',
              width: '100%',
              maxWidth: 360,
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            // src={PhoneMockupImage}
            alt="Phone mockup"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
