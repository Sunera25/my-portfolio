import React from 'react';
import '../styles/components/Header.css';

function Header() {
  return (
    <div className='header'>
      <a href="#" className='logo'>Portfolio</a>
      <i class='bx bx-menu' id='menu-logo'></i>
      <nav className='navbar'>
        <a href="home" className='active'>Home</a>
        <a href="about" >About</a>
        <a href="services" >Services</a>
        <a href="projects" >Projects</a>
        <a href="contact" >Contact</a>
      </nav>
    </div >
  );
}

export default Header;
