// src/components/FeatureHighlight.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const FeatureCard = styled(Card)(({ theme }) => ({
  // Apply your custom styles here
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
}));

const FeatureHighlight = ({ title, description }) => {
  return (
    <FeatureCard>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </FeatureCard>
  );
};

export default FeatureHighlight;
