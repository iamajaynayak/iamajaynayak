import React from "react";
import "./header.css";
import Particles from "react-particles-js";

const part_dot = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#181818",
    },
    size: {
      value: 4,
    },
    line_linked: {
      color: "#000000",
    },
    move: {
      speed: 5,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        distance: 800,
        size: 12,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
    },
  },
};

const Header = () => (
  <div className="header" id="header-id">
    <Particles className="particles" params={part_dot} />
    <div className="title">
      <span className="title-name">I am Ajay Nayak</span>
      <span className="title-subtitle">A front-end developer</span>
    </div>
  </div>
);

export default Header;
