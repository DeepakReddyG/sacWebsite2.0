import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../pages/Auth/AuthContext';

import EventCard from './eventCard'; // Import the EventCard component
import './page.css';
const NewsManagement = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <div>
        <EventList />
      </div>
    </div>
  );
};

class EventList extends Component {
  state = {
    events: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:3001/api/getevents');
      this.setState({ events: response.data, loading: false });
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }

  render() {
    const { events, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

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

export default NewsManagement;
