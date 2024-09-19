import React, { useEffect } from 'react';
import '../styles/components/Projects.css';
import scrollRevealConfigProjects from '../utils/scrollRevealConfigProjects';

function Projects() {
  useEffect(() => {
    scrollRevealConfigProjects();
  }, []);
  return (
    <section id="projects" className="section-projects">
      <h2>My <span>Projects</span></h2>

      <div className='projects-container'>

        <div className='project-box'>
          <img src={require('../assets/images/hotel.jpg')} alt="hotel-img" />
          <div className='box-layer'>
            <h4>Hotel & Restaurant Management Information System</h4>
            <p>
              The Hotel Management Information System (HMIS) is designed to streamline hotel and restaurant operations,
              enhancing efficiency in areas like booking management, order processing, and customer service. By integrating
              automated systems and centralizing key operations, the system aims to improve the overall guest experience and
              optimize staff workflows.
            </p>
            <a href='https://github.com/Hotel-and-Restaurant-MIS' target='_blank' rel="noreferrer"><i class='bx bx-link-external' ></i></a>
          </div>
        </div>

        <div className='project-box'>
          <img src={require('../assets/images/avatar.png')} alt="avatar-img" />
          <div className='box-layer'>
            <h4>Portfolio</h4>
            <p>
              This portfolio showcases my journey and work as a web and mobile app developer. It highlights the projects I've built,
              the skills I've honed, and the services I offer in crafting responsive, user-friendly applications. Through a mix of
              creativity and technical expertise, I aim to deliver impactful digital solutions.
            </p>
            <a href='https://github.com/Sunera25/my-portfolio' target='_blank' rel="noreferrer"><i class='bx bx-link-external' ></i></a>
          </div>
        </div>

        <div className='project-box'>
          <img src={require('../assets/images/studentprogress.jpg')} alt="student-img" />
          <div className='box-layer'>
            <h4>Student Progress Report Generate System</h4>
            <p>
              Created a Student Progress Report Generation System that allows teachers to upload Excel sheets with student
              marks for each subject. The system generates a personalized PDF report for each student, displaying their marks,
              rank, and overall average across all subjects.
            </p>
          </div>
        </div>

        <div className='project-box'>
          <img src={require('../assets/images/supplychain.jpg')} alt="supplychain-img" />
          <div className='box-layer'>
            <h4>Supply Chain management System</h4>
            <p>
              We developed a Supply Chain Management System that simulated the distribution of
              products across multiple cities using trains and trucks. A database was created to manage orders,
              track deliveries, and efficiently schedule drivers and trucks for optimized logistics.</p>
          </div>
        </div>

        <div className='project-box'>
          <img src={require('../assets/images/nanoprocessor.jpg')} alt="micropocessor-img" />
          <div className='box-layer'>
            <h4>Microprocessor Design</h4>
            <p>
              In our Computer Organization and Digital Design module, we worked on designing a 4-bit microprocessor.
              This microprocessor was capable of performing fundamental operations including addition, subtraction, left shift,
              right shift, and negation.
            </p>
            <a href='https://github.com/Sunera25/CS1050-NanoProcessor' target='_blank' rel="noreferrer"><i class='bx bx-link-external' ></i></a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;