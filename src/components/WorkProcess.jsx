import { ClipboardList, Code2, Figma, Rocket, Search, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const steps = [
  ['Discovery', 'Memahami kebutuhan bisnis, masalah utama, target pengguna, dan tujuan project.', Search],
  ['Planning', 'Menyusun scope project, fitur utama, timeline pengerjaan, dan estimasi biaya.', ClipboardList],
  ['UI/UX Design', 'Membuat wireframe, user flow, dan desain interface sebelum masuk tahap development.', Figma],
  ['Development', 'Mengembangkan sistem berdasarkan desain dan requirement yang telah disepakati.', Code2],
  ['Testing', 'Melakukan pengujian fitur, keamanan, responsivitas, performa, dan bug fixing.', ShieldCheck],
  ['Launch & Support', 'Melakukan deployment, dokumentasi, training pengguna, dan support setelah project selesai.', Rocket],
];

export default function WorkProcess() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader
          title="Cara Kerja Kami"
          subtitle="Proses kerja AMP Pedia dibuat transparan, terstruktur, dan mudah dipahami oleh klien."
        />
        <div className="relative grid gap-5 lg:grid-cols-6">
          <div className="absolute left-0 right-0 top-16 hidden h-1 bg-gradient-to-r from-electric via-aqua to-violet lg:block" />
          {steps.map(([title, description, Icon], index) => (
            <article key={title} className="reveal relative rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-4xl font-black gradient-text">{String(index + 1).padStart(2, '0')}</span>
                <div className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-electric">
                  <Icon size={24} />
                </div>
              </div>
              <h3 className="text-lg font-black text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
