import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on the home page and at the top, to make navbar transparent
  const isTransparent = scrolled || location.pathname !== '/' ? 'scrolled' : '';

  return (
    <header className={`navbar ${isTransparent}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Siri Nele Logo" className="logo-img" style={{ height: '50px' }} />
          <span style={{ display: 'inline-block', height: '30px', width: '2px', backgroundColor: 'var(--color-border)', opacity: 0.5 }}></span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-bg-white)', opacity: 0.8 }} className="nav-developer-text">by</span>
            <img src="/js logo round.png" alt="JS Constructions" style={{ height: '40px', background: 'white', borderRadius: '50%', padding: '2px' }} />
          </div>
        </Link>
        <nav className="nav-links">
          <Link to="/vision" className={location.pathname === '/vision' ? 'active' : ''}>Vision</Link>
          <Link to="/amenities" className={location.pathname === '/amenities' ? 'active' : ''}>Amenities</Link>
          <Link to="/details" className={location.pathname === '/details' ? 'active' : ''}>Overview</Link>
          <Link to="/contact" className="btn btn-primary nav-btn">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
