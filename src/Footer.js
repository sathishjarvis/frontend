import React from 'react';
import { FaInstagram , FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer rounded">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your project description or company mission statement.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/directory">Directory</a></li>
            <li><a href="/hospitality">Hospitality</a></li>
            <li><a href="/commision">Commision</a></li>
          </ul>
        </div>
        
        <div className="footer-section ms-5 text-start">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/playrealestate?igsh=MThxMTY1YWNhcTNlMQ==e" aria-label="instagram">
            <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn">
            <FaLinkedin/>
            </a>
            <a href="https://twitter.com/yourhandle" aria-label="Twitter">
            <FaTwitter/>
            </a>
            <a href="mailto:Playrealestate.in@gmail.com" aria-label="Email">
            <FaEnvelope/>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Play Real Estate. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;