import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "./EditorialImage";
import type { Guide } from "@/data/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="solution-card">
      <Link href={`/guias/${guide.slug}`} className="solution-link">
        <EditorialImage photo={guide.photo} decorative sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw" />
        <p className="mt-3 text-sm text-[var(--ink-muted)]">{guide.category} · {guide.readTime}</p>
        <div className="solution-title">
          <h3>{guide.title}</h3>
          <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
        </div>
      </Link>
      <div className="solution-copy"><p>{guide.summary}</p></div>
    </article>
  );
}
