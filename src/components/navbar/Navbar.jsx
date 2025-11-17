import React, { useRef } from "react";
import menu_open from "../../assets/menu.png";
import menu_close from "../../assets/arrow.png";
import "./Navbar.css";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "10px";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">EliTech</div>
      <img src={menu_open} alt="" className="menu-open" onClick={openMenu} />
      <ul className="nav-items" ref={menuRef}>
        <img src={menu_close} alt="" className="menu-close" onClick={closeMenu} />
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Portfolio</a>
        <a href="#contact">Contact</a>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </nav>
  );
};

export default Navbar;
