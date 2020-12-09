import React from "react";
import "./aboutme.css";

import Ajay from "../../assets/Ajay.jpg";

const AboutMe = () => (
  <div className="aboutme-container">
    <div className="aboutme-img-container">
      <img className="aboutme-img" src={Ajay} alt="ajay nayak" />
    </div>
    <div className="aboutme-bio-container">
      <span className="aboutme-name">
        <b>Hi, I'm Ajay Nayak</b>
      </span>
      <span className="aboutme-bio">
        I've been learning and building my own projects. I have an in depth
        knowledge of how Javascript engine works. I also use various libraries
        and tools. such as : ReactJs, Redux, Firebase, React-router-dom, Data
        Structure and many small tools.
      </span>
      <span className="second-para-bio">
        &nbsp; &nbsp; &nbsp; I'm curious about learning new things and apply it
        to solve complex problems.
      </span>
    </div>
  </div>
);

export default AboutMe;
