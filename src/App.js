import Topbar from "./components/Topbar/Topbar";
import Projects from "./components/Projects/Projects";

import "./App.css";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="app">
      <Topbar />
      <Projects />
      {openModal && <Modal closeModal={setOpenModal} />}
      <button className="more-info-btn" onClick={() => setOpenModal(true)}>
        MORE INFO
      </button>
      <Footer />
    </div>
  );
}

export default App;
