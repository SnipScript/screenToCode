import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar";

// Import all pages
import Homepage from "./pages/Homepage";
// import MainPage from "./pages/MainPage";
import PricingPlan from "./pages/PricingPlan";
import AdminBackend from "./pages/AdminBackend";
import Footer from "./section/Footer/Footer";
import Auth from "./pages/Auth";
import About from "./section/Footer/About";
import Terms from "./section/Footer/Terms";
import Privacy from "./section/Footer/Privacy";
import Refund from "./section/Footer/Refund";
import Faqs from "./section/Footer/Faqs";
import AuthPage from "./pages/LoginSignup";
import PrivateRoute from "./components/PrivateRoute";

const MainPage = React.lazy(() => import("./pages/MainPage"));

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/pricing" element={<PricingPlan />} />
        <Route path="/admin" element={<AdminBackend />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
