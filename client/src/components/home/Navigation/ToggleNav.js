import React, { useState } from 'react';
import './MobileView.css';
import { Link as Scroll } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function ToggleNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`Toggle-Nav ${isOpen ? 'open' : ''}`}>
      <div className="Toggle-Nav-in">
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
            <li><Scroll onClick={toggleNav} className='nav-scroll-links' activeClass="active" to="about" spy ={true} smooth={true} offset={-10} duration={200} >About</Scroll></li>
            <li><Scroll onClick={toggleNav} className='nav-scroll-links' activeClass="active" to="projects" spy ={true} smooth={true} offset={-50} duration={200}>Clubs</Scroll></li>
            <li><Scroll onClick={toggleNav} className='nav-scroll-links' activeClass="active" to="stories" spy ={true} smooth={true} offset={-50} duration={200}>Blogs</Scroll></li>
            <li><Scroll onClick={toggleNav} className='nav-scroll-links' activeClass="active" to="news" spy ={true} smooth={true} offset={-60} duration={200} >News</Scroll></li>
            <li><Scroll onClick={toggleNav} className='nav-scroll-links' activeClass="active" to="upcoming-events" spy ={true} smooth={true} offset={-60} duration={200} >Events</Scroll></li>
            {/* <li><Link className='nav-links' to='/StudentClubs'>Gallery</Link></li> */}
            <li><Scroll onClick={toggleNav} className='nav-scroll-links' activeClass="active" to="officers" spy ={true} smooth={true} offset={-60} duration={200} >Leadership</Scroll></li>
            <li><Scroll onClick={toggleNav} className='nav-scroll-links' activeClass="active" to="faq" spy ={true} smooth={true} offset={-60} duration={200} >FAQ</Scroll></li>
            {/* <li><Scroll className='nav-scroll-links' activeClass="active" to="" spy ={true} smooth={true} offset={-50} duration={200} onClick={handleClickOpen}>Notifications</Scroll></li> */}
        </ul>
      </div>
    </div>
  );
}

export default ToggleNav;
