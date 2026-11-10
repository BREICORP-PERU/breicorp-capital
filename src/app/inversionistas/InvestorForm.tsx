"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { investorWhatsAppMessage, whatsappHref } from "@/config/siteConfig";

interface InvestorFormData {
  fullName: string;
  phone: string;
  email: string;
  investmentAmount: string;
}

const initialForm: InvestorFormData = {
  fullName: "",
  phone: "",
  email: "",
  investmentAmount: "",
};

export default function InvestorForm() {
  const [formData, setFormData] = useState<InvestorFormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consent, setConsent] = useState(false);
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setPreparedUrl(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    const amount = Number(formData.investmentAmount);
    const phone = formData.phone.trim();
    const email = formData.email.trim();

    if (formData.fullName.trim().length < 3 || formData.fullName.trim().length > 120) {
      nextErrors.fullName = "Ingresa tu nombre completo.";
    }
    if (!/^\+?[0-9 ]{9,16}$/.test(phone) || phone.replace(/\D/g, "").length < 9) {
      nextErrors.phone = "Ingresa un celular válido.";
    }
    if (email && (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      nextErrors.email = "Ingresa un correo válido o deja el campo vacío.";
    }
    if (!Number.isSafeInteger(amount) || amount <= 0) {
      nextErrors.investmentAmount = "Ingresa un monto aproximado mayor a cero.";
    }
    if (!consent) nextErrors.consent = "Debes autorizar el tratamiento de datos y el contacto.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const url = whatsappHref(investorWhatsAppMessage({
      ...formData,
      investmentAmount: amount,
    }));
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#C6A15B] focus:ring-2 focus:ring-amber-50";

  return (
    <div className="rounded-3xl bg-white border border-neutral-200 shadow-card p-6 sm:p-10">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-[#111111]">Prepara tu consulta</h3>
          <p className="text-sm text-neutral-600">Los campos marcados con * son obligatorios.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2 space-y-1.5">
            <label htmlFor="inv_fullName" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Nombres y apellidos *</label>
            <input id="inv_fullName" name="fullName" type="text" autoComplete="name" maxLength={120} value={formData.fullName} onChange={handleChange} aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "inv_fullName_error" : undefined} className={inputClass} />
            {errors.fullName && <p id="inv_fullName_error" className="text-xs text-red-600">{errors.fullName}</p>}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="inv_phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Celular / WhatsApp *</label>
            <input id="inv_phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={16} value={formData.phone} onChange={handleChange} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "inv_phone_error" : undefined} className={inputClass} />
            {errors.phone && <p id="inv_phone_error" className="text-xs text-red-600">{errors.phone}</p>}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="inv_email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Correo electrónico (opcional)</label>
            <input id="inv_email" name="email" type="email" autoComplete="email" maxLength={254} value={formData.email} onChange={handleChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? "inv_email_error" : undefined} className={inputClass} />
            {errors.email && <p id="inv_email_error" className="text-xs text-red-600">{errors.email}</p>}
          </div>
          <div className="sm:col-span-2 space-y-1.5">
            <label htmlFor="inv_investmentAmount" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">Monto aproximado que deseas invertir (S/) *</label>
            <input id="inv_investmentAmount" name="investmentAmount" type="number" min="1" step="1000" inputMode="numeric" value={formData.investmentAmount} onChange={handleChange} aria-invalid={!!errors.investmentAmount} aria-describedby={errors.investmentAmount ? "inv_amount_error" : undefined} className={inputClass} />
            {errors.investmentAmount && <p id="inv_amount_error" className="text-xs text-red-600">{errors.investmentAmount}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="inv_consent" className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed cursor-pointer">
            <input
              id="inv_consent"
              type="checkbox"
              checked={consent}
              onChange={(event) => {
                setConsent(event.target.checked);
                setErrors((current) => ({ ...current, consent: "" }));
                setPreparedUrl(null);
              }}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "inv_consent_error" : undefined}
              className="mt-1 h-5 w-5 shrink-0 accent-[#C6A15B]"
            />
            <span>Autorizo el tratamiento de mis datos personales para preparar esta consulta y, si envío el mensaje, para que BREICORP CAPITAL me contacte sobre oportunidades de inversión. *</span>
          </label>
          {errors.consent && <p id="inv_consent_error" className="text-xs text-red-600">{errors.consent}</p>}
        </div>
        <p className="text-xs text-neutral-600">
          Al continuar, el texto se incluirá en un enlace a WhatsApp y podrá llegar a ese servicio aunque no pulses Enviar. Podrás revisarlo antes de enviarlo a BREICORP CAPITAL. Consulta nuestra{" "}
          <Link href="/politica-de-privacidad" target="_blank" className="text-[#A77B30] font-semibold underline">Política de Privacidad</Link>.
        </p>
        <Button type="submit" variant="gold" size="lg" fullWidth icon={<WhatsAppIcon className="w-6 h-6 rounded-full bg-white p-0.5 text-[#25D366]" />} iconPosition="left" className="min-h-12">
          QUIERO RECIBIR INFORMACIÓN
        </Button>
        {preparedUrl && (
          <div role="status" className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-700">
            WhatsApp no envía el mensaje automáticamente. Revísalo y pulsa Enviar allí. Si no se abrió,{" "}
            <a href={preparedUrl} target="_blank" rel="noopener noreferrer" className="text-[#A77B30] font-semibold underline">abre tu consulta aquí</a>.
          </div>
        )}
      </form>
    </div>
  );
}
