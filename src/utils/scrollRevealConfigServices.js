import ScrollReveal from "scrollreveal";

const scrollRevealConfigServices=() =>{
  ScrollReveal().reveal('.services-section h2', {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'top'
  });
  ScrollReveal().reveal('.services-container', {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'bottom'
  });
};

export default scrollRevealConfigServices;