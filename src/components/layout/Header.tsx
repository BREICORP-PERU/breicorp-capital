"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import Button from "@/components/ui/Button";
import { siteConfig, whatsappHref } from "@/config/siteConfig";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const creditWhatsAppUrl = whatsappHref(siteConfig.contact.whatsappDefaultMessage);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && mobileMenuOpen) {
          setMobileMenuOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="site-shell header-row">
        <BrandLogo size="md" />
        <nav aria-label="Navegación principal" className="header-desktop-nav">
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === pathname ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Button href={creditWhatsAppUrl} isExternal size="sm" icon={<ArrowUpRight className="size-4" />}>
            Evaluación
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="header-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" aria-label="Menú móvil" className="header-mobile-nav" hidden={!mobileMenuOpen}>
        <div className="site-shell">
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={item.href === pathname ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
          <a href={creditWhatsAppUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
            WhatsApp {siteConfig.contact.whatsappDisplay}
          </a>
        </div>
      </nav>
    </header>
  );
}
