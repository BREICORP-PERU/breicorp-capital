"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { siteConfig, whatsappHref } from "@/config/siteConfig";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-none">
      {/* Tooltip informativo inicial */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 bg-white text-neutral-800 text-xs rounded-xl shadow-lg border border-neutral-200 pointer-events-auto max-w-xs animate-fadeIn">
          <div>
            <div className="font-bold text-[#111111]">¿Dudas sobre tu evaluación?</div>
            <div className="text-neutral-500">Chatea con un asesor por WhatsApp</div>
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

      {/* Botón flotante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a BREICORP CAPITAL por WhatsApp"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}

