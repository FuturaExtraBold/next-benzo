import React from "react";

import Project from "../components/Project";

const Projects = (props) => {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects__grid">
          {props.data.map((project, index) => (
            <Project key={ index } { ...project } />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
