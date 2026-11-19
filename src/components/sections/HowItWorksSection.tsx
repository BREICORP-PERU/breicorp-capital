"use client";

import React, { useState } from "react";
import {
  MessageSquareText,
  SearchCheck,
  FileSignature,
  AlertCircle,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const whatsappUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  const steps = [
    {
      number: "01",
      title: "CONTACTO & PRE-CALIFICACIÓN",
      subtitle: "Respuesta preliminar ágil",
      time: "En minutos vía WhatsApp",
      description:
        "Nos compartes la información básica de tu inmueble (partida registral) y el monto requerido. Verificamos la viabilidad preliminar sin costo alguno.",
      icon: MessageSquareText,
      tag: "Paso Inicial",
      metrics: ["Sin cobros por adelantado", "Atención directa personalizada"],
    },
    {
      number: "02",
      title: "EVALUACIÓN & TASACIÓN TÉCNICA",
      subtitle: "Análisis jurídico e inmobiliario",
      time: "48 a 72 horas hábiles",
      description:
        "Revisamos los títulos en SUNARP, comprobamos la ausencia de impedimentos legales y tasamos el valor comercial real del bien para estructurar la propuesta.",
      icon: SearchCheck,
      tag: "Fase Técnica",
      metrics: ["Estudio de títulos SUNARP", "Tasación comercial objetiva"],
    },
    {
      number: "03",
      title: "ESCRITURA PÚBLICA & DESEMBOLSO",
      subtitle: "Formalización notarial con validez legal",
      time: "Firma notarial",
      description:
        "Suscripción del contrato de mutuo con garantía hipotecaria ante Notario Público colegiado, ingreso registral y desembolso del financiamiento acordado.",
      icon: FileSignature,
      tag: "Cierre Formal",
      metrics: ["Escritura Pública Notarial", "Garantía inscrita en SUNARP"],
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-24 lg:py-32 bg-[#0B0B0E] text-white border-t border-white/10 scroll-mt-20 relative overflow-hidden"
    >
      {/* Luces y ambientación técnica de fondo */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#EE3C06]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#C6A15B]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Proceso Operativo y Formal"
          title="¿CÓMO FUNCIONA EL FINANCIAMIENTO?"
          description="Una ruta transparente de tres fases que une agilidad en la evaluación comercial y total rigor jurídico notarial."
          align="center"
          className="mb-16 [&_h2]:text-white [&_p]:text-neutral-400"
        />

        {/* Barra de progreso secuencial animada en Desktop */}
        <div className="hidden lg:block relative mb-12">
          {/* Línea base */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />
          {/* Línea activa con gradiente de luz */}
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#EE3C06] via-[#FF6A2B] to-[#C6A15B] -translate-y-1/2 transition-all duration-500 ease-out"
            style={{
              width: activeStep === 0 ? "25%" : activeStep === 1 ? "60%" : "100%",
            }}
          />

          <div className="grid grid-cols-3 relative">
            {steps.map((step, idx) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className="flex flex-col items-center group cursor-pointer text-center focus:outline-none"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 relative z-10 ${
                    activeStep === idx
                      ? "bg-[#EE3C06] text-white shadow-orange-glow scale-110 ring-4 ring-[#EE3C06]/20"
                      : "bg-[#18181D] text-neutral-400 border border-white/10 group-hover:border-white/30"
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`text-xs uppercase font-bold tracking-wider mt-3 transition-colors ${
                    activeStep === idx ? "text-[#EE3C06]" : "text-neutral-400 group-hover:text-white"
                  }`}
                >
                  {step.tag}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 3 Pasos Visuales en Tarjetas Cinematográficas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeStep === index;

            return (
              <div
                key={item.number}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                className={`group relative p-7 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isSelected
                    ? "glass-dark border-[#EE3C06]/80 shadow-[0_12px_40px_rgba(238,60,6,0.15)] ring-1 ring-[#EE3C06]/30 -translate-y-1.5"
                    : "glass-dark-card border-white/10 hover:border-white/20 hover:bg-[#18181F]/70"
                }`}
              >
                {/* Indicador de fase activa */}
                {isSelected && (
                  <div className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-[#EE3C06] text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                    Fase Activa
                  </div>
                )}

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[#EE3C06] text-white shadow-orange-glow"
                          : "bg-white/10 text-neutral-300 group-hover:text-white group-hover:bg-white/15"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-3xl font-black font-mono text-white/20 group-hover:text-white/40 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-[#C6A15B] font-semibold uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.time}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Micro-indicadores de cumplimiento */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    {item.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="flex items-center gap-2 text-xs text-neutral-300"
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isSelected ? "text-[#EE3C06]" : "text-neutral-500"
                          }`}
                        />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono text-[11px]">Etapa {item.number} de 03</span>
                  <span
                    className={`inline-flex items-center gap-1 font-bold text-[11px] uppercase tracking-wider transition-colors ${
                      isSelected ? "text-[#EE3C06]" : "text-neutral-400"
                    }`}
                  >
                    Detalles <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Aclaración legal e invitación directa */}
        <div className="mt-12 p-5 rounded-2xl glass-dark border border-white/10 text-xs text-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-lg">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#EE3C06] shrink-0" />
            <span className="leading-relaxed">
              La aprobación definitiva y las condiciones específicas quedan sujetas a la evaluación del título registral en SUNARP y la formalización notarial respectiva.
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 px-4 py-2 rounded-xl bg-[#EE3C06] hover:bg-[#D63404] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
            <span>Consultar mi caso</span>
          </a>
        </div>
      </div>
    </section>
  );
}
