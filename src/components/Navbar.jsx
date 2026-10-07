import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/vision', label: 'The Vision' },
    { to: '/amenities', label: 'Amenities' },
    { to: '/details', label: 'Masterplan & Specs' },
    { to: '/contact', label: 'Contact' },
  ];

  const isHome = location.pathname === '/';
  const navClass = scrolled || !isHome ? 'navbar-scrolled' : 'navbar-transparent';

  return (
    <>
      {/* ── Top Announcement / Contact Ribbon ── */}
      <div className={`top-ribbon ${scrolled ? 'ribbon-hidden' : ''}`}>
        <div className="container top-ribbon-content">
          <div className="ribbon-left">
            <span className="ribbon-pulse" />
            <span className="ribbon-text">
              <strong>Phase-1 Booking Now Open:</strong> 6,000 to 20,000 Sq.Ft Managed Farmlands & Eco-Villas
            </span>
          </div>
          <div className="ribbon-right">
            <a href="tel:+919845012345" className="ribbon-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91 98450 12345</span>
            </a>
            <span className="ribbon-sep">•</span>
            <span className="ribbon-location">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Off Kanakapura Road, Karnataka</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Header ── */}
      <header className={`navbar ${navClass}`}>
        <div className="container nav-inner">
          
          {/* Brand Identity / Co-Branding */}
          <Link to="/" className="brand-logo" aria-label="Siri Nele Home">
            <div className="brand-crest-box">
              <img src="/logo.png" alt="Siri Nele Emblem" className="brand-crest" />
            </div>
            <div className="brand-text-block">
              <span className="brand-name">Siri Nele</span>
              <span className="brand-subline">Managed Farmlands & Villas</span>
            </div>

            <div className="brand-dev-badge">
              <span className="brand-dev-by">by</span>
              <div className="brand-dev-avatar">
                <img src="/js logo round.png" alt="JS Constructions" className="dev-logo" />
              </div>
              <span className="brand-dev-name">JS Constructions</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  {label}
                  <span className="nav-indicator" />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="nav-actions">
            <a
              href="/BROCHURE.pdf"
              download="Siri_Nele_Brochure.pdf"
              className="btn-brochure"
              title="Download Project Brochure"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>Brochure</span>
            </a>

            <Link to="/contact" className="btn btn-gold btn-sm nav-cta-btn">
              <span>Book Visit</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={`menu-toggle ${mobileOpen ? 'is-active' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Navigation Drawer ── */}
      <div className={`mobile-drawer ${mobileOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-brand">
            <img src="/logo.png" alt="Siri Nele" className="drawer-logo" />
            <div>
              <span className="drawer-title">Siri Nele</span>
              <span className="drawer-subtitle">JS Constructions</span>
            </div>
          </div>
          <button
            type="button"
            className="drawer-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`mobile-link ${isActive ? 'active' : ''}`}
              >
                <span>{label}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            );
          })}
        </nav>

        <div className="drawer-footer">
          <div className="drawer-actions">
            <Link to="/contact" className="btn btn-gold w-100">
              Schedule Site Visit
            </Link>
            <a
              href="/BROCHURE.pdf"
              download="Siri_Nele_Brochure.pdf"
              className="btn btn-outline-gold w-100"
            >
              Download PDF Brochure
            </a>
          </div>

          <div className="drawer-contact-info">
            <div className="drawer-info-row">
              <span className="info-icon">📞</span>
              <a href="tel:+919845012345">+91 98450 12345</a>
            </div>
            <div className="drawer-info-row">
              <span className="info-icon">✉️</span>
              <a href="mailto:info@sirinele.com">info@sirinele.com</a>
            </div>
            <div className="drawer-info-row">
              <span className="info-icon">📍</span>
              <span>Off Kanakapura Main Highway, Harohalli, Karnataka</span>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop Dimmer */}
      {mobileOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
