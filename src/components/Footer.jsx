import { Github, Instagram, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';

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
              <img src="/logo-amp-pedia-horizontal.svg" alt="AMP Pedia" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-stone-400">
              AMP Pedia adalah software house dan studio digital terpercaya yang berfokus pada kecepatan pengerjaan, desain clean profesional, dan sistem siap pakai untuk akselerasi bisnis Anda.
            </p>
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
                <MessageCircle size={14} className="text-amber-400" /> +62 877-9267-3907
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
