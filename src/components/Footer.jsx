import { Github, Instagram, Linkedin, MessageCircle, Mail, MapPin, Send } from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';
import { LogoKujang } from './Navbar.jsx';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Portfolio Proyek', href: '#portfolio' },
  { label: 'Paket Harga', href: '#pricing' },
  { label: 'Kontak', href: '#contact' },
];

const services = [
  'Website Kilat UMKM & Landing Page',
  'Sistem Informasi & Web App Custom',
  'Dashboard Admin & Kasir POS',
  'WhatsApp CRM & Automasi Bisnis',
  'Solusi Database & Integrasi QRIS',
  'Konsultasi IT & Maintenance'
];

export default function Footer() {
  const waUrl = createWhatsappUrl('Halo AMP Pedia, saya ingin tanya informasi seputar layanan software house.');

  return (
    <footer className="border-t border-stone-800 bg-stone-950 px-5 py-14 text-white sm:px-8 lg:px-12">
      <div className="container-max">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <LogoKujang textDark={false} />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-stone-400">
              AMP Pedia adalah software house dan studio digital terpercaya yang berfokus pada kecepatan pengerjaan, desain clean profesional, dan sistem siap pakai untuk akselerasi bisnis Anda.
            </p>
            {/* Social Media Links */}
            <div className="mt-5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2.5">Media Sosial Resmi</p>
              <div className="flex items-center gap-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/amp_pedia?vrfl=OTRxcnJvMG1lNGZ6"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-800 bg-stone-900 text-stone-400 transition hover:border-[#E1306C]/50 hover:bg-[#E1306C] hover:text-white"
                  title="Instagram @amp_pedia"
                >
                  <Instagram size={15} />
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@amppedia?_r=1&_t=ZS-9AOIyDTmh6u"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-800 bg-stone-900 text-stone-400 transition hover:border-white/50 hover:bg-black hover:text-white"
                  title="TikTok @amppedia"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.02 3.25-1.54 3.28-3.35.03-3.87.01-7.74.01-11.61z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61579668267113"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-800 bg-stone-900 text-stone-400 transition hover:border-[#1877F2]/50 hover:bg-[#1877F2] hover:text-white"
                  title="Facebook AMP Pedia"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Telegram */}
                <a
                  href="https://t.me/punyaamad"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-800 bg-stone-900 text-stone-400 transition hover:border-[#229ED9]/50 hover:bg-[#229ED9] hover:text-white"
                  title="Telegram @punyaamad"
                >
                  <Send size={15} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">Menu Cepat</h3>
            <div className="mt-4 space-y-2.5 text-xs">
              {quickLinks.map((item) => (
                <a key={item.label} href={item.href} className="block text-stone-400 transition hover:text-amber-400">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">Layanan Unggulan</h3>
            <div className="mt-4 space-y-2.5 text-xs text-stone-400">
              {services.map((item) => (
                <a key={item} href="#services" className="block transition hover:text-amber-400">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">Kontak Resmi</h3>
            <div className="mt-4 space-y-3 text-xs text-stone-400">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-amber-400" /> hello@amppedia.id
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle size={14} className="text-amber-400" /> +62 856-9435-2247
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-400" /> Karawang, Jawa Barat, Indonesia
              </p>
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3.5 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-amber-400"
                >
                  Chat WhatsApp Kami
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone-800 pt-6 text-xs text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 AMP Pedia Studio (Ahmad Mayiludin). All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/AhmadMayiludin" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-amber-400">
              <Github size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
