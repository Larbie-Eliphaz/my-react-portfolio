import React from "react";
import './Skills.css'
const Skills = () => {
  return (
    <section class="main-skills" id="skills">
      <h1 class="animate__animated animate__fadeInDown">Technical Skills</h1>

      <div class="skill-item animate__animated animate__fadeInDown animate__fast animate__delay-5s">
        <h4>Languages</h4>
        <p>JavaScript, Python, Java, SQL, Dart (loading...)</p>
      </div>

      <div class="skill-item animate__animated animate__fadeInDown animate__fast animate__delay-4s">
        <h4>Frontend</h4>
        <p>HTML, CSS, JavaScript, Bootstrap and React </p>
      </div>

      <div class="skill-item animate__animated animate__fadeInDown animate__fast animate__delay-3s">
        <h4>Backend</h4>
        <p>Node.js, Express</p>
      </div>

      <div class="skill-item animate__animated animate__fadeInDown animate__fast animate__delay-2s">
        <h4>Tools</h4>
        <p>Git & Github</p>
      </div>

      <div class="skill-item animate__animated animate__fadeInDown animate__faster animate__delay-1s">
        <h4>Database</h4>
        <p>MongoDB, MySQL</p>
      </div>
    </section>
  );
};

export default Skills;
