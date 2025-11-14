import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            {/* <img src="" alt="ETS" srcset="" /> */}
            <div className='navbar-logo'>EliTech</div>
            <ul className='nav-items'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='nav-connect'>Connect with me</div>
        </nav>
    );
}

export default Navbar;
