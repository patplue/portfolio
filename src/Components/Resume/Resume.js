import React from "react";
import CVComponent from "./Components/CVComponent";
import RadarChart from "./Components/RadarChart";
import "./Resume.css";

const Resume = () => {
  return (
    <div id="Resume">
      <hr />
      <h1>Resume</h1>
      <p className="resume-text-block">
        So you are able to get a quick overview of my{" "}
        <span className="highlight"> Skillset</span> here are some of my
        previous Employments. <br />
        This is here to create a top level overview for you to see how I aquired
        my <span className="highlight"> Skills</span>. <br /> If this caught
        your Interest please send me a{" "}
        <a href="#Contact" className="highlight">
          Message
        </a>{" "}
        and I will gladly provide my CV and talk about it with you.
      </p>
      <CVComponent
        closed="closed"
        id="Waldgourmet"
        location="Waldgourmet GmbH"
        position="Front-End Developer"
        description={[
          <span>
            I was responsible for planning and programming the
            <span className="highlight"> look </span> and
            <span className="highlight"> feel </span>
            of the entire project. On a daily bases I used{" "}
            <span className="highlight">HTML</span>,{" "}
            <span className="highlight">CSS</span>,{" "}
            <span className="highlight">JavaScript</span> and{" "}
            <span className="highlight">React</span> to generate the best
            possible <span className="highlight">UI/UX</span> for the project.
            We were appliyng a <span className="highlight">Scrum</span> approach
            to our work and kept the team close and always well informed.
          </span>,
        ]}
        dates="2020/04-Today"
      />
      <CVComponent
        closed="closed"
        id="Hellofresh"
        location="HelloFresh SE"
        position="It-Support Engineer & Office Manager"
        description={[<span></span>]}
        dates="2018/09-2019/11"
      />
      <CVComponent
        closed="closed"
        id="GameStop"
        location="GameStop Deutschland GmbH"
        position="Store Manager"
        description={[
          <span>
            I was in charge of running the{" "}
            <span className="highlight">Daily Business</span> as well as{" "}
            <span className="highlight">Staffplanning</span>. The main focus was{" "}
            <span className="highlight">Managing</span> the team to ensure best
            performance on all accounts, which involved also{" "}
            <span className="highlight">Interviewing</span> and{" "}
            <span className="highlight">Hiring</span> of new staff as well as
            <span className="highlight">Training</span> and{" "}
            <span className="highlight">Teaching</span> of trainees and
            apprentices.
          </span>,
        ]}
        dates="2015-2018"
      />
      <RadarChart />
    </div>
  );
};

export default Resume;
