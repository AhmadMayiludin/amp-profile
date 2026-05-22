import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '../data/services.js';
import { createWhatsappUrl } from '../data/constants.js';
import SectionHeader from './SectionHeader.jsx';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader title="Layanan Kami" subtitle="Solusi digital lengkap untuk membantu bisnis kamu tumbuh lebih cepat." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, features, icon: Icon }) => {
            const url = createWhatsappUrl(`Halo AMP Pedia, saya ingin konsultasi layanan ${title}.`);
            return (
              <article key={title} className="reveal group flex min-h-full flex-col rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-premium">
                <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-electric transition group-hover:scale-105">
                  <Icon size={30} />
                </div>
                <h3 className="text-xl font-black text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
                <ul className="mt-5 space-y-2">
                  {features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <Check size={16} className="text-aqua" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={url} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-electric hover:text-violet">
                  Learn More <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
