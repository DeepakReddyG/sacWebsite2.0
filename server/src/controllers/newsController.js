const connection = require('../config/db');
const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


router.post('/addNews', (req, res) => {
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
  
  
  router.get('/getNews', (req, res) => {
    connection.query('SELECT * FROM news', (error, results) => {
      if (error) {
        console.error('Error fetching news articles:', error);
        res.status(500).json({ error: 'Error fetching news articles' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  module.exports = router;