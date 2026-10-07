import React from 'react';
import { Link } from 'react-router-dom';
import Vision from '../components/Vision';
import Testimonials from '../components/Testimonials';

const VisionPage = () => {
  return (
    <div className="page-wrapper">
      
      {/* Page Header Banner */}
      <section
        className="page-hero-banner"
        style={{ backgroundImage: "url('/villa-estate.jpg')" }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="eyebrow-badge fade-in-up">
            <span>✦ The Philosophy</span>
          </div>
          <h1 className="page-title fade-in-up delay-100">Our Vision & Legacy</h1>
          <p className="page-subtitle fade-in-up delay-200">
            A sanctuary where ancestral farmland harmony meets modern architectural distinction.
          </p>
        </div>
      </section>

      {/* Main Vision Component */}
      <Vision />

      {/* Investor Trust Testimonials */}
      <Testimonials />

      {/* Conversion Banner */}
      <section className="section section-dark text-center">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>
            Ready to Walk the Grounds of Siri Nele?
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem', color: 'rgba(255,255,255,0.78)' }}>
            Schedule a private chauffeured visit from Bangalore to inspect our demarcated plots, model farmhouse, and tree plantations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold btn-lg">
              Book Private Site Visit
            </Link>
            <a href="/BROCHURE.pdf" download="Siri_Nele_Brochure.pdf" className="btn btn-glass btn-lg">
              Download Brochure PDF
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VisionPage;
