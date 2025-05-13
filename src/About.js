import React from 'react';
import { FaUsers, FaAward, FaChartLine, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbars from './Navbars'
import Footer from './Footer'

const About = () => {

  const stats = [
    { id: 1, value: '10+', label: 'Years Experience', icon: <FaAward /> },
    { id: 2, value: '500+', label: 'Happy Clients', icon: <FaUsers /> },
    { id: 3, value: '95%', label: 'Satisfaction Rate', icon: <FaChartLine /> },
    { id: 4, value: '24/7', label: 'Support Available', icon: <FaHandshake /> }
  ];

  const teamMembers = [
    { id: 1, name: 'Alex Johnson', role: 'CEO & Founder', image: '/team1.jpg' },
    { id: 2, name: 'Sarah Williams', role: 'Hospitality Director', image: '/team2.jpg' },
    { id: 3, name: 'Michael Chen', role: 'Brokerage Manager', image: '/team3.jpg' },
    { id: 4, name: 'Emily Rodriguez', role: 'Service Coordinator', image: '/team4.jpg' }
  ];

  return (
    <div>
      <Navbars />

      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Story</h1>
            <p className="subtitle">Building excellence in hospitality and real estate since 2010</p>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <motion.div
              className="mission-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Mission</h2>
              <p>
                We are committed to delivering exceptional hospitality and brokerage services
                that exceed expectations. Our team combines industry expertise with
                personalized attention to create memorable experiences for our clients.
              </p>
            </motion.div>

            <motion.div
              className="mission-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="image-placeholder"></div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <h2 className="section-title">By The Numbers</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="team-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="team-image" style={{ backgroundImage: `url(${member.image})` }}></div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="cta-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Experience Our Services?</h2>
          <button className="cta-button">Contact Us Today</button>
        </motion.section>
      </div>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default About