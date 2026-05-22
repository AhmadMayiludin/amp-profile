import { ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';

export default function CTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-electric via-blue-700 to-violet p-8 text-white shadow-premium dark-grid sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">Siap Membangun Solusi Digital untuk Bisnis Kamu?</h2>
            <p className="mt-5 leading-8 text-blue-50">
              Jadikan ide digital kamu lebih nyata bersama AMP Pedia. Mulai dari website, aplikasi, sistem informasi, hingga AI automation,
              kami siap membantu bisnis kamu berkembang lebih cepat.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={createWhatsappUrl('Halo AMP Pedia, saya ingin konsultasi sekarang.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-electric transition hover:-translate-y-1 hover:shadow-glow sm:w-auto"
              >
                <MessageCircle size={18} />
                Konsultasi Sekarang
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
              >
                Hubungi Kami <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
