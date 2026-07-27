import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#070F1B',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '70px',
        paddingBottom: '30px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  backgroundColor: '#F57C20',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: '#FFFFFF',
                }}
              >
                <i className="fas fa-truck"></i>
              </div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.25rem', color: '#FFFFFF' }}>
                  DLB MANAGEMENT
                </div>
                <span style={{ fontSize: '0.65rem', color: '#FFB347', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  LLC &mdash; Dispatch Services
                </span>
              </div>
            </Link>

            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Premier dispatching, MC lease offerings, and factoring support designed to keep truck drivers profitable and focused on the road.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {['facebook-f','instagram', 'whatsapp'].map((icon, idx) => (
                <a
                  key={idx}
                  href="/social"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: '0.3s ease',
                  }}
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#F57C20', marginBottom: '20px', textTransform: 'uppercase' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" style={footerLinkStyle}><i className="fas fa-chevron-right" style={arrowStyle}></i> Home</Link></li>
              <li><Link to="/about" style={footerLinkStyle}><i className="fas fa-chevron-right" style={arrowStyle}></i> About Us</Link></li>
              <li><Link to="/services" style={footerLinkStyle}><i className="fas fa-chevron-right" style={arrowStyle}></i> Our Services</Link></li>
              <li><Link to="/contact" style={footerLinkStyle}><i className="fas fa-chevron-right" style={arrowStyle}></i> Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#F57C20', marginBottom: '20px', textTransform: 'uppercase' }}>
              Services Offered
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/services" style={footerLinkStyle}><i className="fas fa-chevron-right" style={arrowStyle}></i> Truck Dispatching</Link></li>
              <li><Link to="/services" style={footerLinkStyle}><i className="fas fa-chevron-right" style={arrowStyle}></i> MC Lease Offerings</Link></li>
              <li><Link to="/services" style={footerLinkStyle}><i className="fas fa-chevron-right" style={arrowStyle}></i> Factoring Signups</Link></li>
              <li><Link to="/services" style={footerLinkStyle}><i className="fas fa-chevron-right" style={arrowStyle}></i> Rate Negotiation</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#F57C20', marginBottom: '20px', textTransform: 'uppercase' }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className="fas fa-phone-alt" style={{ color: '#F57C20' }}></i>
                <a href="tel:03055555555" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600 }}>708-773-7125</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className="fas fa-envelope" style={{ color: '#F57C20' }}></i>
                <span>James.dispatch024@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className="fas fa-clock" style={{ color: '#F57C20' }}></i>
                <span>24/7 Dispatch & Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '25px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '15px',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} <strong style={{ color: '#FFFFFF' }}>DLB Management LLC</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/privacy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

const footerLinkStyle = {
  color: 'rgba(255, 255, 255, 0.75)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
};

const arrowStyle = {
  fontSize: '0.75rem',
  color: '#F57C20',
};

export default Footer;