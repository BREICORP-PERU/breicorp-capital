import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import EditorialImage from "@/components/ui/EditorialImage";
import VisualSelector from "@/components/ui/VisualSelector";
import { photos } from "@/data/photos";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItemData } from "@/components/ui/Accordion";
import FAQStructuredData from "@/components/seo/FAQStructuredData";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

// ─── Structured Data ──────────────────────────────────────────────────────────

function TingoMariaStructuredData() {
  const domain = siteConfig.domain;
  const pageUrl = `${domain}/prestamos-garantia-hipotecaria-tingo-maria`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    name: "BREICORP CAPITAL - Tingo María",
    legalName: "BREICORP E.I.R.L.",
    taxID: siteConfig.ruc,
    url: pageUrl,
    telephone: siteConfig.contact.whatsappDisplay,
    email: siteConfig.contact.email,
    image: siteConfig.ogImage,
    description:
      "Financiamiento con garantía hipotecaria para empresarios y comerciantes de Tingo María, Rupa-Rupa, Leoncio Prado y Huánuco. Evaluación gratuita con inscripción en SUNARP Tingo María.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Tito Jaime 642",
      addressLocality: "Tingo María",
      addressRegion: "Huánuco",
      postalCode: "10131",
      addressCountry: "PE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: [
      "Tingo María",
      "Rupa-Rupa",
      "Castillo Grande",
      "Leoncio Prado",
      "Huánuco",
      "Naranjillo",
      "Aucayacu",
    ],
    hasMap: "https://maps.app.goo.gl/tingomaria",
    priceRange: "$$",
    sameAs: [domain],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Préstamos con Garantía Hipotecaria",
        item: `${domain}/prestamos-garantia-hipotecaria`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tingo María",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const faqItems: AccordionItemData[] = [
  {
    id: "oficina",
    question: "¿Dónde está la oficina de BREICORP CAPITAL en Tingo María?",
    answer:
      "Nuestra oficina está ubicada en Av. Tito Jaime 642, Tingo María, Huánuco (Código Postal 10131). Atendemos de lunes a viernes de 8:30 a.m. a 6:30 p.m. y los sábados de 9:00 a.m. a 1:00 p.m. También podemos coordinar reuniones virtuales si lo prefieres.",
  },
  {
    id: "inmuebles",
    question: "¿Qué inmuebles de Tingo María califican como garantía?",
    answer:
      "Califica cualquier inmueble (casa, terreno, local comercial) que esté inscrito en SUNARP Tingo María a nombre del solicitante o de un garante hipotecario. El inmueble debe contar con partida registral vigente, sin cargas que impidan la inscripción. Realizamos la consulta registral sin costo durante la pre-evaluación.",
  },
  {
    id: "cobertura",
    question: "¿Atienden en Rupa-Rupa, Castillo Grande o Aucayacu?",
    answer:
      "Sí. Atendemos operaciones en toda la provincia de Leoncio Prado: Tingo María, Rupa-Rupa, Castillo Grande, Naranjillo, Aucayacu, José Crespo y Castillo, Las Palmas y Mariano Dámaso Beraún. Para inmuebles en zonas cercanas a Huánuco capital, también podemos evaluar el caso.",
  },
  {
    id: "infocorp",
    question:
      "Estoy reportado en Infocorp o en la SBS. ¿Puedo solicitar financiamiento?",
    answer:
      "Sí. Nuestro financiamiento privado con garantía hipotecaria tiene un proceso de evaluación diferente al bancario. No nos basamos exclusivamente en el historial crediticio, sino en la solidez del inmueble como respaldo. Si tienes una propiedad inscrita en SUNARP, puedes solicitar una evaluación sin compromiso.",
  },
  {
    id: "notaria",
    question: "¿La formalización del crédito se hace ante una notaría de Tingo María?",
    answer:
      "Sí. La escritura pública de garantía hipotecaria se formaliza ante notaría pública en Tingo María. Luego se inscribe en la Oficina Registral de SUNARP Tingo María. Nuestro equipo te acompaña en todo el proceso de formalización, desde la evaluación hasta la inscripción registral.",
  },
];

