import "./modal.css";
import animationData from "./info.json";
import Lottie from "react-lottie";
import x from "./x.png";
import Skills from "../Skills/Skills";

const Modal = ({ closeModal }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="background" onClick={() => closeModal(false)}>
      <div className="modal-container">
        <div className="info-wrapper">
          <Lottie options={defaultOptions} height={100} width={130} />
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
