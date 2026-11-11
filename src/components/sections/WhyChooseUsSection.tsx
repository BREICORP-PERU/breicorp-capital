import React from "react";
import { UserCheck, SearchCheck, Layers, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUsSection() {
  const attributes = [
    {
      icon: UserCheck,
      title: "Atención personalizada",
      description:
        "Trato directo y cercano con un asesor comercial dedicado a entender la realidad de tu proyecto.",
    },
    {
      icon: SearchCheck,
      title: "Evaluación de cada operación",
      description:
        "Análisis individual de la capacidad económica y del respaldo del bien, sin fórmulas rígidas.",
    },
    {
      icon: Layers,
      title: "Alternativas de financiamiento",
      description:
        "Propuestas estructuradas que se ajustan al destino que tu negocio o inversión necesita.",
    },
    {
      icon: ShieldCheck,
      title: "Acompañamiento durante el proceso",
      description:
        "Coordinación notarial y registral transparente desde la consulta inicial hasta el desembolso.",
    },
  ];

  return (
    <section id="por-que-nosotros" className="py-20 lg:py-24 bg-white border-t border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Nuestros Diferenciales"
          title="¿POR QUÉ BREICORP CAPITAL?"
          description="Estructuramos operaciones formales que unen agilidad comercial y respaldo jurídico notarial."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attributes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#EE3C06] shadow-subtle">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-[#111111] uppercase tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

