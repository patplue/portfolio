import React from "react";
import picture from "../../../Pictures/Headshot.jpg";
import { Container } from "@material-ui/core";
import "./PictureMe.css";

const PictureMe = () => {
  return (
    <div>
      <Container>
        <div className="imgwrapper">
          <img src={picture} alt="pic of me" className="headshot" />
        </div>
      </Container>
    </div>
  );
};

export default PictureMe;
