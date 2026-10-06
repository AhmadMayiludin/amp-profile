import {
  Globe,
  LayoutDashboard,
  Bot,
  Check,
  ArrowRight
} from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { createWhatsappUrl } from '../data/constants.js';

export const mainServices = [
  {
    title: 'Website Kilat UMKM & Bisnis',
    badge: 'Paling Diminati',
    icon: Globe,
    description: 'Solusi website cepat selesai untuk profil usaha, kuliner/resto, jasa profesional, dan landing page penjualan dengan tampilan modern dan responsif.',
    features: ['Domain & Hosting Siap Pakai', 'Terintegrasi Tombol WhatsApp', 'Desain Clean (Anti-Template AI)', 'SEO Cepat & Mobile Friendly'],
    highlight: 'Selesai dalam 24 - 48 Jam'
  },
  {
    title: 'Sistem Informasi & Web App Custom',
    badge: 'Skala Menengah',
    icon: LayoutDashboard,
    description: 'Pembuatan aplikasi web khusus untuk kebutuhan operasional bisnis seperti dashboard admin, manajemen data, kasir POS, atau platform belajar.',
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
    <section id="services" className="section-padding bg-stone-50/70">
      <div className="container-max">
        <SectionHeader
          title="Layanan Utama AMP Pedia"
          subtitle="Solusi rekayasa perangkat lunak dan desain digital yang langsung berdampak nyata pada omzet dan kredibilitas bisnis Anda."
        />

        <div className="reveal grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service) => {
            const Icon = service.icon;
            const waUrl = createWhatsappUrl(`Halo AMP Pedia, saya tertarik dengan layanan ${service.title}. Mau konsultasi detailnya.`);
            return (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100/70 text-amber-800 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200/60">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-stone-900 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {service.description}
                  </p>

                  <div className="my-5 border-t border-stone-100 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">Keunggulan:</p>
                    <ul className="space-y-2.5">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs font-semibold text-stone-700">
                          <Check size={15} className="text-amber-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <div className="mb-4 text-xs font-bold text-stone-500 flex items-center justify-between">
                    <span>Estimasi Pengerjaan:</span>
                    <span className="text-stone-900 font-black">{service.highlight}</span>
                  </div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 py-3 text-xs font-bold text-white transition duration-200 hover:bg-amber-500 hover:text-slate-950"
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
