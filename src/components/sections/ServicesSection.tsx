import React from "react";
import Image from "next/image";
import { Briefcase, TrendingUp, Gem, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesSection() {
  const applications = [
    {
      icon: Briefcase,
      title: "Capital de trabajo",
      subtitle: "Liquidez inmediata para tu operación diaria",
      description:
        "Financia compras estratégicas de mercadería, aprovecha descuentos por volumen con proveedores clave o cubre necesidades de flujo de caja para que tu actividad comercial nunca se detenga.",
      image:
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
      tag: "Comercio y Operación",
    },
    {
      icon: TrendingUp,
      title: "Expansión empresarial",
      subtitle: "Crecimiento estructurado para tu negocio",
      description:
        "Abre nuevas sedes o puntos de venta, renueva maquinaria o amplía las instalaciones comerciales de tu empresa utilizando el valor patrimonial de tu bien raíz.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      tag: "Infraestructura y Escala",
    },
    {
      icon: Gem,
      title: "Inversiones personales y empresariales",
      subtitle: "Respaldo sólido para decisiones patrimoniales",
      description:
        "Aprovecha oportunidades de inversión de alto impacto, reestructura compromisos financieros o impulsa proyectos estratégicos con un financiamiento ordenado y formal.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      tag: "Oportunidades de Alto Valor",
    },
  ];

  return (
    <section
      id="creditos-hipotecarios"
      className="py-20 lg:py-28 bg-white border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <SectionHeading
          kicker="Soluciones de Financiamiento"
          title="FINANCIAMIENTO PARA TUS PROYECTOS."
          description="En BREICORP CAPITAL gestionamos operaciones de financiamiento con garantía hipotecaria, conectando a solicitantes con capacidad demostrable con inversionistas privados, y coordinando de manera integral los procesos de evaluación técnica, formalización notarial y administración de la operación."
          align="center"
          className="mb-16"
        />

        {/* Tarjetas de las 3 Aplicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.title}
                className="group flex flex-col rounded-2xl bg-white border border-neutral-200/90 overflow-hidden shadow-subtle hover:shadow-card hover:border-neutral-300 transition-all duration-300"
              >
                {/* Imagen contextual */}
                <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#111111] px-2.5 py-1 rounded-md">
                    {app.tag}
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6801]/10 flex items-center justify-center text-[#FF6801]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                      {app.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#C6A15B] uppercase tracking-wide">
                      {app.subtitle}
                    </p>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] group-hover:text-[#FF6801] transition-colors"
                    >
                      <span>Solicitar evaluación para este destino</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
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

