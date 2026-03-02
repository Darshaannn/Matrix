import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* ── Top CTA Section ── */}
      <div className="footer-cta-container">
        <h2 className="footer-cta-title">Ready to take your brand to the next level?</h2>

        <div className="footer-cta-buttons">
          <a href="/#contact" className="cta-stadium">
            <span className="cta-stadium-text italic font-serif">Let's Work Together</span>
          </a>

          <a href="/#contact" className="cta-arrow-circle group">
            <ArrowRight className="cta-arrow-icon" size={40} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* ── Bottom Information Grid ── */}
      <div className="footer-bottom-info">
        <div className="footer-bottom-grid">

          {/* Column 1: Brand Info */}
          <div className="footer-info-col">
            <p className="footer-about-text">
              Matrix Solutions Worldwide Private Limited is a premium media barter agency connecting corporate inventory with national media power.
            </p>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} Matrix Solutions Worldwide. All rights reserved.
            </div>
          </div>

          {/* Column 2: Contact & Project */}
          <div className="footer-contact-col">
            <a href="/#contact" className="start-project-btn">
              Start a project
            </a>
            <div className="footer-email-block">
              <p className="footer-email-label text-gray-500 text-xs mb-1">Or get in touch via</p>
              <a href="mailto:solutions@vanguardmatrix.com" className="footer-email-link">
                solutions@vanguardmatrix.com
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="footer-nav-col">
            <a href="/#home">Home</a>
            <a href="/#capabilities">Capabilities</a>
            <a href="/#about">About</a>
          </div>

          {/* Column 4: Socials */}
          <div className="footer-nav-col">
            <a href="https://linkedin.com">Linkedin</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://twitter.com">Twitter</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
