import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.32s ease',
        backgroundColor: isScrolled ? '#0A1628' : 'rgba(10, 22, 40, 0.95)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
        padding: isScrolled ? '12px 0' : '18px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo Link to Home */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              backgroundColor: '#F57C20',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.3rem',
              color: '#FFFFFF',
            }}
          >
            <i className="fas fa-truck"></i>
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.35rem', color: '#FFFFFF' }}>
              DLB MANAGEMENT
            </div>
            <span style={{ fontSize: '0.68rem', color: '#FFB347', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              LLC &mdash; Dispatch Services
            </span>
          </div>
        </Link>

        {/* Clean Routes Links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '30px', listStyle: 'none' }} className="desktop-links">
          <li><Link to="/" style={navLinkStyle}>Home</Link></li>
          <li><Link to="/about" style={navLinkStyle}>About</Link></li>
          <li><Link to="/services" style={navLinkStyle}>Services</Link></li>
          <li><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
        </ul>

        {/* Phone / CTA Link (agar tel: link banana ho toh exact aisa karein) */}
        <div className="desktop-cta">
          <a
            href="tel:03055555555"
            style={{
              padding: '10px 22px',
              borderRadius: '50px',
              backgroundColor: '#F57C20',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.88rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fas fa-phone-alt"></i> Get Started
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: '#FFF', fontSize: '1.5rem', cursor: 'pointer' }}
          className="hamburger-btn"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Drawer Links */}
      {isMobileOpen && (
        <div style={{ backgroundColor: '#0A1628', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Link to="/" onClick={() => setIsMobileOpen(false)} style={mobileLinkStyle}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileOpen(false)} style={mobileLinkStyle}>About</Link>
          <Link to="/services" onClick={() => setIsMobileOpen(false)} style={mobileLinkStyle}>Services</Link>
          <Link to="/contact" onClick={() => setIsMobileOpen(false)} style={mobileLinkStyle}>Contact</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-links, .desktop-cta { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

const navLinkStyle = {
  color: 'rgba(255, 255, 255, 0.85)',
  fontWeight: 600,
  fontSize: '0.92rem',
  textDecoration: 'none',
};

const mobileLinkStyle = {
  color: '#FFFFFF',
  fontWeight: 600,
  fontSize: '1rem',
  textDecoration: 'none',
};

export default Navbar;