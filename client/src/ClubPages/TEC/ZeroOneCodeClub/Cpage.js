import React from 'react';
import  { useState, useEffect } from 'react';
import './Cpage.css';
import './MobileView.css';


import deepak from '../../../Assets/CouncilMembers/DP.jpg'
import instagram from '../../../Assets/Logos/InstaLogo.png'
import linkedin from '../../../Assets/Logos/LinkedInLogo.png'
import twitter from '../../../Assets/Logos/TwitterLogo.png'

import PosterOne from '../../../Assets/One.png';
import PosterTwo from '../../../Assets/reactv6.png';
import PosterThree from '../../../Assets/Bash.png';
import PosterFour from '../../../Assets/Angular.png';

import zocc_glimpse_one from '../../../Assets/ClubsImages/ZeroOneCodeClub/zocc_glimpse_one.png';
import zocc_glimpse_two from '../../../Assets/ClubsImages/ZeroOneCodeClub/zocc_glimpse_two.png';
import zocc_glimpse_three from '../../../Assets/ClubsImages/ZeroOneCodeClub/zocc_glimpse_three.png';
import zocc_glimpse_four from '../../../Assets/ClubsImages/ZeroOneCodeClub/zocc_glimpse_four.png';

import ZeroOneGroupPic from '../../../Assets/ClubsImages/ZeroOneCodeClub/ZeroOneGroupPic.JPG';
import ZeroOneCommunity from '../../../Assets/ClubsImages/ZeroOneCodeClub/ZeroOneCommunity.jpg';
import Technology from '../../../Assets/Technology.png';



import Footer from '../../../components/home/Footer/Footer'
import Navbar from './NavBar'
import ToggleNavBar from './ToggleNavBar'

