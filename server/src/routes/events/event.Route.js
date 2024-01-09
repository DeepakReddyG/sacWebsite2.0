const express = require('express');
const router = express.Router();

const { handleEvents } = require('../../model/events/event.Model');


router.get('/', async (req, res) => {
    
    const response = await handleEvents();
    
    res.send(response)
})

module.exports = router;