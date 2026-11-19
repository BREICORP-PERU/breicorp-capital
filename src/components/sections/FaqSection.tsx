"use client";

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
        "El plazo de respuesta preliminar toma entre 48 a 72 horas hábiles tras recibir los datos y la documentación básica solicitada de la propiedad.",
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
      className="py-24 lg:py-32 bg-[#F8F9FB] border-t border-neutral-200/80 scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Dudas Habituales"
          title="PREGUNTAS FRECUENTES"
          description="Respuestas directas, objetivas y transparentes para tomar una decisión informada."
          align="center"
          className="mb-14"
        />

        <Accordion items={faqData} defaultOpenId="faq-1" />

        <div className="mt-12 p-6 rounded-3xl bg-white border border-neutral-200/90 shadow-card text-center space-y-3">
          <p className="text-base font-bold text-[#111111]">
            ¿Tienes una consulta específica sobre tu inmueble o proyecto?
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto">
            Conversa directamente con un asesor para analizar la partida registral y conocer el monto estimado evaluable.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#EE3C06] hover:bg-[#D63404] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-orange-glow active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Consultar por WhatsApp con un asesor ›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
