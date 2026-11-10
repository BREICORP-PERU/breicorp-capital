"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building2, MessageCircle, PhoneCall, Send, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { creditWhatsAppMessage, siteConfig, whatsappHref } from "@/config/siteConfig";

interface CreditForm {
  fullName: string;
  phone: string;
  city: string;
  requestedAmount: string;
  financingType: string;
  financingPurpose: string;
}

const initialForm: CreditForm = {
  fullName: "",
  phone: "",
  city: "",
  requestedAmount: "",
  financingType: "",
  financingPurpose: "",
};

export default function ContactFormSection() {
  const [formData, setFormData] = useState<CreditForm>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setPreparedUrl(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    const amount = Number(formData.requestedAmount);
    const phone = formData.phone.trim();

    if (formData.fullName.trim().length < 3 || formData.fullName.trim().length > 120) {
      nextErrors.fullName = "Ingresa tu nombre completo.";
    }
    if (!/^\+?[0-9 ]{9,16}$/.test(phone) || phone.replace(/\D/g, "").length < 9) {
      nextErrors.phone = "Ingresa un celular válido.";
    }
    if (!formData.city) nextErrors.city = "Selecciona tu ciudad.";
    if (!Number.isSafeInteger(amount) || amount < siteConfig.financing.minAmount) {
      nextErrors.requestedAmount = `El monto mínimo referencial es ${siteConfig.financing.minAmountFormatted}.`;
    }
    if (!formData.financingType) nextErrors.financingType = "Selecciona el tipo de financiamiento.";
    if (!formData.financingPurpose) nextErrors.financingPurpose = "Selecciona la finalidad.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const url = whatsappHref(creditWhatsAppMessage({
      ...formData,
      requestedAmount: amount,
    }));
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#FF6801] focus:ring-2 focus:ring-orange-100";

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              kicker="Atención Comercial"
              title="CUÉNTANOS QUÉ FINANCIAMIENTO NECESITAS."
              description="Completa los datos básicos y abre WhatsApp con tu consulta preparada. Podrás revisarla antes de enviarla a un asesor."
              align="left"
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <MessageCircle className="w-5 h-5 text-[#FF6801] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#111111] uppercase tracking-wider">Atención por WhatsApp</div>
                  <p className="text-xs text-neutral-600 leading-relaxed mt-1">Un asesor podrá atenderte cuando envíes el mensaje desde WhatsApp.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <Building2 className="w-5 h-5 text-[#C6A15B] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#111111] uppercase tracking-wider">Cobertura referencial</div>
                  <p className="text-xs text-neutral-600 leading-relaxed mt-1">Tingo María y Huánuco. La disponibilidad se confirma en cada consulta.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <ShieldCheck className="w-5 h-5 text-[#111111] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#111111] uppercase tracking-wider">Tú decides qué enviar</div>
                  <p className="text-xs text-neutral-600 leading-relaxed mt-1">El sitio no almacena el formulario. No compartas DNI ni documentos en esta etapa.</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF5EE] border border-[#FF6801]/30 space-y-2">
              <div className="text-xs font-bold text-[#FF6801] uppercase tracking-wider flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4" /> ¿Prefieres escribir directamente?
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">También puedes abrir un chat sin completar este formulario.</p>
              <a
                href={whatsappHref(siteConfig.contact.whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-11 text-xs font-bold text-[#FF6801] hover:text-[#E55D00] underline"
              >
                Abrir WhatsApp ({siteConfig.contact.whatsappDisplay})
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-neutral-200/90 shadow-card p-6 sm:p-10">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#111111]">Prepara tu consulta</h3>
                  <p className="text-sm text-neutral-600">Los campos marcados con * son obligatorios.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2 space-y-1.5">
                    <label htmlFor="credit_fullName" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Nombres y apellidos *</label>
                    <input id="credit_fullName" name="fullName" type="text" autoComplete="name" maxLength={120} value={formData.fullName} onChange={handleChange} aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "credit_fullName_error" : undefined} className={inputClass} />
                    {errors.fullName && <p id="credit_fullName_error" className="text-xs text-red-600">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="credit_phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Celular / WhatsApp *</label>
                    <input id="credit_phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={16} value={formData.phone} onChange={handleChange} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "credit_phone_error" : undefined} className={inputClass} />
                    {errors.phone && <p id="credit_phone_error" className="text-xs text-red-600">{errors.phone}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="credit_city" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Ciudad *</label>
                    <select id="credit_city" name="city" value={formData.city} onChange={handleChange} aria-invalid={!!errors.city} aria-describedby={errors.city ? "credit_city_error" : undefined} className={inputClass}>
                      <option value="">Selecciona tu ciudad</option>
                      <option value="Tingo María">Tingo María</option>
                      <option value="Huánuco">Huánuco</option>
                      <option value="Aucayacu">Aucayacu</option>
                      <option value="Otra localidad">Otra localidad</option>
                    </select>
                    {errors.city && <p id="credit_city_error" className="text-xs text-red-600">{errors.city}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="credit_amount" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Monto aproximado (S/) *</label>
                    <input id="credit_amount" name="requestedAmount" type="number" min={siteConfig.financing.minAmount} step="1000" inputMode="numeric" value={formData.requestedAmount} onChange={handleChange} aria-invalid={!!errors.requestedAmount} aria-describedby={errors.requestedAmount ? "credit_amount_error" : undefined} className={inputClass} />
                    {errors.requestedAmount && <p id="credit_amount_error" className="text-xs text-red-600">{errors.requestedAmount}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="credit_type" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Tipo de financiamiento *</label>
                    <select id="credit_type" name="financingType" value={formData.financingType} onChange={handleChange} aria-invalid={!!errors.financingType} aria-describedby={errors.financingType ? "credit_type_error" : undefined} className={inputClass}>
                      <option value="">Selecciona una opción</option>
                      <option value="Crédito para MYPE">Crédito para MYPE</option>
                      <option value="Préstamo con garantía hipotecaria">Préstamo con garantía hipotecaria</option>
                      <option value="Financiamiento empresarial">Financiamiento empresarial</option>
                    </select>
                    {errors.financingType && <p id="credit_type_error" className="text-xs text-red-600">{errors.financingType}</p>}
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <label htmlFor="credit_purpose" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Finalidad *</label>
                    <select id="credit_purpose" name="financingPurpose" value={formData.financingPurpose} onChange={handleChange} aria-invalid={!!errors.financingPurpose} aria-describedby={errors.financingPurpose ? "credit_purpose_error" : undefined} className={inputClass}>
                      <option value="">Selecciona una opción</option>
                      <option value="Capital de trabajo">Capital de trabajo</option>
                      <option value="Expansión de negocio">Expansión de negocio</option>
                      <option value="Compra de maquinaria o activos">Compra de maquinaria o activos</option>
                      <option value="Consolidación de deudas">Consolidación de deudas</option>
                      <option value="Otra finalidad">Otra finalidad</option>
                    </select>
                    {errors.financingPurpose && <p id="credit_purpose_error" className="text-xs text-red-600">{errors.financingPurpose}</p>}
                  </div>
                </div>

                <p className="text-xs text-neutral-600">
                  Al continuar, el texto se incluirá en un enlace a WhatsApp y podrá llegar a ese servicio aunque no pulses Enviar. Podrás revisar el mensaje antes de enviarlo a BREICORP CAPITAL. Consulta nuestra{" "}
                  <Link href="/politica-de-privacidad" target="_blank" className="text-[#FF6801] font-semibold underline">Política de Privacidad</Link>.
                </p>
                <Button type="submit" variant="primary" size="lg" fullWidth icon={<Send className="w-5 h-5" />} className="shadow-orange-glow">
                  ABRIR WHATSAPP CON MI SOLICITUD
                </Button>
                {preparedUrl && (
                  <div role="status" className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-700">
                    WhatsApp no envía el mensaje automáticamente. Revísalo y pulsa Enviar allí. Si no se abrió,{" "}
                    <a href={preparedUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF6801] font-semibold underline">abre tu consulta aquí</a>.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
