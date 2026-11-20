import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Condiciones de uso del sitio y alcance de las consultas comerciales de BREICORP CAPITAL.",
  alternates: { canonical: `${siteConfig.domain}/terminos-y-condiciones` },
  robots: { index: false, follow: false },
  openGraph: { url: `${siteConfig.domain}/terminos-y-condiciones`, title: `Términos y condiciones | ${siteConfig.name}`, description: "Condiciones de uso del sitio y alcance de las consultas comerciales." },
};

export default function TerminosCondicionesPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 pb-20 pt-28 text-neutral-700 sm:px-6">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#B83208] underline">Volver al inicio</Link>
      <h1 className="mt-6 text-3xl font-extrabold text-[#111111] sm:text-4xl">Términos y condiciones</h1>
      <p className="mt-3 text-sm">Condiciones de uso de este sitio. Última revisión: noviembre de 2026.</p>
      <div className="mt-10 space-y-8 leading-relaxed">
        <section><h2 className="text-xl font-bold text-[#111111]">Identificación y alcance</h2><p className="mt-2">{siteConfig.name} es una línea comercial de {siteConfig.legalEntity}, RUC {siteConfig.ruc}, con domicilio publicado en {siteConfig.address}. El sitio presenta servicios de gestión e intermediación de posibles operaciones de financiamiento privado. No recibe depósitos ni se presenta como entidad bancaria.</p></section>
        <section><h2 className="text-xl font-bold text-[#111111]">Consultas y propuestas</h2><p className="mt-2">La información de la web es general. Completar el formulario, abrir WhatsApp o conversar con el equipo no constituye aprobación, oferta vinculante, contrato ni desembolso. Toda operación requiere evaluación individual, disponibilidad de capital y condiciones acordadas por las partes en los documentos aplicables.</p></section>
        <section><h2 className="text-xl font-bold text-[#111111]">Condiciones y riesgos</h2><p className="mt-2">Montos, tasas, plazos, gastos, garantías y obligaciones se determinarán para cada operación y deberán comunicarse antes de asumir compromisos. Una garantía inmobiliaria no elimina riesgos ni asegura resultados para inversionistas. Ninguna cifra informativa del sitio sustituye la documentación contractual.</p></section>
        <section><h2 className="text-xl font-bold text-[#111111]">Uso del sitio y datos personales</h2><p className="mt-2">Proporciona información veraz y no compartas documentos o datos sensibles en la consulta inicial. Los enlaces externos, incluido WhatsApp, se rigen por las condiciones de sus proveedores. Consulta nuestra <Link href="/politica-de-privacidad" className="underline">política de privacidad</Link> antes de enviar información personal.</p></section>
        <section><h2 className="text-xl font-bold text-[#111111]">Pagos, devoluciones y reclamos</h2><p className="mt-2">Este sitio no tiene pasarela de pago ni cobra al completar una consulta. Todo pago relacionado con una operación debe acordarse y documentarse por separado. Consulta la <Link href="/politica-de-pagos-y-reembolsos" className="underline">política de pagos y reembolsos</Link>. Para consultas escribe a <a href={`mailto:${siteConfig.contact.email}`} className="underline">{siteConfig.contact.email}</a>. Este texto no limita derechos reconocidos por la legislación de protección al consumidor.</p></section>
        <section><h2 className="text-xl font-bold text-[#111111]">Propiedad intelectual y cambios</h2><p className="mt-2">La marca y los materiales del sitio pertenecen a sus respectivos titulares. Su reutilización requiere comprobar los derechos correspondientes. La información del sitio puede actualizarse; los acuerdos formalizados se rigen por sus propios documentos.</p></section>
      </div>
    </article>
  );
}
