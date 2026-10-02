import React from 'react';
import Amenities from '../components/Amenities';

const AmenitiesPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header bg-primary" style={{backgroundImage: "linear-gradient(rgba(31,63,45,0.8), rgba(31,63,45,0.8)), url('/clubhouse.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container">
          <h1 className="page-title fade-in-up">World-Class Amenities</h1>
          <p className="page-subtitle fade-in-up delay-100">Experience unparalleled luxury intertwined with natural serenity.</p>
        </div>
      </div>
      <Amenities />
    </div>
  );
};

export default AmenitiesPage;
