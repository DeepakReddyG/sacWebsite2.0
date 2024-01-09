const { pool } = require('../../config/db');


const handleEvents = async () => {
    
    try {
        const response = await pool.query(`
            SELECT 
            * FROM events
            `)
        
        return response[0].length > 0 ? response[0] : { message : 'No events found'}
    } catch (error) {
        return error.message
    }
}

module.exports = {
    handleEvents
}