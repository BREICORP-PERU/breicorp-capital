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
    "Soluciones de financiamiento y oportunidades de inversión con respaldo inmobiliario en Perú, sujetas a evaluación.",
  domain: "https://breicorp-capital.vercel.app",
  ogImage: "https://breicorp-capital.vercel.app/og-breicorp-capital.png",

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
    termText: "Sujeto a evaluación y formalización",
    guaranteeText: "Inmueble inscrito en SUNARP a nombre del solicitante",
    targetAudience: "Empresarios, comerciantes y trabajadores independientes",
  },

  // Datos de contacto oficiales y referenciales de la empresa
  contact: {
    verificationNotice: "Dominio, correos, horarios y cobertura referenciales sujetos a confirmación.",
    // Número oficial de WhatsApp de BREICORP CAPITAL
    whatsappRaw: "51948261382",
    whatsappDisplay: "+51 948 261 382",
    whatsappDefaultMessage:
      "Hola BREICORP CAPITAL, deseo información sobre un crédito o financiamiento. Por favor, indíquenme los siguientes pasos.",
    whatsappInvestorsMessage:
      "Hola BREICORP CAPITAL, deseo información sobre las modalidades y condiciones de participación para inversionistas.",

    // Correo corporativo
    email: "contacto@breicorpcapital.pe",
    inversionistasEmail: "inversiones@breicorpcapital.pe",

    // Horarios de atención referenciales
    schedule: "Lunes a Viernes: 8:30 a.m. – 6:30 p.m. | Sábados: 9:00 a.m. – 1:00 p.m.",
  },

  // Enlaces de navegación comercial
  navLinks: [
    { name: "Inicio", href: "/#inicio" },
    { name: "Soluciones", href: "/#soluciones" },
    { name: "¿Cómo funciona?", href: "/#como-funciona" },
    { name: "Quiénes somos", href: "/#quienes-somos" },
    { name: "Inversionistas", href: "/inversionistas" },
    { name: "Contacto", href: "/#contacto" },
  ],

  // Descargo legal corporativo
  legalDisclaimer:
    "BREICORP CAPITAL es una línea comercial de BREICORP E.I.R.L. orientada a la gestión e intermediación de posibles operaciones de financiamiento. Cada operación está sujeta a evaluación, disponibilidad de capital y formalización contractual. Este sitio no ofrece depósitos ni presenta a BREICORP CAPITAL como entidad bancaria.",
};

export type SiteConfig = typeof siteConfig;

export function whatsappHref(message?: string): string {
  if (!message || message.trim() === "") {
    return `https://wa.me/${siteConfig.contact.whatsappRaw}`;
  }
  return `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(message.trim())}`;
}

export function creditWhatsAppMessage(data: {
  fullName: string;
  phone: string;
  city: string;
  requestedAmount: number;
  financingType: string;
  financingPurpose: string;
}): string {
  return `Hola, deseo recibir información sobre un crédito BREICORP CAPITAL.

Nombre: ${data.fullName.trim()}
Celular: ${data.phone.trim()}
Ciudad: ${data.city}
Monto solicitado: S/ ${data.requestedAmount.toLocaleString("es-PE")}
Tipo de financiamiento: ${data.financingType}
Finalidad: ${data.financingPurpose}

Quedo atento a la información y evaluación correspondiente.`;
}

export function investorWhatsAppMessage(data: {
  fullName: string;
  phone: string;
  email: string;
  investmentAmount: number;
}): string {
  return `Hola, estoy interesado en conocer las oportunidades de inversión de BREICORP CAPITAL.

Nombre: ${data.fullName.trim()}
Celular: ${data.phone.trim()}
Correo: ${data.email.trim() || "No indicado"}
Monto aproximado de inversión: S/ ${data.investmentAmount.toLocaleString("es-PE")}

Deseo recibir información sobre las modalidades y condiciones de participación.`;
}

