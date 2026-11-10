"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  Lock,
  PhoneCall,
  Clock,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { LeadService } from "@/services/leadService";
import { LeadSubmission } from "@/types";
import { siteConfig } from "@/config/siteConfig";

export default function ContactFormSection() {
  const [formData, setFormData] = useState<LeadSubmission>({
    fullName: "",
    phone: "",
    email: "",
    city: "Tingo María",
    requestedAmount: 20000,
    financingPurpose: "Capital de trabajo",
    propertyType: "Casa o vivienda",
    isOwnerRegistered: "si",
    comments: "",
    acceptsPrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = "Ingresa tus nombres y apellidos completos.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El número de WhatsApp o celular es obligatorio.";
    } else if (!/^[0-9+ ]{9,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Ingresa un número telefónico válido (ej. 962888200).";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Ingresa un correo electrónico con formato válido.";
    }

    if (!formData.city) {
      newErrors.city = "Selecciona tu ciudad.";
    }

    if (!formData.requestedAmount || Number(formData.requestedAmount) < 20000) {
      newErrors.requestedAmount =
        "El monto mínimo para evaluar es de S/ 20,000 (Veinte mil soles).";
    }

    if (!formData.isOwnerRegistered) {
      newErrors.isOwnerRegistered = "Por favor indica si el inmueble está a tu nombre.";
    }

    if (!formData.acceptsPrivacy) {
      newErrors.acceptsPrivacy =
        "Debes aceptar la política de tratamiento de datos personales para continuar.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

    // Limpiar error en cambio
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsLoading(true);
    try {
      const response = await LeadService.submitFinancingLead({
        ...formData,
        requestedAmount: Number(formData.requestedAmount),
      });

      if (response.success) {
        setIsSuccess(true);
        setSubmittedLeadId(response.leadId || null);
      } else {
        setServerError(
          response.message || "Ocurrió un error al procesar tu solicitud."
        );
        if (response.errors) {
          setErrors(response.errors);
        }
      }
    } catch {
      setServerError(
        "No se pudo conectar con el servicio en este momento. Por favor inténtalo por WhatsApp."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedLeadId(null);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      city: "Tingo María",
      requestedAmount: 20000,
      financingPurpose: "Capital de trabajo",
      propertyType: "Casa o vivienda",
      isOwnerRegistered: "si",
      comments: "",
      acceptsPrivacy: false,
    });
    setErrors({});
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Información de acompañamiento (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              kicker="Evaluación Personalizada"
              title="CUÉNTANOS QUÉ FINANCIAMIENTO NECESITAS."
              description="Registra los detalles de tu solicitud para que nuestro equipo técnico y comercial realice la precalificación de tu caso sin costo inicial."
              align="left"
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-[#FF6801]/10 flex items-center justify-center text-[#FF6801] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                    Respuesta en 48–72 Horas
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed mt-0.5">
                    Un asesor revisará tus datos preliminares y coordinará la recepción de documentos.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-[#C6A15B]/15 flex items-center justify-center text-[#C6A15B] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                    Cobertura Regional
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed mt-0.5">
                    Operaciones activas en las ciudades de Tingo María y Huánuco, Perú.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                    Confidencialidad Total
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed mt-0.5">
                    Toda la información financiera y patrimonial entregada se encuentra protegida bajo la Ley N° 29733.
                  </div>
                </div>
              </div>
            </div>

            {/* Alternativa directa vía WhatsApp */}
            <div className="p-5 rounded-2xl bg-[#FFF5EE] border border-[#FF6801]/30 space-y-2">
              <div className="text-xs font-bold text-[#FF6801] uppercase tracking-wider flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4" />
                ¿Prefieres conversar directamente?
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Escríbenos directamente a nuestra línea de WhatsApp comercial para recibir asesoría preliminar guiada.
              </p>
              <div className="pt-1">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappDefaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6801] hover:text-[#E55D00] underline"
                >
                  Abrir chat en WhatsApp ({siteConfig.contact.whatsappDisplay})
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario interactivo (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-neutral-200/90 shadow-card p-6 sm:p-10 relative">
              {/* ESTADO DE ÉXITO */}
              {isSuccess ? (
                <div className="text-center py-8 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-subtle">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-[#FF6801] bg-[#FF6801]/10 px-3 py-1 rounded-full font-bold">
                      Solicitud: {submittedLeadId}
                    </span>
                    <h3 className="text-2xl font-black text-[#111111] tracking-tight">
                      ¡SOLICITUD REGISTRADA EXITOSAMENTE!
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Hemos recibido los datos preliminares de tu solicitud. Un asesor comercial de <strong className="text-[#111111]">BREICORP CAPITAL</strong> se comunicará contigo vía telefónica o WhatsApp para coordinar la evaluación documental.
                    </p>
                  </div>

                  {/* Resumen de la solicitud */}
                  <div className="bg-neutral-50 rounded-xl p-5 text-left text-xs space-y-2 border border-neutral-200 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                      <span className="text-neutral-500">Solicitante:</span>
                      <span className="font-semibold text-neutral-800">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                      <span className="text-neutral-500">Monto solicitado:</span>
                      <span className="font-bold text-[#FF6801]">
                        S/ {Number(formData.requestedAmount).toLocaleString("es-PE")}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                      <span className="text-neutral-500">Ciudad:</span>
                      <span className="font-semibold text-neutral-800">{formData.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Inmueble:</span>
                      <span className="font-semibold text-neutral-800">{formData.propertyType}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button onClick={handleReset} variant="outline" size="md">
                      Registrar otra solicitud
                    </Button>
                    <Button
                      href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                        `Hola BREICORP CAPITAL, acabo de registrar la solicitud ${submittedLeadId} a nombre de ${formData.fullName}. Deseo coordinar la revisión.`
                      )}`}
                      isExternal
                      variant="primary"
                      size="md"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Avisar por WhatsApp
                    </Button>
                  </div>
                </div>
              ) : (
                /* FORMULARIO ACTIVO */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Datos de la Operación
                    </span>
                    <span className="text-[11px] text-[#FF6801] font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Evaluación sin costo inicial
                    </span>
                  </div>

                  {serverError && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Campo 1: Nombres y Apellidos */}
                    <div className="sm:col-span-2 space-y-1.5">
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Nombres y Apellidos *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Ej. Juan Carlos Morales Rojas"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111111] bg-white transition-all focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? "border-red-400 focus:ring-red-200 bg-red-50/20"
                            : "border-neutral-300 focus:border-[#FF6801] focus:ring-orange-100"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 font-medium">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Campo 2: Celular / WhatsApp */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Celular / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Ej. 962888200"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111111] bg-white transition-all focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? "border-red-400 focus:ring-red-200"
                            : "border-neutral-300 focus:border-[#FF6801] focus:ring-orange-100"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Campo 3: Correo electrónico */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@correo.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111111] bg-white transition-all focus:outline-none focus:ring-2 ${
                          errors.email
                            ? "border-red-400 focus:ring-red-200"
                            : "border-neutral-300 focus:border-[#FF6801] focus:ring-orange-100"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Campo 4: Ciudad */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="city"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Ciudad del Solicitante *
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#FF6801] focus:ring-2 focus:ring-orange-100"
                      >
                        <option value="Tingo María">Tingo María</option>
                        <option value="Huánuco">Huánuco</option>
                        <option value="Aucayacu">Aucayacu</option>
                        <option value="Otra localidad (Región Huánuco)">
                          Otra localidad (Región Huánuco)
                        </option>
                      </select>
                      {errors.city && (
                        <p className="text-[11px] text-red-600 font-medium">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    {/* Campo 5: Monto Solicitado */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="requestedAmount"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Monto Solicitado (S/) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-sm font-bold text-neutral-400">
                          S/
                        </span>
                        <input
                          type="number"
                          id="requestedAmount"
                          name="requestedAmount"
                          step="1000"
                          min="20000"
                          value={formData.requestedAmount}
                          onChange={handleChange}
                          placeholder="20000"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-semibold text-[#111111] bg-white transition-all focus:outline-none focus:ring-2 ${
                            errors.requestedAmount
                              ? "border-red-400 focus:ring-red-200"
                              : "border-neutral-300 focus:border-[#FF6801] focus:ring-orange-100"
                          }`}
                        />
                      </div>
                      <span className="text-[10px] text-neutral-500 block">
                        Monto mínimo evaluable: S/ 20,000
                      </span>
                      {errors.requestedAmount && (
                        <p className="text-[11px] text-red-600 font-medium">
                          {errors.requestedAmount}
                        </p>
                      )}
                    </div>

                    {/* Campo 6: Finalidad del financiamiento */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="financingPurpose"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Finalidad del Financiamiento *
                      </label>
                      <select
                        id="financingPurpose"
                        name="financingPurpose"
                        value={formData.financingPurpose}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#FF6801] focus:ring-2 focus:ring-orange-100"
                      >
                        <option value="Capital de trabajo">Capital de trabajo comercial</option>
                        <option value="Expansión empresarial">Expansión de negocio / local</option>
                        <option value="Inversión empresarial o personal">Inversión personal / empresarial</option>
                        <option value="Compra de maquinaria o activos">Adquisición de activos / maquinaria</option>
                        <option value="Consolidación de pasivos">Consolidación de deudas</option>
                        <option value="Otra necesidad de financiamiento">Otra necesidad justificada</option>
                      </select>
                    </div>

                    {/* Campo 7: Tipo de inmueble en garantía */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="propertyType"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Tipo de Inmueble en Garantía *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#FF6801] focus:ring-2 focus:ring-orange-100"
                      >
                        <option value="Casa o vivienda">Casa o vivienda urbana</option>
                        <option value="Departamento">Departamento independizado</option>
                        <option value="Local comercial">Local comercial / Tienda</option>
                        <option value="Edificio">Edificio / Predio multifamiliar</option>
                        <option value="Terreno urbano">Terreno urbano habilitado</option>
                        <option value="Otro bien con SUNARP">Otro inmueble con partida SUNARP</option>
                      </select>
                    </div>

                    {/* Campo 8: ¿El inmueble está inscrito a tu nombre? */}
                    <div className="sm:col-span-2 space-y-2 pt-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                        ¿El inmueble está inscrito en SUNARP a tu nombre? *
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <label
                          className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                            formData.isOwnerRegistered === "si"
                              ? "border-[#FF6801] bg-orange-50/30 text-[#111111] font-semibold"
                              : "border-neutral-200 hover:border-neutral-300 text-neutral-600"
                          }`}
                        >
                          <input
                            type="radio"
                            name="isOwnerRegistered"
                            value="si"
                            checked={formData.isOwnerRegistered === "si"}
                            onChange={handleChange}
                            className="text-[#FF6801] focus:ring-[#FF6801]"
                          />
                          <span className="text-sm">Sí, soy titular registral</span>
                        </label>

                        <label
                          className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                            formData.isOwnerRegistered === "no"
                              ? "border-[#FF6801] bg-orange-50/30 text-[#111111] font-semibold"
                              : "border-neutral-200 hover:border-neutral-300 text-neutral-600"
                          }`}
                        >
                          <input
                            type="radio"
                            name="isOwnerRegistered"
                            value="no"
                            checked={formData.isOwnerRegistered === "no"}
                            onChange={handleChange}
                            className="text-[#FF6801] focus:ring-[#FF6801]"
                          />
                          <span className="text-sm">No / Aval o copropietario</span>
                        </label>
                      </div>
                      {errors.isOwnerRegistered && (
                        <p className="text-[11px] text-red-600 font-medium">
                          {errors.isOwnerRegistered}
                        </p>
                      )}
                    </div>

                    {/* Campo 9: Comentarios adicionales */}
                    <div className="sm:col-span-2 space-y-1.5">
                      <label
                        htmlFor="comments"
                        className="block text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Comentarios o Detalles del Inmueble (Opcional)
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        rows={3}
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Indica la ubicación del inmueble, si tiene cargas o cualquier detalle relevante para tu evaluación..."
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-[#111111] bg-white focus:outline-none focus:border-[#FF6801] focus:ring-2 focus:ring-orange-100 resize-none"
                      />
                    </div>
                  </div>

                  {/* Campo 10: Checkbox de aceptación de privacidad */}
                  <div className="space-y-1 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="acceptsPrivacy"
                        checked={formData.acceptsPrivacy}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#FF6801] focus:ring-[#FF6801]"
                      />
                      <span className="text-xs text-neutral-600 leading-normal">
                        He leído y acepto la{" "}
                        <Link
                          href="/politica-de-privacidad"
                          target="_blank"
                          className="text-[#FF6801] font-semibold hover:underline"
                        >
                          Política de Privacidad
                        </Link>{" "}
                        y autorizo el tratamiento de mis datos de contacto para la evaluación y formalización de esta solicitud conforme a la Ley N° 29733.
                      </span>
                    </label>
                    {errors.acceptsPrivacy && (
                      <p className="text-[11px] text-red-600 font-medium pl-7">
                        {errors.acceptsPrivacy}
                      </p>
                    )}
                  </div>

                  {/* Botón de envío */}
                  <div className="pt-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      isLoading={isLoading}
                      icon={<Send className="w-5 h-5" />}
                      className="shadow-orange-glow"
                    >
                      ENVIAR SOLICITUD DE EVALUACIÓN
                    </Button>
                    <p className="text-[11px] text-neutral-400 text-center mt-3">
                      Al enviar, tu solicitud ingresará al proceso de precalificación documental sin ningún compromiso contractual inmediato.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

