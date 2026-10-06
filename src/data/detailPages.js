import { 
  Utensils, 
  ShoppingBag, 
  Building2, 
  GraduationCap, 
  Car, 
  Stethoscope,
  Laptop,
  Database,
  Store,
  Bot
} from 'lucide-react';

export const industryPages = {
  fnb: {
    id: 'fnb',
    name: 'F&B, Cafe & Restoran',
    tagline: 'Sistem POS Meja Barcode QRIS & Kitchen Display Otomatis',
    badge: 'F&B Suite Pro',
    heroDesc: 'Tingkatkan efisiensi perputaran meja hingga 300%. Pelanggan tinggal scan barcode QRIS di meja, orderan langsung terdistribusi ke printer dapur/bar, dan resep bahan baku otomatis terpotong.',
    stats: [
      { label: 'Perputaran Meja', val: '3x Lebih Cepat' },
      { label: 'Integrasi Pembayaran', val: 'Semua QRIS & E-Wallet' },
      { label: 'Akurasi Stok Bahan', val: '99.8% Sesuai Resep' },
    ],
    features: [
      {
        title: 'Self-Order QR Code di Meja',
        desc: 'Pelanggan langsung melihat foto menu & memesan dari smartphone tanpa harus antre kasir.',
      },
      {
        title: 'Kitchen Display System (KDS)',
        desc: 'Pesanan langsung muncul di layar dapur & bar secara real-time dengan penanda status waktu.',
      },
      {
        title: 'Manajemen Resep & Stok Bahan Baku',
        desc: 'Stok kopi, sirup, atau daging otomatis terpotong per porsi pesanan yang terjual.',
      },
      {
        title: 'Split Bill & Multi-Metode Pembayaran',
        desc: 'Mendukung pisah nota per orang, pembayaran tunai, debit, kartu kredit, dan QRIS instan.',
      },
      {
        title: 'Laporan Laba Harian & Best Seller Menu',
        desc: 'Dashboard analitik menyajikan menu paling laris, jam paling ramai, dan rekap omzet kasir.',
      },
      {
        title: 'Loyalty Member & WhatsApp Kupon',
        desc: 'Simpan data pelanggan tetap dan kirimkan kupon diskon berkala langsung ke nomor WhatsApp mereka.',
      },
    ],
    mockupCode: 'fnb_pos_engine.ready()',
    waText: 'Halo AMP Pedia, saya tertarik dengan solusi Sistem F&B, Cafe & Resto (Self-Order & POS Kasir).',
    estimatedPrice: 'Mulai Rp 1.500.000 (Sistem Siap Pakai)',
  },
  retail: {
    id: 'retail',
    name: 'Retail, Minimarket & Toko Grosir',
    tagline: 'Aplikasi Kasir Multi-Cabang, Scanner Barcode & Stok Gudang',
    badge: 'Retail Master Suite',
    heroDesc: 'Solusi kasir desktop & web untuk mengontrol ribuan item produk secara akurat. Pantau pergerakan stok antar cabang dan gudang dari mana saja secara real-time.',
    stats: [
      { label: 'Kapasitas SKU', val: 'Hingga 50.000+ Produk' },
      { label: 'Kecepatan Scan Barcode', val: '< 0.3 Detik / Item' },
      { label: 'Manajemen Multi-Cabang', val: 'Unlimited Outlet' },
    ],
    features: [
      {
        title: 'Kasir Kilat & Barcode Scanner',
        desc: 'Mendukung barcode scanner USB/Bluetooth, cetak struk kasir thermal 58mm/80mm, dan cash drawer.',
      },
      {
        title: 'Harga Bertingkat (Grosir vs Eceran)',
        desc: 'Atur diskon volume beli 1 pcs, 1 lusin, atau 1 dus secara otomatis sesuai tier member.',
      },
      {
        title: 'Sinkronisasi Stok Antar Gudang',
        desc: 'Kirim dan terima barang antar cabang dengan bukti mutasi surat jalan digital.',
      },
      {
        title: 'Peringatan Stok Menipis & Kadaluarsa',
        desc: 'Notifikasi otomatis saat item produk mendekati batas minimum stok atau masa kadaluarsa (FIFO).',
      },
      {
        title: 'Laporan Piutang & Hutang Supplier',
        desc: 'Pencatatan jatuh tempo pembayaran supplier dan riwayat kas bon pelanggan.',
      },
      {
        title: 'Export Laporan Pajak & Excel',
        desc: 'Unduh laporan penjualan bersih, laba kotor, dan rekap PPN dengan satu klik.',
      },
    ],
    mockupCode: 'retail_inventory_sync.active',
    waText: 'Halo AMP Pedia, saya tertarik dengan software Retail, Minimarket & Kasir Multi-Cabang.',
    estimatedPrice: 'Mulai Rp 1.800.000 (Multi-Cabang Ready)',
  },
  corporate: {
    id: 'corporate',
    name: 'Perusahaan, Kontraktor & B2B',
    tagline: 'Company Profile Standar Korporat, Quotation & HRIS Absensi',
    badge: 'Enterprise Hub',
    heroDesc: 'Tingkatkan konversi penawaran tender dan kepercayaan klien B2B Anda dengan portal terintegrasi: kalkulator penawaran harga, status pengerjaan proyek, dan absensi GPS karyawan.',
    stats: [
      { label: 'Kecepatan Loading Web', val: '< 1.1 Detik (PageSpeed 98)' },
      { label: 'Keamanan Data', val: 'SSL 256-bit + RBAC' },
      { label: 'Efisiensi Payroll', val: 'Otomatisasi 100%' },
    ],
    features: [
      {
        title: 'Arsitektur Desain Korporat Elegan',
        desc: 'Membangun impresi profesional standar enterprise dengan kredensial portofolio terstruktur.',
      },
      {
        title: 'Portal Pengajuan Quotation & Invoice Digital',
        desc: 'Klien dapat langsung mengajukan RFQ (Request for Quotation) dan menerima invoice resmi PDF.',
      },
      {
        title: 'Sistem Absensi Karyawan GPS & Kamera Selfie',
        desc: 'Pencatatan kehadiran presisi anti fake-GPS dengan rekap jam lembur dan cuti karyawan.',
      },
      {
        title: 'Modul Payroll & Slip Gaji Terenkripsi',
        desc: 'Hitung gaji bersih, potongan BPJS, PPh21, dan kirim slip gaji PDF via WhatsApp otomatis.',
      },
      {
        title: 'Manajemen Dokumen Legalitas & Kontrak',
        desc: 'Arsip digital dokumen perjanjian kerjasama dan masa berlaku sertifikasi legal perusahaan.',
      },
      {
        title: 'Email Domain Resmi & Subdomain Proyek',
        desc: 'Terhubung ke Google Workspace / Microsoft 365 (@perusahaan.co.id).',
      },
    ],
    mockupCode: 'b2b_enterprise_portal.run()',
    waText: 'Halo AMP Pedia, saya ingin membangun Website Korporat B2B, Portal Quotation & HRIS Perusahaan.',
    estimatedPrice: 'Mulai Rp 2.500.000 (Custom Scope)',
  },
  education: {
    id: 'education',
    name: 'Sekolah, Pesantren & Bimbel',
    tagline: 'Portal Akademik, PPDB Online, CBT Ujian & Tagihan SPP WhatsApp',
    badge: 'EdTech Smart Campus',
    heroDesc: 'Modernisasi sistem administrasi lembaga pendidikan Anda. Otomatiskan pendaftaran siswa baru, kelola ujian komputer online anti-curang, dan tagihan SPP otomatis ke wali murid.',
    stats: [
      { label: 'Waktu Rekap Nilai', val: 'Instan Otomatis' },
      { label: 'Tingkat Pembayaran Tepat Waktu', val: 'Meningkat hingga 85%' },
      { label: 'Kapasitas Peserta CBT', val: 'Ribuan Siswa Simultan' },
    ],
    features: [
      {
        title: 'Penerimaan Siswa Baru (PPDB Online)',
        desc: 'Formulir pendaftaran, upload berkas ijazah/KK, dan verifikasi otomatis bukti pembayaran.',
      },
      {
        title: 'Computer Based Test (CBT) Anti-Curang',
        desc: 'Ujian online dengan pengacak soal, timer ketat, dan deteksi tab browser ditinggalkan.',
      },
      {
        title: 'Tagihan SPP & Notifikasi WhatsApp Wali Murid',
        desc: 'Kirim invoice tagihan bulanan otomatis via WA dengan tombol pembayaran QRIS/Virtual Account.',
      },
      {
        title: 'E-Raport & Buku Induk Siswa Digital',
        desc: 'Guru menginput nilai harian dan sistem langsung men-generate file raport berstandar dinas.',
      },
      {
        title: 'Absensi Siswa Scan Kartu Barcode / RFID',
        desc: 'Wali murid langsung mendapat notifikasi WA saat putra-putrinya tiba dan pulang dari sekolah.',
      },
      {
        title: 'Materi Belajar & E-Library Interaktif',
        desc: 'Akses modul materi pelajaran, tugas harian, dan bank soal digital kapan saja.',
      },
    ],
    mockupCode: 'edtech_cbt_server.ready()',
    waText: 'Halo AMP Pedia, saya ingin membuat Portal Sekolah, PPDB Online & CBT Ujian Digital.',
    estimatedPrice: 'Mulai Rp 2.000.000 (Lengkap Modul PPDB/CBT)',
  },
  automotive: {
    id: 'automotive',
    name: 'Bengkel, Cuci Mobil & Servis',
    tagline: 'Manajemen Antrean Bengkel, Estimasi Sparepart & Reminder Servis',
    badge: 'Automotive OS',
    heroDesc: 'Solusi lengkap bisnis bengkel kendaraan dan otomotif. Catat riwayat servis pelanggan per nomor polisi, estimasi suku cadang, dan kirim pengingat ganti oli otomatis.',
    stats: [
      { label: 'Retensi Pelanggan', val: '+45% Kembali Servis' },
      { label: 'Ketepatan Estimasi Biaya', val: '100% Transparan' },
      { label: 'Integrasi Suku Cadang', val: 'Realtime Stock' },
    ],
    features: [
      {
        title: 'Database Riwayat Servis per Plat Nomor',
        desc: 'Cukup masukkan nomor polisi kendaraan untuk melihat riwayat servis, penggantian sparepart, dan catatan mekanik.',
      },
      {
        title: 'Surat Perintah Kerja (SPK) & Estimasi Nota',
        desc: 'Cetak estimasi biaya jasa mekanik + onderdil sebelum kendaraan mulai dikerjakan.',
      },
      {
        title: 'WhatsApp Reminder Ganti Oli & Servis Berkala',
        desc: 'Sistem otomatis mengirim pesan pengingat ke nomor WhatsApp pelanggan setelah 30/60 hari servis terakhir.',
      },
      {
        title: 'Manajemen Stok Suku Cadang / Sparepart',
        desc: 'Stok oli, filter, rem, dan ban berkurang otomatis saat nota servis diselesaikan.',
      },
      {
        title: 'Laporan Komisi Mekanik & Teknisi',
        desc: 'Perhitungan otomatis pembagian bagi hasil atau komisi per jenis pekerjaan teknisi.',
      },
      {
        title: 'Penerimaan Pembayaran Tunai & QRIS',
        desc: 'Kwitansi servis resmi dengan QR code verifikasi garansi servis pengerjaan.',
      },
    ],
    mockupCode: 'bengkel_spk_flow.init()',
    waText: 'Halo AMP Pedia, saya butuh sistem informasi bengkel kendaraan & manajemen servis.',
    estimatedPrice: 'Mulai Rp 1.500.000 (Siap Pakai Bengkel)',
  },
  clinic: {
    id: 'clinic',
    name: 'Klinik, Dokter & Apotek',
    tagline: 'Rekam Medis Elektronik (RME), Display Antrean & Farmasi Resep',
    badge: 'HealthCare Suite',
    heroDesc: 'Digitalisasi klinik pratama dan fasilitas kesehatan Anda. Sesuai standar tata kelola rekam medis pasien, antrean poli teratur, dan integrasi stok obat apotek.',
    stats: [
      { label: 'Waktu Tunggu Pasien', val: 'Turun hingga 50%' },
      { label: 'Keamanan Rekam Medis', val: 'Terenkripsi Standar Medis' },
      { label: 'Akurasi Stok Farmasi', val: 'Pelacakan Kadaluarsa FIFO' },
    ],
    features: [
      {
        title: 'Rekam Medis Elektronik (RME)',
        desc: 'Pencatatan riwayat anamnesa, diagnosa ICD-10, tindakan, dan riwayat alergi pasien yang rapi.',
      },
      {
        title: 'Display Antrean TV Poli & Pendaftaran',
        desc: 'Sistem panggilan suara nomor antrean otomatis dengan tampilan visual di layar monitor TV ruang tunggu.',
      },
      {
        title: 'Modul Apotek & Tebus Resep Digital',
        desc: 'Dokter meresepkan obat di komputer dan apoteker langsung menerima rincian racikan obat.',
      },
      {
        title: 'Pelacakan Kadaluarsa & Batch Obat',
        desc: 'Peringatan stok obat yang mendekati batas expired date dan batas minimum persediaan.',
      },
      {
        title: 'Cetak Surat Keterangan Sakit & Kwitansi',
        desc: 'Generate surat izin sakit ber-barcode dan rincian biaya pengobatan resmi.',
      },
      {
        title: 'Laporan Kunjungan Pasien & Laba Apotek',
        desc: 'Rekapitulasi jumlah pasien harian/bulanan, diagnosa terbanyak, dan laporan kas masuk.',
      },
    ],
    mockupCode: 'clinic_rme_secure.auth()',
    waText: 'Halo AMP Pedia, saya ingin konsultasi Rekam Medis Elektronik (RME) dan Sistem Antrean Klinik.',
    estimatedPrice: 'Mulai Rp 2.200.000 (RME & Farmasi Ready)',
  },
};

