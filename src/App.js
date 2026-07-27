import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact'; // <-- Import Contact Component
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

function App() {
  return (
  
    <div style={{ backgroundColor: '#0A1628', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <Navbar />
        <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> {/* <-- Route set */}
          {/* Invalid URL Par Home Par Send Karega */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>  
        </HelmetProvider>
      </div>

      <Footer />
    </div>
  );
}

export default App;