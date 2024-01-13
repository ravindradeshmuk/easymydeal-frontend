// src/components/FeatureHighlightsContainer.js
import React from 'react';
import Grid from '@mui/material/Grid';
import FeatureHighlight from './FeatureHighlight';

const features = [
  {
    title: 'GET A CHANCE TO WIN',
    description: '100% CASHBACK ON MOBILE RECHARGE (PREPAID/POSTPAID)'
  },
  // Add more features here
];

const FeatureHighlightsContainer = () => {
  return (
    <Grid container justifyContent="center">
      {features.map((feature, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <FeatureHighlight title={feature.title} description={feature.description} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeatureHighlightsContainer;
