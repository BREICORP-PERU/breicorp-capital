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
import InvestorForm from "./InvestorForm";

export const metadata: Metadata = {
  title: "Red de Inversionistas | BREICORP CAPITAL",
  description:
    "Conoce la participación privada en operaciones de financiamiento con garantía hipotecaria sujetas a evaluación y formalización.",
};

export default function InversionistasPage() {
  const steps = [
    {
      step: "01",
      title: "Consulta inicial",
      description:
        "Preparas una consulta con tus datos básicos y decides si la envías por WhatsApp. El equipo comercial podrá responderte por ese canal.",
    },
    {
      step: "02",
      title: "Presentación de Expedientes",
      description:
        "De existir oportunidades disponibles, se presentará la información y las verificaciones realizadas para cada caso.",
    },
    {
      step: "03",
      title: "Formalización en Notaría",
      description:
        "Las condiciones de la garantía y su formalización notarial y registral se definirán y documentarán en cada operación.",
    },
    {
      step: "04",
      title: "Administración y Seguimiento",
      description:
        "El alcance de la administración y el seguimiento se establecerá en los documentos de cada operación.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Barra de retorno y migas de pan */}
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

      {/* Hero de Inversionistas */}
      <section className="relative py-16 lg:py-24 bg-[#111111] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C6A15B] text-xs font-semibold uppercase tracking-wider border border-[#C6A15B]/30">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
              Participación Privada Estructurada
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight font-sans">
              OPORTUNIDADES DE INVERSIÓN{" "}
              <span className="text-[#C6A15B]">CON RESPALDO</span> INMOBILIARIO.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Conoce nuestro modelo de participación en operaciones de financiamiento con garantía hipotecaria y las condiciones para formar parte de nuestra red de inversionistas en Tingo María y Huánuco.
            </p>

            <a
              href="#registro-inversionistas"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#FF6801] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E55D00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B]"
            >
              QUIERO RECIBIR INFORMACIÓN
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <div className="pt-4 flex items-center gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                <span>Garantía sujeta a evaluación y contrato</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#C6A15B]" />
                <span>Escritura Pública Notarial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulta de inversión integrada en la página */}
      <section id="registro-inversionistas" className="scroll-mt-24 bg-[#F5F5F5] py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="space-y-5 lg:col-span-5 lg:pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#A77B30]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
              Contacto para inversionistas
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#111111] sm:text-4xl">
              Haz crecer tus oportunidades de inversión
            </h2>
            <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
              Déjanos tus datos y nuestro equipo se comunicará contigo para brindarte información sobre las oportunidades de inversión de BREICORP CAPITAL.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              El formulario prepara una consulta en WhatsApp. Podrás revisar el mensaje y decidir si lo envías.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <InvestorForm />
          </div>
        </div>
      </section>

      {/* Propuesta de Valor y Pilares del Modelo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Gobernanza del Capital"
            title="¿POR QUÉ PARTICIPAR A TRAVÉS DE BREICORP CAPITAL?"
            description="Conoce los aspectos que deberán evaluarse y documentarse antes de participar en una operación."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4 hover:border-neutral-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#C6A15B]/15 text-[#C6A15B] flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">
                Garantía Definida en Cada Operación
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                La titularidad, prioridad y condiciones de cualquier hipoteca dependerán del inmueble, la evaluación registral y los documentos contractuales de la operación.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4 hover:border-neutral-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FF6801]/10 text-[#FF6801] flex items-center justify-center">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">
                Evaluación de Riesgo y Capacidad de Pago
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                La evaluación prevista considera la actividad económica, la capacidad de pago y, cuando corresponda, la situación registral y tasación del inmueble. Ninguna garantía elimina el riesgo de pérdida.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4 hover:border-neutral-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">
                Gestión Según las Condiciones Pactadas
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Las tareas de seguimiento, cobranza e información al inversionista se definirán expresamente para cada operación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso para Inversionistas */}
      <section className="py-20 bg-[#F5F5F5] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Ruta de Participación"
            title="PROCESO PARA FORMAR PARTE DE LA RED."
            description="Ruta informativa prevista; cada participación dependerá de la evaluación y los acuerdos entre las partes."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-subtle space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C6A15B]/15 text-[#C6A15B] font-mono font-bold flex items-center justify-center text-sm">
                    {st.step}
                  </div>
                  <h4 className="text-base font-bold text-[#111111]">
                    {st.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100 text-[11px] font-semibold text-[#FF6801]">
                  Etapa formal {st.step}
                </div>
              </div>
            ))}
          </div>

          {/* Advertencia preventiva obligatoria */}
          <div className="mt-12 p-6 rounded-2xl bg-white border-l-4 border-l-[#C6A15B] border-neutral-200 text-xs sm:text-sm text-neutral-700 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-[#111111] uppercase tracking-wider text-xs">
              <AlertTriangle className="w-4 h-4 text-[#C6A15B]" />
              Aviso de Prudencia y Cumplimiento Normativo
            </div>
            <p>
              BREICORP CAPITAL no publica rentabilidades fijas, no garantiza tasas de retorno ni promete recuperaciones sin riesgo. Las condiciones de cada operación se pactarán entre las partes y se documentarán según la estructura contractual aplicable.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

