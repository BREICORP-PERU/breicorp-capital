import React from "react";
import {
  FileSpreadsheet,
  Building2,
  Calculator,
  Stamp,
  ShieldCheck,
  Scale,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SecurityGovernanceSection() {
  const pillars = [
    {
      icon: FileSpreadsheet,
      title: "Evaluación documentada",
      subtitle: "Análisis patrimonial y de solvencia",
      description:
        "Cada solicitud es sometida a un estudio de viabilidad cuantitativa y cualitativa. Evaluamos el flujo recurrente del solicitante para garantizar que las obligaciones asumidas sean realistas y sostenibles.",
    },
    {
      icon: Building2,
      title: "Verificación registral en SUNARP",
      subtitle: "Estudio de títulos y legalidad",
      description:
        "Realizamos una revisión integral de la partida electrónica del bien ofrecido en garantía para constatar titularidad legítima, verificar antecedentes de dominio y descartar contingencias registrales.",
    },
    {
      icon: Calculator,
      title: "Tasación profesional del inmueble",
      subtitle: "Valorización técnica comercial",
      description:
        "Se evalúa el inmueble bajo criterios técnicos de mercado, ubicación, estado de conservación y valor de realización rápida, garantizando una relación préstamo/garantía prudente.",
    },
    {
      icon: Stamp,
      title: "Formalización contractual y notarial",
      subtitle: "Escritura Pública y fe notarial",
      description:
        "Toda operación se eleva a Escritura Pública ante Notario Público colegiado y se inscribe como hipoteca en SUNARP, protegiendo con absoluta claridad los derechos y deberes de ambas partes.",
    },
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Gobernanza y Estándares"
          title="UNA OPERACIÓN QUE REQUIERE EVALUACIÓN Y FORMALIDAD."
          description="En BREICORP CAPITAL no promovemos atajos ni soluciones informales. Cada operación de financiamiento con garantía hipotecaria descansa sobre cuatro pilares técnicos y jurídicos que brindan certidumbre a todas las partes intervinientes."
          align="center"
          className="mb-16"
        />

        {/* 4 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-7 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200/90 hover:border-neutral-300 transition-colors space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#FF6801] shadow-subtle">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#C6A15B] uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-neutral-200">
                    Pilar 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#FF6801] uppercase tracking-wider">
                    {pillar.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-[#111111]">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Resumen de marco legal contractual */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center shrink-0 mt-1">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                Marco de Transparencia
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mt-1">
                Las condiciones, tasas, cronogramas y responsabilidades se establecen explícitamente en el contrato notarial. Cada operación está sujeta a revisión documental individual.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#FF6801]" />
            <span>Notarías públicas de Tingo María y Huánuco</span>
          </div>
        </div>
      </div>
    </section>
  );
}

