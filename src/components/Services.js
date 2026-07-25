import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceList = [
    {
      icon: 'fa-truck-fast',
      title: 'Truck Dispatching',
      badge: 'Core Service',
      description:
        'Dedicated dispatchers negotiating high-paying rates on top load boards. We handle rate confirmations, broker calls, and optimal route planning.',
      features: ['Top Market Rate Negotiation', '24/7 Dedicated Support', 'Dry Van, Reefer & Flatbed'],
    },
    {
      icon: 'fa-file-signature',
      title: 'MC Lease Offering',
      badge: 'High Demand',
      description:
        'Operate under our established Authority and MC number. Complete compliance coverage, insurance alignment, and instant access to premium freight lanes.',
      features: ['Established Authority Access', 'Full Insurance Coverage', 'Hassle-free Setup'],
    },
    {
      icon: 'fa-hand-holding-dollar',
      title: 'Factoring Signups',
      badge: 'Instant Cashflow',
      description:
        'Get paid immediately after completing trips without waiting 30–60 days. Quick approval, competitive factoring rates, and zero stress.',
      features: ['Same-Day Payouts', 'Zero Hidden Fees', 'Dedicated Fuel Cards Support'],
    },
    {
      icon: 'fa-file-invoice-dollar',
      title: 'Back-Office & Invoicing',
      badge: 'Full Operations',
      description:
        'Complete paperwork management including rate-con verification, broker setup packages, invoicing, and detention/layover tracking.',
      features: ['Paperwork Automation', 'Detention Claiming', 'Organized Monthly Reporting'],
    },
  ];

  return (
    <div style={{ backgroundColor: '#0A1628', color: '#FFFFFF', minHeight: '100vh' }}>
      {/* 1. Header Banner */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '80px',
          background: 'radial-gradient(circle at 50% 20%, #1A3260 0%, #0A1628 80%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
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
            <i className="fas fa-cogs"></i> What We Offer
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
            End-To-End <span style={{ color: '#F57C20' }}>Logistics & Dispatch</span> Solutions
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
            We provide full back-office power so you can stay focused on driving and scaling your fleet profit.
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section style={{ padding: '90px 0', backgroundColor: '#0F2040' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
            }}
          >
            {serviceList.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#0A1628',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '58px',
                        height: '58px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(245, 124, 32, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.6rem',
                        color: '#F57C20',
                      }}
                    >
                      <i className={`fas ${service.icon}`}></i>
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        color: '#FFB347',
                        padding: '4px 12px',
                        borderRadius: '30px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      marginBottom: '14px',
                      color: '#FFFFFF',
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    {service.description}
                  </p>

                  <div
                    style={{
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingTop: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', fontWeight: 600 }}>
                        <i className="fas fa-check" style={{ color: '#F57C20', fontSize: '0.8rem' }}></i>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '30px' }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '12px 0',
                      borderRadius: '50px',
                      backgroundColor: 'rgba(245, 124, 32, 0.12)',
                      border: '1px solid rgba(245, 124, 32, 0.4)',
                      color: '#FFB347',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                    }}
                  >
                    Get Started <i className="fas fa-arrow-right" style={{ marginLeft: '6px' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Call To Action Banner */}
      <section style={{ padding: '60px 0', backgroundColor: '#0A1628', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2.2rem', fontWeight: 900, marginBottom: '16px' }}>
            NEED A CUSTOM DISPATCH OR LEASING PACKAGE?
          </h2>
          <Link
            to="/contact"
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
            <i className="fas fa-phone-alt"></i> Speak With A Dispatcher
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;