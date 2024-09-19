import React, { useEffect } from 'react';
import '../styles/components/Services.css';
import scrollRevealConfigServices from '../utils/scrollRevealConfigServices';

function Services() {

  useEffect(() => {
    scrollRevealConfigServices();
  }, [])
  return (
    <section id="services" className='services-section'>

      <h2>My <span>Services</span></h2>

      <div className='services-container'>
        <div className='services-box'>
          <i class='bx bx-code-alt' ></i>
          <h3>Web Development</h3>
          <p>
            Creating engaging and functional websites and web applications, combining design and coding for seamless online experiences.
          </p>
          <a href='https://www.geeksforgeeks.org/web-development/' target='_blank' className='btn' rel="noreferrer">Read More</a>
        </div>

        <div className='services-box'>
          <i class='bx bxl-android' ></i>
          <h3>Mobile App Development</h3>
          <p>
            Building user-friendly apps for smartphones and tablets, optimized for smooth performance and mobile device capabilities.
          </p>
          <a href='https://www.geeksforgeeks.org/introduction-of-mobile-applications/' target="_blank" className='btn' rel="noreferrer">Read More</a>
        </div>


      </div>
    </section>
  );
}

export default Services;