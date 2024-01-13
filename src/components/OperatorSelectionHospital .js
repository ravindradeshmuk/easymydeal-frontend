import React from 'react';
import { Grid, Card, Typography, Avatar } from '@mui/material';

const iconsData = [
  { name: 'Gujarat Gas Limited', identifier: 'G' },
  { name: 'Indraprastha Gas', identifier: 'I' },
  { name: 'Maharashtra Gas Co.', identifier: 'M' },
  { name: 'Delhi Gas Ltd', identifier: 'D' },
  // ... add other companies with their unique identifier
];
function getInitials(name) {
  return name.split(' ').map(word => word[0]).join('');
}

function  OperatorSelectionHospital() {
//   const handleIconClick = (name) => {
//      Placeholder for whatever you want to do when the icon is clicked
//     console.log(`Icon for ${name} clicked!`);
//   };
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 2 }}>
      {iconsData.map((icon, index) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
          <Card sx={{ p: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mb: 1 }}>
              {getInitials(icon.name)}
            </Avatar>
            <Typography variant="body2" sx={{ mt: 1 }}>{icon.name}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
export default OperatorSelectionHospital;
