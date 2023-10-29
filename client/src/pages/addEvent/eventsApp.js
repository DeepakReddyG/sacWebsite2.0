import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GetEvents from './getEvents';
import EventsCrud from './eventsCrud/eventsCrudTable';
import EventEdit from './eventsCrud/eventEditForm'; // Create or import the EventEdit component

const EventsApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetEvents />} />
        <Route path="/crud" element={<EventsCrud />} />
        <Route path="/crud/:id" element={<EventEdit />} /> {/* Add the route for event editing */}
      </Routes>
    </div>
  );
}

export default EventsApp;
