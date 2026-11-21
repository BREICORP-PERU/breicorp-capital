import React from "react";

export type FAQItem = {
  question: string;
  answer?: string | React.ReactNode;
};

type FAQStructuredDataProps = {
  items: FAQItem[];
};

export default function FAQStructuredData({ items }: FAQStructuredDataProps) {
  if (!items || items.length === 0) return null;

  const validItems = items
    .filter((item) => Boolean(item.question && item.answer))
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item.answer === "string" ? item.answer : String(item.answer),
      },
    }));

  if (validItems.length === 0) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validItems,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
