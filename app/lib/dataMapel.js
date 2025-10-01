function buatSlug(teks) {
  return teks.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

const GAMBAR = "/image/TBIMG.png";

const NAMA_MAPEL = [
  "Analisis Program",
  "Bahasa Indonesia",
  "Bahasa Inggris",
  "Bahasa Jepang",
  "BD",
  "Matematika",
  "PAI",
  "Pemograman Mobile",
  "PJOK",
  "PKK",
  "PPKN",
  "PWD",
  "Sejarah",
];

const DATA_MAPEL = NAMA_MAPEL.map((nama, i) => {
  const id = String(i + 1);
  const judul = nama;
  const slug = buatSlug(`${judul}-${id}`);
  const deskripsi = `Mapel ${judul} buat kelas XI RPL 1. Ringkas, jelas, dan fokus ke yang kamu butuhin.`;
  const tujuan = [
    `Paham inti ${judul.toLowerCase()}.`,
    `Coba terapkan di hal sehari-hari.`,
  ];
  const tugas = [
    { judul: "Tugas Ringkas 1", jenis: "Individu", batas: "Minggu ke-2", deskripsi: `Bikin rangkuman materi awal ${judul.toLowerCase()}.` },
    { judul: "Tugas Proyek", jenis: "Kelompok", batas: "Minggu ke-4", deskripsi: `Proyek kecil sesuai topik utama.` },
  ];
  const sumber = [
    { label: "Modul PDF", href: "#" },
    { label: "Contoh Soal", href: "#" },
  ];
  return {
    id,
    judul,
    slug,
    kelas: "XI RPL 1",
    deskripsi,
    tujuan,
    sampul: GAMBAR,
    galeri: [GAMBAR, GAMBAR],
    tugas,
    sumber,
  };
});

export function semuaMapel() {
  return DATA_MAPEL;
}

export function cariMapel(q) {
  const s = (q || "").toLowerCase();
  return DATA_MAPEL.filter((m) => m.judul.toLowerCase().includes(s));
}

export function mapelBySlug(slug) {
  return DATA_MAPEL.find((m) => m.slug === slug);
}


