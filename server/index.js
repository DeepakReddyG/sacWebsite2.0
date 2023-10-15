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









/* ---------------------- events --------------------- */

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
  connection.query('SELECT * FROM events', (err, results) => {
    if (err) {
      console.error('Error fetching events:', err);
      res.status(500).json({ error: 'Error fetching events' });
    } else {
      res.json(results);
    }
  });
});


/*  ---------------------- news --------------------- */

app.post('/api/addNews', (req, res) => {
  const { news_title, news_description, news_image } = req.body;
  if (!news_title || !news_description || !news_image) {
    return res.status(400).json({ error: 'Missing required data for news article' });
  }
  const created_at = new Date().toISOString(); 
  const insertQuery = `
    INSERT INTO news (news_title, news_description, news_image, created_at)
    VALUES (?, ?, ?, ?)
  `;

  const values = [news_title, news_description, news_image, created_at];

  connection.query(insertQuery, values, (err, results) => {
    if (err) {
      console.error('Error inserting news:', err);
      return res.status(500).json({ error: 'Error inserting news article' });
    }

    res.json({ success: true, message: 'News article added successfully' });
  });
});


app.get('/api/getNews', (req, res) => {
  connection.query('SELECT * FROM news', (error, results) => {
    if (error) {
      console.error('Error fetching news articles:', error);
      res.status(500).json({ error: 'Error fetching news articles' });
    } else {
      res.status(200).json(results);
    }
  });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
