import React from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Vision />
      <Gallery />
      <Amenities />
      <Testimonials />
    </div>
  );
};

export default Home;
