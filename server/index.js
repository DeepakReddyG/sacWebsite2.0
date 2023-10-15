require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

// Define your secret key for JWT
const secretKey = 'gathpa';
app.post('/api/register', async (req, res) => {
  const { user_name, user_password, user_role } = req.body;

  try {
    // Check if the user already exists in the database
    const userExists = await new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE user_name = ?', [user_name], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.length > 0);
        }
      });
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the user's password before storing it in the database
    const hashedPassword = await bcrypt.hash(user_password, 10); // You can adjust the number of salt rounds

    // Insert the user data into the 'users' table
    const insertQuery = `
      INSERT INTO users (user_name, user_password, user_role, created_at)
      VALUES (?, ?, ?, NOW())
    `;

    connection.query(insertQuery, [user_name, hashedPassword, user_role], (err) => {
      if (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ error: 'Error registering user' });
      }

      console.log('User registered successfully');
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ error: 'Error during user registration' });
  }
});

app.post('/api/login', (req, res) => {
  const { user_name, user_password } = req.body;
  connection.query(
    'SELECT * FROM users WHERE user_name = ?',
    [user_name],
    (error, results) => {
      if (error) {
        console.error('Error during authentication:', error);
        res.status(500).json({ isAuthenticated: false, token: null });
      } else {
        if (results.length > 0) {
          const user = results[0];

          bcrypt.compare(user_password, user.user_password, (err, passwordMatch) => {
            if (passwordMatch) {
              const token = jwt.sign(
                { user_id: user.user_id, user_name: user.user_name, user_role: user.user_role },
                secretKey,
                { expiresIn: '1h' }
              );
              res.status(200).json({ isAuthenticated: true, token, user });
            } else {
              res.status(401).json({ isAuthenticated: false, token: null });
            }
          });
        } else {
          res.status(401).json({ isAuthenticated: false, token: null });
        }
      }
    }
  );
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
