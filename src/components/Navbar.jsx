import { useEffect, useState, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Calculator,
  Laptop, 
  Store, 
  Bot, 
  Database, 
  Utensils, 
  ShoppingBag, 
  Building2, 
  GraduationCap, 
  Car, 
  Stethoscope,
  HelpCircle,
  ShieldCheck,
  FileCode2,
  Home
} from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';

export function LogoKujang({ textDark = true }) {
  return (
    <div className="flex items-center gap-3">
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
        <span className="mt-0.5 text-[9px] font-bold tracking-widest uppercase text-stone-400">
          SOFTWARE HOUSE
        </span>
      </div>
    </div>
  );
}

const appsDropdown = [
  {
    id: 'web-landing',
    title: 'Website Bisnis & UMKM Kilat',
    desc: 'Landing page cepat 48 jam, mobile-friendly & SEO optimized.',
    icon: Laptop,
  },
  {
    id: 'web-app',
    title: 'Custom Web App & Sistem Informasi',
    desc: 'Sistem operasional multi-role berbasis Laravel & React.',
    icon: Database,
  },
  {
    id: 'pos-kasir',
    title: 'Kasir POS & Dashboard Admin',
    desc: 'Manajemen transaksi kasir thermal, stok gudang & audit laba.',
    icon: Store,
  },
  {
    id: 'wa-automation',
    title: 'WhatsApp Automation & CRM',
    desc: 'Bot notifikasi otomatis, reminder tagihan & broadcast pesan.',
    icon: Bot,
  },
];

const industriesDropdown = [
  { id: 'fnb', name: 'F&B & Cafe / Resto', icon: Utensils, desc: 'Self-Order Barcode QRIS & Kitchen Display' },
  { id: 'retail', name: 'Retail & Toko Grosir', icon: ShoppingBag, desc: 'Kasir Multi-Cabang & Multi-Gudang' },
  { id: 'corporate', name: 'Perusahaan & B2B', icon: Building2, desc: 'Quotation Portal & HRIS Absensi' },
  { id: 'education', name: 'Sekolah & Bimbel', icon: GraduationCap, desc: 'PPDB Online, CBT & Tagihan SPP' },
  { id: 'automotive', name: 'Bengkel & Servis', icon: Car, desc: 'Riwayat Servis & Reminder WhatsApp' },
  { id: 'clinic', name: 'Klinik & Dokter', icon: Stethoscope, desc: 'Rekam Medis Elektronik & Antrean' },
];

const helpDropdown = [
  { section: 'calculator', title: 'Kalkulator Biaya Custom', desc: 'Simulasikan estimasi biaya sistem Anda seketika.', icon: Calculator },
  { section: 'architecture', title: 'Arsitektur & Keamanan', desc: 'Pelajari standar teknologi dan kepemilikan source code.', icon: ShieldCheck },
  { section: 'faq', title: 'FAQ & Pertanyaan Umum', desc: 'Jawaban lengkap seputar garansi, revisi, dan server.', icon: HelpCircle },
  { section: 'portfolio', title: 'Portfolio Proyek', desc: 'Lihat studi kasus sistem dan live demo yang sudah dibuat.', icon: FileCode2 },
];

