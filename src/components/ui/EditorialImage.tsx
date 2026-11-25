import Image from "next/image";
import type { Photo } from "@/data/photos";

export default function EditorialImage({
  photo,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  preload = false,
  decorative = false,
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  preload?: boolean;
  decorative?: boolean;
}) {
  return (
    <div className={`editorial-image ${className}`}>
      <Image
        src={photo.src}
        alt={decorative ? "" : photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
      />
    </div>
  );
}
