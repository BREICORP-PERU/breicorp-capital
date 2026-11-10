import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import RequirementsSection from "@/components/sections/RequirementsSection";
import SecurityGovernanceSection from "@/components/sections/SecurityGovernanceSection";
import InvestorsSection from "@/components/sections/InvestorsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Principal */}
      <HeroSection />

      {/* 2. Presentación del Servicio (3 aplicaciones) */}
      <ServicesSection />

      {/* 3. Características del Financiamiento */}
      <FeaturesSection />

      {/* 4. ¿Cómo Funciona? (6 etapas) */}
      <HowItWorksSection />

      {/* 5. Requisitos e información INFOCORP */}
      <RequirementsSection />

      {/* 6. Respaldo y Gestión (4 pilares) */}
      <SecurityGovernanceSection />

      {/* 7. Sección para Inversionistas */}
      <InvestorsSection />

      {/* 8. Preguntas Frecuentes */}
      <FaqSection />

      {/* 9. Contacto y Formulario de Solicitud */}
      <ContactFormSection />
    </>
  );
}
