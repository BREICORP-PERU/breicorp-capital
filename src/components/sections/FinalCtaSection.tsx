import React from "react";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function FinalCtaSection() {
  const whatsappCreditUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  return (
    <section id="contacto" className="py-20 lg:py-24 bg-white border-t border-neutral-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#111111] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-card border border-neutral-800">
          {/* Luces sutiles decorativas */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6801]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C6A15B]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C6A15B] text-xs font-semibold uppercase tracking-wider border border-[#C6A15B]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
              Atención Inmediata
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight font-sans">
              TU PRÓXIMO PASO <span className="text-[#FF6801]">COMIENZA AQUÍ</span>.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mx-auto">
              Conversemos sobre tus necesidades de financiamiento o tus objetivos de inversión.
            </p>

            {/* Dos botones principales requeridos */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={whatsappCreditUrl}
                isExternal
                variant="primary"
                size="lg"
                icon={<WhatsAppIcon className="w-5 h-5 text-white" />}
                iconPosition="left"
                className="w-full sm:w-auto shadow-orange-glow font-bold tracking-wide"
              >
                SOLICITAR CRÉDITO
              </Button>

              <Button
                href="/inversionistas"
                variant="outline-light"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 text-[#C6A15B]" />}
                iconPosition="right"
                className="w-full sm:w-auto font-semibold border-white/20 hover:border-white"
              >
                QUIERO INVERTIR
              </Button>
            </div>

            {/* Credenciales de cobertura */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF6801]" />
                <span>Tingo María y Huánuco, Perú</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Operaciones formales con contrato notarial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
