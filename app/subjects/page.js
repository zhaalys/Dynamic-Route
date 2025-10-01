import { semuaMapel, cariMapel } from "../lib/dataMapel";
import KartuMapel from "../components/KartuMapel";

export const metadata = {
  title: "Daftar Mapel",
  description: "Lihat daftar mata pelajaran dan detail tugas.",
};

export default function SubjectsPage({ searchParams }) {
  const q = searchParams?.q || "";
  const subjects = q ? cariMapel(q) : semuaMapel();
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold tracking-tight">Mata Pelajaran</h1>
          <form className="flex gap-2 items-center">
            <input
              name="q"
              defaultValue={q}
              placeholder="Cari mapel..."
              className="rounded-md border border-foreground/20 px-3 py-2 bg-transparent min-w-64"
            />
            <button className="px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium">Cari</button>
          </form>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {subjects.map((s) => (
            <KartuMapel key={s.slug} data={s} />
          ))}
          {subjects.length === 0 && (
            <div className="opacity-70">Tidak ada mata pelajaran.</div>
          )}
        </div>
      </div>
    </section>
  );
}


