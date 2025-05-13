import React,{useState} from 'react';
import logo from './images/play_logo.png';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBook, FaConciergeBell, FaHandshake, FaTools, FaPhoneAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './App.css';

const Navbars = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, path: '/' },
    { id: 'about', label: 'About', icon: <FaInfoCircle />, path: '/about' },
    { id: 'directory', label: 'Directory', icon: <FaBook />, path: '/directory' },
    { id: 'hospitality', label: 'Hospitality', icon: <FaConciergeBell />, path: '/hospitality' },
    { id: 'brokerage', label: 'Brokerage', icon: <FaHandshake />, path: '/brokerage' },
    { id: 'service', label: 'Service', icon: <FaTools />, path: '/service' },
    { id: 'contact', label: 'Contact Us', icon: <FaPhoneAlt />, path: '/contact' }
  ];

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (


    <nav className="navbar bg-white rounded">
      <div className="navbar-container rounded-3 w-100">
        {/* Logo on left */}
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img className='logo' src={logo} alt="logo" />
        </NavLink>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
              onClick={closeMobileMenu}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Button on right - updated with NavLink */}
        <div className="nav-button-container">
          <NavLink to="/contact" className="nav-cta-button" onClick={closeMobileMenu}>
            Get Started
          </NavLink>
        </div>
      </div>
    </nav>


  )
}

export default Navbars