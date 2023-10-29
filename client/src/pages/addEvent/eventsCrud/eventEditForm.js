import React, { Component } from 'react';

class eventEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: { ...props.event },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      event: {
        ...prevState.event,
        [name]: value,
      },
    }));
  }

  handleSave = () => {
    const { event } = this.state;
    fetch(`http://localhost:3001/api/updateEvent/${event.event_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    })
      .then((response) => response.json())
      .then((updatedEvent) => {
        // Handle the response from the server, e.g., show a success message.
        console.log('Event updated:', updatedEvent);

        // You may want to close the edit form or perform other actions.
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message to the user.
        console.error('Error updating event:', error);
      });
  }

  render() {
    const { event } = this.state;

    return (
      <div>
        <h2>Edit Event</h2>
        <form>
          <div>
            <label>Event Name:</label>
            <input
              type="text"
              name="event_name"
              value={event.event_name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Event Date:</label>
            <input
              type="date"
              name="event_date"
              value={event.event_date}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Event Venue:</label>
            <input
              type="text"
              name="event_venue"
              value={event.event_venue}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Event Category:</label>
            <select
              name="event_category"
              value={event.event_category}
              onChange={this.handleInputChange}
            >
              <option value="Tech">Tech</option>
              <option value="LCH">LCH</option>
              <option value="IIE">IIE</option>
            </select>
          </div>
          <button onClick={this.handleSave}>Save</button>
        </form>
      </div>
    );
  }
}

export default eventEditForm;
