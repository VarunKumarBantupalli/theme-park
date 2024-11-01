import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rides from "./components/Rides/Rides";
import LoginWrapper from "./components/Auth/LoginWrapper";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import HighRides from "./components/Rides/HighRides";
import ClearSignage from "./components/ClearSignage/ClearSignage";
import BookingMain from "./components/Booking/BookingMain";
import BookingView from "./components/Booking/BookingsView";
import WaterRides from "./components/Rides/WaterRides";
import KidsRides from "./components/Rides/KidsRides";
import LandRides from "./components/Rides/LandRides";
import Signage from "./components/ClearSignage";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/clearSignage" element={<ClearSignage />} />
        <Route path="/bookings" element={<BookingMain />} />
        <Route path="/highRides" element={<HighRides />} />
        <Route path="/waterRides" element={<WaterRides />} />
        <Route path="/kidsRides" element={<KidsRides />} />
        <Route path="/landRides" element={<LandRides />} />
        <Route path="/signage" element={<Signage />} />
        <Route path="/admin" element={<BookingView />} />
      </Routes>
    </Router>
  );
};

export default App;
