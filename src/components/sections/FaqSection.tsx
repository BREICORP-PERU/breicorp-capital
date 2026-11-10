import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItemData } from "@/components/ui/Accordion";
import { siteConfig } from "@/config/siteConfig";

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
        "No existe un monto máximo prefijado. El importe máximo a otorgar se determina de forma individual tras realizar la tasación comercial del inmueble ofrecido en garantía y analizar la capacidad demostrable de pago del solicitante.",
    },
    {
      id: "faq-3",
      question: "¿Puedo solicitar financiamiento si estoy reportado en INFOCORP?",
      answer:
        "Sí. Estar reportado en una central de riesgo no te descalifica automáticamente para solicitar una evaluación. En BREICORP CAPITAL realizamos un análisis integral que pondera tu actividad económica actual, tu flujo de ingresos y el valor del bien inmueble ofrecido en garantía. La aprobación final siempre dependerá del análisis de viabilidad crediticia.",
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
        "El plazo de evaluación preliminar toma generalmente entre 48 y 72 horas hábiles a partir de la entrega completa de los requisitos solicitados (DNI, copia literal registral y sustentos de ingresos). Los tiempos de tasación y formalización notarial pueden variar según la agenda de la Notaría y la revisión registral en SUNARP.",
    },
    {
      id: "faq-7",
      question: "¿Puedo realizar amortizaciones anticipadas?",
      answer:
        "Sí. La posibilidad de realizar amortizaciones a capital o la cancelación anticipada de la operación se contempla y se pacta expresamente en el contrato notarial, detallando los plazos mínimos y los términos convenidos.",
    },
    {
      id: "faq-8",
      question: "¿Cómo se realiza el desembolso?",
      answer:
        "El desembolso se efectúa mediante transferencia bancaria o cheque de gerencia a nombre del solicitante una vez suscrita la Escritura Pública de hipoteca en la Notaría designada y confirmado el ingreso del título en Registros Públicos (SUNARP), conforme a lo estipulado en el contrato.",
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
        "Puedes iniciar tu solicitud completando el formulario web disponible en esta página con tus datos de contacto y las características de tu inmueble, o escribiéndonos directamente a nuestro WhatsApp de atención comercial para recibir orientación de un asesor.",
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
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                siteConfig.contact.whatsappDefaultMessage
              )}`}
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

