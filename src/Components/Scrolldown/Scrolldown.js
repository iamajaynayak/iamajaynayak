import React from "react";
import "./scroll-down.css";
import scroll from "../../assets/scroll-down.svg";

const Scrolldown = () => (
  <div className="scroll">
    <img src={scroll} alt="scroll down" className="actual-scroll" />
  </div>
);

export default Scrolldown;
