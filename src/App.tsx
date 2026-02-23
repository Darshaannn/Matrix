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

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] font-sans antialiased selection:bg-[#FFDC58] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <WhyBarterSection />
        <MatrixEnergyNetwork />
        <ProcessSection />
        <MatrixBarterJourney />
        <OurClients />
        <CampaignShowcase />
        <ProductShowcase />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
