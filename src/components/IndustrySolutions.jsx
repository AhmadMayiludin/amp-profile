import { useState } from 'react';
import { 
  Building2, 
  Utensils, 
  ShoppingBag, 
  GraduationCap, 
  Stethoscope, 
  Car, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { createWhatsappUrl } from '../data/constants.js';

const industries = [
  {
    id: 'fnb',
    name: 'F&B & Cafe / Resto',
    icon: Utensils,
    badge: 'Resto & Coffee Shop',
    title: 'Sistem Operasional Meja, Kasir POS & QR Menu Mandiri',
    description: 'Solusi terintegrasi untuk pemesanan langsung dari meja via scan barcode QRIS, laporan kitchen printer, manajemen bahan baku resep, dan loyalty member.',
    features: [
      'Self-Order Barcode QRIS di tiap meja',
      'Split Bill Kasir & Kitchen Display System',
      'Inventori otomatis berkurang per resep menu',
      'Program Poin Member & Kupon Diskon WhatsApp'
    ],
    demoUrl: '#portfolio',
    waText: 'Halo AMP Pedia, saya butuh sistem digital dan aplikasi kasir untuk bisnis F&B / Cafe.'
  },
  {
    id: 'retail',
    name: 'Retail & Toko Grosir',
    icon: ShoppingBag,
    badge: 'Toko & Minimarket',
    title: 'Kasir Multi-Cabang, Manajemen Stok Barcode & Multi-Gudang',
    description: 'Aplikasi kasir desktop & web untuk mengontrol pergerakan ribuan SKU produk, scan barcode kilat, harga bertingkat grosir/eceran, dan laporan laba kotor.',
    features: [
      'Sinkronisasi stok real-time antar cabang & gudang',
      'Scanner barcode kompatibel USB & Bluetooth thermal',
      'Manajemen piutang pelanggan & jatuh tempo supplier',
      'Cetak label barcode harga & nota otomatis'
    ],
    demoUrl: '#portfolio',
    waText: 'Halo AMP Pedia, saya butuh aplikasi kasir dan sistem inventori stok untuk toko retail saya.'
  },
  {
    id: 'corporate',
    name: 'Perusahaan & Kontraktor',
    icon: Building2,
    badge: 'Corporate & B2B',
    title: 'Company Profile Mewah, Pengajuan Quotation & HRIS Absensi',
    description: 'Membangun citra kredibilitas tinggi bagi perusahaan dengan website berkecepatan tinggi, form tender/quotation terstruktur, dan portal karyawan internal.',
    features: [
      'Desain arsitektur modern standar Korporat B2B',
      'Portal pengajuan penawaran harga & invoice digital',
      'Absensi GPS karyawan & payroll slip gaji terenkripsi',
      'Integrasi email domain resmi (@namaperusahaan.co.id)'
    ],
    demoUrl: '#portfolio',
    waText: 'Halo AMP Pedia, saya ingin membangun website korporat dan portal internal perusahaan.'
  },
  {
    id: 'education',
    name: 'Sekolah & Kursus / Bimbel',
    icon: GraduationCap,
    badge: 'EdTech & Lembaga',
    title: 'Portal Akademik, Ujian Online (CBT) & Pembayaran SPP',
    description: 'Platform edukasi all-in-one untuk pendaftaran santri/siswa baru (PPDB online), absensi scan kartu, raport digital, dan tagihan SPP via WhatsApp bot.',
    features: [
      'PPDB Online dengan verifikasi berkas otomatis',
      'Ujian Online CBT anti-curang & grading instan',
      'Tagihan dan notifikasi SPP berkala ke nomor orang tua',
      'Virtual Laboratory & Materi E-Learning interaktif'
    ],
    demoUrl: '#portfolio',
    waText: 'Halo AMP Pedia, saya butuh portal sistem informasi sekolah / aplikasi kursus bimbel.'
  },
  {
    id: 'automotive',
    name: 'Bengkel & Jasa Servis',
    icon: Car,
    badge: 'Bengkel & Otomotif',
    title: 'Sistem Booking Servis, Riwayat Kendaraan & Reminder WA',
    description: 'Kelola alur servis kendaraan mulai dari estimasi mekanik, antrean antrean bengkel, nota onderdil suku cadang, hingga pengingat ganti oli berkala.',
    features: [
      'Database riwayat nomor polisi & servis kendaraan',
      'Estimasi biaya suku cadang + ongkos mekanik',
      'WhatsApp pengingat otomatis jadwal servis berkala',
      'Laporan komisi mekanik & performa bengkel'
    ],
    demoUrl: '#portfolio',
    waText: 'Halo AMP Pedia, saya tertarik dengan software bengkel / jasa servis kendaraan.'
  },
  {
    id: 'clinic',
    name: 'Klinik & Praktek Dokter',
    icon: Stethoscope,
    badge: 'Healthcare & Klinik',
    title: 'Rekam Medis Elektronik (RME), Antrean & Farmasi Resep',
    description: 'Digitalisasi fasilitas kesehatan klinik pratama dengan nomor antrean teratur, pencatatan riwayat rekam medis pasien, dan integrasi stok obat apotek.',
    features: [
      'Rekam Medis Pasien berbasis web yang aman & rapi',
      'Display nomor antrean poli & farmasi',
      'Manajemen persediaan obat dengan tanggal kadaluarsa',
      'Cetak surat rujukan dan kwitansi berstandar'
    ],
    demoUrl: '#portfolio',
    waText: 'Halo AMP Pedia, saya ingin konsultasi sistem klinik dan rekam medis digital.'
  },
];

export default function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const current = industries.find((item) => item.id === activeTab) || industries[0];

  return (
    <section id="industries" className="section-padding bg-stone-50/70 border-y border-stone-200/80">
      <div className="container-max">
        <SectionHeader
          title="Solusi Spesifik Lintas Sektor Industri"
          subtitle="Setiap model bisnis memiliki tantangan alur kerja yang unik. Kami merancang arsitektur modul yang siap disesuaikan dengan kebutuhan sektor Anda."
        />

        {/* Industry Pill Navigation */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveTab(ind.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 ring-2 ring-amber-400'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/90'
                }`}
              >
                <Icon size={15} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-extrabold text-amber-600 border border-amber-500/20">
                <Sparkles size={13} />
                {current.badge}
              </div>

              <h3 className="mt-4 text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
                {current.title}
              </h3>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-stone-600">
                {current.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-2xl bg-stone-50 p-3.5 border border-stone-200/60">
                    <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-stone-800">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={createWhatsappUrl(current.waText)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <span>Konsultasi Solusi {current.name}</span>
                  <ArrowRight size={14} />
                </a>
                <a
                  href="#calculator"
                  className="rounded-xl border border-stone-300 bg-white px-5 py-3 text-xs font-bold text-stone-800 transition hover:bg-stone-50"
                >
                  Hitung Estimasi di Kalkulator
                </a>
              </div>
            </div>

            {/* Visual Workflow Mockup */}
            <div className="rounded-2xl border border-stone-200 bg-stone-900 p-6 text-white shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-rose-500" />
                  <span className="size-3 rounded-full bg-amber-500" />
                  <span className="size-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[11px] font-mono text-stone-400">flow::{current.id}.pipeline</span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl bg-stone-800/80 p-3 border border-stone-700/50">
                  <p className="text-[10px] font-mono uppercase text-amber-400">Step 1: Input & Transaksi</p>
                  <p className="text-xs font-bold text-stone-200 mt-1">Data langsung ditangkap via Web App / WhatsApp Bot</p>
                </div>
                <div className="flex justify-center text-stone-500">↓</div>
                <div className="rounded-xl bg-stone-800/80 p-3 border border-stone-700/50">
                  <p className="text-[10px] font-mono uppercase text-amber-400">Step 2: Database & Business Logic</p>
                  <p className="text-xs font-bold text-stone-200 mt-1">Pemrosesan otomatis: Stok terupdate & Validasi Pembayaran</p>
                </div>
                <div className="flex justify-center text-stone-500">↓</div>
                <div className="rounded-xl bg-amber-500/10 p-3 border border-amber-500/30">
                  <p className="text-[10px] font-mono uppercase text-amber-400">Step 3: Output & Executive Report</p>
                  <p className="text-xs font-bold text-white mt-1">Notifikasi instan WA ke Owner + Dashboard Laba Terupdate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
