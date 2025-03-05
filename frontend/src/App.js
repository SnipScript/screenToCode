import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';

// Import all pages
import Homepage from './pages/Homepage';
import MainPage from './pages/MainPage';
import LoginSignup from './pages/LoginSignup';
import PricingPlan from './pages/PricingPlan';
import AdminBackend from './pages/AdminBackend';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/app" element={<MainPage />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/pricing" element={<PricingPlan />} />
        <Route path="/admin" element={<AdminBackend />} />
      </Routes>
      
    </Router>
  );
}

export default App; 