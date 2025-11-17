import React from "react";
import profile from "../../assets/profile.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img
        src={profile}
        alt="Profile"
        className="profile-img animate__animated animate__fadeInRight animate__delay-1s"
      />
      <div className="text animate__animated animate__fadeInLeft animate__delay-1s">
        <h1 className="intro-text ">
          <span>I'm Eliphaz Larbie,</span> Fullstack Developer based in Accra,
          Ghana
        </h1>
        <p>Your one-stop solution for tech innovations.</p>
        <div className="hero-actions">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My resume</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
