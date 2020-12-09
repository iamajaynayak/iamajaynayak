import React from "react";
import "./headings.css";
const Headings = ({ titles, id }) => (
  <div className="heading" id={id}>
    <h2 className="actual-heading">{titles}</h2>
  </div>
);
export default Headings;
