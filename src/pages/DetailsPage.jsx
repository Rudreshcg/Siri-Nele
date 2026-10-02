import React from 'react';
import Details from '../components/Details';

const DetailsPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header bg-primary">
        <div className="container">
          <h1 className="page-title fade-in-up">Project Overview</h1>
          <p className="page-subtitle fade-in-up delay-100">Comprehensive details on your future investment.</p>
        </div>
      </div>
      <Details />
      <section className="section section-light">
        <div className="container text-center">
          <img src="/hero.jpg" alt="Model Farmhouse" style={{borderRadius: '12px', marginBottom: '2rem', maxHeight: '500px', width: '100%', objectFit: 'cover', boxShadow: 'var(--shadow-md)'}} />
          <h3 className="text-primary">Model Farmhouse Available</h3>
          <p>Schedule a visit to see our beautifully constructed model units and envision your new life.</p>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
