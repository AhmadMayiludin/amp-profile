import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials.js';
import SectionHeader from './SectionHeader.jsx';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % testimonials.length), 4500);
    return () => window.clearInterval(timer);
  }, []);

  const current = testimonials[active];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader title="Apa Kata Mereka?" subtitle="Kepercayaan klien adalah prioritas utama kami." />
        <div className="reveal mx-auto max-w-4xl rounded-[2rem] border border-slate-100 bg-white p-6 shadow-premium sm:p-10">
          <Quote className="mb-5 text-cyan-100" size={58} />
          <div className="mb-6 flex gap-1 text-amber-400" aria-label="Rating 5 bintang">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-xl font-semibold leading-9 text-slate-700">"{current.quote}"</p>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-electric to-aqua text-lg font-black text-white">
                {current.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-black text-navy">{current.name}</h3>
                <p className="text-sm font-semibold text-slate-500">{current.role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full border border-slate-200 text-navy hover:border-cyan-300 hover:text-electric"
                onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
                aria-label="Testimonial sebelumnya"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full border border-slate-200 text-navy hover:border-cyan-300 hover:text-electric"
                onClick={() => setActive((active + 1) % testimonials.length)}
                aria-label="Testimonial berikutnya"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="mt-7 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition ${active === index ? 'w-8 bg-electric' : 'w-2 bg-slate-300'}`}
                aria-label={`Lihat testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
