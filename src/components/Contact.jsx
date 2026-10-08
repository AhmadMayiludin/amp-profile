import { useState } from 'react';
import { Mail, MapPin, MessageCircle, Send, Timer, ArrowRight } from 'lucide-react';
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

const services = ['Website Bisnis & UMKM', 'Sistem Informasi & Web App', 'Kasir POS & Dashboard Admin', 'WhatsApp CRM & Automation', 'Konsultasi IT & Custom'];
const budgets = ['< Rp 1 Juta', 'Rp 1 Juta - Rp 3 Juta', 'Rp 3 Juta - Rp 7 Juta', '> Rp 7 Juta'];

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
    setSuccess('Pesan berhasil disiapkan! Mengalihkan ke WhatsApp AMP Pedia...');
    window.open(createWhatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-padding bg-stone-50/70">
      <div className="container-max">
        <SectionHeader title="Konsultasi & Hubungi Kami" subtitle="Diskusikan rencana website, aplikasi, atau otomatisasi bisnis Anda bersama tim pengembang kami." />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="reveal rounded-3xl bg-stone-900 p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-400 mb-4 border border-amber-500/30">
                Direct Contact
              </div>
              <h3 className="text-2xl font-black text-white">Hubungi Tim Kami</h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-400">
                Kami siap memberikan estimasi biaya transparan dan demo langsung untuk kebutuhan digital Anda.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  [MessageCircle, 'WhatsApp Resmi', '+62 856-9435-2247'],
                  [Mail, 'Email Support', 'hello@amppedia.id'],
                  [MapPin, 'Lokasi', 'Karawang, Jawa Barat, Indonesia'],
                  [Timer, 'Jam Pelayanan', 'Senin - Minggu (24 Jam Fast Response)'],
                ].map(([Icon, label, value]) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-amber-400">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold">{label}</p>
                      <p className="text-sm font-bold text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-stone-400">Punya project mendesak? Kami siap delivery dalam 24-48 jam.</p>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="reveal rounded-3xl bg-white p-7 shadow-sm border border-stone-200/90 sm:p-8" noValidate>
            {success && <div className="mb-5 rounded-2xl bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-800 border border-emerald-200">{success}</div>}
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Nama Lengkap" name="name" value={form.name} error={errors.name} onChange={handleChange} />
              <Field label="Email Aktif" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} />
              <Field label="Nomor WhatsApp" name="phone" value={form.phone} error={errors.phone} onChange={handleChange} placeholder="08..." />
              <Select label="Jenis Layanan" name="service" value={form.service} error={errors.service} onChange={handleChange} options={services} />
              <Select label="Estimasi Budget" name="budget" value={form.budget} error={errors.budget} onChange={handleChange} options={budgets} />
              <div className="md:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-xs font-bold text-stone-800">
                  Deskripsi Kebutuhan Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Ceritakan fitur apa yang ingin dibuat..."
                  className="w-full rounded-xl border border-stone-200 px-3.5 py-2.5 text-xs text-stone-800 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
                {errors.message && <p className="mt-1 text-xs font-semibold text-rose-500">{errors.message}</p>}
              </div>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full">
              <Send size={16} />
              Kirim Pesan & Konsultasi via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, error, onChange, placeholder = '' }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold text-stone-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-stone-200 px-3.5 py-2.5 text-xs text-stone-800 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
      />
      {error && <p className="mt-1 text-xs font-semibold text-rose-500">{error}</p>}
    </div>
  );
}

function Select({ label, name, value, error, onChange, options }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold text-stone-800">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-stone-200 px-3.5 py-2.5 text-xs text-stone-800 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200 bg-white"
      >
        <option value="">Pilih opsi...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs font-semibold text-rose-500">{error}</p>}
    </div>
  );
}
