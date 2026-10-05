import { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { portfolioFilters, portfolioItems } from '../data/portfolio.js';
import { createWhatsappUrl } from '../data/constants.js';
import SectionHeader from './SectionHeader.jsx';

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () => (active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === active)),
    [active],
  );

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-max">
        <SectionHeader title="Portfolio Project" subtitle="Project public dari GitHub Ahmad Mayiludin yang sudah dikurasi untuk ditampilkan sebagai karya AMP Pedia." />
        <div className="reveal mb-8 flex flex-wrap justify-center gap-3">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-black transition ${
                active === filter ? 'bg-gradient-to-r from-electric to-aqua text-white shadow-glow' : 'bg-white text-slate-600 shadow-sm hover:text-electric'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article key={project.title} className="reveal group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-premium">
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-blue-100 via-cyan-50 to-violet-100">
                <img
                  src={project.image}
                  alt={`${project.title} mockup`}
                  className="relative z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-6 rounded-3xl border border-white/70 bg-white/55 p-5 backdrop-blur-md">
                  <div className="h-4 w-28 rounded-full bg-electric/20" />
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-20 rounded-2xl bg-white/80" />
                    <div className="col-span-2 h-20 rounded-2xl bg-white/80" />
                  </div>
                  <div className="mt-3 h-3 rounded-full bg-aqua/25" />
                </div>
                <span className="absolute left-5 top-5 z-20 rounded-full bg-navy px-3 py-1 text-xs font-black text-white shadow-lg">{project.service}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-navy">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-electric px-4 py-2 text-sm font-black text-white transition hover:bg-violet"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-700 transition hover:border-electric hover:text-electric"
                  >
                    Source Code <Github size={16} />
                  </a>
                  <a
                    href={createWhatsappUrl(`Halo AMP Pedia, saya ingin diskusi tentang project ${project.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-black text-electric hover:text-violet"
                  >
                    Diskusi Project <ArrowUpRight size={17} />
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
