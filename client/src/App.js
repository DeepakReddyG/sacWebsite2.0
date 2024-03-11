import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

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


import SIL from "./SIL/Page"


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
       <Route path="/">

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

       </Route>
    </Routes>
 </div>
  );
}

export default App;
