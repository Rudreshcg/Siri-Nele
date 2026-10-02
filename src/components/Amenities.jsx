import React from 'react';
import './Amenities.css';

const Amenities = () => {
  return (
    <section id="amenities" className="section section-dark amenities">
      <div className="container">
        <h2 className="section-title">Community Amenities</h2>
        
        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-image-wrapper">
              <img src="/clubhouse.jpg" alt="Clubhouse & Wellness Center" />
            </div>
            <div className="amenity-content">
              <h3>Clubhouse & Wellness Center</h3>
              <p>Private lounge, infinity pool, yoga deck, and indoor games.</p>
            </div>
          </div>
          
          <div className="amenity-card">
            <div className="amenity-image-wrapper">
              <img src="/farm.jpg" alt="Organic Farming Zones" />
            </div>
            <div className="amenity-content">
              <h3>Organic Farming Zones</h3>
              <p>Managed fruit orchards, vegetable patches, and seed-to-table dining experiences.</p>
            </div>
          </div>
        </div>
        
        <div className="other-amenities">
          <div className="other-amenity">
            <h4>Nature & Recreation</h4>
            <p>Dedicated walking trails, jogging paths, outdoor barbecue pits, and stargazing decks.</p>
          </div>
          <div className="other-amenity">
            <h4>Eco-Conscious Infrastructure</h4>
            <p>Solar-powered street lighting, rainwater harvesting systems, and organic waste composting units.</p>
          </div>
          <div className="other-amenity">
            <h4>24/7 Security</h4>
            <p>Gated entry points, perimeter fencing, and round-the-clock security personnel.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
