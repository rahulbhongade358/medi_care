import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });
  const [user, setUser] = useState(() => {
    const logged = localStorage.getItem("LoggedUser");
    return logged ? JSON.parse(logged) : null;
  });
  const [newPatient, setNewPatient] = useState([]);

  const Login = (loginData) => {
    if (!users || users.length === 0) {
      alert("No user found. Please register first.");
      return;
    }
    const matchedUser = users.find(
      (u) =>
        (loginData.role === "Doctor" && u.MLN === loginData.username) ||
        (loginData.role === "Patient" && u.email === loginData.username) ||
        (loginData.role === "Nurse" && u.NRN === loginData.username)
    );

    if (matchedUser) {
      setUser(matchedUser);
      localStorage.setItem("LoggedUser", JSON.stringify(matchedUser));
      if (loginData.role === "Doctor") {
        navigate("/doctordashboard");
      } else if (loginData.role === "Nurse") {
        navigate("/nursedashboard");
      } else if (loginData.role === "Patient") {
        navigate("/patientdashboard");
      }
      return true;
    } else {
      alert("Login Failed! Please check your credentials");
      return false;
    }
  };
  const NewRegister = (registerData) => {
    const updatedUsers = [...users, registerData];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  const isAuthenticated = () => {
    return user.username !== "" && user.password !== "" && user.role !== "";
  };

  return (
    <Authcontext.Provider
      value={{
        setUser,
        user,
        setUsers,
        users,
        Login,
        isAuthenticated,
        setNewPatient,
        newPatient,
        NewRegister,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};
