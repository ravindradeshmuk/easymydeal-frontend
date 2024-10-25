import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
// import PaymentIcon from '@mui/icons-material/Payment';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FlightIcon from '@mui/icons-material/Flight';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// Define your SidebarContainer with styled
const SidebarContainer = styled('div')({
  width: '250px', // adjust width as needed
  height: '100vh',
  backgroundColor: '#fff',
  boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
 color:"blue",
  position: 'absolute',
  zindex:"1",
  borderRadius:"10px",
  top: '70px', // Again, this should be the height of your header.
  left: "20px",
  right:0,
  margin: 0,
//   zIndex: 1200,
  // padding: '10px 0', // Uncomment if padding is needed
});

// Define a styled Link component
const StyledLink = styled(Link)({
  textDecoration: 'none', // Removes the underline from all links
  color: 'inherit', // Inherits the text color from the parent
  display: 'block',

});

const Sidebar = () => {
  return (
    <SidebarContainer>
      <List component="nav">
      <StyledLink to="/pay-rent">
        <ListItem>
      <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Pay Rent" />
         </ListItem>
        </StyledLink>
        <Divider />
        <StyledLink to="/recharge-bill-pay">
        <ListItem>
          <ListItemIcon><CreditCardIcon /></ListItemIcon>
          <ListItemText primary="Recharge and Bill Pay" />
          </ListItem>
        </StyledLink>
        <Divider />
        <StyledLink to="/pay-rent">
        <ListItem>
          <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
          <ListItemText primary="Digi Gold" />
          <Divider />
        </ListItem>
        </StyledLink>
        <Divider />
        <StyledLink to="/pay-rent">
        <ListItem>
          <ListItemIcon>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary="Gift Card" />
        </ListItem>
        </StyledLink>
        <Divider />
        <StyledLink to="/flight-booking">
        <ListItem>
          <ListItemIcon>
            <FlightIcon />
          </ListItemIcon>
          <ListItemText primary="Flight Booking" />
        </ListItem>
        </StyledLink>
        <Divider />
        <StyledLink to="/pay-rent">
        <ListItem>
          <ListItemIcon>
            <BeachAccessIcon />
          </ListItemIcon>
          <ListItemText primary="Holiday Packages" />
        </ListItem>
        </StyledLink>
        <Divider />
        <StyledLink to="/pay-rent">
        <ListItem>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Add Money" />
        </ListItem>
        </StyledLink>
        <Divider />
        <StyledLink to="/pay-rent">
        <ListItem>
          <ListItemIcon>
            <ImportContactsIcon />
          </ListItemIcon>
          <ListItemText primary="Blogs" />
        </ListItem>
        </StyledLink>
        <Divider />
        <StyledLink to="/my-wallet">
        <ListItem>
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary="My Wallet" />
        </ListItem>
         </StyledLink>
        <Divider />
        <StyledLink to="/my-wallet">
        <ListItem>
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Help and Support" />
        </ListItem>
        </StyledLink>
        {/* ... repeat for each menu item */}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
