import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Amenities.css';

const Amenities = () => {
  const [activeTab, setActiveTab] = useState('all');

  const amenitiesList = [
    {
      id: 1,
      category: 'wellness',
      title: 'Clubhouse & Infinity Wellness Pool',
      subtitle: 'Exclusive Member Lounge & Spa',
      desc: 'Designed with grand high-ceiling architecture, offering a panoramic infinity swimming pool, steam sauna, yoga deck, and indoor games for rejuvenating weekends.',
      image: '/clubhouse.jpg',
      tag: 'Wellness & Club',
      highlights: ['Infinity Pool with Nature Views', 'Yoga & Meditation Pavilion', 'Private Resident Lounge']
    },
    {
      id: 2,
      category: 'nature',
      title: 'Organic Orchards & Agroforestry',
      subtitle: 'Managed Teak & Fruit Plantations',
      desc: 'Experience pure farm-to-table living with on-site agronomists managing high-value teakwood, mango groves, and chemical-free organic vegetable patches.',
      image: '/farm.jpg',
      tag: 'Nature & Farming',
      highlights: ['Managed Teak & Sandalwood', 'Exotic Fruit Orchards', 'Seed-to-Table Fresh Produce']
    },
    {
      id: 3,
      category: 'wellness',
      title: 'Bespoke Eco-Villa Residences',
      subtitle: 'Architectural Country Homes',
      desc: 'Generous plot boundaries engineered to host custom timber villas, expansive verandas, plunge pools, and open-hearth outdoor barbecue fire pits.',
      image: '/villa-estate.jpg',
      tag: 'Bespoke Living',
      highlights: ['Private Plunge Pool Options', 'Custom Wood Architecture', 'Expansive Country Decks']
    },
    {
      id: 4,
      category: 'nature',
      title: 'Woodland Canopy & Stargazing Gazebo',
      subtitle: 'Tranquil Landscape Trails',
      desc: 'Meandering stone-paved walkways beneath mature flowering shade trees, open-air stargazing observation decks, and rustic wooden pergolas for sunset tea.',
      image: '/nature-trail.jpg',
      tag: 'Eco Recreation',
      highlights: ['3.5 km Paved Walking Trails', 'Night Sky Observation Deck', 'Secluded Reading Gazebos']
    }
  ];

  const infrastructureList = [
    {
      icon: '🛣️',
      title: '40-Ft Wide Internal Boulevards',
      desc: 'Smooth all-weather paved roads flanked by mature flowering avenue trees and cobblestone curbs.'
    },
    {
      icon: '☀️',
      title: 'Solar-Powered Eco Lighting',
      desc: 'Eco-conscious perimeter illumination running entirely on autonomous solar battery arrays.'
    },
    {
      icon: '💧',
      title: 'Abundant Water & Rain Harvesting',
      desc: 'Sweet perennial groundwater reservoirs and dedicated percolation pits for natural aquifer recharge.'
    },
    {
      icon: '🛡️',
      title: '24/7 Gated Biometric Security',
      desc: 'Round-the-clock guards, CCTV coverage at all key junctions, and secured compound perimeter fencing.'
    },
    {
      icon: '⚡',
      title: 'Underground Power & Fiber Grid',
      desc: 'Clean aesthetics with underground cabling, high-speed optical fiber for seamless remote work.'
    },
    {
      icon: '🌱',
      title: 'Organic Soil & Waste Management',
      desc: 'Comprehensive natural composting units recycling organic waste into rich organic fertilizer.'
    }
  ];

  const filteredAmenities = activeTab === 'all'
    ? amenitiesList
    : amenitiesList.filter((item) => item.category === activeTab);

  return (
    <section id="amenities" className="section section-dark amenities-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge">
            <span>✦ Resort-Grade Infrastructure</span>
          </div>
          <h2 className="section-title">
            World-Class Lifestyle & Farm Amenities
          </h2>
          <p className="section-subtitle">
            Every square foot at Siri Nele is thoughtfully curated to provide an unmatched hospitality experience embedded in pure nature.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Category Filter Tabs */}
        <div className="amenities-tabs">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Experiences
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'wellness' ? 'active' : ''}`}
            onClick={() => setActiveTab('wellness')}
          >
            Clubhouse & Wellness
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'nature' ? 'active' : ''}`}
            onClick={() => setActiveTab('nature')}
          >
            Nature & Orchards
          </button>
        </div>

        {/* Amenities Cards Grid */}
        <div className="amenities-cards-grid">
          {filteredAmenities.map((item) => (
            <div key={item.id} className="amenity-lux-card">
              <div className="card-media-wrapper">
                <img src={item.image} alt={item.title} className="card-image" />
                <span className="card-tag">{item.tag}</span>
              </div>
              <div className="card-body">
                <span className="card-subtitle">{item.subtitle}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>

                <div className="card-highlights">
                  {item.highlights.map((point, i) => (
                    <div key={i} className="highlight-pill">
                      <span className="check-icon">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Strip */}
        <div className="infra-showcase">
          <div className="infra-header">
            <h3 className="infra-heading">Sustainable Master Infrastructure</h3>
            <p className="infra-subheading">Built with longevity and ecological responsibility at its core.</p>
          </div>

          <div className="infra-grid">
            {infrastructureList.map((infra, idx) => (
              <div key={idx} className="infra-card">
                <span className="infra-icon">{infra.icon}</span>
                <div>
                  <h4 className="infra-title">{infra.title}</h4>
                  <p className="infra-desc">{infra.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities CTA */}
        <div className="amenities-bottom-cta">
          <div className="bottom-cta-box">
            <div>
              <h3>Want to inspect our amenities in person?</h3>
              <p>We provide chauffeured weekend site visits from Bengaluru city with prior reservation.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-gold">
                Reserve Weekend Tour
              </Link>
              <a href="/BROCHURE.pdf" download="Siri_Nele_Brochure.pdf" className="btn btn-glass">
                Download Brochure
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Amenities;
