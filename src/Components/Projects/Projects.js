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
                  A E-commerce and software platform founded by Waldgourmet GmbH
                  to help small food production companies. Tap card to see more.
                </span>,
              ]}
              info={[
                <span>
                  The customer facing E-Commerce part of the project was built
                  in Ruby on Rails. I used ERB and SCSS for styling and content
                  building of the Front-End as well as jQuery and Javascript for
                  interactive purposes. The Back-end was built in Ruby with a
                  MySQL Database. The second part of the project was a
                  production facing app written in React.js. Unfortunately, I
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
                  This Database visualisation tool was my final project at
                  LeWagon. Tap card to see more.
                </span>,
              ]}
              info={[
                <span>
                  This project was pitched and managed by me in the last two
                  weeks of the bootcamp. With SeeQL you are able to set up a
                  team of collaborators and connect SeeQL to your MySQL or
                  PostgreSQL database. It will generate a visual Map of your
                  database where you can add tables, columns and rows and
                  comment on them. In that way planning your Database becomes an
                  easy group task. It was written in Ruby on Rails and the
                  Front-End was done completely in ERB, SCSS and Vanilla JS.{" "}
                  <br />
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
