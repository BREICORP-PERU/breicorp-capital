"use client";

import React, { useState } from "react";
import {
  UserCheck,
  SearchCheck,
  Layers,
  ShieldCheck,
  FileText,
  Building,
  Scale,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function WhyChooseUsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const whatsappUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  const attributes = [
    {
      icon: UserCheck,
      title: "Atención personalizada directa",
      shortTitle: "Atención Directa",
      description:
        "Trato directo y cercano con un asesor comercial dedicado a entender la realidad de tu proyecto, sin centralitas automatizadas ni respuestas genéricas.",
      metric: "Asesor dedicado a tu caso",
    },
    {
      icon: SearchCheck,
      title: "Evaluación integral de cada operación",
      shortTitle: "Evaluación Real",
      description:
        "Análisis individual de la capacidad económica y del respaldo del bien inmueble. Estar reportado en centrales de riesgo no impide evaluar la viabilidad de la garantía.",
      metric: "No te descartamos por scoring",
    },
    {
      icon: Layers,
      title: "Alternativas de financiamiento estructuradas",
      shortTitle: "Estructuras Flexibles",
      description:
        "Propuestas estructuradas que se ajustan al destino que tu negocio o inversión necesita, con montos acordes al valor comercial tasado del inmueble.",
      metric: "Montos desde S/ 20,000",
    },
    {
      icon: ShieldCheck,
      title: "Acompañamiento notarial y registral",
      shortTitle: "Seguridad Notarial",
      description:
        "Coordinación notarial y registral transparente desde el estudio de títulos hasta la firma por Escritura Pública e inscripción formal en SUNARP.",
      metric: "100% formal ante Notario",
    },
  ];

  const protocolItems = [
    {
      icon: Building,
      label: "Partida en SUNARP",
      desc: "Inmuebles con dominio inscrito y verificado en la región.",
    },
    {
      icon: Scale,
      label: "Tasación Pericial",
      desc: "Determinación objetiva del valor comercial de la propiedad.",
    },
    {
      icon: FileText,
      label: "Escritura Pública",
      desc: "Firma formal ante Notario Público colegiado con fe pública.",
    },
    {
      icon: ShieldCheck,
      label: "Transparencia Total",
      desc: "Condiciones contractuales claras sin cobros ocultos.",
    },
  ];

  return (
    <section
      id="por-que-nosotros"
      className="py-24 lg:py-32 bg-white text-[#111111] border-t border-neutral-200/80 scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          kicker="Nuestros Diferenciales"
          title="¿POR QUÉ ELEGIR BREICORP CAPITAL?"
          description="Estructuramos operaciones formales que unen agilidad comercial y el máximo respaldo del derecho notarial e inmobiliario peruano."
          align="center"
          className="mb-16"
        />

        {/* Composición Split Layout Moderna */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Izquierda (7 cols): Pilares Interactivos */}
          <div className="lg:col-span-7 space-y-4">
            {attributes.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeTab === index;

              return (
                <div
                  key={item.title}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setActiveTab(index)}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? "bg-neutral-50 border-[#EE3C06] shadow-card -translate-x-1"
                      : "bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? "bg-[#EE3C06] text-white shadow-orange-glow"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold text-[#111111] uppercase tracking-tight">
                          {item.title}
                        </h3>
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-[#EE3C06]/10 text-[#EE3C06]"
                              : "text-neutral-400"
                          }`}
                        >
                          {item.metric}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Columna Derecha (5 cols): Protocolo de Seguridad Jurídica */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0F0F13] text-white p-7 sm:p-8 shadow-2xl border border-neutral-800 relative overflow-hidden">
              {/* Resplandor perimetral */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE3C06]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C6A15B]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#EE3C06] flex items-center justify-center text-white shadow-orange-glow">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6A15B]">
                        Garantía de Formalidad
                      </span>
                      <h4 className="text-sm font-extrabold text-white uppercase tracking-tight">
                        Matriz de Seguridad Notarial
                      </h4>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                    SUNARP
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  Cada operación en BREICORP CAPITAL sigue un protocolo estricto de 4 filtros legales para garantizar certeza y protección a ambas partes:
                </p>

                {/* Lista de filtros del protocolo */}
                <div className="space-y-3">
                  {protocolItems.map((proto) => {
                    const ProtoIcon = proto.icon;
                    return (
                      <div
                        key={proto.label}
                        className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3.5 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C6A15B] shrink-0">
                          <ProtoIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="text-xs font-bold text-white block">
                            {proto.label}
                          </strong>
                          <span className="text-[11px] text-neutral-400">
                            {proto.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer del card */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span className="text-[11px]">
                    Tingo María y Huánuco, Perú
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#EE3C06] hover:underline"
                  >
                    <span>Iniciar consulta</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
