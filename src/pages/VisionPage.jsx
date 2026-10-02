import React from 'react';
import Vision from '../components/Vision';

const VisionPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header bg-primary">
        <div className="container">
          <h1 className="page-title fade-in-up">Our Vision</h1>
          <p className="page-subtitle fade-in-up delay-100">Where Nature Becomes Your Address</p>
        </div>
      </div>
      <Vision />
      <section className="section section-dark text-center">
        <div className="container">
          <h2>Ready to secure your piece of nature?</h2>
          <br/>
          <a href="/contact" className="btn btn-accent">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
