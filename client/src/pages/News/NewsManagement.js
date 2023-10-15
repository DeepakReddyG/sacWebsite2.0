import React from 'react';
import { useAuth } from '../Auth/AuthContext';
import { Navigate } from 'react-router-dom';

const NewsManagement = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout(); // Call the logout function to clear the user's session
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }



  return (
    <div>
      <h1>Welcome, {user.user_name}</h1>
      <h2>User Role: {user.user_role}</h2>
      <button onClick={handleLogout}>Logout</button> {/* Logout button */}
      <h3>Admin Dashboard</h3>
    </div>
  );
};

export default NewsManagement;
