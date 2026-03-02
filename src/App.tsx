import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import IndustryCityMap from './components/IndustryCityMap';
import CampaignsEditorial from './components/CampaignsEditorial';
import OurClients from './components/OurClients';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PrototypeLanding from './components/prototype/PrototypeLanding';
import DashboardApp from './components/prototype/DashboardApp';
import MatrixSolver from './components/solver/MatrixSolver';
import NotFound from './components/NotFound';
import IndustryDetailPage from './components/IndustryDetailPage';

const HomePage = () => (
  <>
    <div id="home"><Hero /></div>
    <div id="about"><AboutSection /></div>
    <div id="capabilities"><ServicesSection /></div>
    <div id="why-barter"><ProcessSection /></div>
    <div id="industry-map"><IndustryCityMap /></div>
    <div id="campaigns"><CampaignsEditorial /></div>
    <div id="clients"><OurClients /></div>
    <div id="contact"><ContactSection /></div>
  </>
);

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className="relative min-h-screen text-slate-900 font-sans antialiased selection:bg-amber-500/30 selection:text-slate-900">
      {/* Scroll Handler */}
      <ScrollToHash />

      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main Content Areas */}
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/industry/:id" element={<IndustryDetailPage />} />
          <Route path="/prototype" element={<PrototypeLanding />} />
          <Route path="/dashboard" element={<DashboardApp />} />
          <Route path="/visualizer" element={<MatrixSolver />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Standard Footer Section */}
      <Footer />

      {/* Global Ambient Background — Base Layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#FFFBEB]">
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}
        />
      </div>

      {/* Custom Cursor always on top, rendered last for stacking */}
      <CustomCursor />
    </div>
  );
}

export default App;
