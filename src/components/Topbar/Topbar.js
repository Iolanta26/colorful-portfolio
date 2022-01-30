import React from "react";

import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
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
        </div>
      </div>
    </div>
  );
};

export default Topbar;
