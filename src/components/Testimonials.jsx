import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section section-dark testimonials">
      <div className="container">
        <h2 className="section-title" style={{color: 'white'}}>What Our Investors Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p className="quote">"Purchasing a plot at Siri Nele was the best investment for our family's future. The blend of nature and luxury is unmatched, and the managed farming is a fantastic bonus."</p>
            <div className="author">
              <div className="avatar">A</div>
              <div>
                <h4>Ananya Sharma</h4>
                <p>Eco-Villa Owner</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">"JS Constructions delivered beyond our expectations. The clubhouse and wellness center provide a true resort-like experience every weekend we visit."</p>
            <div className="author">
              <div className="avatar">R</div>
              <div>
                <h4>Rahul Desai</h4>
                <p>Real Estate Investor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
