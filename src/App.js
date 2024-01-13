import React from 'react';
import {
  CssBaseline,
  Container
} from '@mui/material';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
// import AdminHomePage from './Admin Dashboard/AdminHomePage';

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Container>
          <Dashboard />
          <Routes>
            {/* ... other routes */}
            
            {/* Add this Route for AdminDashboard */}
            {/* <Route path="/adminhome" element={<AdminHomePage />} /> */}

            {/* ... other routes */}
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
