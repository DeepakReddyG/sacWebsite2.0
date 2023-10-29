import React, { Component } from 'react';
import EventEditForm from './eventEditForm';

class EventTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [], // To store the list of events
      editEventId: null, // To track the event being edited
    };
  }

  componentDidMount() {
    // Fetch the list of events from the server when the component mounts
    this.fetchEvents();
  }

  fetchEvents = () => {
    fetch('http://localhost:3001/api/getevents')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ events: data });
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }

  handleEditClick = (eventId) => {
    this.setState({ editEventId: eventId });
  }

  handleSaveEdit = (eventId, updatedEventData) => {
    // Make a PUT request to update the event data on the server
    fetch(`http://localhost:3001/api/updateEvent/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEventData),
    })
      .then((response) => response.json())
      .then((updatedEvent) => {
        // Handle the response from the server, e.g., show a success message.
        console.log('Event updated:', updatedEvent);

        // After saving, reset editEventId to null to exit edit mode
        this.setState({ editEventId: null });

        // Update the event data in your component's state
        this.setState((prevState) => ({
          events: prevState.events.map((event) => {
            if (event.event_id === eventId) {
              return { ...event, ...updatedEvent };
            }
            return event;
          }),
        }));
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message to the user.
        console.error('Error updating event:', error);
      });
  }

  handleDelete = (eventId) => {
    // Make a DELETE request to delete the event
    fetch(`http://localhost:3001/api/deleteEvent/${eventId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response from the server, e.g., show a success message.
        console.log('Event deleted:', result);

        // Remove the deleted event from your component's state
        this.setState((prevState) => ({
          events: prevState.events.filter((event) => event.event_id !== eventId),
        }));
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message to the user.
        console.error('Error deleting event:', error);
      });
  }

  render() {
    const { events, editEventId } = this.state;

    return (
      <div>
        <h2>Event Table</h2>
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Event Venue</th>
              <th>Event Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.event_id}>
                <td>{event.event_name}</td>
                <td>{event.event_date}</td>
                <td>{event.event_venue}</td>
                <td>{event.event_category}</td>
                <td>
                  <button onClick={() => this.handleEditClick(event.event_id)}>Edit</button>
                  <button onClick={() => this.handleDelete(event.event_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editEventId && (
          <EventEditForm
            event={events.find((event) => event.event_id === editEventId)}
            onSave={this.handleSaveEdit}
          />
        )}
      </div>
    );
  }
}

export default EventTable;
