function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const IMAGE = "/image/book-1.png"; // gunakan gambar di public/image

const SUBJECTS = [
  { name: "Bahasa Indonesia", short: "B. Indonesia" },
  { name: "Bahasa Inggris", short: "B. Inggris" },
  { name: "Matematika", short: "Matematika" },
  { name: "Ilmu Pengetahuan Alam", short: "IPA" },
  { name: "Ilmu Pengetahuan Sosial", short: "IPS" },
  { name: "Sejarah", short: "Sejarah" },
  { name: "Pendidikan Agama Islam", short: "PAI" },
  { name: "Pendidikan Kewarganegaraan", short: "PKn" },
  { name: "Seni Budaya", short: "Seni Budaya" },
  { name: "Pendidikan Jasmani", short: "Penjas" },
  { name: "Informatika / Pemrograman", short: "Pemrograman" },
  { name: "Ekonomi", short: "Ekonomi" },
  { name: "Geografi", short: "Geografi" },
];

const LEVELS = ["VII", "VIII", "IX", "X", "XI", "XII"];

const SUBJECT_DATA = SUBJECTS.map((s, idx) => {
  const id = String(idx + 1);
  const title = s.name;
  const slug = slugify(`${title}-${id}`);
  const description = `Mata pelajaran ${title} membahas konsep utama dengan contoh kontekstual. Materi disusun bertahap untuk mendukung pemahaman dan keterampilan.`;
  const objectives = [
    `Memahami konsep dasar ${title.toLowerCase()}.`,
    `Menerapkan konsep pada situasi nyata.`,
    `Mengembangkan keterampilan pemecahan masalah dan berpikir kritis.`,
  ];
  const tasks = [
    { title: "Tugas 1", type: "Individu", due: "Minggu ke-2", desc: `Ringkasan materi pengantar ${title.toLowerCase()}.` },
    { title: "Tugas 2", type: "Kelompok", due: "Minggu ke-4", desc: `Proyek mini terkait topik utama ${title.toLowerCase()}.` },
    { title: "Tugas 3", type: "Individu", due: "Minggu ke-6", desc: `Kuis/topik pemahaman menengah.` },
  ];
  const syllabus = [
    { week: 1, topic: "Pengantar & Tujuan Pembelajaran" },
    { week: 2, topic: "Konsep Dasar" },
    { week: 3, topic: "Latihan Terbimbing" },
    { week: 4, topic: "Proyek Mini" },
    { week: 5, topic: "Pendalaman Materi" },
    { week: 6, topic: "Evaluasi Tengah" },
    { week: 7, topic: "Studi Kasus" },
    { week: 8, topic: "Presentasi & Refleksi" },
  ];
  const resources = [
    { label: "Silabus PDF", href: "#" },
    { label: "Slide Materi", href: "#" },
    { label: "Latihan Soal", href: "#" },
  ];
  const level = LEVELS[idx % LEVELS.length];
  return {
    id,
    title,
    slug,
    level,
    description,
    objectives,
    cover: IMAGE,
    gallery: [IMAGE, IMAGE, IMAGE],
    tasks,
    syllabus,
    resources,
  };
});

export function getAllSubjects() {
  return SUBJECT_DATA;
}

export function getSubjectBySlug(slug) {
  return SUBJECT_DATA.find((s) => s.slug === slug);
}

export function searchSubjects(query) {
  const q = (query || "").toLowerCase();
  return SUBJECT_DATA.filter((s) => s.title.toLowerCase().includes(q));
}


