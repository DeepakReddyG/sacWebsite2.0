require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = process.env.server_port || 3001; // Use the environment variable or default to 3001
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

app.get('/x', (req, res) => {
  res.send('Hello World!');
  console.log('Hello World!');
});


app.post('/api/addEvent', (req, res) => {
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


app.get('/api/getevents', (req, res) => {
  // Query your database to fetch the list of events
  connection.query('SELECT * FROM events', (err, results) => {
    if (err) {
      console.error('Error fetching events:', err);
      res.status(500).json({ error: 'Error fetching events' });
    } else {
      // Send the list of events as a JSON response
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
