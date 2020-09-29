import React from "react";
import WelcomeCard from "./Components/WelcomeCard/WelcomeCard";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import SimpleBottomNavigation from "./Components/Navigation/Navigation";
import "./App.css";
import { Container } from "@material-ui/core";

const App = () => {
  return (
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
  );
};

export default App;
