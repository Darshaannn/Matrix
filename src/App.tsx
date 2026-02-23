import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MatrixEnergyNetwork from './components/MatrixEnergyNetwork';
import MatrixBarterJourney from './components/MatrixBarterJourney';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import OurClients from './components/OurClients';
import CampaignShowcase from './components/CampaignShowcase';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] font-sans antialiased selection:bg-[#FFDC58] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MatrixEnergyNetwork />
        <MatrixBarterJourney />
        <ServicesSection />
        <IndustriesSection />
        <OurClients />
        <CampaignShowcase />
        <ContactSection />

        {/* Extra spacing for scroll feel */}
        <div className="h-20"></div>
      </main>
    </div>
  );
}

export default App;
