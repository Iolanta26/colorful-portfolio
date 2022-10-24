import "./modal.css";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "./girl.json";
import x from "./x.svg";
import Skills from "../Skills/Skills";

const Modal = ({ closeModal }) => {
  return (
    <div className="background">
      <div className="modal-container">
        <div className="info-wrapper">
          <Player
            autoplay
            loop
            src={animation}
            style={{ height: "150px", width: "150px" }}
          />
          <button className="close-btn" onClick={() => closeModal(false)}>
            <img src={x} alt="x" />
          </button>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Modal;
