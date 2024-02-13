import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import logo from '../assets/name-logo.png'; // Adjust the path as needed

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      </div>

      <ul className={`nav-links ${menuVisible ? 'visible' : ''}`}>
        <li><a href="#home" smooth={true} duration={1000}>Home</a></li>
        <li><a href="#about" smooth={true} duration={1000}>About</a></li>
        <li><a href="#work" smooth={true} duration={1000}>Work</a></li>
        <li><a href="#skills"smooth={true} duration={1000}>Skills</a></li>
        <li><a href="#testimonials"smooth={true} duration={1000}>Testimonials</a></li>
        <li><a href="#contact"smooth={true} duration={1000}>Contact</a></li>
      </ul>

      <div className="menu-button" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {menuVisible && (
        <div className="overlay">
          <ul className="overlay-menu">
            <li><a href="#home"smooth={true} duration={1000} onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" smooth={true} duration={1000} onClick={toggleMenu}>About</a></li>
            <li><a href="#work" smooth={true} duration={1000} onClick={toggleMenu}>Work</a></li>
            <li><a href="#skills" smooth={true} duration={1000} onClick={toggleMenu}>Skills</a></li>
            <li><a href="#testimonials" smooth={true} duration={1000} onClick={toggleMenu}>Testimonials</a></li>
            <li><a href="#contact" smooth={true} duration={1000} onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
