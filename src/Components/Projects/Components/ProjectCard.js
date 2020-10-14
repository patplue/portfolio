import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./ProjectCard.css";
import pic from '../../../Pictures/profile.jpg';

const ProjectCard = (props) => {
  return (
    <div>
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
       style={{ width: "100%" }} /// these are optional style, it is not necessary
      >
        <FrontSide
        >
        <div className="sidebar-container">
          <div className="front-side-container">
            <div className="sidebar" contenteditable>
              <h3 className="card-desc">{props.location}</h3>
              <img src={props.pic} alt="placeholder" className="card-img"/>
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
