const connection = require('../config/db');
const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


router.post('/addEvent', (req, res) => {
    const eventData = req.body; 
  
    connection.query(
      'INSERT INTO events (event_name, event_description, event_date, event_venue, event_image, event_category, event_registration, event_student_coordinator, event_faculty_coordinator, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())',
      [
        eventData.event_name,
        eventData.event_description,
        eventData.event_date,
        eventData.event_venue,
        eventData.event_image,
        eventData.event_category,
        eventData.event_registration,
        eventData.event_student_coordinator,
        eventData.event_faculty_coordinator,
      ],
      (error, results) => {
        if (error) {
          console.error('Error inserting event:', error);
          res.status(500).json({ error: 'Failed to add the event' });
        } else {
          console.log('Event added with ID:', results.insertId);
          res.status(200).json({ message: 'Event added successfully' });
        }
      }
    );
  });
  

  router.get('/getevents', (req, res) => {
    connection.query('SELECT * FROM events', (err, results) => {
      if (err) {
        console.error('Error fetching events:', err);
        res.status(500).json({ error: 'Error fetching events' });
      } else {
        res.json(results);
      }
    });
  });
  
  

  module.exports = router;