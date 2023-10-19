const express = require('express');
const newsController = require('../controllers/newsController');

const router = express.Router();

router.use('/', newsController);

module.exports = router;
