import React, { useState } from 'react';
import { Box,Tab, Tabs } from '@mui/material';
import PersonalInformation from './PersonaInformation';
import OrderHistory from './OrderHistory';
import MyWallet from './MyWallet';
import DocumentKYCPage from './DocumentKYCPage';

// Dummy components for each tab content
// const PersonalInformationContent = () => <Typography>Personal Information Content</Typography>;
// const OrderHistoryContent = () => <Typography>Order History Content</Typography>;
// const MyWalletContent = () => <Typography>My Wallet Content</Typography>;

const ProfileTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };
  
  

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1,gap:10, borderColor: 'divider',mt:5 }}>
        <Tabs value={selectedTab} onChange={handleChangeTab} centered>
          <Tab label="Personal Information" />
          <Tab label="KYC Document" />
          <Tab label="Order History" />
          <Tab label="My Wallet" />
        </Tabs>
      </Box>
      <Box sx={{ p: 4 }}>
        {selectedTab === 0 &&  <PersonalInformation/>}
        {selectedTab === 1 &&  <DocumentKYCPage/>}
        {selectedTab === 2 && <OrderHistory/>}
        {selectedTab === 3 && <MyWallet />}
      </Box>
    </Box>
  );
};

export default ProfileTabs;
