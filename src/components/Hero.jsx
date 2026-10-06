import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Sparkles, Code2, Database } from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';

export default function Hero() {
  const whatsappUrl = createWhatsappUrl('Halo AMP Pedia, saya ingin konsultasi kebutuhan pembuatan website / sistem digital untuk bisnis saya.');
  const valueProps = ['Pengerjaan 24-48 Jam', 'Desain Clean & Anti-AI Look', 'Biaya Terjangkau & Transparan', 'Full Support & Source Code'];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white pt-28 pb-16">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -right-20 top-24 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -left-28 bottom-20 h-80 w-80 rounded-full bg-yellow-100/30 blur-3xl pointer-events-none" />

      <div className="container-max relative grid min-h-[calc(100vh-7rem)] items-center gap-12 px-5 pb-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-800 shadow-sm">
            <Sparkles size={14} className="text-amber-600" />
            Software House & Digital Studio Karawang
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.15] text-stone-900 sm:text-5xl lg:text-6xl tracking-tight">
            Jasa Pembuatan <span className="text-amber-600">Website & Sistem Digital</span> Siap Pakai untuk Bisnis Anda
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
            AMP Pedia menghadirkan solusi teknologi terpadu: website UMKM kilat, sistem kasir POS, company profile, dashboard admin, hingga automasi WhatsApp bisnis yang cepat, elegan, dan menghasilkan closing.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <a className="btn-primary w-full sm:w-auto text-center" href={whatsappUrl} target="_blank" rel="noreferrer">
              Konsultasi Proyek Gratis <ArrowRight size={18} />
            </a>
            <a className="btn-secondary w-full sm:w-auto text-center" href="#portfolio">
              Lihat Hasil Karya
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => (
              <div key={item} className="flex items-center gap-2.5 rounded-2xl border border-stone-200 bg-stone-50/70 p-3 text-xs font-bold text-stone-800 shadow-sm">
                <CheckCircle2 className="shrink-0 text-amber-500" size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Card Interactive Preview */}
        <div className="reveal relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-3xl border border-stone-200/90 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="h-3 w-3 rounded-full bg-rose-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-stone-400 ml-2">amppedia.id/agency</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Siap Terima Order
              </span>
            </div>

            <div className="space-y-3.5">
              {/* Card 1 */}
              <div className="rounded-2xl bg-stone-50 p-4 border border-stone-100 hover:border-amber-300 transition duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-amber-100/70 text-amber-800">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Website Bisnis & UMKM Kilat</h4>
                    <p className="text-xs text-stone-500">Landing Page, Company Profile & Toko Online</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-stone-600 mt-3 pt-3 border-t border-stone-200/60">
                  <span>Pengerjaan: <strong className="text-stone-900">1 - 2 Hari</strong></span>
                  <span className="text-amber-700 font-bold bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/60">Mulai Rp 350.000</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-stone-50 p-4 border border-stone-100 hover:border-amber-300 transition duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-amber-100/70 text-amber-800">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Custom Web App & Sistem Informasi</h4>
                    <p className="text-xs text-stone-500">Dashboard Admin, Kasir POS & LMS Edukasi</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-stone-600 mt-3 pt-3 border-t border-stone-200/60">
                  <span>Stack: <strong className="text-stone-900">Laravel / React / MySQL</strong></span>
                  <span className="text-stone-900 font-bold bg-stone-200/60 px-2.5 py-0.5 rounded-md">Full Custom</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-stone-50 p-4 border border-stone-100 hover:border-amber-300 transition duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-amber-100/70 text-amber-800">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">WhatsApp CRM & Automation</h4>
                    <p className="text-xs text-stone-500">Otomatisasi pesan, lead capture & integrasi WA</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-stone-600 mt-3 pt-3 border-t border-stone-200/60">
                  <span>Arsitektur: <strong className="text-stone-900">100% Free Stack</strong></span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60">Siap Pasang</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
