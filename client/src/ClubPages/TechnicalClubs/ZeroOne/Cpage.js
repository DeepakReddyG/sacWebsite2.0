import React from 'react';
import './Cpage.css';
import { Link as Scroll } from 'react-scroll';
import  { useState } from 'react';

import { BsFileEarmarkCode } from 'react-icons/bs';

import deepakimg from '../../../Assets/NewsImages/PreBootCamp.jpg'
import deepak from '../../../Assets/CouncilMembers/CouncilMember_02.png'
import Footer from '../../../components/Footer/Footer'
import Navbar from './NavBar'

var Page = () => {

  const [activity, setActivity] = useState(1)


  const handleActivity = (Number) => {
    setActivity(Number)
  }

  return (
    <div>
        <div className="clubs ZeroOne">
          <div className="clubs-in">
            <div className="clubs-nav">
                <Navbar/>
            </div>

{/* ----------------------------------Hero-------------------------------------------- */}


            <div className="clubs-body">
                <div className="club-body-in">
                  <div className="club-body-in-one">
                      <div className="club-in-head">
                        <h1>Inspire. Educate. Empower</h1>
                      </div>
                    </div>
                      <div className="club-body-in-two">
                        <div className="club-body-in-two-in">
                             <p>This is a community which provides <span> free hands-on training </span> in various fields of computer science and have an inclusive community focusing on a <span> learn by doing </span> approach.</p>
                          </div>
                      </div>
                      <div className="club-body-in-three">
                        <button>
                          <Scroll to="clubs-what-do" smooth={true} offset={-150} duration={0}>
                            <p>Explore the Club</p>
                          </Scroll>
                        </button>
                      </div>
                  </div>
              </div>

{/* ----------------------------------What We Do-------------------------------------------- */}
                <div className="clubs-what-do">
                  <div className="club-what-do-in">

                  <div className="club-what-do-in-one">
                    <h1>What We Do</h1>
                  </div>

                  <div className="club-what-do-in-two">
                    <div className="club-what-do-box">
                      {/* <BsFileEarmarkCode className='icons-react'/> */}
                       Web Development
                        </div>
                          <div className="club-what-do-box">
                          {/* <BsFileEarmarkCode className='icons-reactPresident ZeroOne */}
                           Web Development
                       </div>
                    <div className="club-what-do-box">
                  { /* <BsFileEarmarkCode className='icons-react'/> */}
                   Web Development
                </div>
              </div>
          
              <div className="club-what-do-in-three">
                <div className="club-what-do-box">
                  {/* <BsFileEarmarkCode className='icons-react'/> */}
                   Web Development
                    </div>
                     <div className="club-what-do-box">
                       {/* <BsFileEarmarkCode className='icons-react'/> */}
                        Web Development
                        </div>
                     <div className="club-what-do-box">
                    {/* <BsFileEarmarkCode className='icons-react'/> */}
                     Web Development
                </div>
              </div>
            </div>
          </div>

{/* ----------------------------------Glimpses-------------------------------------------- */}
              <div className="clubs-Glimpse">
                <div className="clubs-Glimpse-in">
                  <div className="clubs-Glimpse-in-one">
                    <h1>Glimpses</h1>
                      </div>
                       <div className="clubs-Glimpse-in-two">
                          <div className="clubs-Glimpse-img-box">
                            <img src={deepakimg} alt="" />
                          </div>
                          <div className="clubs-Glimpse-img-box">
                            <img src={deepakimg} alt="" />
                          </div>
                       </div>
                  <div className="clubs-Glimpse-in-three">
                     <div className="clubs-Glimpse-img-box">
                       <img src={deepakimg} alt="" />
                    </div>
                      <div className="clubs-Glimpse-img-box">
                        <img src={deepakimg} alt="" />
                    </div>
                      <div className="clubs-Glimpse-img-box">
                       <img src={deepakimg} alt="" />
                    </div>
                  </div>
                  <div className="clubs-Glimpse-in-four">
                    <div className="clubs-Glimpse-img-box">
                      <img src={deepakimg} alt="" />
                    </div>
                      <div className="clubs-Glimpse-img-box">
                        <img src={deepakimg} alt="" />
                    </div>
                  </div>
                </div>
              </div>


{/* ----------------------------------Team-------------------------------------------- */}

              <div className="clubs-team">
                <div className="clubs-team-in">

                  <div className="clubs-team-in-one">
                    <h1>Team</h1>
                     </div>

                  <div className="clubs-team-in-two">
                    <div className="member-box">
                        <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                      </div>
                  <div className="member-box">
                    <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                  </div>
                    <div className="member-box">
                       <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                    </div>
                       </div>

                  <div className="clubs-team-in-three">
                  <div className="member-box">
                        <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                      </div>
                  <div className="member-box">
                    <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                  </div>
                    <div className="member-box">
                       <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                    </div>
                </div>

              </div>
            </div>
              

{/* ----------------------------------Activities-------------------------------------------- */}


              <div className="club-activity-component">
              <div className="clubs-Activities">
                <div className="club-activity-head">
                  <h1>Activities</h1>
                  </div>
                <div className="clubs-Activities-in">
                  <div className="clubs-Activities-in-one">
                          <div className = { activity === 1 ? 'activity-content-one' : 'activity-hide' } id='one-color'></div>
                          <div className = { activity === 2 ? 'activity-content-one' : 'activity-hide' } id='two-color'></div>
                          <div className = { activity === 3 ? 'activity-content-one' : 'activity-hide' } id='three-color'></div>
                          <div className = { activity === 4 ? 'activity-content-one' : 'activity-hide' } id='four-color'></div>
                     </div>
                      <div className="clubs-Activities-in-two">
                         <div id = { activity === 1 ? 'activity-content-hover' : '' }
                          className="Activity-box-one" onClick={() => handleActivity(1)}>Activity-1</div>
                         <div id = { activity === 2 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(2)}>Activity-2</div>
                         <div id = { activity === 3 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(3)}>Activity-3</div>
                         <div id = { activity === 4 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(4)}>Activity-4</div>
                    </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="club-footer">
          <div className="club-footer-in">
              <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Page