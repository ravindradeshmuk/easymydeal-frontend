import React from 'react';
import { Routes, Route,useLocation} from 'react-router-dom';
import { styled } from '@mui/system';
import Sidebar from './Sidebar';
import PayRent from './PayRent';
import RechargeBillPay from './RechargeBillPay';
import Header from "./Header"
 import RechargeDish from './RechargeDish';

import BroadbandPage from './BroadbandPage';
import ElectricityPage from './ElectricityPage';
import PipedGasPaymentPage from './PipedGasPaymentPage';
import InsurancePage from './InsurancePage';
import WaterPage from './WaterPage';
import FasTagPage from './FasTagPage';
import LandlinePage from './LandlinePage';
import CylinderPage from './CylinderPage';
import DataCardPage from './DataCardPage';
import SubscriptionPage from './SubscriptionPage';
import CablePage from './CablePage';
import HospitalPage from './HospitalPage';
import SocietyPage from './SocietyPage';
import MunicipalServicePage from './MunicipalServicePage';
import CreditCardPage from './CreditCardPage';
import Wallet from './Wallet';
import { UserProvider } from './UserContext';
import LogOut from './LogOut';
import PayNowPage from './PayNowPage';

// import PipedGasPaymentPage from './PipedGasPaymentPage';

// ... other imports

const AppContainer = styled('div')({
  display: 'flex',
  height: '100vh', // Full viewport height
});

const ContentContainer = styled('main')({
  flex: 1,
  padding: '20px',
  marginLeft: '250px', // Space for Sidebar
});


const Dashboard = () => {
  const location = useLocation();
  console.log(location.pathname && location.pathname.split('/'));
  const isPayNowRoute = location.pathname && location.pathname.split('/')[1] === 'paynow';
  console.log({isPayNowRoute})
  return (
  
      
         <UserProvider>
          
       <Header/>
     
       {isPayNowRoute ? (
        // <></>
        // Routes without Sidebar
        <Routes>
          <Route path="/paynow/:orderNumber" element={<PayNowPage />} />
         </Routes>
      ) : (
        // Main Layou
       <>
        
        <AppContainer>
        <Sidebar />
        <ContentContainer>
          <Routes>
            <Route path="/pay-rent" element={<PayRent />} />
            <Route path="/recharge-bill-pay" element={<RechargeBillPay/>} />
            <Route path='/DTH-recharge-pay' element={<RechargeDish/>}/>
            <Route path='/broadband-bill-pay' element={<BroadbandPage/>}/>
            <Route path='/Electricity-bill-pay' element={<ElectricityPage/>}/>
            <Route path='/piped-bill-pay' element={<PipedGasPaymentPage/>}/>
            <Route path='/insurance-bill-pay' element={<InsurancePage/>}/>
            <Route path='/water-bill-pay' element={<WaterPage/>}/>
            <Route path='/fastag-bill-pay' element={<FasTagPage/>}/>
           <Route path='/Landline-bill-pay' element={<LandlinePage/>}/>
          <Route path='/cylinder-bill-pay' element={<CylinderPage/>}/>
          <Route path='/data-bill-pay' element={<DataCardPage/>}/>
          <Route path='/credit-bill-pay' element={<CreditCardPage/>}/>
          <Route path='/subscription-bill-pay' element={<SubscriptionPage/>}/>
          <Route path='/cable-bill-pay' element={<CablePage/>}/>
          <Route path='/hospital-bill-pay' element={<HospitalPage/>}/>
          <Route path='/society-bill-pay' element={<SocietyPage/>}/>
          <Route path='/municipal-bill-pay' element={<MunicipalServicePage/>}/>
          <Route path='/my-wallet' element={<Wallet/>}/>
          <Route path='/logout' element={<LogOut/>}/>
          </Routes>
          <Routes>
          

           
          </Routes>

        </ContentContainer>
        
      </AppContainer>
      </>
      )}
      </UserProvider>
  );
};

export default Dashboard;
