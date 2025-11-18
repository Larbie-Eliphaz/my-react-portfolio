import React, { useState } from "react";
import './Contact.css'
import whatsapp from '../../assets/whatsapp.png'
import telegram from '../../assets/telegram.png'
// import snap from '../../assets/snapchat.png'
// import fb from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import email from '../../assets/email.png'


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
                <img src={email} alt="" /><p><a href="mailto:eliphazlarbie3@gmail.com">eliphazlarbie3@gmail.com</a></p>
            </div>
            <div className="contact-link">
                <img src={whatsapp} alt="" /><a href="//wa.me/+233508348125">WhatsApp</a><p></p>
            </div>
            <div className="contact-link">
                <img src={telegram} alt="" /><a href="//t.me/+233508348125">Telegram</a><p></p>
            </div>
            <div className="contact-link">
                <img src={linkedin} alt="" /><a href="https://www.linkedin.com/in/eliphaz-larbie-583995388/">LinkedIn</a><p></p>
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
