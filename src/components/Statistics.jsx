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
    <section className="section-padding bg-gradient-to-br from-navy via-blue-950 to-violet-950 text-white dark-grid">
      <div className="container-max">
        <div className="reveal mb-10 text-center">
          <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">AMP Pedia in Numbers</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <article key={stat.label} className="reveal rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-4xl font-black text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
