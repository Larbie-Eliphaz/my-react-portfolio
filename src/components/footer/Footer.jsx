import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <h2>EliTech</h2>
          <p>
            I’m a software developer with a passion for solving problems through
            code. With experience in full-stack development, I specialize in
            building web applications using modern frameworks like React,
            Node.js, and React-Native.
          </p>
        </div>
        <div className="right">
          <input type="email" name="subscribe" id="subscribe" placeholder="enter your email"/>
          <button type="submit">subscribe</button>
        </div>
      </div>
      <hr />
      <div className="down">
        <div className="copyright">
          &copy;{new Date().getFullYear()} Eliphaz Larbie. All rights reserved
        </div>
        <div >
          <p>Terms of Services</p>
          <p>Privacy policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
