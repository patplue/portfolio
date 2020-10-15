import React from "react";
import "./TextBlock.css";

const TeamTextBlock = (props) => {
  return (
    <div>
      <div className="team-block animate">
        <div className="arrow-container" onClick={props.back}>
          <div className="arrow-left slide-left">
            <div className="line-left-1"></div>
            <div className="line-left-2"></div>
          </div>
        </div>
        <div className="home-text-block">
          <h1 className="team-headline">
            Hi, I'm Patrick Plue.
            <br /> A Teamplayer.
          </h1>
          <div className="team-about-me">
            <p>
              Welcome to my portfolio,
              <br />
              <br />
              Over the course of my professional career I worked in a multitude
              of <span className="highlight"> Teams</span>. Each functioning
              differently since I believe the climate of a
              <span className="highlight"> Team</span> is a result of different
              individuals trying to achieve the same
              <span className="highlight"> Goal</span>. So to be a part of a
              <span className="highlight"> Team</span> I actively
              <span className="highlight"> Communicate </span>
              with my collaborators to achieve an understanding of the common{" "}
              <span className="highlight"> Goal</span> as well as the personal
              views towards the project. I always keep the{" "}
              <span className="highlight"> Goal</span> in focus but I never let
              my <span className="highlight"> Team </span>
              out of sight. Because only a good functioning{" "}
              <span className="highlight"> Team</span> can exceed expectations.
            </p>
          </div>
        </div>
        <div className="arrow-container" onClick={props.next}>
          <div className="arrow-right slide-right">
            <div className="line-right-1"></div>
            <div className="line-right-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamTextBlock;
