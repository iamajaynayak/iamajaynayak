import React from "react";
import background from "../../assets/background.jpg";
import "./header.css";

const Header = () => (
  <div className="header" id="header-id">
    <img src={background} alt="from unsplash" />
    <div className="title">
      <span className="title-name">I am Ajay Nayak</span>
      <span className="title-subtitle">A front-end developer</span>
    </div>
  </div>
);

export default Header;
