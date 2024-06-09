import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <a href="<linktree.link>" className="logo"><i className="fab fa-node-js"></i> Mohit</a>
      <div id="menu" className="fas fa-bars" onClick={toggleMenu}></div>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#work">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
