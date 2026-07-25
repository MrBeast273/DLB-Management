import React from 'react';

const About = () => {
  return (
    <div style={{ backgroundColor: '#0A1628', color: '#FFFFFF', minHeight: '100vh' }}>
      
      {/* 1. Page Header Banner */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '80px',
          background: 'radial-gradient(circle at 50% 20%, #1A3260 0%, #0A1628 80%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(245, 124, 32, 0.12)',
              border: '1px solid rgba(245, 124, 32, 0.3)',
              padding: '6px 18px',
              borderRadius: '50px',
              color: '#FFB347',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <i className="fas fa-truck-moving"></i> About DLB Management LLC
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(2.8rem, 5vw, 4rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Empowering Truckers with <span style={{ color: '#F57C20' }}>Top Dispatch Solutions</span>
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            We are dedicated to maximizing owner-operator revenue through strategic load booking, rate negotiations, and complete back-office support.
          </p>
        </div>
      </section>

      {/* 2. Main About Details Section */}
      <section style={{ padding: '90px 0', backgroundColor: '#0F2040' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '50px',
              alignItems: 'center',
            }}
          >
            {/* Left Content Card */}
            <div
              style={{
                backgroundColor: '#0A1628',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
            >
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '2.2rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  marginBottom: '18px',
                }}
              >
                WHO WE ARE
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7, marginBottom: '20px' }}>
                DLB Management LLC is a leading logistics and dispatch service provider based in North America. Our core mission is to remove the stress of freight management so drivers can focus strictly on the road.
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7, marginBottom: '28px' }}>
                Whether you operate Dry Vans, Reefers, or Flatbeds, our experienced dispatchers work around the clock to secure high-paying loads that align with your preferred lanes and schedule.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  '100% Rate Negotiation Transparency',
                  'No Contract Lockdown — Complete Freedom',
                  'Specialized MC Lease & Factoring Support',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', fontWeight: 700 }}>
                    <i className="fas fa-check-circle" style={{ color: '#F57C20' }}></i>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Stats & Values */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                
                <div style={{ backgroundColor: '#0A1628', padding: '28px', borderRadius: '16px', borderLeft: '4px solid #F57C20' }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2.5rem', fontWeight: 900, color: '#FFB347' }}>
                    24/7
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF', marginTop: '4px' }}>
                    Active Dispatch Support
                  </div>
                </div>

                <div style={{ backgroundColor: '#0A1628', padding: '28px', borderRadius: '16px', borderLeft: '4px solid #F57C20' }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2.5rem', fontWeight: 900, color: '#FFB347' }}>
                    Top Dollar
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF', marginTop: '4px' }}>
                    Gross Profit Focus
                  </div>
                </div>

              </div>

              {/* Core Values Box */}
              <div style={{ backgroundColor: '#0A1628', padding: '30px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#F57C20', marginBottom: '10px' }}>
                  OUR MISSION
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  To establish long-term partnerships built on trust, profitability, and operational efficiency. We handle the paperwork, broker negotiations, and compliance so you keep earning smoothly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Call to Action Bar */}
      <section style={{ padding: '60px 0', backgroundColor: '#0A1628', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2.2rem', fontWeight: 900, marginBottom: '16px' }}>
            READY TO PARTNER WITH A RELIABLE DISPATCHER?
          </h2>
          <a
            href="/contact"
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
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(245, 124, 32, 0.4)',
            }}
          >
            <i className="fas fa-phone-alt"></i> Get Started Today
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;