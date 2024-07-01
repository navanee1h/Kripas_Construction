import React, { useState, useEffect } from "react";
import { Navigation } from "./components/UserComponents/navigation";
import { Header } from "./components/UserComponents/header";
import { About } from "./components/UserComponents/about";
import { Services } from "./components/UserComponents/services";
import { Gallery } from "./components/UserComponents/gallery";
import { Team } from "./components/UserComponents/Team";
import { Contact } from "./components/UserComponents/contact";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/UserComponents/loginPage";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [PageData, setPageData] = useState({});

  useEffect(() => {
    setPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation id="rootDiv" />
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Header data={PageData.Header} />
        <About data={PageData.About} />
        <Services data={PageData.Services} />
        <Gallery data={PageData.Gallery} />
        <Team data={PageData.Team} />
        <Contact data={PageData.Contact} />

        <Routes>
          <Route path="/login" element={<Login />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
