import React from "react";
import logo from "../../assets/AN.png";
import "./navbar.css";
import { Link } from "react-scroll";

const NavBar = () => (
  <div className="navbar">
    <div className="logo">
      <Link to="header-id" smooth={true} duration={1500} className="hover-link">
        <img src={logo} alt="logo" />
      </Link>
    </div>
    <div className="navbar-links">
      <span className="navbar-projects">
        <Link
          to="project-id"
          smooth={true}
          duration={1500}
          className="hover-link"
        >
          Projects
        </Link>
      </span>
      <span className="navbar-contact">
        <Link
          to="contact-id"
          smooth={true}
          duration={1500}
          className="hover-link"
        >
          Contact
        </Link>
      </span>
      <span className="navbar-about">
        <Link
          to="about-id"
          smooth={true}
          duration={1500}
          className="hover-link"
        >
          About me
        </Link>
      </span>
    </div>
  </div>
);
export default NavBar;
