import React from "react";
import {
  FileText,
  LineChart,
  Scale,
  FileCheck2,
  FileSignature,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "SOLICITUD",
      subtitle: "Registro inicial",
      description: "El interesado puede preparar un mensaje con sus datos básicos y decidir si lo envía por WhatsApp.",
      icon: FileText,
    },
    {
      number: "02",
      title: "EVALUACIÓN",
      subtitle: "Análisis financiero",
      description: "La evaluación prevista consideraría la actividad económica, los ingresos y la capacidad de pago del solicitante.",
      icon: LineChart,
    },
    {
      number: "03",
      title: "TASACIÓN",
      subtitle: "Inspección técnica",
      description: "Cuando corresponda, se coordinarían la valoración del inmueble y la revisión de su situación registral en SUNARP.",
      icon: Scale,
    },
    {
      number: "04",
      title: "PROPUESTA",
      subtitle: "Términos del financiamiento",
      description: "Una eventual propuesta deberá detallar monto, plazo, cronograma y gastos antes de su aceptación.",
      icon: FileCheck2,
    },
    {
      number: "05",
      title: "FORMALIZACIÓN",
      subtitle: "Seguridad notarial",
      description: "La estructura contractual, notarial y registral se definirá para cada operación que llegue a formalizarse.",
      icon: FileSignature,
    },
    {
      number: "06",
      title: "DESEMBOLSO",
      subtitle: "Entrega de fondos",
      description: "De aprobarse y formalizarse una operación, el desembolso se realizará según las condiciones pactadas.",
      icon: CreditCard,
    },
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Proceso Estructurado"
          title="¿CÓMO FUNCIONA EL PROCESO?"
          description="Etapas previstas para una posible operación; su aplicación y duración dependerán de la evaluación y los acuerdos entre las partes."
          align="center"
          className="mb-16"
        />

        {/* Línea de tiempo visual en 6 pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-7 shadow-subtle hover:shadow-card hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Cabecera del paso */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-[#FF6801]/10 text-[#111111] group-hover:text-[#FF6801] flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black font-mono text-neutral-300 group-hover:text-[#FF6801] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Contenido */}
                <div className="space-y-2 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#C6A15B]">
                    {step.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Indicador de continuidad */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                  <span>Etapa {step.number} de 06</span>
                  <div className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-[#FF6801] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA tras el proceso */}
        <div className="mt-14 text-center">
          <Button
            href={whatsappHref(siteConfig.contact.whatsappDefaultMessage)}
            isExternal
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            INICIAR MI SOLICITUD AHORA
          </Button>
        </div>
      </div>
    </section>
  );
}

