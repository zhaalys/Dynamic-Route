export const metadata = {
  title: "Kontak",
  description: "Hubungi pengelola Portal Mapel.",
};

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-16 grid gap-6">
        <h1 className="text-3xl font-semibold tracking-tight">Kontak Kami</h1>
        <p className="opacity-80">Punya pertanyaan? Kirim pesan ke kami. Kami akan merespons secepatnya.</p>
        <form className="grid gap-4 mt-2">
          <input className="rounded-md border border-foreground/20 px-4 py-3 bg-transparent" placeholder="Nama" required />
          <input className="rounded-md border border-foreground/20 px-4 py-3 bg-transparent" placeholder="Email" type="email" required />
          <textarea className="rounded-md border border-foreground/20 px-4 py-3 bg-transparent min-h-32" placeholder="Pesan" required />
          <button className="px-5 py-3 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90" type="submit">Kirim</button>
        </form>
        <div className="text-sm opacity-80">Atau email ke admin@portalmapel.local</div>
      </div>
    </section>
  );
}


