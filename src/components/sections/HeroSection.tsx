import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  TrendingUp,
} from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function HeroSection() {
  const whatsappCreditUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-white scroll-mt-20"
    >
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/40 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Contenido textual principal (7 columnas) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tag comercial */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#EE3C06] animate-pulse" />
              <span>Financiamiento ágil y formal en Perú</span>
            </div>

            {/* Titular Principal optimizado comercialmente */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.12] uppercase font-sans">
              FINANCIAMIENTO PARA{" "}
              <span className="text-[#EE3C06] relative inline-block">
                HACER CRECER
              </span>{" "}
              TUS PROYECTOS.
            </h1>

            {/* Texto breve persuasivo (máximo 3 líneas) */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl">
              Soluciones de financiamiento para emprendedores, empresarios y personas que buscan nuevas oportunidades.
            </p>

            {/* Dos botones comerciales principales */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <Button
                href={whatsappCreditUrl}
                isExternal
                variant="primary"
                size="lg"
                icon={<WhatsAppIcon className="w-5 h-5 text-white" />}
                iconPosition="left"
                className="shadow-orange-glow font-bold tracking-wide"
              >
                SOLICITAR CRÉDITO
              </Button>

              <Button
                href="/inversionistas"
                variant="outline"
                size="lg"
                icon={<TrendingUp className="w-4 h-4 text-[#C6A15B]" />}
                iconPosition="right"
                className="border-neutral-300 hover:border-[#111111] font-semibold"
              >
                QUIERO INVERTIR
              </Button>
            </div>

            {/* 3 Indicadores clave sintetizados */}
            <div className="pt-6 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-neutral-200/80 shadow-subtle">
                <div className="w-8 h-8 rounded-lg bg-[#EE3C06]/10 flex items-center justify-center text-[#EE3C06] shrink-0 font-bold text-xs font-mono">
                  S/
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Financiamiento
                  </div>
                  <div className="text-xs font-bold text-[#111111]">
                    Desde S/ 20,000
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-neutral-200/80 shadow-subtle">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[#111111] shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#EE3C06]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Atención
                  </div>
                  <div className="text-xs font-bold text-[#111111]">
                    Sujeto a evaluación
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-neutral-200/80 shadow-subtle">
                <div className="w-8 h-8 rounded-lg bg-[#C6A15B]/15 flex items-center justify-center text-[#C6A15B] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Seguridad
                  </div>
                  <div className="text-xs font-bold text-[#111111]">
                    Respaldo formal
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Composición visual (5 columnas) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-neutral-200 aspect-[4/4.5] bg-neutral-900">
                <Image
                  src="/images/hero-propiedad.jpg"
                  alt="Propiedad moderna representativa de respaldo inmobiliario"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                  className="object-cover object-center filter brightness-[0.92]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/25 to-transparent" />

                {/* Tarjeta flotante inferior */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#111111]/90 backdrop-blur-md border border-white/10 text-white space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#C6A15B] uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      Inmuebles en SUNARP
                    </span>
                    <span className="text-[11px] text-neutral-400">Tingo María y Huánuco</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-snug">
                    Casas, departamentos, locales comerciales y terrenos con título inscrito.
                  </p>
                </div>
              </div>

              {/* Insignia flotante superior */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white p-3.5 rounded-xl shadow-lg border border-neutral-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EE3C06] flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Operaciones Formales
                  </div>
                  <div className="text-xs font-bold text-[#111111]">
                    Escritura Pública Notarial
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
