import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Portal Belajar XI RPL 1",
    template: "%s | Portal Mapel",
  },
  description: "Portal tugas dan materi untuk kelas XI RPL 1.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-foreground/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-lg">Portal Mapel</Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link className="hover:underline underline-offset-4" href="/">Home</Link>
              <Link className="hover:underline underline-offset-4" href="/subjects">Mapel</Link>
              <Link className="hover:underline underline-offset-4" href="/#about">About</Link>
              <Link className="hover:underline underline-offset-4" href="/#services">Services</Link>
              <Link className="hover:underline underline-offset-4" href="/#contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <footer className="border-t border-foreground/10">
          <div className="mx-auto max-w-6xl px-6 py-10 grid sm:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold">Portal Mapel</div>
              <p className="text-sm opacity-80 mt-2">Baca lebih banyak, tahu lebih banyak.</p>
            </div>
            <div className="text-sm">
              <div className="font-medium mb-2">Links</div>
              <ul className="space-y-1 opacity-90">
                <li><Link className="hover:underline" href="/subjects">Mapel</Link></li>
                <li><Link className="hover:underline" href="/services">Layanan</Link></li>
                <li><Link className="hover:underline" href="/about">Tentang Kami</Link></li>
                <li><Link className="hover:underline" href="/contact">Kontak</Link></li>
              </ul>
            </div>
            <div className="text-sm">
              <div className="font-medium mb-2">Kontak</div>
              <p className="opacity-90">Email: hello@mapelbooks.local</p>
              <p className="opacity-90">Telp: +62 812-0000-0000</p>
            </div>
          </div>
          <div className="text-xs opacity-70 text-center py-4">© {new Date().getFullYear()} Portal Mapel. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
