import React from "react";
import Slider from "react-slick";
import projectData from "./ProjectData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./indiproject.css";

const IndiProject = () => {
  let settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnFocus: true,
    className: "slides",
  };
  return (
    <Slider {...settings}>
      {projectData.map((project) => (
        <div className="project-container" key={project.id}>
          <div className="project-image">
            <img
              src={project.pc}
              alt="pc-screenshot"
              className="project-actual-img"
            />
          </div>
          <div className="project-bio">
            <span className="project-name">Name : {project.name}</span>
            <span className="project-description">
              <u>Description</u> : {project.description}
            </span>
            <div className="project-btn">
              <a className="view-code" href={project.source} target="_blank">
                View code
              </a>
              <a
                className="view-project"
                href={project.projectlink}
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default IndiProject;
