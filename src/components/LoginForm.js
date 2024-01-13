import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box
} from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
// import { useUser } from './UserContext'; // Import our custom hook

const LoginForm = ({ onLogin }) => {
  // const { setUser } = useUser(); // Use the setUser function from context
       
   const navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [contactType, setContactType] = useState('mobile');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);
// UserContext.js


  // const [userId, setUserId] = useState(null);
  const validateForm = () => {
  
    if (contactType === 'email' && !email.includes('@')) {
      setErrorMessage('Enter a valid email.');
      return false;
    }else if (contactType === 'mobile' && !/^\d{10}$/.test(mobile)) {
      setErrorMessage('Enter a valid 10-digit mobile number.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return false;
    }
    return true;
  };

  const authenticateUser = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    setErrorMessage('');
    let contactDetails = {};
    if (contactType === 'email') {
        contactDetails = { email: email, password: password };
    } else if (contactType === 'mobile') {
        contactDetails = { mobile: mobile, password: password };
    }
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact: contactDetails, contactType,password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
         setUser(data.user);
        //  handleLoginSuccess(response);
        // onUserChange(data.user); // Update user in the parent component
    
        localStorage.setItem('userInfo', JSON.stringify(data.user)); // Storing user info
        localStorage.setItem('token', data.token); // Storing the token
        // Clear the input fields
         onLogin(data.user); // Call onLogin here with the user data
      setEmail('');
      setMobile('');
      setPassword('');
             navigate('/pay-rent');
              if (data.token) {
          localStorage.setItem('token', data.token); // Storing the token
        }
        setErrorMessage('Login successful!');

        setTimeout(() => {
          navigate('pay-rent');
        }, 2000); // Redirect after 2 seconds
    
        // navigate('/PersonaInformation'); // Navigate to the next page
      } else {
        setErrorMessage(data.message || 'Authentication failed');
      }
    } catch (error) {
      setErrorMessage('Login request failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  // function handleLoginSuccess(response) {
  //   const userEmailAddress = response.data.email;
  //   console.log('Storing email:', userEmailAddress); // Add this line to debug
  //   localStorage.setItem('email', userEmailAddress);
  // }
  
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    authenticateUser();
    };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login to EaseMyDeal
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" fullWidth margin="normal">
          <FormLabel component="legend">Contact Type</FormLabel>
          <RadioGroup
            row
            aria-label="contact type"
            name="contactType"
            value={contactType}
            onChange={(e) => setContactType(e.target.value)}
          >
            <FormControlLabel value="mobile" control={<Radio/>} label="Mobile" />
            <FormControlLabel value="email" control={<Radio />} label="Email" />
          </RadioGroup>
        </FormControl>

       
      {contactType === 'email' ? (
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Box sx={{ mr: 1, width: '20%', backgroundColor:'white',boxShadow:3 }}>
            <TextField
              id="country-code"
              label="+91"
              variant="outlined"
              disabled
            />
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobile"
            label="Mobile Number"
            name="mobile"
            autoComplete="tel"
            autoFocus
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Box>
      )}

      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />


        {errorMessage && (
          <Typography color="error" variant="body2">
            {errorMessage}
          </Typography>
        )}

{user ? (
          <Button
            type="button"
            color="primary"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Logged in as {user.fullName}
          </Button>
        ) :(<Button style={{marginTop:'10px'}}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          disabled={isLoading}
          sx={{ mt: 2 }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        )}
        <div className="social-login">
          <Button style={{marginTop:'10px'}} fullWidth variant="contained" color="error" startIcon={<GoogleIcon />}>Continue with Google</Button>
          <Button style={{marginTop:'10px'}} fullWidth variant="contained" startIcon={<FacebookIcon />}>Continue with Facebook</Button>
        </div>

        <Typography variant="body2" style={{ marginTop: '1rem' }}>
          Don't have an account?{' '}
          <Link to="/pay-rent">Sign Up</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default LoginForm;

    


 