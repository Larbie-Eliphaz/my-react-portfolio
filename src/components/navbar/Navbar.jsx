import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* <img src="" alt="ETS" srcset="" /> */}
            <div className='navbar-logo'>EliTech</div>
            <ul className='nav-items'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className='nav-connect'>Connect with me</div>
        </div>
    );
}

export default Navbar;
