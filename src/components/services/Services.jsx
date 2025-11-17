import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h1>Services</h1>
      <div className="container">
        <div className="service">
          <h3>{"</>"}</h3>
          <h2>Front-End Developement</h2>
          <p>
            I transform design mockups into clean, interactive, and
            pixel-perfect websites. My focus is on creating seamless and enjoyable user experience
            that works flawlessly across all devices, from desktops to mobile devices.
          </p>
          <p className="read-more">Read More...</p>
        </div>
        <div className="service">
          <h3>⚙⚙</h3>
          <h2>Back-End Developement</h2>
          <p>I specialize in building robust, secure, and scalable server-side logic
            databases, and APIs. This includes user authentication, data
            processing, payment gateway integration and creating endpoints
            for front-end clients or mobile apps
          </p>
          <p className="read-more">Read More...</p>
        </div>
        <div className="service">
          <h3>{"{ }"}</h3>
          <h2>FullStack Web Developement</h2>
          <p>
            I build fast, mordern, and responsive websites and web applications
            from the ground up. Whether you need a simple portfolio website or a
            complex business application, I handle both front-end and back-end
            to deliver a complete product.
          </p>
          <p className="read-more">Read More...</p>
        </div>
        <div className="service">
          <h3>📶📶</h3>
          <h2>Network Setup & Config</h2>
          <p>
            Get a reliable and secure internet conection throughout your home or
            office I setup structured Small Office/Home Office (SOHO) networks,
            including router configuration Wi-Fi optimization for full coverage,
            and wired ethernet ports where needed for maximum speed and
            stability
          </p>
          <p className="read-more">Read More...</p>
        </div>
        <div className="service">
          <h3>📷📷</h3>
          <h2>CCTV Camera Installation</h2>
          <p>
            I design and install complete closed circuit television systems to
            protect your property. I will help you choose the right cameras,
            determin optimal placement for maximum coverageand ensure your
            system is configured for remote viewing on your phone or computer
          </p>
          <p className="read-more">Read More...</p>
        </div>
        <div className="service">
          <h3>🛠</h3>
          <h2>Network Troubleshooting & IT Support</h2>
          <p>Experiencing slow internet or any other network issue? I provide diagnostic
            and troubleshooting services to identify the root cause of your problems and implement a lasting solution 
            to get you back online and productive.
          </p>
          <p className="read-more">Read More...</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
