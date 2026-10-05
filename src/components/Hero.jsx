import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';

export default function Hero() {
  const whatsappUrl = createWhatsappUrl('Halo AMP Pedia, saya ingin konsultasi kebutuhan pembuatan website / sistem digital untuk bisnis saya.');
  const valueProps = ['Pengerjaan 24-48 Jam', 'Desain Clean & Non-AI Look', 'Biaya Terjangkau & Transparan', 'Full Support & Siap Pakai'];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40 pt-28">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute -left-28 bottom-20 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="container-max relative grid min-h-[calc(100vh-7rem)] items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-electric shadow-sm backdrop-blur">
            <Sparkles size={14} className="text-blue-600" />
            Software House & Digital Studio
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl tracking-tight">
            Jasa Pembuatan <span className="gradient-text">Website & Sistem Digital</span> Siap Pakai untuk Bisnis Anda
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            AMP Pedia membantu UMKM, pemilik usaha, komunitas, dan instansi memiliki website profesional, sistem manajemen, dan otomatisasi bisnis yang cepat, elegan, dan menghasilkan closing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary w-full sm:w-auto text-center" href={whatsappUrl} target="_blank" rel="noreferrer">
              Konsultasi Proyek Gratis <ArrowRight size={18} />
            </a>
            <a className="btn-secondary w-full sm:w-auto text-center" href="#portfolio">
              Lihat Hasil Karya
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/90 p-3 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
                <CheckCircle2 className="shrink-0 text-emerald-500" size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-rose-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-slate-400 ml-2">amppedia.com/solutions</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Siap Terima Order
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-blue-100 text-blue-600">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Website Bisnis & UMKM Kilat</h4>
                    <p className="text-xs text-slate-500">Landing Page, Company Profile & Toko Online</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mt-3 pt-3 border-t border-slate-200/60">
                  <span>Waktu Pengerjaan: <strong>1-2 Hari</strong></span>
                  <span className="text-emerald-600 font-bold">Mulai Rp 350.000</span>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-cyan-100 text-cyan-600">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Custom Web App & Sistem Informasi</h4>
                    <p className="text-xs text-slate-500">Dashboard Admin, Kasir POS, Absensi & LMS Edukasi</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mt-3 pt-3 border-t border-slate-200/60">
                  <span>Stack: <strong>Laravel / React / DB</strong></span>
                  <span className="text-electric font-bold">Full Custom</span>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">WhatsApp CRM & Automation</h4>
                    <p className="text-xs text-slate-500">Otomatisasi pesan, lead capture & integrasi sosmed</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mt-3 pt-3 border-t border-slate-200/60">
                  <span>Status: <strong>100% Free Stack Ready</strong></span>
                  <span className="text-emerald-600 font-bold">Terintegrasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
