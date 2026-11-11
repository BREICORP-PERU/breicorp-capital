import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Building,
  Scale,
  FileCheck2,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  AlertTriangle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItemData } from "@/components/ui/Accordion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Button from "@/components/ui/Button";
import InvestorForm from "./InvestorForm";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Red de Inversionistas | BREICORP CAPITAL",
  description:
    "Participa en operaciones de financiamiento con garantía hipotecaria inscrita en SUNARP en Tingo María y Huánuco.",
  openGraph: {
    title: "Red de Inversionistas | BREICORP CAPITAL",
    description:
      "Participa en operaciones de financiamiento con garantía hipotecaria inscrita en SUNARP en Tingo María y Huánuco.",
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
      "Participa en operaciones de financiamiento con garantía hipotecaria inscrita en SUNARP en Tingo María y Huánuco.",
    images: ["/og-breicorp-capital.png"],
  },
};

export default function InversionistasPage() {
  const whatsappUrl = whatsappHref(siteConfig.contact.whatsappInvestorsMessage);

  const modelHighlights = [
    {
      icon: Building,
      title: "Garantía Directa en SUNARP",
      description:
        "La hipoteca se constituye por Escritura Pública ante Notario y se inscribe en Registros Públicos a favor del inversionista.",
    },
    {
      icon: FileCheck2,
      title: "Pre-evaluación Integral",
      description:
        "Analizamos la capacidad de pago del solicitante y la tasación comercial del inmueble para respaldar la operación.",
    },
    {
      icon: Briefcase,
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
        "La hipoteca se eleva a Escritura Pública y se inscribe en SUNARP a favor directo del inversionista, otorgando un respaldo real e individual sobre el bien inmueble.",
    },
    {
      id: "inv-faq-2",
      question: "¿Qué tipo de inmuebles respaldan las operaciones?",
      answer:
        "Se evalúan exclusivamente bienes raíces con partida registral independizada (casas, locales, terrenos urbanos) con estudio de títulos previo.",
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
        "Completa el formulario de contacto para que nuestro equipo directivo coordine una reunión informativa y te presente las operaciones disponibles.",
    },
  ];

  return (
    <div className="pt-24 pb-12 bg-white">
      {/* 1. Barra de retorno y migas de pan */}
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#111111] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a Inicio</span>
            </Link>
            <span>/</span>
            <span className="text-[#C6A15B] font-semibold">Red de Inversionistas</span>
          </div>
        </div>
      </div>

      {/* 1. Hero de Inversión */}
      <section className="relative py-14 lg:py-20 bg-[#111111] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C6A15B] text-xs font-semibold uppercase tracking-wider border border-[#C6A15B]/30">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
              Participación Privada Estructurada
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight font-sans">
              PARTICIPA EN FINANCIAMIENTO CON{" "}
              <span className="text-[#C6A15B]">RESPALDO INMOBILIARIO</span>.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Conoce nuestro modelo para participar en operaciones de financiamiento formalmente respaldadas por hipotecas inscritas en SUNARP.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="#formulario"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="font-bold tracking-wide"
              >
                COMPLETAR CONSULTA
              </Button>

              <Button
                href={whatsappUrl}
                isExternal
                variant="outline-light"
                size="lg"
                icon={<WhatsAppIcon className="w-4 h-4 text-[#25D366]" />}
                iconPosition="left"
              >
                CONSULTAR POR WHATSAPP
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                <span>Garantía hipotecaria en SUNARP</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#C6A15B]" />
                <span>Escritura Pública Notarial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Breve explicación del modelo de participación */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Nuestro Modelo"
            title="¿CÓMO PARTICIPAR EN LAS OPERACIONES?"
            description="Una estructura formal que prioriza la seguridad jurídica y el análisis técnico previo de cada caso."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {modelHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C6A15B]/15 text-[#C6A15B] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Características generales de las operaciones */}
      <section className="py-16 lg:py-20 bg-[#F5F5F5] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Condiciones Operativas"
            title="CARACTERÍSTICAS DE LAS OPERACIONES"
            description="Parámetros fundamentales de estructuración legal y financiera."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {generalFeatures.map((feat) => (
              <div
                key={feat.label}
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-subtle space-y-2"
              >
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  {feat.label}
                </div>
                <div className="text-xl font-bold text-[#111111]">
                  {feat.value}
                </div>
                <div className="text-xs text-neutral-600 pt-1">
                  {feat.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Aviso preventivo obligatorio */}
          <div className="mt-10 p-5 rounded-2xl bg-white border-l-4 border-l-[#C6A15B] border-neutral-200 text-xs sm:text-sm text-neutral-700 space-y-1.5 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-2 font-bold text-[#111111] uppercase tracking-wider text-xs">
              <AlertTriangle className="w-4 h-4 text-[#C6A15B]" />
              Aviso de Cumplimiento Normativo
            </div>
            <p>
              BREICORP CAPITAL no publica rentabilidades fijas ni garantiza retornos. Las condiciones de cada operación se acuerdan y documentan contractualmente en Escritura Pública según la naturaleza de cada financiamiento.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Formulario visible de inversionistas */}
      <section id="formulario" className="py-16 lg:py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Contacto Privado"
            title="SOLICITAR INFORMACIÓN PARA INVERTIR"
            description="Completa tus datos y genera tu consulta directamente en WhatsApp para conversar con nuestro equipo directivo."
            align="center"
            className="mb-10"
          />

          <InvestorForm />
        </div>
      </section>

      {/* 5. Preguntas frecuentes breves */}
      <section className="py-16 lg:py-20 bg-[#F5F5F5] border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Preguntas para Inversionistas"
            title="DUDAS HABITUALES SOBRE PARTICIPACIÓN"
            description="Aspectos clave sobre formalidad notarial, garantías y tiempos."
            align="center"
            className="mb-10"
          />

          <Accordion items={investorFaqs} defaultOpenId="inv-faq-1" />
        </div>
      </section>
    </div>
  );
}
