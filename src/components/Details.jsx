import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const [activeTab, setActiveTab] = useState('specs');

  const specsData = [
    { label: 'Total Project Area', value: '20+ Acres of Contiguous Green Countryside' },
    { label: 'Available Plot Sizes', value: '6,000 Sq.Ft (Quarter Acre) to 20,000 Sq.Ft (Half Acre)' },
    { label: 'Indicative Price Range', value: '₹350 to ₹1,000 Per Sq.Ft (Location & Corner Dependent)' },
    { label: 'Land Ownership & Title', value: '100% Clear Title & Freehold Demarcated Plots' },
    { label: 'Regulatory Compliance', value: 'RERA Registered & Comprehensive Legal Due Diligence' },
    { label: 'Development Type', value: 'Gated Managed Farmland with Custom Eco-Villa Permissions' },
    { label: 'Bank Financing', value: 'Approved by Leading Nationalized & Private Financial Institutions' },
    { label: 'Possession & Readiness', value: 'Immediate Registration & Development Readiness' },
  ];

  const connectivityData = [
    { destination: 'Kanakapura Main Expressway', time: 'Direct Arterial Access (5 Mins)' },
    { destination: 'NICE Ring Road Junction', time: 'Approx. 35 Minutes' },
    { destination: 'Bengaluru Metro (Silk Institute Station)', time: 'Approx. 40 Minutes' },
    { destination: 'Art of Living International Center', time: 'Approx. 30 Minutes' },
    { destination: 'Harohalli Industrial Growth Hub', time: 'Approx. 15 Minutes' },
    { destination: 'Leading Hospitals & International Schools', time: 'Within 20–25 Minutes' },
  ];

  const infraData = [
    {
      title: 'Avenue Boulevards',
      desc: '40-ft and 30-ft wide internal paved asphalt roads with pedestrian walkways and indigenous flowering avenue trees.'
    },
    {
      title: 'Power & Streetlights',
      desc: 'Reliable BESCOM power grid connection supported by self-charging solar illumination along all street perimeters.'
    },
    {
      title: 'Water Security',
      desc: 'Multiple sweet-water deep borewells, overhead balancing reservoirs, and dedicated rainwater percolation pits.'
    },
    {
      title: '24/7 Security Protocols',
      desc: 'Grand entrance archway with biometric guard cabin, perimeter security chain-link fencing, and CCTV.'
    },
  ];

  return (
    <section id="details" className="section section-light details-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge">
            <span>✦ Technical Blueprint</span>
          </div>
          <h2 className="section-title">
            Project Masterplan & Specifications
          </h2>
          <p className="section-subtitle">
            Engineered with complete legal clarity, robust civil infrastructure, and strategic corridor connectivity.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Tab Controls */}
        <div className="details-tab-nav">
          <button
            type="button"
            className={`tab-pill ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            📋 Master Specifications
          </button>
          <button
            type="button"
            className={`tab-pill ${activeTab === 'connectivity' ? 'active' : ''}`}
            onClick={() => setActiveTab('connectivity')}
          >
            📍 Strategic Location & Connectivity
          </button>
          <button
            type="button"
            className={`tab-pill ${activeTab === 'infra' ? 'active' : ''}`}
            onClick={() => setActiveTab('infra')}
          >
            🏗️ Civil & Green Infrastructure
          </button>
        </div>

        {/* Tab Panels */}
        <div className="details-panel-container">
          
          {/* TAB 1: Specs */}
          {activeTab === 'specs' && (
            <div className="specs-card fade-in-up">
              <div className="specs-table-wrapper">
                <table className="specs-luxury-table">
                  <thead>
                    <tr>
                      <th>Project Parameter</th>
                      <th>Certified Details & Standards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specsData.map((row, idx) => (
                      <tr key={idx}>
                        <td className="spec-label">{row.label}</td>
                        <td className="spec-val">
                          <span className="check-mark">✓</span>
                          <span>{row.value}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="specs-action-bar">
                <div className="specs-action-text">
                  <strong>Need legal title reports or survey maps?</strong>
                  <span>Our legal advisory team provides complete title documentation files upon request.</span>
                </div>
                <Link to="/contact" className="btn btn-gold btn-sm">
                  Request Documentation File
                </Link>
              </div>
            </div>
          )}

          {/* TAB 2: Connectivity */}
          {activeTab === 'connectivity' && (
            <div className="connectivity-card fade-in-up">
              <div className="connectivity-intro">
                <h3>Seamless Access to Bengaluru Metropolis</h3>
                <p>Located in the serene green belt of South Bengaluru, Siri Nele balances total tranquility with effortless weekend accessibility.</p>
              </div>

              <div className="connectivity-grid">
                {connectivityData.map((item, idx) => (
                  <div key={idx} className="conn-item">
                    <div className="conn-icon">🚗</div>
                    <div className="conn-details">
                      <span className="conn-destination">{item.destination}</span>
                      <span className="conn-time">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="connectivity-map-callout">
                <div className="callout-content">
                  <h4>Want chauffeured directions from your current location?</h4>
                  <p>Our sales team can dispatch coordinates and arrange complimentary shuttle pickup for prospective investors.</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-forest btn-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: Infrastructure */}
          {activeTab === 'infra' && (
            <div className="infra-detail-card fade-in-up">
              <div className="infra-items-grid">
                {infraData.map((item, idx) => (
                  <div key={idx} className="infra-feature-box">
                    <span className="infra-box-num">0{idx + 1}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Details;
