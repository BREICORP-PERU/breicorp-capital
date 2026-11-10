"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Créditos hipotecarios", href: "/#creditos-hipotecarios" },
    { name: "Inversionistas", href: "/inversionistas" },
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Preguntas", href: "/#preguntas-frecuentes" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-neutral-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logotipo institucional */}
          <div className="flex-shrink-0">
            <BrandLogo size="md" />
          </div>

          {/* Menú de navegación escritorio */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {navItems.map((item) => {
              const isInvestors = item.href === "/inversionistas";
              const isActive =
                item.href === pathname ||
                (isInvestors && pathname === "/inversionistas");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isInvestors
                      ? "text-[#C6A15B] font-semibold hover:text-[#B5904A] hover:bg-[#FAF6ED]"
                      : isActive
                      ? "text-[#FF6801] font-semibold"
                      : "text-neutral-700 hover:text-[#111111] hover:bg-neutral-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Botones de acción escritorio */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                siteConfig.contact.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-[#111111] transition-colors"
              aria-label="Hablar por WhatsApp con un asesor"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF6801]" />
              <span>{siteConfig.contact.whatsappDisplay}</span>
            </a>

            <Button
              href="/#contacto"
              variant="primary"
              size="md"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              SOLICITAR EVALUACIÓN
            </Button>
          </div>

          {/* Botón hamburguesa móvil */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/#contacto"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              EVALUAR
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-[#111111] hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white shadow-xl animate-fadeIn">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  item.href === "/inversionistas"
                    ? "text-[#C6A15B] font-semibold bg-[#FAF6ED]"
                    : "text-neutral-800 hover:bg-neutral-50 hover:text-[#FF6801]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-neutral-100 space-y-3">
              <Button
                href="/#contacto"
                variant="primary"
                size="md"
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
              >
                SOLICITAR EVALUACIÓN
              </Button>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-300 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#FF6801]" />
                <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

