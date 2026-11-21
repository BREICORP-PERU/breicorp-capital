import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
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
    <div className="pt-24 pb-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      {/* Migas de pan */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Ruta de navegación" className="text-xs text-neutral-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#111111] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-[#EE3C06] font-semibold">Guías Financieras</span>
          </nav>
        </div>
      </div>

      {/* Hero del Centro de Guías */}
      <section className="py-16 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EE3C06]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#EE3C06] text-xs font-semibold uppercase tracking-wider border border-[#EE3C06]/30">
              <BookOpen className="w-3.5 h-3.5" />
              Centro de Conocimiento Financiero
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              GUÍAS PARA ENTENDER EL FINANCIAMIENTO CON{" "}
              <span className="text-[#EE3C06]">GARANTÍA HIPOTECARIA</span>.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Información clara, transparente y respaldada legalmente para propietarios de inmuebles, comerciantes y empresarios MYPE en el Perú.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Artículos */}
      <section className="py-16 lg:py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Artículos y Tutoriales"
            title="GUÍAS DESTACADAS"
            description="Aprende sobre requisitos de SUNARP, proceso notarial y alternativas para financiar tu proyecto."
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <article
                key={guide.slug}
                className="flex flex-col bg-white rounded-2xl border border-neutral-200/90 hover:border-neutral-300 hover:shadow-card transition-all duration-200 overflow-hidden group"
              >
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span className="px-2.5 py-1 rounded-full bg-[#EE3C06]/10 text-[#EE3C06] font-semibold text-[11px] uppercase tracking-wider">
                        {guide.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {guide.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#111111] group-hover:text-[#EE3C06] transition-colors leading-snug">
                      <Link href={`/guias/${guide.slug}`}>
                        {guide.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                      {guide.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs text-neutral-400">
                      Actualizado: Nov 2026
                    </span>
                    <Link
                      href={`/guias/${guide.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EE3C06] group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Leer guía</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Banner de Consulta Inmediata */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EE3C06]">
                <ShieldCheck className="w-4 h-4" />
                Pre-evaluación Gratuita
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                ¿Tienes una propiedad en SUNARP y deseas evaluar un crédito?
              </h3>
              <p className="text-sm text-neutral-600 max-w-xl">
                Envía tus consultas por WhatsApp para revisar la viabilidad registral y estimar el monto de financiamiento.
              </p>
            </div>

            <Button
              href={whatsappUrl}
              isExternal
              size="lg"
              icon={<WhatsAppIcon className="w-4 h-4" />}
              iconPosition="left"
              className="shrink-0"
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
