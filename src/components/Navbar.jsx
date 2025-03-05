import React, { useState } from "react";
import "../style/navbar.css";
import { Link } from 'react-router-dom';
import menuIcon from '/assets/menu.svg'; // Import as URL
import closeIcon from '/assets/close.svg'; // Import as URL

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/assets/drgnlogo.webp"
          alt="Logo"
          className="navbar-logo-image"
        />
      </div>

      {/* Hamburger or Close icon */}
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <img src={closeIcon} alt="Close menu" className="icon" /> // Use Close icon when menu is open
        ) : (
          <img src={menuIcon} alt="Open menu" className="icon" /> // Use Menu icon when menu is closed
        )}
      </button>

      {/* Navbar Links - only visible if menu is open */}
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <button className="navbar-button">
          <Link to='/' onClick={closeMenu}>Home</Link>
        </button>
        <button className="navbar-button">
          <Link to='/about' onClick={closeMenu}>About</Link>
        </button>
        <button className="navbar-button">
          <Link to='/services' onClick={closeMenu}>Services</Link>
        </button>
        <button className="navbar-button">
          <Link to='/product' onClick={closeMenu}>Products</Link>
        </button>
        <button className="navbar-button">
          <Link to='/contact' onClick={closeMenu}>Contact</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
