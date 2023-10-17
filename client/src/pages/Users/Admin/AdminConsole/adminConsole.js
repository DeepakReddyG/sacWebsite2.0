import React from 'react';
import { useAuth } from '../../../Auth/AuthContext';
import { Navigate } from 'react-router-dom';

const NewsManagement = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout(); 
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }



  return (
    <div>
      <h1>Welcome, {user.user_name}, you are an admin</h1>
      <h2>User Role: {user.user_role}</h2>
      <button onClick={handleLogout}>Logout</button> 
      <h3>Admin Dashboard</h3>
    </div>
  );
};

export default NewsManagement;
