import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { faqs } from '../data/faqs.js';
import SectionHeader from './SectionHeader.jsx';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-max max-w-4xl">
        <SectionHeader title="Pertanyaan yang Sering Ditanyakan" />
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <article key={faq.question} className="reveal rounded-[1.5rem] border border-slate-100 bg-slate-50 shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-black text-navy"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-electric shadow-sm">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
