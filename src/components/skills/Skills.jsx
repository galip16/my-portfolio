import React from "react";
import "../skills/Skills.scss";
import Mern from "../skills/mern.png";
import SkillBar from "./SkillBar.jsx";

function Skills() {
  return (
    <>
      <div className="skills__container">
        <h2>Which technologies do I use as a fullstack developer?</h2>
        <div className="skills__img">
          <img src={Mern} alt="" />
        </div>

        <div className="skills__explain">
          <h5> My Education </h5>
          <p>
            Implementation of a one-year full-time training including
            technologies of the MERN stack.
          </p>

          <p>
            Development of several small and a final large practical project to
            consolidate programming skills
          </p>
        </div>

        <div className="skills__bar">
          <SkillBar />
        </div>
      </div>
    </>
  );
}

export default Skills;
