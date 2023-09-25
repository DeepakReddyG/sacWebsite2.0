import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Page.css';
import NavBar from './NavBar';
import './MobileView.css';

import Footer from '../../components/Footer/Footer';

import DP from '../../Assets/CouncilMembers/DP.jpg';
import director from '../../Assets/director.png';
import chairman from '../../Assets/chairman.png';
import AcademicCouncilConvener from '../../Assets/UpdatedCouncilMembers/AcademicCouncilConvener.png';
import CouncilAdvisor from '../../Assets/UpdatedCouncilMembers/CouncilAdvisor.png';
import DanceFusionLead from '../../Assets/UpdatedCouncilMembers/DanceFusionLead.png';
import ELCLead from '../../Assets/UpdatedCouncilMembers/ELCLead.png';
import Elcomicos from '../../Assets/UpdatedCouncilMembers/ElcomicsLead.png';
import EventsCouncilConvener from '../../Assets/UpdatedCouncilMembers/EventsCouncilConvener.png';
import FinanceCouncilConvener from '../../Assets/UpdatedCouncilMembers/FinanceCouncilConvener.png';
import InternationalCouncilConvener from '../../Assets/UpdatedCouncilMembers/InternationalCouncilConvener.png';
import KutumbLead from '../../Assets/UpdatedCouncilMembers/KutumbLead.png';
import NarthanaLead from '../../Assets/UpdatedCouncilMembers/NarthanaLead.png';
import OutreachCouncilConvener from  '../../Assets/UpdatedCouncilMembers/OutreachCouncilConvener.png';
import QualityAnalysisCouncilConvener from '../../Assets/UpdatedCouncilMembers/QualityAnalysisCouncilConvener.png';
import SVRLead from '../../Assets/UpdatedCouncilMembers/SVRLead.png';
import TheDesignSphereLead from '../../Assets/UpdatedCouncilMembers/TheDesignSphereLead.png';
import VachasLead from '../../Assets/UpdatedCouncilMembers/VachasLead.png';
import versatales from '../../Assets/UpdatedCouncilMembers/versatalesLead.png';
import ViceChairman from '../../Assets/UpdatedCouncilMembers/ViceChairman.png';
import YuvaTourismLead from '../../Assets/UpdatedCouncilMembers/YuvaTourismLead.png';
import TechnologyCouncilConvener from '../../Assets/UpdatedCouncilMembers/TechnologyCouncil.png';
import AnonymousImage from '../../Assets/UpdatedCouncilMembers/AnonymousImage.png';

import KoneruSatyanarayana from '../../Assets/KoneruSatyanaraya.png';
import KoneruHavish from '../../Assets/KoneruHavish.png';
import KoneruHareen from '../../Assets/KoneruHareen.png';
import PardhaSaradhiVarma from '../../Assets/PardhaSaradhiVarma.png';
import HanumanthaRao from '../../Assets/HanumanthaRao.png';
import AVSPrasad from '../../Assets/AVSPrasad.png';
import KSJagannathaRao from   '../../Assets/KSJagannathaRado.png';
import NVenkatram from '../../Assets/NVenkatram.png';
import KoneruKanchanaLatha from '../../Assets/KoneruKanchanaLatha.png';





