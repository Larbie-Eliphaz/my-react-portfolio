import React from "react";
import profile from "../../assets/profile.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="Profile" className="profile-img" />
      <h1 className="intro-text">
        <span>I'm Eliphaz Larbie,</span> Fullstack Developer based in Accra, Ghana
      </h1>
      <p>Your one-stop solution for tech innovations.</p>
      <div className="hero-actions">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
