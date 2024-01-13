import React from 'react';
import { Grid, Typography, Avatar, Box, ButtonBase, Divider, } from '@mui/material';
import { red, blue, green, orange, deepPurple, lightBlue } from '@mui/material/colors';
import image2 from "../images/bill_pay.jpg"
import { styled } from '@mui/system';
// Import some icons for illustration purposes
import {
  PhoneAndroid as AirtelIcon,
  SimCard as JioIcon,
  RssFeed as ViIcon,
  Wifi as BsnlIcon,
  SignalCellularAlt as MtnlIcon,
} from '@mui/icons-material';

const operators = [
  { id: 'airtel', name: 'Airtel', color: red[500], Icon: AirtelIcon },
  { id: 'jio', name: 'Jio', color: blue[500], Icon: JioIcon },
  { id: 'vi', name: 'Vi', color: green[500], Icon: ViIcon },
  { id: 'bsnl', name: 'BSNL', color: orange[500], Icon: BsnlIcon },
  { id: 'mtnl', name: 'MTNL', color: deepPurple[500], Icon: MtnlIcon },
];

const OperatorSelection = () => {
  const handleOperatorClick = (operatorId) => {
    console.log(`Selected operator: ${operatorId}`);
    // You can add navigation or state update logic here
  };
  const rechargePlanGroups = [
   ['Airtel 118 Data Recharge Plan','Airtel 155 Unlimited Recharge Plan',
'Airtel 181 Data Recharge Plan','Airtel 19 Data Recharge Plan'],
 ['Airtel 239 Unlimited Recharge Plan', 'Airtel 239 Unlimited Recharge Plan',
  'Airtel 265 Unlimited Recharge Plan', 'Airtel 29 Data Recharge Plan'],
 ['Airtel 299 Unlimited Recharge Plan',
 ' Airtel 2999 Unlimited Recharge Plan',
  'Airtel 301 Data Recharge Plan',
 ' Airtel 479 Unlimited Recharge Plan'],
  ['Airtel 49 Data Recharge Plan',
  'Airtel 58 Data Recharge Plan',
  'Airtel 65 Data Recharge Plan',
  'Airtel 98 Data Recharge Plan']
  

 
    // ... other plan names
  ];
  
  const regions= [
    'Airtel Delhi/NCR', 'Airtel Mumbai', 'Airtel Kolkata', 'Airtel Maharashtra',
    'Airtel Andhra Pradesh', 'Airtel Tamil Nadu', 'Airtel Karnataka', 'Airtel Gujarat',
    'Airtel Uttar Pradesh (W)', 'Airtel Madhya Pradesh', 'Airtel West Bengal',
    'Airtel Rajasthan', 'Airtel Kerala', 'Airtel Punjab', 'Airtel Haryana',
    'Airtel Bihar & Jharkhand', 'Airtel Orissa', 'Airtel Assam', 'Airtel North East',
    'Airtel Himachal Pradesh', 'Airtel Jammu & Kashmir', 'Airtel Chennai',
    // Repeat the list if needed
    // ... other region names
  ];
  const ResponsiveImage = styled('img')({

    width: '50%', // Image will take up 100% of the container's width
    height: '100vh', // Height will scale automatically to maintain aspect ratio
    borderRadius: '10px',
    marginTop: '20px',
    // Remove background properties since they don't apply to img tags
    objectFit: 'cover', // This will ensure the image covers the area, similar to background-size: cover
    maxWidth: '70%', // This ensures the image is not larger than the container
    maxHeight: '100vh', // This sets a maximum height for the image
  
  });
    
 
  return (
    <>
      <Box sx={{ bgcolor: 'white', boxShadow: 3, borderRadius: '10px', flexGrow: 1, p: 2 }}>
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
          SELECT AN OPERATOR
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {operators.map((operator) => (
            <Grid item key={operator.id}>
              <Box sx={{ bgcolor: lightBlue[100], p: 2, borderRadius: 2, textAlign: 'center' }}>
                <ButtonBase onClick={() => handleOperatorClick(operator.id)} style={{ flexDirection: 'column' }}>
                  <Avatar sx={{ bgcolor: operator.color, width: 56, height: 56, mx: 'auto' }}>
                    <operator.Icon style={{ color: '#fff' }} />
                  </Avatar>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {operator.name}
                  </Typography>
                </ButtonBase>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography margin='20px' gutterBottom
          sx={{
            fontWeight: 'bold', // Makes the text bolder
            fontSize: '1rem', // Adjust the font size as needed
          }}>
          Unlock the Convenience and Benefits of Paying via Credit Card
        </Typography>
        <Typography margin='20px' gutterBottom
          sx={{
            // fontWeight: 'bold', // Makes the text bolder
            fontSize: '0.7rem', // Adjust the font size as needed
          }}>
          Airtel is one of the most prevalent networks in India. Bharti Airtel/Airtel was
          founded by Sunil Bharti Mittal many decades ago and is one of the leading
          telecommunication companies in India that operates in around 18 countries.
          It is one of the most splendid service providers and delivers remarkable
          connectivity all over India.
          Airtel has innumerable prepaid recharge plans in comparison to its contenders.
          Today, Where People lean toward their convenience, EaseMyDeal has come up with the
          speediest<b> Airtel prepaid recharge </b>service to make the task of online<b> Airtel
            recharge </b>convenient and easy. EaseMyDeal chooses to do the right thing to serve its customers
          by providing high-quality services.
        </Typography>
        <Grid item xs={12} md={6}>
            <ResponsiveImage  src={image2} alt="Mobile Recharge" />
          </Grid>
        <Typography margin='20px' gutterBottom
          sx={{
            fontWeight: 'bold', // Makes the text bolder
            fontSize: '1rem', // Adjust the font size as needed
          }}>
          Latest Airtel Plans at EaseMyDeal
        </Typography>
        <Typography margin='20px' gutterBottom
          sx={{
            // fontWeight: 'bold', // Makes the text bolder
            fontSize: '0.7rem', // Adjust the font size as needed
          }}>
          EaseMyDeal delivers a catalog of all <b>Airtel prepaid recharge </b>plans out of which
          you can pick according to your balance requirements. EaseMyDeal indulges with all
          the <b>Airtel Prepaid plans</b> that you may look for whether it is Airtel prepaid top-up,
          airtel unlimited plans, airtel 3G/4G data plan, airtel international roaming,
          airtel SMS packs, airtel special recharges.
          <b>For more Airtel prepaid recharge plans click here.</b>
        </Typography>
        <Typography margin='20px' gutterBottom
          sx={{
            fontWeight: 'bold', // Makes the text bolder
            fontSize: '1rem', // Adjust the font size as needed
          }}>
          How to recharge airtel prepaid mobile online?
        </Typography>
        <Typography margin='20px' gutterBottom
          sx={{
            // fontWeight: 'bold', // Makes the text bolder
            fontSize: '0.7rem', // Adjust the font size as needed
          }}>
          EaseMyDeal delivers an apparent course of action to recharge your <b>Airtel prepaid
            mobile</b> number online. One just needs an internet connection to <b>Airtel online
              recharge</b> through their mobile phones, tablets or Computer. EaseMyDeal is
          available 24*7 to provide its services.
          Just follow five simple steps!
          <ul>
            <li>Visit<b> www.easemydeal.com/mobile-recharge</b></li>
            <li>Enter your Airtel Prepaid Mobile Number.</li>
            <li>Select Operator & Choose Circle. </li>
            <li>Enter the Amount or Pick from a wide range of the Best Airtel recharge offers of your choice</li>
            <li>Proceed to Recharge & Enter your details.</li>
            <li>Make the Payment. Our Payment methods are safe and secure so one must not worry about his money.</li>
            <li>Your online<b>Airtel mobile recharge</b> is Done...!</li>
          </ul>
          <Typography sx={{
            // fontWeight: 'bold', // Makes the text bolder
            fontSize: '0.7rem', // Adjust the font size as needed
          }}>
            You will get an instant auto update of your <b>Airtel recharge</b> through email and text messages immediately after completing your Airtel e-recharge.
          </Typography>
          <Typography margin='10px' gutterBottom
            sx={{
              fontWeight: 'bold', // Makes the text bolder
              fontSize: '14px', // Adjust the font size as needed
            }}>
            Easy, Comfortable, and convenient online Airtel Mobile Recharge with EaseMyDeal
          </Typography>
          <Typography margin='10px' gutterBottom
            sx={{
              // fontWeight: 'bold', // Makes the text bolder
              fontSize: '0.7rem', // Adjust the font size as needed
            }}>
            Getting safe & secure payment done with ease is what customers desire in this
             busy lifestyle, So EaseMyDeal offers you a prompt, 
            hassle-free, completely safe & secure payment service so that customers
            can do<b> Airtel Online Recharge</b> easily with confidence.
          </Typography>
          <Typography margin='10px' gutterBottom
            sx={{
              // fontWeight: 'bold', // Makes the text bolder
              fontSize: '0.7rem', // Adjust the font size as needed
            }}>
            With excellent customer support on call and email, instant refunds, 99.9% success rate, 24*7 website uptime, smooth and user-friendly interface, EaseMyDeal is one of the most secure and trusted Airtel mobile
            recharge online payment platforms as it never stores payment details on its platform.
          </Typography>
          <Typography margin='10px' gutterBottom
            sx={{
              // fontWeight: 'bold', // Makes the text bolder
              fontSize: '0.7rem', // Adjust the font size as needed
            }}>
            EaseMyDeal offers the latest <b>Airtel Prepaid Recharge</b> Plans so that customers get 
            the best airtel plan at one platform. It also has wide range of payment options 
            including UPI, Debit Card, Credit card, Net Banking, EMI, Phone Pay,
             Freecharge, Airtel Money, OLA Money, Payzapp, Oxygen wallet, ItzCash, Yes Pay, 
             and PayPal. 
          </Typography>
          <Typography margin='10px' gutterBottom
            sx={{
              // fontWeight: 'bold', // Makes the text bolder
              fontSize: '0.7rem', // Adjust the font size as needed
            }}>
EaseMyDeal also provides a recharge reminder notification. With all these benefits, 
EaseMyDeal offers all airtel phone recharge plans with 99% plan accuracy. 
Now you can save more on your Airtel Special 
recharge online with amazing cashback offers, deals, and discounts on EaseMyDeal
          </Typography>
          <Typography margin='20px' gutterBottom
          sx={{
            fontWeight: 'bold', // Makes the text bolder
            fontSize: '1rem', // Adjust the font size as needed
          }}>
        FAQs
         </Typography>
         <ol>
            <li>How is Airtel better than other operators? <br/>
Airtel is one of the best leading telecommunication companies in India. This cellular
 network ensures phenomenal connectivity. Airtel ensures that its internet connection 
 works even in the backwoods. So,this is the reason that one should prefer Airtel
  over other operators.</li>
            <li>Which is the best website/platform to <b>Airtel prepaid recharge </b>online?<br/>
EaseMyDeal.com is the best Platform to recharge Airtel Number online as it provides 
excellent support on call and email, instant refunds, 99.9% success rate, 24*7 website
 uptime, a smooth and user-friendly interface, a secured and trusted payment platform 
 as it never stores
 payment details.<b> If you wish to recharge from the Airtel official website click here </b></li>
            <li>. How can I do my <b>Airtel Recharge</b> through a debit Card?<br/>
One can recharge his Airtel number very easily. One can visit EaseMyDeal.com, 
enter his mobile number, check plans, and click on proceed to recharge, then enter 
basic details like name, email id, and select debit card from all 
the payment options given. Then enter debit card details, then proceed for payment.</li>
            <li> How do I know the details of my last 5 transactions?<br/>
It is amazingly easy to know this. Go to website EaseMyDeal.com, click on the sign-in 
button, log in through any of the options given. Once login, 
click on your name, You will get option for order history/ my transactions over there.</li>
            <li>. How do I contact customer care?<br/>
You can contact us on +91-8800-65-3385 and choose your preferred extensions on
 IVR options or you can always drop us an email at recharge@easemydeal.com</li>
            <li>Which Airtel plan is the best?<br/> 
This completely depends on your necessity and price range. Airtel has various plans 
and you can best for your Airtel Number. EaseMyDeal has also suggested the Airtel Best
 Offers section available on its platform.</li>
            <li>What is the validity recharge plan for Airtel?<br/>
The validity of the recharge is completely dependent on the plan you have chosen.</li>
          
          <li>What is the validity <b>recharge plan for Airtel?</b><br/>
          You can get the best plan on easemydeal.com. You must just put your
           prepaid Airtel Mobile number and browse for full Talktime plans on easemydeal.com.</li>
           
           <li>Where can I get full Talktime on<b> Airtel Mobile Recharge?</b><br/>
           You can get the best plan on easemydeal.com. You must just
            put your prepaid Airtel Mobile number and browse for full Talktime plans on easemydeal.com.</li>
            <li>How can I get cashback offers for my <b>Airtel Prepaid Recharge Number?</b><br/>
            EaseMyDeal ensures that it has all kinds of airtel special discounts, airtel promo deals, 
            best cashback offers available for your Airtel Prepaid Mobile Number.</li>
          </ol>
        </Typography>
        <Typography margin='20px' gutterBottom
          sx={{
            fontWeight: 'bold', // Makes the text bolder
            fontSize: '1rem', // Adjust the font size as needed
          }}>
        Airtel
         </Typography>
         <Typography margin='10px' gutterBottom
            sx={{
              // fontWeight: 'bold', // Makes the text bolder
              fontSize: '0.7rem', // Adjust the font size as needed
            }}>
          While we support most recharges, we request you verify with your operator once
           before proceeding. You can check the Airtel's 
          privacy policy on the official Airtel website -<b> www.airtel.in/privacy-policy</b>
          </Typography>
          <Box sx={{ fontFamily: 'Arial, sans-serif', m: 2 }}>
      <Box sx={{ bgcolor: '#f2f2f2', p: 2, border: '1px solid #ccc',}}>
        <Typography variant="h5" component="h1">
          Airtel Recharge Plans
        </Typography>
      </Box>
      <Box style={{ border: '1px solid #ccc', }}>
      {rechargePlanGroups.map((group, groupIndex) => (
                <ul key={groupIndex} style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    flexWrap: 'nowrap', 
                    listStyleType: 'none',
                    padding: 0,
                    margin: 1, 
                    width:'60%',
                    height:'30px'
                }}>

        {group.map((plan,planIndex) => (
         <li key={planIndex} style={{padding:'1px',fontSize:'10px', 
         whiteSpace: 'nowrap', marginRight: '5px',width:'60%' }}>
         {plan}
     </li>
        ))}
      </ul>
      ))}
</Box>
      <Divider sx={{ my: 2 }} />

      
      
    </Box>
    <Box sx={{ bgcolor: '#f2f2f2', p: 1 ,border: '1px solid #ccc',width:'100%'}}>
        <Typography variant="h6" component="h3">
          Related Searches on Airtel Recharge Packs by Region
        </Typography>
      </Box>

      <Box sx={{  border: '1px solid #ccc', display: 'flex', flexWrap: 'wrap',width:'100%' }}>
        {regions.map((region, index) => (
          <Typography key={index} sx={{ mr: 1, mb: 1 ,fontSize:'10px'}}>
            {region}
          </Typography>
        ))}
      </Box>
      </Box>
    </>
  );
};

export default OperatorSelection;
