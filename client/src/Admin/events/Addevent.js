import React, { useState } from 'react';
import axios from 'axios';
import ChooseEvent from './ChooseEvent'

const Upload = () => {

    const [file, setFile] = useState(null);
    const [selectedEventId, setSelectedEventId] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const host = process.env.REACT_APP_HOST

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };

    const handleUpload = async () => {

        const formData = new FormData();
        formData.append('file', file);

        try {
            
            const response = await axios.post(`${host}/upload/${selectedEventId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
          setResponse(response.data);
        } catch (error) {
            setError(error);
            console.log(error);
        }

    }

    console.log(selectedEventId)
    
  return (
       <div className="UploadComponent">
            <div className="UploadComponent-in">
                <h1>Select Event</h1>
                <ChooseEvent onEventSelected={(eventId) => setSelectedEventId(eventId)}/>

                <div>
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleUpload}>Upload</button>
                </div>
            </div>
       </div>
  )
}

export default Upload