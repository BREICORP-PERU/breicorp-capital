import React from "react";
import { MessageSquareText, SearchCheck, FileSignature, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "CONTÁCTANOS",
      description:
        "Escríbenos por WhatsApp o déjanos tus datos básicos para iniciar tu consulta sin costo ni compromiso.",
      icon: MessageSquareText,
    },
    {
      number: "02",
      title: "EVALUAMOS TU PERFIL",
      description:
        "Analizamos tu actividad económica y la viabilidad de la garantía de manera rápida y personalizada.",
      icon: SearchCheck,
    },
    {
      number: "03",
      title: "DEFINIMOS UNA PROPUESTA",
      description:
        "Te presentamos las condiciones claras de la operación y formalizamos ante Notario Público.",
      icon: FileSignature,
    },
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-24 bg-[#F5F5F5] border-t border-neutral-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Proceso Comercial"
          title="¿CÓMO FUNCIONA?"
          description="Una ruta directa de tres pasos diseñada para darte respuesta clara y acompañamiento formal."
          align="center"
          className="mb-14"
        />

        {/* 3 Pasos Visuales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="p-7 rounded-2xl bg-white border border-neutral-200 shadow-subtle hover:border-neutral-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#EE3C06]/10 text-[#EE3C06] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-mono text-neutral-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111111] uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                  <span>Paso {item.number} de 03</span>
                  <div className="w-2 h-2 rounded-full bg-[#EE3C06]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Aclaración requerida */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-600 flex items-center gap-3 max-w-2xl mx-auto">
          <AlertCircle className="w-4 h-4 text-[#EE3C06] shrink-0" />
          <span>
            La aprobación y las condiciones del financiamiento dependen de la evaluación y formalización correspondiente de cada operación.
          </span>
        </div>
      </div>
    </section>
  );
}
