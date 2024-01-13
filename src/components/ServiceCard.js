// src/components/ServiceCard.js
import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const ServiceCard = ({ icon, label }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        <CardContent sx={{ textAlign: 'center' }}>
          {icon}
          <Typography gutterBottom variant="h6" component="div">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
