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
  let [loadingState, setLoadingState] = useState(false);
  const loadingStateSet = () => {
    document.querySelector("#splash-group").classList.add("animate-out")
    window.setTimeout(()=>{
      setLoadingState(true);
    },1000)
  };

  if (loadingState === false) {
    return (
      <div id="splash-group">
        <SplashScreen />
        <div className="button-container">
          <Button onClick={loadingStateSet}>
            <p>&lt; tab to load my Portfolio &gt;</p>
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="animate">
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
            <Home />
            <Resume />
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
  }
};

export default App;
