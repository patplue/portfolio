import React from "react";
import "./TextBlock.css";

const ManagerTextBlock = (props) => {
  return (
    <div>
      <div className="manager-block animate">
        <div className="arrow-container" onClick={props.back}>
          <div className="arrow-left slide-left">
            <div className="line-left-1"></div>
            <div className="line-left-2"></div>
          </div>
        </div>
        <div className="home-text-block">
          <h1 className="manager-headline">
            Hi, I'm Patrick Plue.
            <br /> A Manager, Teacher, Student.
          </h1>
          <div className="manager-about-me">
            <p>
              Welcome to my portfolio,
              <br />
              <br />I was able to gather{" "}
              <span className="highlight"> Experience</span> in a lot of
              different scenarios. For example during my 10 year{" "}
              <span className="highlight"> Career</span> in retail I was in
              every position from a
              <span className="highlight"> Retail Clerk</span> all the way up to
              the position of the
              <span className="highlight"> Store Manager </span>
              leading a successful team. I was certified to
              <span className="highlight"> Teach</span> apprentices and always
              applied my<span className="highlight"> Managing Skills</span> to
              ensure the best outcome for all individuals concerned. Since I was
              able to get all these different vantage points I'm sure that I can
              be a great addition to your team no matter in which position. I
              believe firmly that{" "}
              <span className="highlight">Communication</span>,{" "}
              <span className="highlight">Patience</span> and
              <span className="highlight"> Empathy</span> will have a positive
              effect on coworkers regardless of position.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManagerTextBlock;
