import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

import NavBar from './NavBar';

import Footer from '../components/home/Footer/Footer';
import { activities_week_02, activities_week_03, activities_week_04, julyReports, augustReports } from './DataArray';
import { projects } from './DataArray';

const Page = () => {
  const [isWeek02TableVisible, setWeek02TableVisible] = useState(false);
  const [isWeek03TableVisible, setWeek03TableVisible] = useState(false);
  const [isWeek02ButtonVisible, setWeek02ButtonVisible] = useState(true);
  const [isWeek03ButtonVisible, setWeek03ButtonVisible] = useState(true);
  const [isWeek04ButtonVisible, setWeek04ButtonVisible] = useState(true);
  const [isWeek04TableVisible, setWeek04TableVisible] = useState(false);
  const [isJulyReportsableVisible, setJulyReportsableVisible] = useState(false);
  const [isJulyReporButtonVisible, setJulyReporButtonVisible] = useState(true);
  const [isAugustReportsableVisible, setAugustReportsableVisible] = useState(false);
  const [isAugustReporButtonVisible, setAugustReporButtonVisible] = useState(true);



  const toggleJulyReportsable = () => {
    setJulyReportsableVisible(!isJulyReportsableVisible);
    setJulyReporButtonVisible(!isJulyReporButtonVisible);
  };

  const toggleAugustReportsable = () => {
    setAugustReportsableVisible(!isAugustReportsableVisible);
    setAugustReporButtonVisible(!isAugustReporButtonVisible);
  };

  const toggleWeek02Table = () => {
    setWeek02TableVisible(!isWeek02TableVisible);
    setWeek02ButtonVisible(!isWeek02ButtonVisible);
  };

  const toggleWeek03Table = () => {
    setWeek03TableVisible(!isWeek03TableVisible);
    setWeek03ButtonVisible(!isWeek03ButtonVisible);
  };

   const toggleWeek04Table = () => {
    setWeek04TableVisible(!isWeek04TableVisible);
    setWeek04ButtonVisible(!isWeek04ButtonVisible);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='SILComponent'>
      <div className="Event-Nav">
        <div className='HomeNavComponent'>
          <div className="HomeNavContainer">
            <div className="HomeNavLogo">
              <div className="HomeNavLogo-in">
                <Link className='HomeNavLogo-in-link' to='/'><h1>Student Activity Center</h1></Link>
              </div>
            </div>
            <div className="HomeNavIndex">
              <div className="HomeNavIndex-in">
                <Link className='HomeNavIndex-in-link' to='/'>Back to Home</Link>
                <Link className='HomeNavIndex-in-link' to='/'>Explore Clubs</Link>
                <Link className='HomeNavIndex-in-link' to='/gallery'>Gallery</Link>
                <Link className='HomeNavIndex-in-link' to='/events'>Events</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Conditionally render the NavBar based on screenWidth */}
        {screenWidth < 768 ? <NavBar /> : ''}
      </div>
      <div className="SILContainer">
        <div className="sil-header">
          <div className="sil-header-in">
            <h1>Social Immersive Learning through Student Activity Center</h1>
            <p>The Student Activity Center is <mark>duly authorized to facilitate activities associated with the Social Immersive Learning Course</mark>. The following is a comprehensive list of activities that the Student Activity Center (SAC) organizes, scheduled on the dates specified, in collaboration with the diverse clubs operating within SAC.</p>
          </div>
        </div>

        <div className="silactivites">
          
        <div className="silactivities-in">
  <div className="silactivities-in-header">
    <h1>List of Activities & Events in July</h1>
    <button className='openAndCloseBtn' onClick={toggleJulyReportsable}>
      {isJulyReporButtonVisible ? 'Open Table' : 'Close Table'}
    </button>
  </div>
  {isJulyReportsableVisible && (
   <table>
   <thead>
     <tr>
       <th>Sno</th>
       <th>Activity Name</th>
       <th>Organizing Club</th>
       <th>Date</th>
       <th>Time</th>
       {/* <th>Venue</th> */}
       <th>Student Organizer</th>
        <th>Report</th>
     </tr>
   </thead>
   <tbody>
  {julyReports.map((activity, index) => (
    <tr key={index}>
      <td>{activity.sno}</td>
      <td>{activity.name}</td>
      <td>{activity.clubname}</td>
      <td>{activity.date}</td>
      <td>{activity.time}</td>
      {/* <td>{activity.venue}</td> */}
      <td>{activity.organizer}</td>
      <td>
      <a
          className={activity.report === 'NA' ? 'report-not-available' : 'report-available'}
          href={activity.report === 'NA' ? '#' : activity.report}
        >
          {activity.report === 'NA' ? 'No Report' : 'Click Here'}
        </a>
      </td>
    </tr>
  ))}
</tbody>


 </table>
  )}
</div>

<div className="silactivities-in">
  <div className="silactivities-in-header">
    <h1>List of Activities & Events in August</h1>
    <button className='openAndCloseBtn' onClick={toggleAugustReportsable}>
      {isAugustReporButtonVisible ? 'Open Table' : 'Close Table'}
    </button>
  </div>
  {isAugustReportsableVisible && (
   <table>
   <thead>
     <tr>
       <th>Sno</th>
       <th>Activity Name</th>
       <th>Organizing Club</th>
       <th>Date</th>
       <th>Time</th>
       {/* <th>Venue</th> */}
       <th>Student Organizer</th>
        <th>Report</th>
     </tr>
   </thead>
   <tbody>
  {augustReports.map((activity, index) => (
    <tr key={index}>
      <td>{activity.sno}</td>
      <td>{activity.name}</td>
      <td>{activity.clubname}</td>
      <td>{activity.date}</td>
      <td>{activity.time}</td>
      {/* <td>{activity.venue}</td> */}
      <td>{activity.organizer}</td>
      <td>
      <a
          className={activity.report === 'NA' ? 'report-not-available' : 'report-available'}
          href={activity.report === 'NA' ? '#' : activity.report}
        >
          {activity.report === 'NA' ? 'No Report' : 'Click Here'}
        </a>
      </td>
    </tr>
  ))}
</tbody>


 </table>
  )}
</div>

          <div className="silactivities-in">
  <div className="silactivities-in-header">
    <h1>Week 04 List of Activities & Events</h1>
    <button className='openAndCloseBtn' onClick={toggleWeek04Table}>
      {isWeek04ButtonVisible ? 'Open Table' : 'Close Table'}
    </button>
  </div>
  {isWeek04TableVisible && (
   <table>
   <thead>
     <tr>
       <th>Sno</th>
       <th>Activity Name</th>
       <th>Organizing Club</th>
       <th>Date</th>
       <th>Time</th>
       {/* <th>Venue</th> */}
       <th>Student Organizer</th>
        <th>Report</th>
     </tr>
   </thead>
   <tbody>
  {activities_week_04.map((activity, index) => (
    <tr key={index}>
      <td>{activity.sno}</td>
      <td>{activity.name}</td>
      <td>{activity.clubname}</td>
      <td>{activity.date}</td>
      <td>{activity.time}</td>
      {/* <td>{activity.venue}</td> */}
      <td>{activity.organizer}</td>
      <td>
      <a
          className={activity.report === 'NA' ? 'report-not-available' : 'report-available'}
          href={activity.report === 'NA' ? '#' : activity.report}
        >
          {activity.report === 'NA' ? 'No Report' : 'Click Here'}
        </a>
      </td>
    </tr>
  ))}
</tbody>


 </table>
  )}
</div>




        <div className="silactivities-in">
  <div className="silactivities-in-header">
    <h1>Week 03 List of Activities & Events</h1>
    <button className='openAndCloseBtn' onClick={toggleWeek03Table}>
      {isWeek03ButtonVisible ? 'Open Table' : 'Close Table'}
    </button>
  </div>
  {isWeek03TableVisible && (
    <table>
    <thead>
      <tr>
        <th>Sno</th>
        <th>Activity Name</th>
        <th>Organizing Club</th>
        <th>Date</th>
        <th>Time</th>
        {/* <th>Venue</th> */}
        <th>Student Organizer</th>
         <th>Report</th>
      </tr>
    </thead>
    <tbody>
  {activities_week_03.map((activity, index) => (
    <tr key={index}>
      <td>{activity.sno}</td>
      <td>{activity.name}</td>
      <td>{activity.clubname}</td>
      <td>{activity.date}</td>
      <td>{activity.time}</td>
      {/* <td>{activity.venue}</td> */}
      <td>{activity.organizer}</td>
      <td>
      <a
          className={activity.report === 'NA' ? 'report-not-available' : 'report-available'}
          href={activity.report === 'NA' ? '#' : activity.report}
        >
          {activity.report === 'NA' ? 'No Report' : 'Click Here'}
        </a>
      </td>
    </tr>
  ))}
</tbody>

 
  </table>
  )}
        </div>

<div className="silactivities-in">
  <div className="silactivities-in-header">
    <h1>Week 02 List of Activities & Events</h1>
    <button className='openAndCloseBtn' onClick={toggleWeek02Table}>
      {isWeek02ButtonVisible ? 'Open Table' : 'Close Table'}
    </button>
  </div>
  {isWeek02TableVisible && (
   <table>
   <thead>
     <tr>
       <th>Sno</th>
       <th>Activity Name</th>
       <th>Organizing Club</th>
       <th>Date</th>
       <th>Time</th>
       {/* <th>Venue</th> */}
       <th>Student Organizer</th>
        <th>Report</th>
     </tr>
   </thead>
   <tbody>
  {activities_week_02.map((activity, index) => (
    <tr key={index}>
      <td>{activity.sno}</td>
      <td>{activity.name}</td>
      <td>{activity.clubname}</td>
      <td>{activity.date}</td>
      <td>{activity.time}</td>
      {/* <td>{activity.venue}</td> */}
      <td>{activity.organizer}</td>
      <td>
      <a
          className={activity.report === 'NA' ? 'report-not-available' : 'report-available'}
          href={activity.report === 'NA' ? '#' : activity.report}
        >
          {activity.report === 'NA' ? 'No Report' : 'Click Here'}
        </a>
      </td>
    </tr>
  ))}
</tbody>




 </table>
  )}
</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
