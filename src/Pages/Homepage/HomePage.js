import React from "react";
import "./homepage.css";

import NavBar from "../../Components/Navbar/NavBar.js";
import Header from "../../Components/Header/Header.js";
import Scrolldown from "../../Components/Scrolldown/Scrolldown.js";
import Headings from "../../Components/Headings/Headings.js";
import Footer from "../../Components/Footer/Footer.js";
import AboutMe from "../../Components/AboutMe/AboutMe.js";

import ContactPage from "../Contactpage/Contact.js";
import SkillPage from "../SkillPage/SkillPage.js";

import IndiProject from "../../Components/Project/IndiProject";

const HomePage = () => (
  <div className="home-page">
    <NavBar />
    <Header />
    <Scrolldown />
    <Headings titles={"my projects"} id={"project-id"} />
    <IndiProject />
    <Headings titles={"Skills & Tools I use"} />
    <SkillPage />
    <Headings titles={"Reach out to me"} id={"contact-id"} />
    <ContactPage />
    <Headings titles={"About me"} id={"about-id"} />
    <AboutMe />
    <Footer />
  </div>
);

export default HomePage;
