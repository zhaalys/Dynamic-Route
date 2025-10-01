import { semuaMapel } from "./lib/dataMapel";
import KartuMapel from "./components/KartuMapel";
import Link from "next/link";
export default function Home() {
  const semua = semuaMapel();
  const pratinjau = semua.slice(0, Math.ceil(semua.length / 2));
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Portal Tugas XI RPL 1</h1>
          <p className="mt-3 opacity-80 max-w-2xl mx-auto">Semua tugas tiap mapel ada di sini. Kamu bisa lihat info tugas, materi singkat, dan catatan penting biar belajar makin rapi.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link href="/subjects" className="px-5 py-3 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90">Lihat Mapel</Link>
            <Link href="#services" className="px-5 py-3 rounded-md border border-foreground/20 text-sm font-medium hover:bg-foreground/5">Layanan</Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-lg border border-foreground/10 p-6">
            <div className="font-medium">Pengumpulan Tugas</div>
            <p className="text-sm opacity-80 mt-2">Kumpulin dan pantau tugas tiap mapel dalam satu tempat.</p>
          </div>
          <div className="rounded-lg border border-foreground/10 p-6">
            <div className="font-medium">Catatan & Materi</div>
            <p className="text-sm opacity-80 mt-2">Akses materi singkat dan catatan penting dari guru.</p>
          </div>
          <div className="rounded-lg border border-foreground/10 p-6">
            <div className="font-medium">Pengingat Deadline</div>
            <p className="text-sm opacity-80 mt-2">Pengingat tenggat tugas biar tidak kelewat.</p>
          </div>
        </div>

        <div id="about" className="grid gap-3 mt-6">
          <h2 className="text-2xl font-semibold">Tentang Platform</h2>
          <p className="opacity-80">Platform Mapel ngebantu kamu nyusun tugas per mata pelajaran, lengkap sama info tugas dan sumber belajar, biar proses belajar lebih tertata.</p>
        </div>

        <div id="services" className="grid gap-3 mt-6">
          <h2 className="text-2xl font-semibold">Layanan</h2>
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="rounded-md border border-foreground/10 p-4">#SMKTARUNABHAKTI</li>
            <li className="rounded-md border border-foreground/10 p-4">#TBTETAPBELAJAR</li>
            <li className="rounded-md border border-foreground/10 p-4">#RPLTB</li>
          </ul>
        </div>

        <div className="grid gap-3 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Mapel</h2>
            <Link href="/subjects" className="text-sm underline">Lihat semua</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pratinjau.map((m) => (
              <KartuMapel key={m.slug} data={m} />
            ))}
          </div>
        </div>

        <div id="services" className="grid gap-3 mt-6">
          <h2 className="text-2xl font-semibold">Layanan</h2>
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="rounded-md border border-foreground/10 p-4">Manajemen Tugas</li>
            <li className="rounded-md border border-foreground/10 p-4">Silabus Terstruktur</li>
            <li className="rounded-md border border-foreground/10 p-4">Sumber Belajar Terkurasi</li>
          </ul>
        </div>

        <div id="contact" className="grid gap-3 mt-6">
          <h2 className="text-2xl font-semibold">Kontak</h2>
          <form className="grid gap-3 max-w-xl">
            <input className="rounded-md border border-foreground/20 px-4 py-3 bg-transparent" placeholder="Nama" required />
            <input className="rounded-md border border-foreground/20 px-4 py-3 bg-transparent" placeholder="Email" type="email" required />
            <textarea className="rounded-md border border-foreground/20 px-4 py-3 bg-transparent min-h-32" placeholder="Pesan" required />
            <button className="px-5 py-3 rounded-md bg-foreground text-background text-sm font-medium" type="submit">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
}
