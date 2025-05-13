import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbars from './Navbars'
import Footer from './Footer'


const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div>

      <Navbars/>

      <div className="contact-page mt-5">
      {/* Hero Section */}
      <motion.div 
        className="contact-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Reach out for inquiries, support, or just to say hello.</p>
      </motion.div>

      <div className="contact-container">
        {/* Contact Info */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2>Contact Information</h2>
          <p>Fill out the form or contact us through other channels listed below</p>
          
          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3>Our Location</h3>
              <p>Kuyillappayam main road, aurolec community<br/>Tamil Nadu, 605101</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className='ms-4'>
              <h3>Phone Number</h3>
              <p>+91 9845 831 028<br />Mon-Fri: 9am-6pm</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div>
              <h3>Email Address</h3>
              <p>playrealestate.in@gmail.com<br />support@yourcompany.com</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <FaClock />
            </div>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 2pm<br />Sunday: Closed</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form & Map */}
        <div className="contact-form-map w-100">
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2>Send Us a Message</h2>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="2"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
            
            {submitSuccess && (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
        <motion.div 
            className="map-container mb-5 ms-5 me-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <iframe 
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359.78026669916136!2d79.83475020197642!3d11.992375295700462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536500448d3507%3A0x61584dd6b5e6f08c!2sAurelec%20Prayogashala!5e0!3m2!1sen!2sin!4v1747047146879!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy"
              height="600" 
            ></iframe>
          </motion.div>
    </div>
    <section>
    <Footer/>
  </section>
  </div>
  )
}

export default Contact