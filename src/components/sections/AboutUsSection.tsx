import React from "react";
import {
  Compass,
  Target,
  ShieldCheck,
  Eye,
  Handshake,
  Scale,
  FileCheck2,
  Info,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutUsSection() {
  const values = [
    {
      icon: ShieldCheck,
      name: "INTEGRIDAD",
      description:
        "Honestidad, coherencia y apego estricto a los principios éticos y legales en nuestras relaciones.",
    },
    {
      icon: Eye,
      name: "TRANSPARENCIA",
      description:
        "Comunicación clara de procesos, condiciones, plazos y requerimientos de cada operación.",
    },
    {
      icon: Handshake,
      name: "CONFIANZA",
      description:
        "Relaciones sólidas y responsables, garantizando confidencialidad y protección de información.",
    },
    {
      icon: Scale,
      name: "RESPONSABILIDAD",
      description:
        "Evaluación prudente y diligente que pondera la capacidad económica y los compromisos adquiridos.",
    },
    {
      icon: FileCheck2,
      name: "SEGURIDAD JURÍDICA",
      description:
        "Formalización estricta por Escritura Pública e inscripción registral en SUNARP.",
    },
  ];

  return (
    <section
      id="quienes-somos"
      className="py-20 lg:py-24 bg-white border-t border-neutral-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Identidad Corporativa"
          title="QUIÉNES SOMOS"
          description="Línea de negocio de BREICORP E.I.R.L. orientada a la intermediación y estructuración de financiamiento formal con respaldo inmobiliario en el Perú."
          align="center"
          className="mb-14"
        />

        {/* Misión y Visión: Bloque sintético de 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Misión */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#F5F5F5] border border-neutral-200/90 space-y-4 hover:border-neutral-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EE3C06]/10 text-[#EE3C06] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#EE3C06]">
                  Propósito
                </span>
                <h3 className="text-xl font-bold text-[#111111]">MISIÓN</h3>
              </div>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Brindar soluciones de financiamiento con garantía hipotecaria ágiles, transparentes y accesibles mediante procesos ordenados y acompañamiento cercano. Buscamos que personas y empresas del Perú aprovechen el valor de sus inmuebles para concretar sus proyectos y que los inversionistas participen en operaciones gestionadas responsablemente.
            </p>
          </div>

          {/* Visión */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#F5F5F5] border border-neutral-200/90 space-y-4 hover:border-neutral-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/15 text-[#C6A15B] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C6A15B]">
                  Objetivo Estratégico
                </span>
                <h3 className="text-xl font-bold text-[#111111]">VISIÓN</h3>
              </div>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Consolidarnos como una marca referente en el mercado peruano en la presentación de oportunidades de inversión y financiamiento con respaldo inmobiliario, diferenciándonos por la excelencia en la gestión, solidez operativa, inclusión financiera y capacidad de generar valor sostenible para clientes e inversionistas.
            </p>
          </div>
        </div>

        {/* Título de Valores */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Principios Institucionales
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] uppercase tracking-tight mt-1">
            Nuestros Valores
          </h3>
        </div>

        {/* 5 Valores: Tarjetas compactas horizontales / cuadrícula */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.name}
                className="p-5 rounded-xl bg-white border border-neutral-200 shadow-subtle hover:border-neutral-300 transition-all flex flex-col justify-between space-y-2 group"
              >
                <div className="w-9 h-9 rounded-lg bg-neutral-100 group-hover:bg-[#EE3C06]/10 text-neutral-700 group-hover:text-[#EE3C06] flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                    {v.name}
                  </h4>
                  <p className="text-[11px] text-neutral-500 leading-relaxed mt-1">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota legal sobre la misión/visión */}
        <div className="mt-8 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-500 flex items-center gap-2.5 max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-neutral-400 shrink-0" />
          <span>
            La misión y visión representan objetivos estratégicos. Toda operación requiere evaluación individual y formalización contractual conforme al marco legal aplicable.
          </span>
        </div>
      </div>
    </section>
  );
}

