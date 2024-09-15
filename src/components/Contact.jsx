import React, { useEffect } from 'react';
import '../styles/components/Contact.css';
import scrollRevealConfigContact from '../utils/scrollRevealConfigContact';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

  useEffect(() => {
    scrollRevealConfigContact();
  }, []);

  const handleSubmit = () => {
    toast.success("I Got Your Message");
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact <span>Me!</span></h2>
      <form className="contact-form">
        <div className="input-group">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="text" placeholder='Your Number' />
        </div>
        <textarea cols='30' rows='10' placeholder='Your Message' />
        <input type="submit" className='btn' value='Send Message' onClick={handleSubmit} />
      </form>
      <ToastContainer />
    </section>
  );
}

export default Contact;