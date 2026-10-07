import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PlotCalculator.css';

const PlotCalculator = () => {
  const [plotSize, setPlotSize] = useState(10000);
  const [planType, setPlanType] = useState('villa');

  const plotOptions = [
    { size: 6000, label: '6,000 Sq.Ft', category: 'Quarter Acre' },
    { size: 10000, label: '10,000 Sq.Ft', category: 'Estate Plot' },
    { size: 15000, label: '15,000 Sq.Ft', category: 'Grand Estate' },
    { size: 20000, label: '20,000 Sq.Ft', category: 'Half Acre Homestead' },
  ];

  const ratePerSqFt = 450; // Starting indicative rate
  const totalCost = (plotSize * ratePerSqFt).toLocaleString('en-IN');
  const emiEstimate = Math.round((plotSize * ratePerSqFt * 0.7 * 0.085) / 12).toLocaleString('en-IN');
  const timberTrees = Math.floor(plotSize / 250);

  return (
    <section className="section section-light plot-calc-section">
      <div className="container">
        
        <div className="section-header">
          <div className="eyebrow-badge">
            <span>✦ Interactive Tool</span>
          </div>
          <h2 className="section-title">
            Plot Size & Investment Estimator
          </h2>
          <p className="section-subtitle">
            Configure your ideal farmland plot dimensions and explore estimated returns, managed trees, and club privileges.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="calc-card">
          
          {/* Controls Column */}
          <div className="calc-controls">
            
            <div className="control-group">
              <label className="control-label">
                <span>Select Desired Plot Dimension</span>
                <span className="selected-size-badge">{plotSize.toLocaleString()} Sq.Ft</span>
              </label>

              <div className="size-selector-grid">
                {plotOptions.map((opt) => (
                  <button
                    key={opt.size}
                    type="button"
                    className={`size-btn ${plotSize === opt.size ? 'active' : ''}`}
                    onClick={() => setPlotSize(opt.size)}
                  >
                    <span className="size-btn-label">{opt.label}</span>
                    <span className="size-btn-cat">{opt.category}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label">Preferred Development Model</label>
              <div className="plan-toggle-row">
                <button
                  type="button"
                  className={`plan-btn ${planType === 'villa' ? 'active' : ''}`}
                  onClick={() => setPlanType('villa')}
                >
                  🏡 Eco-Villa & Orchard
                </button>
                <button
                  type="button"
                  className={`plan-btn ${planType === 'agro' ? 'active' : ''}`}
                  onClick={() => setPlanType('agro')}
                >
                  🌿 Managed Agroforestry
                </button>
              </div>
            </div>

            <div className="calc-perks-box">
              <h4 className="perks-title">Included With Every Plot:</h4>
              <ul className="perks-list">
                <li>✓ 100% Clear Freehold Title with Individual Boundary Demarcation</li>
                <li>✓ Lifetime Clubhouse, Pool & Gymnasium Membership for Family</li>
                <li>✓ Dedicated Agronomist Maintenance of Fruit Trees & Living Fencing</li>
                <li>✓ 40-Ft Wide Internal Paved Roads & Solar Street Lighting</li>
              </ul>
            </div>

          </div>

          {/* Results Display Column */}
          <div className="calc-results">
            <div className="results-header">
              <span className="results-eyebrow">Indicative Valuation</span>
              <div className="price-display">
                <span className="currency">₹</span>
                <span className="price-val">{totalCost}</span>
                <span className="price-suffix">*</span>
              </div>
              <span className="rate-subtext">Starting from ₹350 – ₹1,000 / sq.ft based on plot location</span>
            </div>

            <div className="results-metrics-grid">
              <div className="res-metric">
                <span className="res-metric-label">Estimated EMI (70% Loan)</span>
                <span className="res-metric-val">₹{emiEstimate} / mo</span>
              </div>

              <div className="res-metric">
                <span className="res-metric-label">Managed Teak/Fruit Trees</span>
                <span className="res-metric-val">~{timberTrees} Plantations</span>
              </div>

              <div className="res-metric">
                <span className="res-metric-label">Ownership Type</span>
                <span className="res-metric-val">100% Freehold Title</span>
              </div>

              <div className="res-metric">
                <span className="res-metric-label">Water & Power Hookup</span>
                <span className="res-metric-val">Immediate Ready</span>
              </div>
            </div>

            <div className="results-cta">
              <Link to="/contact" className="btn btn-gold w-100">
                Enquire for {plotSize.toLocaleString()} Sq.Ft Plot
              </Link>
              <p className="disclaimer-note">
                *Prices exclude statutory registration & government stamp duties. Subject to plot availability.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PlotCalculator;
