"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string | ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  className?: string;
}

export default function Accordion({
  items,
  defaultOpenId,
  className = "",
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const accordionId = useId();

  return (
    <div className={`divide-y divide-[#D9CEC2] border-y border-[#D9CEC2] ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${accordionId}-panel-${item.id}`;
        const headerId = `${accordionId}-header-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="group flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 rounded-sm px-2 py-4 text-left text-base font-semibold text-brand-black transition-colors hover:bg-[#F3E7DC] sm:px-4 sm:text-lg"
              >
                <span>{item.question}</span>
                <span className={`rounded-full p-1.5 transition-transform ${isOpen ? "rotate-180 bg-brand-orange" : "bg-[#F3E7DC]"}`}>
                  <ChevronDown className="size-5" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className="px-2 pb-5 text-base leading-relaxed text-[var(--ink-muted)] sm:px-4"
            >
              {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
