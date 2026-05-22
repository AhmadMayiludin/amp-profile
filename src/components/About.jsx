import { Layers3, Rocket, UsersRound } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const values = [
  {
    title: 'Innovation First',
    icon: Rocket,
    description: 'Selalu mengutamakan solusi teknologi yang relevan, modern, dan berkelanjutan.',
  },
  {
    title: 'User-Centered Design',
    icon: UsersRound,
    description: 'Membuat produk digital yang tidak hanya fungsional, tetapi juga nyaman digunakan oleh pengguna.',
  },
  {
    title: 'Scalable Technology',
    icon: Layers3,
    description: 'Mengembangkan sistem yang dapat berkembang mengikuti kebutuhan bisnis.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-max">
        <SectionHeader title="Tentang AMP Pedia" subtitle="Partner teknologi untuk produk digital yang rapi, cepat, dan siap berkembang." />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-lg leading-9 text-slate-600">
              AMP Pedia adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif untuk membantu bisnis beradaptasi
              dengan perkembangan era digital. Kami membangun website, aplikasi, sistem informasi, dan solusi berbasis AI yang dirancang untuk
              meningkatkan efisiensi, produktivitas, dan pertumbuhan bisnis.
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-premium">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-electric">What we believe</p>
              <h3 className="mt-3 text-2xl font-black text-navy">Teknologi terbaik selalu dimulai dari kebutuhan manusia.</h3>
            </div>
          </div>
          <div className="reveal grid gap-5">
            {values.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-electric">
                  <Icon size={25} />
                </div>
                <h3 className="text-xl font-black text-navy">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
