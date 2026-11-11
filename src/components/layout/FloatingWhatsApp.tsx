"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { siteConfig, whatsappHref } from "@/config/siteConfig";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  return (
    <div className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] right-4 lg:bottom-6 lg:right-6 z-40 flex items-end gap-3 pointer-events-none">
      {/* Tooltip informativo solo en pantallas medianas y grandes para no saturar móviles */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 p-3 bg-white text-neutral-800 text-xs rounded-xl shadow-lg border border-neutral-200 pointer-events-auto max-w-xs animate-fadeIn">
          <div>
            <div className="font-bold text-[#111111]">¿Deseas una evaluación?</div>
            <div className="text-neutral-500">Conversa directamente por WhatsApp</div>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar aviso"
            className="text-neutral-400 hover:text-neutral-700 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón flotante accesible con ícono oficial */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a BREICORP CAPITAL por WhatsApp"
        className="pointer-events-auto flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
      >
        <WhatsAppIcon className="w-6.5 h-6.5 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
}
