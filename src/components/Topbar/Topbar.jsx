import "./topbar.css";

import logo from "./logo1.png";
import myPhoto from "./Vector.png";

const Topbar = () => (
  <div className="topbar">
    <div className="logo-container">
      <img src={logo} alt="logo" className="logo" />
    </div>
    <div className="portfolio">PORTFOLIO</div>

    <div className="photo-container">
      <div className="my-name">Iolanta Scheifel</div>
      <img src={myPhoto} alt="me" />
    </div>
  </div>
);
export default Topbar;
