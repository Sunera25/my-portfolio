import React from 'react';
import '../styles/components/Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className='home-content'>
        <h3>Hello, It's me</h3>
        <h1>Sunera Sandaruwan</h1>
        <h3>And I'm a <span>Fullstack Developer</span></h3>
        <p>
          I am a third-year Computer Science and Engineering student
          at the University of Moratuwa with a strong passion for
          full-stack web development and mobile app development.
          I am eager to apply my skills to create innovative solutions
          and contribute to impactful projects.
        </p>

        <div className="social-media">
          <a href="https://www.linkedin.com/in/sunera-sandaruwan-28b93b295"><i class='bx bxl-linkedin' ></i></a>
          <a href="https://www.facebook.com/sunera.sandaruwan?mibextid=ZbWKwL"><i class='bx bxl-facebook'></i></a>
          <a href="https://wa.me/+94783685381"><i class='bx bxl-whatsapp' ></i></a>
          <a href="#"><i class='bx bxl-instagram' ></i></a>
          <a href="mailto:sunerasandaruwan1@gmail.com"><i class='bx bxl-gmail' ></i></a>
          <a href="https://github.com/Sunera25"><i class='bx bxl-github' ></i></a>




        </div>
        <a href='#' className='btn'>Download CV</a>
      </div>
      <div className='portfolio-image'>
        <img src={require('../assets/images/portfolio.png')} alt='portfolio-image'></img>
      </div>
    </section>
  );
}

export default Home;