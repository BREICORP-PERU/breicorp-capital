import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Información preliminar sobre el tratamiento de datos personales de BREICORP CAPITAL, pendiente de revisión jurídica.",
  robots: { index: false, follow: false },
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
            Información sobre datos personales
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS PERSONALES
          </h1>
          <p className="text-sm text-neutral-500">
            Borrador pendiente de revisión jurídica | Responsable indicado: {siteConfig.legalEntity} (línea comercial: {siteConfig.name})
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-neutral-700">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">1. RESPONSABLE DEL TRATAMIENTO</h2>
            <p>
              La empresa indicada para atender consultas comerciales es <strong>{siteConfig.legalEntity}</strong>, titular de la línea comercial <strong>{siteConfig.name}</strong>. Domicilio y demás datos de identificación: pendientes de confirmación empresarial.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">2. MARCO LEGAL APLICABLE</h2>
            <p>
              La referencia normativa es la <strong>Ley N° 29733 — Ley de Protección de Datos Personales</strong> y su Reglamento aprobado por el <strong>Decreto Supremo N° 016-2024-JUS</strong>, vigente desde el 31 de marzo de 2025. Esta mención no acredita por sí sola el cumplimiento de todas las obligaciones aplicables.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">3. DATOS Y FINALIDADES</h2>
            <p>
              El formulario de crédito utiliza nombre, celular, ciudad, monto aproximado, tipo de financiamiento y finalidad. El de inversionistas utiliza nombre, celular, correo opcional y monto aproximado de inversión. No se solicitan DNI, escrituras ni archivos en esta etapa.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
              <li>Preparar un mensaje de WhatsApp con los datos introducidos por el visitante.</li>
              <li>Si el visitante decide enviar el mensaje desde WhatsApp, permitir que el equipo comercial atienda la consulta de crédito o inversión por ese canal.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">4. CÓMO FUNCIONA EL ENLACE A WHATSAPP</h2>
            <p>
              Al pulsar el botón, el sitio construye un enlace <strong>wa.me</strong> con el texto codificado y abre WhatsApp en otra pestaña. El visitante puede revisar y editar el mensaje; el sitio no lo envía automáticamente ni confirma que BREICORP CAPITAL lo haya recibido. Al abrir ese enlace, el texto viaja en la URL hacia WhatsApp y puede ser tratado por ese servicio incluso antes de pulsar Enviar dentro de la aplicación.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">5. CONSERVACIÓN Y SEGURIDAD</h2>
            <p>
              El sitio no envía los formularios a un servidor propio ni los guarda en una base de datos o en localStorage. Los datos se mantienen temporalmente en la página mientras se prepara el enlace. El navegador o WhatsApp pueden conservar el enlace o la conversación según su funcionamiento. Si el visitante envía el mensaje, la conservación y eliminación de la conversación por parte de la empresa requieren una política operativa aún pendiente de definición.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">6. DESTINATARIOS Y ENCARGADOS</h2>
            <p>
              WhatsApp es un servicio de terceros. Su tratamiento de los datos compartidos mediante el enlace o la conversación se rige por sus propias condiciones y política de privacidad. La empresa debe revisar jurídicamente los posibles destinatarios, encargados y transferencias internacionales antes de publicar una versión definitiva de esta política.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">7. DERECHOS Y CANAL DE CONTACTO</h2>
            <p>
              El titular puede solicitar acceso, rectificación, cancelación u oposición respecto de los datos que la empresa llegue a tratar al recibir una conversación. El correo publicado para consultas es <strong>{siteConfig.contact.email}</strong>, pendiente de confirmación como canal para ejercer estos derechos.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">8. REVISIÓN PENDIENTE</h2>
            <p>
              Esta versión es un borrador técnico. La empresa debe confirmar sus datos de contacto y el número de WhatsApp, definir la conservación de conversaciones y obtener revisión jurídica antes de su publicación definitiva.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

