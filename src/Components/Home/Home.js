import React from "react";
import AboutMe from "./Components/AboutMe";
import PictureMe from "./Components/PictureMe";
import { Grid } from "@material-ui/core";

import "./Home.css";

const Home = () => {
  return (
    <div>
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

export default Home;
