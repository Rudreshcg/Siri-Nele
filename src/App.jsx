import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import VisionPage from './pages/VisionPage';
import AmenitiesPage from './pages/AmenitiesPage';
import DetailsPage from './pages/DetailsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
