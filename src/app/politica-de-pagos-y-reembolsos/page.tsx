import EditorialImage from "@/components/ui/EditorialImage";
import { photos } from "@/data/photos";
import ReadingIndex from "@/components/ui/ReadingIndex";
﻿import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Pagos, devoluciones y reembolsos",
  description: "Información sobre pagos y solicitudes de devolución relacionadas con BREICORP CAPITAL.",
  alternates: { canonical: `${siteConfig.domain}/politica-de-pagos-y-reembolsos` },
  robots: { index: false, follow: false },
  openGraph: { url: `${siteConfig.domain}/politica-de-pagos-y-reembolsos`, title: `Pagos y reembolsos | ${siteConfig.name}`, description: "Información sobre consultas, pagos y solicitudes de devolución." },
};

export default function PagosYReembolsosPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 pb-20 pt-12 sm:pt-16 text-neutral-700 sm:px-6">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#B83208] underline">Volver al inicio</Link>
      <h1 className="page-headline mt-6 text-brand-black">Pagos, devoluciones y reembolsos</h1>
      <EditorialImage photo={photos.city} className="reading-cover mt-6" sizes="(min-width: 896px) 848px, 100vw" preload />
      <p className="mt-3 text-sm">Alcance de este portal web. Última revisión: noviembre de 2026.</p>
      <div className="my-8"><ReadingIndex items={[
        { id: "consultas-desde-la-web", label: "Consultas desde la web" },
        { id: "operaciones-contratadas-por-separado", label: "Operaciones contratadas por separado" },
        { id: "solicitud-y-contracargos", label: "Solicitud y contracargos" },
        { id: "reclamos", label: "Reclamos" },
      ]} /></div>
      <div className="space-y-8 max-w-[70ch] leading-relaxed">
        <section id="consultas-desde-la-web"><h2 className="text-xl font-bold text-brand-black">Consultas desde la web</h2><p className="mt-2">Este sitio no ofrece una pasarela de pago ni cobra por abrir o enviar una consulta. Por ello, no hay un cargo realizado por la web que pueda devolverse desde ella. No transfieras dinero únicamente por un mensaje o promesa de aprobación; verifica la identidad del interlocutor y las condiciones por escrito.</p></section>
        <section id="operaciones-contratadas-por-separado"><h2 className="text-xl font-bold text-brand-black">Operaciones contratadas por separado</h2><p className="mt-2">Si existiera un pago asociado a un servicio u operación posterior, su concepto, importe, comprobante, condiciones de devolución y medio de pago deben constar en los documentos acordados antes del cobro. Una solicitud de devolución se evaluará según esos documentos y la normativa aplicable; esta página no promete ni excluye un reembolso automático.</p></section>
        <section id="solicitud-y-contracargos"><h2 className="text-xl font-bold text-brand-black">Solicitud y contracargos</h2><p className="mt-2">Para consultar o solicitar la devolución de un pago efectivamente realizado, escribe a <a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> con el concepto, fecha y comprobante, evitando compartir datos completos de tarjetas. Si el cargo se hizo con tarjeta, consulta también con tu emisor sobre el procedimiento de contracargo. Este texto no limita tus derechos como consumidor.</p></section>
        <section id="reclamos"><h2 className="text-xl font-bold text-brand-black">Reclamos</h2><p className="mt-2">Puedes presentar un reclamo en el <a href="https://breicorpperu.breicorp.pe/reclamos" target="_blank" rel="noopener noreferrer" className="underline">Libro de Reclamaciones de {siteConfig.legalEntity}</a>. Consulta también los <Link href="/terminos-y-condiciones" className="underline">términos y condiciones</Link>.</p></section>
      </div>
    </article>
  );
}
