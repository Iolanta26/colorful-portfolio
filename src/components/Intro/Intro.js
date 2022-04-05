import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import lottie from "lottie-web";
import "./intro.css";

const Intro = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./arrows.json"),
    });
  });
  return (
    <div className="intro" id="intro">
      <div className="arrows-container">
        <div className="arrows" ref={container}></div>
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
