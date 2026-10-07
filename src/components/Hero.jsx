import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-backdrop" />
      <div className="hero-ambient-glow" />

      <div className="container hero-container">
        
        {/* Prestige Eyebrow */}
        <div className="hero-eyebrow fade-in-up">
          <span className="eyebrow-sparkle">✦</span>
          <span>Curated Eco-Luxury Farmlands & Country Villas</span>
          <span className="eyebrow-sparkle">✦</span>
        </div>

        {/* Hero Headings */}
        <h1 className="hero-main-title fade-in-up delay-100">
          Siri Nele
        </h1>
        
        <p className="hero-subheading fade-in-up delay-200">
          Where Nature Becomes Your Family's Eternal Legacy
        </p>

        {/* Developer Trust Badge */}
        <div className="hero-dev-trust fade-in-up delay-200">
          <span className="dev-trust-by">A Signature Development by</span>
          <div className="dev-trust-brand">
            <img src="/js logo round.png" alt="JS Constructions" className="dev-trust-logo" />
            <span className="dev-trust-name">JS Constructions</span>
          </div>
          <span className="dev-trust-tag">• 18+ Years of Trust & Quality</span>
        </div>

        {/* Call to Action Buttons */}
        <div className="hero-cta-group fade-in-up delay-300">
          <Link to="/contact" className="btn btn-gold btn-lg">
            <span>Schedule Private Site Tour</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>

          <Link to="/details" className="btn btn-glass btn-lg">
            <span>Explore Masterplan & Pricing</span>
          </Link>
          
          <a
            href="/BROCHURE.pdf"
            download="Siri_Nele_Brochure.pdf"
            className="btn btn-outline-gold btn-lg"
          >
            <span>Download Brochure</span>
          </a>
        </div>

        {/* Trust Metrics Bar */}
        <div className="hero-metrics-bar fade-in-up delay-400">
          <div className="metric-item">
            <span className="metric-number">20+</span>
            <span className="metric-unit">Acres</span>
            <span className="metric-label">Verdant Gated Sanctuary</span>
          </div>

          <div className="metric-divider" />

          <div className="metric-item">
            <span className="metric-number">6,000–20k</span>
            <span className="metric-unit">Sq.Ft</span>
            <span className="metric-label">Customizable Farmland Plots</span>
          </div>

          <div className="metric-divider" />

          <div className="metric-item">
            <span className="metric-number">100%</span>
            <span className="metric-unit">Clear</span>
            <span className="metric-label">Freehold Title & RERA Compliant</span>
          </div>

          <div className="metric-divider" />

          <div className="metric-item">
            <span className="metric-number">15+</span>
            <span className="metric-unit">Amenities</span>
            <span className="metric-label">Clubhouse, Pool & Organic Farming</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <span>Scroll to Explore</span>
          <div className="scroll-chevron">⌄</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
