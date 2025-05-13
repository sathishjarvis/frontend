import React, { useState } from 'react';
import { FaHandshake, FaHome, FaShareSquare } from 'react-icons/fa';
import Navbars from './Navbars'
import Footer from './Footer'

const Brokerage = () => {

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyDescription: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your referral! We will contact you soon.');
    setShowForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      propertyDescription: '',
      message: ''
    });
  };

  const brokerageOptions = [
    {
      id: 1,
      title: "Buy or Sell",
      description: "Professional assistance for buying or selling properties",
      icon: <FaHandshake className="option-icon" />,
      color: "#4e73df"
    },
    {
      id: 2,
      title: "Rent or Lease",
      description: "Find the perfect rental or leasing solutions",
      icon: <FaHome className="option-icon" />,
      color: "#1cc88a"
    },
    {
      id: 3,
      title: "Refer a Property",
      description: "Submit property details for our brokerage services",
      icon: <FaShareSquare className="option-icon" />,
      color: "#f6c23e",
      action: () => setShowForm(true)
    }
  ];

  return (
    <div>
      <Navbars />

      <div className="brokerage-container">
      <div className="brokerage-header">
        <h1>Professional Brokerage Services</h1>
        <p>Choose from our comprehensive real estate solutions</p>
      </div>
      
      <div className="options-grid">
        {brokerageOptions.map((option) => (
          <div 
            key={option.id} 
            className={`option-card ${option.id === 3 ? 'referral-card' : ''}`}
            style={{ '--card-color': option.color }}
            onClick={option.action || (() => {})}
          >
            <div className="card-content">
              <div className="icon-wrapper">
                {option.icon}
              </div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              {option.id === 3 && (
                <div className="pulse-dot"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="referral-form-container">
            <button 
              className="close-form " 
              onClick={() => setShowForm(false)}
              aria-label="Close form"
              
            >
              <div className='symbol'>&times;</div>
            </button>
            
            <h3>Refer a Property</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-0">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group mt-0">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="propertyDescription">Property Description</label>
                <textarea
                  id="propertyDescription"
                  name="propertyDescription"
                  value={formData.propertyDescription}
                  onChange={handleInputChange}
                  rows="2"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="2"
                />
              </div>
              
              <button type="submit" className="submit-btn">
                Submit Referral
              </button>
            </form>
          </div>
        </div>
      )}
    </div>

      <section>
        <Footer />
      </section></div>
  )
}

export default Brokerage