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
        Over the course of 2020 I went from a complete beginner to a confident
        Developer that uses all the tools at his disposal to create UX/UI that
        makes it easy for people to interact wit a product. In this section i
        want to show off some of the prohects i was apart of since I started my
        carrer. If you have any questions about the projects just send me a{" "}
        <a href="#Contact" className="highlight">
          Message
        </a>{" "}
        and we can talk about the details.
      </p>
      <div className="card-block">
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <ProjectCard
              location="Alma"
              desc={[<span>A shop platform funded by Waldgourmet GmbH </span>]}
              info={[<span>check check </span>]}
              pic={alma}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <ProjectCard
              location="SeeQL"
              desc={[<span>check check </span>]}
              info={[<span>check check </span>]}
              pic={seeql}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
