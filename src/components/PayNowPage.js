import React, { useState, useEffect } from 'react';
import { 
  Button, Card, CardActionArea, CardContent, Grid, Typography, 
  Box, makeStyles, Radio, FormControlLabel 
} from '@material-ui/core';
import axios from 'axios';
import HomeIcon from '@material-ui/icons/Home';
import {  useParams } from 'react-router-dom'; 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(10),
  },
  transferOption: {
    margin: theme.spacing(1),
    boxShadow: theme.shadows[3],
    cursor: 'pointer',
  },
  paymentMethod: {
    margin: theme.spacing(1),
    display: 'block',
    width: '100%',
  },
  payNowButton: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
  },
  amountBox: {
    padding: theme.spacing(2),
    boxShadow: theme.shadows[3],
    marginBottom: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    
  },
  amountDetail: {
    fontWeight: 'bold',
  },
  serviceTypeContainer: {
    display: 'flex',
    // flexDirection:'column',
    justifyContent: 'space-between',
     alignItems: 'center',
    padding: theme.spacing(1),
  },
  icon: {
   
    marginRight: theme.spacing(0),
    color: theme.palette.primary.main,
  },
  
 
  houseRentAmount: {
    // position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
  },
  amountDetailsGrid: {
    position: 'relative', // To position the houseRentAmount absolutely within this Grid
  },
}));

