const express = require('express');
const newsController = require('../controllers/newsController');

const router = express.Router();

router.use('/news', newsController);

module.exports = router;
