import React from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Amenities from '../components/Amenities';
import PlotCalculator from '../components/PlotCalculator';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Vision />
      <Amenities />
      <PlotCalculator />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
