import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import BenefitsSection from './components/BenefitsSection';
import MatrixEnergyNetwork from './components/MatrixEnergyNetwork';
import MatrixBarterJourney from './components/MatrixBarterJourney';
import OurClients from './components/OurClients';
import CampaignShowcase from './components/CampaignShowcase';
import ProductShowcase from './components/ProductShowcase';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] font-sans antialiased selection:bg-[#FFDC58] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <MatrixEnergyNetwork />
        <BenefitsSection />
        <MatrixBarterJourney />
        <OurClients />
        <CampaignShowcase />
        <ProductShowcase />
        <CTASection />

        {/* Extra spacing for scroll feel */}
        <div className="h-20"></div>
      </main>
    </div>
  );
}

export default App;
