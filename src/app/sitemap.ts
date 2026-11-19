import { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;
  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/prestamos-garantia-hipotecaria` },
    { url: `${baseUrl}/financiamiento-empresarial` },
    { url: `${baseUrl}/inversionistas` },
  ];
}

