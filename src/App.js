import React from "react";
import { useState } from "react";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Home from "./Components/Home/Home";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import SimpleBottomNavigation from "./Components/Navigation/Navigation";
import ProgressBar from "react-progressbar-on-scroll";
import Button from "@material-ui/core/Button";

import "./App.css";
import { Container } from "@material-ui/core";

const App = () => {
  const [loadingState, setLoadingState] = useState(false);
  const loadingStateSet = () => {
    document.querySelector("#splash-group").classList.add("animate-out");
    window.setTimeout(() => {
      setLoadingState(true);
    }, 500);
  };

  if (loadingState === false) {
    setTimeout(() => {
      document
        .querySelector(".button-container")
        .classList.remove("display-none");
      document.querySelector(".button-container").classList.remove("hidden");
      document.querySelector(".button-container").classList.add("animate");
    }, 2000);
    return (
      <div id="splash-group">
        <SplashScreen />
        <div className="button-container hidden display-none">
          <Button onClick={loadingStateSet}>
            <p className="button-text">tap to load my Portfolio</p>
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div id="Home" className="animate">
        <div className="progress-flex">
          <ProgressBar
            color="#fbaf00"
            direction="right"
            position="top"
            height={6}
          />
        </div>
        <div>
          <div className="app">
            <Container>
              <Home />
            </Container>
            <Container>
              <Resume />
            </Container>
            <Container>
              <Projects />
            </Container>
            <Container>
              <Contact />
            </Container>
            <div className="nav">
              <SimpleBottomNavigation />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
