"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  TrendingUp,
  FileCheck2,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/config/siteConfig";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const whatsappCreditUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  useEffect(() => {
    // Respetar preferencias de accesibilidad
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrada escalonada cinematográfica del contenido textual
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll(".hero-anim-item");
        gsap.fromTo(
          elements,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
          }
        );
      }

      // Revelación suave y sutil de la composición visual derecha
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.96, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.1,
            delay: 0.25,
            ease: "power2.out",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#0A0A0C] text-white scroll-mt-20"
      aria-label="Financiamiento con garantía hipotecaria"
    >
      {/* Luces y ambientación cinematográfica de fondo */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#EE3C06]/12 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-[#C6A15B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))] pointer-events-none" />

      {/* Sutil cuadrícula perimetral estilo fintech */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Contenido textual principal (7 columnas) */}
          <div ref={contentRef} className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tag / Kicker interactivo con luz en vivo */}
            <div className="hero-anim-item inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-dark border border-white/10 text-xs font-semibold tracking-wide text-neutral-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE3C06] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EE3C06]" />
              </span>
              <span className="text-neutral-300">
                Financiamiento formal con garantía hipotecaria en Perú
              </span>
              <span className="text-[#C6A15B] font-bold">· SUNARP</span>
            </div>

            {/* Titular Principal Cinematográfico */}
            <h1 className="hero-anim-item text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] uppercase font-sans">
              FINANCIAMIENTO CON{" "}
              <span className="text-gradient-orange inline-block">
                RESPALDO INMOBILIARIO
              </span>{" "}
              PARA TUS PROYECTOS.
            </h1>

            {/* Texto persuasivo y directo */}
            <p className="hero-anim-item text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl font-normal">
              Accede a liquidez formal para capital de trabajo, consolidación o expansión, respaldada por bienes inscritos en SUNARP y formalizada por Escritura Pública Notarial.
            </p>

            {/* Dos botones principales de conversión con feedback háptico */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href={whatsappCreditUrl}
                isExternal
                variant="primary"
                size="lg"
                icon={<WhatsAppIcon className="w-5 h-5 text-white" />}
                iconPosition="left"
                className="shadow-orange-glow font-bold tracking-wide active:scale-[0.98] transition-transform"
              >
                SOLICITAR EVALUACIÓN
              </Button>

              <Button
                href="/inversionistas"
                variant="outline-light"
                size="lg"
                icon={<TrendingUp className="w-4 h-4 text-[#C6A15B]" />}
                iconPosition="right"
                className="font-semibold border-white/20 hover:border-white hover:bg-white/5 active:scale-[0.98] transition-all"
              >
                QUIERO INVERTIR
              </Button>
            </div>

            {/* 3 Indicadores clave sintetizados con acabado de cristal */}
            <div className="hero-anim-item pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-dark-card border border-white/10 shadow-sm hover:border-white/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#EE3C06]/15 flex items-center justify-center text-[#EE3C06] shrink-0 font-bold text-xs font-mono">
                  S/
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Montos
                  </div>
                  <div className="text-sm font-bold text-white">
                    Desde S/ 20,000
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-dark-card border border-white/10 shadow-sm hover:border-white/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#C6A15B]/15 flex items-center justify-center text-[#C6A15B] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Garantía
                  </div>
                  <div className="text-sm font-bold text-white">
                    Título en SUNARP
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-dark-card border border-white/10 shadow-sm hover:border-white/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#EE3C06]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Formalidad
                  </div>
                  <div className="text-sm font-bold text-white">
                    Notarial colegiada
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Composición visual derecha (5 columnas): Terminal Inmobiliario Financiero */}
          <div ref={visualRef} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Tarjeta Visual Principal con Fotografía Real */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 aspect-[4/4.8] bg-neutral-900 group">
                <Image
                  src="/images/hero-propiedad.jpg"
                  alt="Inmueble con garantía hipotecaria formal en Perú"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                  className="object-cover object-center filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradiente cinematográfico sobre la fotografía */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent" />

                {/* Insignia superior flotante de SUNARP */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-dark border border-white/15 text-xs text-white">
                    <Building2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="font-semibold text-[11px] tracking-wide uppercase">
                      Inmuebles en SUNARP
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-neutral-300 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
                    Tingo María y Huánuco
                  </span>
                </div>

                {/* Dashboard flotante inferior con métricas operativas */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl glass-dark border border-white/15 text-white space-y-3.5 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-[#EE3C06]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Viabilidad de Operación
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C6A15B] uppercase bg-[#C6A15B]/15 px-2 py-0.5 rounded-full border border-[#C6A15B]/30">
                      <Sparkles className="w-3 h-3" /> Verificado
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-neutral-400 block font-medium">
                        Destino de Capital
                      </span>
                      <strong className="text-white text-xs font-semibold">
                        MYPE y Proyectos
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-neutral-400 block font-medium">
                        Formalización
                      </span>
                      <strong className="text-white text-xs font-semibold">
                        Escritura Notarial
                      </strong>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-neutral-300">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#EE3C06]" />
                      Evaluación inicial: 48-72h
                    </span>
                    <a
                      href={whatsappCreditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#EE3C06] font-bold hover:underline inline-flex items-center gap-0.5"
                    >
                      Consultar <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Insignia flotante perimetral exterior */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-[#16161A] p-4 rounded-2xl shadow-2xl border border-white/15 items-center gap-3.5 animate-float-slow">
                <div className="w-11 h-11 rounded-xl bg-[#EE3C06] flex items-center justify-center text-white shadow-orange-glow">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Seguridad Jurídica
                  </div>
                  <div className="text-xs font-extrabold text-white">
                    Escritura Pública Notarial
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
