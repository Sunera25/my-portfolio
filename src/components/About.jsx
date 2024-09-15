import React, { useEffect, useState } from 'react';
import '../styles/components/About.css';
import scrollRevealConfigAbout from '../utils/scrollRevealConfigAbout';

function About() {
  const [showMore, setShowMore] = useState(false);

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
        <p> I am a third-year undergraduate in the Department of Computer Science and Engineering at the University of
          Moratuwa, with a passion for full-stack web development and mobile app development. {showMore && (<> My academic
            journey has given me the chance to dive into several hands-on projects, where I’ve gained practical experience in
            building web and mobile applications. I’ve worked with technologies such as React, Spring Boot, and Flutter, which
            have deepened my understanding of both frontend and backend development. I enjoy problem-solving and continuously
            improving my skills by taking on new challenges. Moving forward, I’m eager to keep learning and applying my knowledge
            in real-world scenarios, while contributing to collaborative and impactful projects. </>)} </p>
        <button onClick={() => setShowMore(!showMore)} className='btn'>
          {showMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </section >
  );
}

export default About;
