import React from 'react';
import { Link } from 'react-router-dom';
import Amenities from '../components/Amenities';
import PlotCalculator from '../components/PlotCalculator';

const AmenitiesPage = () => {
  return (
    <div className="page-wrapper">
      
      {/* Page Header Banner */}
      <section
        className="page-hero-banner"
        style={{ backgroundImage: "url('/clubhouse.jpg')" }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="eyebrow-badge fade-in-up">
            <span>✦ Resort-Grade Living</span>
          </div>
          <h1 className="page-title fade-in-up delay-100">World-Class Amenities</h1>
          <p className="page-subtitle fade-in-up delay-200">
            Unrivaled hospitality infrastructure intertwined with 20 acres of lush organic serenity.
          </p>
        </div>
      </section>

      {/* Main Amenities Component */}
      <Amenities />

      {/* Interactive Plot Estimator */}
      <PlotCalculator />

      {/* Call to Action Banner */}
      <section className="section section-dark text-center">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>
            Experience the Siri Nele Clubhouse in Person
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem', color: 'rgba(255,255,255,0.78)' }}>
            Join our complimentary weekend property showcase with refreshments and guided tours.
          </p>
          <Link to="/contact" className="btn btn-gold btn-lg">
            Schedule Weekend Visit
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AmenitiesPage;
