import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Dialog, DialogContent, ListItemIcon, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import styled from '@emotion/styled';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


// Styled components
const StyledAppBar = styled(AppBar)({
  position: 'fixed',
  zIndex: 1200,
  width: '100%',
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Title = styled(Typography)({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
});

const UserName = styled('div')({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'black',
  padding: '5px 10px',
  borderRadius: '5px',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const StyledMenu = styled(Menu)({
  marginTop: '40px',
});

// Header component
const Header = () => {
  const [user, setUser] = useState(null);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const usernameRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleMenuOpen = () => {
    setAnchorEl(usernameRef.current);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginOpen = () => setLoginOpen(true);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleClose = () => {
    setLoginOpen(false);
    setSignupOpen(false);
  };

  const handleLogin = (userData) => {
    localStorage.setItem('userInfo', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    handleMenuClose();
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Title variant="h5" noWrap>
          EasyMyDeal
        </Title>
        {user ? (
          <>
            <UserName onMouseEnter={handleMenuOpen} ref={usernameRef}>
              <Avatar sx={{ width: 30, height: 30, marginRight: 1,}}></Avatar>
              <Typography variant="h6" color="inherit" noWrap>
                {user.fullName}
              </Typography>
            </UserName>
            <StyledMenu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
            >
              <MenuItem>
                <ListItemIcon>
                  <ProfileIcon />
                </ListItemIcon>
                View Profile
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                Order History
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SupportIcon />
                </ListItemIcon>
                Inditab Support
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                Logout
              </MenuItem>
            </StyledMenu>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={handleLoginOpen}>Login</Button>
            <Button color="inherit" onClick={handleSignupOpen}>Sign up</Button>
          </>
        )}
      </StyledToolbar>

      <Dialog open={isLoginOpen} onClose={handleClose} aria-labelledby="login-dialog-title" fullWidth maxWidth="sm">
        <DialogContent>
          <LoginForm onLogin={handleLogin} />
        </DialogContent>
      </Dialog>

      <Dialog open={isSignupOpen} onClose={handleClose} aria-labelledby="signup-dialog-title" fullWidth maxWidth="sm">
        <DialogContent>
          <SignupForm />
        </DialogContent>
      </Dialog>
    </StyledAppBar>
  );
};

export default Header;
