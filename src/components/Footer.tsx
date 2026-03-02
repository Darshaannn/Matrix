import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const content = contentRef.current;
    const shapes = shapesRef.current;

    if (!footer || !content || !shapes) return;

    // Create a timeline for footer entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: 'top 90%',
        end: 'top 60%',
        scrub: false,
        once: true,
      },
    });

    // Set initial state
    gsap.set(content, { opacity: 0, y: 50 });

    // Animate content reveal
    tl.to(
      content,
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
      },
      0
    );

    // Continuous floating animation for background shapes
    const blobs = shapes.querySelectorAll('.floating-shape');
    blobs.forEach((blob, index) => {
      const duration = 8 + index * 2;
      const yMovement = index % 2 === 0 ? 40 : -40;
      const xMovement = index % 3 === 0 ? 30 : -30;

      gsap.to(blob, {
        y: yMovement,
        x: xMovement,
        rotation: index * 45,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = footer.getBoundingClientRect();
      const xPos = clientX - rect.left;
      const yPos = clientY - rect.top;

      const xPercent = (xPos / rect.width - 0.5) * 2;
      const yPercent = (yPos / rect.height - 0.5) * 2;

      blobs.forEach((blob, index) => {
        const speed = 20 + index * 10;
        gsap.to(blob, {
          x: xPercent * speed,
          y: yPercent * speed,
          duration: 1,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    };

    footer.addEventListener('mousemove', handleMouseMove);

    // Hover animations for all links
    const interactiveLinks = content.querySelectorAll('a');
    interactiveLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        if (!link.classList.contains('social-icon')) {
          gsap.to(link, {
            color: '#ff6b6b',
            duration: 0.3,
          });
        }
      });

      link.addEventListener('mouseleave', () => {
        if (!link.classList.contains('social-icon')) {
          gsap.to(link, {
            color: 'inherit',
            duration: 0.3,
          });
        }
      });
    });

    return () => {
      footer.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="footer">
      {/* Animated background shapes */}
      <div ref={shapesRef} className="footer-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Main footer content */}
      <div ref={contentRef} className="footer-content">
        <div className="footer-wrapper">
          {/* Brand & Summary */}
          <section className="footer-section footer-branding">
            <span className="brand-name bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">MATRIX</span>
            <p className="brand-tagline">
              India's leading media barter infrastructure holding company. We convert corporate inventory into national media power.
            </p>
            <div className="contact-info">
              <a href="mailto:corporate@matrix.com">corporate@matrix.com</a>
              <a href="tel:+9122345678">+91 22 3456 7890</a>
            </div>
          </section>

          {/* Solutions */}
          <section className="footer-section">
            <h4 className="footer-heading">Execution Pillars</h4>
            <nav className="footer-nav">
              <a href="#about">About Matrix</a>
              <a href="#what-is-barter">Process Workflow</a>
              <a href="#industry-map">Industry Network</a>
              <a href="#campaigns">Campaign Showcase</a>
              <a href="#clients">Our Clients</a>
            </nav>
          </section>

          {/* Industries */}
          <section className="footer-section">
            <h4 className="footer-heading">Sectors Focus</h4>
            <nav className="footer-nav">
              <a href="#industry-map?sector=fmcg">FMCG & CPG</a>
              <a href="#industry-map?sector=auto">Auto & Machinery</a>
              <a href="#industry-map?sector=realestate">Real Estate</a>
              <a href="#industry-map?sector=hospitality">Hospitality & Tourism</a>
              <a href="#industry-map?sector=retail">Retail & E-commerce</a>
            </nav>
          </section>

          {/* Offices */}
          <section className="footer-section">
            <h4 className="footer-heading">Corporate Offices</h4>
            <div className="offices-info">
              <div>
                <p className="office-city">Mumbai (HQ)</p>
                <p className="office-address">Matrix House, Lower Parel, Mumbai 400013</p>
              </div>
              <div>
                <p className="office-city">Pune</p>
                <p className="office-address">Business Park, Kalyani Nagar, Pune 411014</p>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Matrix Media Consortium. All rights reserved.</p>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 012 20.557a9.9 9.9 0 007.256-2.041c-2.155-.375-4.067-1.466-5.28-3.106 1.519.457 3.224.457 4.719 0-2.374-.469-4.244-2.066-4.923-4.142 1.044.327 2.133.327 3.1 0-2.382-.375-4.357-2.359-4.357-4.942v-.061c.929.525 1.981.857 3.07.898-2.382-1.589-3.468-5.041-1.846-7.66 2.566 3.157 6.409 5.193 10.725 5.41-1.589-7.66 3.468-11.128 6.409-8.562 1.589-.327 3.1-.989 4.28-1.89-.525 1.651-1.651 3.013-3.013 3.897 1.395-.165 2.789-.525 4.054-1.044-.989 1.395-2.066 2.789-3.405 3.897z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2.4c2.66 0 2.976.01 4.022.058 1.045.048 1.758.218 2.382.465.645.25 1.192.586 1.738 1.132.546.546.882 1.093 1.132 1.738.247.624.417 1.337.465 2.382.048 1.046.058 1.362.058 4.022s-.01 2.976-.058 4.022c-.048 1.045-.218 1.758-.465 2.382-.25.645-.586 1.192-1.132 1.738-.546.546-1.093.882-1.738 1.132-.624.247-1.337.417-2.382.465-1.046.048-1.362.058-4.022.058s-2.976-.01-4.022-.058c-1.045-.048-1.758-.218-2.382-.465-.645-.25-1.192-.586-1.738-1.132-.546-.546-.882-1.093-1.132-1.738-.247-.624-.417-1.337-.465-2.382-.048-1.046-.058-1.362-.058-4.022s.01-2.976.058-4.022c.048-1.045.218-1.758.465-2.382.25-.645.586-1.192 1.132-1.738.546-.546 1.093-.882 1.738-1.132.624-.247 1.337-.417 2.382-.465 1.046-.048 1.362-.058 4.022-.058" />
              </svg>
            </a>
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
          <div className="footer-links-bottom">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
