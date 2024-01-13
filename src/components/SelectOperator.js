// src/components/SelectOperator.js
import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import OperatorLogo from './OperatorLogo'; // This is a hypothetical component for logos

// You can replace this with the actual operators and their logos
const operators = [
  { name: 'Airtel', logo: 'logo-airtel.png' },
  { name: 'Jio', logo: 'logo-jio.png' },
  { name: 'Vi', logo: 'logo-vi.png' },
  // ...other operators
];

const SelectOperator = () => {
  // State for selected operator, if necessary
  // const [selectedOperator, setSelectedOperator] = React.useState(null);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Select an Operator
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {operators.map((operator, index) => (
          <Grid item key={index} xs={6} sm={4} md={2}>
            <Button
              // Uncomment and complete onClick to handle selection if necessary
              // onClick={() => setSelectedOperator(operator.name)}
              variant="outlined"
              startIcon={<OperatorLogo logo={operator.logo} />}
              // add styling here
            >
              {operator.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SelectOperator;


