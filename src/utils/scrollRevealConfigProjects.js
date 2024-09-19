import ScrollReveal from "scrollreveal";

const scrollRevealConfigProjects =()=>{
  ScrollReveal().reveal('.section-projects h2', {
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'top'
  });
  ScrollReveal().reveal('.projects-container', {
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'bottom'
  });
};

export default scrollRevealConfigProjects;