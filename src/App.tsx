import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyBarterSection from './components/WhyBarterSection';
import MatrixEnergyNetwork from './components/MatrixEnergyNetwork';
import ProcessSection from './components/ProcessSection';
import MatrixBarterJourney from './components/MatrixBarterJourney';
import OurClients from './components/OurClients';
import CampaignShowcase from './components/CampaignShowcase';
import ProductShowcase from './components/ProductShowcase';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <div className="relative min-h-screen bg-[#FFFBEB] text-slate-900 font-sans antialiased selection:bg-[#FDE68A] selection:text-black">
      {/* Global Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Luxury Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(253,230,138,0.4)_0%,transparent_70%)] blur-[120px]" />

        {/* Soft Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(253,230,138,0.3)_0%,transparent_70%)]" />

        {/* Luxury Gradient shift simulation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBEB] via-[#FFFBEB] to-[#FDE68A] opacity-80" />

        {/* Very low opacity noise (Option C) */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}
        />
      </div>

      <Navbar />
      <main className="relative z-10 flex flex-col gap-0">
        <div id="home"><Hero /></div>
        <div id="why-barter"><WhyBarterSection /></div>
        <div id="capabilities">
          <MatrixEnergyNetwork />
          <ServicesSection />
          <ProcessSection />
          <MatrixBarterJourney />
        </div>
        <div id="clients">
          <TestimonialsSection />
          <OurClients />
        </div>
        <div id="campaigns"><CampaignShowcase /></div>
        <ProductShowcase />
        <div id="contact"><CTASection /></div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
