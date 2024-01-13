// src/components/ServiceGrid.js
import React from 'react';
import Grid from '@mui/material/Grid';
import ServiceCard from './ServiceCard';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import ReceiptIcon from '@mui/icons-material/Receipt';
// ... import other icons you need

const services = [
  { icon: <BatteryChargingFullIcon />, label: 'Recharge' },
  { icon: <ReceiptIcon />, label: 'Bill Pay' },
  // ... other services
];

const ServiceGrid = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {services.map((service, index) => (
        <Grid item key={index}>
          <ServiceCard icon={service.icon} label={service.label} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ServiceGrid;
