import { siteConfig } from "@/config/siteConfig";

type ServiceStructuredDataProps = {
  name: string;
  description: string;
  url: string;
};

export default function ServiceStructuredData({ name, description, url }: ServiceStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteConfig.domain}/` },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
      {
        "@type": "Service",
        name,
        description,
        url,
        provider: { "@id": `${siteConfig.domain}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
  );
}
