import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title:
    "Préstamos con Garantía Hipotecaria en Tingo María | BREICORP CAPITAL",
  description:
    "Accede a financiamiento con garantía hipotecaria en Tingo María y Leoncio Prado. Oficina en Av. Tito Jaime 642. Evaluación gratuita con inscripción en SUNARP. +51 948 261 382.",
  keywords: [
    "préstamos garantía hipotecaria Tingo María",
    "crédito hipotecario Tingo María",
    "financiamiento MYPE Leoncio Prado",
    "BREICORP CAPITAL Tingo María",
    "préstamo con propiedad Tingo María",
    "SUNARP Tingo María",
    "financiamiento privado Huánuco",
    "crédito para comerciantes Tingo María",
    "préstamo garantía inmobiliaria Rupa-Rupa",
  ],
  alternates: {
    canonical: `${siteConfig.domain}/prestamos-garantia-hipotecaria-tingo-maria`,
  },
  openGraph: {
    title:
      "Préstamos con Garantía Hipotecaria en Tingo María | BREICORP CAPITAL",
    description:
      "Financiamiento privado para empresarios de Tingo María, Rupa-Rupa y Leoncio Prado. Oficina en Av. Tito Jaime 642. Evaluación gratuita.",
    url: `${siteConfig.domain}/prestamos-garantia-hipotecaria-tingo-maria`,
    siteName: siteConfig.name,
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "BREICORP CAPITAL - Financiamiento con Garantía Hipotecaria en Tingo María",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Préstamos con Garantía Hipotecaria en Tingo María | BREICORP CAPITAL",
    description:
      "Financiamiento privado para empresarios de Tingo María y Leoncio Prado. Evaluación gratuita.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TingoMariaLayout({ children }: { children: ReactNode }) {
  return children;
}
