import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
TextField,
  Button,
  Typography,
  Link,

} from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import './SignupForm.css';

const SignupForm = () => {

  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    fullName:'',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({
    fullName:'',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    general: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const BACKEND_URL = 'http://localhost:5000/api/auth/register'; // Adjust if necessary

  const handleSignup = async (signupData) => {
     console.log(signupData);
    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
      const data = await response.json();
      if (response.ok) {
        setFormData({
          fullName:'',
          email: '',
          mobile: '',
          password: '',
          confirmPassword: '',
        });
       
        setError({});
        setSuccessMessage('Signup successful! Please check your email to verify your account.'); // Set success message
        navigate('/LoginForm');
       
      }else {
        setError(prevError => ({ ...prevError, general: data.message || 'Signup failed' }));
      }
    } catch (error) {
      setError(prevError => ({ ...prevError, general: ' ' }));
    }
  };

  // ... Rest of your component including form validation, handleChange, etc.



  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSignup({ fullName:formData.fullName, email: formData.email, mobile: formData.mobile, password: formData.password });
    }
  };
  const handleGoogleSignup = () => {
    // Implement Google Signup logic here
    console.log('Signup with Google');
  };

  const handleFacebookSignup = () => {
    // Implement Facebook Signup logic here
    console.log('Signup with Facebook');
  };


  const validateForm = () => {
    let isValid = true;
    let errors = {};
    if (!formData.fullName || formData.fullName.split(' ').length < 2) {
      errors.fullName = 'Please enter your full name.';
      isValid = false;
    }
    if (!formData.email.includes('@')) {
      errors.email = 'Enter a valid email.';
      isValid = false;
    }

    if (formData.mobile.length < 10) {
      errors.mobile = 'Enter a valid mobile number.';
      isValid = false;
    }

    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match.';
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  

  return (
    
    <Container component="main" maxWidth="xs" className="signup-page-container">
      <Typography component="h1" variant="h5">
        Sign up to EaseMyDeal
      </Typography>
      {error.general && <div style={{color:'red'}}>{error.general}</div>}
      <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Full Name"
        name="fullName"
        autoComplete="fullName"
        autoFocus
        value={formData.fullName}
        onChange={handleChange}
        error={!!error.fullName}
        helperText={error.fullName}
      />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={formData.email}
          onChange={handleChange}
          error={!!error.email}
          helperText={error.email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Mobile Number"
          name="mobile"
          autoComplete="tel"
          value={formData.mobile}
          onChange={handleChange}
          error={!!error.mobile}
          helperText={error.mobile}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
          error={!!error.password}
          helperText={error.password}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!error.confirmPassword}
          helperText={error.confirmPassword}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit-button"
        >
          Sign Up
        </Button>
      </form>
      
    <Button
      startIcon={<GoogleIcon />}
      fullWidth
      variant="contained"
      color="error"
      className="google-button"
      onClick={handleGoogleSignup}
    >
      Continue with Google
    </Button>
    <Button
      startIcon={<FacebookIcon />}
      fullWidth
      variant="contained"
      className="facebook-button"
      onClick={handleFacebookSignup}
    >
      Continue with Facebook
    </Button>
      <Typography variant="body2" className="login-link">
        Already have an account?{' '}
        <Link href="#" variant="body2">
          Login
        </Link>
      </Typography>
    </Container>
  );
};

export default SignupForm;
