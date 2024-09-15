import React, { useEffect } from 'react';
import Typing from 'react-typing-effect';
import scrollRevealConfigHome from '../utils/scrollRevealConfigHome';
import '../styles/components/Home.css';

function Home() {
  useEffect(() => {
    scrollRevealConfigHome();
  }, []);

  return (
    <section id="home" className="home-section">
      <div className='home-content'>
        <h3>Hello, It's me</h3>
        <h1>Sunera Sandaruwan</h1>
        <h3>And I'm a <span><Typing
          className="typing-effect"
          speed={100} // typing speed in milliseconds
          eraseDelay={2000} // delay before erasing
          eraseSpeed={50} // speed of erasing in milliseconds
          typingDelay={500} // delay before typing starts
          cursorRenderer={cursor => <>{cursor}</>}
          text={['Fullstack Developer', 'Web Developer', 'Mobile App Developer', 'Tech Enthusiast']}
        /></span></h3>
        <p>
          I am a third-year Computer Science and Engineering student
          at the University of Moratuwa with a strong passion for
          full-stack web development and mobile app development.
          I am eager to apply my skills to create innovative solutions
          and contribute to impactful projects.
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/sunera-sandaruwan-28b93b295"><i className='bx bxl-linkedin'></i></a>
          <a href="https://www.facebook.com/sunera.sandaruwan?mibextid=ZbWKwL"><i className='bx bxl-facebook'></i></a>
          <a href="https://wa.me/+94783685381"><i className='bx bxl-whatsapp'></i></a>
          <a href="https://www.instagram.com/sunerasandaruwan"><i className='bx bxl-instagram'></i></a>
          <a href="mailto:sunerasandaruwan1@gmail.com"><i className='bx bxl-gmail'></i></a>
          <a href="https://github.com/Sunera25"><i className='bx bxl-github'></i></a>
        </div>
        <a href='/documents/Sandaruwan K.D.S..pdf' download className='btn'>Download CV</a>
      </div>
      <div className='portfolio-image'>
        <img src={require('../assets/images/portfolio.png')} alt='portfolio-image'></img>
      </div>
    </section>
  );
}

export default Home;
