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

export function LogoKujang({ className = "h-8 w-auto", textDark = true }) {
  return (
    <div className="flex items-center gap-3">
      {/* Kujang Emas Pasundan Symbol */}
      <svg viewBox="0 0 512 512" className="h-9 w-9 shrink-0 drop-shadow-sm">
        <defs>
          <linearGradient id="kujangNavbarGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="kujangNavbarBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={textDark ? "#1E293B" : "#F8FAFC"} />
            <stop offset="100%" stopColor={textDark ? "#0F172A" : "#E2E8F0"} />
          </linearGradient>
        </defs>
        <g transform="translate(40, 30) scale(0.85)">
          <path d="M 236 64 L 64 440 H 138 L 196 308 H 272 L 244 244 H 224 L 256 168 L 236 64 Z" fill="url(#kujangNavbarBase)" />
          <path d="M 256 64 C 290 120 380 180 396 270 C 408 340 376 400 326 440 L 372 440 C 430 390 460 310 440 230 C 418 140 324 76 256 64 Z" fill="url(#kujangNavbarGold)" />
          <path d="M 330 140 C 370 150 400 180 410 210 C 390 200 360 190 345 195 C 360 175 350 155 330 140 Z" fill="url(#kujangNavbarGold)" />
          <path d="M 370 230 C 410 250 430 290 435 330 C 415 315 390 310 375 318 C 395 290 390 260 370 230 Z" fill="url(#kujangNavbarGold)" />
          <path d="M 160 348 H 340 L 320 392 H 140 Z" fill="url(#kujangNavbarBase)" />
          <circle cx="270" cy="180" r="12" fill="#F59E0B" />
          <circle cx="295" cy="225" r="13" fill="#F59E0B" />
          <circle cx="318" cy="275" r="14" fill="#F59E0B" />
          <circle cx="335" cy="330" r="15" fill="#F59E0B" />
        </g>
      </svg>
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`text-base font-black tracking-tight ${textDark ? 'text-stone-900' : 'text-white'}`}>
            AMP <span className="text-amber-500">PEDIA</span>
          </span>
          <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-amber-600 border border-amber-500/30">
            AGENCY
          </span>
        </div>
        <span className={`mt-0.5 text-[9px] font-bold tracking-widest uppercase ${textDark ? 'text-stone-400' : 'text-stone-400'}`}>
          SOFTWARE HOUSE
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waUrl = createWhatsappUrl('Halo AMP Pedia Agency, saya ingin konsultasi seputar pembuatan sistem & website.');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-stone-200/80 bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-max flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center">
          <LogoKujang textDark={true} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold text-stone-600 transition hover:text-amber-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-stone-200 text-stone-700 transition hover:bg-stone-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-b border-stone-200 bg-white p-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-bold text-stone-700 transition hover:text-amber-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              Konsultasi WhatsApp
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
