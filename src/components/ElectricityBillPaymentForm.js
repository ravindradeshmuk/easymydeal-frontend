import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
//   Dialog,
//   DialogTitle,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  InputAdornment
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Import the arrow down icon
// import image5 from "../images/broadband image.jpg"
import image6 from "../images/electricity image.jpg"
import Popover from '@mui/material/Popover';
const ElectricityBillPaymentForm = () => {
  const [operator, setOperator] = useState('');
//   const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  // Dummy operator list
  const operators = [
    'Airtel', 'Spectra', 'Comway', 'ACT Fibernet', 'Hathway',
    // Add more operators here
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation checks here
    if (operator) {
      // After validation, navigate to payment page
      navigate('/payment-page'); // Replace '/payment-page' with the actual route
    }
  };

  const handleListItemClick = (value) => {
   
    setOperator(value);
    // setOpen(false);
    handleClose();
  };
  const handleTextFieldClick = (event) => {
    // Set the current text field as the anchor of the Popover
    setAnchorEl(event.currentTarget);
    // setOpen(true);
  };
  const handleClose = () => {
    // setOpen(false);
    setAnchorEl(null); // Reset the anchor element
  };

  return (
    <>
    <Grid container spacing={2} m={1}>
      <Grid item xs={12} md={6}>
        {/* Form part */}
        <Paper elevation={5} sx={{ padding: 3, mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              label="Search Operator"
              value={operator}
              onClick={handleTextFieldClick}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <KeyboardArrowDownIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Proceed to Pay Bill
            </Button>
          </form>
        </Paper>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >

        {/* Operator selection dialog */}
        {/* <Dialog onClose={() => setOpen(false)} open={open} sx={{ '& .MuiDialog-paper': { minWidth: '40%' } }}>
          <DialogTitle>Select an Operator</DialogTitle> */}
          <List sx={{ height: 200, overflow: 'auto' }}>
            {operators.map((op) => (
              <ListItem button onClick={() => handleListItemClick(op)} key={op}>
                <ListItemText primary={op} />
              </ListItem>
            ))}
          </List>
          
       
        {/* </Dialog> */}
        </Popover>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Image part */}
        <Paper elevation={3} sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', m: 2 }}>
          {/* Use the imported image */}
          <img src={image6} alt="Broadband Payment" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Paper>
      </Grid>
    </Grid>
    </>
  );
};

export default ElectricityBillPaymentForm;
