import React from 'react';
import { useAuth } from '../../pages/Auth/AuthContext';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import StudentIndexPage from '../Users/Student/StudentIndexPage';
import AdminIndexPage from '../Users/Admin/AdminIndexPage';
import StaffIndexPage from '../Users/Staff/StaffIndexPage';

const UsersApp = () => {

    const { isAuthenticated, user, logout } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  

    
  return (
    <Routes>
        <Route path='/student' element={<StudentIndexPage/>}></Route>
        <Route path='/admin' element={<AdminIndexPage/>}></Route>
        <Route path='/staff' element={<StaffIndexPage/>}></Route>
    </Routes>
  )
}

export default UsersApp