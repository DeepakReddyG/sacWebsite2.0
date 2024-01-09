const { pool } = require('../../config/db');


const parseCSV = (csvData) => {
    return new Promise((resolve, reject) => {
        const data = csvData.filter(Boolean).map(row => row.trim());
        resolve(data);
    });
};

const insertDataIntoDatabase = async (data, eventId) => {
    try {
        for (const studentId of data) {

            const response = await pool.query('INSERT INTO student_attendance (event_id, student_id) VALUES (?, ?)', [eventId, studentId]);
        }

    } catch (error) {
        console.error('Error inserting data into the database:', error);
        throw error;
    }
};



const uploadAttendance = async (req, res, eventId) => {


    try {

        if (req.file === undefined) {
            return { message: "Please upload a CSV file!" };
        }


        const csvData = req.file.buffer.toString('utf8').split(/\r?\n/);

        const parsedData = await parseCSV(csvData);
        await insertDataIntoDatabase(parsedData, eventId);

        return { message: "Uploaded the file successfully: " + req.file.originalname };

    } catch (error) {
        console.error('Error uploading attendance:', error);
        throw error;
    }
};

module.exports = uploadAttendance;
