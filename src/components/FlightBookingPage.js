import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Typography,
  IconButton
} from '@material-ui/core';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import PeopleIcon from '@material-ui/icons/People';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const FlightBooking = () => {
  const [tripType, setTripType] = useState('oneWay');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  return (
    <Box
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '700px',
        margin: 'auto',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
        Book a Flight ✈️
      </Typography>
      <RadioGroup
        row
        name="tripType"
        value={tripType}
        onChange={handleTripTypeChange}
        style={{ marginBottom: '16px' }}
      >
        <FormControlLabel
          value="oneWay"
          control={<Radio />}
          label="One Way"
        />
        <FormControlLabel
          value="roundTrip"
          control={<Radio />}
          label="Round Trip"
        />
      </RadioGroup>
      <Grid container spacing={2} alignItems="center">
        {/* Origin */}
        <Grid item xs={6}>
          <TextField
            label="Select Origin"
            variant="outlined"
            fullWidth
            value="New Delhi , DEL"
            InputProps={{
              startAdornment: (
                <IconButton position="start">
                  <FlightTakeoffIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        {/* Destination */}
        <Grid item xs={6}>
          <TextField
            label="Select Destination"
            variant="outlined"
            fullWidth
            value="Mumbai , BOM"
            InputProps={{
              startAdornment: (
                <IconButton position="start">
                  <FlightLandIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        {/* Departure Date */}
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              label="Departure"
              format="MM/dd/yyyy"
              value={departureDate}
              onChange={(date) => setDepartureDate(date)}
              fullWidth
              inputVariant="outlined"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        {/* Return Date (if round trip is selected) */}
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              label="Return"
              format="MM/dd/yyyy"
              value={returnDate}
              onChange={(date) => setReturnDate(date)}
              fullWidth
              inputVariant="outlined"
              disabled={tripType === 'oneWay'}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        {/* Travellers and Class */}
        <Grid item xs={6}>
          <TextField
            label="Travellers | Class"
            variant="outlined"
            fullWidth
            value="1 Person | All"
            InputProps={{
              startAdornment: (
                <IconButton position="start">
                  <PeopleIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        {/* Submit Button */}
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: '#f15a24' }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlightBooking;
