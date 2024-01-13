// src/components/UserProfile.js
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { deepOrange } from '@mui/material/colors';

const UserProfile = ({ user }) => {
  // If user is undefined, return null or some placeholder component instead
  if (!user) {
    // You can return null or some placeholder indicating the user info is not available
    return <Typography variant="body1">User information is not available.</Typography>;
  }

  const userInitials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
      }}
    >
      <Avatar
        sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}
        alt={user.name}
        src={user.profilePicture || ''}
      >
        {!user.profilePicture && userInitials}
      </Avatar>
      <Typography variant="h6" color="text.primary" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {user.email}
      </Typography>
      <Button variant="text" color="primary">
        Edit Profile
      </Button>
      <Button variant="text" color="secondary">
        Log Out
      </Button>
    </Box>
  );
};

export default UserProfile;
