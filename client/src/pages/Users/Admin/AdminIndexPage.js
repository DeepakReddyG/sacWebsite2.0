import React from 'react';
import { useAuth } from '../../../pages/Auth/AuthContext';
import { Link, Navigate } from 'react-router-dom';
import './AdminIndexPage.css';

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
      <h1>Admin Index Page</h1>
      <div className="adminoptionsmain">
        <div className="adminoption">
          <Link className='adminoption-link' to="/events/crud">Manage Users</Link>
        </div>
        <div className="adminoption">
          <Link className='adminoption-link' to="/events/crud">Manage Events</Link>
        </div>
        <div className="adminoption">
          <Link className='adminoption-link' to="/news/newscrud">Manage News</Link>
        </div>
        <div className="adminoption">
          <Link className='adminoption-link' to="/events/crud">Manage Announcements</Link>
        </div>
        <div className="adminoption">
          <Link className='adminoption-link' to="/events/crud">Social Immersive Learning</Link>
        </div>
      </div>
      <h1>{user.user_name}</h1>
      <button onClick={handleLogout}>Logout</button> 
    </div>
  );
};

export default NewsManagement;
