import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import pdf from "./CV.pdf";

import "./about.css";

import linkedin from "./linkedin.svg";
import github from "./github.svg";

const About = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./about.json"),
    });
  });

  return (
    <div className="about" id="about">
      <div className="upper-container">
        <div className="aboutName">About</div>
        <div className="social-bar">
          <div className="line"></div>
          <img src={linkedin} alt="" className="social-icon" />
          <img src={github} alt="" className="social-icon" />
          <div className="line"></div>
        </div>
      </div>
      <div className="aboutContainer">
        <div className="aboutText">
          <p>
            Frontend is my passion. I got interested in Software Development in
            early 2019.
            <br />
            <br />I have completed my Full Stack Web Development studies at
            Business College Helsinki and am looking for a Junior Frontend
            Developer job. <br />
            <br />
            I work mainly with Javascript and React. And I have a huge
            experience in digital design and various related apps.
            <br />
            <br />
            My skills and goal-oriented character can make magic at the working
            place. Do not hesitate to call me for the interview.
          </p>
        </div>
      </div>{" "}
      <div className="downloadButtonContainer">
        <div className="lying" ref={container}></div>
        <a href={pdf} download="Iolanta_Scheifel" className="btn">
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
};

export default About;
