import { Layers, ShieldCheck, Cpu, Code2, Database, Zap, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { createWhatsappUrl } from '../data/constants.js';

const layers = [
  {
    title: '1. Frontend & Client Presentation',
    desc: 'Tampilan antarmuka berkecepatan tinggi, ramah SEO, dan responsif sempurna di layar smartphone maupun monitor desktop.',
    techs: ['React 19 / Next.js', 'Vite & Tailwind CSS', 'Progressive Web App (PWA)', 'Optimasi Core Web Vitals < 1.2s']
  },
  {
    title: '2. Backend Logic & REST API Engine',
    desc: 'Arsitektur logic terpusat dengan validasi data ketat, queue job asynchronous, dan autentikasi multi-tier role (Admin, Kasir, Owner).',
    techs: ['Laravel REST API (PHP 8.2+)', 'Node.js Express / Fastify', 'OAuth2 & JWT Bearer Token', 'Role-Based Access Control (RBAC)']
  },
  {
    title: '3. Data Layer & Realtime Storage',
    desc: 'Struktur database ternormalisasi untuk menjamin integritas transaksi keuangan, pencatatan audit log, dan backup harian otomatis.',
    techs: ['MySQL / PostgreSQL Relational DB', 'Redis Caching & Session', 'Automated Daily Database Dump', 'Row-Level Security']
  },
  {
    title: '4. WhatsApp & Third-party Integrations',
    desc: 'Jalur penghubung ekosistem bisnis: gateway pembayaran QRIS otomatis, webhook notifikasi WhatsApp, dan sinkronisasi laporan.',
    techs: ['WhatsApp Multi-Device Engine (Baileys/Fonnte)', 'QRIS / Midtrans / Xendit API', 'Telegram Alert Logger Bot', 'Google Sheets / Export Excel API']
  }
];

export default function ProductArchitecture() {
  const waUrl = createWhatsappUrl('Halo AMP Pedia, saya ingin konsultasi arsitektur sistem dan teknologi untuk aplikasi bisnis saya.');

  return (
    <section id="architecture" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader
          title="Arsitektur Sistem & Standar Kualitas Software"
          subtitle="Dibangun dengan standar rekayasa perangkat lunak modern: aman, modular, mudah dikembangkan (scalable), dan tanpa ketergantungan lisensi bulanan yang menjerat."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="rounded-3xl border border-stone-200 bg-stone-50/50 p-6 sm:p-8 transition-all hover:border-amber-400/80 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center justify-between border-b border-stone-200/80 pb-4">
                <h3 className="text-base font-black text-stone-900">{layer.title}</h3>
                <span className="rounded-full bg-amber-500/10 px-3 py-0.5 text-[11px] font-black text-amber-600">
                  Layer 0{index + 1}
                </span>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-stone-600">
                {layer.desc}
              </p>

              <div className="mt-6 space-y-2.5">
                {layer.techs.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-stone-800">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Security & Reliability Banner */}
        <div className="mt-8 rounded-3xl bg-stone-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-stone-800">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-black text-white flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="text-emerald-400" size={20} />
              100% Hak Milik Source Code & Server Mandiri
            </h4>
            <p className="text-xs text-stone-400 max-w-xl">
              Setelah pengerjaan selesai, source code dan database diserahkan penuh kepada Anda tanpa sistem sewa terkunci (*no vendor lock-in*).
            </p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0"
          >
            <span>Konsultasikan Spesifikasi</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
