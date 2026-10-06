import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 15, suffix: '+', label: 'Solusi Digital Selesai' },
  { value: 6, suffix: '+', label: 'Kategori Bisnis & UMKM' },
  { value: 100, suffix: '%', label: 'Garansi & Source Code' },
  { value: 24, suffix: '/7', label: 'Dukungan WhatsApp' },
  { value: 48, suffix: ' Jam', label: 'Rata-rata Waktu Launching' },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 1200;
      const tick = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        setCount(Math.round(value * progress));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="section-padding bg-[#191410] text-[#FFFEFA] border-y-2 border-[#191410]">
      <div className="container-max">
        <div className="mb-12 text-center">
          <p className="text-xs font-black uppercase tracking-widest text-[#D97706]">Track Record & Kredibilitas</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl text-[#FFFEFA] tracking-tight">
            AMP Pedia in Numbers
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#948A7D]">
            Metrik nyata delivery aplikasi dan standar mutu pengerjaan kami untuk pelaku usaha.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <article 
              key={stat.label} 
              className="rounded-2xl border-2 border-[#332A22] bg-[#241E18] p-6 text-center shadow-[4px_4px_0px_#000000] transition-all hover:border-[#D97706] hover:-translate-y-1"
            >
              <p className="text-3xl sm:text-4xl font-black text-[#D97706]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-bold leading-snug text-[#EDE6D6]">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
