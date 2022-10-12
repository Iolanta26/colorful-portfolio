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
import sc from "./icons/sc.png";
// import nextjs from "./icons/next-js.png";
import next from "./icons/next-js.svg";

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
      <div className="skills-main-container">
        <div className="skills-name-wrapper">
          <h1 className="skillsName">Skills</h1>
          <div className="lottie" ref={container}></div>
        </div>
        <div className="skills-icon-container">
          <div className="skill">
            <img src={react} alt="react" className="icon" />
            React Js
          </div>
          <div className="skill">
            <img src={js} alt="js" className="icon" />
            Javascript
          </div>
          <div className="skill">
            <img src={html} alt="html" className="icon" />
            HTML
          </div>
          <div className="skill">
            <img src={css} alt="css" className="icon" />
            CSS
          </div>
          <div className="skill">
            <img src={ts} alt="ts" className="icon" />
            Typescript
          </div>
          <div className="skill">
            <img src={next} alt="nextjs" className="icon" />
            Next Js
          </div>
          <div className="skill">
            <img src={sass} alt="sass" className="icon" />
            Sass
          </div>
          <div className="skill">
            <img src={git} alt="git" className="icon" />
            Git
          </div>
          <div className="skill">
            <img src={github} alt="github" className="icon" />
            Github
          </div>
          <div className="skill">
            <img src={sc} alt="sc" className="icon" />
            Styled Components
          </div>
          <div className="skill">
            <img src={figma} alt="figma" className="icon" />
            Figma
          </div>
          <div className="skill">
            <img src={ps} alt="ps" className="icon" />
            Photoshop
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
