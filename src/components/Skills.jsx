import React, { useEffect, useState } from 'react';
import '../styles/components/Skills.css';
import scrollRevealConfigSkills from '../utils/scrollRevealConfigSkills';

const skillsData = [
  { icon: 'bx-code', name: 'Programming Languages', details: [{ skill: 'Java', percentage: '80%' }, { skill: 'Java Script', percentage: '85%' }, { skill: 'Python', percentage: '75%' }, { skill: 'C++', percentage: '75%' }] },
  { icon: 'bx-desktop', name: 'Frontend', details: [{ skill: 'React', percentage: '80%' }, { skill: 'HTML/CSS', percentage: '80%' }] },
  { icon: 'bx-server', name: 'Backend', details: [{ skill: 'Node.js', percentage: '75%' }, { skill: 'Spring Boot', percentage: '70%' }] },
  { icon: 'bxs-devices', name: 'Tools', details: [{ skill: 'VSCode', percentage: '80%' }, { skill: 'Docker', percentage: '70%' }, { skill: 'Git', percentage: '70%' }, { skill: 'Postman', percentage: '80%' }] },
  { icon: 'bx-data', name: 'Database Management', details: [{ skill: 'MySQL', percentage: '80%' }, { skill: 'MongoDB', percentage: '60%' }] },
  { icon: 'bxs-conversation', name: 'Soft Skills', details: [{ skill: 'Teamwork', percentage: '90%' }, { skill: 'Communication', percentage: '95%' }] },
];

function Skills() {
  const [selectedSkillType, setSelectedSkillType] = useState('Programming Languages');

  useEffect(() => {
    scrollRevealConfigSkills();
  }, []);

  const handleSkillTypeClick = (name) => {
    setSelectedSkillType(name); // Keep it displayed
  };

  return (
    <section id="skills" className='skills-section'>
      <h2>My <span>Skills</span></h2>
      <div className='skills-container'>
        <div className='skill-type-container'>
          {skillsData.map((skill) => (
            <div
              className={`skill-type-box ${skill.name === selectedSkillType ? 'active' : ''}`}
              key={skill.name}
              onClick={() => handleSkillTypeClick(skill.name)}
            >
              <i className={`bx ${skill.icon}`} aria-label={skill.name}></i>
              {skill.name}
            </div>

          ))}
        </div>
        <div className='skills-details-container'>
          {skillsData
            .filter(skill => skill.name === selectedSkillType) // Only show selected skill type

            .map((skill) => (
              <div className='skill-details-box' key={skill.name}>
                <h1 className='skill-name'>{skill.name}</h1>
                {skill.details.map((detail) => (
                  <><div className='skill-box' key={detail.skill}>
                    <div className='skill'>{detail.skill}</div>
                    <div className='skill-percentage'>{detail.percentage}</div>
                  </div><div className='progress-bar'>
                      <div className='progress' style={{ width: detail.percentage }}></div>
                    </div>
                  </>

                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
