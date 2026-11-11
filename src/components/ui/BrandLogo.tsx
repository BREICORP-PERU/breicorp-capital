import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "default" | "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
  hideText?: boolean;
}

/**
 * Identidad corporativa oficial de BREICORP CAPITAL
 * Integra el logotipo oficial (logobreicorp.webp) sin alterar sus proporciones ni colores,
 * acompañado de la tipografía institucional.
 */
export default function BrandLogo({
  variant = "default",
  className = "",
  size = "md",
  hideText = false,
}: BrandLogoProps) {
  const isLight = variant === "light";
  const primaryTextColor = isLight ? "text-white" : "text-[#111111]";
  const subTextColor = isLight ? "text-[#C6A15B]" : "text-[#EE3C06]";

  const config = {
    sm: {
      imageSize: 32,
      mainText: "text-base tracking-tight",
      subText: "text-[9px] tracking-[0.28em]",
      spacing: "gap-2.5",
    },
    md: {
      imageSize: 40,
      mainText: "text-lg sm:text-xl tracking-tight",
      subText: "text-[10px] sm:text-[11px] tracking-[0.30em]",
      spacing: "gap-3",
    },
    lg: {
      imageSize: 48,
      mainText: "text-xl sm:text-2xl tracking-tight",
      subText: "text-xs tracking-[0.32em]",
      spacing: "gap-3.5",
    },
  }[size];

  return (
    <Link
      href="/"
      aria-label="BREICORP CAPITAL - Inicio"
      className={`inline-flex items-center ${config.spacing} group select-none ${className}`}
    >
      {/* Logotipo oficial BREICORP (Respetando relación 1:1 original sin deformación) */}
      <div className="relative shrink-0 overflow-hidden rounded-full shadow-sm">
        <Image
          src="/logo/logobreicorp.webp"
          alt="Logotipo oficial de BREICORP CAPITAL"
          width={config.imageSize}
          height={config.imageSize}
          priority
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Identidad tipográfica corporativa */}
      {!hideText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black font-sans uppercase ${primaryTextColor} ${config.mainText} transition-colors duration-200 group-hover:opacity-90`}
          >
            BREICORP
          </span>
          <span
            className={`font-bold font-sans uppercase font-mono ${subTextColor} ${config.subText} mt-0.5`}
          >
            CAPITAL
          </span>
        </div>
      )}
    </Link>
  );
}
