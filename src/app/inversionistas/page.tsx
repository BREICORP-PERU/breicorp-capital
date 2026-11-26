import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowUpRight } from "lucide-react";
import EditorialImage from "@/components/ui/EditorialImage";
import { photos } from "@/data/photos";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItemData } from "@/components/ui/Accordion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Button from "@/components/ui/Button";
import InvestorForm from "./InvestorForm";
import FAQStructuredData from "@/components/seo/FAQStructuredData";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Red de Inversionistas",
  alternates: { canonical: "/inversionistas" },
  description:
    "Conoce la red de inversionistas de BREICORP CAPITAL, su proceso de evaluación y los criterios de estructuración de operaciones respaldadas por garantías.",
  openGraph: {
    title: "Red de Inversionistas | BREICORP CAPITAL",
    description:
      "Conoce la red de inversionistas de BREICORP CAPITAL, su proceso de evaluación y los criterios de estructuración de operaciones respaldadas por garantías.",
    url: `${siteConfig.domain}/inversionistas`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-breicorp-capital.png",
        width: 1200,
        height: 630,
        alt: "BREICORP CAPITAL - Red de Inversionistas",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red de Inversionistas | BREICORP CAPITAL",
    description:
      "Conoce la red de inversionistas de BREICORP CAPITAL, su proceso de evaluación y los criterios de estructuración de operaciones respaldadas por garantías.",
    images: ["/og-breicorp-capital.png"],
  },
};

export default function InversionistasPage() {
  const whatsappUrl = whatsappHref(siteConfig.contact.whatsappInvestorsMessage);

  const modelHighlights = [
    {
      title: "Garantía Directa en SUNARP",
      description:
        "Si la operación contempla una hipoteca, su constitución e inscripción se documentan conforme a los acuerdos de las partes.",
    },
    {
      title: "Pre-evaluación Integral",
      description:
        "Analizamos la capacidad de pago del solicitante y la tasación comercial del inmueble para respaldar la operación.",
    },
    {
      title: "Administración Transparente",
      description:
        "Seguimiento documental, coordinación de cronogramas y liquidaciones según los términos convenidos.",
    },
  ];

  const generalFeatures = [
    {
      label: "Garantía",
      value: "Inmueble en SUNARP",
      detail: "Propiedades con partida registral inscrita y verificada",
    },
    {
      label: "Formalidad",
      value: "Escritura Pública",
      detail: "Suscripción ante Notario Público colegiado",
    },
    {
      label: "Perfil",
      value: "Precalificado",
      detail: "Solicitantes con actividad comercial y capacidad de pago",
    },
    {
      label: "Gestión",
      value: "Acompañamiento",
      detail: "Administración operativa de la operación",
    },
  ];

  const investorFaqs: AccordionItemData[] = [
    {
      id: "inv-faq-1",
      question: "¿A nombre de quién se inscribe la garantía hipotecaria?",
      answer:
        "La titularidad, alcance e inscripción de cualquier garantía se definen en los documentos de cada operación. Solicita revisar dichos documentos antes de decidir participar.",
    },
    {
      id: "inv-faq-2",
      question: "¿Qué tipo de inmuebles respaldan las operaciones?",
      answer:
        "Se pueden evaluar inmuebles con partida registral. El tipo de bien aceptable y la revisión de títulos dependen de cada operación.",
    },
    {
      id: "inv-faq-3",
      question: "¿Existe una tasa de rentabilidad fija o garantizada?",
      answer:
        "No. BREICORP CAPITAL no ofrece rentabilidades garantizadas ni ausencia de riesgo. Los términos, plazos y condiciones se pactan contractualmente en cada operación.",
    },
    {
      id: "inv-faq-4",
      question: "¿Cómo comienzo a formar parte de la red de inversionistas?",
      answer:
        "Completa el formulario para preparar una consulta por WhatsApp. El equipo podrá responderte y explicar el proceso de evaluación.",
    },
  ];

  return (
    <>
      <FAQStructuredData items={investorFaqs} />
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <div className="site-shell"><Link href="/">Inicio</Link><span aria-hidden="true"> / </span>Inversionistas</div>
      </nav>

      <section className="site-shell inner-hero editorial-split">
        <div className="section-intro section-intro-inline">
          <h1 className="page-headline">Inversión con respaldo inmobiliario</h1>
          <p>Conoce cómo participar en operaciones privadas de financiamiento respaldadas por inmuebles e instrumentadas según las condiciones de cada operación.</p>
          <div className="action-row">
            <Button href="#formulario" size="lg" icon={<ArrowUpRight className="size-4" />}>Completar consulta</Button>
            <Button href={whatsappUrl} isExternal variant="outline" size="lg" icon={<WhatsAppIcon className="size-5" />} iconPosition="left">
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
        <EditorialImage photo={photos.investment} preload />
      </section>

      <section className="editorial-section tone-sand" aria-labelledby="modelo-inversion">
        <div className="site-shell editorial-split">
          <EditorialImage photo={photos.conversation} />
          <div>
            <SectionHeading id="modelo-inversion" title="Cómo participar" align="left" />
            <dl className="mt-5 divide-y divide-[#D9CEC2]">
              {modelHighlights.map((item) => (
                <div key={item.title} className="py-4">
                  <dt className="text-lg font-semibold">{item.title}</dt>
                  <dd className="mt-1 text-[var(--ink-muted)]">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="condiciones-inversion">
        <div className="site-shell">
          <div className="editorial-split">
            <div>
              <SectionHeading id="condiciones-inversion" title="Condiciones de las operaciones" align="left" />
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {generalFeatures.map((item) => (
                  <div key={item.label} className="border-t border-[#D9CEC2] pt-3">
                    <dt className="text-sm text-[var(--ink-muted)]">{item.label}</dt>
                    <dd className="mt-1 text-lg font-semibold">{item.value}</dd>
                    <dd className="mt-1 text-sm text-[var(--ink-muted)]">{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <EditorialImage photo={photos.documents} />
          </div>
          <aside className="mt-8 rounded-xl border border-[#97897A] bg-white p-5">
            <h3 className="mb-2 flex items-center gap-2 font-semibold"><AlertTriangle className="size-5" aria-hidden="true" /> Riesgos y condiciones</h3>
            <p>BREICORP CAPITAL no publica rentabilidades fijas ni garantiza retornos. Las condiciones de cada operación se acuerdan y documentan contractualmente en Escritura Pública según la naturaleza de cada financiamiento.</p>
          </aside>
        </div>
      </section>

      <section id="formulario" className="editorial-section tone-sand" aria-labelledby="consulta-inversion">
        <div className="site-shell editorial-split items-start">
          <div>
            <SectionHeading
              id="consulta-inversion"
              title="Solicitar información para invertir"
              description="Completa tus datos para preparar una consulta por WhatsApp."
              align="left"
            />
            <EditorialImage photo={photos.financialAdvice} className="mt-5" />
          </div>
          <InvestorForm />
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="faq-inversion">
        <div className="site-shell editorial-split items-start">
          <div>
            <SectionHeading id="faq-inversion" title="Preguntas de inversionistas" align="left" />
            <EditorialImage photo={photos.city} className="mt-5" />
          </div>
          <Accordion items={investorFaqs} defaultOpenId="inv-faq-1" />
        </div>
      </section>
    </>
  );
}
