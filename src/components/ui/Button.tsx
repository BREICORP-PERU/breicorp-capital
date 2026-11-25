import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-light" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  isLoading = false,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex min-h-11 items-center justify-center text-center font-semibold rounded-lg transition-colors duration-150 cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 tracking-wide",
  }[size];

  const variantClasses = {
    primary:
      "bg-brand-orange text-brand-black hover:bg-[#F45C2C] focus-visible:ring-brand-black",
    secondary:
      "bg-brand-black hover:bg-neutral-800 text-white focus-visible:ring-brand-black",
    outline:
      "border border-[#97897A] hover:border-brand-black bg-transparent text-brand-black hover:bg-[#F3E7DC] focus-visible:ring-brand-black",
    "outline-light":
      "border border-white/25 hover:border-white bg-transparent text-white hover:bg-white/10 focus:ring-white/40",
    gold:
      "bg-brand-orange text-brand-black hover:bg-[#F45C2C] focus-visible:ring-brand-black",
    ghost:
      "bg-transparent hover:bg-neutral-100 text-neutral-800 focus:ring-neutral-300",
  }[variant];

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}

