import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre cookies y servicios externos del sitio de BREICORP CAPITAL.",
  alternates: { canonical: `${siteConfig.domain}/politica-de-cookies` },
  robots: { index: false, follow: false },
  openGraph: { url: `${siteConfig.domain}/politica-de-cookies`, title: `Política de cookies | ${siteConfig.name}`, description: "Información sobre cookies y servicios externos del sitio." },
};

export default function PoliticaCookiesPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 pb-20 pt-28 text-neutral-700 sm:px-6">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#B83208] underline">Volver al inicio</Link>
      <h1 className="mt-6 text-3xl font-extrabold text-[#111111] sm:text-4xl">Política de cookies</h1>
      <p className="mt-3 text-sm">Estado del sitio revisado en noviembre de 2026.</p>
      <div className="mt-10 space-y-8 leading-relaxed">
        <section><h2 className="text-xl font-bold text-[#111111]">Uso actual</h2><p className="mt-2">En el código de este sitio no hay scripts de Google Analytics, Google Tag Manager, píxeles publicitarios ni instrucciones para instalar cookies de analítica o marketing. Tampoco se guardan las respuestas del formulario en localStorage. Por este motivo, el sitio no muestra un panel de aceptación de cookies opcionales que actualmente no utiliza.</p></section>
        <section><h2 className="text-xl font-bold text-[#111111]">Servicios externos</h2><p className="mt-2">Si pulsas un enlace a WhatsApp, sales del sitio y esa plataforma puede utilizar cookies u otras tecnologías según sus propias políticas. Vercel aloja la web y puede procesar datos técnicos para entregarla y protegerla. La verificación de Google Search Console no equivale a instalar Google Analytics.</p></section>
        <section><h2 className="text-xl font-bold text-[#111111]">Cambios futuros</h2><p className="mt-2">Si en el futuro se incorporan herramientas de medición, publicidad, mapas o widgets que utilicen cookies no necesarias o recojan datos personales, revisaremos esta política y solicitaremos el consentimiento que corresponda antes de activarlos. Puedes gestionar las cookies existentes desde la configuración de tu navegador.</p></section>
        <section><h2 className="text-xl font-bold text-[#111111]">Contacto</h2><p className="mt-2">Para preguntas sobre privacidad o cookies, escribe a <a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. Consulta también la <Link href="/politica-de-privacidad" className="underline">política de privacidad</Link>.</p></section>
      </div>
    </article>
  );
}
