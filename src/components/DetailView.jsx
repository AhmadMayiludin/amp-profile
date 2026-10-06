import { ArrowLeft, CheckCircle2, MessageCircle, ShieldCheck, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';

export default function DetailView({ data, onBack, onNavigate }) {
  if (!data) return null;

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Breadcrumbs & Back Button */}
      <div className="container-max mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-xs font-bold text-stone-700 transition hover:bg-stone-100 hover:text-stone-900"
          >
            <ArrowLeft size={14} />
            <span>Kembali ke Beranda</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-stone-400">
            <span className="hover:text-stone-600 cursor-pointer" onClick={onBack}>Beranda</span>
            <ChevronRight size={12} />
            <span className="text-amber-600 font-bold">{data.badge || data.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section of Detail Page */}
      <div className="container-max">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-black text-amber-600 border border-amber-500/25">
              <Sparkles size={14} />
              {data.badge}
            </div>

            <h1 className="mt-4 text-3xl font-black text-stone-900 sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              {data.name}
            </h1>

            <p className="mt-2 text-base sm:text-lg font-bold text-amber-600 leading-snug">
              {data.tagline}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
              {data.heroDesc}
            </p>

            {/* Stats Row */}
            {data.stats && (
              <div className="mt-8 grid grid-cols-3 gap-3 border-y border-stone-200/80 py-5">
                {data.stats.map((st, i) => (
                  <div key={i} className="text-left">
                    <p className="text-xs sm:text-sm font-black text-stone-900">{st.val}</p>
                    <p className="mt-0.5 text-[11px] font-semibold text-stone-500">{st.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={createWhatsappUrl(data.waText)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} />
                <span>Konsultasi Solusi Ini</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('calculator')}
                className="rounded-xl border border-stone-300 bg-white px-5 py-3 text-xs font-bold text-stone-800 transition hover:bg-stone-50 shadow-sm"
              >
                Simulasi Biaya di Kalkulator
              </button>
            </div>
          </div>

          {/* Right Showcase Box */}
          <div className="rounded-3xl border border-stone-800 bg-stone-950 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-rose-500" />
                <span className="size-3 rounded-full bg-amber-500" />
                <span className="size-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] font-mono text-stone-400">{data.mockupCode || 'app.run()'}</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-stone-900 p-4 border border-stone-800">
                <p className="text-[10px] font-mono uppercase tracking-wider text-amber-400">Estimasi Investasi</p>
                <p className="mt-1 text-lg font-black text-white">{data.estimatedPrice || 'Hubungi Kami'}</p>
                <p className="mt-1 text-[11px] text-stone-400">Sekali bayar, 100% hak milik source code & tanpa sewa bulanan.</p>
              </div>

              <div className="rounded-2xl bg-amber-500/10 p-4 border border-amber-500/30">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-black">
                  <ShieldCheck size={16} /> Garansi & Keamanan Sistem
                </div>
                <p className="mt-1 text-xs text-stone-300 leading-relaxed">
                  Semua sistem kami serahkan lengkap dengan instalasi live staging, pengujian bug, dan pendampingan hingga tim Anda siap pakai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Modules Grid */}
      <div className="container-max mt-16">
        <div className="border-t border-stone-200 pt-12">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-wider text-amber-600">Modul & Kemampuan</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-stone-900">
              Fitur Lengkap yang Termasuk dalam Paket
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              Setiap komponen dirancang agar terintegrasi mulus tanpa hambatan operasional.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-stone-50/50 p-5 transition hover:border-amber-400 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center gap-2 text-amber-500">
                  <CheckCircle2 size={16} className="shrink-0" />
                  <h3 className="text-xs font-bold text-stone-900">{feat.title}</h3>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-stone-600">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="container-max mt-16">
        <div className="rounded-3xl bg-stone-950 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-800 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">
              Siap Menerapkan Sistem Ini di Bisnis Anda?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
              Diskusikan alur kerja bisnis Anda secara langsung bersama tim developer AMP Pedia. Kami siapkan demo sistem dan penawaran transparan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={createWhatsappUrl(data.waText)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary py-4 px-6 text-xs"
            >
              <MessageCircle size={16} />
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