export const applicationPages = {
  'web-landing': {
    id: 'web-landing',
    name: 'Website Bisnis & UMKM Kilat',
    tagline: 'Landing Page Elegan, Kecepatan Tinggi & Siap Launching dalam 48 Jam',
    badge: 'Rapid Web Delivery',
    heroDesc: 'Bangun citra profesional bisnis Anda dengan website berkecepatan tinggi, ramah smartphone, dan dioptimalkan untuk SEO Google. Klien Anda dapat menghubungi bisnis Anda via WhatsApp dengan 1 klik.',
    stats: [
      { label: 'Waktu Delivery', val: '24 - 48 Jam Selesai' },
      { label: 'Skor Kecepatan Google', val: 'PageSpeed 95 - 100' },
      { label: 'Garansi Sistem', val: '100% Bebas Bug' },
    ],
    features: [
      {
        title: 'Desain Modern & Responsif Smartphone',
        desc: 'Tampil sempurna di iPhone, Android, tablet, laptop, dan monitor desktop dengan waktu muat super cepat.',
      },
      {
        title: 'Integrasi Direct WhatsApp & Click-to-Call',
        desc: 'Tombol kontak melayang dengan template pesan otomatis yang langsung mengalirkan leads ke WhatsApp Anda.',
      },
      {
        title: 'Optimasi SEO & Google Search Console',
        desc: 'Struktur kode berstandar OpenGraph, meta tag deskriptif, dan sitemap XML agar mudah terindeks di mesin pencari.',
      },
      {
        title: 'Gratis Domain & Hosting High Speed',
        desc: 'Sudah termasuk setup domain resmi (.com/.id) serta server cloud SSL HTTPS aman.',
      },
      {
        title: 'Galeri Produk, Profil Usaha & Portofolio',
        desc: 'Pamerkan daftar produk, testimoni klien, katalog layanan, dan lokasi Google Maps interaktif.',
      },
      {
        title: 'Full Source Code & Akses Admin',
        desc: 'Anda memegang kendali penuh tanpa sistem sewa lisensi tahunan yang mengikat.',
      },
    ],
    mockupCode: 'website_fast_deploy.build()',
    waText: 'Halo AMP Pedia, saya ingin memesan Website Bisnis / Landing Page UMKM Kilat.',
    estimatedPrice: 'Rp 350.000 - Rp 750.000 (All-in Siap Pakai)',
  },
  'web-app': {
    id: 'web-app',
    name: 'Custom Web App & Sistem Informasi',
    tagline: 'Aplikasi Web Fullstack Laravel & React Sesuai Alur Bisnis Anda',
    badge: 'Fullstack Solution',
    heroDesc: 'Kembangkan software yang 100% mengikuti SOP dan alur kerja perusahaan Anda. Dilengkapi sistem autentikasi multi-role aman, database relational cepat, dan modul laporan lengkap.',
    stats: [
      { label: 'Stack Teknologi', val: 'Laravel REST API + React' },
      { label: 'Hak Akses User', val: 'Role-Based Control (RBAC)' },
      { label: 'Integritas Database', val: 'MySQL / PostgreSQL ACID' },
    ],
    features: [
      {
        title: 'Arsitektur Modular & Scalable',
        desc: 'Dibuat dengan backend Laravel 11 / Node.js dan frontend modern React/Tailwind yang ringan dan tangguh.',
      },
      {
        title: 'Multi-Role User Permission (RBAC)',
        desc: 'Pemisahan hak akses jelas antara Owner, Manajer, Admin Operasional, Kasir, dan Klien Luar.',
      },
      {
        title: 'Ekspor Data & Audit Log Transaksi',
        desc: 'Cetak laporan dalam format Excel/PDF otomatis dan lacak setiap riwayat perubahan data user.',
      },
      {
        title: 'Keamanan Data & Enkripsi Password',
        desc: 'Autentikasi JWT Bearer, proteksi CSRF, SQL Injection mitigation, dan enkripsi bcrypt standar perbankan.',
      },
      {
        title: 'Dashboard Analitik Visual Chart',
        desc: 'Visualisasi grafik omzet bulanan, pertumbuhan pengguna, dan KPI operasional dalam satu layar ringkas.',
      },
      {
        title: 'Dukungan Maintenance & Garansi Teknis',
        desc: 'Pendampingan live bug-fixing dan panduan cara penggunaan software hingga tim Anda lancar menggunakannya.',
      },
    ],
    mockupCode: 'laravel_react_app.serve()',
    waText: 'Halo AMP Pedia, saya ingin membangun Custom Web App / Sistem Informasi Khusus untuk bisnis saya.',
    estimatedPrice: 'Mulai Rp 1.500.000 - Rp 5.000.000 (Sesuai Scope)',
  },
  'pos-kasir': {
    id: 'pos-kasir',
    name: 'Kasir POS & Dashboard Admin',
    tagline: 'Sistem Kasir Cetak Struk, Stok Gudang & Audit Keuangan Real-Time',
    badge: 'Point of Sale Pro',
    heroDesc: 'Kelola transaksi kasir toko Anda dengan mudah tanpa ribet. Dilengkapi cetak struk kasir thermal, scan barcode kilat, laporan laba rugi otomatis, dan manajemen inventori gudang.',
    stats: [
      { label: 'Kompatibilitas Printer', val: 'Thermal 58mm / 80mm' },
      { label: 'Pencatatan Laba', val: 'Otomatis Real-Time' },
      { label: 'Dukungan Hardware', val: 'Barcode Scanner & Cash Drawer' },
    ],
    features: [
      {
        title: 'Aplikasi Kasir Responsif & Cepat',
        desc: 'Dapat dijalankan di komputer kasir desktop, laptop, maupun tablet touchscreen dengan UI yang ramah pengguna.',
      },
      {
        title: 'Manajemen Inventori & Stok Otomatis',
        desc: 'Stok barang langsung terpotong tiap ada transaksi dan peringatan otomatis jika persediaan menipis.',
      },
      {
        title: 'Laporan Penjualan & Laba Kotor Harian',
        desc: 'Ketahui keuntungan bersih harian dan menu/produk paling laris tanpa harus menghitung nota manual di malam hari.',
      },
      {
        title: 'Manajemen Shift & Rekap Kas Masuk/Keluar',
        desc: 'Cegah kebocoran dana kasir dengan sistem closing shift dan pencocokan uang fisik di laci kasir.',
      },
      {
        title: 'Multi Pembayaran & Scan QRIS Dinamis',
        desc: 'Dukung transaksi tunai, transfer bank, dan QRIS instan.',
      },
      {
        title: 'Multi-User & Pembatasan Akses Kasir',
        desc: 'Kasir hanya bisa melakukan penjualan, sedangkan akses laporan keuangan hanya dapat dibuka oleh Owner.',
      },
    ],
    mockupCode: 'pos_cashier_hub.listen()',
    waText: 'Halo AMP Pedia, saya tertarik dengan Software Kasir POS & Dashboard Admin Toko.',
    estimatedPrice: 'Mulai Rp 1.200.000 (Sekali Beli Tanpa Sewa)',
  },
  'wa-automation': {
    id: 'wa-automation',
    name: 'WhatsApp Automation & CRM',
    tagline: 'Bot Notifikasi WhatsApp, Reminder Tagihan Otomatis & CRM Broadcast',
    badge: 'Automation Layer',
    heroDesc: 'Otomatiskan komunikasi bisnis Anda 24/7. Hubungkan sistem aplikasi Anda dengan WhatsApp untuk mengirim notifikasi pesanan, invoice PDF, pengingat jatuh tempo, dan follow-up prospek.',
    stats: [
      { label: 'Open Rate Pesan', val: 'Hingga 98% di WhatsApp' },
      { label: 'Respon Otomatis Bot', val: '< 2 Detik' },
      { label: 'Engine Multi-Device', val: 'Nonstop 24/7' },
    ],
    features: [
      {
        title: 'Notifikasi Otomatis Transaksi & Faktur',
        desc: 'Kirim bukti pembayaran, nota kasir, atau nomor resi pengiriman langsung ke nomor WhatsApp pelanggan.',
      },
      {
        title: 'Pengingat Tagihan & Jatuh Tempo Otomatis',
        desc: 'Bot otomatis menyapa pelanggan yang memiliki tagihan mendekati jatuh tempo dengan pesan yang sopan.',
      },
      {
        title: 'Broadcast Promo Bertarget Tanpa Banned',
        desc: 'Kirim pesan penawaran promo berkala ke database pelanggan dengan jeda delay pintar untuk keamanan nomor.',
      },
      {
        title: 'Auto-Reply Chatbot Layanan 24 Jam',
        desc: 'Jawab pertanyaan seputar jam buka, daftar menu, harga paket, atau lokasi usaha secara otomatis kapan saja.',
      },
      {
        title: 'Integrasi API WhatsApp ke Website/Web App',
        desc: 'Dapat diintegrasikan dengan website Laravel, React, formulir kontak, atau sistem database internal Anda.',
      },
      {
        title: 'Manajemen Kontak Pelanggan (CRM)',
        desc: 'Kelompokkan kontak pelanggan berdasarkan loyalitas, jenis produk yang dibeli, dan riwayat transaksi.',
      },
    ],
    mockupCode: 'whatsapp_bot_daemon.connect()',
    waText: 'Halo AMP Pedia, saya butuh sistem WhatsApp Automation & CRM Notifikasi Bisnis.',
    estimatedPrice: 'Mulai Rp 950.000 (Engine Terintegrasi)',
  },
};
