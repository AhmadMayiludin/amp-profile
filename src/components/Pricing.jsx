import { CheckCircle2, Star } from 'lucide-react';
import { pricingPlans } from '../data/pricing.js';
import { createWhatsappUrl } from '../data/constants.js';
import SectionHeader from './SectionHeader.jsx';

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-stone-50/70">
      <div className="container-max">
        <SectionHeader title="Paket Investasi & Harga" subtitle="Pilihan paket transparan dengan estimasi pengerjaan cepat dan garansi purna jual." />
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`reveal relative rounded-3xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                plan.popular ? 'border-amber-400 shadow-md ring-2 ring-amber-400/20 lg:-mt-4' : 'border-stone-200/90'
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-black text-slate-950 shadow-sm">
                  <Star size={12} className="fill-slate-950" /> Terpopuler
                </span>
              )}
              <h3 className="text-2xl font-black text-stone-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-stone-600">{plan.audience}</p>
              <p className="mt-5 text-3xl font-black text-amber-600">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm font-semibold text-stone-700">
                    <CheckCircle2 className="shrink-0 text-amber-500" size={17} />
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
