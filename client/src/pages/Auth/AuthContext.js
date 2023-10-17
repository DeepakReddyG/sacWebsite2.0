// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const userDataFromStorage = localStorage.getItem('user');
  let sessionTimeout; // Variable to hold the session timeout

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
    // localStorage.setItem('user', JSON.stringify(userData));
    // localStorage.setItem('userToken', userData.token);
    // sessionStorage.setItem('user', JSON.stringify(userData));
    // sessionStorage.setItem('userToken', userData.token);
    
    sessionTimeout = setTimeout(() => {
      logout();
    }, 30 * 60 * 1000); 
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userToken');
    clearTimeout(sessionTimeout); // Clear the session timeout
    sessionStorage.clear();
    localStorage.clear();
  };

  useEffect(() => {
    return () => {
      if (sessionTimeout) {
        clearTimeout(sessionTimeout);
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
