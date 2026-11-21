import { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";
import { getAllGuideSlugs } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;
  const guideUrls = getAllGuideSlugs().map((slug) => ({
    url: `${baseUrl}/guias/${slug}`,
  }));

  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/prestamos-garantia-hipotecaria` },
    { url: `${baseUrl}/financiamiento-empresarial` },
    { url: `${baseUrl}/inversionistas` },
    { url: `${baseUrl}/guias` },
    ...guideUrls,
  ];
}

