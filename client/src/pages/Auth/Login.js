import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_password: '',
      isAuthenticated: false,
      errorMessage: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { user_name, user_password } = this.state;

    axios.post('/api/login', { user_name, user_password })
      .then((response) => {
        if (response.data.isAuthenticated) {
          this.setState({ isAuthenticated: true });
          // You can use cookies, local storage, or state management to store the session/token.
        } else {
          // Authentication failed
          this.setState({ errorMessage: 'Authentication failed. Please check your credentials.' });
        }
      })
      .catch((error) => {
        console.error('Error authenticating user:', error);
      });
  }

  render() {
    const { user_name, user_password, isAuthenticated, errorMessage } = this.state;

    if (isAuthenticated) {
      // Redirect to a protected route (e.g., dashboard) if authenticated
      // You can use React Router for navigation
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="user_name" value={user_name} onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="user_password" value={user_password} onChange={this.handleInputChange} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
