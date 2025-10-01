import { semuaMapel, mapelBySlug } from "../../lib/dataMapel";
import { getFallbackImages } from "../../lib/images";
import Breadcrumbs from "../../components/Breadcrumbs";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import Link from "next/link";

export function generateStaticParams() {
  return semuaMapel().map((s) => ({ mapel: s.slug }));
}

export const dynamicParams = true;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export function generateMetadata({ params }) {
  const subject = mapelBySlug(params.mapel);
  return {
    title: subject ? subject.judul : "Mapel",
    description: subject ? subject.deskripsi : "Detail mata pelajaran",
  };
}

export default function SubjectDetailPage({ params }) {
  const subject = mapelBySlug(params.mapel);
  if (!subject) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-semibold">Mapel tidak ditemukan</h1>
        <Link href="/subjects" className="mt-4 inline-block text-sm underline">Kembali ke daftar</Link>
      </div>
    );
  }

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Mapel", href: "/subjects" }, { label: subject.judul }]} />

        <div className="mt-6 grid gap-10 lg:grid-cols-[420px_1fr]">
          <div>
            <div className="grid gap-3">
              {(() => {
                const g1 = Array.isArray(subject.gallery) ? subject.gallery : [];
                const g2 = Array.isArray(subject.galeri) ? subject.galeri : [];
                const gallery = [...g1, ...g2].filter(Boolean);
                const c1 = subject.cover ? [subject.cover] : [];
                const c2 = subject.sampul ? [subject.sampul] : [];
                const cover = [...c1, ...c2].filter(Boolean);
                const fallback = getFallbackImages();
                const all = [...gallery, ...cover, ...fallback];
                const unique = Array.from(new Set(all));
                return (
                  <>
                    <ImagePlaceholder src={unique[0]} alt={subject.judul} className="h-[420px]" />
                    <div className="grid grid-cols-4 gap-3">
                      {unique.slice(0, 4).map((img, i) => (
                        <ImagePlaceholder key={i} src={img} alt={`${subject.judul} ${i + 1}`} className="h-20" />
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{subject.judul}</h1>
            <div className="opacity-80 mt-1">Kelas: {subject.kelas}</div>
            <p className="mt-4 opacity-90 leading-relaxed">{subject.deskripsi}</p>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Tujuan</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1 opacity-90 text-sm">
                {(subject.tujuan || []).map((o, idx) => (
                  <li key={idx}>{o}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Tugas</h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                {(subject.tugas || []).map((t, i) => (
                  <div key={i} className="rounded-md border border-foreground/10 p-4">
                    <div className="font-medium">{t.judul} • <span className="opacity-80 text-sm">{t.jenis}</span></div>
                    <div className="text-xs opacity-70 mt-1">Deadline: {t.batas}</div>
                    <p className="text-sm opacity-90 mt-2">{t.deskripsi}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Sumber Belajar</h2>
              <ul className="mt-2 space-y-2 text-sm">
                {(subject.sumber || []).map((r, i) => (
                  <li key={i}><a href={r.href} className="underline hover:opacity-80">{r.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex gap-3">
              <Link href="/subjects" className="px-5 py-3 rounded-md border border-foreground/20 text-sm font-medium">Kembali</Link>
              <button className="px-5 py-3 rounded-md bg-foreground text-background text-sm font-medium">Unduh Tugas</button>
              <button className="px-5 py-3 rounded-md border border-foreground/20 text-sm font-medium">Bagikan</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



