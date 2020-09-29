import React from "react";
import AboutMe from "./Components/AboutMe";
import PictureMe from "./Components/PictureMe";
import { Grid } from "@material-ui/core";

import "./WelcomeCard.css";

const WelcomeCard = () => {
  return (
    <div>
      <div id="Home">
        <div id="container">
          <div className="makework">I Make</div>
          <div id="flip">
            <div>
              <div>HTML</div>
            </div>
            <div>
              <div>React</div>
            </div>
            <div>
              <div>CSS</div>
            </div>
            <div>
              <div>Javascript</div>
            </div>
            <div>
              <div>RubyonRails</div>
            </div>
          </div>
          <div className="makework">Work</div>
        </div>
      </div>
      <Grid container spacing={0} className="aboutmepicture">
        <Grid item lg={6} xs={12}>
          <PictureMe />
        </Grid>
        <Grid item lg={6} xs={12}>
          <AboutMe />
        </Grid>
      </Grid>
    </div>
  );
};

export default WelcomeCard;
