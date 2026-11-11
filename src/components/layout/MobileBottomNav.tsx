"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Coins, TrendingUp } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [homeSection, setHomeSection] = useState<"inicio" | "soluciones">("inicio");
  const whatsappUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  const isHome = pathname === "/";
  const isInvestors = pathname === "/inversionistas";

  // Monitorear scroll solo cuando estemos en la página principal
  useEffect(() => {
    if (!isHome) return;

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const solucionesEl = document.getElementById("soluciones");
        if (solucionesEl) {
          const rect = solucionesEl.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            setHomeSection("soluciones");
            return;
          }
        }
        setHomeSection("inicio");
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isHome]);

  const handleNavClick = (sectionId: "inicio" | "soluciones", event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      event.preventDefault();
      if (sectionId === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/#inicio");
        setHomeSection("inicio");
      } else {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", `/#${sectionId}`);
          setHomeSection("soluciones");
        }
      }
    }
  };

  const isInicioActive = isHome && homeSection === "inicio";
  const isCreditosActive = isHome && homeSection === "soluciones";
  const isInvertirActive = isInvestors;

  return (
    <nav
      aria-label="Navegación móvil inferior"
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[max(env(safe-area-inset-bottom,0px),0.5rem)] pt-1 px-2 select-none"
    >
      <div className="grid grid-cols-4 items-center max-w-md mx-auto">
        {/* 1. INICIO */}
        <Link
          href="/#inicio"
          onClick={(e) => handleNavClick("inicio", e)}
          className={`flex flex-col items-center justify-center py-1 px-1 transition-colors relative group ${
            isInicioActive ? "text-[#FF6801]" : "text-neutral-500 hover:text-neutral-900"
          }`}
          aria-current={isInicioActive ? "page" : undefined}
        >
          {isInicioActive && (
            <span className="absolute -top-1 w-6 h-0.5 rounded-full bg-[#FF6801]" />
          )}
          <Home className={`w-5 h-5 mb-0.5 transition-transform ${isInicioActive ? "scale-110" : ""}`} />
          <span className={`text-[10px] tracking-tight uppercase font-medium ${isInicioActive ? "font-bold text-[#FF6801]" : ""}`}>
            Inicio
          </span>
        </Link>

        {/* 2. CRÉDITOS */}
        <Link
          href="/#soluciones"
          onClick={(e) => handleNavClick("soluciones", e)}
          className={`flex flex-col items-center justify-center py-1 px-1 transition-colors relative group ${
            isCreditosActive ? "text-[#FF6801]" : "text-neutral-500 hover:text-neutral-900"
          }`}
          aria-current={isCreditosActive ? "page" : undefined}
        >
          {isCreditosActive && (
            <span className="absolute -top-1 w-6 h-0.5 rounded-full bg-[#FF6801]" />
          )}
          <Coins className={`w-5 h-5 mb-0.5 transition-transform ${isCreditosActive ? "scale-110" : ""}`} />
          <span className={`text-[10px] tracking-tight uppercase font-medium ${isCreditosActive ? "font-bold text-[#FF6801]" : ""}`}>
            Créditos
          </span>
        </Link>

        {/* 3. INVERTIR */}
        <Link
          href="/inversionistas"
          className={`flex flex-col items-center justify-center py-1 px-1 transition-colors relative group ${
            isInvertirActive ? "text-[#FF6801]" : "text-neutral-500 hover:text-neutral-900"
          }`}
          aria-current={isInvertirActive ? "page" : undefined}
        >
          {isInvertirActive && (
            <span className="absolute -top-1 w-6 h-0.5 rounded-full bg-[#FF6801]" />
          )}
          <TrendingUp className={`w-5 h-5 mb-0.5 transition-transform ${isInvertirActive ? "scale-110" : ""}`} />
          <span className={`text-[10px] tracking-tight uppercase font-medium ${isInvertirActive ? "font-bold text-[#FF6801]" : ""}`}>
            Invertir
          </span>
        </Link>

        {/* 4. WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 text-neutral-600 hover:text-[#25D366] transition-colors relative group"
          aria-label="Contactar a BREICORP CAPITAL por WhatsApp"
        >
          <div className="relative mb-0.5">
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          </div>
          <span className="text-[10px] tracking-tight uppercase font-semibold text-neutral-700 group-hover:text-[#25D366]">
            WhatsApp
          </span>
        </a>
      </div>
    </nav>
  );
}
