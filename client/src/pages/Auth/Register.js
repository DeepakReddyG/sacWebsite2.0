import React, { Component } from 'react';
import axios from 'axios';

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
      <div>
        <h2>Register a New User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="user_name" value={this.state.user_name} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" name="user_password" value={this.state.user_password} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>User Role:</label>
            <select name="user_role" value={this.state.user_role} onChange={this.handleInputChange}>
              <option value="admin">Admin</option>
              <option value="clublead">Club Lead</option>
              <option value="staff">Staff</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
