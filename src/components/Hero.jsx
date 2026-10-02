import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title fade-in-up">Siri Nele</h1>
        <h2 className="hero-subtitle fade-in-up delay-100">Farm Lands, Villa's and Plots</h2>
        <div className="hero-developer fade-in-up delay-200" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '2rem' }}>
          <span>by</span>
          <img src="/js logo round.png" alt="JS Constructions" style={{ height: '40px', background: 'white', borderRadius: '50%', padding: '2px' }} />
          <span>JS Constructions</span>
        </div>
        <p className="hero-tagline fade-in-up delay-300">Where Nature Becomes Your Address.</p>
        <div className="hero-actions fade-in-up delay-300">
          <Link to="/vision" className="btn btn-primary">Discover More</Link>
          <Link to="/contact" className="btn btn-accent">Book a Visit</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
