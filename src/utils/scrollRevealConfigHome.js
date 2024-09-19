import ScrollReveal from 'scrollreveal';

const scrollRevealConfigHome = () => {
  ScrollReveal().reveal('.home-content', {
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'top'
  });
  
  ScrollReveal().reveal('.portfolio-image', {
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'bottom'
  });
  
  ScrollReveal().reveal('.home-section h1', {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'left'
  });
    
  ScrollReveal().reveal('.home-section p', {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'right'
  });
};

export default scrollRevealConfigHome;
