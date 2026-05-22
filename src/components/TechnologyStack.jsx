import { technologies } from '../data/technologies.js';
import SectionHeader from './SectionHeader.jsx';

export default function TechnologyStack() {
  const marqueeItems = technologies.flatMap((group) => group.items);

  return (
    <section className="section-padding relative overflow-hidden bg-navy text-white dark-grid">
      <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="container-max relative">
        <SectionHeader
          title="Teknologi yang Kami Gunakan"
          subtitle="Kami menggunakan teknologi modern untuk memastikan solusi digital cepat, aman, dan scalable."
          light
        />
        <div className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {technologies.map((group) => (
            <article key={group.category} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <h3 className="mb-4 text-lg font-black text-cyan-100">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="reveal mt-10 overflow-hidden rounded-full border border-white/10 bg-white/10 py-3">
          <div className="flex w-max animate-marquee gap-3 px-3">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="rounded-full bg-white px-4 py-2 text-xs font-black text-navy">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
