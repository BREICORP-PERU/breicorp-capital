"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "breicorp_cookie_consent_v2";
const GA4_ID = "G-XBBZ6QTH8R";
const SETTINGS_EVENT = "breicorp:open-cookie-settings";
const CHOICE_EVENT = "breicorp:cookie-choice-changed";

type Choice = "accepted" | "rejected" | null;
type GoogleWindow = Window & { dataLayer?: unknown[] };

function getStoredChoice(): Choice {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "accepted" || stored === "rejected" ? stored : null;
  } catch {
    return null;
  }
}

function subscribeToChoice(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHOICE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHOICE_EVENT, onChange);
  };
}

function subscribeToHydration() {
  return () => {};
}

function getHydrated() {
  return true;
}

function getServerHydrated() {
  return false;
}

function getServerChoice(): Choice {
  return null;
}

function consentCommand(...args: unknown[]) {
  const googleWindow = window as GoogleWindow;
  googleWindow.dataLayer = googleWindow.dataLayer || [];
  googleWindow.dataLayer.push(args);
}

function setConsentDefaults() {
  consentCommand("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function loadGoogleAnalytics() {
  if (document.getElementById("breicorp-google-analytics")) return;

  setConsentDefaults();
  consentCommand("consent", "update", { analytics_storage: "granted" });
  consentCommand("js", new Date());
  consentCommand("config", GA4_ID);

  const script = document.createElement("script");
  script.id = "breicorp-google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);
}

export default function CookieConsent() {
  const storedChoice = useSyncExternalStore(subscribeToChoice, getStoredChoice, getServerChoice);
  const ready = useSyncExternalStore(subscribeToHydration, getHydrated, getServerHydrated);
  const [ephemeralChoice, setEphemeralChoice] = useState<Choice>(null);
  const choice = ephemeralChoice ?? storedChoice;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const showSettings = () => setOpen(true);
    window.addEventListener(SETTINGS_EVENT, showSettings);
    return () => window.removeEventListener(SETTINGS_EVENT, showSettings);
  }, []);

  useEffect(() => {
    if (choice === "accepted") {
      loadGoogleAnalytics();
    } else if (choice === "rejected" && document.getElementById("breicorp-google-analytics")) {
      // También aplica una retirada realizada desde otra pestaña.
      consentCommand("consent", "update", { analytics_storage: "denied" });
      window.location.reload();
    }
  }, [choice]);

  function saveChoice(nextChoice: Exclude<Choice, null>) {
    try {
      window.localStorage.setItem(STORAGE_KEY, nextChoice);
    } catch {
      // La decisión se aplica en esta visita aunque no pueda guardarse.
    }

    setEphemeralChoice(nextChoice);
    window.dispatchEvent(new Event(CHOICE_EVENT));
    setOpen(false);
    if (nextChoice === "accepted") {
      loadGoogleAnalytics();
    } else if (document.getElementById("breicorp-google-analytics")) {
      consentCommand("consent", "update", { analytics_storage: "denied" });
      window.location.reload();
    }
  }

  if (!ready || (choice !== null && !open)) return null;

  return (
    <section
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] z-[100] mx-auto max-h-[calc(100dvh-7rem)] max-w-2xl overflow-y-auto rounded-2xl border border-[#97897A] bg-brand-paper p-5 text-brand-black shadow-xl sm:p-6 lg:bottom-6"
    >
      <h2 id="cookie-consent-title" className="text-lg font-bold">Medición del sitio</h2>
      <p id="cookie-consent-description" className="mt-2 text-sm leading-relaxed text-neutral-700">
        Podemos cargar Google Analytics para medir el uso del sitio. La medición es opcional y permanecerá desactivada hasta que la aceptes. Puedes cambiar tu decisión cuando quieras. Lee la{" "}
        <Link href="/politica-de-cookies" className="font-semibold underline underline-offset-2">política de cookies</Link>.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button type="button" onClick={() => saveChoice("rejected")} className="min-h-11 rounded-lg border border-neutral-400 px-5 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B83208]">
          Rechazar medición
        </button>
        <button type="button" onClick={() => saveChoice("accepted")} className="min-h-11 rounded-lg bg-brand-orange px-5 py-2 text-sm font-semibold text-brand-black hover:bg-[#F45C2C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B83208]">
          Aceptar medición
        </button>
      </div>
    </section>
  );
}

export { SETTINGS_EVENT };
