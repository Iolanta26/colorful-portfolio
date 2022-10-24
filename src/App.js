import Topbar from "./components/Topbar/Topbar";
import Projects from "./components/Projects/Projects";

import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import animationData from "./about.json";
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="app">
      <Topbar />
      <Projects />
      {openModal && <Modal closeModal={setOpenModal} />}
      <div className="more-info-container">
        <div className="animation-lying">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "170px", width: "150px" }}
          />
        </div>
        <button className="more-info-btn" onClick={() => setOpenModal(true)}>
          MORE INFO
        </button>
      </div>
      <div className="footer">
        <div className="small-app-text">
          Designed and coded by <br /> Iolanta Scheifel
        </div>
        <div className="contact-container">
          <div>+45 93804766</div>
          <div>iolanta.scheifel@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default App;
