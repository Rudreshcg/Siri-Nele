import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'villas',
      title: 'Architectural Country Villa & Sunset Deck',
      desc: 'Floor-to-ceiling glass design with private infinity plunge pool',
      src: '/villa-estate.jpg'
    },
    {
      id: 2,
      category: 'amenities',
      title: 'Clubhouse & Infinity Wellness Pool',
      desc: 'Panoramic pool deck overlooking lush surrounding nature reserves',
      src: '/clubhouse.jpg'
    },
    {
      id: 3,
      category: 'nature',
      title: 'Woodland Canopy Walk & Reading Gazebo',
      desc: 'Paved jogging and meditation trails flanked by mature shade trees',
      src: '/nature-trail.jpg'
    },
    {
      id: 4,
      category: 'nature',
      title: 'Managed Organic Farming & Fruit Groves',
      desc: 'Cultivated farmland plots managed by dedicated on-site agronomists',
      src: '/farm.jpg'
    },
    {
      id: 5,
      category: 'villas',
      title: 'Panoramic 20-Acre Master Estate Landscape',
      desc: 'Verdant gated community situated in pristine unpolluted hills',
      src: '/hero.jpg'
    }
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <section className="section section-white gallery-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge">
            <span>✦ Visual Experience</span>
          </div>
          <h2 className="section-title">
            Life at Siri Nele Captured
          </h2>
          <p className="section-subtitle">
            Take a visual tour through our lush estate, signature residences, wellness clubhouse, and flourishing orchards.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Filter Pills */}
        <div className="gallery-filters">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Perspectives
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'villas' ? 'active' : ''}`}
            onClick={() => setFilter('villas')}
          >
            Eco-Villas & Homes
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'amenities' ? 'active' : ''}`}
            onClick={() => setFilter('amenities')}
          >
            Clubhouse & Leisure
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'nature' ? 'active' : ''}`}
            onClick={() => setFilter('nature')}
          >
            Nature & Orchards
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-masonry-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-tile ${index === 0 ? 'tile-featured' : ''}`}
              onClick={() => setActiveImage(item)}
            >
              <img src={item.src} alt={item.title} className="tile-img" />
              <div className="tile-overlay">
                <span className="tile-badge">{item.category}</span>
                <h3 className="tile-title">{item.title}</h3>
                <p className="tile-desc">{item.desc}</p>
                <div className="tile-zoom-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="lightbox-backdrop" onClick={() => setActiveImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setActiveImage(null)}
              >
                ✕
              </button>
              <img src={activeImage.src} alt={activeImage.title} className="lightbox-img" />
              <div className="lightbox-caption">
                <h4>{activeImage.title}</h4>
                <p>{activeImage.desc}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;
