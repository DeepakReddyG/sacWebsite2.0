import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Login.css';

function Login() {
  const { login, isAuthenticated } = useAuth();
  const [credentials, setCredentials] = useState({ user_name: '', user_password: '' });
  const [error, setError] = useState();
  const navigate = useNavigate(); // Create a navigate function

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
          localStorage.setItem('authenticatedUser', JSON.stringify({ user_name: data.user.user_name, user_role: data.user.user_role }));
          localStorage.setItem('userToken', data.token);
          sessionStorage.setItem('authenticatedUser', JSON.stringify({ user_name: data.user.user_name, user_role: data.user.user_role }));
          sessionStorage.setItem('userToken', data.token);

          login(data.user); // Call the login function from AuthContext


          const routesByUserType = {
            admin: '/users/admin', // Update with the actual route path for admin
            staff: '/users/staff', // Update with the actual route path for staff
            user: '/users/student', // Update with the actual route path for student
          };

          const userType = data.user.user_role.toLowerCase();
          navigate(routesByUserType[userType]); // Use navigate to redirect
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
