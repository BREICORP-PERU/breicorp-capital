import type { Metadata } from "next";
import { ServiceDetail, ServiceHero } from "@/components/ui/ServicePage";
import RelatedServices from "@/components/ui/RelatedServices";
import { photos } from "@/data/photos";
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
    <>
      <ServiceStructuredData name={title} description={description} url={url} />
      <ServiceHero
        title="Préstamos con garantía hipotecaria"
        description="BREICORP CAPITAL gestiona y evalúa posibles operaciones de financiamiento respaldadas por un inmueble. La aprobación y las condiciones dependen de la evaluación de cada caso."
        photo={photos.house}
        contact={whatsappHref("Hola BREICORP CAPITAL, deseo consultar sobre financiamiento con garantía hipotecaria.")}
      />
      <div className="site-shell service-details">
        <ServiceDetail id="requisitos-hipotecarios" title="¿Qué se evalúa?" photo={photos.property}>
          <p>
            El sitio informa que se consideran la actividad económica y capacidad de pago, junto con la situación registral y valoración del inmueble. Se contemplan casas, departamentos, locales comerciales y terrenos con partida inscrita en SUNARP.
          </p>
          <p>
            El importe, plazo, tasas y gastos se determinan para cada operación y deben constar en sus documentos contractuales.
          </p>
          </ServiceDetail>
        <ServiceDetail id="proceso-hipotecario" title="Proceso de atención" photo={photos.documents}>
          <ol className="list-decimal pl-6 space-y-2 text-neutral-700">
            <li>Envía una consulta inicial por WhatsApp.</li>
            <li>El equipo revisa el perfil del solicitante y la viabilidad de la garantía.</li>
            <li>Si la operación avanza, se presentan las condiciones y se formaliza mediante los instrumentos contractuales y notariales correspondientes.</li>
          </ol>
          <p className="text-sm text-neutral-600">Enviar una consulta no implica aprobación ni desembolso.</p>
          </ServiceDetail>
        <section className="space-y-5" aria-labelledby="otros-servicios-hipotecarios">
          <h2 id="otros-servicios-hipotecarios">Explora otras opciones</h2>
          <RelatedServices links={["business","investment"]} />
        </section>
      </div>
    </>
  );
}
