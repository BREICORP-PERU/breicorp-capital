import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "./EditorialImage";
import { photos } from "@/data/photos";

const services = {
  mortgage: { href: "/prestamos-garantia-hipotecaria", label: "Préstamos con garantía hipotecaria", photo: photos.house },
  local: { href: "/prestamos-garantia-hipotecaria-tingo-maria", label: "Atención en Tingo María", photo: photos.property },
  business: { href: "/financiamiento-empresarial", label: "Financiamiento empresarial", photo: photos.business },
  investment: { href: "/inversionistas", label: "Red de inversionistas", photo: photos.investment },
} as const;

export default function RelatedServices({ links }: { links: (keyof typeof services)[] }) {
  return (
    <div className="related-grid">
      {links.map((key) => {
        const service = services[key];
        return (
          <Link key={key} href={service.href} className="solution-link font-semibold">
            <EditorialImage photo={service.photo} decorative sizes="(min-width: 768px) 27vw, 100vw" />
            <span className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4">
              {service.label}<ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
