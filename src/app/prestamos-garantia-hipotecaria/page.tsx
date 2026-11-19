import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

const title = "Préstamos con Garantía Hipotecaria en Perú";
const description =
  "Consulta alternativas de financiamiento respaldadas por un inmueble inscrito en SUNARP. Conoce cómo BREICORP CAPITAL evalúa y formaliza cada operación.";
const url = `${siteConfig.domain}/prestamos-garantia-hipotecaria`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url,
    siteName: siteConfig.name,
    locale: "es_PE",
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
  },
};

export default function PrestamosGarantiaHipotecariaPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <ServiceStructuredData name={title} description={description} url={url} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        <nav aria-label="Ruta de navegación" className="text-sm text-neutral-600">
          <Link href="/" className="underline underline-offset-2 hover:text-[#EE3C06]">Inicio</Link>
          <span aria-hidden="true"> / </span>Préstamos con garantía hipotecaria
        </nav>

        <header className="space-y-5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#EE3C06]">Soluciones de financiamiento</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#111111]">
            Préstamos con garantía hipotecaria
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            BREICORP CAPITAL gestiona y evalúa posibles operaciones de financiamiento respaldadas por un inmueble. La aprobación y las condiciones dependen de la evaluación de cada caso.
          </p>
          <Button href={whatsappHref("Hola BREICORP CAPITAL, deseo consultar sobre financiamiento con garantía hipotecaria.")} isExternal size="lg">
            Consultar por WhatsApp
          </Button>
        </header>

        <section className="space-y-4" aria-labelledby="requisitos-hipotecarios">
          <h2 id="requisitos-hipotecarios" className="text-2xl font-bold text-[#111111]">¿Qué se evalúa?</h2>
          <p className="text-neutral-700 leading-relaxed">
            El sitio informa que se consideran la actividad económica y capacidad de pago, junto con la situación registral y valoración del inmueble. Se contemplan casas, departamentos, locales comerciales y terrenos con partida inscrita en SUNARP.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            El monto mínimo evaluable publicado es de {siteConfig.financing.minAmountFormatted}. El importe final, plazo, tasas y gastos se determinan para cada operación y deben constar en sus documentos contractuales.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="proceso-hipotecario">
          <h2 id="proceso-hipotecario" className="text-2xl font-bold text-[#111111]">Proceso de atención</h2>
          <ol className="list-decimal pl-6 space-y-2 text-neutral-700">
            <li>Envía una consulta inicial por WhatsApp.</li>
            <li>El equipo revisa el perfil del solicitante y la viabilidad de la garantía.</li>
            <li>Si la operación avanza, se presentan las condiciones y se formaliza mediante los instrumentos contractuales y notariales correspondientes.</li>
          </ol>
          <p className="text-sm text-neutral-600">Enviar una consulta no implica aprobación ni desembolso.</p>
        </section>

        <section className="border-t border-neutral-200 pt-8 space-y-3" aria-labelledby="otros-servicios-hipotecarios">
          <h2 id="otros-servicios-hipotecarios" className="text-xl font-bold">Explora otras opciones</h2>
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-[#EE3C06]">
            <Link href="/financiamiento-empresarial" className="underline underline-offset-2">Financiamiento empresarial</Link>
            <Link href="/inversionistas" className="underline underline-offset-2">Red de inversionistas</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
