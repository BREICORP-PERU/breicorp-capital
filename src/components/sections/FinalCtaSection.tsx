"use client";

import React from "react";
import { ArrowRight, ShieldCheck, MapPin, Building2, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function FinalCtaSection() {
  const whatsappCreditUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  return (
    <section
      id="contacto"
      className="py-24 lg:py-32 bg-white border-t border-neutral-100 scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#09090C] text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl border border-white/15">
          {/* Luces y ambientación perimetral */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#EE3C06]/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A15B]/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Sutil cuadrícula perimetral de fondo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-7">
            {/* Tag / Kicker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-[#C6A15B]/30 text-[#C6A15B] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Atención y Evaluación Personalizada</span>
            </div>

            {/* Titular Principal Masivo */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight font-sans">
              TU PRÓXIMO PASO{" "}
              <span className="text-gradient-orange inline-block">
                COMIENZA AQUÍ
              </span>
              .
            </h2>

            {/* Texto de apoyo */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Conversemos hoy sobre tus necesidades de capital o tus objetivos de inversión formal con respaldo inmobiliario en SUNARP.
            </p>

            {/* Dos botones principales de conversión */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={whatsappCreditUrl}
                isExternal
                variant="primary"
                size="lg"
                icon={<WhatsAppIcon className="w-5 h-5 text-white" />}
                iconPosition="left"
                className="w-full sm:w-auto shadow-orange-glow font-bold tracking-wide active:scale-[0.98] transition-transform"
              >
                SOLICITAR EVALUACIÓN
              </Button>

              <Button
                href="/inversionistas"
                variant="outline-light"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 text-[#C6A15B]" />}
                iconPosition="right"
                className="w-full sm:w-auto font-semibold border-white/20 hover:border-white hover:bg-white/10 active:scale-[0.98] transition-all"
              >
                QUIERO INVERTIR
              </Button>
            </div>

            {/* Credenciales de confianza y cobertura */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EE3C06]" />
                <span className="text-neutral-300">Tingo María y Huánuco, Perú</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#C6A15B]" />
                <span className="text-neutral-300">Garantía inscrita en SUNARP</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#EE3C06]" />
                <span className="text-neutral-300">Escritura Pública ante Notario</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
