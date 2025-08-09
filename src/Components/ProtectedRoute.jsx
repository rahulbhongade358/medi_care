import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(Authcontext);

  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
