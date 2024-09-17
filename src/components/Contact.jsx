import React, { useEffect, useState } from 'react';
import '../styles/components/Contact.css';
import scrollRevealConfigContact from '../utils/scrollRevealConfigContact';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';


function Contact() {

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })


  useEffect(() => {
    scrollRevealConfigContact();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formData, process.env.REACT_APP_USER_ID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.success("I Got Your Message");
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      }, (error) => {
        console.error('Failed to send email:', error);
        toast.error("Failed to send message.");
      });

  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact <span>Me!</span></h2>
      <form action="#conatct" className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input name="name" type="text" placeholder='Your Name' onChange={handleChange} value={formData.name} required />
          <input name="email" type="email" placeholder='Your Email' onChange={handleChange} value={formData.email} required />
          <input name="phone" type="text" placeholder='Your Number' onChange={handleChange} value={formData.phone} required />
          <input name="subject" type="text" placeholder='Email Subject ' onChange={handleChange} value={formData.subject} required />
        </div>
        <textarea cols='30' rows='10' name="message" placeholder='Your Message' onChange={handleChange} value={formData.message} required />
        <input type="submit" className='btn' value='Send Message' />
      </form>
      <ToastContainer />
    </section>
  );
}

export default Contact;