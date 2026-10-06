import { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Send, Timer, Video } from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';
import SectionHeader from './SectionHeader.jsx';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
};

const services = ['Website Development', 'Mobile App Development', 'Sistem Informasi', 'UI/UX Design', 'AI Automation', 'IT Consultation'];
const budgets = ['< Rp2 juta', 'Rp2 juta - Rp5 juta', 'Rp5 juta - Rp10 juta', '> Rp10 juta'];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) nextErrors[key] = 'Field ini wajib diisi.';
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Format email belum valid.';
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSuccess('');
      return;
    }

    const text = `Halo AMP Pedia, saya ingin konsultasi project.\n\nNama: ${form.name}\nEmail: ${form.email}\nNomor WhatsApp: ${form.phone}\nJenis Layanan: ${form.service}\nBudget: ${form.budget}\nPesan: ${form.message}`;
    setSuccess('Pesan berhasil disiapkan. Kamu akan diarahkan ke WhatsApp AMP Pedia.');
    window.open(createWhatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-max">
        <SectionHeader title="Hubungi AMP Pedia" subtitle="Diskusikan kebutuhan project kamu bersama kami." />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="reveal rounded-[2rem] bg-navy p-7 text-white shadow-premium dark-grid">
            <h3 className="text-2xl font-black">Informasi Kontak</h3>
            <div className="mt-7 space-y-5">
              {[
                [Mail, 'Email', 'hello@amppedia.id'],
                [MessageCircle, 'WhatsApp', '+62 877-9267-3907'],
                [MapPin, 'Location', 'Karawang, Indonesia'],
                [Timer, 'Working Hours', 'Monday - Friday, 09.00 - 17.00'],
              ].map(([Icon, label, value]) => (
                <div key={label} className="flex gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-cyan-200">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="font-bold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              {[Instagram, Linkedin, Github, Video].map((Icon, index) => (
                <a
                  key={index}
                  href="#contact"
                  className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-navy"
                  aria-label={['Instagram', 'LinkedIn', 'GitHub', 'TikTok'][index]}
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="reveal rounded-[2rem] bg-white p-6 shadow-premium sm:p-8" noValidate>
            {success && <div className="mb-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">{success}</div>}
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nama Lengkap" name="name" value={form.name} error={errors.name} onChange={handleChange} />
              <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} />
              <Field label="Nomor WhatsApp" name="phone" value={form.phone} error={errors.phone} onChange={handleChange} />
              <Select label="Jenis Layanan" name="service" value={form.service} error={errors.service} onChange={handleChange} options={services} />
              <Select label="Budget Project" name="budget" value={form.budget} error={errors.budget} onChange={handleChange} options={budgets} />
              <div className="md:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-black text-navy">
                  Pesan / Kebutuhan Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100"
                />
                {errors.message && <p className="mt-2 text-sm font-semibold text-red-500">{errors.message}</p>}
              </div>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full">
              <Send size={18} />
              Kirim Pesan via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = 'text' }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-black text-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100"
      />
      {error && <p className="mt-2 text-sm font-semibold text-red-500">{error}</p>}
    </div>
  );
}

function Select({ label, name, value, onChange, error, options }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-black text-navy">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100"
      >
        <option value="">Pilih opsi</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="mt-2 text-sm font-semibold text-red-500">{error}</p>}
    </div>
  );
}
