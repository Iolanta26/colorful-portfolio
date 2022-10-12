import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import pdf from "./CV.pdf";

import "./about.css";

import linkedin from "./linkedin.svg";
import github from "./github.svg";
import study from "./study.jpg";
import work from "./work.jpg";

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
          <a
            href="https://www.linkedin.com/in/iolanta-scheifel/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="" className="social-icon" />
          </a>
          <a
            href="https://github.com/iolantascheifel"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="" className="social-icon" />
          </a>
          <div className="line"></div>
        </div>
      </div>
      <div className="containers">
        <div className="info-container">
          <img src={study} alt="studying" className="picture" />
          <span className="date">01.2021 - 06.2022</span>
          <div className="info-text">
            <span className="duration">1.7 years</span>
            <div>
              Full Stack Web Development program at Business College Helsinki
            </div>
          </div>
        </div>
        <div className="info-container">
          <img src={work} alt="working" className="picture" />
          <span className="date">02.2022 - 07.2022</span>
          <div className="info-text">
            <span className="duration">6 months</span>
            <div>Frontend Developer Internship at Smoothweb.cz</div>
          </div>
        </div>
      </div>
      <div className="downloadButtonContainer">
        <div className="lying" ref={container}></div>
        <a href={pdf} download="Iolanta_Scheifel_CV" className="btn">
          DOWNLOAD MY RESUME
        </a>
      </div>
    </div>
  );
};

export default About;
