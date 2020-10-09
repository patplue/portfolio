import React from "react";
import CVComponent from "./Components/CVComponent";
import RadarChart from "./Components/RadarChart";
import "./Resume.css";

const Resume = () => {
  return (
    <div id="Resume">
      <h1>Resume</h1>
      <p>
        Resume Content introduction text about{" "}
        <span className="highlight"> where</span> i worked so far an so on but
        know lets get to the littel cv section
      </p>
      <CVComponent location="Alma"/>
      <CVComponent location="HelloFresh"/>
      <RadarChart />
    </div>
  );
};

export default Resume;
