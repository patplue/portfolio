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
        To get a quick overview of my Skillset and how I acquired it, here are
        some of my most recent Employments. If this caught your interest please
        send me a{" "}
        <a href="#Contact" className="highlight">
          Message
        </a>{" "}
        and I will gladly provide a detailed CV and discuss it with you, if any
        you have any questions.
      </p>
      <CVComponent
        closed="closed"
        id="Waldgourmet"
        location="Waldgourmet GmbH"
        position="Front-End Developer"
        description={[
          <span>
            I was responsible for planning and programming the look and feel of
            the entire project. On a daily basis I used HTML, CSS, JavaScript
            and React to generate the best possible UI/UX for the project. We
            were applying a Scrum approach to our work and kept the team close
            and always well informed. Unfortunately, I am unable to share
            details from the project as it is still ongoing.
          </span>,
        ]}
        dates="2020/04-Today"
      />
      <CVComponent
        closed="closed"
        id="Hellofresh"
        location="HelloFresh SE"
        position="It-Support Engineer & Office Manager"
        description={[
          <span>
            As an IT Engineer my main responsibility was to provide the
            workforce with the hardware and equipment, which would optimally
            support their work. I was also in charge of GSuite and VPN account
            management. As an Office Manager I was ensuring that the office
            space was used to its full potential. I was taking care of external
            guests in the office and making sure that C-Level events always went
            flawlessly.
          </span>,
        ]}
        dates="2018/09-2019/11"
      />
      <CVComponent
        closed="closed"
        id="GameStop"
        location="GameStop Deutschland GmbH"
        position="Store Manager"
        description={[
          <span>
            I was in charge of running the Daily Business as well as Staff
            Planning. The main focus was Managing the team to ensure best
            performance on all accounts, which involved also Interviewing and
            Hiring of new staff as well as Training newcomers and Teaching
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
