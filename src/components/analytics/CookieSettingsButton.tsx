"use client";

import { SETTINGS_EVENT } from "./CookieConsent";

export default function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(SETTINGS_EVENT))}
      className={className}
    >
      Configurar medición
    </button>
  );
}
