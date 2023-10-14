import React, { Component } from 'react';
import axios from 'axios';
import EventCard from './eventCard'; // Import the EventCard component
import './page.css';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    // Fetch the list of events from the server when the component mounts
    axios.get('http://localhost:3001/api/getevents')
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }

  render() {
    const { events } = this.state;

    return (
      <div className='event-cards-main'>
        <div className="event-card-container">
          {events.map((event) => (
            <EventCard key={event.event_id} event={event} />
          ))}
        </div>
      </div>
    );
  }
}

export default EventList;
