import React from 'react';
import '../styles/components/Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className='home-content'>
        <h3>Hello, It's me</h3>
        <h1>Sunera Sandaruwan</h1>
        <h3>And I'm a <span>Fullstack Developer</span></h3>
        <p>
          I'm a Computer Science and Engineering student with a
          focus on web development. I have experience with React,
          Spring Boot, and Google Cloud, and I’m passionate about solving
          problems and working on innovative projects.
        </p>

        <div className="social-media">
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-whatsapp' ></i></a>
          <a href="#"><i class='bx bxl-instagram' ></i></a>
          <a href="#"><i class='bx bxl-linkedin' ></i></a>


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