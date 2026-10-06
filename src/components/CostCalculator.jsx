import { useState } from 'react';
import { Calculator, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { createWhatsappUrl } from '../data/constants.js';
import SectionHeader from './SectionHeader.jsx';

const baseModules = [
  { id: 'web-landing', name: 'Landing Page / Company Profile Interaktif', price: 350000, category: 'Frontend & UI' },
  { id: 'web-custom', name: 'Custom Multi-page Web & SEO Architecture', price: 750000, category: 'Frontend & UI' },
  { id: 'pos-kasir', name: 'Sistem POS Kasir, Barcode & Cetak Thermal Struk', price: 1200000, category: 'Operasional & Kasir' },
  { id: 'inventory-stock', name: 'Manajemen Stok Gudang & Low Stock Alert', price: 650000, category: 'Operasional & Kasir' },
  { id: 'admin-dashboard', name: 'Admin Analytics Dashboard & Visual Chart', price: 850000, category: 'Sistem & Data' },
  { id: 'wa-crm', name: 'WhatsApp Automation CRM & Broadcast Engine', price: 950000, category: 'Automation & AI' },
  { id: 'payment-gateway', name: 'Integrasi Otomatis QRIS & Payment Gateway (Midtrans/Tripay)', price: 750000, category: 'Integrasi' },
  { id: 'hris-absensi', name: 'Modul Absensi Karyawan, GPS & Penggajian (HRIS)', price: 1500000, category: 'Sistem & Data' },
  { id: 'api-webhook', name: 'Custom REST API & Webhook Layer', price: 600000, category: 'Integrasi' },
  { id: 'export-excel', name: 'Laporan Finansial & Export Excel/PDF Otomatis', price: 450000, category: 'Sistem & Data' },
];

const hostingOptions = [
  { id: 'cloud-basic', name: 'Vercel / Shared Cloud (Cocok Web/Landing Page)', price: 0 },
  { id: 'vps-standard', name: 'Dedicated VPS + Domain .ID/COM Setup 1 Tahun', price: 650000 },
  { id: 'cloud-enterprise', name: 'High-Availability Cloud Server + Auto Backup Bulanan', price: 1400000 },
];

export default function CostCalculator() {
  const [selectedModules, setSelectedModules] = useState(['web-landing', 'payment-gateway']);
  const [selectedHosting, setSelectedHosting] = useState('cloud-basic');
  const [timeline, setTimeline] = useState('standard'); // 'express' or 'standard'

  const toggleModule = (id) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const modulesTotal = selectedModules.reduce((sum, id) => {
    const item = baseModules.find((m) => m.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const hostingPrice = hostingOptions.find((h) => h.id === selectedHosting)?.price || 0;
  const subtotal = modulesTotal + hostingPrice;
  const multiplier = timeline === 'express' ? 1.2 : 1.0;
  const finalTotal = Math.round(subtotal * multiplier);

  const formatRupiah = (val) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  const handleConsultation = () => {
    const moduleNames = selectedModules.map((id) => baseModules.find((m) => m.id === id)?.name).filter(Boolean);
    const hostingName = hostingOptions.find((h) => h.id === selectedHosting)?.name;
    const text = `Halo AMP Pedia Studio, saya sudah menghitung estimasi sistem di Interactive Cost Calculator:\n\n*Modul Terpilih:*\n${moduleNames.map((n, i) => `${i + 1}. ${n}`).join('\n')}\n\n*Pilihan Server/Hosting:* ${hostingName}\n*Timeline:* ${timeline === 'express' ? 'Kilat (2-4 Hari)' : 'Standar (5-10 Hari)'}\n*Estimasi Total:* ${formatRupiah(finalTotal)}\n\nSaya ingin konsultasi lebih lanjut terkait project ini.`;
    window.open(createWhatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="calculator" className="section-padding bg-[#F5F0E3] text-[#191410] relative overflow-hidden border-t-2 border-[#191410]">
      <div className="container-max relative z-10">
        <SectionHeader
          title="Simulasi & Kalkulator Biaya Custom"
          subtitle="Pilih modul aplikasi dan infrastruktur sesuai kebutuhan bisnis Anda. Dapatkan estimasi transparan seketika tanpa biaya tersembunyi."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          {/* Left: Module Selection */}
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-[#191410] bg-[#FFFEFA] p-6 sm:p-8 shadow-[4px_4px_0px_#191410]">
              <div className="flex items-center justify-between border-b-2 border-[#191410] pb-4">
                <div>
                  <h3 className="text-lg font-black text-[#191410]">1. Pilih Fitur & Modul Sistem</h3>
                  <p className="text-xs text-[#665E55]">Centang fitur yang ingin dimasukkan ke dalam software Anda.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedModules(['web-landing'])}
                  className="inline-flex items-center gap-1.5 rounded-lg border-2 border-[#191410] bg-[#F5F0E3] px-3 py-1.5 text-xs font-extrabold text-[#191410] shadow-[2px_2px_0px_#191410] hover:bg-[#D97706] hover:text-white transition cursor-pointer"
                >
                  <RefreshCw size={12} /> Reset
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {baseModules.map((module) => {
                  const isChecked = selectedModules.includes(module.id);
                  return (
                    <label
                      key={module.id}
                      className={`relative flex cursor-pointer flex-col justify-between rounded-2xl border-2 p-4 transition-all ${
                        isChecked
                          ? 'border-[#191410] bg-[#F5F0E3] shadow-[3px_3px_0px_#D97706]'
                          : 'border-[#E5DFD3] bg-[#FFFEFA] text-[#191410] hover:border-[#191410] hover:shadow-[2px_2px_0px_#191410]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-extrabold leading-snug text-[#191410]">{module.name}</span>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleModule(module.id)}
                          className="size-4 shrink-0 rounded border-2 border-[#191410] accent-[#D97706] cursor-pointer"
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-[11px]">
                        <span className="text-[#8C827A] font-semibold">{module.category}</span>
                        <span className="font-black text-[#D97706]">+{formatRupiah(module.price)}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Hosting Infrastructure */}
            <div className="rounded-3xl border-2 border-[#191410] bg-[#FFFEFA] p-6 sm:p-8 shadow-[4px_4px_0px_#191410]">
              <h3 className="text-lg font-black text-[#191410]">2. Pilihan Infrastruktur & Server</h3>
              <p className="text-xs text-[#665E55] mt-1">Sesuaikan dengan target kapasitas dan skala operasional bisnis Anda.</p>
              
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {hostingOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex cursor-pointer flex-col justify-between rounded-2xl border-2 p-4 transition ${
                      selectedHosting === opt.id
                        ? 'border-[#191410] bg-[#F5F0E3] shadow-[3px_3px_0px_#D97706]'
                        : 'border-[#E5DFD3] bg-[#FFFEFA] hover:border-[#191410] hover:shadow-[2px_2px_0px_#191410]'
                    }`}
                  >
                    <div>
                      <input
                        type="radio"
                        name="hosting"
                        checked={selectedHosting === opt.id}
                        onChange={() => setSelectedHosting(opt.id)}
                        className="size-4 accent-[#D97706] cursor-pointer"
                      />
                      <p className="mt-2 text-xs font-black text-[#191410]">{opt.name}</p>
                    </div>
                    <p className="mt-3 text-xs font-black text-[#D97706]">
                      {opt.price === 0 ? 'Gratis / Standard' : `+${formatRupiah(opt.price)}`}
                    </p>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Summary & WhatsApp CTA */}
          <div className="lg:sticky lg:top-28 h-fit">
            <div className="rounded-3xl border-2 border-[#191410] bg-[#FFFEFA] p-6 sm:p-8 shadow-[6px_6px_0px_#191410] relative overflow-hidden">
              <div className="absolute top-0 right-0 rounded-bl-2xl bg-[#D97706] border-b-2 border-l-2 border-[#191410] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-white">
                Live Calculator
              </div>

              <h4 className="text-xl font-black text-[#191410]">Ringkasan Estimasi</h4>
              <p className="text-xs text-[#665E55] mt-1">Total rincian berdasarkan modul yang dipilih.</p>

              <div className="mt-6 space-y-3 divide-y-2 divide-[#E5DFD3] border-y-2 border-[#191410] py-4 text-xs">
                <div className="flex justify-between pt-2">
                  <span className="text-[#665E55] font-semibold">Jumlah Modul Terpilih:</span>
                  <span className="font-black text-[#191410]">{selectedModules.length} Modul</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#665E55] font-semibold">Biaya Fitur & Modul:</span>
                  <span className="font-black text-[#191410]">{formatRupiah(modulesTotal)}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#665E55] font-semibold">Infrastruktur Server:</span>
                  <span className="font-black text-[#191410]">{formatRupiah(hostingPrice)}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[#665E55] font-semibold">Kecepatan Pengerjaan:</span>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="rounded-lg border-2 border-[#191410] bg-[#F5F0E3] px-2 py-1 text-xs font-black text-[#191410] outline-none cursor-pointer"
                  >
                    <option value="standard">Standar (5-10 Hari)</option>
                    <option value="express">Express Kilat (2-4 Hari) +20%</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F5F0E3] p-5 border-2 border-[#191410]">
                <p className="text-xs font-black uppercase tracking-wider text-[#D97706]">Estimasi Investasi Mulai</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#191410] tracking-tight">{formatRupiah(finalTotal)}</span>
                </div>
                <p className="mt-2 text-[11px] text-[#665E55] font-bold flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#D97706] shrink-0" /> Termasuk Garansi, Free Konsultasi & Full Source Code
                </p>
              </div>

              <button
                type="button"
                onClick={handleConsultation}
                className="btn-primary mt-6 w-full justify-center py-4 text-xs font-black cursor-pointer text-white"
              >
                <MessageCircle size={18} />
                Kunci Estimasi & Bawa ke WhatsApp
              </button>

              <div className="mt-5 space-y-2 text-[11px] text-[#665E55] font-semibold">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#D97706]" /> Sistem dapat dicicil per milestone / termin
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#D97706]" /> Live staging demo sebelum serah terima final
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
