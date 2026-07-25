import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#0A1628',
        background: 'radial-gradient(circle at 70% 30%, #1A3260 0%, #0A1628 70%)',
        paddingTop: '140px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Overlay Line/Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(rgba(245, 124, 32, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      ></div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Content Column */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(245, 124, 32, 0.12)',
                border: '1px solid rgba(245, 124, 32, 0.3)',
                padding: '6px 16px',
                borderRadius: '50px',
                color: '#FFB347',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              <i className="fas fa-shield-alt"></i> Reliable Dispatch Partner
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                marginBottom: '20px',
              }}
            >
              MAXIMIZE YOUR <br />
              <span style={{ color: '#F57C20' }}>TRUCKING PROFITS</span> <br />
              WITH EXPERT DISPATCH
            </h1>

            {/* Subtitle / Paragraph */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(255, 255, 255, 0.82)',
                lineHeight: 1.65,
                maxWidth: '540px',
                marginBottom: '36px',
              }}
            >
              We handle end-to-end dispatching, rate negotiation, MC lease offerings, and factoring signups—so you keep your wheels rolling and earnings growing.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '48px',
              }}
            >
              <a
                href="tel:03055555555"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  backgroundColor: '#F57C20',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(245, 124, 32, 0.4)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FF8C00';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#F57C20';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Start Dispatching <i className="fas fa-arrow-right"></i>
              </a>

              <a
                href="#services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  border: '2px solid rgba(255, 255, 255, 0.25)',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#FFFFFF';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Our Services
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                paddingTop: '28px',
                maxWidth: '520px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: '#FFB347',
                  }}
                >
                  24/7
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Dedicated Support
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: '#FFB347',
                  }}
                >
                  Top Rate
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Negotiations
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: '#FFB347',
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Transparency
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Card Column */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                backgroundColor: 'rgba(15, 32, 64, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '16px',
                padding: '36px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <i className="fas fa-truck-moving" style={{ color: '#F57C20' }}></i>
                What We Offer
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  {
                    title: 'Full Truck Dispatch Services',
                    desc: 'Dry Van, Reefer, Flatbed load search & negotiation.',
                  },
                  {
                    title: 'MC Authority Lease Offerings',
                    desc: 'Instant access to active MC authority solutions.',
                  },
                  {
                    title: 'Factoring Signups',
                    desc: 'Quick payout setup so you get paid on time.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      padding: '14px',
                      borderRadius: '10px',
                      borderLeft: '4px solid #F57C20',
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          color: '#FFFFFF',
                          fontSize: '0.98rem',
                          fontWeight: 700,
                          marginBottom: '4px',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.85rem' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;