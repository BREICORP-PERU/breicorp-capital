import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import EditorialImage from "@/components/ui/EditorialImage";
import { photos } from "@/data/photos";
import GuideCard from "@/components/ui/GuideCard";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { guides } from "@/data/guides";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

const url = `${siteConfig.domain}/guias`;
const title = "Guías Financieras y Préstamos con Garantía en Perú";
const description =
  "Aprende todo sobre requisitos en SUNARP, trámites notariales, evaluación crediticia con Infocorp y financiamiento con garantía hipotecaria en Perú.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url,
    siteName: siteConfig.name,
    locale: "es_PE",
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
  },
};

export default function GuiasIndexPage() {
  const whatsappUrl = whatsappHref("Hola BREICORP CAPITAL, deseo consultar sobre los requisitos para un préstamo con garantía hipotecaria.");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteConfig.domain}/` },
          { "@type": "ListItem", position: 2, name: "Guías Financieras", item: url },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: title,
        description,
        url,
        isPartOf: { "@id": `${siteConfig.domain}/#website` },
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <div className="site-shell"><Link href="/">Inicio</Link><span aria-hidden="true"> / </span>Guías</div>
      </nav>

      <header className="site-shell inner-hero editorial-split">
        <div className="section-intro section-intro-inline">
          <h1 className="page-headline">Guías de financiamiento con garantía hipotecaria</h1>
          <p>Consulta los requisitos de SUNARP, el proceso notarial y las alternativas para financiar tu proyecto.</p>
          <Button href="#guias-destacadas" variant="outline">Explorar las guías</Button>
        </div>
        <EditorialImage photo={photos.property} preload />
      </header>

      <section id="guias-destacadas" className="editorial-section tone-white">
        <div className="site-shell">
          <div className="section-intro"><h2>Guías destacadas</h2></div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
          </div>
        </div>
      </section>

      <section className="editorial-section tone-sand">
        <div className="site-shell editorial-split">
          <div className="section-intro section-intro-inline">
            <h2>¿Tienes una propiedad inscrita en SUNARP?</h2>
            <p>Consulta por WhatsApp qué documentos necesitas para solicitar una evaluación.</p>
            <Button href={whatsappUrl} isExternal icon={<WhatsAppIcon className="size-5" />} iconPosition="left">
              Consultar por WhatsApp
            </Button>
          </div>
          <EditorialImage photo={photos.house} />
        </div>
      </section>
    </div>
  );
}
