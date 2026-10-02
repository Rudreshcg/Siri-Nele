import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="section section-light gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="text-center lead" style={{marginBottom: '3rem'}}>Take a glimpse into the serene lifestyle awaiting you.</p>
        <div className="gallery-grid">
          <img src="/hero.jpg" alt="Estate View" className="gallery-img" />
          <img src="/clubhouse.jpg" alt="Clubhouse" className="gallery-img" />
          <img src="/farm.jpg" alt="Organic Farm" className="gallery-img" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
