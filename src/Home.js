import React from 'react';
import Navbars from './Navbars';
import { FaBuilding, FaConciergeBell, FaHandshake, FaTools } from 'react-icons/fa';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {

  const buttons = [
    {
      id: 1,
      title: "Directory",
      description: "Explore our comprehensive directory of services and contacts",
      icon: <FaBuilding className="button-icon" />,
      color: "#4e73df",
      link: "/Display"
    },
    {
      id: 2,
      title: "Hospitality",
      description: "Discover our exceptional hospitality services and amenities",
      icon: <FaConciergeBell className="button-icon" />,
      color: "#1cc88a",
      link: "/hospitality"
    },
    {
      id: 3,
      title: "Brokerage",
      description: "Professional brokerage services for your business needs",
      icon: <FaHandshake className="button-icon" />,
      color: "#f6c23e",
      link: "/brokerage"
    },
    {
      id: 4,
      title: "Service",
      description: "Premium service solutions tailored to your requirements",
      icon: <FaTools className="button-icon" />,
      color: "#e74a3b",
      link: "/service"
    }
  ];

  return (
    <>
      <div className='bg'>
        <div className="container">
          <Navbars />
        </div>
        <div className="home-container">
          <div className="home-header">
            <h1>Welcome to Our Services</h1>
            <p>Choose from our premium service categories to get started</p>
          </div>

          <div className="button-grid">
            {buttons.map((button) => (
              <Link
                key={button.id}
                to={button.link}
                className="service-button"
                style={{ '--button-color': button.color }}
              >
                <div className="button-content">
                  <div className="icon-wrapper">
                    {button.icon}
                  </div>
                  <h3>{button.title}</h3>
                  <p>{button.description}</p>
                </div>
                <div className="button-overlay"></div>
              </Link>
            ))}
          </div>
        </div>
        <section className='container mt-5'>
          <Footer />
        </section>
      </div>
    </>
  );
};


export default Home;