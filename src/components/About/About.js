import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import pdf from "./CV.pdf";

import "./about.css";

import linkedin from "./linkedin.svg";
import github from "./github.svg";
import purple from "./purple.svg";
import bigline from "./bigline.svg";
import studies from "./studies.svg";
import work from "./work.svg";

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
      <img src={purple} alt="" className="purple" />
      <img src={bigline} alt="" className="bigline" />
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
        <div className="small-containers">
          <div className="about-small-container">
            <div className="span">
              <img src={studies} alt="" className="studies" />
              <span>01.2021 - 06.2022</span> <span>1.7 years</span>
            </div>
            Full Stack Web Development program at Business College Helsinki
          </div>
          <div className="about-small-container">
            <div className="span">
              <img src={work} alt="" className="studies" />
              <span>02.2022 - 07.2022</span> <span>6 months</span>
            </div>
            Frontend Developer Internship at Smoothweb.cz
          </div>
        </div>

        {/* <p>
            I got interested in Software Development in early 2019. Coding was
            my hobby, which became a desired work.
            <br />
            <br />
            I've been concentrating on Frontend, but I would like to try some
            new technologies and be a Software Developer with wide knowledge.
            <br />
            <br />I work mainly with React Js and Next Js.
          </p> */}
      </div>{" "}
      <div className="downloadButtonContainer">
        <div className="lying" ref={container}></div>
        <a href={pdf} download="Iolanta_Scheifel_CV" className="btn">
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
};

export default About;
