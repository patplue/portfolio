import React from "react";
import CVComponent from "./Components/CVComponent";
import RadarChart from "./Components/RadarChart";
import "./Resume.css";

const Resume = () => {
  return (
    <div id="Resume">
      <h1>Resume</h1>
      <p>
        So you are able to get an overview of my <span className="highlight"> Skillset</span> here are some of my previous Employments. If this caught your Interest
        please send me a <a href="#Contact" className="highlight">Message</a> and I will gladly provide my CV and talk about it with you. 
      </p>
      <CVComponent
        closed="closed"
        id="Waldgourmet"
        location="Waldgourmet GmbH"
        position="Front-End Developer"
        description={[
          "As the Front-End Dev i was responsible for the",
          <span className="highlight"> look</span>,
          " and feel of the projects when it cam to user interactions",
        ]}
        dates="2020/04-Today"
      />
      <CVComponent
        closed="closed"
        id="Hellofresh" 
        location="HelloFresh SE"
        position="It-Support Engineer & Office Manager"
        description={[
          "As the Front-End Dev i was responsible for the",
          <span className="highlight"> look</span>,
          " and feel of the projects when it cam to user interactions",
        ]}
        dates="2020/04-Today"/>
      <CVComponent 
        closed="closed" 
        id="GameStop"
        location="GameStop Deutschland GmbH"
        position="Store Manager" 
        description={[
          "As the Front-End Dev i was responsible for the",
          <span className="highlight"> look</span>,
          " and feel of the projects when it cam to user interactions",
        ]}
        dates="2020/04-Today" />
      <RadarChart />
    </div>
  );
};

export default Resume;
