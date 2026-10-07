import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Investing in Siri Nele has been the single best generational decision for my family. Having our private organic orchard managed professionally by JS Constructions gives us delicious harvest dividends while providing an idyllic weekend sanctuary away from Bengaluru traffic.",
      name: "Dr. Ananya Sharma",
      role: "Senior Consultant Surgeon & Eco-Villa Owner",
      plot: "10,000 Sq.Ft Orchard Plot • Plot #14",
      initials: "AS"
    },
    {
      id: 2,
      quote: "JS Constructions delivered precisely what was promised in their masterplan. The wide tree-lined roads, underground electricity cabling, and stunning clubhouse make weekend escapes feel like checking into a 5-star forest resort. Highly recommended for long-term investors.",
      name: "Rahul Desai",
      role: "Vice President, Global Technology Firm",
      plot: "15,000 Sq.Ft Country Estate • Plot #08",
      initials: "RD"
    },
    {
      id: 3,
      quote: "Clear titles and transparent documentation were my primary criteria when searching for managed farmland around Kanakapura. The legal diligence, individual demarcation, and dedicated agronomist team at Siri Nele made the entire purchase seamless.",
      name: "Suresh & Meera Venkatesh",
      role: "Serial Real Estate Investors & Architects",
      plot: "20,000 Sq.Ft Sovereign Homestead • Plot #22",
      initials: "SV"
    }
  ];

  return (
    <section className="section section-dark testimonials-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge">
            <span>✦ Investor Testimonials</span>
          </div>
          <h2 className="section-title">
            Trusted by Discerning Families & Investors
          </h2>
          <p className="section-subtitle">
            Hear from plot owners who chose Siri Nele for its pristine natural landscape, resort-grade amenities, and legal transparency.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-luxury-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-luxury-card">
              
              <div className="card-top-row">
                <div className="stars-row">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="gold-star">{star}</span>
                  ))}
                </div>
                <span className="verified-badge">✓ Verified Owner</span>
              </div>

              <blockquote className="test-quote-text">
                “{item.quote}”
              </blockquote>

              <div className="card-plot-tag">
                <span>{item.plot}</span>
              </div>

              <div className="test-author-box">
                <div className="test-avatar">
                  {item.initials}
                </div>
                <div className="test-author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-role">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
