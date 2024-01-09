const express = require('express')
const router = express.Router()
const handleAttendance = require('../../model/attendance/attend.Model')

router.get('/:userId', async (req, res) => {

    console.log(req.params)
    const { userId } = req.params
    try {
        const response = await handleAttendance(userId)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router