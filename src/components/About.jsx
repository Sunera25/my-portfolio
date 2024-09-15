import React, { useEffect } from 'react';
import '../styles/components/About.css';
import scrollRevealConfigAbout from '../utils/scrollRevealConfigAbout';

function About() {
  useEffect(() => {
    scrollRevealConfigAbout();
  }, []);



  return (
    <section id="about" className="about-section">
      <div className='about-img'>
        <img src={require("../assets/images/about.png")} alt="about-image" />
      </div>
      <div className='about-content'>
        <h2>About <span>Me</span></h2>
        <p>
          I am a third-year undergraduate in the Department of Computer Science and Engineering at the University of Moratuwa,
          deeply passionate about both full-stack web development and mobile app development. My journey so far has involved
          working on diverse projects that leverage modern technologies to create efficient and innovative solutions. I thrive
          on solving complex problems and enjoy the challenge of bringing ideas to life through code. With a commitment to
          continuous learning and growth, I am excited about the opportunities to contribute to and collaborate on impactful
          projects.
        </p>
        <a href="#" className='btn'>Read More</a>
      </div>
    </section>
  );
}

export default About;