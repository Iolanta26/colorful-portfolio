import lottie from "lottie-web";
import { useEffect, useRef } from "react";

import "./contacts.css";

const Contacts = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./email.json"),
    });
  });

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./phone_icon.json"),
    });
  });

  return (
    <div className="contacts" id="contacts">
      <h1 className="contact-name">Let's talk</h1>
      <div className="mail" ref={container}></div>
    </div>
  );
};

export default Contacts;
