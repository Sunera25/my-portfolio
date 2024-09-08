import React from 'react';
import '../styles/components/Header.css';

function Header({ activeSection }) {
  return (
    <div className='header'>
      <a href="#" className='logo'>Portfolio</a>
      <i className='bx bx-menu' id='menu-logo'></i>
      <nav className='navbar'>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
        <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </nav>
    </div >
  );
}

export default Header;