export default function Navbar({ onSelectApp, onSelectIndustry, onNavigateHome, onNavigateSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setActiveDropdown(null);
    };
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setOpen(false);
  };

  const handleAppClick = (appId) => {
    closeDropdown();
    onSelectApp(appId);
  };

  const handleIndustryClick = (indId) => {
    closeDropdown();
    onSelectIndustry(indId);
  };

  const handleSectionClick = (secId) => {
    closeDropdown();
    onNavigateSection(secId);
  };

  const waUrl = createWhatsappUrl('Halo AMP Pedia Agency, saya ingin konsultasi seputar pembuatan sistem & aplikasi.');

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-stone-200/80 bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-max flex h-20 items-center justify-between">
        <button
          type="button"
          onClick={() => {
            closeDropdown();
            onNavigateHome();
          }}
          className="flex items-center text-left focus:outline-none"
        >
          <LogoKujang textDark={true} />
        </button>

        {/* Desktop Omnia-Style Pill Navigation */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {/* 1. Aplikasi Mega Menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('apps')}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black transition ${
                activeDropdown === 'apps' ? 'bg-stone-100 text-amber-600' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span>Aplikasi</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'apps' ? 'rotate-180 text-amber-600' : 'text-stone-400'}`} />
            </button>

            {activeDropdown === 'apps' && (
              <div className="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-stone-200 bg-white p-3 shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-150">
                <div className="space-y-1">
                  {appsDropdown.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleAppClick(item.id)}
                        className="group flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition hover:bg-stone-50"
                      >
                        <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                          <Icon size={17} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-stone-900 group-hover:text-amber-600">{item.title}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-stone-500">{item.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 2. Industri Mega Menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('industries')}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black transition ${
                activeDropdown === 'industries' ? 'bg-stone-100 text-amber-600' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span>Industri</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-amber-600' : 'text-stone-400'}`} />
            </button>

            {activeDropdown === 'industries' && (
              <div className="absolute -left-20 top-full mt-3 w-[460px] rounded-2xl border border-stone-200 bg-white p-4 shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-150">
                <div className="mb-2 px-1 text-[11px] font-black uppercase tracking-wider text-stone-400">
                  Pilihan Solusi Sektor Bisnis
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {industriesDropdown.map((ind) => {
                    const Icon = ind.icon;
                    return (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => handleIndustryClick(ind.id)}
                        className="group flex w-full items-start gap-2.5 rounded-xl p-2.5 text-left transition hover:bg-amber-50/60"
                      >
                        <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-stone-100 text-stone-700 group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                          <Icon size={15} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-stone-900 group-hover:text-amber-700 leading-none">{ind.name}</p>
                          <p className="mt-1 text-[10px] text-stone-500 leading-tight">{ind.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 3. Harga Direct Link */}
          <button
            type="button"
            onClick={() => handleSectionClick('pricing')}
            className="rounded-full px-4 py-2 text-xs font-black text-stone-700 transition hover:bg-stone-100"
          >
            Harga
          </button>

          {/* 4. Bantuan Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('help')}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black transition ${
                activeDropdown === 'help' ? 'bg-stone-100 text-amber-600' : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span>Bantuan</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'help' ? 'rotate-180 text-amber-600' : 'text-stone-400'}`} />
            </button>

            {activeDropdown === 'help' && (
              <div className="absolute right-0 top-full mt-3 w-80 rounded-2xl border border-stone-200 bg-white p-3 shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-150">
                <div className="space-y-1">
                  {helpDropdown.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => handleSectionClick(item.section)}
                        className="group flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition hover:bg-stone-50"
                      >
                        <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-stone-100 text-stone-700 group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-stone-900 group-hover:text-amber-600">{item.title}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-stone-500">{item.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 5. Tentang Kami Link */}
          <button
            type="button"
            onClick={() => handleSectionClick('about')}
            className="rounded-full px-4 py-2 text-xs font-black text-stone-700 transition hover:bg-stone-100"
          >
            Tentang
          </button>
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <button
            type="button"
            onClick={() => handleSectionClick('calculator')}
            className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-xs font-bold text-stone-800 transition hover:bg-stone-100"
          >
            <Calculator size={13} className="text-amber-500" />
            <span>Kalkulator</span>
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-amber-500 px-5 py-2.5 text-xs font-black text-slate-950 shadow-md shadow-amber-500/20 transition hover:bg-amber-400"
          >
            Konsultasi Proyek
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-stone-200 text-stone-700 transition hover:bg-stone-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Accordion Menu */}
      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-b border-stone-200 bg-white p-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-wider text-amber-600">Pilihan Aplikasi</p>
              <div className="mt-2 grid gap-1 pl-2">
                {appsDropdown.map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => handleAppClick(app.id)}
                    className="text-left py-1 text-xs font-bold text-stone-700 hover:text-amber-600"
                  >
                    • {app.title}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-wider text-amber-600">Sektor Industri</p>
              <div className="mt-2 grid grid-cols-2 gap-1 pl-2">
                {industriesDropdown.map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => handleIndustryClick(ind.id)}
                    className="text-left py-1 text-xs font-bold text-stone-700 hover:text-amber-600"
                  >
                    • {ind.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-stone-100 pt-3">
              <button type="button" onClick={() => handleSectionClick('pricing')} className="text-xs font-black text-stone-800">
                Paket Harga
              </button>
              <button type="button" onClick={() => handleSectionClick('about')} className="text-xs font-black text-stone-800">
                Tentang Kami
              </button>
              <button type="button" onClick={() => handleSectionClick('faq')} className="text-xs font-black text-stone-800">
                FAQ & Bantuan
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleSectionClick('calculator')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50 py-3 text-xs font-bold text-stone-800"
              >
                <Calculator size={15} className="text-amber-500" />
                Simulasi di Kalkulator Biaya
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeDropdown}
                className="btn-primary justify-center"
              >
                Konsultasi WhatsApp
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
