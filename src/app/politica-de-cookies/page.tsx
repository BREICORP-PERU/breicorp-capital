import EditorialImage from "@/components/ui/EditorialImage";
import { photos } from "@/data/photos";
import ReadingIndex from "@/components/ui/ReadingIndex";
﻿import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import CookieSettingsButton from "@/components/analytics/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre cookies y servicios externos del sitio de BREICORP CAPITAL.",
  alternates: { canonical: `${siteConfig.domain}/politica-de-cookies` },
  robots: { index: false, follow: false },
  openGraph: { url: `${siteConfig.domain}/politica-de-cookies`, title: `Política de cookies | ${siteConfig.name}`, description: "Información sobre cookies y servicios externos del sitio." },
};

export default function PoliticaCookiesPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 pb-20 pt-12 sm:pt-16 text-neutral-700 sm:px-6">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#B83208] underline">Volver al inicio</Link>
      <h1 className="page-headline mt-6 text-brand-black">Política de cookies</h1>
      <EditorialImage photo={photos.conversation} className="reading-cover mt-6" sizes="(min-width: 896px) 848px, 100vw" preload />
      <p className="mt-3 text-sm">Última revisión: noviembre de 2026.</p>
      <div className="my-8"><ReadingIndex items={[
        { id: "medicion-opcional", label: "Medición opcional" },
        { id: "tu-eleccion", label: "Tu elección" },
        { id: "servicios-externos-y-cambios", label: "Servicios externos y cambios" },
        { id: "contacto", label: "Contacto" },
      ]} /></div>
      <div className="space-y-8 max-w-[70ch] leading-relaxed">
        <section id="medicion-opcional"><h2 className="text-xl font-bold text-brand-black">Medición opcional</h2><p className="mt-2">Este sitio puede cargar Google Analytics 4 para el flujo G-XBBZ6QTH8R, operado por Google, únicamente cuando aceptas la medición. Google Analytics puede procesar datos de navegación y usar cookies de analítica. Antes de aceptar, el código del sitio no solicita la etiqueta. La verificación de Google Search Console no instala Google Analytics.</p></section>
        <section id="tu-eleccion"><h2 className="text-xl font-bold text-brand-black">Tu elección</h2><p className="mt-2">Puedes aceptar o rechazar la medición sin impedir el uso de la web. Guardamos esa elección en el almacenamiento local del navegador con la clave breicorp_cookie_consent_v2 para recordarla en próximas visitas; no guardamos allí las respuestas del formulario. Si rechazas, no cargamos Google Analytics. Puedes cambiar tu decisión desde <CookieSettingsButton className="min-h-11 font-semibold underline underline-offset-2" /> o el enlace del pie de página. Al retirar el consentimiento, la página se recarga sin la etiqueta; las cookies ya creadas pueden permanecer hasta que las borres desde el navegador.</p></section>
        <section id="servicios-externos-y-cambios"><h2 className="text-xl font-bold text-brand-black">Servicios externos y cambios</h2><p className="mt-2">Si pulsas un enlace a WhatsApp, sales del sitio y esa plataforma puede usar sus propias tecnologías. Vercel aloja la web y puede procesar datos técnicos para entregarla y protegerla. Si se añaden etiquetas publicitarias, mapas u otros widgets, habrá que revisar esta política y el consentimiento antes de activarlos.</p></section>
        <section id="contacto"><h2 className="text-xl font-bold text-brand-black">Contacto</h2><p className="mt-2">Para preguntas sobre privacidad o cookies, escribe a <a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. Consulta también la <Link href="/politica-de-privacidad" className="underline">política de privacidad</Link>.</p></section>
      </div>
    </article>
  );
}
