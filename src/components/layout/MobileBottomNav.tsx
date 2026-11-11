"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Coins, TrendingUp } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [homeSection, setHomeSection] = useState<"inicio" | "soluciones">("inicio");

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

  const handleNavClick = (
    sectionId: "inicio" | "soluciones",
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
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
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden w-full bg-white border-t border-neutral-200/90 shadow-[0_-2px_12px_rgba(0,0,0,0.05)] pb-[max(env(safe-area-inset-bottom,0px),0.5rem)] pt-0 select-none"
    >
      <div className="grid grid-cols-3 w-full max-w-lg mx-auto h-16 items-stretch">
        {/* 1. INICIO */}
        <Link
          href="/#inicio"
          onClick={(e) => handleNavClick("inicio", e)}
          className={`relative flex flex-col items-center justify-center py-2 px-2 transition-colors group ${
            isInicioActive
              ? "text-[#EE3C06]"
              : "text-neutral-400 hover:text-neutral-700"
          }`}
          aria-current={isInicioActive ? "page" : undefined}
        >
          {/* Indicador horizontal naranja sobre la opción activa */}
          {isInicioActive && (
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-[#EE3C06] rounded-b-md" />
          )}
          <Home
            className={`w-6 h-6 mb-1 transition-transform ${
              isInicioActive ? "scale-105 stroke-[2.25]" : "stroke-[1.75]"
            }`}
          />
          <span
            className={`text-[10px] tracking-wider uppercase font-sans ${
              isInicioActive ? "font-bold text-[#EE3C06]" : "font-medium"
            }`}
          >
            INICIO
          </span>
        </Link>

        {/* 2. CRÉDITOS */}
        <Link
          href="/#soluciones"
          onClick={(e) => handleNavClick("soluciones", e)}
          className={`relative flex flex-col items-center justify-center py-2 px-2 transition-colors group ${
            isCreditosActive
              ? "text-[#EE3C06]"
              : "text-neutral-400 hover:text-neutral-700"
          }`}
          aria-current={isCreditosActive ? "page" : undefined}
        >
          {/* Indicador horizontal naranja sobre la opción activa */}
          {isCreditosActive && (
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-[#EE3C06] rounded-b-md" />
          )}
          <Coins
            className={`w-6 h-6 mb-1 transition-transform ${
              isCreditosActive ? "scale-105 stroke-[2.25]" : "stroke-[1.75]"
            }`}
          />
          <span
            className={`text-[10px] tracking-wider uppercase font-sans ${
              isCreditosActive ? "font-bold text-[#EE3C06]" : "font-medium"
            }`}
          >
            CRÉDITOS
          </span>
        </Link>

        {/* 3. INVERTIR */}
        <Link
          href="/inversionistas"
          className={`relative flex flex-col items-center justify-center py-2 px-2 transition-colors group ${
            isInvertirActive
              ? "text-[#EE3C06]"
              : "text-neutral-400 hover:text-neutral-700"
          }`}
          aria-current={isInvertirActive ? "page" : undefined}
        >
          {/* Indicador horizontal naranja sobre la opción activa */}
          {isInvertirActive && (
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-[#EE3C06] rounded-b-md" />
          )}
          <TrendingUp
            className={`w-6 h-6 mb-1 transition-transform ${
              isInvertirActive ? "scale-105 stroke-[2.25]" : "stroke-[1.75]"
            }`}
          />
          <span
            className={`text-[10px] tracking-wider uppercase font-sans ${
              isInvertirActive ? "font-bold text-[#EE3C06]" : "font-medium"
            }`}
          >
            INVERTIR
          </span>
        </Link>
      </div>
    </nav>
  );
}
