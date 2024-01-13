import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  InputAdornment,
  Popover
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import image5 from "../images/broadband image.jpg";

const PipedGasPaymentForm = () => {
  const [operator, setOperator] = useState('');
  const [id, setId] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const operators = ['Airtel', 'Spectra', 'Comway', 'ACT Fibernet', 'Hathway'];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted", { operator, id }); // Debugging line
    if (operator && id) {
      navigate('/payment-page');
    } else {
      console.log("Missing operator or ID"); // Debugging line
    }
  };

  const handleListItemClick = (value) => {
    setOperator(value);
    handleClose();
  };

  const handleTextFieldClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2} m={1}>
      <Grid item xs={12} md={6}>
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
            {operator && (
              <TextField
                required
                fullWidth
                label="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                sx={{ mt: 2 }}
              />
            )}
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
          <List sx={{ height: 200, overflow: 'auto' }}>
            {operators.map((op) => (
              <ListItem button onClick={() => handleListItemClick(op)} key={op}>
                <ListItemText primary={op} />
              </ListItem>
            ))}
          </List>
        </Popover>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', m: 2 }}>
          <img src={image5} alt="Broadband Payment" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PipedGasPaymentForm;
