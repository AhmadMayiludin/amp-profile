import {
  Globe,
  LayoutDashboard,
  Bot,
  Layers,
  ShoppingBag,
  Sparkles,
  Check,
  ArrowRight
} from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { createWhatsappUrl } from '../data/constants.js';

export const mainServices = [
  {
    title: 'Website Kilat UMKM & Bisnis',
    badge: 'Paling Populer',
    icon: Globe,
    description: 'Solusi website cepat selesai untuk profil usaha, kedai/resto, jasa profesional, dan landing page penjualan dengan tampilan modern dan mobile-friendly.',
    features: ['Domain & Hosting Siap Pakai', 'Terintegrasi Tombol WhatsApp', 'Desain Elegan (Non-Template AI)', 'SEO & Cepat Diakses'],
    highlight: 'Selesai dalam 24 - 48 Jam'
  },
  {
    title: 'Sistem Informasi & Web App Custom',
    badge: 'Skala Menengah',
    icon: LayoutDashboard,
    description: 'Pembuatan aplikasi web khusus untuk kebutuhan operasional bisnis seperti dashboard admin, manajemen data, kasir POS, atau platform bimbingan belajar.',
    features: ['Backend Laravel / Supabase', 'Manajemen Hak Akses Role', 'Database Realtime & Laporan Data', 'Integrasi Pembayaran QRIS'],
    highlight: 'Full Source Code & Database'
  },
  {
    title: 'Automasi Bisnis & WhatsApp CRM',
    badge: 'Efisiensi Tinggi',
    icon: Bot,
    description: 'Otomatisasi alur kerja digital, asisten pesan cepat, serta integrasi pencarian prospek lokal untuk mempermudah closing penjualan bisnis Anda.',
    features: ['WhatsApp Direct Connect', 'Lead Discovery UMKM Lokal', 'Dashboard Manajemen Prospek', 'Hemat Biaya Operasional'],
    highlight: '100% Free Stack Architecture'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50/60">
      <div className="container-max">
        <SectionHeader
          title="Layanan Utama AMP Pedia"
          subtitle="Fokus pada 3 solusi digital nyata yang langsung berdampak pada pertumbuhan dan kredibilitas bisnis Anda."
        />

        <div className="reveal grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const waUrl = createWhatsappUrl(`Halo AMP Pedia, saya tertarik dengan layanan ${service.title}. Mau konsultasi detailnya.`);
            return (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-electric transition-colors group-hover:bg-electric group-hover:text-white">
                      <Icon size={26} />
                    </div>
                    <span className="rounded-full bg-blue-50/80 px-3 py-1 text-xs font-bold text-electric border border-blue-100">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-navy group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <div className="my-5 border-t border-slate-100 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Keunggulan:</p>
                    <ul className="space-y-2.5">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                          <Check size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="mb-4 text-xs font-bold text-slate-500 flex items-center justify-between">
                    <span>Estimasi:</span>
                    <span className="text-navy font-black">{service.highlight}</span>
                  </div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white transition duration-200 group-hover:bg-electric"
                  >
                    Konsultasi Layanan <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
