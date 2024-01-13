// src/components/HowToSection.js
import React from 'react';
import Grid from '@mui/material/Grid';
import HowToGuide from './HowToGuide';

const howToSteps = [
  {
    title: 'How can I recharge Online?',
    steps: [
      'Enter your Mobile Number.',
      'Select your Operator.',
      'Choose your Plan.',
      // ... other steps
    ],
  },
  // You can add more guides with their respective steps here
];

const HowToSection = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {howToSteps.map((guide, index) => (
        <Grid item key={index} xs={12} md={6}>
          <HowToGuide title={guide.title} steps={guide.steps} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HowToSection;
