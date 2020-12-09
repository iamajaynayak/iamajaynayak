import React from "react";
import "./skills.css";

const Skills = ({ skill, img }) => {
  return (
    <div className="skills">
      <img className="lang-img" src={img} alt="languages" />
      <span className="lang-logo">{skill}</span>
    </div>
  );
};

export default Skills;
