import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PartnerLogos from './components/PartnerLogos.jsx';
import IndustrySolutions from './components/IndustrySolutions.jsx';
import Services from './components/Services.jsx';
import CostCalculator from './components/CostCalculator.jsx';
import ProductArchitecture from './components/ProductArchitecture.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import TechnologyStack from './components/TechnologyStack.jsx';
import Portfolio from './components/Portfolio.jsx';
import WorkProcess from './components/WorkProcess.jsx';
import Statistics from './components/Statistics.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);

    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.1 },
    );
    nodes.forEach((node) => observer.observe(node));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white transition-opacity duration-500">
        <div className="relative mb-6">
          <div className="flex size-20 items-center justify-center rounded-3xl border border-stone-200 bg-amber-50 shadow-lg shadow-amber-500/10">
            <svg viewBox="0 0 512 512" className="size-12">
              <defs>
                <linearGradient id="loadGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24"/>
                  <stop offset="100%" stopColor="#D97706"/>
                </linearGradient>
              </defs>
              <g transform="scale(0.95) translate(10, 10)">
                <path d="M 236 64 L 64 440 H 138 L 196 308 H 272 L 244 244 H 224 L 256 168 L 236 64 Z" fill="#221F1C" />
                <path d="M 256 64 C 290 120 380 180 396 270 C 408 340 376 400 326 440 L 372 440 C 430 390 460 310 440 230 C 418 140 324 76 256 64 Z" fill="url(#loadGold)" />
                <circle cx="270" cy="180" r="14" fill="#F59E0B" />
                <circle cx="295" cy="225" r="15" fill="#F59E0B" />
                <circle cx="318" cy="275" r="16" fill="#F59E0B" />
                <circle cx="335" cy="330" r="17" fill="#F59E0B" />
              </g>
            </svg>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-black tracking-tight text-stone-900">
            AMP <span className="text-amber-600">PEDIA</span> STUDIO
          </h2>
          <p className="mt-1 text-xs font-semibold text-stone-500 tracking-wider">
            SOFTWARE HOUSE & DIGITAL AGENCY
          </p>
        </div>

        <div className="mt-6 flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="size-2 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="size-2 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '300ms' }} />
          <span className="size-2 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '450ms' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <PartnerLogos />
        <IndustrySolutions />
        <Services />
        <CostCalculator />
        <ProductArchitecture />
        <WhyChooseUs />
        <TechnologyStack />
        <Portfolio />
        <WorkProcess />
        <Statistics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
