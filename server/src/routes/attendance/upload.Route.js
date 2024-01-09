const express = require('express')
const router = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const handleAttendance = require('../../model/attendance/upload.Model')

router.post('/:eventId', upload.single('file'), async (req, res) => {

    const { eventId } = req.params;

    if ( eventId === undefined ) {
        return res.status(400).send({ message: "Please provide an event ID." });
    }

    console.log(eventId)

    console.log("EventId",eventId)
    const response = await handleAttendance(req, res, eventId);
    console.log(response)
    res.send(response)
})  

module.exports = router