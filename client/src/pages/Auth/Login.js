import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection

function Login() {
  const { login, isAuthenticated } = useAuth();
  const [credentials, setCredentials] = useState({ user_name: '', user_password: '' });
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

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
          // Store the user's username in localStorage
          localStorage.setItem('authenticatedUser', JSON.stringify({ user_name: data.user.user_name, user_role: data.user.user_role }));
          localStorage.setItem('userToken', data.token);
          sessionStorage.setItem('authenticatedUser', JSON.stringify({ user_name: data.user.user_name, user_role: data.user.user_role}));
          sessionStorage.setItem('userToken', data.token);
          login(data.user);
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
  };

  // If the user is already authenticated, redirect them to the homepage
  if (isAuthenticated) {
    return <Navigate to="/newsmanagement" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input type="text" name="user_name" placeholder="Username" onChange={handleChange} />
        </div>
        <div>
          <input type="password" name="user_password" placeholder="Password" onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
