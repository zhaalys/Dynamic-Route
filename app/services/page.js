export const metadata = {
  title: "Layanan",
  description: "Layanan dan fitur Portal Mapel.",
};

export default function ServicesPage() {
  const services = [
    { title: "Manajemen Tugas", desc: "Kelola dan pantau tugas tiap mapel." },
    { title: "Materi Singkat", desc: "Ringkasan materi untuk belajar cepat." },
    { title: "Pengingat Deadline", desc: "Notifikasi tenggat agar tidak terlewat." },
    { title: "Sumber Belajar", desc: "Link dan referensi belajar terkurasi." },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Layanan Portal</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border border-foreground/10 p-6">
              <div className="font-medium">{s.title}</div>
              <p className="text-sm opacity-80 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


