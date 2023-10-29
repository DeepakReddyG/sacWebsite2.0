import React, { useState, useEffect } from 'react';
import './Home.css'; 
import './MobileView.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollToTop from "react-scroll-to-top";
import { Link as Scroll } from 'react-scroll';
import 'add-to-calendar-button';

//components
import NavBar from '../../components/Navigation/Page';
import Footer from '../../components/Footer/Footer';
import ToggleNav from '../../components/Navigation/ToggleNav';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


//pages
import Events from '../addEvent/getEvents';

// dialogue box start here 
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


//assets
import newVideo from '../../Assets/newVideo.mp4';  
import storiesImage from '../../Assets/storiesImage.jpeg';
import YtLogo from '../../Assets/Logos/YtLogo.png';
import InstaLogo from '../../Assets/Logos/InstaLogo.png';
import TwitterLogo from '../../Assets/Logos/TwitterLogo.png';
import LinkedInLogo from '../../Assets/Logos/LinkedInLogo.png';
import Director from '../../Assets/director.png'
import Technology from '../../Assets/Technology.png';
import Liberal from '../../Assets/Liberal.png';
import Innovation from '../../Assets/Innovation.png';
import Outreach from '../../Assets/Outreach.png';
import NewsOne from '../../Assets/NewsImages/NewsImageOne.png';
import NewsTwo from '../../Assets/NewsTwo.png';
import NewsThree from '../../Assets/NewsThree.png';
import NewsFour from '../../Assets/NewsFour.png';
import chairman from '../../Assets/chairman.png';
import SHSTwo from '../../Assets/SwachhataHiSeva/SHSImages/SHSTwo.png';
import SHSThree from '../../Assets/SwachhataHiSeva/SHSImages/SHSThree.png';
import SHSFour from '../../Assets/SwachhataHiSeva/SHSImages/SHSFour.png';
import SHSFive from '../../Assets/SwachhataHiSeva/SHSImages/SHSFive.png';
import EventOne from '../../Assets/UpcomingEvents/UpcomingEvent1.png';
import EventTwo from '../../Assets/UpcomingEvents/UpcomingEvent2.png';
import EventThree from '../../Assets/UpcomingEvents/UpcomingEvent3.png';
import EventFour from '../../Assets/UpcomingEvents/UpcomingEvent4.png';



