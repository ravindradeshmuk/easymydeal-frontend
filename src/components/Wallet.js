import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import ProfileTabs from './ProfileTabs';


const Wallet = () => {
  const [balance, setBalance] = useState({
    totalBalance: 0,
    easyCash: 0,
    giftCard: 0,
    cashbackPoints: 0,
  });

  useEffect(() => {
    // Fetch balance from backend on component mount
    const fetchBalance = async () => {
      try {
        const response = await fetch('/api/wallet/balance');
        const data = await response.json();
        if (response.ok) {
          setBalance(data);
        } else {
          throw new Error('Failed to fetch balance');
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, mt:7 }}>
      <Paper elevation={3} sx={{ p: 2, backgroundColor: "#BBDEFB" }}> {/* Added custom background color */}
        <Typography variant="h6">₹ {balance.totalBalance}</Typography>
        <Typography variant="subtitle1">Total Balance</Typography>
      </Paper>
      
      <Grid container spacing={2} mt={2}>
        {/* Other balance items */}
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">{balance.easyCash}</Typography>
            <Typography variant="subtitle1">EasyCash</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">{balance.giftCard}</Typography>
            <Typography variant="subtitle1">Gift Card</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">{balance.cashbackPoints}</Typography>
            <Typography variant="subtitle1">Cashback Points</Typography>
          </Paper>
        </Grid>
      </Grid>
     <ProfileTabs/>
    </Box>
    
  );
};

export default Wallet;
