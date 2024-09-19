import ScrollReveal from "scrollreveal";

const scrollRevealConfigSkills = () =>{
  ScrollReveal().reveal('.skill-type-container', {
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'left',
  });
 
};

export default scrollRevealConfigSkills;