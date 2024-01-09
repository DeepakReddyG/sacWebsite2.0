import React from 'react'
import { useState, useEffect } from 'react'
import axiosPrivate from '../../hooks/UseAxiosPrivate'


const ChooseEvent = ({ onEventSelected }) => {

    const [event, setEvent] = useState([])
    const [selectedEventId, setSelectedEventId] = useState(null);
    const axios = axiosPrivate();
    const host = process.env.REACT_APP_HOST


    useEffect(  () => {

        const fetchData = async () => {

            try {
                const response = await axios.get(`${host}/events`)
                setEvent(response.data)
            } catch (error) {
                
            }
        }   
        fetchData()
    }, [])

    const handleEventId = (e) => {
        e.preventDefault();
        onEventSelected(selectedEventId);
    }



  return (
        <div className="ChooseEventComponent">
            <div className="ChooseEventComponent-in">
                <select onChange={(e) => setSelectedEventId(e.target.value)}>
                    {event.map((event) => (
                        <option key={event.id} value={event.id}>
                            {event.name} 
                        </option>
                    ))}
                </select>
                <button onClick={handleEventId}>Submit</button>
            </div>
        </div>
  )
}

export default ChooseEvent