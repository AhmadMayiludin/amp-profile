import { partners } from '../data/partners.js';
import SectionHeader from './SectionHeader.jsx';

export default function PartnerLogos() {
  return (
    <section className="section-padding bg-white" aria-labelledby="partners-title">
      <div className="container-max">
        <SectionHeader
          title="Trusted by teams, communities, and growing businesses"
          subtitle="AMP Pedia siap menjadi partner teknologi untuk berbagai kebutuhan digital."
        />
        <div className="reveal grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex h-28 items-center justify-center rounded-3xl border border-slate-100 bg-slate-50/80 p-4 opacity-80 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:opacity-100 hover:shadow-premium"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="hidden h-10 max-w-[130px] grayscale transition duration-300 group-hover:grayscale-0"
                onLoad={(event) => event.currentTarget.classList.remove('hidden')}
              />
              <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-400 transition group-hover:text-electric">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        <p className="reveal mt-6 text-center text-sm text-slate-500">Logo dapat diganti sesuai partner atau client AMP Pedia.</p>
      </div>
    </section>
  );
}
