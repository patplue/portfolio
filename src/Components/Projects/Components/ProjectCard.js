import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div>
      <Flippy
        flipOnClick={true}
        flipDirection="horizontal"
        style={{ width: "100%" }}>
        <FrontSide>
          <div className="sidebar-container">
            <div className="front-side-container">
              <div className="sidebar" contenteditable>
                <h3 className="card-desc">{props.location}</h3>
                <img src={props.pic} alt="placeholder" className="card-img" />
              </div>
            </div>
            <div className="desc-section" contenteditable>
              <p>Quick explanation about the project. Tap me to see more.</p>
            </div>
          </div>
        </FrontSide>
        <BackSide style={{ backgroundColor: "#175852" }}>
          <p>{props.info}</p>
        </BackSide>
      </Flippy>
    </div>
  );
};

export default ProjectCard;
