import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* SECCIÓN 1 — HERO */}
      <HeroSection />

      {/* SECCIÓN 2 — SOLUCIONES DE FINANCIAMIENTO */}
      <ServicesSection />

      {/* SECCIÓN 3 — ¿CÓMO FUNCIONA? */}
      <HowItWorksSection />

      {/* SECCIÓN 4 — ¿POR QUÉ BREICORP CAPITAL? */}
      <WhyChooseUsSection />

      {/* PREGUNTAS FRECUENTES (COMPACTAS) */}
      <FaqSection />

      {/* SECCIÓN 5 — CTA FINAL */}
      <FinalCtaSection />
    </>
  );
}
