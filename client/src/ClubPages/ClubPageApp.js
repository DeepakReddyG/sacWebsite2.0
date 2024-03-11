import React from 'react';

import { Routes, Route } from 'react-router-dom';

import ClubPage from './clubspage';

// import all technology club pages
import ZeroOneCodeClub from './TEC/ZeroOneCodeClub/Cpage';
 

const ClubPageApp = () => {
//     const clubs = [
//         {
//             name: 'Club Home',
//             path: '/',
//             component: ClubPage
//         },
//         { 
//             name: 'ZeroOne Code Club',
//             path: 'zeroonecodeclub',
//             component: ZeroOneCodeClub
//         },
//         {
//             name: 'AI Club',
//             path: 'aiclub',
//             component: AIClub
//         },
//         {
//             name: 'Animation Club',
//             path: 'animationclub',
//             component: AnimationClub
//         },
//         {
//             name: 'Mobile E-Sports Club',
//             path: 'mobileesportsclub',
//             component: MobileESportsClub
//         },
//         {
//             name: 'Web Apps Club',
//             path: 'webappsclub',
//             component: WebAppsClub
//         },
//         {
//             name: 'Aero Electric Club',
//             path: 'aeroelectricclub',
//             component: AeroElectricClub
//         },
//         {
//             name: 'Automobile Club',
//             path: 'automobileclub',
//             component: AutomobileClub
//         },
//         {
//             name: 'Robotics Club',
//             path: 'roboticsclub',
//             component: RoboticsClub
//         },
//         {
//             name: 'Agriculture Club',
//             path: 'agricultureclub',
//             component: AgricultureClub
//         },
//         {
//             name: 'Cyber Club',
//             path: 'cyberclub',
//             component: CyberClub
//         },
//         {
//             name: 'Tech Huma Club',
//             path: 'techhumaclub',
//             component: TechHumaClub
//         },
//         {
//             name: 'Dramatics Club',
//             path: 'dramaticsclub',
//             component: DramaticsClub
//         },
//         {
//             name: 'Fusion Club',
//             path: 'fusionclub',
//             component: FusionClub
//         },
//         {
//             name: 'KL Radio Club',
//             path: 'klradioclub',
//             component: KLRadioClub
//         },
//         {
//             name: 'Film Making Club',
//             path: 'filmmakingclub',
//             component: FilmMakingClub
//         },
//         {
//             name: 'HandiCrafts Club',
//             path: 'handicraftsclub',
//             component: HandiCraftsClub
//         },
//         {
//             name: 'Narthana Club',
//             path: 'narthanaclub',
//             component: NarthanaClub
//         },
//         {
//             name: 'Swara Club',
//             path: 'swaraclub',
//             component: SwaraClub
//         },
//         {
//             name: 'Vachas Club',
//             path: 'vachasclub',
//             component: VachasClub
//         },
//         {
//             name: 'CEA Club',
//             path: 'ceaclub',
//             component: CEAClub
//         },
//         {
//             name: 'KL Talks Club',
//             path: 'kltalksclub',
//             component: KLTalksClub
//         },
//         {
//             name: 'Smart Village Club',
//             path: 'smartvillageclub',
//             component: SmartVillageClub
//         },
//         {
//             name: 'Youth Red Cross Club',
//             path: 'youthredcrossclub',
//             component: YouthRedCrossClub
//         },
//         {
//             name: 'Electoral Club',
//             path: 'electoralclub',
//             component: ElectoralClub
//         },
//         {
//             name: 'Safe Life Club',
//             path: 'safelifeclub',
//             component: SafeLifeClub
//         },
//         {
//             name: 'Tourism Club',
//             path: 'tourismclub',
//             component: TourismClub
//         },
        

//     ]
  return (
    <div>
        <Routes>
            {/* {clubs.map((club, index) => (
                <Route key={index} path={club.path} element={<club.component/>} />
            ))} */}
            <Route path="/ZeroOne" element={<ZeroOneCodeClub />} />
        </Routes>
    </div>
  )
}

export default ClubPageApp