# Footer Component - Implementation Examples

## Basic Implementation

### Minimal Setup

```tsx
// src/App.tsx
import React from 'react';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="content">
        {/* Your page content */}
      </div>
      <Footer />
    </>
  );
}

export default App;
```

---

## Complete Page Example

```tsx
// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />  {/* Footer at the bottom */}
    </>
  );
}

export default App;
```

---

## Custom Footer Content Example

### Update Brand Information

```tsx
// src/components/Footer.tsx - Find and modify:

{/* Brand & Summary */}
<section className="footer-section footer-branding">
  <span className="brand-name">YOUR COMPANY</span>
  <p className="brand-tagline">
    Your company tagline here. Describe what you do in a compelling way.
  </p>
  <div className="contact-info">
    <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
    <a href="tel:+1234567890">+1 (234) 567-890</a>
  </div>
</section>
```

---

## Add Custom Sections

### Example: Resources Section

```tsx
{/* Add this inside footer-wrapper, after offices section */}

{/* Resources */}
<section className="footer-section">
  <h4 className="footer-heading">Resources</h4>
  <nav className="footer-nav">
    <a href="/blog">Blog</a>
    <a href="/guides">Guides</a>
    <a href="/case-studies">Case Studies</a>
    <a href="/tutorials">Tutorials</a>
    <a href="/webinars">Webinars</a>
  </nav>
</section>
```

### Example: Legal Section

```tsx
{/* Add before footer-bottom */}
<section className="footer-section">
  <h4 className="footer-heading">Legal</h4>
  <nav className="footer-nav">
    <a href="/privacy">Privacy Policy</a>
    <a href="/terms">Terms of Service</a>
    <a href="/cookies">Cookie Policy</a>
    <a href="/disclaimer">Disclaimer</a>
  </nav>
</section>
```

---

## Customize Colors & Animations

### Change Primary Accent Color

```tsx
// src/components/Footer.tsx - Update hover color:

// Find these sections and change color:
gsap.to(link, {
  y: -5,
  color: '#your-color',  // Change from '#ff6b6b'
  duration: 0.3,
  ease: 'power2.out',
});

// Social icon hover:
gsap.to(icon, {
  scale: 1.2,
  color: '#your-color',  // Change from '#ff6b6b'
  duration: 0.3,
  ease: 'back.out',
});
```

```css
/* src/components/Footer.css - Update gradient colors */

.brand-name {
  /* Change gradient colors */
  background: linear-gradient(135deg, #your-color, #other-color);
}

.footer-heading::after {
  /* Update accent line color */
  background: linear-gradient(90deg, #your-color, #other-color);
}
```

### Adjust Animation Timings

```tsx
// src/components/Footer.tsx

// Slower entrance animation
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: footer,
    start: 'top 80%',
    end: 'top 50%',
    scrub: false,
    once: true,
  },
});

// Change duration to 1.2 for slower animation
tl.from(
  footer,
  {
    y: 100,
    opacity: 0,
    duration: 1.2,  // Increased from 0.8
    ease: 'power2.out',
  },
  0
);

// Slower floating shapes
blobs.forEach((blob, index) => {
  const duration = 8 + index * 3;  // Changed from 6 + index * 2
  
  gsap.to(blob, {
    y: yMovement,
    x: xMovement,
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
});
```

---

## Working with Different Content Types

### Example 1: E-Commerce Footer

```tsx
{/* Services Section */}
<section className="footer-section">
  <h4 className="footer-heading">Shop</h4>
  <nav className="footer-nav">
    <a href="/products">Products</a>
    <a href="/collections">Collections</a>
    <a href="/sale">Sale</a>
    <a href="/new">New Arrivals</a>
  </nav>
</section>

{/* Customer Service */}
<section className="footer-section">
  <h4 className="footer-heading">Support</h4>
  <nav className="footer-nav">
    <a href="/faq">FAQ</a>
    <a href="/shipping">Shipping Info</a>
    <a href="/returns">Returns</a>
    <a href="/contact">Contact Us</a>
  </nav>
</section>

{/* About */}
<section className="footer-section">
  <h4 className="footer-heading">Company</h4>
  <nav className="footer-nav">
    <a href="/about">About Us</a>
    <a href="/careers">Careers</a>
    <a href="/press">Press</a>
    <a href="/sustainability">Sustainability</a>
  </nav>
</section>
```

