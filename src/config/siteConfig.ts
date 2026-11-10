/**
 * Configuración centralizada de BREICORP CAPITAL
 * Toda la información de contacto, enlaces y parámetros institucionales
 * se gestionan en este archivo para evitar duplicidad y facilitar actualizaciones.
 */

export const siteConfig = {
  name: "BREICORP CAPITAL",
  legalEntity: "BREICORP E.I.R.L.",
  tagline: "El capital que necesitas, con el respaldo de tu propiedad.",
  description:
    "Intermediación, gestión y administración de operaciones de financiamiento con garantía hipotecaria en Tingo María y Huánuco, Perú.",
  domain: "https://breicorpcapital.pe", // Dominio referencial para metadatos y SEO

  // Ubicación inicial
  locations: [
    { city: "Tingo María", region: "Huánuco", label: "Tingo María, Huánuco" },
    { city: "Huánuco", region: "Huánuco", label: "Huánuco, Perú" },
  ],

  // Parámetros de financiamiento
  financing: {
    minAmount: 20000,
    minAmountFormatted: "S/ 20,000",
    maxAmountText: "Determinado mediante evaluación",
    termText: "12 meses (sujeto a evaluación)",
    guaranteeText: "Inmueble inscrito en SUNARP a nombre del solicitante",
    targetAudience: "Empresarios, comerciantes y trabajadores independientes",
  },

  // Canales de contacto oficiales (Centralizados para fácil configuración)
  contact: {
    // Número de WhatsApp configurado (formato internacional sin '+' para enlaces wa.me)
    whatsappRaw: "51962888200", // Número oficial o de atención al cliente
    whatsappDisplay: "+51 962 888 200",
    whatsappDefaultMessage:
      "Hola BREICORP CAPITAL, deseo solicitar una evaluación para un financiamiento con garantía hipotecaria.",
    whatsappInvestorsMessage:
      "Hola BREICORP CAPITAL, estoy interesado en conocer las oportunidades de inversión con respaldo inmobiliario.",

    // Correo corporativo
    email: "contacto@breicorpcapital.pe",
    inversionistasEmail: "inversiones@breicorpcapital.pe",

    // Horarios de atención referenciales
    schedule: "Lunes a Viernes: 8:30 a.m. – 6:30 p.m. | Sábados: 9:00 a.m. – 1:00 p.m.",
  },

  // Enlaces de navegación
  navLinks: [
    { name: "Inicio", href: "/#inicio" },
    { name: "Créditos hipotecarios", href: "/#creditos-hipotecarios" },
    { name: "Inversionistas", href: "/inversionistas" },
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Preguntas", href: "/#preguntas-frecuentes" },
    { name: "Contacto", href: "/#contacto" },
  ],

  // Descargo legal corporativo
  legalDisclaimer:
    "BREICORP CAPITAL es una línea comercial de BREICORP E.I.R.L. orientada a la gestión e intermediación de operaciones de financiamiento. Las operaciones están sujetas a evaluación, disponibilidad de capital, formalización contractual y cumplimiento de las disposiciones legales aplicables. No es una entidad bancaria ni financiera supervisada por la SBS con captación de depósitos del público.",
};

export type SiteConfig = typeof siteConfig;

