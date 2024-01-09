import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import './Page.css';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import sacLogo from '../../../Assets/Logos/OfficialSacLogo.png';


const Page = () => {

  const [isNavScrolled, setNavScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleclick = () => {
    window.scrollTo(0, 0); 
  }

  const [open, setOpen] = React.useState(false);

  

  const handleClose = () => {
    setOpen(false);
  };
  return (
    
    <div className='navbarComponent'>
        <div className={`nav ${isNavScrolled ? 'scrolled' : ''}`}>
            <div className="nav-in">
              <div className="nav-in-two">
                <div className="nav-in-two-in">
                  {!isNavScrolled && <img className='logoini' src={sacLogo} alt="" />}
                  {isNavScrolled && <h1><Scroll className='homelink' activeClass="active" to="Home-one-in" spy ={true} smooth={true} offset={-10} duration={400} >Student Activity Center</Scroll></h1>}
                </div>
              </div>
              <div className="nav-in-one">
                <div className="nav-in-one-in">
                  <ul>
                    <li><Scroll className='nav-scroll-links' activeClass="active" to="about" spy ={true} smooth={true} offset={-10} duration={200} >About</Scroll></li>
                    <li><Scroll className='nav-scroll-links' activeClass="active" to="projects" spy ={true} smooth={true} offset={-50} duration={200}>Clubs</Scroll></li>
                    <li><Scroll className='nav-scroll-links' activeClass="active" to="stories" spy ={true} smooth={true} offset={-50} duration={200}>Blogs</Scroll></li>
                    <li><Scroll className='nav-scroll-links' activeClass="active" to="news" spy ={true} smooth={true} offset={-60} duration={200} >News</Scroll></li>
                    <li><Scroll className='nav-scroll-links' activeClass="active" to="upcoming-events" spy ={true} smooth={true} offset={-60} duration={200} >Events</Scroll></li>
                    {/* <li><Link className='nav-links' to='/StudentClubs'>Gallery</Link></li> */}
                    <li><Scroll className='nav-scroll-links' activeClass="active" to="officers" spy ={true} smooth={true} offset={-60} duration={200} >Leadership</Scroll></li>
                    {/* <li><Scroll className='nav-scroll-links' activeClass="active" to="faq" spy ={true} smooth={true} offset={-60} duration={200} >SIL</Scroll></li> */}
                    <li><Link onClick={handleclick} className='nav-links' to='/completedevents'>Reports</Link></li>
                    <li><Link onClick={handleclick} className='nav-links' to='/sil'>SIL</Link></li>
                    {/* <li><Scroll className='nav-scroll-links' activeClass="active" to="" spy ={true} smooth={true} offset={-50} duration={200} onClick={handleClickOpen}>Notifications</Scroll></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Noticiations"}
              </DialogTitle>
              <DialogContent>
                <div className="notification-diag">
                  <div className="notification-diag-in">
                    <p>Getting Started with Google Cloud - ZeroOne Club</p>
                  </div>
                </div>
                <div className="notification-diag">
                  <div className="notification-diag-in">
                    <p>Getting Started with Google Cloud - ZeroOne Club</p>
                  </div>
                </div>
                <div className="notification-diag">
                  <div className="notification-diag-in">
                    <p>Getting Started with Google Cloud - ZeroOne Club</p>
                  </div>
                </div>
                <div className="notification-diag">
                  <div className="notification-diag-in">
                    <p>Getting Started with Google Cloud - ZeroOne Club</p>
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>Close</Button>
              </DialogActions>
            </Dialog>
          </div>
          
    </div>
  )
}

export default Page