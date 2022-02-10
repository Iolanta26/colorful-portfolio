import React from "react";

import "./topbar.css";
import logo from "./logo1.png";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="navbar">
        {/* <div className="links">
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
        </div> */}
        <h1>PORTFOLIO</h1>
      </div>{" "}
      <div>icons</div>
    </div>
  );
};

export default Topbar;