const Page = () => {

  useEffect(() => {
    document.title = 'SAC | ZeroOneCodeClub';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'ZeroOne Code Club of KL University';
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);


  const [activity, setActivity] = useState(1)


  const handleActivity = (Number) => {
    setActivity(Number)
  }


  const [showDiv, setShowDiv] = useState(false);

    const handleScroll = () => {
    if (window.scrollY > 90) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  // -----------------------------------------------------------------------------------------------
  
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])


  // -----------------------------------------------------------------------------------------------  
  
  



  
  
  return (
    
        <div className="clubs ZeroOne">
          <div className="clubs-in">

{/* ----------------------------------Hero-------------------------------------------- */}

              <div className="club-hero">
                <div className="zeroone-hero-in">
                    <div className="club-nav">
                      <div className="club-nav-in">
                        <div className="club-nav-in-two">
                            {size > 900 ? <Navbar/> : <ToggleNavBar/> }
                        </div>
                        <div className='club-nav-in-one'>
                        {size > 900 ? '' : <p>ZeroOne</p>  }
                       </div>
                      </div>
                    </div>
                  <div className="club-hero-content">


                          <div className="hero-logo">
                            <div className="hero-logo-head">
                              <h1>ZeroOne Code Club</h1>
                              <p>Transforming Lines of Code to Limitless Possibilities</p>
                            </div>
                          </div>
                            
                      </div>
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
                                    onClick={ () => {handleActivity(2)}}>Spotlight</div>
                      <div className="club-nav-button nav-button-three" 
                                    id = { activity === 3 ? 'button-hover' : '' }
                                    onClick={ () => {handleActivity(3)}}>About</div>
                      <div className="club-nav-button nav-button-four" 
                                    id = { activity === 4 ? 'button-hover' : '' }
                                    onClick={ () => {handleActivity(4)}}>Activities</div>
                    </div>
                  </div>
                </div>




                    <div className="club-main-content">
                      <div className="club-main-content-in">



                        <div className = { activity === 1 ? 'club-main-content-box' : 'main-content-hide' } >
                          
                          <div className="club-box-content-one-head">
                              <h1>Glimpse</h1>
                          </div>
                            <div className="club-box-content-one">
                                  <div className="content-one-matter">
                                    <div className="one-matter-img">
                                      <img src={zocc_glimpse_one} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Exclusive Workshops</h1>
                                      <p>Dive into the dynamic world of technology with our Code Club's exclusive events. Join us for inspiring coding workshops, thrilling hackathons, and enlightening tech talks, fostering innovation and collaboration within our vibrant university community.</p>
                                    </div>
                                  </div>
                                  <div className="content-two-matter">
                                  <div className="one-matter-img">
                                      <img src={zocc_glimpse_two} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Join the Conversation: Group Discussions</h1>
                                      <p>Discover a hub for dynamic group discussions within our Code Club. Engage with like-minded peers, exchange insights, and explore a wide array of tech-related topics, fostering a vibrant community of passionate learners and innovators.</p>
                                    </div>
                                  </div>
                            </div>
                            <div className="club-box-content-two">
                                  <div className="content-three-matter">
                                  <div className="one-matter-img">
                                      <img src={zocc_glimpse_three} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Strengthening Bonds: Team Building Activities</h1>
                                      <p>Enhance camaraderie and collaboration through our Code Club's engaging team building activities. From coding challenges to problem-solving adventures, come together, build relationships, and foster a strong sense of unity among fellow tech enthusiasts.</p>
                                    </div>
                                  </div>

                                  <div className="content-four-matter">
                                  <div className="one-matter-img">
                                      <img src={zocc_glimpse_four} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Teaching Coding to School Students</h1>
                                      <p>Participate in our Code Club's outreach, where we teach coding to school students, fostering future tech leaders, equipping them with essential skills, and igniting their creativity. Join our mission today!</p>
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
                                      <h1>Deepak Reddy Gathpa</h1>
                                      <p>President -ZeroOne</p>
                                   </div>
                                   <div className="details-two">
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={instagram} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={linkedin} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={twitter} alt="" />
                                      </a>
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
                                     <a href="https://github.com/saitadikonda99">
                                         <img src={instagram} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={linkedin} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={twitter} alt="" />
                                      </a>
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
                                     <a href="https://github.com/saitadikonda99">
                                         <img src={instagram} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={linkedin} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={twitter} alt="" />
                                      </a>
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
                                     <a href="https://github.com/saitadikonda99">
                                         <img src={instagram} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={linkedin} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={twitter} alt="" />
                                      </a>
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
                                     <a href="https://github.com/saitadikonda99">
                                         <img src={instagram} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={linkedin} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={twitter} alt="" />
                                      </a>
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
                                     <a href="https://github.com/saitadikonda99">
                                         <img src={instagram} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={linkedin} alt="" />
                                      </a>
                                      <a href="https://github.com/saitadikonda99">
                                         <img src={twitter} alt="" />
                                      </a>
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
                                <img src={ZeroOneGroupPic} alt="" />
                              </div>
                              <div className="about-img-matter">
                                <h1>Cultivating and Nurturing a Thriving Coding Culture</h1>
                                 <p>We are dedicated to cultivating and nurturing a vibrant coding culture within our community. Discover our initiatives and contributions to the ever-evolving world of technology.section</p>
                              </div>
                            </div>
                            <div className="club-about-two">
                              <div className="about-img-matter">
                                 <h1>Building Industry-Ready Skills: Real-Time Projects and Experience</h1>
                                 <p>Our focus is on equipping you with practical, industry-ready skills through hands-on, real-time projects. Gain valuable experience and confidence as you tackle real-world challenges.</p>
                              </div>
                              <div className="about-img"><img src={Technology} alt="" /></div>
                            </div>
                            <div className="club-about-three">
                              <div className="about-img">
                                  <img src={ZeroOneCommunity} alt="" />
                                </div>
                                <div className="about-img-matter">
                                  <h1>Community Collaboration and Knowledge Sharing</h1>
                                  <p>We believe in the power of collaboration and knowledge sharing. Explore how we actively engage with our community, facilitate learning, and create a space for collective growth and innovation</p>
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
                                      <img src={PosterOne} alt="" />
                                  </div>
                                  <div className="activity-cm-two">
                                    <h1>VIM Master Class</h1>
                                    <p>Discover the latest advancements in AI, data, security, and productivity at Google Cloud's flagship in-person event, now on demand. Explore workshops, demos, training, and more.</p>
                                  </div>
                                </div>
                                <div className="club-activity-one-two activity-cm">
                                <div className="activity-cm-one">
                                      <img src={PosterTwo} alt="" />
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
                                      <img src={PosterThree} alt="" />
                                  </div>
                                  <div className="activity-cm-two">
                                    <h1>Google Cloud Next '23</h1>
                                    <p>Discover the latest advancements in AI, data, security, and productivity at Google Cloud's flagship in-person event, now on demand. Explore workshops, demos, training, and more.</p>
                                  </div>
                                </div>
                                <div className="club-activity-two-two activity-cm">
                                <div className="activity-cm-one">
                                      <img src={PosterFour} alt="" />
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
              <Footer/>
            </div>
    </div>
  )
}

export default Page