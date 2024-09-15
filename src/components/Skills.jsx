import React, { useEffect } from 'react';
import '../styles/components/Skills.css';
import scrollRevealConfigSkills from '../utils/scrollRevealConfigSkills';

function Skills() {

  useEffect(() => {
    scrollRevealConfigSkills();
  }, []);

  return (
    <section id="skills" className='skills-section'>

    </section>
  );
}

export default Skills;