import ScrollReveal from "scrollreveal";

const scrollRevealConfigAbout = () =>{
  ScrollReveal().reveal('.about-content h2', {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'top'
  });
  ScrollReveal().reveal('.about-content p, .about-content .btn', {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'bottom'
  });
}

export default scrollRevealConfigAbout;