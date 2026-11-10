import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItemData } from "@/components/ui/Accordion";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function FaqSection() {
  const faqData: AccordionItemData[] = [
    {
      id: "faq-1",
      question: "¿Cuál es el monto mínimo que puedo solicitar?",
      answer:
        "El monto mínimo evaluable para operaciones de financiamiento con garantía hipotecaria es de S/ 20,000 (Veinte mil soles). Este piso permite estructurar la operación cubriendo adecuadamente los costos periciales, registrales y notariales involucrados.",
    },
    {
      id: "faq-2",
      question: "¿Existe un monto máximo?",
      answer:
        "No existe un monto máximo prefijado. El importe posible dependerá de la evaluación de la capacidad de pago, del inmueble y de las condiciones que se formalicen en cada operación.",
    },
    {
      id: "faq-3",
      question: "¿Puedo solicitar financiamiento si estoy reportado en INFOCORP?",
      answer:
        "Sí. Estar reportado en una central de riesgo no impide solicitar una evaluación. La posibilidad de financiamiento dependerá de la revisión de tu actividad económica, capacidad de pago, inmueble y demás condiciones del caso; no se garantiza aprobación.",
    },
    {
      id: "faq-4",
      question: "¿Qué inmuebles puedo ofrecer como garantía?",
      answer:
        "Se evalúan casas, departamentos, edificios, locales comerciales o terrenos urbanos ubicados en el ámbito de cobertura (inicialmente Tingo María y Huánuco) que cuenten con partida registral independizada e inscrita en SUNARP, libres de gravámenes o con cargas evaluables.",
    },
    {
      id: "faq-5",
      question: "¿Necesito ser propietario del inmueble?",
      answer:
        "Sí. El inmueble ofrecido debe estar registrado en SUNARP a nombre del solicitante (o de ambos cónyuges en caso de sociedad conyugal). En situaciones donde intervenga un aval o garante hipotecario propietario, este deberá firmar y autorizar la constitución de la hipoteca ante notario público.",
    },
    {
      id: "faq-6",
      question: "¿Cuánto tiempo demora la evaluación?",
      answer:
        "El tiempo de evaluación dependerá de la documentación presentada y de las verificaciones necesarias. La tasación y la formalización, cuando correspondan, pueden requerir plazos adicionales.",
    },
    {
      id: "faq-7",
      question: "¿Puedo realizar amortizaciones anticipadas?",
      answer:
        "Las condiciones de amortización o cancelación anticipada se definirán en los documentos contractuales de cada operación. Consúltalas antes de aceptar una propuesta.",
    },
    {
      id: "faq-8",
      question: "¿Cómo se realiza el desembolso?",
      answer:
        "El medio, momento y requisitos del desembolso se establecerán en los documentos de cada operación, después de la evaluación y formalización que correspondan.",
    },
    {
      id: "faq-9",
      question: "¿Qué sucede si no puedo pagar a tiempo?",
      answer:
        "Como en toda operación financiera respaldada por un contrato formal, el retraso genera los intereses moratorios previstos contractualmente. Ante cualquier eventualidad, nuestro equipo promueve una comunicación oportuna para evaluar alternativas de reprogramación o solución acordada antes de iniciar acciones de ejecución judicial de la garantía.",
    },
    {
      id: "faq-10",
      question: "¿Cómo puedo solicitar una evaluación?",
      answer:
        "Puedes completar los datos básicos del formulario para preparar un mensaje de WhatsApp o abrir directamente el chat comercial. La consulta solo llegará al equipo si decides enviarla desde WhatsApp.",
    },
  ];

  return (
    <section
      id="preguntas-frecuentes"
      className="py-20 lg:py-28 bg-[#F5F5F5] border-t border-neutral-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Resolución de Dudas"
          title="PREGUNTAS FRECUENTES."
          description="Respuestas claras y transparentes sobre los requisitos, el proceso de evaluación y las condiciones de nuestras operaciones de financiamiento."
          align="center"
          className="mb-14"
        />

        <Accordion items={faqData} defaultOpenId="faq-1" />

        <div className="mt-12 p-6 rounded-2xl bg-white border border-neutral-200 text-center space-y-3">
          <p className="text-sm font-semibold text-[#111111]">
            ¿Tienes una consulta específica sobre tu propiedad o situación económica?
          </p>
          <p className="text-xs text-neutral-500 max-w-md mx-auto">
            Nuestro equipo de evaluación está listo para atenderte de manera personalizada y sin ningún costo por la orientación inicial.
          </p>
          <div>
            <a
              href={whatsappHref(siteConfig.contact.whatsappDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6801] hover:text-[#E55D00] transition-colors"
            >
              Consultar por WhatsApp con un asesor comercial ›
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

