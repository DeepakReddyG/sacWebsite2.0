import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  let sessionTimeout;

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('username', userData.user_name);
    sessionStorage.setItem('user_role', userData.user_role);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', userData.user_name);
    localStorage.setItem('user_role', userData.user_role);

    sessionTimeout = setTimeout(() => {
      logout();
    }, 30 * 60 * 1000);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.clear();
    sessionStorage.clear();
    clearTimeout(sessionTimeout);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const isAuthenticatedFromStorage = localStorage.getItem('isAuthenticated');

    if (storedUser && isAuthenticatedFromStorage === 'true') {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (sessionTimeout) {
        clearTimeout(sessionTimeout);
      }
    };
  }, []);

  // console.log("authentication state: ", isAuthenticated);
  // console.log("user: ", user);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
