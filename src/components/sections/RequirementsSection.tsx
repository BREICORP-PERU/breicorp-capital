import React from "react";
import {
  FileBadge,
  FileSearch,
  BriefcaseBusiness,
  Receipt,
  AlertTriangle,
  Building,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function RequirementsSection() {
  const requirements = [
    {
      icon: FileBadge,
      title: "Documento de identidad",
      description:
        "DNI o Carné de Extranjería vigente del solicitante. En caso de personas casadas bajo sociedad conyugal, documento de ambos cónyuges.",
      highlight: "Titular / Cónyuge",
    },
    {
      icon: FileSearch,
      title: "Documentación registral del inmueble",
      description:
        "Copia literal completa o CRI expedido por SUNARP (con antigüedad preferente menor a 30 días) y comprobante de pago de predial (HR y PU).",
      highlight: "Inscrito en SUNARP",
    },
    {
      icon: BriefcaseBusiness,
      title: "Información sobre la actividad económica",
      description:
        "Documentación de tu negocio o empleo: Ficha RUC, últimas declaraciones mensuales de impuestos, recibos por honorarios o licencias de funcionamiento.",
      highlight: "Comercial / Independiente",
    },
    {
      icon: Receipt,
      title: "Sustento de capacidad de pago",
      description:
        "Estados de cuenta de ahorros/corrientes de los últimos meses, cuadernos o reportes de ventas, o contratos de alquiler que demuestren liquidez recurrente.",
      highlight: "Flujo demostrable",
    },
  ];

  return (
    <section
      id="requisitos"
      className="py-20 lg:py-28 bg-[#F5F5F5] border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Documentación Preliminar"
          title="¿QUÉ NECESITAS PARA SOLICITAR UNA EVALUACIÓN?"
          description="Reunir tu documentación con anticipación permite que nuestro equipo evalúe la viabilidad técnica y legal de tu operación en el menor tiempo posible."
          align="center"
          className="mb-14"
        />

        {/* 4 Requisitos en tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, idx) => {
            const Icon = req.icon;
            return (
              <div
                key={req.title}
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-subtle hover:border-neutral-300 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#FF6801]/10 text-[#FF6801] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#111111] leading-snug">
                    {req.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {req.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#C6A15B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{req.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota sobre titularidad registral en SUNARP */}
        <div className="mt-8 p-5 rounded-xl bg-white border border-neutral-200/90 text-xs sm:text-sm text-neutral-700 flex items-start gap-3">
          <Building className="w-5 h-5 text-[#FF6801] shrink-0 mt-0.5" />
          <p>
            <strong>Nota registral:</strong> El inmueble ofrecido en garantía debe encontrarse inscrito en SUNARP y estar a nombre del solicitante. La aceptación final está sujeta a revisión registral, legal y técnica.
          </p>
        </div>

        {/* Apartado informativo INFOCORP requerido */}
        <div className="mt-8 rounded-2xl bg-[#111111] text-white p-7 sm:p-9 border border-neutral-800 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                <AlertTriangle className="w-4 h-4" />
                Información para solicitantes
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                ¿Estás reportado en INFOCORP?
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed pt-1">
                Estar reportado en una central de riesgo no impide solicitar una evaluación. La aprobación dependerá del análisis integral de tu capacidad de pago y de la garantía inmobiliaria ofrecida.
              </p>
              <p className="text-xs text-neutral-400 italic pt-1">
                * No se garantiza aprobación automática por esta condición; cada caso requiere estudio de viabilidad crediticia y legal.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={whatsappHref(siteConfig.contact.whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#FF6801] hover:bg-[#E55D00] text-white font-semibold text-sm transition-all shadow-sm text-center"
              >
                SOLICITAR EVALUACIÓN PREVIA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

