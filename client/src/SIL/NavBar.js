import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


import '../pages/Events/NavBar'

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
        <div className={`PageNavComponent ${isOpen ? 'open' : ''}`}>
          <div className="PageNavComponent-container">
            <div className="Toggle-Head">
              <h3>K L Student Activity Center</h3>
            </div>  
            <div className="Toggle-button">
              <CloseIcon
                className={`close-icon ${isOpen ? 'show' : 'hide'}`}
                onClick={toggleNav}
              />
              <DensityMediumIcon 
                className={`density-icon ${isOpen ? 'hide' : 'show'}`}
                onClick={toggleNav}
              />
            </div>
          </div>
          <div className={`Toggle-Nav-links ${isOpen ? 'toggleshow' : 'togglehide'}`}>
            <ul> 
              <li><Link className='HomeNavIndex-in-link' to='/'>Back to Home</Link></li>
              <li><Link className='HomeNavIndex-in-link' to='/'>Explore Clubs</Link></li>
              <li><Link className='HomeNavIndex-in-link' to='/blogs'>Read Blogs</Link></li>
              <li><Link className='HomeNavIndex-in-link' to='/events'>Events</Link></li>
            </ul>
           </div>
        </div>
  )
}

export default NavBar