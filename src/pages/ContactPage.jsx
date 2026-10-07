import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plotSize: '10,000 Sq.Ft',
    visitDate: '',
    needPickup: false,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      
      {/* Page Header Banner */}
      <section
        className="page-hero-banner"
        style={{ backgroundImage: "url('/nature-trail.jpg')" }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="eyebrow-badge fade-in-up">
            <span>✦ Connect With Our Property Advisors</span>
          </div>
          <h1 className="page-title fade-in-up delay-100">Schedule Your Site Visit</h1>
          <p className="page-subtitle fade-in-up delay-200">
            Step onto the soil of Siri Nele and experience our panoramic views, fresh air, and model farm villa firsthand.
          </p>
        </div>
      </section>
      
      <section className="section section-light contact-main-section">
        <div className="container contact-container">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="contact-info-card">
            
            <div className="info-header-block">
              <span className="info-prestige-tag">JS CONSTRUCTIONS DEVELOPMENT</span>
              <h3 className="info-main-title">Sales & Site Office</h3>
              <p className="info-subtitle">
                Our property consultants are at your service 7 days a week to organize personalized visits and share legal title files.
              </p>
            </div>
            
            <div className="info-items-stack">
              
              <div className="info-item-row">
                <div className="info-icon-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Direct Telephones</h4>
                  <p>
                    <a href="tel:+919845012345">+91 98450 12345</a>
                  </p>
                  <p>
                    <a href="tel:+918026647890">+91 (080) 2664 7890</a>
                  </p>
                </div>
              </div>

              <div className="info-item-row">
                <div className="info-icon-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email Correspondence</h4>
                  <p>
                    <a href="mailto:sales@sirinele.com">sales@sirinele.com</a>
                  </p>
                  <p>
                    <a href="mailto:enquiry@jsconstructions.in">enquiry@jsconstructions.in</a>
                  </p>
                </div>
              </div>

              <div className="info-item-row">
                <div className="info-icon-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Site Location</h4>
                  <p>Siri Nele Estates, Off Kanakapura National Highway, Harohalli Taluk, Ramanagara District, Karnataka - 562112</p>
                </div>
              </div>

              <div className="info-item-row">
                <div className="info-icon-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <div>
                  <h4>Corporate Office</h4>
                  <p>JS Constructions, #42 Emerald Arcade, 4th Block, Jayanagar, Bengaluru - 560011</p>
                </div>
              </div>

            </div>

            <div className="whatsapp-action-card">
              <a
                href="https://wa.me/919845012345?text=Hello%20Siri%20Nele%20team,%20I%20would%20like%20to%20schedule%20a%20site%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-full"
              >
                <span>💬 Instant WhatsApp Chat with Advisor</span>
              </a>
            </div>

          </div>
          
          {/* Right Column: Interactive Consultation & Booking Form */}
          <div className="contact-form-wrapper">
            
            {submitted ? (
              <div className="booking-confirmation-card fade-in-up">
                <div className="confirm-icon-box">✓</div>
                <h3>Site Visit Request Confirmed</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>! Your inquiry for <strong>{formData.plotSize}</strong> has been registered with our Senior Property Director.
                </p>
                <div className="confirm-details-box">
                  <div><strong>Preferred Date:</strong> {formData.visitDate || 'To be scheduled with advisor'}</div>
                  <div><strong>Contact Phone:</strong> {formData.phone}</div>
                  <div><strong>Bangalore Pickup Requested:</strong> {formData.needPickup ? 'Yes, Chauffeured Service' : 'Self-Drive / Location Shared'}</div>
                </div>
                <p className="confirm-sub">
                  We have dispatched the masterplan PDF and directions to your phone/email. A coordinator will call you within 2 hours.
                </p>
                <button
                  type="button"
                  className="btn btn-gold btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <div className="form-card-inner">
                <div className="form-header">
                  <span className="form-badge">Priority Booking</span>
                  <h3 className="form-title">Request an Exclusive Consultation</h3>
                  <p className="form-subtitle">Fill out your details below to schedule a weekend site tour or request customized quotation sheets.</p>
                </div>

                <form className="luxury-contact-form" onSubmit={handleSubmit}>
                  
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Ramesh Chandra"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Mobile Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="ramesh@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="plotSize">Preferred Plot Configuration</label>
                      <select
                        id="plotSize"
                        name="plotSize"
                        value={formData.plotSize}
                        onChange={handleChange}
                      >
                        <option value="6,000 Sq.Ft">6,000 Sq.Ft (Quarter Acre Eco-Plot)</option>
                        <option value="10,000 Sq.Ft">10,000 Sq.Ft (Orchard Estate Plot)</option>
                        <option value="15,000 Sq.Ft">15,000 Sq.Ft (Grand Estate Plot)</option>
                        <option value="20,000 Sq.Ft">20,000 Sq.Ft (Half Acre Sovereign Homestead)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="visitDate">Preferred Site Visit Date</label>
                      <input
                        type="date"
                        id="visitDate"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="needPickup"
                          checked={formData.needPickup}
                          onChange={handleChange}
                        />
                        <span>Request complimentary weekend pickup from Bengaluru city center</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Questions or Specific Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Share any specific queries regarding timber yields, villa construction, or bank loans..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-gold btn-lg w-100 form-submit-btn">
                    <span>Confirm Site Visit & Receive Masterplan</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>

                  <p className="form-privacy-note">
                    🔒 We respect your privacy. Your contact details will only be used by authorized JS Constructions property consultants.
                  </p>
                </form>
              </div>
            )}

          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
