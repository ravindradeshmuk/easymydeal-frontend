// src/components/OperatorLogo.js
import React from 'react';
import { Box } from '@mui/material';
// import airtelLogo from '../assets/logo-airtel.png';



const OperatorLogo = ({ logo }) => {
  // Assuming your webpack setup includes a file loader for images
  return <Box component="img" src={`/assets/${logo}`} alt="Operator logo" sx={{ width: '100%' }} />;
//   <Box component="img" src={airtelLogo} alt="Airtel logo" />


};

export default OperatorLogo;
