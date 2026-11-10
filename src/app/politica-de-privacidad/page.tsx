import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Política de Privacidad | BREICORP CAPITAL",
  description:
    "Política de tratamiento y protección de datos personales de BREICORP CAPITAL conforme a la Ley N° 29733 en Perú.",
};

export default function PoliticaPrivacidadPage() {
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
            <span className="text-[#111111] font-semibold">Política de Privacidad</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="space-y-4 border-b border-neutral-200 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6801]/10 text-[#FF6801] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Cumplimiento Ley N° 29733 (Perú)
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS PERSONALES
          </h1>
          <p className="text-sm text-neutral-500">
            Última actualización: Enero de 2026 | Responsable: {siteConfig.legalEntity} (Marca comercial: {siteConfig.name})
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-neutral-700">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">1. IDENTIFICACIÓN DEL TITULAR DEL BANCO DE DATOS</h2>
            <p>
              El titular del tratamiento de los datos personales recopilados a través de este portal web es <strong>{siteConfig.legalEntity}</strong>, empresa titular de la línea comercial <strong>{siteConfig.name}</strong>, con operaciones en las ciudades de Tingo María y Huánuco, Perú.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">2. MARCO LEGAL APLICABLE</h2>
            <p>
              Esta política se rige en estricto cumplimiento de la <strong>Ley N° 29733 — Ley de Protección de Datos Personales</strong>, su Reglamento aprobado mediante Decreto Supremo N° 003-2013-JUS, y las directivas emitidas por la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos del Perú.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">3. DATOS RECOPILADOS Y FINALIDAD DEL TRATAMIENTO</h2>
            <p>
              Los datos personales solicitados a través de nuestros formularios web (nombres, número telefónico, WhatsApp, correo electrónico, ciudad, monto de financiamiento, tipo de inmueble y titularidad registral) tienen como fines exclusivos:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li>Evaluar la viabilidad financiera preliminar de la solicitud de crédito con garantía hipotecaria.</li>
              <li>Coordinar la recepción y verificación de documentos registrales (SUNARP) e informes periciales de tasación.</li>
              <li>Atender consultas y gestionar el contacto comercial directo por llamada, WhatsApp o correo.</li>
              <li>Para el caso de inversionistas, perfilar la capacidad de colocación y presentar operaciones estructuradas de mutuo notarial.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">4. CONFIDENCIALIDAD Y MEDIDAS DE SEGURIDAD</h2>
            <p>
              {siteConfig.legalEntity} adopta medidas técnicas, organizativas y legales para evitar la alteración, pérdida, acceso no autorizado o tratamiento ilícito de la información proporcionada. La información patrimonial o documental suministrada no será comercializada, cedida ni transferida a terceros sin consentimiento previo, salvo a los Notarios Públicos, peritos tasadores colegiados y entidades registrales que intervengan en la formalización de la operación acordada.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">5. EJERCICIO DE DERECHOS ARCO</h2>
            <p>
              El titular de los datos personales puede ejercer en cualquier momento sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong> reconocidos por la legislación peruana. Para hacer valer estos derechos, el usuario puede remitir una solicitud formal al correo electrónico:
            </p>
            <div className="p-4 rounded-xl bg-neutral-100 font-mono text-xs text-[#111111] inline-block">
              {siteConfig.contact.email} (Asunto: Ejercicio de Derechos ARCO - BREICORP CAPITAL)
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">6. CONSENTIMIENTO DEL USUARIO</h2>
            <p>
              Al marcar la casilla de aceptación en nuestros formularios y remitir la información solicitada, el usuario declara haber leído, comprendido y aceptado libre, previa, expresa e inequívocamente la presente Política de Privacidad.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

