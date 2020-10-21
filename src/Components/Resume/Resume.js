import React from "react";
import CVComponent from "./Components/CVComponent";
import RadarChart from "./Components/RadarChart";
import "./Resume.css";

const Resume = () => {
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };
  return (
    <div id="Resume">
      <hr />
      <h1>Resume</h1>
      <p className="resume-text-block">
        To get a quick overview of my{" "}
        <span className="highlight">Skillset</span> and how I acquired it, here
        are some of my most recent Employments. If this caught your interest
        please send me a{" "}
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
          <span key={generateKey("waldgourmet")}>
            I was responsible for planning and programming the{" "}
            <span className="highlight">Look</span> and{" "}
            <span className="highlight">Feel</span> of the entire project. On a
            daily basis I used <span className="highlight">HTML</span>,{" "}
            <span className="highlight">CSS</span>,{" "}
            <span className="highlight">JavaScript</span> and{" "}
            <span className="highlight">React</span> to generate the best
            possible <span className="highlight">UI/UX</span> for the project.
            We were applying a <span className="highlight">Scrum</span> approach
            to our work and kept the team close and always well informed.
            Unfortunately, I am unable to share details from the project as it
            is still ongoing.
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
          <span key={generateKey("hellofresh")}>
            As an <span className="highlight">IT Engineer</span> my main
            responsibility was to provide the workforce with the hardware and
            equipment, which would optimally support their work. I was also in
            charge of GSuite and VPN account management. As an{" "}
            <span className="highlight">Office Manager</span> I was ensuring
            that the office space was used to its full potential. I was taking
            care of external guests in the office and making sure that C-Level
            events always went flawlessly.
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
          <span key={generateKey("gamestop")}>
            I was in charge of running the{" "}
            <span className="highlight">Daily Business</span> as well as{" "}
            <span className="highlight">Staff Planning</span>. The main focus
            was <span className="highlight">Managing</span> the team to ensure
            best performance on all accounts, which involved also{" "}
            <span className="highlight">Interviewing </span>
            and <span className="highlight">Hiring </span> of new staff as well
            as <span className="highlight">Hiring </span> newcomers and{" "}
            <span className="highlight">Teaching </span>
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
