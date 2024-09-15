import ScrollReveal from "scrollreveal";

const scrollRevealConfigProjects =()=>{
  ScrollReveal().reveal('.section-projects h2', {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'top'
  });
  ScrollReveal().reveal('.projects-container', {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'bottom'
  });
};

export default scrollRevealConfigProjects;