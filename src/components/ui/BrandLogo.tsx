import Link from "next/link";

interface BrandLogoProps {
  variant?: "default" | "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Identidad tipográfica temporal oficial de BREICORP CAPITAL
 * Diseñada para ser elegante, sobria y corporativa.
 * Preparada para ser sustituida directamente cuando se entregue el archivo SVG o PNG final.
 */
export default function BrandLogo({
  variant = "default",
  className = "",
  size = "md",
}: BrandLogoProps) {
  // Ajuste de colores según variante
  const isLight = variant === "light";
  const primaryTextColor = isLight ? "text-white" : "text-[#111111]";
  const subTextColor = isLight ? "text-[#C6A15B]" : "text-[#FF6801]";
  const dividerColor = isLight ? "bg-white/20" : "bg-neutral-300";

  const sizeClasses = {
    sm: {
      main: "text-lg tracking-tight",
      sub: "text-[10px] tracking-[0.28em]",
      spacing: "gap-0.5",
    },
    md: {
      main: "text-xl sm:text-2xl tracking-tight",
      sub: "text-[11px] sm:text-xs tracking-[0.32em]",
      spacing: "gap-1",
    },
    lg: {
      main: "text-2xl sm:text-3xl tracking-tight",
      sub: "text-xs sm:text-sm tracking-[0.35em]",
      spacing: "gap-1.5",
    },
  }[size];

  return (
    <Link
      href="/"
      aria-label="BREICORP CAPITAL - Inicio"
      className={`inline-flex flex-col group select-none ${className}`}
    >
      <div className={`flex flex-col ${sizeClasses.spacing} leading-none`}>
        {/* Nombre principal */}
        <span
          className={`font-black font-sans uppercase ${primaryTextColor} ${sizeClasses.main} transition-colors duration-200 group-hover:opacity-90`}
        >
          BREICORP
        </span>

        {/* Descriptor distintivo CAPITAL */}
        <div className="flex items-center gap-1.5">
          <span
            className={`font-semibold font-sans uppercase font-mono ${subTextColor} ${sizeClasses.sub} transition-colors duration-200`}
          >
            CAPITAL
          </span>
          <div className={`h-[1px] flex-1 ${dividerColor}`} />
        </div>
      </div>
    </Link>
  );
}

