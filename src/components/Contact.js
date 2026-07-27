import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    truckType: 'Dry Van',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // 🔴 CHANGE THIS TO YOUR VERCEL BACKEND URL
  const BACKEND_URL = 'trucking-backend-in1kzf4yi-mrbeast9032-7110s-projects.vercel.app';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.truckType, // Equipment Type mapped to Backend Service
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setLoading(false);
        setSubmitted(true);
      } else {
        setLoading(false);
        setErrorMsg(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setLoading(false);
      setErrorMsg('Server error! Please check your internet connection or try later.');
    }
  };

  return (
    <div style={{ backgroundColor: '#0A1628', color: '#FFFFFF', minHeight: '100vh' }}>
      <div>
        <Helmet>
          <title>Contact DLB Management LLC</title>
          <meta name="description" content="Get in touch with DLB Management LLC for all your dispatch and logistics needs." />
        </Helmet>
            
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
              <i className="fas fa-headset"></i> Get In Touch
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
              Start Driving <span style={{ color: '#F57C20' }}>With DLB Management</span>
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
              Have questions about dispatch rates, MC leasing, or factoring? Contact our dispatch desk 24/7.
            </p>
          </div>
        </section>

        {/* 2. Main Contact Form & Details Section */}
        <section style={{ padding: '90px 0', backgroundColor: '#0F2040' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '50px',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Contact Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div
                  style={{
                    backgroundColor: '#0A1628',
                    padding: '30px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(245, 124, 32, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: '#F57C20',
                    }}
                  >
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#FFB347', fontWeight: 700, textTransform: 'uppercase' }}>Phone Support</div>
                    <a href="tel:7087737125" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', textDecoration: 'none' }}>
                      708-773-7125
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#0A1628',
                    padding: '30px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(245, 124, 32, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: '#F57C20',
                    }}
                  >
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#FFB347', fontWeight: 700, textTransform: 'uppercase' }}>Email Inquiries</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>James.dispatch024@gmail.com</div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#0A1628',
                    padding: '30px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(245, 124, 32, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: '#F57C20',
                    }}
                  >
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#FFB347', fontWeight: 700, textTransform: 'uppercase' }}>Working Hours</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>24/7 Dispatch Desk Available</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
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
                    fontSize: '2rem',
                    fontWeight: 900,
                    marginBottom: '20px',
                    color: '#FFFFFF',
                  }}
                >
                  SEND US A MESSAGE
                </h2>

                {submitted ? (
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 124, 32, 0.15)',
                      border: '1px solid #F57C20',
                      padding: '20px',
                      borderRadius: '12px',
                      textAlign: 'center',
                      color: '#FFFFFF',
                    }}
                  >
                    <i className="fas fa-check-circle" style={{ fontSize: '2rem', color: '#F57C20', marginBottom: '10px' }}></i>
                    <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Thank You!</h3>
                    <p style={{ marginTop: '6px', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
                      Your message has been received. Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {errorMsg && (
                      <div style={{ color: '#ff4d4d', fontSize: '0.9rem', backgroundColor: 'rgba(255,0,0,0.1)', padding: '10px', borderRadius: '6px' }}>
                        {errorMsg}
                      </div>
                    )}

                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <div>
                        <label style={labelStyle}>Phone Number *</label>
                        <input
                          type="text"
                          name="phone"
                          required
                          placeholder="000-000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="driver@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Equipment / Equipment Type</label>
                      <select name="truckType" value={formData.truckType} onChange={handleChange} style={inputStyle}>
                        <option value="Dry Van" style={optionStyle}>Dry Van</option>
                        <option value="Reefer" style={optionStyle}>Reefer</option>
                        <option value="Flatbed" style={optionStyle}>Flatbed</option>
                        <option value="Box Truck" style={optionStyle}>Box Truck</option>
                        <option value="Power Only" style={optionStyle}>Power Only</option>
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle}>Message / Inquiry *</label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        placeholder="Tell us about your requirements or preferred lanes..."
                        value={formData.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: 'none' }}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        padding: '14px',
                        borderRadius: '50px',
                        backgroundColor: loading ? '#888888' : '#F57C20',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: '1rem',
                        border: 'none',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        textTransform: 'uppercase',
                        boxShadow: '0 6px 20px rgba(245, 124, 32, 0.4)',
                        transition: '0.3s ease',
                        marginTop: '10px',
                      }}
                    >
                      {loading ? 'Sending...' : 'Submit Request'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>     
      </div>
    </div>
  );
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 700,
  color: 'rgba(255, 255, 255, 0.85)',
  marginBottom: '6px',
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  backgroundColor: '#0F2040',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '8px',
  color: '#FFFFFF',
  fontSize: '0.95rem',
  outline: 'none',
  boxSizing: 'border-box',
};

const optionStyle = {
  backgroundColor: '#0A1628',
  color: '#FFFFFF',
};

export default Contact;