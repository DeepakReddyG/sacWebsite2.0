import React, { Component } from 'react';
import axios from 'axios';
import SubmissionStatus from './submissionStatus'; // Import the SubmissionStatus component

class AddEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_name: '',
      event_description: '',
      event_date: '',
      event_venue: '',
      event_image: '',
      event_category: 'Tech',
      event_registration: '',
      event_student_coordinator: '',
      event_faculty_coordinator: '',
      submissionStatus: {
        success: null,
        message: '',
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const eventData = {
      event_name: this.state.event_name,
      event_description: this.state.event_description,
      event_date: this.state.event_date,
      event_venue: this.state.event_venue,
      event_image: this.state.event_image,
      event_category: this.state.event_category,
      event_registration: this.state.event_registration,
      event_student_coordinator: this.state.event_student_coordinator,
      event_faculty_coordinator: this.state.event_faculty_coordinator,
    };

    axios
      .post('http://localhost:3001/api/addEvent', eventData)
      .then((response) => {
        this.setState({
          submissionStatus: {
            success: true,
            message: 'Event added successfully',
          },
        });
      })
      .catch((error) => {
        this.setState({
          submissionStatus: {
            success: false,
            message: 'Error adding event: ' + error.message,
          },
        });
      });
  }

  render() {
    const { success, message } = this.state.submissionStatus;

    return (
      <div>
        <h2>Add a New Event</h2>
        {success !== null && (
            <SubmissionStatus success={success} message={message} />
          )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Event Name:</label>
            <input type="text" name="event_name" value={this.state.event_name} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>Event Description:</label>
            <textarea name="event_description" value={this.state.event_description} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>Event Date:</label>
            <input type="date" name="event_date" value={this.state.event_date} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>Event Venue:</label>
            <input type="text" name="event_venue" value={this.state.event_venue} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>Event Image URL:</label>
            <input type="text" name="event_image" value={this.state.event_image} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>Event Category:</label>
            <select name="event_category" value={this.state.event_category} onChange={this.handleInputChange}>
              <option value="Tech">Tech</option>
              <option value="LCH">LCH</option>
              <option value="IIE">IIE</option>
            </select>
          </div>

          <div>
            <label>Event Registration Link:</label>
            <input type="text" name="event_registration" value={this.state.event_registration} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>Student Coordinator:</label>
            <input type="text" name="event_student_coordinator" value={this.state.event_student_coordinator} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>Faculty Coordinator:</label>
            <input type="text" name="event_faculty_coordinator" value={this.state.event_faculty_coordinator} onChange={this.handleInputChange} />
          </div>
          
          <button type="submit">Add Event</button>
          
        </form>
      </div>
    );
  }
}

export default AddEventForm;
