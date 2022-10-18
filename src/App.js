import Topbar from "./components/Topbar/Topbar";
import Projects from "./components/Projects/Projects";
import linkedin from "./components/Topbar/linkedin.svg";
import github from "./components/Topbar/github.svg";
import pdf from "./CV.pdf";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="sections">
        <Topbar />
        <div className="buttons">
          <button className="more-info-btn">MORE INFO</button>
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
              DOWNLOAD MY RESUME
            </a>
          </div>
        </div>
        <Projects className="section" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
