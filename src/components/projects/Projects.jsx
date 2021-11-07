import React, { useState } from "react";
import projects from "./projects.json";
import "./Projects.scss";

import noteApp from "./img/noteApp.png";
import ProjectDetails from "./ProjectDetails";

function Projects() {
  const [show, setShow] = useState(true);

  return (
    <div className="projectPage">
      <h1 id="projects">My Projects</h1>

      <div className="project__items">
        {projects.map((value, i) => {
          return (
            <div className="projects__container">
              <img src={value.img} alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">
                  <ProjectDetails value={value} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
