import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import Sidebar from './Sidebar';
import PayRent from './PayRent';
import RechargeBillPay from './RechargeBillPay';
import Header from './Header';
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
import FlightBookingPage from './FlightBookingPage';

const AppContainer = styled('div')({
  display: 'flex',
  height: '100vh', // Full viewport height
});

const ContentContainer = styled('main')(({ sidebarOpen }) => ({
  flex: 1,
  padding: '30px',
  marginLeft: sidebarOpen ? '150px' : '150px', // Adjust content margin based on sidebar visibility
  transition: 'margin-left 0.3s ease',

}));

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility
  const location = useLocation();
  const isPayNowRoute = location.pathname && location.pathname.split('/')[1] === 'paynow';

  const toggleSidebar = () => {
    setSidebarOpen((prevOpen) => !prevOpen); // Toggle sidebar state
  };

  return (
    <UserProvider>
      <Header toggleSidebar={toggleSidebar} /> {/* Pass the toggle function to Header */}
      {isPayNowRoute ? (
        <Routes>
          <Route path="/paynow/:orderNumber" element={<PayNowPage />} />
        </Routes>
      ) : (
        <AppContainer>
          {sidebarOpen && <Sidebar />} {/* Conditionally render Sidebar */}
          <ContentContainer sidebarOpen={sidebarOpen}> {/* Adjust content based on sidebar */}
            <Routes>
              <Route path="/pay-rent" element={<PayRent />} />
              <Route path="/recharge-bill-pay" element={<RechargeBillPay />} />
              <Route path="/flight-booking" element={<FlightBookingPage />} />
              <Route path="/DTH-recharge-pay" element={<RechargeDish />} />
              <Route path="/broadband-bill-pay" element={<BroadbandPage />} />
              <Route path="/Electricity-bill-pay" element={<ElectricityPage />} />
              <Route path="/piped-bill-pay" element={<PipedGasPaymentPage />} />
              <Route path="/insurance-bill-pay" element={<InsurancePage />} />
              <Route path="/water-bill-pay" element={<WaterPage />} />
              <Route path="/fastag-bill-pay" element={<FasTagPage />} />
              <Route path="/Landline-bill-pay" element={<LandlinePage />} />
              <Route path="/cylinder-bill-pay" element={<CylinderPage />} />
              <Route path="/data-bill-pay" element={<DataCardPage />} />
              <Route path="/credit-bill-pay" element={<CreditCardPage />} />
              <Route path="/subscription-bill-pay" element={<SubscriptionPage />} />
              <Route path="/cable-bill-pay" element={<CablePage />} />
              <Route path="/hospital-bill-pay" element={<HospitalPage />} />
              <Route path="/society-bill-pay" element={<SocietyPage />} />
              <Route path="/municipal-bill-pay" element={<MunicipalServicePage />} />
              <Route path="/my-wallet" element={<Wallet />} />
              <Route path="/logout" element={<LogOut />} />
            </Routes>
          </ContentContainer>
        </AppContainer>
      )}
    </UserProvider>
  );
};

export default Dashboard;
