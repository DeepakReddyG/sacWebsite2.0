import React from 'react';
import { useAuth } from '../../../pages/Auth/AuthContext';
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
      <h1>Student Index Page</h1>
      <h1>{user.user_name}</h1>
      <h2>User Role: {user.user_role}</h2>
      <button onClick={handleLogout}>Logout</button> 
    </div>
  );
};

export default NewsManagement;
