import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import me from "./me.png";
import pdf from "./CV.pdf";
import sun from "./sun.png";
import "./about.css";

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
      <div className="aboutAnimation">
        <div className="lying" ref={container}></div>
        <div className="btn-shine">About</div>
      </div>
      <div className="aboutContainer">
        <div className="imgButton">
          <img src={me} alt="me" className="me" />
          <a href={pdf} download="Iolanta_Scheifel" className="btn">
            Download CV
          </a>
        </div>
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
      </div>
      <div className="sunContainer">
        <img src={sun} alt="sun" className="sun" />
      </div>
    </div>
  );
};

export default About;
