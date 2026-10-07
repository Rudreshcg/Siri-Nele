import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../components/Details';
import PlotCalculator from '../components/PlotCalculator';

const DetailsPage = () => {
  return (
    <div className="page-wrapper">
      
      {/* Page Header Banner */}
      <section
        className="page-hero-banner"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="eyebrow-badge fade-in-up">
            <span>✦ Blueprint & Due Diligence</span>
          </div>
          <h1 className="page-title fade-in-up delay-100">Masterplan & Specifications</h1>
          <p className="page-subtitle fade-in-up delay-200">
            Comprehensive legal certifications, civil engineering standards, and corridor connectivity.
          </p>
        </div>
      </section>

      {/* Main Details Component */}
      <Details />

      {/* Model Farmhouse Feature Section */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow-badge">
              <span>✦ On-Site Experience</span>
            </div>
            <h2 className="section-title">Model Farmhouse Ready for Inspection</h2>
            <p className="section-subtitle">
              Walk through our fully furnished, operational model eco-villa built on a standard 10,000 sq.ft plot.
            </p>
            <div className="gold-divider" />
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(10,31,20,0.15)',
              border: '1px solid rgba(197,160,89,0.3)',
              marginBottom: '2rem'
            }}>
              <img
                src="/villa-estate.jpg"
                alt="Operational Model Villa at Siri Nele"
                style={{ width: '100%', maxHeight: '520px', objectFit: 'cover' }}
              />
            </div>

            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2.5rem'
            }}>
              <div style={{ background: '#fbf9f5', padding: '1rem 1.8rem', borderRadius: '12px', border: '1px solid rgba(197,160,89,0.2)' }}>
                <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--color-primary)' }}>3,200 Sq.Ft</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Built-up Villa Area</span>
              </div>
              <div style={{ background: '#fbf9f5', padding: '1rem 1.8rem', borderRadius: '12px', border: '1px solid rgba(197,160,89,0.2)' }}>
                <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--color-primary)' }}>Private Pool</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Infinity Water Feature</span>
              </div>
              <div style={{ background: '#fbf9f5', padding: '1rem 1.8rem', borderRadius: '12px', border: '1px solid rgba(197,160,89,0.2)' }}>
                <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--color-primary)' }}>Turnkey Build</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>JS Constructions Team</span>
              </div>
            </div>

            <Link to="/contact" className="btn btn-gold btn-lg">
              Book Model Villa Walkthrough
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Plot Estimator */}
      <PlotCalculator />

    </div>
  );
};

export default DetailsPage;
