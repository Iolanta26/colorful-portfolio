import "./contacts.css";

import email from "./email.svg";
import phone from "./phone.svg";

const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
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
          <button>Copy</button>
          <button>Copy</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
