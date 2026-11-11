import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {kicker && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? "bg-white/10 text-[#C6A15B] border border-[#C6A15B]/30"
              : "bg-[#EE3C06]/10 text-[#EE3C06] border border-[#EE3C06]/20"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDark ? "bg-[#C6A15B]" : "bg-[#EE3C06]"
            }`}
          />
          {kicker}
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase leading-tight ${
          isDark ? "text-white" : "text-[#111111]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