### Example 2: SaaS Footer

```tsx
{/* Product */}
<section className="footer-section">
  <h4 className="footer-heading">Product</h4>
  <nav className="footer-nav">
    <a href="/features">Features</a>
    <a href="/pricing">Pricing</a>
    <a href="/security">Security</a>
    <a href="/roadmap">Roadmap</a>
  </nav>
</section>

{/* Developers */}
<section className="footer-section">
  <h4 className="footer-heading">Developers</h4>
  <nav className="footer-nav">
    <a href="/docs">Documentation</a>
    <a href="/api">API Reference</a>
    <a href="/github">GitHub</a>
    <a href="/status">Status Page</a>
  </nav>
</section>

{/* Enterprise */}
<section className="footer-section">
  <h4 className="footer-heading">Enterprise</h4>
  <nav className="footer-nav">
    <a href="/solutions">Solutions</a>
    <a href="/integrations">Integrations</a>
    <a href="/demo">Request Demo</a>
    <a href="/contact-sales">Contact Sales</a>
  </nav>
</section>
```

### Example 3: Agency Footer

```tsx
{/* Services */}
<section className="footer-section">
  <h4 className="footer-heading">Services</h4>
  <nav className="footer-nav">
    <a href="/branding">Branding</a>
    <a href="/web-design">Web Design</a>
    <a href="/development">Development</a>
    <a href="/marketing">Digital Marketing</a>
  </nav>
</section>

{/* Work */}
<section className="footer-section">
  <h4 className="footer-heading">Work</h4>
  <nav className="footer-nav">
    <a href="/portfolio">Portfolio</a>
    <a href="/case-studies">Case Studies</a>
    <a href="/clients">Clients</a>
    <a href="/testimonials">Testimonials</a>
  </nav>
</section>

{/* About */}
<section className="footer-section">
  <h4 className="footer-heading">About</h4>
  <nav className="footer-nav">
    <a href="/our-story">Our Story</a>
    <a href="/team">Team</a>
    <a href="/careers">Careers</a>
    <a href="/contact">Get In Touch</a>
  </nav>
</section>
```

---

## Advanced Customization Examples

### Add More Floating Shapes

```tsx
// src/components/Footer.tsx

// In JSX, add:
<div className="floating-shape shape-4"></div>
<div className="floating-shape shape-5"></div>

// The animation loop automatically handles new shapes:
const blobs = shapes.querySelectorAll('.floating-shape');
blobs.forEach((blob, index) => {
  // Automatically animates all shapes
  const duration = 6 + index * 2;
  gsap.to(blob, { ... });
});
```

```css
/* src/components/Footer.css - Add shape styles */

.shape-4 {
  width: 280px;
  height: 280px;
  background: #ec4899;  /* Pink */
  bottom: 150px;
  left: 20%;
  opacity: 0.06;
}

.shape-5 {
  width: 320px;
  height: 320px;
  background: #14b8a6;  /* Teal */
  top: 100px;
  right: 5%;
  opacity: 0.06;
}
```

### Disable Parallax on Low-End Devices

```tsx
// src/components/Footer.tsx

// Add device detection:
const isHighEndDevice = () => {
  // Check memory (if available)
  if (navigator.deviceMemory && navigator.deviceMemory < 4) {
    return false;  // Don't use parallax on low-memory devices
  }
  // Check if mobile
  return !('ontouchstart' in window);
};

// Conditional parallax:
const handleMouseMove = (e: MouseEvent) => {
  if (!isHighEndDevice()) return;  // Skip on low-end devices
  
  // ... rest of parallax code
};

footer.addEventListener('mousemove', handleMouseMove);
```

### Add Newsletter Signup

```tsx
{/* Add to footer-bottom, before social-links */}
<div className="newsletter-signup" style={{
  marginBottom: '2rem',
  padding: '1.5rem',
  backgroundColor: 'rgba(255, 107, 107, 0.1)',
  borderRadius: '0.5rem',
  textAlign: 'center'
}}>
  <h4 style={{ marginBottom: '0.5rem' }}>Subscribe to Our Newsletter</h4>
  <form style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
    <input 
      type="email" 
      placeholder="Enter your email"
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        border: 'none',
        flex: 1,
        maxWidth: '300px'
      }}
    />
    <button 
      type="submit"
      style={{
        padding: '0.5rem 1.5rem',
        backgroundColor: '#ff6b6b',
        color: 'white',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer'
      }}
    >
      Subscribe
    </button>
  </form>
</div>
```

