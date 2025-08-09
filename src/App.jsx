import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Publicpages/Home";
import Contact from "./Pages/Publicpages/Contact";
import Explore from "./Pages/Publicpages/Explore";
import Login from "./Pages/Publicpages/Login";
import About from "./Pages/Publicpages/About";
import SignUp from "./Pages/Publicpages/SignUp";
import DoctorDashboard from "./Pages/Doctor/DoctorDashboard";
import NurseDashboard from "./Pages/Nurse/NurseDashboard";
import PatientDashboard from "./Pages/Patient/PatientDashboard";
import Footer from "./Components/Footer/Footer";
import { Authcontext } from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
const App = () => {
  const { isAuthenticated } = useContext(Authcontext);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/doctordashboard"
          element={
            <ProtectedRoute>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/nursedashboard"
          element={
            <ProtectedRoute>
              <NurseDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patientdashboard"
          element={
            <ProtectedRoute>
              <PatientDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
