import React from 'react'
import axiosPrivate from '../../hooks/UseAxiosPrivate'
import { useState } from 'react'

function GetAttendance() {

    const [studentData, setStudentData] = useState([])
    const [studentId, setStudentId] = useState('')
    const [error, setError] = useState(null);
    const host = process.env.REACT_APP_HOST
    const axios = axiosPrivate();

    
    const handleStudentAtt = async (e) => {

        try {

            if(studentId === '') {
                alert('Enter your student ID')
                return
            }
            const response = await axios.get(`${host}/attendance/${studentId}`)

            setStudentData(response.data)

        } catch (error) {
            console.log(error)  
            setError(error)
        }
    }

    const handleChange = (e) => {

        setStudentId(e.target.value)
    }

  return (
        <div className="GetAttendance">
            <div className="GetAttendance-in">
                 
                    <h2>Get Attendance</h2>
                    <p>Enter your student ID</p>
                
                    <input type="text" 
                        name='studentData'
                        placeholder='Enter your student ID'
                        value={studentId}
                        onChange={handleChange}
                    />
                
                    <button onClick={handleStudentAtt}>Submit</button>
                 
                <table>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Event Name</th>
                            <th>Event Date</th>
                            <th>Event Venue</th>
                        </tr>
                    </thead>
                    <tbody>
                    { studentData && studentData.length > 0 ? (
                        studentData.map((student, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{student?.student_id}</td>
                                <td>{student?.title}</td>
                                <td>{student?.date}</td>
                                <td>{student?.Venue}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            {studentData.message}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default GetAttendance