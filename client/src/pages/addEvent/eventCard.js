import React from 'react';
import './page.css';

const EventCard = ({ event }) => {
  return (
            <div className="event-card">
                <div className="event-card-in">
                    <div className="event-card-one">
                        <img src={event.event_image} alt="" />
                    </div>
                    <div className="event-card-two">
                        <div className="event-card-two-one">
                            <h3>{event.event_name}</h3>
                            <p>{event.event_description}</p>
                        </div>
                        <div className="event-card-two-two">
                            <p>Date: {event.event_date}</p>
                            <p>Venue: {event.event_venue}</p>
                        </div>
                    </div>
                </div>
            </div>
  );
};

export default EventCard;

