import { Layers3, Rocket, UsersRound } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const values = [
  {
    title: 'Kecepatan & Kerapihan',
    icon: Rocket,
    description: 'Pengerjaan kilat 24-48 jam dengan standar penulisan kode terstruktur, modular, dan dokumentasi lengkap.',
  },
  {
    title: 'Desain Clean & Anti-AI Template',
    icon: UsersRound,
    description: 'Kami merancang antarmuka yang ramah pengguna, berkarakter kuat, dan tidak terlihat seperti template AI generik.',
  },
  {
    title: 'Skalabilitas & 100% Hak Milik',
    icon: Layers3,
    description: 'Sistem dibangun dengan arsitektur scalable. Seluruh source code dan database diserahkan penuh kepada klien.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader title="Tentang AMP Pedia Studio" subtitle="Studio software & solusi digital independen yang berfokus pada kecepatan, estetika clean, dan dampak bisnis nyata." />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-base leading-relaxed text-stone-600 sm:text-lg">
              AMP Pedia adalah software house dan digital agency yang membantu pelaku bisnis, UMKM, institusi pendidikan, dan kreator membangun kehadiran digital yang kredibel. Kami memadukan estetika desain clean, arsitektur modern (React, Laravel, MySQL), dan automasi untuk menghasilkan sistem yang efisien.
            </p>
            <div className="mt-8 rounded-3xl border border-amber-200/80 bg-amber-50/50 p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800">Prinsip Kerja Kami</p>
              <h3 className="mt-2 text-xl font-black text-stone-900">Teknologi yang baik adalah teknologi yang cepat dipakai dan menghasilkan pertumbuhan nyata bagi pemiliknya.</h3>
            </div>
          </div>
          <div className="reveal grid gap-4">
            {values.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-3xl border border-stone-200 bg-stone-50/60 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white">
                <div className="mb-3 grid size-11 place-items-center rounded-2xl bg-amber-100 text-amber-800">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-black text-stone-900">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
