"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string | React.ReactNode;
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
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const headerId = `accordion-header-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-neutral-300 bg-white shadow-sm ring-1 ring-neutral-200"
                : "border-neutral-200 bg-white hover:border-neutral-300"
            }`}
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors duration-150 group"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#EE3C06] w-6 shrink-0">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <span
                    className={`font-semibold text-base sm:text-lg transition-colors ${
                      isOpen
                        ? "text-[#111111]"
                        : "text-neutral-800 group-hover:text-[#EE3C06]"
                    }`}
                  >
                    {item.question}
                  </span>
                </span>
                <span
                  className={`p-1 rounded-full transition-transform duration-200 shrink-0 ${
                    isOpen
                      ? "rotate-180 bg-[#EE3C06]/10 text-[#EE3C06]"
                      : "text-neutral-400 group-hover:text-neutral-600 bg-neutral-100"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-neutral-600 border-t border-neutral-100 animate-fadeIn"
              >
                {typeof item.answer === "string" ? (
                  <p>{item.answer}</p>
                ) : (
                  item.answer
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

