import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del portal web e intermediación de financiamiento con garantía hipotecaria de BREICORP CAPITAL.",
  robots: { index: false, follow: false },
};

export default function TerminosCondicionesPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="border-b border-neutral-200 bg-neutral-50 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#111111] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a Inicio</span>
            </Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">Términos y Condiciones</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="space-y-4 border-b border-neutral-200 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#FF6801]" />
            Condiciones de Servicio e Intermediación
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            TÉRMINOS Y CONDICIONES GENERALES
          </h1>
          <p className="text-sm text-neutral-500">
            Borrador pendiente de revisión jurídica sobre el uso del sitio y la intermediación de {siteConfig.legalEntity} ({siteConfig.name}).
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-neutral-700">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">1. NATURALEZA DE LA EMPRESA Y ALCANCE DE LA ACTIVIDAD</h2>
            <p>
              <strong>{siteConfig.name}</strong> es una línea comercial de <strong>{siteConfig.legalEntity}</strong> dedicada a la gestión, asesoría e intermediación de operaciones de financiamiento privado con garantía hipotecaria.
            </p>
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 leading-relaxed">
              <strong className="text-[#111111]">Aviso regulatorio:</strong> {siteConfig.legalDisclaimer}
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">2. ALCANCE DE LA SOLICITUD DE EVALUACIÓN</h2>
            <p>
              Abrir WhatsApp con una consulta preparada o enviar un mensaje por ese canal <strong>no constituye una oferta vinculante, un contrato de préstamo ni una aprobación garantizada</strong>. Este sitio no recibe formularios ni documentos. Toda posible operación está condicionada a:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li>La evaluación de la actividad económica y capacidad de pago del solicitante.</li>
              <li>La verificación de la partida registral en la Superintendencia Nacional de los Registros Públicos (SUNARP).</li>
              <li>La valoración del inmueble, cuando corresponda, según los criterios acordados.</li>
              <li>La suscripción de los instrumentos legales y notariales correspondientes por ambas partes.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">3. CONDICIONES FINANCIERAS Y CONTRACTUALES</h2>
            <p>
              El monto mínimo referencial evaluable es S/ 20,000. No existe un monto máximo prefijado. El plazo, las tasas, los gastos y cualquier otra condición económica se definirán para cada operación y deberán constar en los documentos contractuales aplicables antes de su aceptación. Abrir o enviar un mensaje de WhatsApp no implica aprobación ni desembolso.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">4. VERACIDAD DE LA INFORMACIÓN SUMINISTRADA</h2>
            <p>
              El solicitante o inversionista debe proporcionar información veraz para que su consulta pueda evaluarse. Los requisitos de declaración y documentación de una operación formal se definirán en sus instrumentos contractuales.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">5. PROPIEDAD INTELECTUAL</h2>
            <p>
              Los textos, elementos de marca e imágenes de este sitio pueden estar sujetos a derechos de sus respectivos titulares. El alcance de los derechos de uso del material visual está pendiente de verificación.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">6. LEGISLACIÓN Y JURISDICCIÓN</h2>
            <p>
              La legislación y jurisdicción aplicables a cada operación deberán definirse en los documentos contractuales correspondientes y revisarse jurídicamente antes de publicar condiciones definitivas.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

