import React from "react";
import './Contact.css'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import snap from '../../assets/snapchat.svg'
import fb from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import email from '../../assets/envelope.svg'


const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-section">
        <div className="left-pane">
          <h2>Let's Talk</h2>
          <p>
            I am always availabe to take on new projects, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="links">
            <div className="contact-link">
                <img src={email} alt="" /><p>eliphazlarbie@gmail.com</p>
            </div>
            <div className="contact-link">
                <img src={whatsapp} alt="" /><p>WhatsApp</p>
            </div>
            <div className="contact-link">
                <img src={telegram} alt="" /><p>Telegram</p>
            </div>
            <div className="contact-link">
                <img src={linkedin} alt="" /><p>LinkedIn</p>
            </div>
            <div className="contact-link">
                <img src={fb} alt="" /><p>FaceBook</p>
            </div>
            <div className="contact-link">
                <img src={snap} alt="" /><p>Snap Chat</p>
            </div>
          </div>
        </div>
        <form className="right-pane">
            <input type="text" name="name" id="name" placeholder="Fullname"/>
            <input type="email" name="email" id="email" placeholder="Email"/>
            <textarea name="message" id="message" cols="30" rows="7" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
