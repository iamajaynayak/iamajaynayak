import React from "react";
import "./scroll-down.css";
import scroll from "../../assets/scroll-down.svg";
import { Link } from "react-scroll";

const Scrolldown = () => (
  <div className="scroll">
    <Link to="project-id" smooth={true} duration={1500} className="hover-link">
      <img src={scroll} alt="scroll down" className="actual-scroll" />
    </Link>
  </div>
);

export default Scrolldown;