const faqForSchema = faqItems.map((item) => ({
  question: item.question,
  answer: typeof item.answer === "string" ? item.answer : String(item.answer),
}));

// ─── WhatsApp message ─────────────────────────────────────────────────────────

const tingoMariaMessage =
  "Hola BREICORP CAPITAL, soy de Tingo María y deseo información sobre un préstamo con garantía hipotecaria. Por favor, indíquenme los siguientes pasos.";

// ─── Hero Section ─────────────────────────────────────────────────────────────

const districts = [
  { name: "Tingo María", label: "Capital de Provincia" },
  { name: "Rupa-Rupa", label: "Distrito Capital" },
  { name: "Castillo Grande", label: "Zona Comercial" },
  { name: "Naranjillo", label: "Leoncio Prado" },
  { name: "Aucayacu", label: "José Crespo y Castillo" },
  { name: "Las Palmas", label: "Leoncio Prado" },
  { name: "Mariano Dámaso Beraún", label: "Leoncio Prado" },
  { name: "Huánuco", label: "Capital Regional" },
];

const services = [
  {
    photo: photos.business,
    title: "Capital de Trabajo para MYPE",
    description:
      "Accede a capital de trabajo para impulsar tu negocio en Tingo María. Ideal para comerciantes del mercado local, restaurantes, transportistas y pequeños empresarios de Leoncio Prado.",
  },
  {
    photo: photos.conversation,
    title: "Consolidación de Deudas",
    description:
      "Unifica tus deudas en un solo financiamiento con tasas y condiciones personalizadas. Usa tu inmueble inscrito en SUNARP Tingo María como respaldo para reorganizar tu situación financiera.",
  },
  {
    photo: photos.city,
    title: "Proyectos Comerciales",
    description:
      "Financia la ampliación, remodelación o apertura de tu local comercial en Tingo María, Castillo Grande o Rupa-Rupa. También para proyectos de inversión en la región Huánuco.",
  },
];

const steps = [
  {
    label: "Consulta por WhatsApp",
    title: "Consulta por WhatsApp",
    photo: photos.conversation,
    description: `Escríbenos al ${siteConfig.contact.whatsappDisplay} desde Tingo María o cualquier distrito de Leoncio Prado. Te respondemos en el horario de atención.`,
  },
  {
    label: "Pre-evaluación SUNARP",
    title: "Pre-evaluación SUNARP",
    photo: photos.property,
    description:
      "Revisamos la partida registral de tu inmueble en SUNARP Tingo María. Verificamos cargas, titularidad y estado registral. Sin costo ni compromiso.",
  },
  {
    label: "Visita a Oficina",
    title: "Visita a Oficina",
    photo: photos.investment,
    description:
      "Coordinamos una reunión presencial en nuestra oficina de Av. Tito Jaime 642 o de forma virtual si lo prefieres. Revisamos tu caso en detalle.",
  },
  {
    label: "Formalización Notarial",
    title: "Formalización Notarial",
    photo: photos.documents,
    description:
      "Una vez aprobada la operación, se firma la escritura pública ante Notaría Pública de Tingo María y se inscribe la garantía hipotecaria en SUNARP.",
  },
] as const;

