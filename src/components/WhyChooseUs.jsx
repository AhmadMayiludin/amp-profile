import { BadgeCheck, Clock3, Headphones, Palette, SlidersHorizontal, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const reasons = [
  ['Desain Modern dan Profesional', 'Website dan aplikasi dibuat dengan tampilan clean, responsif, dan sesuai identitas brand.', Palette],
  ['Teknologi Terbaru', 'Menggunakan teknologi modern seperti Laravel, React, Next.js, Node.js, Flutter, Python, AI, dan Cloud.', Zap],
  ['Proses Cepat dan Terstruktur', 'Setiap project dikerjakan dengan tahapan jelas mulai dari analisis, desain, development, testing, hingga deployment.', Clock3],
  ['Fokus pada Kebutuhan Klien', 'Solusi dibuat berdasarkan masalah nyata, kebutuhan pengguna, dan target bisnis klien.', BadgeCheck],
  ['Support dan Maintenance', 'Memberikan dukungan setelah project selesai agar sistem tetap berjalan optimal.', Headphones],
  ['Harga Fleksibel', 'Paket layanan dapat disesuaikan dengan kebutuhan UMKM, startup, organisasi, maupun perusahaan.', SlidersHorizontal],
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <SectionHeader
          title="Kenapa Memilih AMP Pedia?"
          subtitle="Kami bukan hanya membuat produk digital, tetapi membangun solusi yang benar-benar menjawab kebutuhan bisnis."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, description, Icon]) => (
            <article key={title} className="reveal group rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-premium">
              <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-slate-50 text-electric transition group-hover:bg-gradient-to-br group-hover:from-electric group-hover:to-aqua group-hover:text-white">
                <Icon size={26} />
              </div>
              <h3 className="text-xl font-black text-navy">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
