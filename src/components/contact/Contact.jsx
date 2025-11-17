import React, { useState } from "react";
import './Contact.css'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import snap from '../../assets/snapchat.svg'
import fb from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import email from '../../assets/envelope.svg'


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "391c58e2-f246-4eec-a670-7711218dc514");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "success" : "error");

    setTimeout(()=>{setResult("")}, 2000)
  };

  return (
    <section className="contact" id="contact">
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
        <form className="right-pane" onSubmit={onSubmit}>
            <input type="text" name="name" id="name" placeholder="Fullname" required/>
            <input type="email" name="email" id="email" placeholder="Email" required/>
            <textarea name="message" id="message" cols="30" rows="7" required placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
            {result==="success" && <p className="success">Success!</p>}
            {result==="error" && <p className="error">Error</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
