const { pool } = require('../../config/db');


const handleAttendance = async (userId) => {

    try {
        const response = await pool.query(
        `
            SELECT 
                  events.title, events.description, events.date, 
                  events.time, events.venue, student_attendance.student_id
            FROM events
            INNER JOIN student_attendance
            ON events.id = student_attendance.event_id
            WHERE student_attendance.student_id = ?
        `   , [userId],
        )
        
       return response[0].length > 0 ? response[0] : { message: "No attendance found"}

    } catch (error) {
        return error
    }   
}

module.exports = handleAttendance