import React from 'react';
import { Link } from 'react-router-dom';
import './Vision.css';

const Vision = () => {
  const pillars = [
    {
      icon: '🏡',
      title: 'Bespoke Eco-Villa Usability',
      desc: 'Immediate readiness for custom timber chalets, weekend villas, or organic farmsteads with utility hookups and estate maintenance.',
      tag: 'Ready to Build'
    },
    {
      icon: '🌿',
      title: 'Managed Agroforestry & Yields',
      desc: 'Professionally cultivated teak, mahogany, and organic fruit orchards yielding recurring dividends without day-to-day hassles.',
      tag: 'Zero Maintenance'
    },
    {
      icon: '📈',
      title: 'Strategic Corridor Appreciation',
      desc: 'Positioned right along the Kanakapura growth axis with easy arterial access, guaranteeing substantial land value multiplier.',
      tag: 'High ROI Growth'
    },
    {
      icon: '🏛️',
      title: 'Generational Sovereign Wealth',
      desc: '100% clear freehold title with individual demarcation. An inflation-proof tangible family heirloom for generations.',
      tag: 'Clear Freehold'
    }
  ];

  return (
    <section id="vision" className="section section-light vision-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge">
            <span>✦ Philosophy & Legacy</span>
          </div>
          <h2 className="section-title">
            More Than Just Land — An Enduring Heritage
          </h2>
          <p className="section-subtitle">
            Siri Nele bridges pristine untamed countryside with modern luxury, offering your family a restorative retreat away from urban congestion.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Narrative & Visual Feature */}
        <div className="vision-story-grid">
          
          <div className="vision-story-card">
            <span className="story-badge">The Philosophy</span>
            <h3 className="story-heading">
              Return to the Earth, Without Compromising Sophistication.
            </h3>
            <p className="story-text">
              In an age of hyper-density and concrete sprawl, true luxury is clean air, ancient canopy trees, and private acreage. Siri Nele was conceptualized by JS Constructions as an intentional ecosystem where nature and architecture coexist in harmony.
            </p>
            <p className="story-text">
              Whether you build a weekend sanctuary, plant organic heirloom crops with your children, or hold it as an inflation-hedged wealth reserve, this estate offers timeless peace of mind.
            </p>

            <blockquote className="vision-quote-box">
              <span className="quote-mark">“</span>
              <p className="quote-text">
                Invest in Land. Live with Nature. A Green Investment for Generations.
              </p>
              <cite className="quote-author">— JS Constructions Architectural Vision</cite>
            </blockquote>

            <div className="story-actions">
              <Link to="/details" className="btn btn-forest btn-sm">
                View Masterplan Specs
              </Link>
              <Link to="/contact" className="btn btn-outline-dark btn-sm">
                Book Estate Walkthrough
              </Link>
            </div>
          </div>

          <div className="vision-media-card">
            <div className="media-frame">
              <img
                src="/villa-estate.jpg"
                alt="Luxury Eco-Villa at Siri Nele"
                className="media-img"
              />
              <div className="media-overlay-badge">
                <span className="badge-glow" />
                <div>
                  <strong>Model Farmhouse Ready</strong>
                  <span>Tour our completed sample villa on-site</span>
                </div>
              </div>
            </div>

            {/* Quick Stat Strip */}
            <div className="media-stats-row">
              <div className="stat-pill">
                <strong>60%+</strong>
                <span>Open Green Canopy</span>
              </div>
              <div className="stat-pill">
                <strong>500+</strong>
                <span>Planted Shade Trees</span>
              </div>
              <div className="stat-pill">
                <strong>40 Ft</strong>
                <span>Tree-Lined Avenues</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillar Cards */}
        <div className="vision-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-top">
                <span className="pillar-icon">{pillar.icon}</span>
                <span className="pillar-tag">{pillar.tag}</span>
              </div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Vision;
