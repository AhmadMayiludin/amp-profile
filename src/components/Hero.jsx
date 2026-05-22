import { ArrowRight, Bot, CheckCircle2, Cloud, Code2, LayoutDashboard, Smartphone, Sparkles } from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';

export default function Hero() {
  const whatsappUrl = createWhatsappUrl('Halo AMP Pedia, saya ingin konsultasi tentang kebutuhan project digital.');
  const indicators = ['10+ Digital Solutions', 'Fast Development', 'Modern Technology', 'Client Focused'];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 pt-28">
      <div className="absolute inset-0 grid-pattern opacity-70" />
      <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute -left-28 bottom-20 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />

      <div className="container-max relative grid min-h-[calc(100vh-7rem)] items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-bold text-electric shadow-sm backdrop-blur">
            <Sparkles size={16} />
            Trusted Digital Tech Partner
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-7xl">
            Build Your <span className="gradient-text">Digital Future</span> with AMP Pedia
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Kami membantu bisnis, startup, UMKM, organisasi, dan perusahaan membangun solusi digital modern melalui website, aplikasi,
            sistem informasi, AI automation, dan teknologi cloud yang scalable.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary w-full sm:w-auto" href={whatsappUrl} target="_blank" rel="noreferrer">
              Mulai Konsultasi <ArrowRight size={18} />
            </a>
            <a className="btn-secondary w-full sm:w-auto" href="#portfolio">
              Lihat Portfolio
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {indicators.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-white bg-white/75 p-3 text-sm font-bold text-slate-700 shadow-sm backdrop-blur">
                <CheckCircle2 className="shrink-0 text-aqua" size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute inset-10 rounded-full bg-gradient-to-r from-electric/25 to-violet/25 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-premium backdrop-blur-2xl">
            <div className="rounded-[1.5rem] bg-navy p-5 text-white dark-grid">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-200">AMP OS Dashboard</p>
                  <h2 className="text-2xl font-extrabold">Digital Growth</h2>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">Live</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['AI Solution', Bot, '87% automation ready'],
                  ['Web Development', Code2, '98 lighthouse score'],
                  ['Cloud Ready', Cloud, 'Scalable deploy'],
                  ['Mobile App', Smartphone, 'Android & iOS'],
                ].map(([title, Icon, text]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <Icon className="mb-5 text-cyan-200" size={28} />
                    <p className="font-extrabold">{title}</p>
                    <p className="mt-1 text-sm text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-300">Project Velocity</p>
                    <p className="text-3xl font-black">3.8x</p>
                  </div>
                  <LayoutDashboard className="text-aqua" size={42} />
                </div>
                <div className="mt-4 h-3 rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-aqua to-violet" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-4 top-16 hidden animate-float rounded-3xl bg-white p-4 shadow-premium sm:block">
            <p className="text-xs font-bold text-slate-400">Automation</p>
            <p className="text-xl font-black text-navy">24/7 Ready</p>
          </div>
          <div className="absolute -right-4 bottom-16 hidden animate-float rounded-3xl bg-white p-4 shadow-premium [animation-delay:1.4s] sm:block">
            <p className="text-xs font-bold text-slate-400">Cloud</p>
            <p className="text-xl font-black text-navy">99.9% Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
