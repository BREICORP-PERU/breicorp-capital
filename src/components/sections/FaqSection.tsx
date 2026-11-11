import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItemData } from "@/components/ui/Accordion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function FaqSection() {
  const faqData: AccordionItemData[] = [
    {
      id: "faq-1",
      question: "¿Cuál es el monto mínimo que puedo solicitar?",
      answer:
        "El monto mínimo evaluable es desde S/ 20,000. El importe final dependerá de la capacidad de pago demostrable y de la tasación del inmueble ofrecido.",
    },
    {
      id: "faq-2",
      question: "¿Puedo solicitar evaluación si estoy reportado en INFOCORP?",
      answer:
        "Sí. Estar reportado en centrales de riesgo no impide solicitar una evaluación. Analizamos integralmente tu actividad económica actual y el respaldo inmobiliario.",
    },
    {
      id: "faq-3",
      question: "¿Qué tipo de inmuebles son admitidos para evaluación?",
      answer:
        "Se evalúan casas, departamentos, locales comerciales y terrenos con partida registral inscrita en SUNARP a nombre del solicitante o garante en la región.",
    },
    {
      id: "faq-4",
      question: "¿Cuánto tiempo toma la respuesta de evaluación?",
      answer:
        "Emitimos una respuesta preliminar en un plazo aproximado de 48 a 72 horas hábiles tras recibir los datos y la documentación básica solicitada.",
    },
    {
      id: "faq-5",
      question: "¿Cómo se formaliza y garantiza la operación?",
      answer:
        "Toda operación se formaliza mediante contrato con garantía por Escritura Pública ante Notario Público colegiado, con total validez legal y formalidad.",
    },
  ];

  const whatsappUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  return (
    <section
      id="preguntas-frecuentes"
      className="py-20 lg:py-24 bg-[#F5F5F5] border-t border-neutral-200 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Dudas Habituales"
          title="PREGUNTAS FRECUENTES"
          description="Respuestas directas y transparentes para tomar una decisión informada."
          align="center"
          className="mb-12"
        />

        <Accordion items={faqData} defaultOpenId="faq-1" />

        <div className="mt-10 p-5 rounded-2xl bg-white border border-neutral-200 text-center space-y-2">
          <p className="text-sm font-bold text-[#111111]">
            ¿Tienes una consulta específica sobre tu inmueble?
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6801] hover:text-[#E55D00] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Conversar por WhatsApp con un asesor comercial ›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
