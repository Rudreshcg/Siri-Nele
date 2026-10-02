import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <section id="vision" className="section section-light vision">
      <div className="container vision-container">
        <div className="vision-text">
          <h2 className="section-title">The Vision</h2>
          <p className="lead">
            This project is more than just land—it is a curated lifestyle destination designed for those who 
            seek tranquility without sacrificing connectivity.
          </p>
          <p>
            Whether you envision a serene weekend retreat, an organic sanctuary for your family, or a high-yielding tangible asset, this community bridges the gap between luxury living and natural harmony.
          </p>
          <blockquote className="vision-quote">
            "Invest in Land. Live with Nature. A Green Investment for Generations."
          </blockquote>
        </div>
        <div className="vision-highlights">
          <h3 className="text-primary">Key Highlights</h3>
          <ul className="highlights-list">
            <li>
              <span className="highlight-icon">✓</span>
              <div>
                <h4>Immediate Usability</h4>
                <p>Ideal for custom-built eco-villas, weekend cottages, or private country estates.</p>
              </div>
            </li>
            <li>
              <span className="highlight-icon">✓</span>
              <div>
                <h4>Managed Agriculture</h4>
                <p>High-value timber and organic crop options managed on-site to generate passive long-term returns.</p>
              </div>
            </li>
            <li>
              <span className="highlight-icon">✓</span>
              <div>
                <h4>Appreciation Potential</h4>
                <p>Situated in a rapidly growing corridor, ensuring robust land value growth over time.</p>
              </div>
            </li>
            <li>
              <span className="highlight-icon">✓</span>
              <div>
                <h4>Generational Legacy</h4>
                <p>A tangible, inflation-hedged asset that your family can enjoy today and pass on tomorrow.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
