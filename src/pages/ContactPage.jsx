import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header bg-primary">
        <div className="container">
          <h1 className="page-title fade-in-up">Get in Touch</h1>
          <p className="page-subtitle fade-in-up delay-100">Take the first step towards your new address in nature.</p>
        </div>
      </div>
      
      <section className="section section-light contact-section">
        <div className="container contact-container">
          
          <div className="contact-info-card">
            <h3 className="text-primary">Contact Information</h3>
            <p>Our team is ready to answer any questions you have about Siri Nele.</p>
            
            <ul className="info-list">
              <li>
                <span className="icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+91XXXXXXXXXX">XXXXX-XXXXX</a></p>
                </div>
              </li>
              <li>
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:******@gmail.com">******@gmail.com</a></p>
                </div>
              </li>
              <li>
                <span className="icon">📍</span>
                <div>
                  <h4>Site Office</h4>
                  <p>XYZ Location, Nature Corridor</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="contact-form-wrapper">
            <h3 className="text-primary">Send a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="I'm interested in learning more about..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
