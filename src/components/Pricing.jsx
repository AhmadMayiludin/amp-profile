import { CheckCircle2 } from 'lucide-react';
import { pricingPlans } from '../data/pricing.js';
import { createWhatsappUrl } from '../data/constants.js';
import SectionHeader from './SectionHeader.jsx';

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-slate-50">
      <div className="container-max">
        <SectionHeader title="Paket Layanan" subtitle="Pilih paket yang sesuai dengan kebutuhan digital bisnis kamu." />
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`reveal relative rounded-[2rem] border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-premium ${
                plan.popular ? 'border-cyan-300 shadow-premium lg:-mt-6' : 'border-slate-100'
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-electric to-aqua px-3 py-1 text-xs font-black text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-black text-navy">{plan.name}</h3>
              <p className="mt-3 text-slate-600">{plan.audience}</p>
              <p className="mt-6 text-3xl font-black gradient-text">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="shrink-0 text-aqua" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={createWhatsappUrl(plan.message)} target="_blank" rel="noreferrer" className="btn-primary mt-8 w-full">
                {plan.button}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
