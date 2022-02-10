import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import "./skills.css";

import ts from "./icons/typescript.png";
import html from "./icons/html-5.png";
import css from "./icons/css-3.png";
import js from "./icons/js.png";
import sass from "./icons/sass.png";
import ps from "./icons/photoshop.png";
import git from "./icons/git.png";
import react from "./icons/atom.png";
import figma from "./icons/figma.png";
import github from "./icons/github.png";

const Skills = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./skills.json"),
    });
  });

  return (
    <div className="skills" id="skills">
      <h1 className="skillsName">Skills</h1>
      <div className="skillsContainer">
        <div className="icons">
          <div className="iconsLeft">
            <img src={react} alt="react" className="icon" />
            <img src={js} alt="js" className="icon" />
            <img src={html} alt="html" className="icon" />
            <img src={css} alt="css" className="icon" />
            <img src={ts} alt="ts" className="icon" />
          </div>
          <div className="iconsRight">
            <img src={sass} alt="sass" className="icon" />
            <img src={git} alt="git" className="icon" />
            <img src={github} alt="github" className="icon" />
            <img src={figma} alt="figma" className="icon" />
            <img src={ps} alt="ps" className="icon" />
          </div>
        </div>
        <div className="lottie" ref={container}></div>
      </div>
    </div>
  );
};

export default Skills;
