import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Store, Building2, TrendingUp, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { whatsappHref } from "@/config/siteConfig";

export default function ServicesSection() {
  const solutions = [
    {
      id: "mype",
      icon: Store,
      title: "CRÉDITOS MYPE",
      description:
        "Financiamiento para impulsar tu negocio, capital de trabajo y crecimiento empresarial.",
      image:
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
      tag: "Comercio y Empresa",
      ctaText: "Solicitar Crédito MYPE",
      ctaHref: whatsappHref("Hola BREICORP CAPITAL, deseo consultar sobre un Crédito MYPE para mi negocio."),
      isExternal: true,
      badgeColor: "bg-[#EE3C06] text-white",
    },
    {
      id: "hipotecario",
      icon: Building2,
      title: "CRÉDITO CON GARANTÍA HIPOTECARIA",
      description:
        "Alternativas de financiamiento respaldadas por un inmueble, sujetas a evaluación.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      tag: "Respaldo Inmobiliario",
      ctaText: "Consultar con Garantía",
      ctaHref: whatsappHref("Hola BREICORP CAPITAL, deseo consultar sobre un Crédito con Garantía Hipotecaria."),
      isExternal: true,
      badgeColor: "bg-[#111111] text-white",
    },
    {
      id: "inversion",
      icon: TrendingUp,
      title: "OPORTUNIDADES DE INVERSIÓN",
      description:
        "Información y evaluación para personas interesadas en participar en operaciones de financiamiento.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      tag: "Participación Privada",
      ctaText: "Ver Oportunidades",
      ctaHref: "/inversionistas",
      isExternal: false,
      badgeColor: "bg-[#C6A15B] text-white",
    },
  ];

  return (
    <section
      id="soluciones"
      className="py-20 lg:py-24 bg-white border-t border-neutral-100 scroll-mt-20"
    >
      <div id="creditos" className="-mt-20 pt-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Nuestras Soluciones"
          title="SOLUCIONES DE FINANCIAMIENTO"
          description="Alternativas comerciales directas diseñadas para cada necesidad de capital o inversión."
          align="center"
          className="mb-14"
        />

        {/* 3 Alternativas visuales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-subtle hover:shadow-card hover:border-neutral-300 transition-all duration-300"
              >
                {/* Imagen contextual */}
                <div className="relative h-48 w-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover filter brightness-[0.88] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                  <span
                    className={`absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${item.badgeColor}`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Contenido conciso */}
                <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-[#EE3C06] group-hover:bg-[#EE3C06]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-[#111111] uppercase tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* CTA destacado */}
                  <div className="pt-4 border-t border-neutral-100">
                    {item.isExternal ? (
                      <a
                        href={item.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-50 hover:bg-[#EE3C06] text-neutral-800 hover:text-white border border-neutral-200 hover:border-[#EE3C06] transition-all shadow-subtle"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                        <span>{item.ctaText}</span>
                      </a>
                    ) : (
                      <Link
                        href={item.ctaHref}
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-50 hover:bg-[#111111] text-neutral-800 hover:text-white border border-neutral-200 hover:border-[#111111] transition-all shadow-subtle"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
