import React from "react";
import Typewriter from "typewriter-effect";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro" id="intro">
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
