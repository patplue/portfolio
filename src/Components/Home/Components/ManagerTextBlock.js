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
              <br />I gathered Experience in a lot of different positions.
              During my 10 year Career in retail I made my way up from a Retail
              Clerk to Store Manager leading a successful team. I was certified
              to Teach apprentices and always applied my Managing Skills to
              ensure the best outcome for all individuals concerned. Since I was
              able to get all these different vantage points I'm sure that I can
              be a great addition to your team no matter in which position. I
              believe firmly that Communication, Patience and Empathy will have
              a positive effect on coworkers regardless of position.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManagerTextBlock;
