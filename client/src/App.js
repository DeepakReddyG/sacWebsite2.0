import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';

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
import Dashboard from "../src/pages/Dashboard/Page";
import NotFound from "./pages/NotFound/NotFound";
import Privacy from "./pages/Privacy/Privacy";
import SIL from "./pages/SIL/Page";
import CompletedEvents from './pages/CompletedEvent/Page';
import SocialMedia from './pages/SocialMedia/page';
import Feedback from "./pages/Feedback/Page";
import ViewFeedback from "./pages/Users/Admin/Page";
import SHS from './pages/SHS/page';
import RegistrationTable from "./pages/SilRegistrations/RegistrationTable";
import RegistrationData from "./pages/SilRegistrations/RegistrationData";
import DepartmentWise from "./pages/SilRegistrations/DepartmentWise";

import AddEvent from '../src/pages/addEvent/page';
import GetEvents from '../src/pages/addEvent/getEvents';


import AddNews from '../src/pages/News/AddNewsForm';
import GetNews from '../src/pages/News/NewsList';
import NewsManagement from '../src/pages/News/NewsManagement';


import UsersApp from '../src/pages/Users/UsersApp';

import AdminConsole from './pages/Users/Admin/AdminConsole/adminConsole';

import Login from '../src/pages/Auth/Login';
import Register from '../src/pages/Auth/Register';

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



  const routes = [
    { path: "/", element: <Home /> },
    { path: "clubs/*", element: <ClubsPage /> },
    { path: "/studentclubs", element: <ClubsPage /> },
    { path: "/leadership", element: <Leadership /> },
    { path: "/dashboard/*", element: <Dashboard /> },
    { path: "/completedevents", element: <CompletedEvents /> },
    { path: "/events", element: <Events /> },
    { path: "/terms", element: <Terms /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "*", element: <NotFound /> },
    { path: "/sil", element: <SIL /> },
    { path: "/completedevents", element: <CompletedEvents /> },
    { path: "/socialmedia", element: <SocialMedia/> },
    { path: "/Feedback", element: <Feedback/>},
    { path: "/viewFeedback", element: <ViewFeedback/>},
    { path: "/swachhatahiseva", element: <SHS/>},
    { path: "/registration", element: <RegistrationTable/>},
    { path: "/registrationdata", element: <RegistrationData/>},
    { path: "/departmentwise", element: <DepartmentWise/>},
    { path: "/addevent", element: <AddEvent/>},
    { path: "/getevents", element: <GetEvents/>},
    {path: '/addnews', element: <AddNews/>},
    { path: "/getnews", element: <GetNews/>},
    { path: "/login", element: <Login/>},
    { path: "/register", element: <Register/>},
    { path: "/newsmanagement", element: <NewsManagement/>},
    { path: "/adminconsole", element: <AdminConsole/>},
    { path: "/users/*", element: <UsersApp />}
    
  ];



  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
