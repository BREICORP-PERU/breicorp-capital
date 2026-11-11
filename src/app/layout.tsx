import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
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
    default: "BREICORP CAPITAL | Financiamiento y Créditos",
    template: "%s | BREICORP CAPITAL",
  },
  description:
    "Soluciones de financiamiento para emprendedores, empresarios y personas que buscan nuevas oportunidades en Perú.",
  keywords: [
    "BREICORP CAPITAL",
    "financiamiento con garantia hipotecaria",
    "credito mype huanuco",
    "creditos hipotecarios tingo maria",
    "prestamos empresariales",
    "capital de trabajo huanuco",
    "inversionistas tingo maria",
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
    title: "BREICORP CAPITAL | Financiamiento y Créditos",
    description:
      "Soluciones de financiamiento para emprendedores, empresarios y personas que buscan nuevas oportunidades.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BREICORP CAPITAL | Financiamiento y Créditos",
    description:
      "Soluciones de financiamiento para emprendedores, empresarios y personas que buscan nuevas oportunidades.",
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
        {/* Encabezado fijo superior para escritorio y móvil */}
        <Header />

        {/* Contenido principal con espacio inferior reservado para la barra móvil */}
        <main className="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
          {children}
        </main>

        {/* Botón flotante accesible de WhatsApp adaptado a móvil y escritorio */}
        <FloatingWhatsApp />

        {/* Barra de navegación inferior exclusiva para móviles */}
        <MobileBottomNav />

        {/* Pie de página institucional */}
        <Footer />
      </body>
    </html>
  );
}
