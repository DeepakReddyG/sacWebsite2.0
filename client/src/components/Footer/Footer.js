import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import './MobileView.css'



const Footer = () => {

  const handleclick = () => {
    window.scrollTo(0, 0); 
  }
 
  return (
    <div className='FooterComponent'>   
        <div className="FooterContainer">
            <div className="FooterOne">
              <Link onClick={handleclick} to='/privacy' className='privacy' >Privacy Policy</Link>
              <Link onClick={handleclick} to='/terms' className='privacy' >Terms & Conditions</Link>
              <a href='mailto:2100031817@kluniversity.in' className='report' >Report Errors</a>
              <a href='mailto:2100031817@kluniversity.in' className='report' >Provide Feeback</a>
              <a href='mailto:2100031817@kluniversity.in' className='report' >Help</a>
            </div>
            <div className="FooterTwo">
              
              <div className="FooterTwo-one">
                <h3>THE MISSION</h3>
                <h5>The mission of Student Activity Center at esteemed Koneru Lakshmaiah Education Foundation is to develop principled, innovative leaders who improve the world and to generate ideas that advance management practice.</h5>
              </div>

              <div className="FooterTwo-two">

                <div className="Footer-two-inner">

                  <div className="official-communication">
                      <h3>Official Communication</h3>
                      <h4>K L Deemed to be University,
                          Admin. Office, 29-36-38, Museum Road, Governorpet, Vijayawada. A.P., India. 
                          Pincode: 520 002.
                      </h4>
                  </div>

                  <div className="campus">
                    <h3>Campus</h3>
                    <h4>K L Deemed to be University,
                        Green Fields, Vaddeswaram, 
                        Guntur District, A.P., INDIA. 
                        Pincode : 522 302.</h4>
                  </div>
                </div>
                <div className="contact">
                <h5 id='cont'>+91 08645 - 350200 (Andhrapradesh) <br /> +91 040 - 35045055 (Telangana) </h5>
                </div>
              </div>

            </div>

            <div className="FooterThree">
              <div className="FooterThree-one">
                <span id='copyright'>
                  <i class="fa fa-copyright" aria-hidden="true"></i> <p>2023 KLEF - Student Activity Center | Designed & Developed by <a href="https://www.linkedin.com/in/deepakreddygathpa/">Pavan Karthik</a> & <a href="https://www.linkedin.com/in/tadikondasaimanikanta/">Tadikonda Sai Manikanta</a>
                  </p>
                </span>
              </div>


              <div className="FooterThree-two">
                <span id='socialIcons'>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                </span>
              </div>
            </div>

        </div>

    </div>
  )
}

export default Footer