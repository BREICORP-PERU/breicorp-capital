import EditorialImage from "@/components/ui/EditorialImage";
import { photos } from "@/data/photos";
import ReadingIndex from "@/components/ui/ReadingIndex";
﻿import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo BREICORP CAPITAL trata los datos que compartes en una consulta.",
  alternates: { canonical: `${siteConfig.domain}/politica-de-privacidad` },
  robots: { index: false, follow: false },
  openGraph: { url: `${siteConfig.domain}/politica-de-privacidad`, title: `Política de privacidad | ${siteConfig.name}`, description: "Cómo se tratan los datos de las consultas iniciadas desde este sitio." },
};

export default function PoliticaPrivacidadPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 pb-20 pt-12 sm:pt-16 text-neutral-700 sm:px-6">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#B83208] underline">Volver al inicio</Link>
      <h1 className="page-headline mt-6 text-brand-black">Política de privacidad</h1>
      <EditorialImage photo={photos.property} className="reading-cover mt-6" sizes="(min-width: 896px) 848px, 100vw" preload />
      <p className="mt-3 text-sm">Información sobre este sitio y las consultas iniciadas desde él. Última revisión: noviembre de 2026.</p>
      <div className="my-8"><ReadingIndex items={[
        { id: "responsable-y-contacto", label: "Responsable y contacto" },
        { id: "datos-y-finalidad", label: "Datos y finalidad" },
        { id: "whatsapp-y-terceros", label: "WhatsApp y terceros" },
        { id: "conservacion-y-seguridad", label: "Conservación y seguridad" },
        { id: "tus-derechos", label: "Tus derechos" },
        { id: "marco-y-revision", label: "Marco y revisión" },
      ]} /></div>
      <div className="space-y-8 max-w-[70ch] leading-relaxed">
        <section id="responsable-y-contacto"><h2 className="text-xl font-bold text-brand-black">Responsable y contacto</h2><p className="mt-2">{siteConfig.name} es una línea comercial de {siteConfig.legalEntity}, RUC {siteConfig.ruc}. Domicilio publicado: {siteConfig.address}. Para consultas o ejercicio de derechos sobre tus datos, escribe a <a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.</p></section>
        <section id="datos-y-finalidad"><h2 className="text-xl font-bold text-brand-black">Datos y finalidad</h2><p className="mt-2">El formulario de inversionistas solicita nombre, celular y monto aproximado; el correo es opcional. Los botones de consulta preparan mensajes genéricos. Tratamos la información que decidas enviarnos para responder tu solicitud y evaluar si corresponde continuar la conversación comercial. Este formulario no suscribe a publicidad ni decide automáticamente una aprobación.</p><p className="mt-2">La casilla del formulario solicita aceptación expresa antes de abrir WhatsApp. Si no estás de acuerdo, puedes no enviar la consulta. Si nos escribes directamente por WhatsApp o correo, compartes voluntariamente los datos que incluyas.</p></section>
        <section id="whatsapp-y-terceros"><h2 className="text-xl font-bold text-brand-black">WhatsApp y terceros</h2><p className="mt-2">El formulario no envía datos a un servidor propio ni los guarda en una base de datos del sitio. Al continuar, se abre un enlace wa.me que incorpora los datos en la URL. WhatsApp puede recibir esa URL antes de que pulses «Enviar» en su aplicación. Revisa el mensaje y evita incluir documentos o datos sensibles en esta primera consulta. El tratamiento por WhatsApp se rige también por sus propias condiciones.</p><p className="mt-2">El sitio se aloja en Vercel, que puede procesar datos técnicos de conexión necesarios para servirlo. Si aceptas la medición opcional, se carga Google Analytics 4 para medir el uso de la web. Consulta la <Link className="underline" href="/politica-de-cookies">política de cookies</Link> para aceptar, rechazar o cambiar tu elección.</p></section>
        <section id="conservacion-y-seguridad"><h2 className="text-xl font-bold text-brand-black">Conservación y seguridad</h2><p className="mt-2">Los datos introducidos en el formulario permanecen en la página mientras esté abierta; no se guardan en localStorage. La elección sobre medición sí se guarda en el almacenamiento local del navegador. Si envías el mensaje, la empresa puede conservar la conversación para atender la solicitud y cumplir sus obligaciones. El plazo operativo exacto, los destinatarios posteriores y la eventual inscripción de bancos de datos requieren confirmación interna.</p></section>
        <section id="tus-derechos"><h2 className="text-xl font-bold text-brand-black">Tus derechos</h2><p className="mt-2">Puedes solicitar información, acceso, rectificación, cancelación u oposición, así como revocar el consentimiento, mediante el correo indicado. Incluye datos suficientes para ubicar la conversación. También puedes acudir a la Autoridad Nacional de Protección de Datos Personales si consideras vulnerados tus derechos.</p></section>
        <section id="marco-y-revision"><h2 className="text-xl font-bold text-brand-black">Marco y revisión</h2><p className="mt-2">Esta información considera la Ley peruana N.º 29733 y su Reglamento aprobado por el Decreto Supremo N.º 016-2024-JUS. Publicar una política no sustituye el consentimiento cuando corresponde. La empresa debe validar sus procedimientos de conservación, atención de derechos y transferencias antes de dar por cerrado este documento jurídico.</p></section>
      </div>
    </article>
  );
}
