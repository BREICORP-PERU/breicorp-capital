"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { LeadService } from "@/services/leadService";
import { InvestorSubmission } from "@/types";
import { siteConfig } from "@/config/siteConfig";

export default function InvestorForm() {
  const [formData, setFormData] = useState<InvestorSubmission>({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    city: "Tingo María",
    investmentRange: "S/ 50,000 a S/ 100,000",
    comments: "",
    acceptsPrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errs.fullName = "Ingresa tus nombres y apellidos.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "El número telefónico o WhatsApp es obligatorio.";
    } else if (!/^[0-9+ ]{9,15}$/.test(formData.phone.trim())) {
      errs.phone = "Ingresa un número telefónico válido.";
    }

    if (!formData.email.trim()) {
      errs.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Ingresa un correo electrónico válido.";
    }

    if (!formData.city.trim()) {
      errs.city = "Selecciona tu ciudad.";
    }

    if (!formData.acceptsPrivacy) {
      errs.acceptsPrivacy = "Debes aceptar la política de privacidad.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const u = { ...prev };
        delete u[name];
        return u;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsLoading(true);
    try {
      const res = await LeadService.submitInvestorInquiry(formData);
      if (res.success) {
        setIsSuccess(true);
        setInquiryId(res.leadId || null);
      } else {
        setServerError(res.message || "Error al registrar la solicitud.");
        if (res.errors) setErrors(res.errors);
      }
    } catch {
      setServerError("Ocurrió un error inesperado. Por favor contáctanos por WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 text-center space-y-6 shadow-card border border-neutral-800 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#C6A15B]/20 text-[#C6A15B] mx-auto flex items-center justify-center">
          <CheckCircle className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C6A15B] bg-[#C6A15B]/10 px-3 py-1 rounded-full font-bold">
            Registro ID: {inquiryId}
          </span>
          <h3 className="text-2xl font-bold tracking-tight">
            GRACIAS POR TU INTERÉS EN NUESTRA RED
          </h3>
          <p className="text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
            Hemos recibido tus datos con estricta reserva. Un directivo de <strong className="text-white">BREICORP CAPITAL</strong> se pondrá en contacto para presentarte las alternativas de operaciones estructuradas disponibles.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline-light"
            size="md"
          >
            Registrar otra consulta
          </Button>

          <Button
            href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
              siteConfig.contact.whatsappInvestorsMessage
            )}`}
            isExternal
            variant="gold"
            size="md"
          >
            Conversar de inmediato por WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white border border-neutral-200 shadow-card p-6 sm:p-10">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {serverError && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{serverError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2 space-y-1.5">
            <label
              htmlFor="inv_fullName"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Nombres y Apellidos *
            </label>
            <input
              type="text"
              id="inv_fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Ingresa tu nombre completo"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111111] bg-white transition-all focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-red-400 focus:ring-red-200"
                  : "border-neutral-300 focus:border-[#C6A15B] focus:ring-amber-50"
              }`}
            />
            {errors.fullName && (
              <p className="text-[11px] text-red-600 font-medium">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="inv_companyName"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Empresa / Razón Social (Opcional)
            </label>
            <input
              type="text"
              id="inv_companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Ej. Inversiones del Huallaga S.A.C."
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#C6A15B] focus:ring-2 focus:ring-amber-50"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="inv_phone"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Teléfono / WhatsApp *
            </label>
            <input
              type="tel"
              id="inv_phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ej. 962888200"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111111] bg-white transition-all focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-400 focus:ring-red-200"
                  : "border-neutral-300 focus:border-[#C6A15B] focus:ring-amber-50"
              }`}
            />
            {errors.phone && (
              <p className="text-[11px] text-red-600 font-medium">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="inv_email"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Correo Electrónico *
            </label>
            <input
              type="email"
              id="inv_email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111111] bg-white transition-all focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 focus:ring-red-200"
                  : "border-neutral-300 focus:border-[#C6A15B] focus:ring-amber-50"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="inv_city"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Ciudad *
            </label>
            <select
              id="inv_city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#C6A15B] focus:ring-2 focus:ring-amber-50"
            >
              <option value="Tingo María">Tingo María</option>
              <option value="Huánuco">Huánuco</option>
              <option value="Lima">Lima</option>
              <option value="Pucallpa">Pucallpa</option>
              <option value="Otra ciudad">Otra ciudad</option>
            </select>
          </div>

          <div className="sm:col-span-2 space-y-1.5">
            <label
              htmlFor="inv_investmentRange"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Rango Estimado de Liquidez Disponible *
            </label>
            <select
              id="inv_investmentRange"
              name="investmentRange"
              value={formData.investmentRange}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#C6A15B] focus:ring-2 focus:ring-amber-50"
            >
              <option value="S/ 30,000 a S/ 50,000">S/ 30,000 a S/ 50,000</option>
              <option value="S/ 50,000 a S/ 100,000">S/ 50,000 a S/ 100,000</option>
              <option value="S/ 100,000 a S/ 250,000">S/ 100,000 a S/ 250,000</option>
              <option value="S/ 250,000 a S/ 500,000">S/ 250,000 a S/ 500,000</option>
              <option value="Más de S/ 500,000">Más de S/ 500,000</option>
            </select>
            <span className="text-[10px] text-neutral-500 block">
              Dato meramente informativo para seleccionar expedientes afines a tu capacidad de colocación.
            </span>
          </div>

          <div className="sm:col-span-2 space-y-1.5">
            <label
              htmlFor="inv_comments"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
            >
              Preferencias o Comentarios Adicionales (Opcional)
            </label>
            <textarea
              id="inv_comments"
              name="comments"
              rows={3}
              value={formData.comments}
              onChange={handleChange}
              placeholder="Indica si tienes preferencia por tipo de inmueble, plazos deseados u horarios para contactarte..."
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#C6A15B] focus:ring-2 focus:ring-amber-50 resize-none"
            />
          </div>
        </div>

        <div className="space-y-1 pt-2">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              name="acceptsPrivacy"
              checked={formData.acceptsPrivacy}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#C6A15B] focus:ring-[#C6A15B]"
            />
            <span className="text-xs text-neutral-600 leading-normal">
              He leído y acepto la{" "}
              <Link
                href="/politica-de-privacidad"
                target="_blank"
                className="text-[#C6A15B] font-semibold hover:underline"
              >
                Política de Privacidad
              </Link>{" "}
              y autorizo el tratamiento confidencial de mis datos para la presentación de operaciones de financiamiento conforme a la Ley N° 29733.
            </span>
          </label>
          {errors.acceptsPrivacy && (
            <p className="text-[11px] text-red-600 font-medium pl-7">
              {errors.acceptsPrivacy}
            </p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="gold"
            size="lg"
            fullWidth
            isLoading={isLoading}
            icon={<Send className="w-5 h-5" />}
          >
            SOLICITAR PRESENTACIÓN INSTITUCIONAL
          </Button>
        </div>
      </form>
    </div>
  );
}