const PaymentPage = () => {
  // const location = useLocation();
  const classes = useStyles();
  const { orderNumber } = useParams();
  console.log(orderNumber);
  const [selectedTransfer, setSelectedTransfer] = useState('quick');
  const [selectedPayment, setSelectedPayment] = useState('creditCard');
  const [paymentDetails, setPaymentDetails] = useState({
    orderNumber: '',
    selectedPaymentType: '',
    amount: 0,
  });
  
   // Function to format numbers with two decimal places
   
   const baseTransferOptions = [
    { id: 'quick', title: 'Quick Transfer', creditCardFee: 1.5, otherFee: 2.5, specialFee: 3.0 },
    { id: 'lazy', title: 'Lazy Transfer', creditCardFee: 1.4, otherFee: 2.3, specialFee: 2.5 },
    { id: 'slow', title: 'Slow Transfer', creditCardFee: 1.3, otherFee: 2.0, specialFee: 2.3 },
    // ... other options ...
  ];
  const [transferOptions, setTransferOptions] = useState(baseTransferOptions);
  const calculateFees = (amount, transferType, paymentMethod) => {
    const selectedOption = baseTransferOptions.find(option => option.id === transferType);
    
    if (!selectedOption) {
      console.error("Selected transfer option not found");
      return { transactionCharges: 0, GST: 0, totalAmount: 0 };
    }
  
    let feePercentage;
    switch (paymentMethod) {
      case 'creditCard':
        feePercentage = selectedOption.creditCardFee;
        break;
      case 'netBanking':
      case 'BAY NOW':
        feePercentage = selectedOption.specialFee;
        break;
      case 'wallets':
      case 'prepaidCard':
        feePercentage = selectedOption.otherFee;
        break;
      default:
        feePercentage = selectedOption.otherFee;
    }
  
    let transactionCharges = amount * (feePercentage / 100);
    let GST = transactionCharges * 0.18;
    let totalAmount = amount + transactionCharges + GST;
  
    return { transactionCharges, GST, totalAmount };
  };
  
  

   useEffect(() => {
   
      const fetchPaymentDetails = async (orderNumber) => {
        try {
          const response = await axios.get(`http://localhost:5000/api/payment/updatePayment/${orderNumber}`);
          if (response.data.error) {
            console.error('Error fetching payment details:', response.data.error);
          }
          if (response.data && response.data.amount) {
            const selectedOption = transferOptions.find(option => option.id === selectedTransfer);
      if (selectedOption) {
            const fees = calculateFees(response.data.amount, selectedTransfer, selectedPayment);
            setPaymentDetails({
              ...response.data,
              baseTransferOptions: selectedOption.id, // Assuming you need the option ID
              title: selectedOption.title,
              otherFee: selectedOption.otherFee,
              transactionCharges: fees.transactionCharges,
              GST: fees.GST,
              totalAmount: fees.totalAmount,
            });
          }
        }
        } catch (error) {
          console.error('Error fetching payment details:', error);
        }
      }
      if (orderNumber) {
        fetchPaymentDetails(orderNumber);
      }
    }, [orderNumber, selectedTransfer, selectedPayment]);
   
   
    const updatePaymentDetails = async () => {
      const newData = {
        newDate: new Date().toISOString(),
        baseTransferOptions: paymentDetails.baseTransferOptions,
        title: paymentDetails.title,
        otherFee: paymentDetails.otherFee,
        transactionCharges: paymentDetails.transactionCharges,
        GST: paymentDetails.GST,
        totalPayableAmount: paymentDetails.totalAmount
      };
    
      const payload = {
        orderNumber: paymentDetails.orderNumber,
        newData
      };
    
      try {
        const response = await fetch('http://localhost:5000/api/payment/updatePaymentDate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log('Success:', data);
    
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    
    
  // Ensure to add orderNumber as a dependency
  
  const handlePayNowClick = () => {
    const orderNumber = 'your-order-number'; // Replace with actual order number
    const newDate = new Date().toISOString(); // Convert date to ISO string

    // Assuming these values are coming from the state or form inputs
    // Replace the placeholder values with actual data or logic to handle empty inputs
    const baseTransferOptions = ''; // Replace with actual data or logic
    const title = ''; // Replace with actual data or logic
    const otherFee = 0; // Replace with actual numerical value or logic
    const transactionCharges = 0; // Replace with actual numerical value or logic
    const GST = 0; // Replace with actual numerical value or logic
    const totalPayableAmount = 0; // Replace with actual numerical value or logic

    // Call the function to update the payment details
    updatePaymentDetails(orderNumber, newDate, baseTransferOptions, title, otherFee, transactionCharges, GST, totalPayableAmount);
};

 


  // const handleTransferChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedTransfer(value);
  //   let transactionCharges = amountDetails.rentAmount * (value === 'quick' ? 0.015 : value === 'lazy' ? 0.014 : 0.013);
  //   let GST = transactionCharges * 0.18;
  //   let totalAmount = amountDetails.rentAmount + transactionCharges + GST;

  //   setAmountDetails({ rentAmount: amountDetails.rentAmount, transactionCharges, GST, totalAmount });
  // };
 
  // const handlePaymentSelect = (method) => {
  //   setSelectedPayment(method);
  
  //   // Calculate the transaction charges based on the selected payment method
  //   let transactionCharges = 0;
  //   if (method === 'creditCard') {
  //     // Keep the existing logic for the credit card if there's any specific condition
  //   } else if (['prepaidCard', 'wallets'].includes(method)) {
  //     // Apply a 2% transaction charge for prepaid cards and wallets
  //     transactionCharges = amountDetails.rentAmount * 0.02;
  //   }
  
  //   // Calculate GST on the transaction charges
  //   let GST = transactionCharges * 0.18;
  //   let totalAmount = amountDetails.rentAmount + transactionCharges + GST;
  
  //   // Update the state with the new transaction charges
  //   setAmountDetails({ ...amountDetails, transactionCharges, GST, totalAmount });
  // };
   // Define the base fees for each transfer option
  
 
 
  

  // const handlePaymentSelect = (method) => {
  //   setSelectedPayment(method);
  
  //   const updatedOptions = transferOptions.map(option => {
  //     let newFee;
  //     switch (method) {
  //       case 'creditCard':
  //         newFee = option.creditCardFee;
  //         break;
  //       case 'netBanking':
  //         newFee = option.specialFee; // Assuming specialFee applies to netBanking
  //         break;
  //       case 'wallets':
  //         newFee = option.otherFee; // Fee for wallets
  //         break;
  //       case 'prepaidCard':
  //         newFee = option.otherFee; // Fee for prepaid cards
  //         break;
  //       // ... other cases for different payment methods ...
  //       default:
  //         newFee = option.otherFee; // Default fee if no payment method matches
  //     }
      
  //     return { ...option, currentFee: newFee };
  //   });
  
  //   setTransferOptions(updatedOptions);
  //   calculateFees(method, selectedTransfer); // Recalculate fees with updated transfer options
  // };
  

  // const handlePaymentSelect = (method) => {
  //   setSelectedPayment(method);
    
  //   const updatedOptions = transferOptions.map(option => {
  //     // ... logic to update options ...
  //   });
  
  //   setTransferOptions(updatedOptions);
  //   // Don't directly call calculateFees here; let useEffect handle it
  // };
  
  // Remove the direct call to calculateFees and setAmountDetails from the main body of the component
  
  // const handleTransferChange = (optionId) => {
  //   setSelectedTransfer(optionId);
  //   calculateFees(selectedPayment, optionId);
  // };

  // const handleTransferChange = (optionId) => {
  //   setSelectedTransfer(optionId);
  //   calculateFees(optionId);
  // };

  // ... rest of your component ...




  const paymentMethods = [
    { id: 'creditCard', label: 'Credit Card-Master  /VISA' },
    { id: 'prepaidCard', label: 'Amex / Dinners / Prepaid card' },
    { id: 'wallets', label: 'Wallets' },
    { id: 'netBanking', label: 'Credit card - EMI' },
    { id: 'BAY NOW', label: 'BNPL - Buy now pay later' },
  ];
 
  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
    
    // Update the currentFee for each transfer option based on the selected payment method
    const updatedTransferOptions = transferOptions.map(option => {
      let newFee;
      switch (method) {
        case 'creditCard':
          newFee = option.creditCardFee;
          break;
        case 'prepaidCard':
          newFee = option.otherFee; // Assuming a different fee structure for prepaid cards
          break;
        case 'wallets':
          newFee = option.otherFee; // Assuming a different fee structure for wallets
          break;
        case 'netBanking':
          newFee = option.specialFee; // Special fee for net banking
          break;
        case 'BAY NOW':
          newFee = option.specialFee; // Assuming a special fee for Buy Now Pay Later
          break;
        // Add more cases if there are other payment methods
        default:
          newFee = option.otherFee; // Default fee if no payment method matches
      }
      return { ...option, currentFee: newFee };
    });
    setTransferOptions(updatedTransferOptions);
  
    // Calculate the fees based on the selected transfer option and payment method
    const fees = calculateFees(paymentDetails.amount, selectedTransfer, method);
    setPaymentDetails(prevState => ({ ...prevState, ...fees }));
  };
  
  
  const handleTransferChange = ( event,optionId) => {
    const id = optionId || event.target.value;
    setSelectedTransfer(id);
    
    // Find the selected transfer option
    const selectedOption = transferOptions.find(option => option.id === optionId);
    if (!selectedOption) {
      console.error("Selected transfer option not found");
      return;
    }
   
    // Update the fees based on the selected transfer option
    let feePercentage;
    switch (selectedPayment) {
      case 'creditCard':
        feePercentage = selectedOption.creditCardFee;
        break;
      case 'prepaidCard':
      case 'wallets':
        feePercentage = selectedOption.otherFee;
        break;
      case 'netBanking':
      case 'BAY NOW':
        feePercentage = selectedOption.specialFee;
        break;
      default:
        feePercentage = selectedOption.otherFee; // Default fee if no payment method matches
    }
  
    const fees = calculateFees(paymentDetails.amount, feePercentage);
    setPaymentDetails(prevState => ({ ...prevState, ...fees }));
  };
  
  
  // const handlePaymentSelect = (method) => {
  //   setSelectedPayment(method);
  //   const { rentAmount } = amountDetails;
  //   const fees = calculateFees(rentAmount, selectedTransfer, method);
  //   setAmountDetails({ ...amountDetails, ...fees });
  // };
  const formatCurrency = (num) => {
    return typeof num === 'number' ? num.toFixed(2) : '0.00';
  };

 
// const handlePaymentSelect = (method) => {
//   setSelectedPayment(method);
//   calculateFees(method, selectedTransfer);
//   setTransferOptions(updatedOptions);
// };


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* Transfer Options */}
        <Grid item xs={12}>
        <Grid container spacing={2}>
        {transferOptions.map((option) => (
  <Grid item xs={4} key={option.id}>
    <Card className={classes.transferOption}>
      <CardActionArea component="div" onClick={() => handleTransferChange(null,option.id)}>
        <CardContent>
          <Typography variant="h5">{option.title}</Typography>
          <Typography variant="body2">{option.currentFee}% Fee</Typography>
        </CardContent>
      </CardActionArea>
      <FormControlLabel
        control={
          <Radio
            checked={selectedTransfer === option.id}
            onChange={(e) => handleTransferChange(e, option.id)}
            value={option.id}
          />
        }
        label=""
      />
    </Card>
  </Grid>
))}

        </Grid>
      </Grid>

        

        {/* Payment Methods */}
        <Grid item xs={6}>
  {paymentMethods.map((method) => (
    <Button
      key={method.id}
      className={classes.paymentMethod}
      variant={selectedPayment === method.id ? 'contained' : 'outlined'}
      color={selectedPayment === method.id ? 'primary' : 'default'}
      onClick={() =>handlePaymentSelect(method.id)} // This will trigger the calculation
    >
      {method.label}
    </Button>
  ))}
</Grid>

          {/* House Rent Amount and Amount Details */}

          
          <Grid item xs={6}>
             {/* House Rent Amount Box */}
             <Grid item xs={12}>
  <Box className={classes.amountBox}>
    {/* <Typography variant="h6" className={classes.amountDetail}>House Rent Amount</Typography> */}
    <Grid container spacing={1}>
      <Grid item xs={6}>
      
      </Grid>
      <Grid item xs={6}>
        {/* <Typography align="right">₹{orderDetails.rentAmount?.toFixed(2) || '0.00'}</Typography> */}
      </Grid>
    </Grid>
    <Box className={classes.serviceTypeContainer}>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon className={classes.icon} />
        <Typography variant="body1">Service Type :{paymentDetails.selectedPaymentType}</Typography>
       
       
      </Box>
     
    </Box>
   
      {/* <Typography>Amount: {currentAmount}</Typography> */}
    </Box>
 </Grid>
{/* Amount Details Box */}
<Grid item xs={12}>
  <Box className={classes.amountBox}>
  
    <Typography variant="h6" align="left">Transaction  Details</Typography>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography align="left">Order ID:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right">{paymentDetails.orderNumber || 'N/A'}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="left">Amount:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right"> ₹{formatCurrency(paymentDetails.amount)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="left">Transaction Charges:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right">  ₹{formatCurrency(paymentDetails.transactionCharges)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="left">GST:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right"> ₹{formatCurrency(paymentDetails.GST)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="left">Total Payable Amount:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right">₹{formatCurrency(paymentDetails.totalAmount)}</Typography>
      </Grid>
    </Grid>
  </Box>
</Grid>
</Grid>
    
       


        {/* Pay Now Button */}
        <Grid item xs={12}>
          <Button className={classes.payNowButton} fullWidth variant="contained" onClick={handlePayNowClick} >
            Pay Now
          </Button>
        </Grid>
      </Grid>
      
    </div>
  );
};

export default PaymentPage;
