import React, { useState, useEffect } from 'react';
import './Page.css';

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (authenticated) {
      fetch('http://localhost:3001/api/feedbackdata?password=123') // Replace '123' with your actual password
        .then((response) => response.json())
        .then((data) =>  setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [authenticated]);

  const handlePasswordSubmit = () => {
    if (password === '123') { // Replace '123' with your actual password
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

 
  return (
    <div>
      {!authenticated?
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Submit</button>
        </div>
       : 
        <div>
          <h2>Data Display</h2>
          <table>
            <thead>
              <tr>
                <th className="id" >ID</th>
                <th>University ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Major Area</th>
                <th>Branch</th>
                <th>Suggestions</th>
                <th>Staff Interaction</th>
                <th>Overall Satisfaction</th>
              </tr>
            </thead>
            <tbody>  
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="id" >{item.id}</td>
                  <td>{item.universityId}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.MajorArea}</td>
                  <td>{item.branch}</td>
                  <td>{item.Suggestions}</td>
                  <td>{item.Staff_Interaction}</td>
                  <td>{item.Overall_Satisfaction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default DataDisplay;