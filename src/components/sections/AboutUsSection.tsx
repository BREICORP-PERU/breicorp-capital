"use client";

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
  ExternalLink,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutUsSection() {
  const values = [
    {
      icon: ShieldCheck,
      name: "INTEGRIDAD",
      description:
        "Honestidad, coherencia y apego estricto a los principios éticos y legales en cada una de nuestras relaciones comerciales.",
      color: "text-[#EE3C06]",
      bg: "bg-[#EE3C06]/10",
    },
    {
      icon: Eye,
      name: "TRANSPARENCIA",
      description:
        "Comunicación clara y precisa de procesos, condiciones, plazos y requisitos en cada operación, sin letras chicas.",
      color: "text-[#C6A15B]",
      bg: "bg-[#C6A15B]/15",
    },
    {
      icon: Handshake,
      name: "CONFIANZA",
      description:
        "Construcción de vínculos sólidos y duraderos, garantizando confidencialidad y estricta protección de información.",
      color: "text-white",
      bg: "bg-white/10",
    },
    {
      icon: Scale,
      name: "RESPONSABILIDAD",
      description:
        "Evaluación prudente y diligente que pondera la capacidad económica y asegura compromisos formalmente sostenibles.",
      color: "text-[#EE3C06]",
      bg: "bg-[#EE3C06]/10",
    },
    {
      icon: FileCheck2,
      name: "SEGURIDAD JURÍDICA",
      description:
        "Formalización documental estricta mediante Escritura Pública ante Notario colegiado e inscripción registral en SUNARP.",
      color: "text-[#C6A15B]",
      bg: "bg-[#C6A15B]/15",
    },
  ];

  return (
    <section
      id="quienes-somos"
      className="py-24 lg:py-32 bg-[#0A0A0D] text-white border-t border-white/10 scroll-mt-20 relative overflow-hidden"
    >
      {/* Luces cinematográficas de fondo */}
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-[#EE3C06]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#C6A15B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Identidad Corporativa"
          title="QUIÉNES SOMOS EN BREICORP CAPITAL"
          description="Línea de negocio de BREICORP E.I.R.L. orientada a la intermediación y estructuración formal de financiamiento con respaldo inmobiliario en el Perú."
          align="center"
          className="mb-16 [&_h2]:text-white [&_p]:text-neutral-400"
        />

        {/* Misión y Visión: 2 Bloques Cinematográficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Misión */}
          <div className="p-8 sm:p-10 rounded-3xl glass-dark border border-white/10 hover:border-[#EE3C06]/40 transition-all duration-300 space-y-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE3C06]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EE3C06]/15 text-[#EE3C06] flex items-center justify-center shadow-orange-glow">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#EE3C06] block">
                  Propósito Fundamental
                </span>
                <h3 className="text-2xl font-black text-white font-sans">
                  MISIÓN
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Brindar soluciones de financiamiento con garantía hipotecaria ágiles, transparentes y accesibles mediante procesos ordenados y acompañamiento cercano. Buscamos que personas y empresas del Perú aprovechen el valor de sus inmuebles para concretar sus proyectos y que los inversionistas participen en operaciones gestionadas responsablemente.
            </p>
          </div>

          {/* Visión */}
          <div className="p-8 sm:p-10 rounded-3xl glass-dark border border-white/10 hover:border-[#C6A15B]/40 transition-all duration-300 space-y-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A15B]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C6A15B] block">
                  Objetivo Estratégico
                </span>
                <h3 className="text-2xl font-black text-white font-sans">
                  VISIÓN
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Consolidarnos como una marca referente en el mercado peruano en la presentación de oportunidades de inversión y financiamiento con respaldo inmobiliario, diferenciándonos por la excelencia en la gestión, solidez operativa, inclusión financiera y capacidad de generar valor sostenible para clientes e inversionistas.
            </p>
          </div>
        </div>

        {/* Título de Principios y Valores */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
            Principios Institucionales
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-1">
            Nuestros Valores Corporativos
          </h3>
        </div>

        {/* 5 Valores en Tarjetas de Cristal Oscuro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.name}
                className="p-6 rounded-2xl glass-dark-card border border-white/10 hover:border-white/25 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-3 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${v.bg} ${v.color} flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {v.name}
                  </h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed mt-1.5 font-normal">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vinculación institucional con Empresa Matriz y Nota de descargo */}
        <div className="mt-12 p-4 rounded-2xl glass-dark border border-white/10 text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-[#C6A15B] shrink-0" />
            <span>
              Línea de negocio de <strong>BREICORP E.I.R.L.</strong> Toda operación requiere evaluación individual y formalización por Escritura Pública.
            </span>
          </div>

          <a
            href="https://breicorp.com.pe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 shrink-0 items-center gap-1.5 text-xs font-bold text-white hover:text-[#EE3C06] transition-colors"
          >
            <span>Conoce BREICORP E.I.R.L.</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