const Page = () => {
  // Step 2: Create a state variable to track visibility
  const [isLeadershipTwoOneBodyVisible, setLeadershipTwoOneBodyVisible] = useState(false);

  // Step 3: Event handler function to toggle visibility
  const toggleLeadershipTwoOneBody = () => {
    setLeadershipTwoOneBodyVisible(!isLeadershipTwoOneBodyVisible);
  };

  const [isLeaderhipTwoTwoBodyVisible, setLeaderhipTwoTwoBodyVisible] = useState(false);
  const toggleLeaderhipTwoTwoBody = () => {
    setLeaderhipTwoTwoBodyVisible(!isLeaderhipTwoTwoBodyVisible);
  };

  const [isLeaderhipTwoThreeBodyVisible, setLeaderhipTwoThreeBodyVisible] = useState(false);
  const toggleLeaderhipTwoThreeBody = () => {
    setLeaderhipTwoThreeBodyVisible(!isLeaderhipTwoThreeBodyVisible);
  };

  const [isLeaderhipTwoFourBodyVisible, setLeaderhipTwoFourBodyVisible] = useState(false);
  const toggleLeaderhipTwoFourBody = () => {
    setLeaderhipTwoFourBodyVisible(!isLeaderhipTwoFourBodyVisible);
  };


  //   ---------------------------------------------

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

//   ---------------------------------------------

  return (
    <div className="LeadershipComponent">
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
                {screenWidth < 768 ?  <NavBar/> : '' }
        </div>
      <div className="LeadershipContainer">
        <div className="Leadership-one">
          <div className="Leadership-one-in">
            <h1>Executive Officers</h1>
            <p>Find photos, biographies, and speech transcripts of SAC executives and board of council members</p>
          </div>
        </div>
        <div className="Leadership-two">
          <div className="Leadership-two-in">
            <div className="Leadership-two-one">
              <div className="Leadership-two-one-header">
                <div className="Leadership-two-one-header-in lstcmn">
                  <h1>Student Welfare and Development Committee</h1>
                  {/* Step 4: Toggle visibility on button click */}
                  <p onClick={toggleLeadershipTwoOneBody}>
                    {isLeadershipTwoOneBodyVisible ? 'Hide' : 'View'}
                  </p>
                </div>
              </div>
              {/* Step 4: Conditionally render based on state */}
              {isLeadershipTwoOneBodyVisible && (
                <div className="Leadership-two-one-body lstcmn-body profile-card-container">
                   <div className="profile-card">
                          <div className="profile-card-img">
                            <img src={KoneruSatyanarayana} alt="" />
                          </div>
                          <div className="profile-card-one">
                            <h2>Er.Koneru Satyanarayana</h2>
                            <p>Hon'ble President, KLEF</p>
                            <div className="leadership-card-knowmore">
                              <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="profile-card-img">
                          <img src={KoneruKanchanaLatha} alt="" />
                        </div>
                        <div className="profile-card-one">
                            <h2>Koneru Kanchana Latha</h2>
                            <p>Hon'ble Secretary</p>
                            <div className="leadership-card-knowmore">
                              <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="profile-card-img">
                          <img src={KoneruHavish} alt="" />
                        </div>
                        <div className="profile-card-one">
                            <h2>Er.Koneru Lakshman Havish</h2>
                            <p>Hon'ble Vice President, KLEF</p>
                            <div className="leadership-card-knowmore">
                              <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="profile-card-img">
                          <img src={KoneruHareen} alt="" />
                        </div>
                        <div className="profile-card-one">
                            <h2>Er.Koneru Raja Hareen</h2>
                            <p>Hon'ble Vice President, KLEF</p>
                            <div className="leadership-card-knowmore">
                              <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="profile-card-img">
                          <img src={KSJagannathaRao} alt="" />
                        </div>
                        <div className="profile-card-one">
                            <h2>Dr.K.S. Jagannatha Rao</h2>
                            <p>Hon'ble Pro Chancellor</p>
                            <div className="leadership-card-knowmore">
                              <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="profile-card-img">
                          <img src={PardhaSaradhiVarma} alt="" />
                        </div>
                        <div className="profile-card-one">
                            <h2>Dr. G. Pardha Saradhi Varma</h2>
                            <p>Hon'ble Vice Chancellor</p>
                            <div className="leadership-card-knowmore">
                              <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="profile-card-img">
                          <img src={AVSPrasad} alt="" />
                        </div>
                        <div className="profile-card-one">
                            <h2>Dr.A V S Prasad</h2>
                            <p>Pro Vice Chancellor-I</p>
                            <div className="leadership-card-knowmore">
                              <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="profile-card-img">
                          <img src={NVenkatram} alt="" />
                        </div>
                        <div className="profile-card-one">
                            <h2>Dr. N. Venkatram</h2>
                            <p>Pro Vice Chancellor-II</p>
                            <div className="leadership-card-knowmore">
                              <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="profile-card-img">
                          <img src={HanumanthaRao} alt="" />
                        </div>
                        <div className="profile-card-one">
                            <h2>Dr.Ch. Hanumantha Rao</h2>
                            <p>Dean (Student Affairs)</p>
                            <div className="leadership-card-knowmore">
                              <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
              )}
            </div>


            <div className="Leadership-two-three">
              <div className="Leadership-two-three-header">
                <div className="Leadership-two-three-header-in lstcmn">
                  <h1>The Office of SAC</h1>
                  <p onClick={toggleLeaderhipTwoFourBody}>
                    {isLeaderhipTwoFourBodyVisible ? 'Hide' : 'View'}
                  </p>
                </div>
              </div>
              {/* Step 4: Conditionally render based on state */}
              {isLeaderhipTwoFourBodyVisible && (
                <div className="Leadership-two-three-body lstcmn-body">
                  <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                   <div className="profile-card">
                        <img src={TechnologyCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={DanceFusionLead} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={FinanceCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={Elcomicos} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={EventsCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={InternationalCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={KutumbLead} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={NarthanaLead} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AcademicCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={SVRLead} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={VachasLead} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={versatales} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={YuvaTourismLead} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>

                </div>
              )}
            </div>


            <div className="Leadership-two-two">
              <div className="Leadership-two-two-header">
                <div className="Leadership-two-two-header-in lstcmn">
                  <h1>The Student Council</h1>
                  <p onClick={toggleLeaderhipTwoTwoBody}>
                    {isLeadershipTwoOneBodyVisible ? 'Hide' : 'View'}
                  </p>
                </div>
              </div>
              {/* Step 4: Conditionally render based on state */}
              {isLeaderhipTwoTwoBodyVisible && (
                <div className="Leadership-two-two-body lstcmn-body">
                   <div className="profile-card">
                        <img src={TechnologyCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                          <h2>Deepak Reddy</h2>
                          <p>Technology Council</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={QualityAnalysisCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                        
                    </div>
                    <div className="profile-card">
                        <img src={InternationalCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={FinanceCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={OutreachCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AcademicCouncilConvener} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <div className="council-members-profile-one">
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                          <div className="council-members-profile-one-know-more">
                            <Link className='profile-card-leadership-link' to='sac.kluniversity.in'>Know More</Link>  
                          </div>
                        </div>
                    </div>
                </div>
              )}
            </div>



            

            {/* ... (other sections) */}
          </div>
        </div>

        
      </div>
      <Footer />
    </div>
  );
};

export default Page;
