import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [active, setActive] = useState("Home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(sectionId);
  };

  return (
    <div>
      <nav className='navbar'>
        <ul className='brand__name'>
          <li><a href="#home" onClick={() => scrollToSection("Home")}>DIGITREND</a></li>
        </ul>

        <ul className='nav__items'>
          <li>
            <a 
              href="#home" 
              className={`nav__link ${active === "Home" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); scrollToSection("Home"); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#About" 
              className={`nav__link ${active === "About" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); scrollToSection("About"); }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={`nav__link ${active === "Services" ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); scrollToSection("Services"); }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className={`nav__link ${active === "Pricing" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); scrollToSection("Pricing"); }}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={`nav__link ${active === "Portfolio" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); scrollToSection("Portfolio"); }}
            >
              Portfolio
            </a>
          </li>
        </ul>

        <a href="#contact" className='contact-btn' onClick={() => scrollToSection("Contact")}>
          <button className='btn btn-success contact-button'>
            Contact Us
          </button>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
