import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import "./footer.css";

const Footer = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./about.json"),
    });
  });
  return (
    <div className="footer">
      <div className="lying" ref={container}></div>
      <div>+45 93804766</div>
      <div>iolanta.scheifel@gmail.com</div>
    </div>
  );
};

export default Footer;
