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
 * Identidad corporativa de BREICORP CAPITAL.
 * El archivo oficial contiene «BREICORP»; «CAPITAL» se mantiene como texto accesible.
 */
export default function BrandLogo({
  variant = "default",
  className = "",
  size = "md",
  hideText = false,
}: BrandLogoProps) {
  const isLight = variant === "light";

  const config = {
    sm: {
      widthClass: "w-[116px]",
      subText: "text-[9px] tracking-[0.28em]",
    },
    md: {
      widthClass: "w-[145px] sm:w-[155px]",
      subText: "text-[10px] sm:text-[11px] tracking-[0.30em]",
    },
    lg: {
      widthClass: "w-[175px] sm:w-[190px]",
      subText: "text-[11px] tracking-[0.32em]",
    },
  }[size];

  return (
    <Link
      href="/"
      aria-label="BREICORP CAPITAL - Inicio"
      className={`inline-flex min-h-11 items-center select-none ${className}`}
    >
      {/* El fondo blanco conserva el contraste del logotipo negro en el footer. */}
      <span className={`inline-flex flex-col items-end ${config.widthClass} ${isLight ? "rounded-md bg-white px-2.5 py-1.5" : ""}`}>
        <Image
          src="/LOGOTIPO.webp"
          alt=""
          width={909}
          height={219}
          priority={size === "md"}
          className="block h-auto w-full object-contain"
        />
        {!hideText && (
          <span className={`font-bold font-sans uppercase text-brand-black ${config.subText} mt-0.5`}>
            CAPITAL
          </span>
        )}
      </span>
    </Link>
  );
}
