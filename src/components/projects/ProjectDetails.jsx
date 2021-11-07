import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

function ProjectDetails({ value }) {
  return (
    <div className="content">
      <h3>{value.title}</h3>
      <h6>{value.detail}</h6>
      <p>
        {value.technologies.map((techno, i) => {
          return (
            <span>
              {i + 1}) {techno} <br />
            </span>
          );
        })}
      </p>
      <div className="links">
        <a href={value.links[0]}>
          <FiGithub />
        </a>
        <a href={value.links[1]}>
          <RiExternalLinkLine />
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;
