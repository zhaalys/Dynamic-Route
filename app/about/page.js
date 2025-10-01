export const metadata = {
  title: "Tentang Kami",
  description: "Tentang portal mata pelajaran XI RPL 1.",
};

export default function AboutPage() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-6 py-16 grid gap-6">
        <h1 className="text-3xl font-semibold tracking-tight">Tentang Portal Mapel</h1>
        <p className="opacity-80">Portal Mapel adalah platform untuk mengelola tugas, materi, dan informasi pembelajaran kelas XI RPL 1.</p>
        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          <div className="rounded-lg border border-foreground/10 p-5">
            <div className="font-medium">Misi</div>
            <p className="text-sm opacity-80 mt-2">Mendukung proses belajar yang terstruktur dan efisien.</p>
          </div>
          <div className="rounded-lg border border-foreground/10 p-5">
            <div className="font-medium">Visi</div>
            <p className="text-sm opacity-80 mt-2">Menjadi portal pembelajaran andalan kelas XI RPL 1.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


