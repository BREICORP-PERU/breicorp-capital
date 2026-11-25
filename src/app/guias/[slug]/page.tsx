import EditorialImage from "@/components/ui/EditorialImage";
import ReadingIndex from "@/components/ui/ReadingIndex";
import GuideCard from "@/components/ui/GuideCard";
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import Accordion, { AccordionItemData } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import FAQStructuredData from "@/components/seo/FAQStructuredData";
import { guides, getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guía no encontrada | BREICORP CAPITAL",
    };
  }

  const url = `${siteConfig.domain}/guias/${guide.slug}`;

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${guide.title} | ${siteConfig.name}`,
      description: guide.metaDescription,
      url,
      siteName: siteConfig.name,
      locale: "es_PE",
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [guide.author],
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.title} | ${siteConfig.name}`,
      description: guide.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const url = `${siteConfig.domain}/guias/${guide.slug}`;
  const whatsappUrl = whatsappHref(
    `Hola BREICORP CAPITAL, estuve leyendo la guía "${guide.title}" y deseo consultar sobre la viabilidad de mi caso.`
  );

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteConfig.domain}/` },
          { "@type": "ListItem", position: 2, name: "Guías Financieras", item: `${siteConfig.domain}/guias` },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title,
        description: guide.metaDescription,
        url,
        inLanguage: "es-PE",
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.domain,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.domain}/LOGOTIPO.webp`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      },
    ],
  };

  const faqAccordionItems: AccordionItemData[] = guide.faqs.map((f, idx) => ({
    id: `guide-faq-${idx}`,
    question: f.question,
    answer: f.answer,
  }));

  const otherGuides = guides.filter((g) => g.slug !== guide.slug);

  return (
    <article className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <FAQStructuredData items={guide.faqs} />

      {/* Migas de pan */}
      <div className="breadcrumb">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="Ruta de navegación"
            className="text-xs text-neutral-500 flex items-center gap-2 flex-wrap"
          >
            <Link href="/" className="hover:text-[#111111] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/guias" className="hover:text-[#111111] transition-colors">
              Guías
            </Link>
            <span>/</span>
            <span className="font-semibold break-words min-w-0">
              {guide.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-10">
        {/* Encabezado del artículo */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-[#F3E7DC] px-3 py-1 font-semibold text-brand-black">
              {guide.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-neutral-500">
              <Clock className="w-3.5 h-3.5" />
              {guide.readTime}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="inline-flex items-center gap-1.5 text-neutral-500">
              <Calendar className="w-3.5 h-3.5" />
              Actualizado en Noviembre 2026
            </span>
          </div>

          <h1 className="page-headline">
            {guide.title}
          </h1>

          <p className="text-lg text-neutral-600 leading-relaxed font-medium">
            {guide.summary}
          </p>

          <div className="text-xs text-neutral-500 pt-1 border-b border-neutral-200 pb-6">
            Por <span className="font-semibold text-neutral-800">{guide.author}</span>
          </div>
          <EditorialImage photo={guide.photo} className="reading-cover" sizes="(min-width: 896px) 848px, 100vw" preload />
        </header>

        <ReadingIndex items={guide.sections.map((section, index) => ({ id: `tema-${index + 1}`, label: section.title }))} />

        {/* Puntos clave / Key takeaways */}
        {guide.keyTakeaways && guide.keyTakeaways.length > 0 && (
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/90 space-y-3">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-brand-black">
              <CheckCircle2 className="w-4 h-4" />
              Puntos clave que debes conocer
            </h2>
            <ul className="space-y-2 text-sm text-neutral-700">
              {guide.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EE3C06] mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Secciones del artículo */}
        <div className="max-w-[70ch] space-y-10 text-brand-black leading-relaxed">
          {guide.sections.map((sec, idx) => (
            <section key={idx} id={`tema-${idx + 1}`} className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight">
                {sec.title}
              </h2>

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-neutral-700 leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.list && sec.list.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                  {sec.list.map((item, lIdx) => (
                    <li key={lIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {sec.highlight && (
                <div className="p-4 rounded-xl bg-[#FAF6ED] border-l-4 border-[#C6A15B] text-sm text-neutral-800 font-medium">
                  {sec.highlight}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* CTA Intermedio de Conversión a WhatsApp */}
        <div className="my-12 p-8 rounded-3xl bg-[#111111] text-white space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-black">
              <ShieldCheck className="w-4 h-4" />
              Evaluación Gratuita
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              ¿Deseas evaluar si tu inmueble califica?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              Envíanos una consulta por WhatsApp con la ubicación de tu predio para indicarte la viabilidad técnica y documental.
            </p>
          </div>

          <Button
            href={whatsappUrl}
            isExternal
            size="lg"
            icon={<WhatsAppIcon className="w-4 h-4 text-[#25D366]" />}
            iconPosition="left"
            className="shrink-0 font-bold"
          >
            Consultar por WhatsApp
          </Button>
        </div>

        {/* Preguntas frecuentes del tema */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="pt-8 border-t border-neutral-200 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE3C06]">
                Respuestas Rápidas
              </span>
              <h2 className="text-2xl font-bold text-[#111111]">
                Preguntas frecuentes sobre este tema
              </h2>
            </div>

            <Accordion items={faqAccordionItems} />
          </section>
        )}

        {/* Otras guías recomendadas */}
        {otherGuides.length > 0 && (
          <section className="pt-10 border-t border-neutral-200 space-y-6">
            <h2 className="text-xl font-bold text-[#111111]">
              Otras guías recomendadas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherGuides.map((g) => <GuideCard key={g.slug} guide={g} />)}
            </div>
          </section>
        )}

        {/* Botón de retorno */}
        <div className="pt-6">
          <Link
            href="/guias"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-black underline underline-offset-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todas las guías</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
