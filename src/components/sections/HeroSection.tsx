import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  BadgeCheck,
  PhoneCall,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function HeroSection() {
  const whatsappUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-white"
    >
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/40 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Contenido textual principal (7 columnas) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tag institucional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FF6801] animate-pulse" />
              <span>Operaciones de financiamiento con garantía hipotecaria</span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.12] uppercase font-sans">
              EL CAPITAL QUE NECESITAS,{" "}
              <span className="text-[#FF6801] relative inline-block">
                CON EL RESPALDO
              </span>{" "}
              DE TU PROPIEDAD.
            </h1>

            {/* Texto secundario riguroso */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl">
              Accede a financiamiento para impulsar tus proyectos empresariales y personales mediante operaciones con garantía hipotecaria, sujetas a evaluación.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href={whatsappUrl}
                isExternal
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="shadow-orange-glow"
              >
                SOLICITAR INFORMACIÓN DE CRÉDITO
              </Button>

              <Button
                href={whatsappUrl}
                isExternal
                variant="outline"
                size="lg"
                icon={<PhoneCall className="w-4 h-4 text-[#FF6801]" />}
                iconPosition="left"
              >
                CONSULTAR POR WHATSAPP
              </Button>
            </div>

            {/* 3 Indicadores clave requeridos */}
            <div className="pt-6 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Indicador 1 */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-neutral-200/80 shadow-subtle">
                <div className="w-9 h-9 rounded-lg bg-[#FF6801]/10 flex items-center justify-center text-[#FF6801] shrink-0">
                  <span className="font-bold text-xs font-mono">S/</span>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Monto inicial
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    Desde S/ 20,000
                  </div>
                </div>
              </div>

              {/* Indicador 2 */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-neutral-200/80 shadow-subtle">
                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-[#111111] shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6801]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Análisis
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    Evaluación personalizada
                  </div>
                </div>
              </div>

              {/* Indicador 3 */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-neutral-200/80 shadow-subtle">
                <div className="w-9 h-9 rounded-lg bg-[#C6A15B]/10 flex items-center justify-center text-[#C6A15B] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Respaldo
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    Garantía inmobiliaria
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso prudente sobre montos y tasas */}
            <p className="text-xs text-neutral-600 flex items-center gap-1.5">
              <BadgeCheck className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <span>
                Operaciones estructuradas bajo legalidad notarial y registral en Tingo María y Huánuco.
              </span>
            </p>
          </div>

          {/* Composición visual (5 columnas) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Contenedor de la fotografía con bordes elegantes */}
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-neutral-200 aspect-[4/5] bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Propiedad inmobiliaria de arquitectura moderna, garantía para operaciones de financiamiento"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                  className="object-cover object-center filter brightness-[0.92] hover:scale-105 transition-transform duration-700"
                />

                {/* Gradiente para integración corporativa */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent" />

                {/* Tarjeta flotante inferior */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#111111]/90 backdrop-blur-md border border-white/10 text-white space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#C6A15B] uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      Inmuebles en SUNARP
                    </span>
                    <span className="text-[11px] text-neutral-400">Huánuco / Tingo María</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-snug">
                    Casas, departamentos, locales comerciales y terrenos con partida registral inscrita.
                  </p>
                </div>
              </div>

              {/* Insignia flotante superior */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white p-3.5 rounded-xl shadow-lg border border-neutral-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6801] flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Seguridad Legal
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

