"use client";

import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "./EditorialImage";
import type { Photo } from "@/data/photos";

type Option = {
  label: string;
  title: string;
  description: string;
  photo: Photo;
  detail?: string;
};

export default function VisualSelector({
  label,
  options,
  sequence = false,
}: {
  label: string;
  options: readonly [Option, ...Option[]];
  sequence?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  const panelId = useId();
  const option = options[selected];

  return (
    <div className="visual-selector">
      <div role="group" aria-label={label} className="selector-options">
        {options.map((item, index) => (
          <button
            type="button"
            key={item.label}
            aria-pressed={index === selected}
            aria-controls={panelId}
            onClick={() => setSelected(index)}
          >
            {sequence && <span className="selector-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
            <span>{item.label}</span>
            <ArrowUpRight aria-hidden="true" className="shrink-0 size-5" />
          </button>
        ))}
      </div>
      <div id={panelId} className="selector-panel">
        <EditorialImage key={option.photo.src} photo={option.photo} className="selector-photo" />
        <div aria-live="polite" aria-atomic="true" className="selector-copy">
          <h3>{option.title}</h3>
          <p>{option.description}</p>
          {option.detail && <p className="selector-detail">{option.detail}</p>}
        </div>
      </div>
    </div>
  );
}
