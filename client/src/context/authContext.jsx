import React, { createContext, useState, useContext } from "react";

// Create the Auth Context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userCredentials, setUserCredentials] = useState({});

  const login = (credentials) => {
    setIsAuth(true);
    setUserCredentials(credentials);
  };
  const logout = () => {
    setIsAuth(false);
    setUserCredentials({});
  };

  return (
    <AuthContext.Provider value={{ isAuth, userCredentials, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth Context
export const useAuth = () => useContext(AuthContext);
