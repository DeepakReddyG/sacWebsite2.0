import React, { useEffect, useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const { login, isAuthenticated } = useAuth();
  const [credentials, setCredentials] = useState({ user_name: '', user_password: '', user_role: '' });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };


  console.log(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/users/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.isAuthenticated) {
          login(data.user);
          setError(null);

          const routesByUserType = {
            admin: '/users/admin',
            staff: '/users/staff',
            user: '/users/student',
          };

          const userType = data.user.user_role.toLowerCase();
          navigate(routesByUserType[userType]);
        } else {
          setError('Invalid credentials');
        }
      } else {
        setError('Failed to log in');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to log in');
    }
  }

  return (
    <div className="login-form">
      <div className="login-form-in">
        <h2 className="form-title">Enter Valid Details to Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              name="user_name"
              placeholder='Username'
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="user_password"
              placeholder='Password'
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
