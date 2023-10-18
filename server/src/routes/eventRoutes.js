const express = require('express');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.use('/event', eventController);

module.exports = router;
