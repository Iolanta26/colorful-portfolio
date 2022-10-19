import animationData from "./about.json";
import Lottie from "react-lottie";

import "./footer.css";

const Footer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="footer">
      <div style={{ marginBottom: "10px" }}>
        <Lottie options={defaultOptions} height={170} width={150} />
      </div>
      <div className="contact-container">
        <div>+45 93804766</div>
        <div>iolanta.scheifel@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
