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

  // Update an existing news article
router.put('/updateNews/:id', (req, res) => {
  const newsId = req.params.id;
  const { news_title, news_description, news_image } = req.body;

  if (!news_title || !news_description || !news_image) {
    return res.status(400).json({ error: 'Missing required data for news article update' });
  }

  const updateQuery = `
    UPDATE news
    SET news_title = ?, news_description = ?, news_image = ?
    WHERE news_id = ?
  `;

  const values = [news_title, news_description, news_image, newsId];

  connection.query(updateQuery, values, (err, results) => {
    if (err) {
      console.error('Error updating news article:', err);
      return res.status(500).json({ error: 'Error updating news article' });
    }

    res.json({ success: true, message: 'News article updated successfully' });
  });
});

// Delete a news article
router.delete('/deleteNews/:id', (req, res) => {
  const newsId = req.params.id;

  const deleteQuery = `
    DELETE FROM news
    WHERE news_id = ?
  `;

  connection.query(deleteQuery, [newsId], (err, results) => {
    if (err) {
      console.error('Error deleting news article:', err);
      return res.status(500).json({ error: 'Error deleting news article' });
    }

    res.json({ success: true, message: 'News article deleted successfully' });
  });
});


  
  module.exports = router;