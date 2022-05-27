import "./topbar.css";

import logo from "./logo1.png";
import linkedin from "../About/linkedin.svg";
import github from "../About/github.svg";

const Topbar = () => (
  <div className="topbar">
    <div className="logo-container">
      <a href="#intro">
        <img src={logo} alt="logo" className="logo" />
      </a>
    </div>
    <div className="navbar">
      <div className="links">
        <a href="#intro">
          <p>HOME</p>
        </a>
        <a href="#about">
          <p>ABOUT</p>
        </a>
        <a href="#projects">
          <p>PROJECTS</p>
        </a>
        <a href="#skills">
          <p>SKILLS</p>
        </a>
        <a href="#contacts">
          <p>CONTACTS</p>
        </a>
      </div>
    </div>{" "}
    <div className="social-topbar">
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
    </div>
  </div>
);

export default Topbar;
