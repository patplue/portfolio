import React from "react";
import "./Projects.css";
import ProjectCard from "./Components/ProjectCard";
import { Grid } from "@material-ui/core";
import alma from "../../Pictures/alma.jpg";
import seeql from "../../Pictures/seeql.jpg";

const Projects = () => {
  return (
    <div id="Projects">
      <hr />
      <h1>Projects</h1>
      <p>
        Over the course of 2020 I went from a complete{" "}
        <span className="highlight">Beginner</span> to a confident
        <span className="highlight"> Developer</span> that uses all the tools at
        his disposal to create <span className="highlight">UX/UI</span> that
        makes it easy for people to interact with a product. Here I want to
        present some of the projects I was a part of since I started my career.
        If you have any questions about the projects please send me a{" "}
        <a href="#Contact" className="highlight">
          Message
        </a>{" "}
        and I will be happy to discuss them with you.
      </p>
      <div className="card-block">
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <ProjectCard
              location="Alma"
              desc={[
                <span>
                  A <span className="highlight">E-Commerce</span> and{" "}
                  <span className="highlight">Software</span> platform founded
                  by Waldgourmet GmbH.{" "}
                  <span className="highlight">Tap card to see more.</span>
                </span>,
              ]}
              info={[
                <span>
                  The customer facing{" "}
                  <span className="highlight">E-Commerce</span> part of the
                  project was built in{" "}
                  <span className="highlight">Ruby on Rails</span>. I used{" "}
                  <span className="highlight">ERB </span> and{" "}
                  <span className="highlight">SCSS</span> for styling and
                  content building of the{" "}
                  <span className="highlight">Front-End</span> as well as{" "}
                  <span className="highlight">jQuery </span>
                  and <span className="highlight">Vanilla JS</span> for
                  interactive purposes. The{" "}
                  <span className="highlight">Back-end</span> was built in{" "}
                  <span className="highlight">Ruby </span>
                  production facing app written in{" "}
                  <span className="highlight">React.js</span>. Unfortunately, I
                  can't share any links to the project since it is still
                  ongoing. <br />
                  Link:{" "}
                  <a href="https://www.waldgourmet.de/" className="highlight">
                    Waldgourmet
                  </a>
                </span>,
              ]}
              pic={alma}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <ProjectCard
              location="SeeQL"
              desc={[
                <span>
                  This{" "}
                  <span className="highlight">Database Visualisation Tool</span>{" "}
                  was my final project at LeWagon.{" "}
                  <span className="highlight">Tap card to see more.</span>
                </span>,
              ]}
              info={[
                <span>
                  This project was <span className="highlight">Pitched</span>{" "}
                  and <span className="highlight">Pitched</span> by me in the
                  last two weeks of the bootcamp. With{" "}
                  <span className="highlight">SeeQL</span> you are able to set
                  up a team of collaborators and connect{" "}
                  <span className="highlight">SeeQL</span> to your{" "}
                  <span className="highlight">MySQL</span> or{" "}
                  <span className="highlight">PostgreSQL </span>
                  <span className="highlight">Database</span>. It will generate
                  a visual Map of your{" "}
                  <span className="highlight">Database</span> where you can add
                  tables, columns and rows and comment on them. In that way
                  planning your <span className="highlight">Database</span>{" "}
                  becomes an easy group task. It was written in{" "}
                  <span className="highlight">Ruby on Rails</span> and the
                  <span className="highlight">Front-End</span> was done
                  completely in <span className="highlight">ERB</span>,{" "}
                  <span className="highlight">SCSS</span> and{" "}
                  <span className="highlight">Vanilla JS</span>. <br />
                  Link:{" "}
                  <a href="https://www.seeql.dev/" className="highlight">
                    SeeQL
                  </a>
                </span>,
              ]}
              pic={seeql}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
