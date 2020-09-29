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
    <div className="app">
      <Container>
        <WelcomeCard />
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
      <SimpleBottomNavigation />
    </div>
  );
};

export default App;
