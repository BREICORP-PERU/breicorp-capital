import { LeadSubmission, InvestorSubmission, SubmissionResponse } from "@/types";

/**
 * SERVICIO DESACOPLADO DE GESTIÓN DE LEADS Y SOLICITUDES
 *
 * Esta capa abstrae el canal de almacenamiento de prospectos. Actualmente opera
 * con almacenamiento local temporal (localStorage / logging estructurado de desarrollo)
 * y cuenta con los conectores preparados para:
 * 1. Webhook a Google Sheets / AppScript.
 * 2. API de CRM BREICORP CAPITAL.
 * 3. Servicio de notificación por correo (Resend / Brevo / SMTP).
 */

const STORAGE_KEY_LEADS = "breicorp_capital_leads_v1";
const STORAGE_KEY_INVESTORS = "breicorp_capital_investors_v1";

export class LeadService {
  /**
   * Procesa la solicitud de evaluación de financiamiento hipotecario
   */
  static async submitFinancingLead(data: LeadSubmission): Promise<SubmissionResponse> {
    // 1. Simulación de latencia de red realista
    await new Promise((resolve) => setTimeout(resolve, 1100));

    // 2. Validación de campos críticos
    if (!data.fullName || data.fullName.trim().length < 3) {
      return {
        success: false,
        message: "Por favor, ingresa tu nombre completo.",
        errors: { fullName: "El nombre es obligatorio y debe tener al menos 3 caracteres." },
      };
    }

    if (!data.phone || !/^[0-9+ ]{9,15}$/.test(data.phone.trim())) {
      return {
        success: false,
        message: "Ingresa un número telefónico o WhatsApp válido.",
        errors: { phone: "Formato de número no válido (9 dígitos habituales en Perú)." },
      };
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      return {
        success: false,
        message: "Ingresa un correo electrónico válido.",
        errors: { email: "Formato de correo no válido." },
      };
    }

    if (!data.requestedAmount || Number(data.requestedAmount) < 20000) {
      return {
        success: false,
        message: "El monto mínimo de financiamiento evaluable es de S/ 20,000.",
        errors: { requestedAmount: "Monto mínimo permitido: S/ 20,000." },
      };
    }

    if (!data.acceptsPrivacy) {
      return {
        success: false,
        message: "Debes aceptar la política de privacidad para procesar tu solicitud.",
        errors: { acceptsPrivacy: "Es requerida la aceptación de la política de privacidad." },
      };
    }

    const leadId = `BC-${Date.now().toString().slice(-6)}`;
    const record: LeadSubmission = {
      ...data,
      createdAt: new Date().toISOString(),
    };

    // Guardado en almacenamiento local para no perder el lead durante la fase previa de backend
    if (typeof window !== "undefined") {
      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_LEADS) || "[]");
        existing.push({ id: leadId, ...record });
        localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(existing));
      } catch (err) {
        console.warn("[LeadService] Error guardando en localStorage:", err);
      }
    }

    // Registro estructurado en consola para trazabilidad
    console.info(`[LeadService] Solicitud registrada con ID ${leadId}:`, record);

    return {
      success: true,
      message: "Tu solicitud ha sido registrada exitosamente. Un asesor comercial revisará los antecedentes preliminares y se comunicará contigo.",
      leadId,
    };
  }

  /**
   * Procesa la solicitud de información de inversionistas
   */
  static async submitInvestorInquiry(data: InvestorSubmission): Promise<SubmissionResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!data.fullName || data.fullName.trim().length < 3) {
      return {
        success: false,
        message: "Por favor, ingresa tu nombre completo.",
        errors: { fullName: "Nombre requerido." },
      };
    }

    if (!data.phone || !/^[0-9+ ]{9,15}$/.test(data.phone.trim())) {
      return {
        success: false,
        message: "Ingresa un teléfono o WhatsApp de contacto válido.",
        errors: { phone: "Teléfono no válido." },
      };
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      return {
        success: false,
        message: "Ingresa un correo electrónico corporativo o personal válido.",
        errors: { email: "Correo no válido." },
      };
    }

    if (!data.acceptsPrivacy) {
      return {
        success: false,
        message: "Debes aceptar la política de privacidad para contactarte.",
        errors: { acceptsPrivacy: "Es requerida la aceptación." },
      };
    }

    const inquiryId = `INV-${Date.now().toString().slice(-6)}`;
    const record: InvestorSubmission = {
      ...data,
      createdAt: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_INVESTORS) || "[]");
        existing.push({ id: inquiryId, ...record });
        localStorage.setItem(STORAGE_KEY_INVESTORS, JSON.stringify(existing));
      } catch (err) {
        console.warn("[LeadService] Error guardando inversionista en localStorage:", err);
      }
    }

    console.info(`[LeadService] Solicitud de inversionista registrada [${inquiryId}]:`, record);

    return {
      success: true,
      message: "Gracias por tu interés. Un directivo de BREICORP CAPITAL se pondrá en contacto para presentarte el modelo de participación privada.",
      leadId: inquiryId,
    };
  }
}