---

## Styling Variations

### Dark Mode Variant

```tsx
// src/components/Footer.tsx
// Change gradient:
<footer className="footer footer-dark">
  {/* Rest of component */}
</footer>
```

```css
/* src/components/Footer.css */

.footer-dark {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.footer-dark .brand-name {
  background: linear-gradient(135deg, #00d4ff, #0099ff);
}

.footer-dark .footer-heading::after {
  background: linear-gradient(90deg, #00d4ff, #0099ff);
}
```

### Light Mode Variant

```css
/* src/components/Footer.css */

.footer-light {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #d0d9e8 100%);
  color: #1e293b;
}

.footer-light .brand-name {
  background: linear-gradient(135deg, #e0283a, #c41e3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-light a {
  color: #334155;
}

.footer-light a:hover {
  color: #e0283a;
}
```

---

## Integration with Existing Components

### With Lenis Smooth Scroll

```tsx
// src/App.tsx - Already in your project!
import Lenis from 'lenis';

function App() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* Your components */}
      <Footer />  {/* Footer works perfectly with Lenis */}
    </>
  );
}
```

### With Navbar

```tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      {/* Page content */}
      <Footer />
    </>
  );
}
```

---

## Dynamic Content Examples

### From API/CMS

```tsx
// src/components/Footer.tsx
import React, { useEffect, useState } from 'react';
import Footer from './Footer';

// Wrapper component that fetches footer data
function FooterWithData() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    // Fetch from your CMS/API
    fetch('/api/footer-content')
      .then(res => res.json())
      .then(data => setFooterData(data));
  }, []);

  return footerData ? <Footer data={footerData} /> : <div>Loading...</div>;
}
```

### With Router Links

```tsx
import { Link } from 'react-router-dom';

{/* In footer sections */}
<nav className="footer-nav">
  <Link to="/services">Services</Link>
  <Link to="/portfolio">Portfolio</Link>
  <Link to="/blog">Blog</Link>
</nav>
```

---

## Performance Optimization Examples

### Lazy Load Footer

```tsx
// src/App.tsx
import React, { Suspense } from 'react';

const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      {/* Content */}
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
```

### Disable Animations on Low-End Devices

```tsx
// src/components/Footer.tsx
useEffect(() => {
  const isLowEndDevice = navigator.hardwareConcurrency <= 2;
  
  if (isLowEndDevice) {
    // Skip complex animations
    return;
  }

  // Run animations normally
  // ... animation code
}, []);
```

---

## Testing Examples

### Unit Test

```tsx
// src/components/Footer.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with brand name', () => {
  render(<Footer />);
  expect(screen.getByText('MATRIX')).toBeInTheDocument();
});

test('renders all social links', () => {
  render(<Footer />);
  expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
  expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
});
```

### E2E Test

```typescript
// cypress/e2e/footer.cy.ts
describe('Footer Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.scrollTo('bottom');
  });

  it('displays footer content', () => {
    cy.get('.footer').should('be.visible');
    cy.get('.brand-name').should('contain', 'MATRIX');
  });

  it('footer links are clickable', () => {
    cy.get('.footer-nav a').first().should('be.visible').click();
  });

  it('social icons are visible', () => {
    cy.get('.social-icon').should('have.length', 4);
  });
});
```

---

## Common Patterns

### Pattern 1: Multi-Language Footer

```tsx
// Use with i18n library
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <h4 className="footer-heading">{t('execution_pillars')}</h4>
      <nav className="footer-nav">
        <a href="#">{t('inventory_valuation')}</a>
        <a href="#">{t('media_structuring')}</a>
      </nav>
    </footer>
  );
}
```

### Pattern 2: Theme-Aware Footer

```tsx
// Use with context/theme provider
import { useTheme } from './context/ThemeContext';

function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`footer ${isDark ? 'footer-dark' : 'footer-light'}`}>
      {/* Content */}
    </footer>
  );
}
```

### Pattern 3: Environment-Based Footer

```tsx
function Footer() {
  const isDev = process.env.NODE_ENV === 'development';
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <footer className="footer">
      {isDev && <div style={{textAlign: 'center', color: 'yellow'}}>DEV MODE</div>}
      {/* Regular content */}
    </footer>
  );
}
```

---

**Need more examples? Check the documentation files!**
