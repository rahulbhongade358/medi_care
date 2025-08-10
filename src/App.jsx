import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Publicpages/Home";
import Contact from "./Pages/Publicpages/Contact/Contact";
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
import SearchPatients from "./Pages/Doctor/SearchPatients";
import DoctorProfile from "./Pages/Doctor/DoctorProfile";
import AddDiagnosis from "./Pages/Doctor/AddDiagnosis";
import MyPatients from "./Pages/Doctor/MyPatients";

const App = () => {
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
        <Route
          path="/searchpatieants"
          element={
            <ProtectedRoute>
              <SearchPatients />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mypatients"
          element={
            <ProtectedRoute>
              <MyPatients />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adddiagnosis"
          element={
            <ProtectedRoute>
              <AddDiagnosis />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctorprofile"
          element={
            <ProtectedRoute>
              <DoctorProfile />
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
