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
  FileCode2
} from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';

export function LogoKujang() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-[#FFFEFA] border-2 border-[#191410] shadow-[2px_2px_0px_#191410] p-1.5 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 512 512" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="navKujangG1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="navKujangS1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>
          <g transform="translate(40, 30) scale(0.85)">
            <path d="M 236 64 L 64 440 H 138 L 196 308 H 272 L 244 244 H 224 L 256 168 L 236 64 Z" fill="url(#navKujangS1)" />
            <path d="M 256 64 C 290 120 380 180 396 270 C 408 340 376 400 326 440 L 372 440 C 430 390 460 310 440 230 C 418 140 324 76 256 64 Z" fill="url(#navKujangG1)" />
            <path d="M 330 140 C 370 150 400 180 410 210 C 390 200 360 190 345 195 C 360 175 350 155 330 140 Z" fill="url(#navKujangG1)" />
            <path d="M 370 230 C 410 250 430 290 435 330 C 415 315 390 310 375 318 C 395 290 390 260 370 230 Z" fill="url(#navKujangG1)" />
            <path d="M 160 348 H 340 L 320 392 H 140 Z" fill="url(#navKujangS1)" />
            <circle cx="270" cy="180" r="12" fill="#D97706" />
            <circle cx="295" cy="225" r="13" fill="#D97706" />
            <circle cx="318" cy="275" r="14" fill="#D97706" />
            <circle cx="335" cy="330" r="15" fill="#D97706" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-extrabold text-base text-[#191410] tracking-tight">
          AMP <span className="text-[#D97706]">PEDIA</span>
        </span>
        <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#665E55] mt-0.5">
          AGENCY & SOFTWARE
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
  { id: 'corporate', name: 'B2B SaaS & Enterprise', icon: Building2, desc: 'Multi-Tenant, Recurring Billing & RBAC' },
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
        scrolled ? 'border-b-2 border-[#191410] bg-[#F5F0E3]/95 backdrop-blur-md shadow-[0_4px_0_#191410]' : 'bg-[#F5F0E3]/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-max flex h-20 items-center justify-between">
        <button
          type="button"
          onClick={() => {
            closeDropdown();
            onNavigateHome();
          }}
          className="flex items-center text-left focus:outline-none cursor-pointer"
        >
          <LogoKujang />
        </button>

        {/* Desktop Tactile Pill Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {/* 1. Aplikasi Mega Menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('apps')}
              className={`flex items-center gap-1.5 rounded-xl border-2 border-[#191410] px-4 py-2 text-xs font-extrabold transition shadow-[2px_2px_0px_#191410] cursor-pointer ${
                activeDropdown === 'apps' ? 'bg-[#D97706] text-white' : 'bg-[#FFFEFA] text-[#191410] hover:bg-[#F5F0E3]'
              }`}
            >
              <span>Aplikasi</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'apps' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'apps' && (
              <div className="absolute left-0 top-full mt-3 w-84 rounded-2xl border-2 border-[#191410] bg-[#FFFEFA] p-3 shadow-[6px_6px_0px_#191410] animate-in fade-in zoom-in-95 duration-150 z-50">
                <div className="space-y-1">
                  {appsDropdown.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleAppClick(item.id)}
                        className="group flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition hover:bg-[#F5F0E3] cursor-pointer"
                      >
                        <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#F5F0E3] text-[#191410] border border-[#191410] group-hover:bg-[#D97706] group-hover:text-white transition">
                          <Icon size={17} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-[#191410] group-hover:text-[#D97706]">{item.title}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-[#665E55]">{item.desc}</p>
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
              className={`flex items-center gap-1.5 rounded-xl border-2 border-[#191410] px-4 py-2 text-xs font-extrabold transition shadow-[2px_2px_0px_#191410] cursor-pointer ${
                activeDropdown === 'industries' ? 'bg-[#D97706] text-white' : 'bg-[#FFFEFA] text-[#191410] hover:bg-[#F5F0E3]'
              }`}
            >
              <span>Industri</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'industries' && (
              <div className="absolute -left-16 top-full mt-3 w-[460px] rounded-2xl border-2 border-[#191410] bg-[#FFFEFA] p-4 shadow-[6px_6px_0px_#191410] animate-in fade-in zoom-in-95 duration-150 z-50">
                <div className="mb-2 px-1 text-[11px] font-black uppercase tracking-wider text-[#665E55]">
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
                        className="group flex w-full items-start gap-2.5 rounded-xl p-2.5 text-left transition hover:bg-[#F5F0E3] cursor-pointer"
                      >
                        <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#F5F0E3] text-[#191410] border border-[#191410] group-hover:bg-[#D97706] group-hover:text-white transition">
                          <Icon size={15} />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-[#191410] group-hover:text-[#D97706] leading-none">{ind.name}</p>
                          <p className="mt-1 text-[10px] text-[#665E55] leading-tight">{ind.desc}</p>
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
            className="rounded-xl border-2 border-[#191410] bg-[#FFFEFA] px-4 py-2 text-xs font-extrabold text-[#191410] transition hover:bg-[#F5F0E3] shadow-[2px_2px_0px_#191410] cursor-pointer"
          >
            Harga
          </button>

          {/* 4. Bantuan Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('help')}
              className={`flex items-center gap-1.5 rounded-xl border-2 border-[#191410] px-4 py-2 text-xs font-extrabold transition shadow-[2px_2px_0px_#191410] cursor-pointer ${
                activeDropdown === 'help' ? 'bg-[#D97706] text-white' : 'bg-[#FFFEFA] text-[#191410] hover:bg-[#F5F0E3]'
              }`}
            >
              <span>Bantuan</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'help' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'help' && (
              <div className="absolute right-0 top-full mt-3 w-80 rounded-2xl border-2 border-[#191410] bg-[#FFFEFA] p-3 shadow-[6px_6px_0px_#191410] animate-in fade-in zoom-in-95 duration-150 z-50">
                <div className="space-y-1">
                  {helpDropdown.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => handleSectionClick(item.section)}
                        className="group flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition hover:bg-[#F5F0E3] cursor-pointer"
                      >
                        <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#F5F0E3] text-[#191410] border border-[#191410] group-hover:bg-[#D97706] group-hover:text-white transition">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-[#191410] group-hover:text-[#D97706]">{item.title}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-[#665E55]">{item.desc}</p>
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
            className="rounded-xl border-2 border-[#191410] bg-[#FFFEFA] px-4 py-2 text-xs font-extrabold text-[#191410] transition hover:bg-[#F5F0E3] shadow-[2px_2px_0px_#191410] cursor-pointer"
          >
            Tentang
          </button>
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <button
            type="button"
            onClick={() => handleSectionClick('calculator')}
            className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#191410] bg-[#FFFEFA] px-4 py-2.5 text-xs font-extrabold text-[#191410] shadow-[2px_2px_0px_#191410] transition hover:bg-[#F5F0E3] hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer"
          >
            <Calculator size={14} className="text-[#D97706]" />
            <span>Kalkulator</span>
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#191410] bg-[#D97706] px-5 py-2.5 text-xs font-black text-white shadow-[3px_3px_0px_#191410] transition hover:bg-[#F2721C] hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            Konsultasi Proyek
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex size-10 items-center justify-center rounded-xl border-2 border-[#191410] bg-[#FFFEFA] text-[#191410] shadow-[2px_2px_0px_#191410] transition lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Accordion Menu */}
      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-b-2 border-[#191410] bg-[#F5F0E3] p-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-wider text-[#D97706]">Pilihan Aplikasi</p>
              <div className="mt-2 grid gap-1 pl-2">
                {appsDropdown.map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => handleAppClick(app.id)}
                    className="text-left py-1 text-xs font-bold text-[#191410] hover:text-[#D97706]"
                  >
                    • {app.title}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-wider text-[#D97706]">Sektor Industri</p>
              <div className="mt-2 grid grid-cols-2 gap-1 pl-2">
                {industriesDropdown.map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => handleIndustryClick(ind.id)}
                    className="text-left py-1 text-xs font-bold text-[#191410] hover:text-[#D97706]"
                  >
                    • {ind.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t-2 border-[#191410] pt-3">
              <button type="button" onClick={() => handleSectionClick('pricing')} className="text-xs font-extrabold text-[#191410]">
                Paket Harga
              </button>
              <button type="button" onClick={() => handleSectionClick('about')} className="text-xs font-extrabold text-[#191410]">
                Tentang Kami
              </button>
              <button type="button" onClick={() => handleSectionClick('faq')} className="text-xs font-extrabold text-[#191410]">
                Bantuan & FAQ
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleSectionClick('calculator')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#191410] bg-[#FFFEFA] py-3 text-xs font-extrabold text-[#191410] shadow-[2px_2px_0px_#191410]"
              >
                <Calculator size={15} className="text-[#D97706]" />
                Simulasi di Kalkulator Biaya
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeDropdown}
                className="btn-primary justify-center text-white"
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
