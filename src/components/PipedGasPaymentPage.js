// ServicesPage.js

import React, { useState, useRef, useEffect } from 'react';
import OperatorSelectionGas from './OperatorSelectionGas.js';
import PipedGasPaymentForm from './PipedGasPaymentForm.js';
import {
  Grid,
  IconButton,
  Typography,
  Paper,
  Box,
} from '@mui/material';

import {
  BatteryChargingFull as RechargeIcon,
  Satellite as DthIcon,
  Router as BroadbandIcon,
  FlashOn as ElectricityIcon,
  LocalGasStation as PipedGasIcon,
  HealthAndSafety as InsuranceIcon,
  WaterDrop as WaterIcon,
  LocalParking as FastagIcon,
  Phone as PhoneIcon,
  LocalGasStation as LocalGasStationIcon,
  SimCard as SimCardIcon,
  CreditCard as CreditCardIcon,
  Subscriptions as SubscriptionsIcon,
  Cable as CableIcon,
  LocalHospital as LocalHospitalIcon,
  Apartment as ApartmentIcon,
  AccountBalance as AccountBalanceIcon,
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// ... Your icon imports
const services = [
  { icon: <RechargeIcon />, label: 'Recharge', path: '/recharge-bill-pay' },
  { icon: <DthIcon />, label: 'DTH', path: '/DTH-recharge-pay'},
  { icon: <BroadbandIcon />, label: 'Broadband',path: '/broadband-bill-pay' },
  { icon: <ElectricityIcon />, label: 'Electricity',path:'/Electricity-bill-pay' },
  { icon: <PipedGasIcon />, label: 'Piped Gas',path: '/piped-bill-pay'},
  { icon: <InsuranceIcon />, label: 'Insurance',path:"/insurance-bill-pay" },
  { icon: <WaterIcon />, label: 'Water',path:"/water-bill-pay"},
  { icon: <FastagIcon />, label: 'FasTag',path:"/fastag-bill-pay" },
];
const ServiceName = styled(Typography)({
  marginTop: 4, // Adjust the margin top
  fontSize: '0.75rem',
  color: 'blue',
  textAlign: 'center',
});

const ServicePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1),
}));

const ServicesWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  margin: 'auto',
  marginTop: '50px',
  width: '100%',
}));
const moreServices = [
  { icon: <PhoneIcon />, label: 'Landline',path:'/Landline-bill-pay'},
  { icon: <LocalGasStationIcon />, label: 'Book Cylinder',path:'/cylinder-bill-pay' },
  { icon: <SimCardIcon />, label: 'Data Card',path:'/data-bill-pay' },
  { icon: <CreditCardIcon />, label: 'Credit Card',path:'/credit-bill-pay' },
  { icon: <SubscriptionsIcon />, label: 'Subscription',path:'/subscription-bill-pay' },
  { icon: <CableIcon />, label: 'Cable',path:'/cable-bill-pay' },
  { icon: <LocalHospitalIcon />, label: 'Hospital',path:'/hospital-bill-pay' },
  { icon: <ApartmentIcon />, label: 'Housing Society',path:'/society-bill-pay' },
  { icon: <AccountBalanceIcon />, label: 'Municipal Services',path:'/municipal-bill-pay' },
];

const MoreServiceName = styled(ServiceName)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const IconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRedius:0,
  '& .MuiIconButton-root': {
    margin: theme.spacing(1),
    backgroundColor: 'white', // Set icon background to white
    width:'50%',
    borderRadius:"5px",
    boxShadow: theme.shadows[5], // Apply box shadow
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    },
  },
  '& .MuiTypography-root': {
    color: 'blue', // Set the color of the label
  },
}));




const RechargeBillPay= () => {
  const [showMoreServices, setShowMoreServices] = useState(false);
  const navigate = useNavigate();
  const moreRef = useRef(null);

  const toggleMoreServices = () => {
    setShowMoreServices(prev => !prev);
  };
   // Navigate to the more services page
  //  const navigateToMoreServices = () => {
  //   navigate('/more-services'); // This is the route for the More Services page
  // };


  const handleServiceClick = (path) => {
    if (path) {
      navigate(path);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setShowMoreServices(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <ServicesWrapper>
        <Paper  elevation={3} sx={{ padding: 1, backgroundColor: 'white', boxShadow: 5, }}>
          <Grid container>
            {services.map((service, index) => (
              <Grid item key={index}>
                <ServicePaper elevation={3}>
                  <IconButton onClick={() => handleServiceClick(service.path)}>
                    {service.icon}
                  </IconButton>
                </ServicePaper>
                <ServiceName>{service.label}</ServiceName>
              </Grid>
            ))}
            <Grid item>
              <ServicePaper elevation={3} ref={moreRef}>
                <IconButton onClick={toggleMoreServices}>
                  <MoreHorizIcon />
                </IconButton>
              </ServicePaper>
              <MoreServiceName>More</MoreServiceName>
            </Grid>
          </Grid>
        </Paper>
        {showMoreServices && (
        <Box
          sx={{
            position: 'absolute',
            left: 530, // Align with the left edge of the services grid
            right: 0, // Align with the right edge of the services grid
            top: '30%', // Position directly below the "More" button
            width:"38%",
            bgcolor: 'white', // Set the background color to white
              boxShadow: 5,
             borderRadius: 0, // Changed to 0 for a box shape
            p: 2,
            zIndex: 1000,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', // Adjust the number of columns based on your specific layout
            color:'blue',
            gap: 0.5,
          }}
          ref={moreRef}
        >
          {/* Map over your moreServices array to generate this grid */}
          {moreServices.map((service, index) => (
            <IconWrapper key={index}>
              <IconButton onClick={() => handleServiceClick(service.path)}>
                {service.icon}
              </IconButton>
              <Typography variant="caption" textAlign="center">
                {service.label}
              </Typography>
            </IconWrapper>
          ))}
        </Box>
      )}

    </ServicesWrapper>
    <PipedGasPaymentForm/>
      <OperatorSelectionGas onOperatorSelect={(path) => navigate(path)}/>
    </div>
  );
};

export default RechargeBillPay;



     
  
