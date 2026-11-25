import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import EditorialImage from "@/components/ui/EditorialImage";
import { photos } from "@/data/photos";
import { whatsappHref } from "@/config/siteConfig";

const services = [
  {
    title: "Préstamos con garantía hipotecaria",
    description: "Usa un inmueble inscrito en SUNARP como respaldo para solicitar financiamiento. El monto y las condiciones dependen de la evaluación.",
    href: "/prestamos-garantia-hipotecaria",
    photo: photos.property,
    message: "Hola BREICORP CAPITAL, deseo consultar sobre un Crédito con Garantía Hipotecaria.",
  },
  {
    title: "Financiamiento empresarial",
    description: "Consulta opciones de capital de trabajo y crecimiento para tu negocio.",
    href: "/financiamiento-empresarial",
    photo: photos.business,
    message: "Hola BREICORP CAPITAL, deseo consultar sobre un Crédito MYPE para mi negocio.",
  },
  {
    title: "Oportunidades de inversión",
    description: "Conoce cómo participar en operaciones privadas con respaldo inmobiliario, sujetas a disponibilidad y evaluación.",
    href: "/inversionistas",
    photo: photos.investment,
  },
];

export default function ServicesSection() {
  return (
    <section id="soluciones" className="editorial-section">
      <div className="site-shell">
        <span id="creditos" className="block" />
        <div className="section-intro">
          <h2>Soluciones de financiamiento e inversión</h2>
        </div>
        <div className="solutions-grid">
          {services.map((service) => (
            <article className="solution-card" key={service.href}>
              <Link className="solution-link" href={service.href}>
                <EditorialImage photo={service.photo} decorative sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw" />
                <div className="solution-title">
                  <h3>{service.title}</h3>
                  <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
                </div>
              </Link>
              <div className="solution-copy">
                <p>{service.description}</p>
                {service.message && (
                  <Button href={whatsappHref(service.message)} isExternal variant="outline" size="sm">
                    Consultar por WhatsApp
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
