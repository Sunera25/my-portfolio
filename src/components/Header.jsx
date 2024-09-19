import React, { useState, useEffect } from 'react';
import '../styles/components/Header.css';

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Function to detect scroll and update active section
  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
    const offsets = sections.map(section => {
      const el = document.getElementById(section);
      return el ? el.offsetTop - 50 : 0; // 50px to adjust for header height
    });

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = 0; i < sections.length; i++) {
      if (scrollPosition >= offsets[i] && (!offsets[i + 1] || scrollPosition < offsets[i + 1])) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='header'>
      <a href="#" className='logo'>Sunera<i class='bx bxs-check-shield'></i></a>

      {/* Menu icon to toggle the navbar */}
      <i
        className={isNavbarOpen ? 'bx bx-x' : 'bx bx-menu'}
        id='menu-logo'
        onClick={toggleNavbar}
      ></i>

      {/* Conditionally apply 'active' class to show or hide the navbar */}
      <nav className={`navbar ${isNavbarOpen ? 'active' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={toggleNavbar}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={toggleNavbar}>About</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={toggleNavbar}>Skills</a>
        <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={toggleNavbar}>Services</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={toggleNavbar}>Projects</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={toggleNavbar}>Contact</a>

      </nav>
    </div>
  );
}

export default Header;