const Home  = () => {
 
  useEffect(() => {
    document.title = 'Home | KLU SAC';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Student Activity Center at KLEF';
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const [isNavScrolled, setNavScrolled] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState([]);
  const handleScroll = () => {
    if (window.scrollY > 300) {
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

  const handleclick = () => {
    window.scrollTo(0, 0); 
  }


  const faqData = [
    {
      question: 'What is Student Activity Center at Koneru Lakshmaiah Education Foundation?',
      answer: 'Student Activity Center is the epicenter of innovation and personal growth. The sole existence of this is to show a student the true capabilities they posses beyond academics. SAC fosters and supports ideas with 5 major parameters Technical, Cultural & Sports, Outreach Activities & Societies, Innovation & Incubation, Health & Wellness. We at SAC have clubs who aim to progress in these domains.',
    },
    {
      question: 'How can I be a club member?',
      answer: 'To be a club member visit your interested club page on the website and have an information of your club team, then collect your membership registration form from your respective club head by visiting the SAC Hall and post approval you are a registered member of your club. ',
    },
    {
      question: 'Can I establish a club at SAC?',
      answer: 'Yes, we welcome you to establish a club at SAC. Any club that has a clarity of its objective, activities and workflow with a strong foundation of their club prerequisites can establish their club at SAC. Initially the club will be under a probation period and after successfully analyzing the club operations and dedication SAC will declare it as permanent and support/provide for the club. Adhering to the SAC policies and university norms goes unsaid.',
    },
    {
      question: 'What is the Student Council at SAC?',
      answer: 'The Student Council at SAC is a team of highly sincere and dedicated students consisting their vast expertise in their respective domains. The Council is responsible to strategize and execute ideas/plans for the club development, student welfare, institutional growth. It is the backbone and the strongest support for the students of the University.',
    },
    {
      question: 'Are first year allowed in SAC?',
      answer: 'First years freshers they are always welcomed. SAC is a place where your talents flourish and also you gain new skills with coming time.',
    },

  ];


  const toggleAnswer = (index) => {
    if (expandedQuestions.includes(index)) {
      setExpandedQuestions(expandedQuestions.filter((item) => item !== index));
    } else {
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

// ------------------------------------------------------

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


  

// ------------------------------------------------------

  return (
    <div className='HomeComponent'>
        {screenWidth > 768 ? <NavBar isScrolled={isNavScrolled} /> : <ToggleNav/> }
        <div className="HomeContainer">
          <div className="Home-one">
            <div className="Home-one-in">
              <video preload='auto' autoPlay={true} loop={true} muted={true} style={{width: "100%"}} src={newVideo}></video>
              <div className="centered-text">
              <h1>Student Activity Center</h1>
              <p className="animate-text">Empowering Tomorrow's Leaders Today</p>
            </div>
            <div className="explore-sac">
                    <Scroll
                    className='explore-sac-scroll'
                            activeClass="active"
                            to="about"
                            spy ={true}
                            smooth={true}
                            offset={-100}
                            duration={200}
                          >   
                          Explore SAC
                    </Scroll>  
            </div>
            </div>
          </div>

               
          <ScrollToTop  smooth id='scrollToTop' component={<p style={{ color: "rgb(151, 0, 3)" }}>Back to top</p>}></ScrollToTop>

        <div className="Home-two">
          <div className="Home-two-in">
            <h1>KLSAC for <span>Garbage</span><span>Free</span><span>India</span></h1>
            <Link className='hti-link' to='/swachhatahiseva'>View KLSAC's Activities</Link>
          </div>
        </div>

        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="shs-swiper-module">
            <img src={SHSTwo} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shs-swiper-module">
            <img src={SHSThree} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shs-swiper-module">
            <img src={SHSFour} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shs-swiper-module">
            <img src={SHSFive} alt="" />
          </div>
        </SwiperSlide>

      </Swiper>

        
        




        <div className="about">
              <div className="about-heading">
                <h1>A Department without Boundaries</h1>
                <h3>Designed to accommodate path-breaking ideas, problem-solving postulates, and artistic assertions, creating an environment that encourages innovation and experimentation</h3>
              </div>
              <div className="about-two">
                <div className="about-two-one about-two-cmn">
                  <div className="about-two-one-heading">
                    <h2>Collaborations</h2>
                  </div>
                  <div className="about-two-one-counter counter">
                    <CountUp start={0} duration={4} end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                <div className="about-two-two about-two-cmn">
                  <div className="about-two-two-heading">
                    <h2>Clubs</h2>
                  </div>
                  <div className="about-two-two-counter counter">
                    <CountUp start={0} duration={4} end={33} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                <div className="about-two-three about-two-cmn">
                  <div className="about-two-three-heading">
                    <h2>Industry Mentors</h2>
                  </div>
                  <div className="about-two-three-counter counter">
                    <CountUp start={0} duration={4} end={50} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>




                <div className="about-two-five about-two-cmn">
                  <div className="about-two-five-heading">
                    <h2>Actively Engaged Students</h2>
                  </div>
                  <div className="about-two-five-counter counter">
                    <CountUp start={0} duration={4} end={6000} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                <div className="about-two-four about-two-cmn">
                  <div className="about-two-four-heading">
                    <h2>Events</h2>
                  </div>
                  <div className="about-two-four-counter counter">
                    <CountUp start={0} duration={4} end={534} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>

                <div className="about-two-six about-two-cmn">
                  <div className="about-two-six-heading">
                    <h2>Projects</h2>
                  </div>
                  <div className="about-two-six-counter counter">
                    <CountUp start={0} duration={4} end={104} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>

              </div>

              <center>
                <div className="about-more">
                  <div>
                  <Link className='about-more-link' onClick={handleClickOpen} >More about Student Activity Center</Link>
       
                      <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        maxWidth="lg"
                      >
                        <DialogContent dividers>
                          <iframe title='sachandbook'
                          src="https://online.fliphtml5.com/syvtl/zqtg/"
                          frameborder="0"
                          style={{ width: '50rem', height: '50rem' }} // Adjust height as needed
                        ></iframe>
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus onClick={handleClose}>
                            Close
                          </Button>
                        </DialogActions>
                      </BootstrapDialog>
                    </div>
                </div>
              </center>
            </div>


      
        

        <div className="noname">
         <div className="noname-text">
         </div>
         <div className="noname-image">
         </div>
        </div>



        <div className="projects">
          <div className="projects-in">
            <div className="projects-in-header">
              <div className="projects-in-header-in">
                <h1>4 Domains Infinite Possibilities</h1>
                <p>Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world</p>
              </div>
            </div>
            <div className="projects-one">
              <div className="projects-one-in">
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={Technology} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Technology Clubs</h2>
                    <p>Explore cutting-edge tech trends and hands-on projects, from coding to robotics, in our vibrant tech enthusiast community.</p>
                    <Scroll className='projects-comps-two-links' activeClass="active" to="Quick-links-component" spy={true} smooth={true} offset={-100} duration={800}>Explore</Scroll>
                  </div>
                </div>


                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={Liberal} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Liberal & Sports Clubs</h2>
                    <p>Celebrate diversity through art, dance, music, and more, fostering cultural exchange and global understanding.</p>
                    <Scroll className='projects-comps-two-links' activeClass="active" to="Quick-links-component" spy={true} smooth={true} offset={-100} duration={800}>Explore</Scroll>
                  </div>
                </div>


                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={Innovation} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Innovation Clubs</h2>
                    <p>Ignite creativity, entrepreneurship, and problem-solving skills, driving innovative solutions to real-world challenges.</p>
                    <Scroll className='projects-comps-two-links' activeClass="active" to="Quick-links-component" spy={true} smooth={true} offset={-100} duration={800}>Explore</Scroll>
                  </div>
                </div>


                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={Outreach} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Outreach Clubs</h2>
                    <p>Advocate for meaningful social change, raising awareness and engaging in volunteer activities to make a positive impact.</p>
                    <Scroll className='projects-comps-two-links' activeClass="active" to="Quick-links-component" spy={true} smooth={true} offset={-100} duration={800}>Explore</Scroll>
                  </div>
                </div>

                
              </div>
            </div>

           <div className="explore-departments">
            <Scroll className='projects-link' activeClass="active" to="Quick-links-component" spy={true} smooth={true} offset={-100} duration={800}>Explore All Clubs</Scroll>
           </div>
          </div>
        </div>



          

        <div className="stories">
          <div className="stories-in">
            <div className="stories-header">
              <div className="stories-header-in">
                <h1>Stories from the Community</h1>
                <p>Get inspired by stories of people from the community</p>
              </div>
            </div>

            <div className="stories-one">
              <div className="stories-one-in">
                <div className="stories-comps">
                  <div className="stories-comps-in">
                    <div className="stories-comps-in-one">
                      <img src={storiesImage} alt="" />
                    </div>
                    <div className="stories-comps-in-two">
                      <div className="stories-comps-in-two-in">
                        <p>Mohammad Jawaad</p>
                        <h2>Exploring the Vibrant World of KL University: A First-Year Student's Journey at KL SAC</h2>
                        <Link className='stories-links' to='/blogs' onClick={handleclick}>Read now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stories-comps">
                  <div className="stories-comps-in">
                    <div className="stories-comps-in-one">
                      <img src={storiesImage} alt="" />
                    </div>
                    <div className="stories-comps-in-two">
                      <div className="stories-comps-in-two-in">

                      <p>Mohammad Jawaad</p>
                        <h2>Enriching Journeys at SAC: From Stand-up Comedy to the Fashion Runway</h2>
                        <Link className='stories-links' to='/blogs' onClick={handleclick}>Read now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stories-comps">
                  <div className="stories-comps-in">
                    <div className="stories-comps-in-one">
                      <img src={storiesImage} alt="" />
                    </div>
                    <div className="stories-comps-in-two">
                      <div className="stories-comps-in-two-in">

                        <p>Mohammad Jawaad</p>
                        <h2>A Journey: Battling Addiction and Depression with Martial Arts and MMA</h2>
                        <Link className='stories-links' to='/blogs' onClick={handleclick}>Read now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         <div className="stories-viewmore">
          <Link onClick={handleclick} className='stories-viewmore-link' to='/blogs'>View More Stories</Link>
         </div>
        </div>



      <div className="news">
        <div className="news-header">
          <div className="news-header-in">
            <h1>News from the Community</h1>
          </div>
        </div>
        <div className="news-in">
          <div className="news-main">
            <div className="news-one">
                <div className="news-one-in">
                  <img src={NewsOne} alt="" />
                  <div className="news-one-in-desc">
                    <p>Code for Cause Hackathon</p>
                    <p>A hackathon that empowers your code to change the world. Join us in using technology for social good and make an impact through your coding expertise!</p>
                    <p>18th and 19th October 2023</p>
                  </div>
                </div>
            </div>
            <div className="news-one">
                <div className="news-one-in">
                  <img src={NewsThree} alt="" />
                  <div className="news-one-in-desc">
                    <p>Student Council Meeting</p>
                    <p>A diverse blend of students, spanning different academic disciplines, convenes to enhance the student community and evaluate ongoing progress.</p>
                    <p>September 8th 2023</p>
                  </div>
                </div>
            </div>
            <div className="news-one">
                <div className="news-one-in">
                  <img src={NewsTwo} alt="" />
                  <div className="news-one-in-desc">
                    <p>SAC Photography Club's Debut</p>
                    <p>Photography Club has made its mark with 'Hukum,' a cover of 'Jailer.' The YouTube sensation has garnered a staggering 15k views!</p>
                    <p>13th September 2023</p>
                  </div>
                </div>
            </div>
            <div className="news-one">
                <div className="news-one-in">
                  <img src={NewsFour} alt="" />
                  <div className="news-one-in-desc">
                    <p>SAC Premier League Showdown:</p>
                    <p>Today's match features the epic clash between the CSE Wizards and the CSE Honours Cyber Blasters in the SAC Premier League. Get ready for the excitement!</p>
                    <p>23rd September 2023</p>
                  </div>
                </div>
            </div>
           
            
          </div>
        </div>
      </div>



      {/*  -------------------- upcoming events ---------------------- */}
      <Events/>



      {/* ---------------------------------- projects --------------------- */}
      {/* <div className="workingstill">
        <div className="workingstill-in">
          <img src={Technology} alt="" />
        </div>
      </div> */}




        <div className="joinus">
          <div className="joinus-inner">
              <h1>Experience the power of community. Join us today and be a part of something truly special.</h1>
              <a href='https://t.me/kl_sac'>Join our Community</a>
          </div>
        </div>


        <div className="officers">
          <div className="officers-in">
            <div className="officers-in-one">
                <div className="officers-in-one-in">
                      <h1>The Office of Student Activity Center</h1>
                        <p>The Office of SAC Operates in 3 levels, Director of SAC and Faculty Mentors, Student Council and Executive Body</p>
                    <Link onClick={handleclick}  className='leadership-link' to='/leadership'>Explore Leadership</Link>
                </div>
            </div>
            <div className="officers-in-two">
                <div className="officers-in-two-in">
                <div className="profile-card">
                        <img src={Director} alt="" />
                        <h2>Mr P Sai Vijay</h2>
                        <p>Director, SAC</p>
                        <p>director_sac@kluniversity.in</p>
                    </div>
                    <div className="profile-card">
                        <img src={chairman} alt="" />
                        <h2>Parth Deepak Thakker</h2>
                        <p>Chairman, Student Council</p>
                        <p>ECE, 4th Year</p>
                    </div>
                </div>
            </div>
          </div>
        </div>


            <div className="follow">
              <div className="follow-in">
                <div className="follow-header">
                  <div className="follow-header-in">
                    <h1>Follow Student Activity Center at KLEF</h1>
                  </div>
                </div>

                <div className="follow-header-one">
                  <div className="follow-header-one-in">
                    <div className="follow-comps">
                      <div className="follow-comps-inner">
                        <div className="follow-comps-one">
                          <div className="follow-comps-one-in">
                            <img src={YtLogo} alt="youtube logo" />
                          </div>
                        </div>
                        <div className="follow-comps-two">
                          <h1>YouTube</h1>
                          <p>Subscribe to join a community of creative developers and learn the latest in Google technology.</p>
                        </div>
                        <div className="follow-comps-three">
                          <a href="https://www.youtube.com/@studentactivitycenter_klu">Learn More</a>
                        </div>
                      </div>
                    </div>
                    <div className="follow-comps">
                      <div className="follow-comps-inner">
                        <div className="follow-comps-one">
                          <div className="follow-comps-one-in">
                            <img src={InstaLogo} alt="youtube logo" />
                          </div>
                        </div>
                        <div className="follow-comps-two">
                          <h1>Instagram</h1>
                          <p>Subscribe to join a community of creative developers and learn the latest in Google technology.</p>
                        </div>
                        <div className="follow-comps-three">
                          <a href='https://www.instagram.com/klu_sac/'>Learn More</a>
                        </div>
                      </div>
                    </div>
                    <div className="follow-comps">
                      <div className="follow-comps-inner">
                        <div className="follow-comps-one">
                          <div className="follow-comps-one-in">
                            <img src={LinkedInLogo} alt="youtube logo" />
                          </div>
                        </div>
                        <div className="follow-comps-two">
                          <h1>LinkedIn</h1>
                          <p>Subscribe to join a community of creative developers and learn the latest in Google technology.</p>
                        </div>
                        <div className="follow-comps-three">
                          <a href="https://www.linkedin.com/in/klu-sac/">Learn More</a>
                        </div>
                      </div>
                    </div>
                    <div className="follow-comps">
                      <div className="follow-comps-inner">
                        <div className="follow-comps-one">
                          <div className="follow-comps-one-in">
                            <img src={TwitterLogo} alt="youtube logo" />
                          </div>
                        </div>
                        <div className="follow-comps-two">
                          <h1>X - Twitter</h1>
                          <p>Subscribe to join a community of creative developers and learn the latest in Google technology.</p>
                        </div>
                        <div className="follow-comps-three">
                          <a href="https://twitter.com/klsac_vja">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </div>


            <div className="faq">
      <div className="faq-inner">
        <div className="faq-one">
          <div className="faq-one-in">
            <h1>Frequently Asked Questions</h1>
          </div>
        </div>
        <div className="faq-two">
          <div className="faq-two-in">
            <div className="faq-two-one">
              {faqData.map((item, index) => (
                <div key={index}>
                  <div className="faq-qsn" onClick={() => toggleAnswer(index)}>
                    <p>{item.question}</p>
                  </div>
                  {expandedQuestions.includes(index) && (
                    <div className="faq-ans">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


{/* ----------------------------------- Quick Links ------------------------------------------- */}
 
                    <div className="Quick-links-component">
                        <div className="Quick-links-component-in">
                            <div className="quick-link-one">
                              <div className="quick-link-one-in">
                                   <h1>Technology</h1>
                                   <Link   onClick={handleclick} to='/clubs/zeroonecodeclub' className='qu-link-cm'>ZeroOne CodeClub</Link>
                                   <Link   onClick={handleclick} to='/clubs/aeroelectricclub' className='qu-link-cm'>AeroElectric Club</Link>
                                   <Link   onClick={handleclick} to='/clubs/cyberclub' className='qu-link-cm'>Cyber Security Club </Link>
                                   <Link   onClick={handleclick} to='/clubs/WebAppsClub' className='qu-link-cm'>WebApps Club </Link>
                                   <Link   onClick={handleclick} to='/clubs/TechHumaClub' className='qu-link-cm'>TechHuma Club </Link>
                                   <Link   onClick={handleclick} to='/clubs/AnimationClub' className='qu-link-cm'>Animation and Designing Club </Link>
                                   <Link   onClick={handleclick} to='/clubs/AutomobileClub' className='qu-link-cm'>Automobile Club </Link>
                                   <Link   onClick={handleclick} to='/clubs/AgricultureClub' className='qu-link-cm'>Agriculture Club </Link>
                                   <Link   onClick={handleclick} to='/clubs/MobileESportsClub' className='qu-link-cm'>MobileESports Club </Link>

                              </div>

                                <div className="quick-link-two-in">
                                  <h1>Liberal Arts</h1>

                                    <Link   onClick={handleclick} to='/clubs/StandupComedyClub' className='qu-link-cm'>Standup Comedy Club</Link>
                                    <Link   onClick={handleclick} to='/clubs/SwaraClub' className='qu-link-cm'>Music Club (Swara)</Link>
                                    <Link   onClick={handleclick} to='/clubs/SwaraClub' className='qu-link-cm'>Photography Club</Link>
                                    <Link   onClick={handleclick} to='/clubs/SwaraClub' className='qu-link-cm'>Film Making Club</Link>
                                    <Link   onClick={handleclick} to='/clubs/FusionClub' className='qu-link-cm'>Dance Club (Fusion)</Link>
                                    <Link   onClick={handleclick} to='/clubs/FusionClub' className='qu-link-cm'>Dance Club (Narthana)</Link>
                                    <Link   onClick={handleclick} to='/clubs/VachasClub' className='qu-link-cm'>Literature Club (Vachas)</Link>
                                    <Link   onClick={handleclick} to='/clubs/VachasClub' className='qu-link-cm'>Script Writing Club (Versatales)</Link>
                                    <Link   onClick={handleclick} to='/clubs/FusionClub' className='qu-link-cm'>Fusion Club</Link>
                                    <Link   onClick={handleclick} to='/clubs/SwaraClub' className='qu-link-cm'>Swara Club</Link>
                                    <Link   onClick={handleclick} to='/clubs/VachasClub' className='qu-link-cm'>Vachas Club</Link>
                                    <Link   onClick={handleclick} to='/clubs/KLRadioClub' className='qu-link-cm'>KLRadio Club</Link>
                                    <Link   onClick={handleclick} to='/clubs/FilmMakingClub' className='qu-link-cm'>Film Technology Club</Link>
                                    <Link   onClick={handleclick} to='/clubs/DramaticsClub' className='qu-link-cm'>Dramatics Club</Link>
                                    <Link   onClick={handleclick} to='/clubs/DramaticsClub' className='qu-link-cm'>Art Club (Art Tribe)</Link>
                                </div>

                                <div className="quick-link-three-in">
                                  <h1>Innovation</h1>
                                  <Link onClick={handleclick} className='qu-link-cm'>ACIC</Link>
                                  <Link onClick={handleclick} className='qu-link-cm'>TBI</Link>
                                  <Link onClick={handleclick} className='qu-link-cm'>CIIE</Link>
                                </div>
                                <div className="quick-link-four-in">
                                  <h1> Outreach</h1>
                                  <Link   onClick={handleclick} to='/clubs/smartvillagerevolution' className='qu-link-cm'>Smart Village Revolution</Link>
                                  <Link   onClick={handleclick} to='/clubs/SafeLifeClub' className='qu-link-cm'>SafeLife Club</Link>
                                  <Link   onClick={handleclick} to='/clubs/TourismClub' className='qu-link-cm'>Yuva Tourism Club</Link>
                                  <Link   onClick={handleclick} to='/clubs/KLTalksClub' className='qu-link-cm'>KL Talks Club</Link>
                                 
                                  <Link   onClick={handleclick} to='/clubs/ElectoralClub' className='qu-link-cm'>Electoral Club</Link>
                                  <Link   onClick={handleclick} to='/clubs/CEAClub' className='qu-link-cm'>CEA</Link>
                                  <Link   onClick={handleclick} to='/clubs/CEAClub' className='qu-link-cm'>YRC</Link>
                                  <Link   onClick={handleclick} to='/clubs/CEAClub' className='qu-link-cm'>NSS</Link>
                                  <Link   onClick={handleclick} to='/clubs/CEAClub' className='qu-link-cm'>NCC</Link>
                                  <Link   onClick={handleclick} to='/clubs/CEAClub' className='qu-link-cm'>Ohana</Link>
                                  <Link   onClick={handleclick} to='/clubs/CEAClub' className='qu-link-cm'>Kutumb</Link>
                                 
                                </div>
                            </div>
                            <div className="quick-link-two">
                              <div className="quick-link-two-one">
                                <h1>Quick Links for Activities at SAC</h1>
                                  <Link   onClick={handleclick} className='quick-more' to='/clubs' >DeepDive <OpenInNewIcon /> </Link>
                                </div>
                            </div>
                          </div>
                    </div>

{/* ----------------------------------- Gallery ------------------------------------------- */}

                      <div className="gallery-component">
                        <div className="gallery-component-in">
                          <div className="gallery-com-one"></div>
                          <div className="gallery-com-two"></div>
                          <div className="gallery-com-three"></div>
                          <div className="gallery-com-four"></div>
                        </div>
                      </div>

          </div>
         <Footer/>
    </div>
  )
}

export default Home