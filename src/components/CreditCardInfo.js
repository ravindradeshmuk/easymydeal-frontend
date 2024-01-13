import React from 'react';
import {
  Box, Grid, Typography, List, ListItem, ListItemText
} from '@mui/material';
import { styled } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StoreIcon from '@mui/icons-material/Store';

const IconSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  padding: theme.spacing(2),
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: 'center',
  backgroundColor: "aliceblue",
  boxShadow: "inset",
  borderRadius: "5px",
  width: "20%",
  padding: theme.spacing(1),
  color: "blue",
  '& .MuiSvgIcon-root': {
    marginBottom: theme.spacing(1),
  },
}));
const IconText = styled(Typography)({
  marginTop: 8,
  backgroundColor: 'white',
  borderRadius: "theme.shape.borderRadius",
  padding: "theme.spacing(0.5)",
  color: "black"
});

const AdvantagesList = styled(List)({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

const AdvantageItem = styled(ListItem)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '8px 0',
});

const AdvantageHeading = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1rem',
});

const CreditCardInfo = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Typography margin='20px' gutterBottom sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
          Pay Rent Via Credit Card
        </Typography>
        <IconSection>
          <IconBox>
            <HomeIcon fontSize="large" />
            <IconText variant="caption">Home Rent</IconText>
          </IconBox>
          <IconBox>
            <AttachMoneyIcon fontSize="large" />
            <IconText variant="caption">Token Amount</IconText>
          </IconBox>
          <IconBox>
            <BusinessCenterIcon fontSize="large" />
            <IconText variant="caption">Brokerage</IconText>
          </IconBox>
          <IconBox>
            <StoreIcon fontSize="large" />
            <IconText variant="caption">Shop Rent</IconText>
          </IconBox>
        </IconSection>
        {/* ... Rest of the component ... */}
		 
      <Typography  margin='20px'  gutterBottom
        sx={{
          fontWeight: 'bold', // Makes the text bolder
          fontSize: '1rem', // Adjust the font size as needed
        }}>
      Unlock the Convenience and Benefits of Paying via Credit Card
      </Typography>
      <Typography  margin='20px'  gutterBottom
        sx={{
          // fontWeight: 'bold', // Makes the text bolder
          fontSize: '0.7rem', // Adjust the font size as needed
        }}>
     When it comes to convenient and secure payment methods, paying via credit card reigns 
     supreme. With the rise of online shopping and digital transactions, credit cards have
      become an essential tool for consumers worldwide. We will delve into the advantages
       of paying with a credit card, particularly when using EaseMyDeal.com—an online platform
        that offers seamless shopping experiences. Explore the benefits of paying via credit
         card on EaseMyDeal.com and how itenhances your online shopping journey while 
         providing added convenience and peace of mind.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Advantages of using pay via credit card on EaseMyDeal
      </Typography>
      <AdvantagesList sx={{padding:'20px',fontSize: '0.7rem'}}>
        {[
          {
            title: 'Secure and Protected Transactions',
       
            description:
              'EaseMyDeal.com understands the importance of security in online transactions. By paying via credit card, you can enjoy an added layer of protection against unauthorized access or fraudulent activities. Credit card companies implement stringent security measures and advanced encryption technologies, safeguarding your personal and financial information. With EaseMyDeal.com’s secure payment gateway and your trusted credit card, you can shop with confidence, knowing that your transactions are protected.',
          },
          {
            title: 'Easy and Convenient Payments:',
       
            description:
            'EaseMyDeal.com, true to its name, prioritizes a seamless shopping experience. By paying with a credit card, you can enjoy the ease and convenience of completing transactions in just a few clicks. Whether youre purchasing electronics, fashion items, or household essentials, paying via credit card on EaseMyDeal.com saves you time and effort. No need to handle cash or enter lengthy account details. Simply enter your credit card information, review your order, and proceed to payment effortlessly.'
          },
          {
            title: 'Convenience at Your Fingertips:',
       
            description:
      'Paying via credit card eliminates the need to carry cash or worry about exact change. With a credit card in hand, you have instant access to your funds, allowing you to make purchases both online and offline with ease. This convenience comes in handy, particularly during emergencies or situations where cash is not readily available.'
          },
      
           {
            title: 'Enhanced Security:',
       
            description:
    'Credit cards offer an extra layer of security for your financial transactions. Reputable credit card companies employ robust security measures to protect your personal and financial information from unauthorized access. Additionally, credit cards often come with built-in fraud protection, which means you wont be held liable for fraudulent charges made on your card. This assurance helps you shop online or at physical stores with peace of mind.'
          },
          {
            title: 'Building Credit History:',
       
            description:
          'Using a credit card responsibly can significantly impact your credit history. By making timely payments and maintaining a low credit utilization ratio, you can establish a positive credit history, which can be beneficial for future loan applications such as a mortgage or car loan. Building a good credit score opens up opportunities for better interest rates and financial stability.'   
          },
          {
            title: 'Earn Rewards and Cashback:',
       
            description:
         'One of the significant perks of paying via credit card is the potential to earn rewards and cashback on your purchases. Many credit card companies offer reward programs that allow you to accumulate points or cashback for every transaction you make. These rewards can later be redeemed for travel discounts, gift cards, statement credits, or other attractive benefits. By using a credit card for your everyday expenses, you can maximize your savings and enjoy additional perks.'
          },
          {
            title: 'Flexible Payment Options:',
       
            description:
        'Credit cards provide flexibility when it comes to payment options. You can choose to pay the full amount by the due date, avoiding any interest charges, or you can opt for minimum payments if you need to manage your cash flow. However, it is important to remember that paying the balance in full each month helps you avoid accruing interest and keeps your finances in check.'
          },
          // ... Add other advantages similarly
        ].map((advantage, index) => (
          <AdvantageItem key={index}>
            <AdvantageHeading>
              {index + 1}. {advantage.title}
             
             </AdvantageHeading>
            <ListItemText>{advantage.description}</ListItemText>
          </AdvantageItem>
        ))}
      </AdvantagesList>
      <Typography    gutterBottom
        sx={{
          fontWeight: 'bold', // Makes the text bolder
          fontSize: '1rem', // Adjust the font size as needed
         
        }}>
          Pay via credit card to your landlords, school/tuition fee, maintenance, office rent or to vendors 
 </Typography>
      <Typography   gutterBottom
        sx={{
          // fontWeight: 'bold', // Makes the text bolder
          fontSize: '0.8rem', // Adjust the font size as needed
        }}>
    When you choose to pay via credit card on EaseMyDeal.com, you unlock a world of 
    benefits. From secure transactions and buyer protection to easy payments and enticing
     rewards, paying with a credit card enhances your online shopping experience.
      Take advantage of the convenience, peace of mind, and financial perks that come
       with paying via credit card on EaseMyDeal.com. Embrace the seamless integration
        of credit cards and pay to your landlords, school/tuition fee, society maintenance, office rent, brokerage or to vendors and embark on a
     journey of convenience and savings with EaseMyDeal.com.
      </Typography>
   
      </Grid>
    </Box>
  );
};

export default CreditCardInfo;
