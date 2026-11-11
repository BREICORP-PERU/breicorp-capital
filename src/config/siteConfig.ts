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
    "Intermediación y gestión de posibles operaciones de financiamiento con garantía hipotecaria en Perú, sujetas a evaluación.",
  domain: "https://breicorpcapital.pe", // Pendiente de confirmación antes de publicación definitiva

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

  // Datos de contacto pendientes de confirmación empresarial; se mantienen visibles por indicación del propietario.
  contact: {
    verificationNotice: "Dominio, WhatsApp, correos, horarios y cobertura pendientes de confirmación.",
    // Número de WhatsApp configurado (formato internacional sin '+' para enlaces wa.me)
    whatsappRaw: "51962888200", // Pendiente de confirmación
    whatsappDisplay: "+51 962 888 200",
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
    { name: "¿Por qué nosotros?", href: "/#por-que-nosotros" },
    { name: "Inversionistas", href: "/inversionistas" },
    { name: "Contacto", href: "/#contacto" },
  ],

  // Descargo legal corporativo
  legalDisclaimer:
    "BREICORP CAPITAL es una línea comercial de BREICORP E.I.R.L. orientada a la gestión e intermediación de posibles operaciones de financiamiento. Cada operación está sujeta a evaluación, disponibilidad de capital y formalización contractual. Este sitio no ofrece depósitos ni presenta a BREICORP CAPITAL como entidad bancaria.",
};

export type SiteConfig = typeof siteConfig;

export function whatsappHref(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
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

