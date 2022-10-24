import "./sidebuttons.css";
import linkedin from "./link.svg";
import github from "./git.svg";
import pdf from "./CV.pdf";
import downloadIcon from "./down.svg";

const SideButtons = () => {
  return (
    <div className="buttons">
      <div className="social-bar">
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

        <a href={pdf} download="Iolanta_Scheifel_CV" className="btn">
          <img
            src={downloadIcon}
            alt="download-icon"
            className="download-icon"
          />
          Download <br /> my resume
        </a>
      </div>
    </div>
  );
};

export default SideButtons;
