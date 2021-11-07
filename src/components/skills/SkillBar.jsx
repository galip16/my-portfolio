import React from "react";
import SkillBars from "react-skillbars";

function SkillBar() {
  const SKILLS = [
    {
      type: "Html",
      level: 98,
    },
    {
      type: "Css",
      level: 95,
    },
    {
      type: "Javascript",
      level: 90,
    },
    {
      type: "React",
      level: 88,
    },
    {
      type: "Bootstrap",
      level: 85,
    },
    {
      type: "Node.js",
      level: 75,
    },
    {
      type: "MongoDB",
      level: 80,
    },
    {
      type: "Github",
      level: 80,
    },
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };

  return (
    <div>
      <SkillBars skills={SKILLS} colors={colors} />
    </div>
  );
}

export default SkillBar;
