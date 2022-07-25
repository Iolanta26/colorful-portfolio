import "./intro.css";

import myImage from "./Vector.png";
// import yellowBack from "./yellowBack.svg";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="introText">
        <div className="title">
          <div className="hello">HELLO</div>
          <div className="there">there!</div>
        </div>
        <div className="iAm">I'm</div>
        <div className="iolanta">Iolanta Scheifel</div>
        <div className="frontend">Frontend Developer</div>
        <div className="byMe">Portfolio is coded and designed by me</div>
      </div>
      <div className="myphoto">
        <img src={myImage} alt="me" className="me" />
      </div>
    </div>
  );
};

export default Intro;
