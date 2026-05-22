import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10, suffix: '+', label: 'Digital Solutions Built' },
  { value: 5, suffix: '+', label: 'Business Categories Served' },
  { value: 100, suffix: '%', label: 'Responsive Design' },
  { value: 24, suffix: '/7', label: 'Digital Accessibility' },
  { value: 3, suffix: 'x', label: 'Fast & Scalable Development' },
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
