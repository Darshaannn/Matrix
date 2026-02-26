import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndustryCityMap from './components/IndustryCityMap';
import WhatIsBarter from './components/ProcessSection';
import CampaignsEditorial from './components/CampaignsEditorial';
import OurClients from './components/OurClients';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CustomCursor from './components/CustomCursor';
import './components/cursor.css';
import useReveal from './hooks/useReveal';

import IndustryDetailPage from './components/IndustryDetailPage';
import PrototypeLanding from './components/prototype/PrototypeLanding';
import DashboardApp from './components/prototype/DashboardApp';
import { Routes, Route } from 'react-router-dom';

function HomePage() {
  useReveal();

  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#FFFBEB]">
        <main className="relative flex flex-col gap-0">
          <div id="home"><Hero /></div>
          <div id="about" className="reveal"><AboutSection /></div>
          <div id="services" className="reveal"><ServicesSection /></div>
          <div id="what-is-barter" className="reveal"><WhatIsBarter /></div>
          <div id="industry-map" className="reveal"><IndustryCityMap /></div>
          <div id="campaigns"><CampaignsEditorial /></div>
          <div id="clients" className="reveal"><OurClients /></div>
        </main>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-[#FFFBEB] text-slate-900 font-sans antialiased selection:bg-amber-500/30 selection:text-slate-900">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Global Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Luxury Glow - Top Right */}
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] blur-[120px]" />

        {/* Soft Radial Glow - Center Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_70%)]" />

        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}
        />

        {/* Base Background Fallback */}
        <div className="absolute inset-0 bg-[#FFFBEB] -z-10" />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industry/:id" element={<IndustryDetailPage />} />
        <Route path="/prototype" element={<PrototypeLanding />} />
        <Route path="/dashboard" element={<DashboardApp />} />
      </Routes>
    </div>
  );
}

export default App;
