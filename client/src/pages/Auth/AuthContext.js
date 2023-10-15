// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const userDataFromStorage = localStorage.getItem('user');

  let initialUser = null;
  let initialIsAuthenticated = false;

  if (userDataFromStorage) {
    try {
      initialUser = JSON.parse(userDataFromStorage);
      initialIsAuthenticated = true;
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }

  const [user, setUser] = useState(initialUser);
  const [isAuthenticated, setIsAuthenticated] = useState(initialIsAuthenticated);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('userToken'); // Remove the token key
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userToken');
    sessionStorage.clear();
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
