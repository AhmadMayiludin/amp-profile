import { Github, Instagram, Linkedin, Video } from 'lucide-react';

const quickLinks = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact'];
const services = ['Website Development', 'Mobile App Development', 'Sistem Informasi', 'UI/UX Design', 'AI Automation', 'Cloud Solution'];

export default function Footer() {
  return (
    <footer className="bg-navy px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="container-max">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <img src="/logo-amp-pedia-horizontal.svg" alt="AMP Pedia" className="h-14 w-auto rounded bg-white px-2 py-1" />
            </div>
            <p className="mt-5 leading-7 text-slate-300">
              AMP Pedia adalah partner teknologi digital untuk membantu bisnis membangun website, aplikasi, sistem informasi, dan solusi berbasis AI
              yang modern, scalable, dan profesional.
            </p>
          </div>
          <FooterGroup title="Quick Links" items={quickLinks} prefix="#" />
          <FooterGroup title="Services" items={services} />
          <div>
            <h3 className="font-black">Contact</h3>
            <div className="mt-5 space-y-3 text-slate-300">
              <p>hello@amppedia.id</p>
              <p>+62 877-9267-3907</p>
              <p>Karawang, Indonesia</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-400">© 2026 AMP Pedia. All rights reserved.</p>
          <div className="flex gap-3">
            {[Instagram, Linkedin, Github, Video].map((Icon, index) => (
              <a key={index} href="#contact" className="text-slate-300 hover:text-cyan-200" aria-label={['Instagram', 'LinkedIn', 'GitHub', 'TikTok'][index]}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, items, prefix }) {
  const toHref = (item) => (prefix ? `#${item.toLowerCase().replaceAll(' ', '-')}` : '#services');
  return (
    <div>
      <h3 className="font-black">{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <a key={item} href={toHref(item)} className="block text-slate-300 transition hover:text-cyan-200">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
