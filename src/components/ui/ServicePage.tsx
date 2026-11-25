import type { ReactNode } from "react";
import Link from "next/link";
import Button from "./Button";
import EditorialImage from "./EditorialImage";
import type { Photo } from "@/data/photos";

export function ServiceHero({
  title, description, photo, contact,
}: {
  title: string;
  description: string;
  photo: Photo;
  contact: string;
}) {
  return (
    <>
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <div className="site-shell"><Link href="/">Inicio</Link><span aria-hidden="true"> / </span>{title}</div>
      </nav>
      <header className="site-shell inner-hero editorial-split">
        <div className="section-intro section-intro-inline">
          <h1 className="page-headline">{title}</h1>
          <p>{description}</p>
          <Button href={contact} isExternal size="lg">Consultar por WhatsApp</Button>
        </div>
        <EditorialImage photo={photo} preload />
      </header>
    </>
  );
}

export function ServiceDetail({
  id,
  title,
  photo,
  children,
}: {
  id: string;
  title: string;
  photo: Photo;
  children: ReactNode;
}) {
  return (
    <section className="editorial-split" aria-labelledby={id}>
      <div className="space-y-4">
        <h2 id={id}>{title}</h2>
        {children}
      </div>
      <EditorialImage photo={photo} />
    </section>
  );
}
