"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Store,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { whatsappHref } from "@/config/siteConfig";

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);

  const whatsappMypeUrl = whatsappHref(
    "Hola BREICORP CAPITAL, deseo consultar sobre un Crédito MYPE para mi negocio."
  );
  const whatsappHipotecarioUrl = whatsappHref(
    "Hola BREICORP CAPITAL, deseo consultar sobre un Crédito con Garantía Hipotecaria."
  );

  return (
    <section
      ref={containerRef}
      id="soluciones"
      className="relative py-24 lg:py-32 bg-[#F8F9FA] text-[#111111] border-t border-neutral-200/80 scroll-mt-20 overflow-hidden"
    >
      <div id="creditos" className="-mt-20 pt-20" />

      {/* Sutil halo decorativo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          kicker="Soluciones de Financiamiento"
          title="INSTRUMENTOS DE CAPITAL A TU MEDIDA"
          description="Estructuras formales diseñadas para resolver desde necesidades de liquidez comercial hasta proyectos patrimoniales de gran envergadura."
          align="center"
          className="mb-16"
        />

        {/* Bento Grid Visual Asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1 (Flagship / 7 Columnas): CRÉDITO CON GARANTÍA HIPOTECARIA */}
          <div className="lg:col-span-7 group flex flex-col justify-between rounded-3xl bg-[#111111] text-white overflow-hidden shadow-card border border-neutral-800 hover:border-neutral-700 transition-all duration-300 relative min-h-[460px]">
            {/* Imagen de fondo con gradiente inmersivo */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/garantia-hipotecaria.jpg"
                alt="Edificio moderno para crédito con garantía hipotecaria"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter brightness-[0.70] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/90 via-transparent to-transparent" />
            </div>

            {/* Contenido superior de la Card */}
            <div className="relative z-10 p-7 sm:p-9 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE3C06] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" /> Solución Principal
                </span>
                <span className="text-xs text-neutral-300 font-mono">
                  Desde S/ 20,000
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-sans">
                  CRÉDITO CON GARANTÍA HIPOTECARIA
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                  Alternativa de financiamiento de mayor volumen respaldada por un inmueble con partida inscrita en SUNARP. Evaluación individual basada en la solidez del activo y viabilidad de pago.
                </p>
              </div>

              {/* Chips de características técnicas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase text-neutral-400 block font-semibold">
                    Inmuebles admitidos
                  </span>
                  <span className="text-xs font-bold text-white">
                    Casas, locales y terrenos
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase text-neutral-400 block font-semibold">
                    Formalización
                  </span>
                  <span className="text-xs font-bold text-white">
                    Escritura Pública Notarial
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase text-neutral-400 block font-semibold">
                    Cobertura
                  </span>
                  <span className="text-xs font-bold text-[#C6A15B]">
                    Tingo María y Huánuco
                  </span>
                </div>
              </div>
            </div>

            {/* Acciones inferiores de la Card */}
            <div className="relative z-10 p-7 sm:p-9 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10 mt-6">
              <a
                href={whatsappHipotecarioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#EE3C06] hover:bg-[#D63404] text-white transition-all shadow-orange-glow active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Consultar con Garantía</span>
              </a>

              <Link
                href="/prestamos-garantia-hipotecaria"
                className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white transition-colors group/link"
              >
                <span>Conocer requisitos y proceso</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Columna derecha: 2 Cards verticales (5 Columnas) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {/* Card 2: CRÉDITOS MYPE */}
            <div className="group flex-1 rounded-3xl bg-white border border-neutral-200 shadow-subtle hover:shadow-card hover:border-neutral-300 transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-7">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#EE3C06]/10 text-[#EE3C06] flex items-center justify-center">
                    <Store className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700">
                    Comercio y Empresa
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-[#111111] uppercase tracking-tight">
                    CRÉDITOS MYPE
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Financiamiento para capital de trabajo, adquisición de mercadería, campañas estacionales o modernización de negocios activos en la región.
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-neutral-600 pt-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EE3C06]" /> Evaluación ágil
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EE3C06]" /> Sin trabas rígidas
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100 mt-5 flex items-center justify-between gap-3">
                <a
                  href={whatsappMypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-900 hover:bg-[#EE3C06] text-white transition-all shadow-subtle active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Solicitar MYPE</span>
                </a>

                <Link
                  href="/financiamiento-empresarial"
                  className="text-xs font-semibold text-neutral-700 hover:text-[#EE3C06] transition-colors inline-flex items-center gap-1"
                >
                  <span>Detalles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: OPORTUNIDADES DE INVERSIÓN */}
            <div className="group flex-1 rounded-3xl bg-[#111111] text-white border border-neutral-800 shadow-card hover:border-[#C6A15B]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-7 relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/15 text-[#C6A15B] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-[#C6A15B]/15 text-[#C6A15B] border border-[#C6A15B]/30">
                    Participación Privada
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    OPORTUNIDADES DE INVERSIÓN
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Participa en operaciones estructuradas de financiamiento con garantía hipotecaria inscrita en SUNARP a favor directo del inversionista.
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-neutral-400 pt-1">
                  <span className="flex items-center gap-1">
                    <FileCheck2 className="w-3.5 h-3.5 text-[#C6A15B]" /> Hipoteca a tu nombre
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" /> Respaldo real
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-800 mt-5 flex items-center justify-between gap-3">
                <Link
                  href="/inversionistas"
                  className="inline-flex min-h-11 items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C6A15B] hover:bg-[#B5904A] text-white transition-all shadow-subtle active:scale-[0.98]"
                >
                  <span>Conocer Red de Inversionistas</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
