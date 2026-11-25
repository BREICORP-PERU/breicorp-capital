import type { Metadata } from "next";
import { ServiceDetail, ServiceHero } from "@/components/ui/ServicePage";
import RelatedServices from "@/components/ui/RelatedServices";
import { photos } from "@/data/photos";
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
    <>
      <ServiceStructuredData name={title} description={description} url={url} />
      <ServiceHero
        title="Financiamiento empresarial"
        description="BREICORP CAPITAL recibe consultas de empresarios, comerciantes y trabajadores independientes que buscan capital de trabajo o recursos para el crecimiento de su negocio."
        photo={photos.business}
        contact={whatsappHref("Hola BREICORP CAPITAL, deseo consultar sobre financiamiento para mi negocio.")}
      />
      <div className="site-shell service-details">
        <ServiceDetail id="evaluacion-empresarial" title="Evaluación del negocio" photo={photos.city}>
          <p>
            La consulta inicia con información sobre la actividad económica y el destino del financiamiento. El equipo evalúa la capacidad de pago y, cuando corresponda, la viabilidad de una garantía inmobiliaria.
          </p>
          <p>
            El monto, plazo, tasas y gastos se definen en la propuesta y documentación de cada operación, tras evaluar el caso.
          </p>
          </ServiceDetail>
        <ServiceDetail id="proceso-empresarial" title="Cómo iniciar" photo={photos.conversation}>
          <ol className="list-decimal pl-6 space-y-2 text-neutral-700">
            <li>Describe tu negocio y el financiamiento que necesitas por WhatsApp.</li>
            <li>Recibe orientación sobre la información necesaria para evaluar tu caso.</li>
            <li>Si la evaluación es favorable, revisa las condiciones propuestas antes de cualquier formalización contractual.</li>
          </ol>
          <p className="text-sm text-neutral-600">Una consulta no garantiza la aprobación del financiamiento.</p>
          </ServiceDetail>
        <section className="space-y-5" aria-labelledby="otros-servicios-empresariales">
          <h2 id="otros-servicios-empresariales">Servicios relacionados</h2>
          <RelatedServices links={["mortgage","investment"]} />
        </section>
      </div>
    </>
  );
}
