import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatrixEnergyNetwork from './components/MatrixEnergyNetwork';
import WhatIsBarter from './components/ProcessSection';
import MatrixBarterJourney from './components/MatrixBarterJourney';
import OurClients from './components/OurClients';
import CampaignShowcase from './components/CampaignShowcase';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import IndustriesSection from './components/IndustriesSection';
import MediaNetworkSection from './components/MediaNetworkSection';
// Note: WhyBarterSection was removed as it was not found and is redundant with AboutSection/ProcessSection

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B1120] text-white font-sans antialiased selection:bg-amber-500/30 selection:text-white">
      {/* Global Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Luxury Glow - Top Right */}
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] blur-[120px]" />

        {/* Soft Radial Glow - Center Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_70%)]" />

        {/* Subtle Grain Overlay - Fixed to avoid re-rendering in every section */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}
        />

        {/* Base Background Fallback */}
        <div className="absolute inset-0 bg-[#0B1120] -z-10" />
      </div>

      <Navbar />
      <main className="relative z-10 flex flex-col gap-0">
        <div id="home"><Hero /></div>
        <div id="about"><AboutSection /></div>
        <div id="what-is-barter"><WhatIsBarter /></div>
        <div id="capabilities">
          <MatrixEnergyNetwork />
          <ServicesSection />
          <MatrixBarterJourney />
        </div>
        <div id="industries"><IndustriesSection /></div>
        <div id="media-network"><MediaNetworkSection /></div>
        <div id="clients">
          <TestimonialsSection />
          <OurClients />
        </div>
        <div id="campaigns"><CampaignShowcase /></div>
        <div id="contact"><CTASection /></div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
