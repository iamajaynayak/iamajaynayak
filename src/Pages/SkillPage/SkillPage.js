import React from "react";
import "./skillpage.css";
import Skills from "../../Components/Skills/Skills.js";
import SkillsData from "../../Components/Skills/SkillsData.js";

const mySkills = SkillsData.map((skill, i) => (
  <Skills
    skill={SkillsData[i].tool}
    key={SkillsData[i].id}
    img={SkillsData[i].imgUrl}
  />
));

const SkillPage = () => <div className="skill-page">{mySkills}</div>;

export default SkillPage;
