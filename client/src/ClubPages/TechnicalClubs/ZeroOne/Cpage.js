import React from 'react';
import './Cpage.css';
import { Link as Scroll } from 'react-scroll';
import  { useState } from 'react';

import { BsFileEarmarkCode } from 'react-icons/bs';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import deepakimg from '../../../Assets/NewsImages/PreBootCamp.jpg'
import deepak from '../../../Assets/CouncilMembers/CouncilMember_02.png'
import google from '../../../Assets/cloud-next_960.png'
import clubpage from '../../../Assets/clubpage.webp'
import Footer from '../../../components/Footer/Footer'
import Navbar from './NavBar'

var Page = () => {

  const [activity, setActivity] = useState(1)


  const handleActivity = (Number) => {
    setActivity(Number)
  }

  return (
    
        <div className="clubs ZeroOne">
          <div className="clubs-in">
            <div className="clubs-nav">
                <Navbar/>
            </div>

{/* ----------------------------------Hero-------------------------------------------- */}

            <div className="club-hero">
              <div className="club-hero-in">
                </div>
            </div>



{/* ----------------------------------Main-------------------------------------------- */}


          <div className="club-main-component">
            <div className="club-main-component-in">

                <div className="club-main-container-one">
                  <div className="club-main-navbar">
                    <div className="club-main-navbar-in">
                      <div className="club-nav-button nav-button-one" 
                                    id = { activity === 1 ? 'button-hover' : '' }
                                    onClick={ () => {handleActivity(1)}}>Glimpse</div>
                      <div className="club-nav-button nav-button-two" 
                                    id = { activity === 2 ? 'button-hover' : '' }
                                    onClick={ () => {handleActivity(2)}}>Team Spotlight</div>
                      <div className="club-nav-button nav-button-three" 
                                    id = { activity === 3 ? 'button-hover' : '' }
                                    onClick={ () => {handleActivity(3)}}>About</div>
                      <div className="club-nav-button nav-button-four" 
                                    id = { activity === 4 ? 'button-hover' : '' }
                                    onClick={ () => {handleActivity(4)}}>Activities</div>
                    </div>
                  </div>
                </div>



                <div className="club-main-container-two"></div>


{/* ----------------------------------------Glimpse-------------------------------------------- */}

                    <div className="club-main-content">
                      <div className="club-main-content-in">
                        <div className = { activity === 1 ? 'club-main-content-box' : 'main-content-hide' } >
                          
                          <div className="club-box-content-one-head">
                              <h1>Glimpse</h1>
                          </div>
                            <div className="club-box-content-one">
                                  <div className="content-one-matter">
                                    <div className="one-matter-img">
                                      <img src={clubpage} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Exclusive Events</h1>
                                      <p>Get access to LIVE events that help you explore your favorite fields and grow to the next level.</p>
                                    </div>
                                  </div>
                                  <div className="content-two-matter">
                                  <div className="one-matter-img">
                                      <img src={clubpage} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Find Mentors</h1>
                                      <p>Get access to LIVE events that help you explore your favorite fields and grow to the next level.</p>
                                    </div>
                                  </div>
                            </div>
                            <div className="club-box-content-two">
                                  <div className="content-three-matter">
                                  <div className="one-matter-img">
                                      <img src={clubpage} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Internships</h1>
                                      <p>Get access to LIVE events that help you explore your favorite fields and grow to the next level.</p>
                                    </div>
                                  </div>

                                  <div className="content-four-matter">
                                  <div className="one-matter-img">
                                      <img src={clubpage} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Exclusive Events</h1>
                                      <p>Get access to LIVE events that help you explore your favorite fields and grow to the next level.</p>
                                    </div>
                                  </div>
                            </div>
                          </div>

{/* ----------------------------------------Team-------------------------------------------- */}
                        <div className = { activity === 2 ? 'club-main-content-box' : 'main-content-hide' } >

                          <div className="club-team">

                            <div className="club-team-one">
                              <div className="team-member-img mem-one">
                                <div className="mem-img-box">
                                  <img src={deepak} alt="" />
                                </div>
                                <div className="mem-details-box">
                                   <div className="details-one">
                                      <h1>Deepak</h1>
                                      <p>President -ZeroOne</p>
                                   </div>
                                   <div className="details-two">
                                     * * *
                                   </div>
                                </div>
                              </div>
                              <div className="team-member-img mem-two">
                                <div className="mem-img-box">
                                   <img src={deepak} alt="" />
                                </div>
                                <div className="mem-details-box">
                                  <div className="details-one">
                                      <h1>Deepak</h1>
                                      <p>President -ZeroOne</p>
                                   </div>
                                   <div className="details-two">
                                     * * *
                                   </div>
                                </div>
                              </div>
                              <div className="team-member-img mem-three">
                                <div className="mem-img-box">
                                   <img src={deepak} alt="" />
                                </div>
                                <div className="mem-details-box">
                                  <div className="details-one">
                                      <h1>Deepak</h1>
                                      <p>President -ZeroOne</p>
                                   </div>
                                   <div className="details-two">
                                     * * *
                                   </div>
                                </div>
                              </div>
                            </div>

                            <div className="club-team-two">
                              <div className="team-member-img mem-three">
                                <div className="mem-img-box">
                                   <img src={deepak} alt="" />
                                </div>
                                <div className="mem-details-box">
                                  <div className="details-one">
                                      <h1>Deepak</h1>
                                      <p>President -ZeroOne</p>
                                   </div>
                                   <div className="details-two">
                                     * * *
                                   </div>
                                </div>
                              </div>
                              <div className="team-member-img mem-four">
                                <div className="mem-img-box">
                                   <img src={deepak} alt="" />
                                </div>
                                <div className="mem-details-box">
                                  <div className="details-one">
                                      <h1>Deepak</h1>
                                      <p>President -ZeroOne</p>
                                   </div>
                                   <div className="details-two">
                                     * * *
                                   </div>
                                </div>
                              </div>
                              <div className="team-member-img mem-five">
                                <div className="mem-img-box">
                                   <img src={deepak} alt="" />
                                </div>
                                <div className="mem-details-box">
                                  <div className="details-one">
                                      <h1>Deepak</h1>
                                      <p>President -ZeroOne</p>
                                   </div>
                                   <div className="details-two">
                                     * * *
                                   </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>



{/* ----------------------------------------Club Spotlight-------------------------------------------- */}

                        <div className = { activity === 3 ? 'club-main-content-box' : 'main-content-hide' } >

                          <div className="club-about">
                            <div className="club-about-one">
                              <div className="about-img">
                                <img src={clubpage} alt="" />
                              </div>
                              <div className="about-img-matter">
                                <h1>Know more about us</h1>
                                 <p>We're a bunch of young people trying to solve as many problems as possible for college students</p>
                              </div>
                            </div>
                            <div className="club-about-two">
                              <div className="about-img-matter">
                                 <h1>Know more about us</h1>
                                 <p>We're a bunch of young people trying to solve as many problems as possible for college students</p>
                              </div>
                              <div className="about-img"><img src={clubpage} alt="" /></div>
                            </div>
                            <div className="club-about-three">
                              <div className="about-img">
                                  <img src={clubpage} alt="" />
                                </div>
                                <div className="about-img-matter">
                                  <h1>Know more about us</h1>
                                  <p>We're a bunch of young people trying to solve as many problems as possible for college students</p>
                                </div>
                            </div>
                          </div>

                        </div>


{/* ----------------------------------------Activities-------------------------------------------- */}

                        <div className = { activity === 4 ? 'club-main-content-box' : 'main-content-hide' } > 
                          
                          <div className="club-activity">
                            <div className="club-activity-in">
                              <div className="club-activity-one">
                                <div className="club-activity-one-one activity-cm">
                                  <div className="activity-cm-one">
                                      <img src={google} alt="" />
                                  </div>
                                  <div className="activity-cm-two">
                                    <h1>Google Cloud Next '23</h1>
                                    <p>Discover the latest advancements in AI, data, security, and productivity at Google Cloud's flagship in-person event, now on demand. Explore workshops, demos, training, and more.</p>
                                  </div>
                                </div>
                                <div className="club-activity-one-two activity-cm">
                                <div className="activity-cm-one">
                                      <img src={google} alt="" />
                                  </div>
                                  <div className="activity-cm-two">
                                    <h1>Google Cloud Next '23</h1>
                                    <p>Discover the latest advancements in AI, data, security, and productivity at Google Cloud's flagship in-person event, now on demand. Explore workshops, demos, training, and more.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="club-activity-two">
                                <div className="club-activity-two-one activity-cm">
                                <div className="activity-cm-one">
                                      <img src={google} alt="" />
                                  </div>
                                  <div className="activity-cm-two">
                                    <h1>Google Cloud Next '23</h1>
                                    <p>Discover the latest advancements in AI, data, security, and productivity at Google Cloud's flagship in-person event, now on demand. Explore workshops, demos, training, and more.</p>
                                  </div>
                                </div>
                                <div className="club-activity-two-two activity-cm">
                                <div className="activity-cm-one">
                                      <img src={google} alt="" />
                                  </div>
                                  <div className="activity-cm-two">
                                    <h1>Google Cloud Next '23</h1>
                                    <p>Discover the latest advancements in AI, data, security, and productivity at Google Cloud's flagship in-person event, now on demand. Explore workshops, demos, training, and more.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="club-activity-three">
                                <div className="club-activity-three-one activity-cm">
                                <div className="activity-cm-one">
                                      <img src={google} alt="" />
                                  </div>
                                  <div className="activity-cm-two">
                                    <h1>Google Cloud Next '23</h1>
                                    <p>Discover the latest advancements in AI, data, security, and productivity at Google Cloud's flagship in-person event, now on demand. Explore workshops, demos, training, and more.</p>
                                  </div>
                                </div>
                                <div className="club-activity-three-two activity-cm">
                                <div className="activity-cm-one">
                                      <img src={google} alt="" />
                                  </div>
                                  <div className="activity-cm-two">
                                    <h1>Google Cloud Next '23</h1>
                                    <p>Discover the latest advancements in AI, data, security, and productivity at Google Cloud's flagship in-person event, now on demand. Explore workshops, demos, training, and more.</p>
                                  </div>
                                </div>
                              </div>
                              </div>
                          </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
       

{/* ----------------------------------Footer-------------------------------------------- */}  
        <div className="club-footer">
          <div className="club-footer-in">
              <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Page