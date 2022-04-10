import { useState, useEffect } from "react";
import "./contacts.css";

import email from "./email.svg";
import phone from "./phone.svg";

import yellowG from "./yellowGroup.svg";

const Contacts = () => {
  const [emailCopied, setEmailCopied] = useState();
  const [phoneCopied, setPhoneCopied] = useState();

  useEffect(() => {
    navigator.clipboard.writeText(emailCopied);
  }, [emailCopied]);

  useEffect(() => {
    navigator.clipboard.writeText(phoneCopied);
  }, [phoneCopied]);

  return (
    <div className="contacts" id="contacts">
      <img src={yellowG} alt="" className="yellow-group" />
      <h1 className="contact-name">Let's talk</h1>
      <div className="contact-info-container">
        <div className="contact-info-wrapper">
          <div className="contact-mail">
            <img className="mail" src={email} alt="" />
            <p className="info">iolanta.scheifel@gmail.com</p>
          </div>
          <div className="contact-phone">
            <img className="phone" src={phone} alt="" />
            <p className="info">+3584456000</p>
          </div>
        </div>
        <div className="copy-btns">
          <button
            className="copy-button"
            disabled={emailCopied}
            onClick={() => setEmailCopied("iolanta.scheifel@gmail.com")}
          >
            {emailCopied ? "Copied" : "Copy"}
          </button>
          <button
            className="copy-button"
            disabled={phoneCopied}
            onClick={() => setPhoneCopied("+3584456000")}
          >
            {phoneCopied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
      <div className="location">
        Located in Aalborg, Denmark. Open for remote work. Relocation is
        possible as well.{" "}
      </div>
    </div>
  );
};

export default Contacts;
