import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/config/siteConfig";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FF6801",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "BREICORP CAPITAL | Financiamiento con Garantía Hipotecaria",
    template: "%s | BREICORP CAPITAL",
  },
  description:
    "Conoce las alternativas de financiamiento con garantía hipotecaria de BREICORP CAPITAL. Solicita una evaluación personalizada desde S/ 20,000.",
  keywords: [
    "BREICORP CAPITAL",
    "financiamiento con garantia hipotecaria",
    "credito con garantia hipotecaria Huanuco",
    "creditos hipotecarios Tingo Maria",
    "prestamos con garantia inmobiliaria",
    "capital de trabajo Huánuco",
    "inversiones inmobiliarias",
    "garantia SUNARP",
  ],
  authors: [{ name: "BREICORP E.I.R.L." }],
  creator: "BREICORP CAPITAL",
  publisher: "BREICORP E.I.R.L.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteConfig.domain,
    siteName: "BREICORP CAPITAL",
    title: "BREICORP CAPITAL | Financiamiento con Garantía Hipotecaria",
    description:
      "Conoce las alternativas de financiamiento con garantía hipotecaria de BREICORP CAPITAL. Solicita una evaluación personalizada desde S/ 20,000.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BREICORP CAPITAL | Financiamiento con Garantía Hipotecaria",
    description:
      "Conoce las alternativas de financiamiento con garantía hipotecaria de BREICORP CAPITAL. Solicita una evaluación personalizada desde S/ 20,000.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        {/* Encabezado fijo y accesible */}
        <Header />

        {/* Contenido principal con landmark semántico */}
        <main className="flex-1">{children}</main>

        {/* Botón flotante accesible de WhatsApp */}
        <FloatingWhatsApp />

        {/* Pie de página institucional */}
        <Footer />
      </body>
    </html>
  );
}
