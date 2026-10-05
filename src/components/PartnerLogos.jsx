import { partners } from '../data/partners.js';
import SectionHeader from './SectionHeader.jsx';

export default function PartnerLogos() {
  return (
    <section className="section-padding bg-white" aria-labelledby="partners-title">
      <div className="container-max">
        <SectionHeader
          title="Infrastruktur & Ekosistem Teknologi Terpercaya"
          subtitle="Aplikasi dan website yang kami bangun didukung oleh teknologi cloud dan framework standar industri global."
        />
        <div className="reveal grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col h-32 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-premium"
            >
              <div className="flex h-12 w-12 items-center justify-center mb-2">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xs font-bold text-navy text-center line-clamp-1">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium text-center line-clamp-1">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
