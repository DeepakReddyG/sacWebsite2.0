import React from 'react';

import { Routes, Route } from 'react-router-dom';

import ClubPage from './clubspage';

// import all technology club pages
import ZeroOneCodeClub from './TechnicalClubs/ZeroOneCodeClub/Cpage';
import AIClub from './TechnicalClubs/AIClub/Cpage';
import AnimationClub from './TechnicalClubs/AnimationClub/Cpage';
import MobileESportsClub from './TechnicalClubs/MobileESportsClub/Cpage';
import WebAppsClub from './TechnicalClubs/WebAppsClub/Cpage';
import AeroElectricClub from './TechnicalClubs/AeroElectricClub/Cpage';
import AutomobileClub from './TechnicalClubs/AutomobileClub/Cpage';
import RoboticsClub from './TechnicalClubs/RoboticsClub/Cpage';
import AgricultureClub from './TechnicalClubs/AgricultureClub/Cpage';
import CyberClub from './TechnicalClubs/CyberClub/Cpage';
import TechHumaClub from './TechnicalClubs/TechHumaClub/Cpage';

// import liberal club pages
import DramaticsClub from './LiberalClubs/DramaticsClub/Cpage';
import FusionClub from './LiberalClubs/FusionClub/Cpage';
import KLRadioClub from './LiberalClubs/KLRadioClub/Cpage';
import FilmMakingClub from './LiberalClubs/FilmMakingClub/Cpage';
import HandiCraftsClub from './LiberalClubs/HandiCraftsClub/Cpage';
import NarthanaClub from './LiberalClubs/NarthanaClub/Cpage';
import SwaraClub from './LiberalClubs/SwaraClub/Cpage';
import VachasClub from './LiberalClubs/VachasClub/Cpage';

//import Outreach club pages
import CEAClub from './OutreachClubs/CEAClub/Cpage';
import KLTalksClub from './OutreachClubs/KLTalksClub/Cpage';
import SmartVillageClub from './OutreachClubs/SmartVillageClub/Cpage';
import YouthRedCrossClub from './OutreachClubs/YouthRedCrossClub/Cpage';
import ElectoralClub from './OutreachClubs/ElectoralClub/Cpage';
import SafeLifeClub from './OutreachClubs/SafeLifeClub/Cpage';
import TourismClub from './OutreachClubs/TourismClub/Cpage';


const ClubPageApp = () => {
    const clubs = [
        {
            name: 'Club Home',
            path: '/',
            component: ClubPage
        },
        { 
            name: 'ZeroOne Code Club',
            path: 'zeroonecodeclub',
            component: ZeroOneCodeClub
        },
        {
            name: 'AI Club',
            path: 'aiclub',
            component: AIClub
        },
        {
            name: 'Animation Club',
            path: 'animationclub',
            component: AnimationClub
        },
        {
            name: 'Mobile E-Sports Club',
            path: 'mobileesportsclub',
            component: MobileESportsClub
        },
        {
            name: 'Web Apps Club',
            path: 'webappsclub',
            component: WebAppsClub
        },
        {
            name: 'Aero Electric Club',
            path: 'aeroelectricclub',
            component: AeroElectricClub
        },
        {
            name: 'Automobile Club',
            path: 'automobileclub',
            component: AutomobileClub
        },
        {
            name: 'Robotics Club',
            path: 'roboticsclub',
            component: RoboticsClub
        },
        {
            name: 'Agriculture Club',
            path: 'agricultureclub',
            component: AgricultureClub
        },
        {
            name: 'Cyber Club',
            path: 'cyberclub',
            component: CyberClub
        },
        {
            name: 'Tech Huma Club',
            path: 'techhumaclub',
            component: TechHumaClub
        },
        {
            name: 'Dramatics Club',
            path: 'dramaticsclub',
            component: DramaticsClub
        },
        {
            name: 'Fusion Club',
            path: 'fusionclub',
            component: FusionClub
        },
        {
            name: 'KL Radio Club',
            path: 'klradioclub',
            component: KLRadioClub
        },
        {
            name: 'Film Making Club',
            path: 'filmmakingclub',
            component: FilmMakingClub
        },
        {
            name: 'HandiCrafts Club',
            path: 'handicraftsclub',
            component: HandiCraftsClub
        },
        {
            name: 'Narthana Club',
            path: 'narthanaclub',
            component: NarthanaClub
        },
        {
            name: 'Swara Club',
            path: 'swaraclub',
            component: SwaraClub
        },
        {
            name: 'Vachas Club',
            path: 'vachasclub',
            component: VachasClub
        },
        {
            name: 'CEA Club',
            path: 'ceaclub',
            component: CEAClub
        },
        {
            name: 'KL Talks Club',
            path: 'kltalksclub',
            component: KLTalksClub
        },
        {
            name: 'Smart Village Club',
            path: 'smartvillageclub',
            component: SmartVillageClub
        },
        {
            name: 'Youth Red Cross Club',
            path: 'youthredcrossclub',
            component: YouthRedCrossClub
        },
        {
            name: 'Electoral Club',
            path: 'electoralclub',
            component: ElectoralClub
        },
        {
            name: 'Safe Life Club',
            path: 'safelifeclub',
            component: SafeLifeClub
        },
        {
            name: 'Tourism Club',
            path: 'tourismclub',
            component: TourismClub
        },
        

    ]
  return (
    <div>
        <Routes>
            {clubs.map((club, index) => (
                <Route key={index} path={club.path} element={<club.component/>} />
            ))}
        </Routes>
    </div>
  )
}

export default ClubPageApp