import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_password: '',
      user_role: 'student', // Default to "student"
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      user_name: this.state.user_name,
      user_password: this.state.user_password,
      user_role: this.state.user_role,
    };

    axios.post('http://localhost:3001/api/register', userData)
      .then((response) => {
        console.log('User registered successfully');
        // Redirect to a login page or display a success message
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        // Display an error message to the user
      });
  }

  render() {
    return (
      <div className="registration-form">
        <div className="registration-form-in">
          <h2 className="form-title">Register a New User</h2>
          <form className="user-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="form-label" for="user_name">Username:</label>
              <input
                type="text"
                className="form-input"
                name="user_name"
                value={this.state.user_name}
                onChange={this.handleInputChange}
              />
            </div>
    
            <div className="form-group">
              <label className="form-label" for="user_password">Password:</label>
              <input
                type="password"
                className="form-input"
                name="user_password"
                value={this.state.user_password}
                onChange={this.handleInputChange}
              />
            </div>
    
            <div className="form-group">
              <label className="form-label" for="user_role">User Role:</label>
              <select
                name="user_role"
                className="form-select"
                value={this.state.user_role}
                onChange={this.handleInputChange}
              >
                <option value="admin">Admin</option>
                <option value="clublead">Club Lead</option>
                <option value="staff">Staff</option>
                <option value="student">Student</option>
              </select>
            </div>
    
            <button type="submit" className="submit-button">Register</button>
          </form>
        </div>
      </div>
    );
  }
}  

export default RegistrationForm;
