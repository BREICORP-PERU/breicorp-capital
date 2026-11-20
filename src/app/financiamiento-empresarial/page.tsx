import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

const title = "Financiamiento Empresarial en Perú";
const description =
  "Conoce las alternativas de financiamiento de BREICORP CAPITAL para negocios, capital de trabajo y crecimiento empresarial, sujetas a evaluación personalizada.";
const url = `${siteConfig.domain}/financiamiento-empresarial`;

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

export default function FinanciamientoEmpresarialPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <ServiceStructuredData name={title} description={description} url={url} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        <nav aria-label="Ruta de navegación" className="text-sm text-neutral-600">
          <Link href="/" className="underline underline-offset-2 hover:text-[#EE3C06]">Inicio</Link>
          <span aria-hidden="true"> / </span>Financiamiento empresarial
        </nav>

        <header className="space-y-5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#EE3C06]">Créditos MYPE</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#111111]">
            Financiamiento empresarial
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            BREICORP CAPITAL recibe consultas de empresarios, comerciantes y trabajadores independientes que buscan capital de trabajo o recursos para el crecimiento de su negocio.
          </p>
          <Button href={whatsappHref("Hola BREICORP CAPITAL, deseo consultar sobre financiamiento para mi negocio.")} isExternal size="lg">
            Consultar por WhatsApp
          </Button>
        </header>

        <section className="space-y-4" aria-labelledby="evaluacion-empresarial">
          <h2 id="evaluacion-empresarial" className="text-2xl font-bold text-[#111111]">Evaluación del negocio</h2>
          <p className="text-neutral-700 leading-relaxed">
            La consulta inicia con información sobre la actividad económica y el destino del financiamiento. El equipo evalúa la capacidad de pago y, cuando corresponda, la viabilidad de una garantía inmobiliaria.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            El monto, plazo, tasas y gastos se definen en la propuesta y documentación de cada operación, tras evaluar el caso.
          </p>
        </section>

        <section className="space-y-4" aria-labelledby="proceso-empresarial">
          <h2 id="proceso-empresarial" className="text-2xl font-bold text-[#111111]">Cómo iniciar</h2>
          <ol className="list-decimal pl-6 space-y-2 text-neutral-700">
            <li>Describe tu negocio y el financiamiento que necesitas por WhatsApp.</li>
            <li>Recibe orientación sobre la información necesaria para evaluar tu caso.</li>
            <li>Si la evaluación es favorable, revisa las condiciones propuestas antes de cualquier formalización contractual.</li>
          </ol>
          <p className="text-sm text-neutral-600">Una consulta no garantiza la aprobación del financiamiento.</p>
        </section>

        <section className="border-t border-neutral-200 pt-8 space-y-3" aria-labelledby="otros-servicios-empresariales">
          <h2 id="otros-servicios-empresariales" className="text-xl font-bold">Servicios relacionados</h2>
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-[#EE3C06]">
            <Link href="/prestamos-garantia-hipotecaria" className="underline underline-offset-2">Préstamos con garantía hipotecaria</Link>
            <Link href="/inversionistas" className="underline underline-offset-2">Red de inversionistas</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
