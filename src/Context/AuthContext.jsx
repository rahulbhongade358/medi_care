import { createContext, useState } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
  });

  const Login = (loginData) => {
    setUser(loginData); // set all at once
    console.log("Logged in user:", loginData);
  };
  const isAuthenticated = () => {
    return user.username !== "" && user.password !== "" && user.role !== "";
  };

  return (
    <Authcontext.Provider value={{ user, setUser, Login, isAuthenticated }}>
      {children}
    </Authcontext.Provider>
  );
};
