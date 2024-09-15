import ScrollReveal from "scrollreveal";

const scrollRevealConfigContact = () => {
  ScrollReveal().reveal('.contact-section h2', {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'top'
  });
  ScrollReveal().reveal('.contact-form', {
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'bottom'
  });
};

export default scrollRevealConfigContact;