const express = require('express');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.use('/', eventController);

module.exports = router;
