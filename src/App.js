import React from "react";
import WelcomeCard from "./Components/WelcomeCard/WelcomeCard";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import SimpleBottomNavigation from "./Components/Navigation/Navigation";
import ProgressBar from "react-progressbar-on-scroll";

import "./App.css";
import { Container } from "@material-ui/core";

const App = () => {

  return (
    <div>
      <div className="progress-flex">
        <ProgressBar
          color="#000"
          height={10}
          direction="right"
          position="top"
          height={6}
        />
      </div>
      <div id="Home">
        <div className="nav">
          <SimpleBottomNavigation />
        </div>
        <div className="app">
          <WelcomeCard />
          <Container>
            <Resume />
          </Container>
          <Container>
            <Projects />
          </Container>
          <Container>
            <Contact />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default App;
