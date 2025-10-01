import Image from "next/image";

export default function Img({ src, alt, className = "", rounded = true }) {
  return (
    <div className={`relative overflow-hidden ${rounded ? "rounded-md" : ""} border border-foreground/10 bg-background ${className}`}>
      <div className="absolute inset-0">
        {src ? (
          <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 420px" style={{ objectFit: "cover" }} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs opacity-60">Tambahkan Gambar</div>
        )}
      </div>
    </div>
  );
}


