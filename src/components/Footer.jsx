import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="luxury-footer">
      
      {/* ── VIP Consultation & Brochure Banner ── */}
      <div className="footer-vip-strip">
        <div className="container vip-strip-inner">
          <div className="vip-text-box">
            <span className="vip-badge">Exclusive Invitation</span>
            <h3 className="vip-title">Experience Siri Nele Firsthand</h3>
            <p className="vip-desc">
              Request a chauffeured weekend site tour or receive our complete investor information dossier directly on WhatsApp.
            </p>
          </div>

          <form className="vip-form" onSubmit={handleSubscribe}>
            {subscribed ? (
              <div className="vip-success-pill">
                ✓ Thank you! Our senior property advisor will reach out shortly.
              </div>
            ) : (
              <div className="vip-input-group">
                <input
                  type="text"
                  placeholder="Enter Phone or Email for Dossier"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-gold btn-sm">
                  Request Dossier
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* ── Main Multi-Column Footer ── */}
      <div className="footer-main">
        <div className="container footer-grid">
          
          {/* Column 1: Brand & Developer Identity */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-box">
                <img src="/logo.png" alt="Siri Nele Logo" className="footer-logo-img" />
              </div>
              <div className="footer-brand-text">
                <span className="footer-brand-title">Siri Nele</span>
                <span className="footer-brand-subtitle">Curated Eco-Luxury Farmlands</span>
              </div>
            </div>

            <p className="footer-brand-bio">
              Where nature becomes your family's eternal legacy. Siri Nele offers 20 acres of lush, managed agricultural land, custom luxury eco-villas, and resort-grade amenities in Karnataka’s fastest-growing nature corridor.
            </p>

            <div className="footer-developer-box">
              <div className="dev-credit-label">PROUDLY DEVELOPED BY</div>
              <div className="dev-credit-content">
                <img src="/js logo round.png" alt="JS Constructions" className="footer-dev-logo" />
                <div>
                  <strong>JS Constructions</strong>
                  <span>18+ Years of Architectural Integrity</span>
                </div>
              </div>
            </div>

            <div className="footer-trust-badges">
              <span className="trust-pill">RERA Reg: PRM/KA/RERA/1251/310/PR/240101</span>
              <span className="trust-pill">100% Clear Freehold Title</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">
              <span>Quick Navigation</span>
              <span className="heading-line" />
            </h4>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/vision">The Vision & Philosophy</Link></li>
              <li><Link to="/amenities">Clubhouse & Amenities</Link></li>
              <li><Link to="/details">Masterplan & Specifications</Link></li>
              <li><Link to="/contact">Book Private Site Visit</Link></li>
              <li>
                <a href="/BROCHURE.pdf" download="Siri_Nele_Brochure.pdf">
                  Download Project Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Estate Offerings */}
          <div className="footer-col">
            <h4 className="footer-heading">
              <span>Estate Configurations</span>
              <span className="heading-line" />
            </h4>
            <ul className="footer-links">
              <li>
                <span className="offering-title">6,000 Sq.Ft Eco-Plots</span>
                <span className="offering-desc">Ideal for compact weekend retreats</span>
              </li>
              <li>
                <span className="offering-title">10,000 Sq.Ft Orchard Estates</span>
                <span className="offering-desc">Managed fruit & teakwood plantations</span>
              </li>
              <li>
                <span className="offering-title">20,000 Sq.Ft Homesteads</span>
                <span className="offering-desc">Half-acre sovereign luxury country estates</span>
              </li>
              <li>
                <span className="offering-title">Managed Farm Program</span>
                <span className="offering-desc">Zero-maintenance agricultural yields</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Site Location */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">
              <span>Site & Office Enquiries</span>
              <span className="heading-line" />
            </h4>

            <ul className="footer-contact-items">
              <li>
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Site Address:</strong>
                  <p>Siri Nele Estates, Off Kanakapura National Highway, Harohalli Taluk, Karnataka 562112</p>
                </div>
              </li>
              <li>
                <span className="contact-icon">🏢</span>
                <div>
                  <strong>Headquarters:</strong>
                  <p>JS Constructions, #42 Emerald Arcade, 4th Block, Jayanagar, Bengaluru 560011</p>
                </div>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Sales Desk:</strong>
                  <p><a href="tel:+919845012345">+91 98450 12345</a> / <a href="tel:+918026647890">+91 80 2664 7890</a></p>
                </div>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Official Email:</strong>
                  <p><a href="mailto:sales@sirinele.com">sales@sirinele.com</a></p>
                </div>
              </li>
            </ul>

            <div className="whatsapp-quick-box">
              <a
                href="https://wa.me/919845012345?text=Hello%20Siri%20Nele%20team,%20I%20am%20interested%20in%20learning%20more%20about%20the%20farmland%20plots."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <span>💬 Chat on WhatsApp with Property Expert</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <strong>JS Constructions</strong>. Siri Nele is a trademarked managed farmland & villa project. All rights reserved.
          </p>

          <div className="legal-links">
            <span>RERA Registered Project</span>
            <span className="sep">•</span>
            <Link to="/contact">Disclaimer & Privacy Policy</Link>
            <span className="sep">•</span>
            <button type="button" onClick={scrollToTop} className="scroll-top-btn" title="Back to Top">
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
