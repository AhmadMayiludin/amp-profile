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

export function AmpSymbolLoader({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="loadSymG1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="loadSymS1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <g transform="translate(40, 30) scale(0.85)">
        <path d="M 236 64 L 64 440 H 138 L 196 308 H 272 L 244 244 H 224 L 256 168 L 236 64 Z" fill="url(#loadSymS1)" />
        <path d="M 256 64 C 290 120 380 180 396 270 C 408 340 376 400 326 440 L 372 440 C 430 390 460 310 440 230 C 418 140 324 76 256 64 Z" fill="url(#loadSymG1)" />
        <path d="M 330 140 C 370 150 400 180 410 210 C 390 200 360 190 345 195 C 360 175 350 155 330 140 Z" fill="url(#loadSymG1)" />
        <path d="M 370 230 C 410 250 430 290 435 330 C 415 315 390 310 375 318 C 395 290 390 260 370 230 Z" fill="url(#loadSymG1)" />
        <path d="M 160 348 H 340 L 320 392 H 140 Z" fill="url(#loadSymS1)" />
        <circle cx="270" cy="180" r="10" fill="#D97706" />
        <circle cx="295" cy="225" r="11" fill="#D97706" />
        <circle cx="318" cy="275" r="12" fill="#D97706" />
        <circle cx="335" cy="330" r="13" fill="#D97706" />
      </g>
    </svg>
  );
}

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeDetail, setActiveDetail] = useState(null); // { type: 'industry' | 'app', data: {...} }

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  // Smooth Page Transition Handler
  const triggerTransition = (actionCallback) => {
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => {
      actionCallback();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 280);
  };

  const handleSelectApp = (appId) => {
    const appData = applicationPages[appId];
    if (appData) {
      triggerTransition(() => {
        setActiveDetail({ type: 'app', data: appData });
      });
    }
  };

  const handleSelectIndustry = (indId) => {
    const indData = industryPages[indId];
    if (indData) {
      triggerTransition(() => {
        setActiveDetail({ type: 'industry', data: indData });
      });
    }
  };

  const handleNavigateHome = () => {
    if (activeDetail) {
      triggerTransition(() => {
        setActiveDetail(null);
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (secId) => {
    if (activeDetail) {
      triggerTransition(() => {
        setActiveDetail(null);
        setTimeout(() => {
          const el = document.getElementById(secId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    } else {
      const el = document.getElementById(secId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  if (initialLoading) {
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F5F0E3]">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#FFFEFA] border-2 border-[#191410] rounded-2xl flex items-center justify-center p-3 mb-3 shadow-[4px_4px_0px_#191410]">
            <AmpSymbolLoader className="w-full h-full" />
          </div>

          <h2 className="font-extrabold text-2xl text-[#191410] tracking-tight">
            AMP <span className="text-[#D97706]">PEDIA</span>
          </h2>
          <p className="text-[10px] font-bold tracking-widest uppercase text-[#8C827A] mt-0.5 mb-4">
            AGENCY & SOFTWARE HOUSE
          </p>

          <div className="flex items-center justify-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#191410] animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0s' }}></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97706] animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0.15s' }}></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#F2721C] animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0.3s' }}></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97706] animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0.45s' }}></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#191410] animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0.6s' }}></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F0E3] text-[#191410] selection:bg-[#D97706] selection:text-white font-sans antialiased relative">
      
      {/* Smooth Page Switcher Loading Overlay */}
      <div 
        className={`fixed inset-0 z-[99998] flex items-center justify-center bg-[#F5F0E3]/90 backdrop-blur-sm transition-all duration-300 pointer-events-none ${
          isTransitioning ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center text-center transform scale-95 transition-transform duration-300">
          <div className="w-14 h-14 bg-[#FFFEFA] border-2 border-[#191410] rounded-2xl flex items-center justify-center p-2.5 mb-2.5 shadow-[4px_4px_0px_#191410] animate-pulse">
            <AmpSymbolLoader className="w-full h-full" />
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <span className="w-2 h-2 rounded-full bg-[#191410] animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0s' }}></span>
            <span className="w-2 h-2 rounded-full bg-[#D97706] animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0.12s' }}></span>
            <span className="w-2 h-2 rounded-full bg-[#F2721C] animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0.24s' }}></span>
            <span className="w-2 h-2 rounded-full bg-[#D97706] animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0.36s' }}></span>
            <span className="w-2 h-2 rounded-full bg-[#191410] animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0.48s' }}></span>
          </div>
          <p className="text-[10px] font-black tracking-widest uppercase text-[#191410] mt-3">
            MEMUAT HALAMAN...
          </p>
        </div>
      </div>

      <Navbar 
        onSelectApp={handleSelectApp}
        onSelectIndustry={handleSelectIndustry}
        onNavigateHome={handleNavigateHome}
        onNavigateSection={handleNavigateSection}
      />
      
      <main className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
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
