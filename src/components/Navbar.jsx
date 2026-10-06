import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Paket Harga', href: '#pricing' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const ctaUrl = createWhatsappUrl('Halo AMP Pedia, saya ingin konsultasi tentang kebutuhan project digital.');

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-stone-200/80 bg-white/95 shadow-sm backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-max flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3" aria-label="AMP Pedia home">
          <img src="/logo-amp-pedia-horizontal.svg" alt="AMP Pedia" className="h-10 w-auto" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-bold transition ${active === item.href.slice(1) ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'}`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-amber-500 transition-all ${active === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn-primary" href={ctaUrl} target="_blank" rel="noreferrer">
            Konsultasi Gratis <ArrowRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-stone-200 bg-white text-stone-900 shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-stone-100 bg-white px-5 pb-5 shadow-xl lg:hidden">
          <div className="container-max flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-bold ${active === item.href.slice(1) ? 'bg-amber-50 text-amber-700' : 'text-stone-700'}`}
              >
                {item.label}
              </a>
            ))}
            <a className="btn-primary mt-2 w-full" href={ctaUrl} target="_blank" rel="noreferrer">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
