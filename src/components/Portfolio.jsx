import { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { portfolioFilters, portfolioItems } from '../data/portfolio.js';
import { createWhatsappUrl } from '../data/constants.js';
import SectionHeader from './SectionHeader.jsx';

export default function Portfolio() {
  const [active, setActive] = useState('Semua');
  const filtered = useMemo(
    () => (active === 'Semua' ? portfolioItems : portfolioItems.filter((item) => item.category === active)),
    [active],
  );

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader title="Karya & Portfolio Proyek" subtitle="Daftar proyek nyata dan produk live yang telah dikembangkan dan siap diimplementasikan untuk bisnis Anda." />
        <div className="reveal mb-8 flex flex-wrap justify-center gap-2.5">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition ${
                active === filter ? 'bg-amber-500 text-slate-950 shadow-md font-black' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article key={project.title} className="reveal group overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden bg-stone-100 border-b border-stone-100">
                <img
                  src={project.image}
                  alt={`${project.title} mockup`}
                  className="relative z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 z-20 rounded-full bg-stone-900 px-3 py-1 text-[11px] font-bold text-amber-300 shadow-md">
                  {project.service}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-stone-900 group-hover:text-amber-700 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="rounded-md bg-stone-100 px-2.5 py-1 text-[11px] font-semibold text-stone-700">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-stone-100">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3.5 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-amber-600"
                    >
                      Live Demo <ExternalLink size={13} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 px-3.5 py-1.5 text-xs font-bold text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
                    >
                      Source Code <Github size={13} />
                    </a>
                  )}
                  <a
                    href={createWhatsappUrl(`Halo AMP Pedia, saya ingin diskusi tentang project ${project.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-900 ml-auto"
                  >
                    Tanya Proyek <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
