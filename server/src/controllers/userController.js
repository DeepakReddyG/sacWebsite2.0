const connection = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = require('../config/jwt');
const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


router.post('/api/login', (req, res) => {
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
                  { expiresIn: '1m' }
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
  
 router.post('/api/register', async (req, res) => {
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

  module.exports = router;