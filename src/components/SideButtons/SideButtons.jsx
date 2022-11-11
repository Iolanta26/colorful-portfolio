import { motion } from "framer-motion";
import "./sidebuttons.css";
import linkedin from "./link.svg";
import github from "./git.svg";
import pdf from "./CV.pdf";
import downloadIcon from "./down.svg";
import { fadeInRight, stagger } from "../../animations";

const SideButtons = () => {
  return (
    <motion.div
      className="buttons"
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <motion.div className="social-bar" variants={stagger}>
        <motion.a
          href="https://www.linkedin.com/in/iolanta-scheifel/"
          target="_blank"
          rel="noreferrer"
          variants={fadeInRight}
        >
          <img src={linkedin} alt="" className="social-icon" />
        </motion.a>
        <motion.a
          href="https://github.com/iolantascheifel"
          target="_blank"
          rel="noreferrer"
          variants={fadeInRight}
        >
          <img src={github} alt="" className="social-icon" />
        </motion.a>

        <motion.a
          href={pdf}
          download="Iolanta_Scheifel_CV"
          className="btn"
          variants={fadeInRight}
        >
          <img
            src={downloadIcon}
            alt="download-icon"
            className="download-icon"
          />
          Download <br /> my resume
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default SideButtons;
