import React from 'react'
import Navbars from './Navbars'
import Footer from './Footer'
import { FaTools, FaCogs, FaChartLine, FaUsers, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Service = () => {
    const services = [
        {
          id: 1,
          title: "Custom Solutions",
          description: "Tailored services designed specifically for your business needs and goals.",
          icon: <FaTools />,
          color: "#4e73df"
        },
        {
          id: 2,
          title: "System Integration",
          description: "Seamless integration of new systems with your existing infrastructure.",
          icon: <FaCogs />,
          color: "#1cc88a"
        },
        {
          id: 3,
          title: "Performance Optimization",
          description: "Enhance your systems for maximum efficiency and speed.",
          icon: <FaChartLine />,
          color: "#f6c23e"
        },
        {
          id: 4,
          title: "Consulting Services",
          description: "Expert advice to help you make informed business decisions.",
          icon: <FaUsers />,
          color: "#e74a3b"
        },
        {
          id: 5,
          title: "Security Solutions",
          description: "Comprehensive protection for your digital assets and data.",
          icon: <FaShieldAlt />,
          color: "#36b9cc"
        },
        {
          id: 6,
          title: "Innovation Labs",
          description: "Cutting-edge research and development for future-ready solutions.",
          icon: <FaLightbulb />,
          color: "#858796"
        }
      ];
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      };
    
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }
      };
  return (
    <div>
        <Navbars/>

        <div className="service-page">
      <motion.div 
        className="service-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Our Premium Services</h1>
        <p>Discover how our expert solutions can transform your business</p>
      </motion.div>
      
      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div 
            key={service.id}
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
            }}
            style={{ '--card-color': service.color }}
          >
            <div className="card-icon" style={{ backgroundColor: `${service.color}20` }}>
              <span style={{ color: service.color }}>{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="card-underline" style={{ backgroundColor: service.color }}></div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>Ready to Transform Your Business?</h2>
        <p>Get in touch with our experts to discuss how we can help</p>
        <button className="cta-button">Contact Us</button>
      </motion.div>
    </div>

        <section>
            <Footer/>
        </section>
    </div>
  )
}

export default Service