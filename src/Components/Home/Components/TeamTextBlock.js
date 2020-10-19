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
              Over the course of my professional career I worked in a variety of
              Teams, each functioning differently. I believe the climate of a
              Team is a result of different individuals trying to achieve the
              same Goal. As a team member I learned to actively communicate to
              comprehend that common goal as well as each member's approach
              towards it. I always keep the Goal in focus but I never let my
              Team out of sight, because only a good functioning Team can exceed
              expectations.
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
