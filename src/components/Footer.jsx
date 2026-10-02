import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo" style={{ marginBottom: '1rem' }}>
            <img src="/logo.png" alt="Siri Nele Logo" className="logo-img" style={{ height: '60px' }} />
          </div>
          <p className="footer-tagline">A Green Investment for Generations.</p>
          <div style={{ marginTop: '2rem' }}>
            <p style={{ color: '#a0a0a0', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Developed By</p>
            <img src="/js logo round.png" alt="JS Constructions" style={{ height: '50px' }} />
          </div>
        </div>
        
        <div className="footer-contact">
          <h4 className="footer-title">Contact Details</h4>
          <ul className="contact-list">
            <li>
              <strong>Phone:</strong> <a href="tel:+91XXXXXXXXXX">XXXXX-XXXXX</a>
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:******@gmail.com">******@gmail.com</a>
            </li>
            <li>
              <strong>Website:</strong> <a href="https://www.********.com" target="_blank" rel="noopener noreferrer">www.********.com</a>
            </li>
            <li>
              <strong>Site Office:</strong> XYZ
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JS Constructions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
