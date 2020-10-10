import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./ProjectCard.css";

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
        style={{ width: "100%", height: "150px" }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "#41669d",
          }}
        >
          <p>{props.location}</p>
        </FrontSide>
        <BackSide style={{ backgroundColor: "#175852" }}>
          <p>{props.info}</p>
        </BackSide>
      </Flippy>
    </div>
  );
};

export default ProjectCard;
