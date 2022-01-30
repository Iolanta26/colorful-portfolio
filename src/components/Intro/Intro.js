import React from "react";
import Typewriter from "typewriter-effect";

import green from "./green.png";
import pink from "./pink.png";
import purple from "./purple.png";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="arrows">
        <img src={green} alt="" green arrow />
        <img src={purple} alt="" purple arrow />
        <img src={pink} alt="" pink arrow />
      </div>
      <div className="introText">
        <h1 className="hello">HELLO!</h1>
        <p>I'm</p>
        <p>Iolanta Scheifel</p>

        <Typewriter
          options={{
            strings: ["Frontend Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Intro;