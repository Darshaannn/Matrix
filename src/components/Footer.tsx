import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer">
      {/* Massive Watermark */}
      <div className="footer-watermark">matrix</div>

      <div className="footer-content">
        {/* Header: Slogan + Scroll Top */}
        <div className="footer-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="footer-slogan"
          >
            VANGUARD<br />MATRIX
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to Top"
          >
            <ArrowUp size={32} strokeWidth={3} />
          </motion.button>
        </div>

        {/* Main Grid */}
        <div className="footer-main-grid">
          {/* Matrix Brand/Address */}
          <div className="footer-col">
            <h4 className="footer-col-title">Matrix</h4>
            <div className="footer-address">
              Matrix House, Lower Parel,<br />
              Mumbai 400013 — India<br />
              Maharashtra District
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <nav className="footer-link-list">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#campaigns" className="footer-link">Campaigns</a>
              <a href="#industry-map" className="footer-link">Network</a>
            </nav>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <nav className="footer-link-list">
              <a href="#" className="footer-link">Innovations</a>
              <a href="#" className="footer-link">Showroom</a>
              <a href="#" className="footer-link">News</a>
              <a href="#" className="footer-link">Contact</a>
            </nav>
          </div>

          {/* Follow */}
          <div className="footer-col">
            <h4 className="footer-col-title">Follow</h4>
            <nav className="footer-link-list">
              <a href="https://facebook.com" className="footer-link">Facebook</a>
              <a href="https://instagram.com" className="footer-link">Instagram</a>
              <a href="https://youtube.com" className="footer-link">Youtube</a>
              <a href="https://linkedin.com" className="footer-link">Linkedin</a>
            </nav>
          </div>
        </div>

        {/* Boxed Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span>©{new Date().getFullYear()} MATRIX</span>
            <span className="opacity-60">P.IVA 01411010356 — MATRIX MEDIA CONSORTIUM INC.</span>
          </div>
          <div className="footer-bottom-right">
            <a href="#">LEGAL</a>
            <a href="#">PRIVACY</a>
            <a href="#">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
