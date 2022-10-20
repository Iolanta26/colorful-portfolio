import animationData from "./about.json";
import { Player } from "@lottiefiles/react-lottie-player";

import "./footer.css";

const Footer = () => (
  <div className="footer">
    <div style={{ marginBottom: "10px" }}>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "170px", width: "150px" }}
      />
    </div>
    <div className="contact-container">
      <div>+45 93804766</div>
      <div>iolanta.scheifel@gmail.com</div>
    </div>
  </div>
);

export default Footer;
