import React from "react";
import './About.css'
import Matpic from '../../assets/matpic.JPG';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="description">
        <div className="left-pane animate__animated animate__fadeInLeft animate__delay-1s">
          <img src={Matpic} alt="My image" className="img" />
        </div>
        <div className="right-pane animate__animated animate__fadeInRight animate__delay-1s">
          <div className="p">
            <p className="">
              Hello! I'm Eliphaz Larbie, a passionate web developer with a knack
              for creating dynamic and responsive web applications. With a
              strong foundation in HTML, CSS, and JavaScript.
            </p>
            <p className="">
              I enjoy turning complex problems into simple, beautiful, and
              intuitive designs. When I'm not coding, you'll find me exploring
              the latest tech trends or hiking in the great outdoors.
            </p>
          </div>
          <div className="skills">
            <div className="skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}/></div>
            <div className="skill"><p>JavaScript</p> <hr style={{width:"60%"}}/></div>
            <div className="skill"><p>React JS</p> <hr style={{width:"70%"}}/></div>
            <div className="skill"><p>Node Backend</p> <hr style={{width:"80%"}}/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
