import ImagePlaceholder from "./ImagePlaceholder";
import Link from "next/link";

export default function KartuMapel({ data }) {
  return (
    <Link href={`/subjects/${data.slug}`} className="rounded-lg border border-foreground/10 p-5 hover:bg-foreground/5 transition">
      <ImagePlaceholder src={data.sampul} alt={data.judul} className="h-36" />
      <div className="mt-4 font-medium leading-tight line-clamp-2">{data.judul}</div>
      <div className="text-sm opacity-80">Kelas: {data.kelas}</div>
      <div className="mt-2 text-sm opacity-80 line-clamp-2">{data.deskripsi}</div>
    </Link>
  );
}


