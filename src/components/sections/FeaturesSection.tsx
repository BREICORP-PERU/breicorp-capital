import React from "react";
import {
  Banknote,
  SlidersHorizontal,
  Calendar,
  Landmark,
  UserCheck,
  RotateCcw,
  AlertCircle,
  FileCheck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturesSection() {
  const features = [
    {
      icon: Banknote,
      label: "Financiamiento mínimo",
      value: "S/ 20,000",
      detail: "Monto base sujeto a evaluación preliminar",
      accent: "orange",
    },
    {
      icon: SlidersHorizontal,
      label: "Monto máximo",
      value: "Sujeto a evaluación",
      detail: "Determinado por la capacidad de pago y la tasación comercial",
      accent: "neutral",
    },
    {
      icon: Calendar,
      label: "Plazo referencial",
      value: "12 meses",
      detail: "Sujeto a evaluación según el perfil del solicitante",
      accent: "neutral",
    },
    {
      icon: Landmark,
      label: "Garantía requerida",
      value: "Inmueble en SUNARP",
      detail: "Propiedad con partida registral a nombre del solicitante",
      accent: "gold",
    },
    {
      icon: UserCheck,
      label: "Perfil de solicitantes",
      value: "Empresarios e independientes",
      detail: "Personas con actividad económica demostrable en la región",
      accent: "neutral",
    },
    {
      icon: RotateCcw,
      label: "Amortización anticipada",
      value: "Permitida contractualmente",
      detail: "Sujeta a las condiciones acordadas en el contrato notarial",
      accent: "neutral",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F5] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Parámetros Operativos"
          title="CARACTERÍSTICAS DEL FINANCIAMIENTO."
          description="Estructuramos cada operación con criterios de formalidad técnica, transparencia y prudencia financiera, adaptando la propuesta a la realidad de tu patrimonio."
          align="center"
          className="mb-14"
        />

        {/* Grilla de características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            const isOrange = item.accent === "orange";
            const isGold = item.accent === "gold";

            return (
              <div
                key={item.label}
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-subtle hover:border-neutral-300 transition-colors space-y-3 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isOrange
                        ? "bg-[#FF6801]/10 text-[#FF6801]"
                        : isGold
                        ? "bg-[#C6A15B]/15 text-[#C6A15B]"
                        : "bg-neutral-100 text-[#111111]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">
                    Condición
                  </span>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                    {item.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight">
                    {item.value}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100 text-xs text-neutral-500">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* NOTA OBLIGATORIA DESTACADA */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border-l-4 border-l-[#FF6801] border-neutral-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="w-10 h-10 rounded-full bg-[#FF6801]/10 flex items-center justify-center text-[#FF6801] shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1 flex-1">
            <div className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2">
              <FileCheck className="w-3.5 h-3.5 text-[#FF6801]" />
              Condiciones individuales de la operación
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
              &ldquo;Las condiciones del financiamiento, tasas, plazos y montos se establecen individualmente después de evaluar al solicitante y el inmueble ofrecido en garantía.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

