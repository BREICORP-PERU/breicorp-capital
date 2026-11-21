"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  Building2,
  FileText,
  Users,
  ShieldCheck,
  MessageCircle,
  ChevronRight,
  Clock,
  Star,
} from "lucide-react";
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

function LocalHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let gsap: typeof import("gsap").gsap | null = null;

    import("gsap").then(({ gsap: g }) => {
      gsap = g;
      const items = heroRef.current?.querySelectorAll(".hero-anim-item");
      if (!items || items.length === 0) return;
      gsap.set(items, { opacity: 0, y: 32 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.72,
        ease: "cubic-bezier(0.23, 1, 0.32, 1)",
        stagger: 0.065,
        delay: 0.1,
      });
    });

    return () => {
      if (gsap) {
        gsap.killTweensOf(".hero-anim-item");
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center bg-[#0A0A0C] overflow-hidden"
      aria-label="Préstamos con Garantía Hipotecaria en Tingo María"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Gradient blobs */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#EE3C06]/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#C6A15B]/6 blur-[100px]" />
      </div>

      {/* Floating badge */}
      <div
        className="absolute top-8 right-6 sm:right-10 animate-float-slow hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2"
        aria-hidden="true"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
        <span className="text-xs text-white/70 font-medium">
          Oficina en Tingo María
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location kicker */}
            <div className="hero-anim-item flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EE3C06]/15 border border-[#EE3C06]/30 text-[#EE3C06] text-xs font-semibold tracking-wide uppercase">
                <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                Tingo María · Leoncio Prado · Huánuco
              </span>
            </div>

            {/* H1 */}
            <h1 className="hero-anim-item text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.05]">
              PRÉSTAMOS CON{" "}
              <span className="text-[#EE3C06]">GARANTÍA</span>{" "}
              <span className="text-[#C6A15B]">HIPOTECARIA</span>{" "}
              EN TINGO MARÍA
            </h1>

            {/* Subtext */}
            <p className="hero-anim-item text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              Financiamiento privado para empresarios y comerciantes de Tingo
              María. Usamos tu inmueble inscrito en{" "}
              <strong className="text-white">SUNARP Tingo María</strong> como
              respaldo. Atendemos en Rupa-Rupa, Castillo Grande, Aucayacu y
              toda la provincia de Leoncio Prado.
            </p>

            {/* Office address */}
            <p className="hero-anim-item flex items-start gap-2 text-sm text-neutral-400">
              <MapPin className="w-4 h-4 text-[#C6A15B] mt-0.5 shrink-0" aria-hidden="true" />
              Av. Tito Jaime 642, Tingo María 10131, Huánuco, Perú
            </p>

            {/* CTAs */}
            <div className="hero-anim-item flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                href={whatsappHref(tingoMariaMessage)}
                isExternal
                variant="primary"
                size="lg"
                icon={<MessageCircle className="w-5 h-5" />}
                iconPosition="left"
                className="active:scale-[0.97]"
              >
                Solicitar Evaluación Gratuita
              </Button>
              <Button
                href="/prestamos-garantia-hipotecaria"
                variant="outline-light"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="active:scale-[0.97]"
              >
                Ver Requisitos
              </Button>
            </div>

            {/* Phone */}
            <p className="hero-anim-item flex items-center gap-2 text-sm text-neutral-500">
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>
                WhatsApp directo:{" "}
                <a
                  href={whatsappHref(tingoMariaMessage)}
                  className="text-white hover:text-[#EE3C06] transition-colors font-semibold"
                >
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </span>
            </p>
          </div>

          {/* Right column — trust cards */}
          <div className="lg:col-span-5 space-y-3">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#C6A15B]" />,
                title: "SUNARP Tingo María",
                desc: "Inscripción Registral Oficial",
              },
              {
                icon: <FileText className="w-6 h-6 text-[#EE3C06]" />,
                title: "Notaría Local",
                desc: "Escritura Pública en Tingo María",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Atención Presencial y Virtual",
                desc: "Oficina en Av. Tito Jaime 642",
              },
              {
                icon: <Clock className="w-6 h-6 text-[#C6A15B]" />,
                title: "Horario de Atención",
                desc: "Lun–Vie 8:30–18:30 · Sáb 9:00–13:00",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="hero-anim-item glass-dark-card flex items-center gap-4 p-4 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5"
              >
                <div className="p-2.5 rounded-lg bg-white/5 shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {card.title}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Coverage Section ─────────────────────────────────────────────────────────

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

function CoverageSection() {
  return (
    <section
      className="bg-white py-16 sm:py-20"
      aria-labelledby="coverage-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Cobertura regional"
          title="ZONA DE COBERTURA EN LEONCIO PRADO"
          description="Atendemos operaciones en toda la provincia de Leoncio Prado y zonas de Huánuco. Si tu inmueble está inscrito en SUNARP de la región, podemos evaluarlo."
          align="center"
        />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {districts.map((d) => (
            <div
              key={d.name}
              className="flex items-start gap-2.5 p-4 rounded-xl border border-neutral-100 bg-[#F8F9FA] hover:border-[#EE3C06]/30 hover:bg-[#EE3C06]/5 transition-all duration-200 group"
            >
              <MapPin
                className="w-4 h-4 text-[#EE3C06] mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold text-[#111111]">{d.name}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{d.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500 max-w-2xl mx-auto">
          ¿Tu propiedad está en otra zona de Huánuco?{" "}
          <a
            href={whatsappHref(tingoMariaMessage)}
            className="text-[#EE3C06] font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consúltanos sin compromiso
          </a>
          . Evaluamos cada caso de forma individual.
        </p>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────

const services = [
  {
    icon: <Building2 className="w-7 h-7 text-[#EE3C06]" />,
    title: "Capital de Trabajo para MYPE",
    description:
      "Accede a capital de trabajo para impulsar tu negocio en Tingo María. Ideal para comerciantes del mercado local, restaurantes, transportistas y pequeños empresarios de Leoncio Prado.",
    badge: "MYPE & Comercio",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#C6A15B]" />,
    title: "Consolidación de Deudas",
    description:
      "Unifica tus deudas en un solo financiamiento con tasas y condiciones personalizadas. Usa tu inmueble inscrito en SUNARP Tingo María como respaldo para reorganizar tu situación financiera.",
    badge: "Reorganización financiera",
  },
  {
    icon: <Star className="w-7 h-7 text-white" />,
    title: "Proyectos Comerciales",
    description:
      "Financia la ampliación, remodelación o apertura de tu local comercial en Tingo María, Castillo Grande o Rupa-Rupa. También para proyectos de inversión en la región Huánuco.",
    badge: "Inversión & Crecimiento",
  },
];

function ServicesSection() {
  return (
    <section
      className="bg-[#F8F9FA] py-16 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Soluciones financieras"
          title="FINANCIAMIENTO A TU MEDIDA EN TINGO MARÍA"
          description="Diseñamos la solución según tu necesidad y el respaldo de tu inmueble. Sin trámites bancarios complicados."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <article
              key={i}
              className="bg-[#111111] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 border border-white/5 hover:border-[#EE3C06]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(238,60,6,0.12)] group"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-white/5">{service.icon}</div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 border border-white/10 px-2.5 py-1 rounded-full">
                  {service.badge}
                </span>
              </div>

              <div className="space-y-2.5 flex-1">
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#EE3C06] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <Button
                href={whatsappHref(tingoMariaMessage)}
                isExternal
                variant="outline-light"
                size="sm"
                icon={<MessageCircle className="w-4 h-4" />}
                iconPosition="left"
                className="mt-auto active:scale-[0.97] w-full justify-center"
              >
                Consultar por WhatsApp
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process Steps ────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Consulta por WhatsApp",
    description: `Escríbenos al ${siteConfig.contact.whatsappDisplay} desde Tingo María o cualquier distrito de Leoncio Prado. Te respondemos en el horario de atención.`,
    icon: <MessageCircle className="w-6 h-6" />,
    color: "text-[#EE3C06]",
    borderColor: "border-[#EE3C06]/30",
  },
  {
    num: "02",
    title: "Pre-evaluación SUNARP",
    description:
      "Revisamos la partida registral de tu inmueble en SUNARP Tingo María. Verificamos cargas, titularidad y estado registral. Sin costo ni compromiso.",
    icon: <FileText className="w-6 h-6" />,
    color: "text-[#C6A15B]",
    borderColor: "border-[#C6A15B]/30",
  },
  {
    num: "03",
    title: "Visita a Oficina",
    description:
      "Coordinamos una reunión presencial en nuestra oficina de Av. Tito Jaime 642 o de forma virtual si lo prefieres. Revisamos tu caso en detalle.",
    icon: <MapPin className="w-6 h-6" />,
    color: "text-white",
    borderColor: "border-white/20",
  },
  {
    num: "04",
    title: "Formalización Notarial",
    description:
      "Una vez aprobada la operación, se firma la escritura pública ante Notaría Pública de Tingo María y se inscribe la garantía hipotecaria en SUNARP.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    color: "text-green-400",
    borderColor: "border-green-400/30",
  },
];

function ProcessSection() {
  return (
    <section
      className="bg-white py-16 sm:py-20"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Proceso simple"
          title="4 PASOS PARA OBTENER TU FINANCIAMIENTO"
          description="Un proceso claro, sin burocracia bancaria. Desde Tingo María o cualquier zona de Leoncio Prado."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-6 h-px border-t border-dashed border-neutral-200 z-10"
                  aria-hidden="true"
                />
              )}

              <div
                className={`flex flex-col gap-4 p-6 rounded-2xl border ${step.borderColor} bg-[#F8F9FA] hover:bg-white hover:shadow-sm transition-all duration-200`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-3xl font-black font-mono ${step.color} opacity-60`}
                  >
                    {step.num}
                  </span>
                  <span className={`${step.color}`}>{step.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#111111] text-sm sm:text-base leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────

function FAQSection() {
  return (
    <section
      className="bg-[#F8F9FA] py-16 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <FAQStructuredData items={faqForSchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Preguntas frecuentes"
          title="DUDAS SOBRE FINANCIAMIENTO EN TINGO MARÍA"
          description="Resolvemos las consultas más comunes de empresarios y comerciantes de Leoncio Prado."
          align="center"
        />

        <div className="mt-10">
          <Accordion items={faqItems} defaultOpenId="oficina" />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 mb-4">
            ¿Tienes otra consulta? Escríbenos directamente.
          </p>
          <Button
            href={whatsappHref(tingoMariaMessage)}
            isExternal
            variant="primary"
            size="md"
            icon={<MessageCircle className="w-4 h-4" />}
            iconPosition="left"
            className="active:scale-[0.97]"
          >
            Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA Section ────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section
      className="bg-[#111111] py-16 sm:py-20"
      aria-label="Contacto y CTA final"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EE3C06]/15 border border-[#EE3C06]/30 text-[#EE3C06] text-xs font-semibold tracking-wide uppercase">
          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
          Tingo María, Huánuco
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
          FINANCIA TU PROYECTO{" "}
          <span className="text-[#C6A15B]">CON EL RESPALDO</span>{" "}
          DE TU PROPIEDAD
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Empresarios y comerciantes de Tingo María nos eligen porque
          entendemos la realidad local. Evaluación gratuita, proceso
          transparente, formalización ante notaría de Tingo María.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button
            href={whatsappHref(tingoMariaMessage)}
            isExternal
            variant="primary"
            size="lg"
            icon={<MessageCircle className="w-5 h-5" />}
            iconPosition="left"
            className="active:scale-[0.97]"
          >
            Solicitar Evaluación Gratuita
          </Button>
          <Button
            href="/prestamos-garantia-hipotecaria"
            variant="gold"
            size="lg"
            icon={<ChevronRight className="w-4 h-4" />}
            iconPosition="right"
            className="active:scale-[0.97]"
          >
            Ver Requisitos Generales
          </Button>
        </div>

        {/* Office info */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neutral-500">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#EE3C06] shrink-0" />
            Av. Tito Jaime 642, Tingo María 10131
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <a
            href={whatsappHref(tingoMariaMessage)}
            className="flex items-center gap-2 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="w-4 h-4 text-[#EE3C06] shrink-0" />
            {siteConfig.contact.whatsappDisplay}
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#EE3C06] shrink-0" />
            Lun–Vie 8:30–18:30 · Sáb 9:00–13:00
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function TingoMariaPage() {
  return (
    <>
      <TingoMariaStructuredData />

      {/* Breadcrumb nav */}
      <nav
        className="border-b border-neutral-200 bg-neutral-50"
        aria-label="Ruta de navegación"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center flex-wrap gap-1 text-xs text-neutral-500">
            <li>
              <Link href="/" className="hover:text-[#EE3C06] transition-colors">
                Inicio
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3 shrink-0" aria-hidden="true" />
              <Link
                href="/prestamos-garantia-hipotecaria"
                className="hover:text-[#EE3C06] transition-colors"
              >
                Préstamos con Garantía Hipotecaria
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span className="text-[#111111] font-medium">Tingo María</span>
            </li>
          </ol>
        </div>
      </nav>

      <main>
        <LocalHero />
        <CoverageSection />
        <ServicesSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTA />
      </main>
    </>
  );
}
