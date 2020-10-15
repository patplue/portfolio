import React from "react";
import "./Projects.css";
import ProjectCard from "./Components/ProjectCard";
import { Grid } from "@material-ui/core";
import alma from '../../Pictures/alma.jpg';
import seeql from "../../Pictures/seeql.jpg"

const Projects = () => {
  return (
    <div id="Projects">
      <hr/>
      <h1>Projects</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
        architecto iure dolore in magnam labore laboriosam voluptas libero
        consequuntur molestiae, accusantium nesciunt nostrum voluptatum a error
        aliquam maxime ducimus quia. Amet, officia tempore dolore rem est
        quisquam eum quasi ea nobis eos doloribus! Placeat et eum adipisci
        necessitatibus laboriosam deserunt veritatis. Placeat commodi sit quam
        deleniti. Nihil provident ipsa aliquam. Explicabo culpa repellat quam in
        totam, sed, incidunt molestias necessitatibus quasi voluptas deleniti?
        Temporibus expedita ratione ipsam aspernatur ipsa, quia libero dolorem
        cum commodi at magnam aut, sequi officia corporis.
      </p>
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
        <ProjectCard location="Alma" info="something about the job" pic={alma} />
        </Grid>
        <Grid item lg={6} xs={12}>
        <ProjectCard location="SeeQL" info="something about the job" pic={seeql}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