export default function TingoMariaPage() {
  const whatsappUrl = whatsappHref(tingoMariaMessage);

  return (
    <>
      <TingoMariaStructuredData />
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <div className="site-shell">
          <Link href="/">Inicio</Link><span aria-hidden="true"> / </span>
          <Link href="/prestamos-garantia-hipotecaria">Garantía hipotecaria</Link><span aria-hidden="true"> / </span>Tingo María
        </div>
      </nav>

      <section className="site-shell inner-hero editorial-split">
        <div className="section-intro section-intro-inline">
          <h1 className="page-headline">Préstamos con garantía hipotecaria en Tingo María</h1>
          <p>Financiamiento privado para empresarios y comerciantes de Leoncio Prado. Evaluamos tu solicitud con el respaldo de un inmueble inscrito en SUNARP.</p>
          <div className="action-row">
            <Button href={whatsappUrl} isExternal size="lg">Solicitar evaluación gratuita</Button>
            <Button href="/prestamos-garantia-hipotecaria" variant="outline" size="lg" icon={<ArrowUpRight className="size-4" />}>
              Ver requisitos
            </Button>
          </div>
          <p className="flex items-start gap-2"><MapPin className="mt-1 size-4 shrink-0" aria-hidden="true" /> {siteConfig.address}</p>
        </div>
        <EditorialImage photo={photos.tingoMaria} preload />
      </section>

      <section className="editorial-section tone-white" aria-labelledby="coverage-heading">
        <div className="site-shell editorial-split">
          <EditorialImage photo={photos.house} decorative />
          <div>
            <SectionHeading
              id="coverage-heading"
              title="Cobertura en Leoncio Prado"
              description="Atendemos operaciones en Leoncio Prado y zonas de Huánuco. Evaluamos cada caso de forma individual."
              align="left"
            />
            <ul className="mt-5 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {districts.map((district) => (
                <li key={district.name} className="border-t border-[#D9CEC2] pt-2">
                  <p className="font-semibold">{district.name}</p>
                  <p className="text-sm text-[var(--ink-muted)]">{district.label}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm">¿Tu inmueble está en otra zona de Huánuco? <a className="font-semibold underline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Consúltanos</a>.</p>
          </div>
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="services-heading">
        <div className="site-shell">
          <SectionHeading id="services-heading" title="Opciones de financiamiento" align="left" className="mb-8" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="solution-card">
                <EditorialImage photo={service.photo} decorative sizes="(min-width: 1024px) 28vw, 100vw" />
                <div className="solution-title"><h3>{service.title}</h3></div>
                <div className="solution-copy">
                  <p>{service.description}</p>
                  <Button href={whatsappUrl} isExternal variant="outline" size="sm">Consultar por WhatsApp</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section tone-white" aria-labelledby="process-heading">
        <div className="site-shell">
          <SectionHeading id="process-heading" title="El proceso en cuatro pasos" align="left" className="mb-8" />
          <VisualSelector label="Pasos para solicitar financiamiento en Tingo María" options={steps} sequence />
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="faq-heading">
        <FAQStructuredData items={faqForSchema} />
        <div className="site-shell editorial-split items-start">
          <div>
            <SectionHeading id="faq-heading" title="Preguntas sobre la atención en Tingo María" align="left" />
            <EditorialImage photo={photos.conversation} className="mt-5" />
          </div>
          <Accordion items={faqItems} defaultOpenId="oficina" />
        </div>
      </section>

      <section className="contact-band" aria-labelledby="contacto-tingo">
        <div className="site-shell editorial-split">
          <div className="section-intro section-intro-inline">
            <h2 id="contacto-tingo">Conversemos sobre tu propiedad.</h2>
            <p>Atención presencial y virtual. Si la operación avanza, la escritura pública se formaliza ante notaría.</p>
            <div className="action-row">
              <Button href={whatsappUrl} isExternal variant="secondary" size="lg">Solicitar evaluación gratuita</Button>
              <Button href="/prestamos-garantia-hipotecaria" variant="outline" size="lg">Ver requisitos generales</Button>
            </div>
            <p className="contact-note">{siteConfig.address} · {siteConfig.contact.schedule}</p>
            <a className="inline-flex min-h-11 items-center font-semibold underline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{siteConfig.contact.whatsappDisplay}</a>
          </div>
          <EditorialImage photo={photos.business} className="feature-photo" decorative />
        </div>
      </section>
    </>
  );
}
