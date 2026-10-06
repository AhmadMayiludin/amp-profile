import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PartnerLogos from './components/PartnerLogos.jsx';
import IndustrySolutions from './components/IndustrySolutions.jsx';
import Services from './components/Services.jsx';
import CostCalculator from './components/CostCalculator.jsx';
import ProductArchitecture from './components/ProductArchitecture.jsx';
import Portfolio from './components/Portfolio.jsx';
import Statistics from './components/Statistics.jsx';
import Pricing from './components/Pricing.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import DetailView from './components/DetailView.jsx';
import { industryPages, applicationPages } from './data/detailPages.js';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeDetail, setActiveDetail] = useState(null); // { type: 'industry' | 'app', data: {...} }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectApp = (appId) => {
    const appData = applicationPages[appId];
    if (appData) {
      setActiveDetail({ type: 'app', data: appData });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectIndustry = (indId) => {
    const indData = industryPages[indId];
    if (indData) {
      setActiveDetail({ type: 'industry', data: indData });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateHome = () => {
    setActiveDetail(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (secId) => {
    setActiveDetail(null);
    setTimeout(() => {
      const el = document.getElementById(secId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
        <div className="relative flex flex-col items-center">
          <svg viewBox="0 0 512 512" className="h-16 w-16 animate-pulse drop-shadow-md">
            <defs>
              <linearGradient id="splashGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>
            <g transform="translate(40, 30) scale(0.85)">
              <path d="M 236 64 L 64 440 H 138 L 196 308 H 272 L 244 244 H 224 L 256 168 L 236 64 Z" fill="#0F172A" />
              <path d="M 256 64 C 290 120 380 180 396 270 C 408 340 376 400 326 440 L 372 440 C 430 390 460 310 440 230 C 418 140 324 76 256 64 Z" fill="url(#splashGold)" />
              <circle cx="270" cy="180" r="12" fill="#F59E0B" />
              <circle cx="295" cy="225" r="13" fill="#F59E0B" />
              <circle cx="318" cy="275" r="14" fill="#F59E0B" />
              <circle cx="335" cy="330" r="15" fill="#F59E0B" />
            </g>
          </svg>
          <div className="mt-4 flex items-center gap-1.5">
            <span className="text-base font-black tracking-tight text-stone-900">
              AMP <span className="text-amber-500">PEDIA</span>
            </span>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-xs font-bold text-stone-400">Memuat ekosistem...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
      <Navbar 
        onSelectApp={handleSelectApp}
        onSelectIndustry={handleSelectIndustry}
        onNavigateHome={handleNavigateHome}
        onNavigateSection={handleNavigateSection}
      />
      
      <main>
        {activeDetail ? (
          <DetailView 
            data={activeDetail.data} 
            onBack={handleNavigateHome}
            onNavigate={handleNavigateSection}
          />
        ) : (
          <>
            <Hero />
            <PartnerLogos />
            <IndustrySolutions onSelectIndustry={handleSelectIndustry} />
            <Services onSelectApp={handleSelectApp} />
            <CostCalculator />
            <ProductArchitecture />
            <Portfolio />
            <Statistics />
            <Pricing />
            <About />
            <Contact />
          </>
        )}
      </main>

      <Footer onSelectApp={handleSelectApp} onSelectIndustry={handleSelectIndustry} onNavigateSection={handleNavigateSection} />
    </div>
  );
}
