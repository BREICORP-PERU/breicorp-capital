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
  themeColor: "#EE3C06",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  alternates: { canonical: `${siteConfig.domain}/` },
  title: {
    default: "Préstamos con Garantía Hipotecaria | BREICORP CAPITAL",
    template: "%s | BREICORP CAPITAL",
  },
  description:
    "Conoce las soluciones de financiamiento con garantía hipotecaria de BREICORP CAPITAL. Solicita información y una evaluación personalizada en Perú.",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${siteConfig.domain}/`,
    siteName: "BREICORP CAPITAL",
    title: "Préstamos con Garantía Hipotecaria | BREICORP CAPITAL",
    description:
      "Conoce las soluciones de financiamiento con garantía hipotecaria de BREICORP CAPITAL. Solicita información y una evaluación personalizada en Perú.",
    images: [
      {
        url: "/og-breicorp-capital.png",
        width: 1200,
        height: 630,
        alt: "BREICORP CAPITAL - Financiamiento y oportunidades de inversión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Préstamos con Garantía Hipotecaria | BREICORP CAPITAL",
    description:
      "Conoce las soluciones de financiamiento con garantía hipotecaria de BREICORP CAPITAL. Solicita información y una evaluación personalizada en Perú.",
    images: ["/og-breicorp-capital.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "FinancialService"],
        "@id": `${siteConfig.domain}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalEntity,
        taxID: siteConfig.ruc,
        url: siteConfig.domain,
        logo: `${siteConfig.domain}/LOGOTIPO.webp`,
        image: `${siteConfig.domain}/og-breicorp-capital.png`,
        description: siteConfig.description,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.whatsappDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Tito Jaime 642",
          addressLocality: "Tingo María",
          addressRegion: "Huánuco",
          postalCode: "10131",
          addressCountry: "PE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -9.2953,
          longitude: -75.9972,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Perú",
          },
          {
            "@type": "AdministrativeArea",
            name: "Huánuco",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        name: siteConfig.name,
        url: siteConfig.domain,
        inLanguage: "es-PE",
        publisher: { "@id": `${siteConfig.domain}/#organization` },
      },
    ],
  };

  return (
    <html
      lang="es-PE"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
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
