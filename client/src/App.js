import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

//import components here

//import pages here
import Home from "../src/pages/Home/Home";
import Leadership from "../src/pages/Leadership/Page";
import ClubsPage from "../../client/src/ClubPages/ClubPageApp";
import Events from "./pages/Events/Event";
import Gallery from "./pages/Gallery/Gallery";
import Blogs from "./pages/Blogs/BlogOne";
import Terms from "./pages/TC/Tc";
import NotFound from "./pages/NotFound/NotFound";
import Privacy from "./pages/Privacy/Privacy";
import CompletedEvents from './pages/CompletedEvent/Page';
import SocialMedia from './pages/SocialMedia/page';
import Feedback from "./pages/Feedback/Page";
import SHS from './pages/SHS/page';
import RegistrationTable from "./pages/SilRegistrations/RegistrationTable";
import RegistrationData from "./pages/SilRegistrations/RegistrationData";
import DepartmentWise from "./pages/SilRegistrations/DepartmentWise";


// Authentication Routes here
import Login from './pages/Auth/Login/Login'
import Layout from './components/authentication/Layout'
import RequireAuth from './components/authentication/RequireAuth'
import PersistLogin from './components/authentication/PersistLogin'
import Forgot from './pages/Auth/forgot/Forgot'
import Reset from './pages/Auth/reset/Reset'
import Request from './pages/Auth/request/Request'
import UnAuth from './pages/Auth/unAuth/UnAuth'


// SIL Routes here

import SIL from "./SIL/Page"
import GetAttendance from "./SIL/attendance/GetAttendance";

// Require Authentication routes here
import Admin from './Admin/Admin'
import Addevent from "./Admin/events/Addevent";

// clubs

import ClubPage from "./ClubPages/ClubPageApp";


function App() {

  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 4000));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  return (
    <div className="App">
    <Routes>
       <Route path="/" element={<Layout />}>
         {/* persist login state here */}
         <Route path="/" element={<PersistLogin />}>
         {/* require authentication here */} 
             

             {/* require Admin authentication */}
             <Route element={<RequireAuth allowedRoles={['Admin']}/>}>
                <Route path="/admin" element={<Admin />} />
                <Route path="/addevents" element={<Addevent />} />
             </Route>

             {/* public routes here */}
             <Route path="/auth/login" element={<Login />} />
             <Route path="/auth/forgot" element={<Forgot />} />
             <Route path="/auth/reset/:id" element={<Reset />} />
             <Route path="/auth/request/resend/:encryptedEmail" element={<Request />} />
             <Route path="/unAuth" element={<UnAuth />} />
             

             <Route path="/" element={<Home />} />
             <Route path="/leadership" element={<Leadership />} />
             <Route path="/clubs" element={<ClubsPage />} />
             <Route path="/events" element={<Events />} />
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/blogs" element={<Blogs />} />
             <Route path="/terms" element={<Terms />} />
             <Route path="/privacy" element={<Privacy />} />
             <Route path="/sil" element={<SIL />} />
             <Route path="/completedevents" element={<CompletedEvents />} />
             <Route path="/socialmedia" element={<SocialMedia />} />
             <Route path="/feedback" element={<Feedback />} />
             <Route path="/shs" element={<SHS />} />
             <Route path="/registrationtable" element={<RegistrationTable />} />
             <Route path="/registrationdata" element={<RegistrationData />} />
             <Route path="/departmentwise" element={<DepartmentWise />} />
             <Route path="/clubs/*" element={<ClubPage />} />
             <Route path="*" element={<NotFound />} />

             {/* sil routes */}

              <Route path="/sil/attendance" element={<GetAttendance />} />

         </Route>
       </Route>
    </Routes>
 </div>
  );
}

export default App;
