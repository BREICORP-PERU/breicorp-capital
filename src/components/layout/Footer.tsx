import React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  ShieldCheck,
  FileCheck2,
  Clock,
  ArrowRight,
} from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { siteConfig, whatsappHref } from "@/config/siteConfig";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#111111] text-neutral-300 border-t border-neutral-800">
      {/* Sección principal del Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Columna 1: Identidad y Misión (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo variant="light" size="lg" />

            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
              Línea de negocio de <strong className="text-white">BREICORP E.I.R.L.</strong> orientada a la intermediación y gestión de posibles operaciones de financiamiento con garantía hipotecaria entre solicitantes e inversionistas privados.
            </p>

            <div className="space-y-3 pt-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6801] shrink-0" />
                <span>Cobertura referencial: {siteConfig.locations.map((location) => location.city).join(" y ")}, Perú</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>{siteConfig.contact.schedule}</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación Corporativa (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#inicio"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#FF6801]">›</span> Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/#soluciones"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#FF6801]">›</span> Soluciones de crédito
                </Link>
              </li>
              <li>
                <Link
                  href="/#como-funciona"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#FF6801]">›</span> ¿Cómo funciona?
                </Link>
              </li>
              <li>
                <Link
                  href="/#por-que-nosotros"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#FF6801]">›</span> ¿Por qué nosotros?
                </Link>
              </li>
              <li>
                <Link
                  href="/inversionistas"
                  className="text-[#C6A15B] hover:text-[#B5904A] font-medium transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5" /> Red de Inversionistas
                </Link>
              </li>
              <li>
                <Link
                  href="/#preguntas-frecuentes"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#FF6801]">›</span> Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Directo & Formalidad (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">
              Atención y Consultas
            </h3>

            <p className="text-xs text-neutral-400">
              Inicia tu evaluación personalizada o consulta dudas sobre el proceso con nuestro equipo comercial.
            </p>

            <div className="space-y-3 pt-1">
              <a
                href={whatsappHref(siteConfig.contact.whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FF6801] transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400">
                    WhatsApp publicado (por confirmar)
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {siteConfig.contact.whatsappDisplay}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#C6A15B] transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-[#C6A15B]/10 flex items-center justify-center text-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400">
                    Correo publicado (por confirmar)
                  </div>
                  <div className="text-sm font-semibold text-white break-all">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2 text-[11px] text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
              <span>Garantías sujetas a evaluación y formalización contractual</span>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="my-10 border-t border-neutral-800/80" />

        {/* Nota legal explícita y obligatoria */}
        <div className="bg-neutral-900/90 rounded-xl p-5 border border-neutral-800 text-xs leading-relaxed text-neutral-400 space-y-2">
          <div className="flex items-center gap-2 text-white font-semibold uppercase tracking-wider text-[11px]">
            <FileCheck2 className="w-4 h-4 text-[#FF6801]" />
            Aviso Legal e Institucional
          </div>
          <p>{siteConfig.legalDisclaimer}</p>
          <p>{siteConfig.contact.verificationNotice}</p>
        </div>

        {/* Barra inferior de derechos y enlaces legales */}
        <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {currentYear} <span className="text-white font-medium">BREICORP CAPITAL</span>. Una marca de{" "}
            <span className="text-white font-medium">BREICORP E.I.R.L.</span> Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/politica-de-privacidad"
              className="hover:text-white transition-colors"
            >
              Política de privacidad
            </Link>
            <span className="text-neutral-700">•</span>
            <Link
              href="/terminos-y-condiciones"
              className="hover:text-white transition-colors"
            >
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

