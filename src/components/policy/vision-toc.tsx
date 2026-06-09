"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { t } from "@/lib/translate";
import { policyCopy } from "@/lib/dictionaries/policy";
import type { CommonVisionSection } from "@/content/policy/common-vision/types";

type VisionTOCProps = {
  sections: CommonVisionSection[];
  activeSection: number;
  onSectionClick: (number: number) => void;
  lang: string;
};

export function VisionTOC({
  sections,
  activeSection,
  onSectionClick,
  lang,
}: VisionTOCProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile: details dropdown */}
      <details
        className="md:hidden brutal-border bg-background"
        open={isMobileOpen}
        onToggle={(e) => setIsMobileOpen((e.target as HTMLDetailsElement).open)}
      >
        <summary className="px-4 py-3 font-button text-button uppercase text-foreground cursor-pointer list-none flex items-center justify-between">
          {t(sections.find((s) => s.number === activeSection)?.title ?? sections[0].title, lang)}
          <span className="font-label-caps text-label-caps text-foreground/60 ml-2">
            {`${activeSection}`.padStart(2, "0")}
          </span>
        </summary>
        <div className="border-t-2 border-border/20 px-2 py-2">
          {sections.map((section) => (
            <button
              key={section.number}
              onClick={() => {
                onSectionClick(section.number);
                setIsMobileOpen(false);
              }}
              className={cn(
                "w-full text-left px-3 py-2 font-body-md text-body-md hover:bg-muted transition-colors duration-100 cursor-pointer",
                activeSection === section.number
                  ? "text-proletarian-red font-bold"
                  : "text-foreground/70",
              )}
            >
              <span className="font-label-caps text-label-caps text-foreground/40 mr-2">
                {String(section.number).padStart(2, "0")}
              </span>
              {t(section.title, lang)}
            </button>
          ))}
        </div>
      </details>

      {/* Desktop: sticky sidebar */}
      <nav className="hidden md:block md:sticky md:top-32 self-start">
        <p className="font-label-caps text-label-caps text-foreground/40 uppercase mb-4 tracking-wider">
          {t(policyCopy.contentsLabel, lang)}
        </p>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.number}>
              <button
                onClick={() => onSectionClick(section.number)}
                className={cn(
                  "w-full text-left flex items-center gap-3 px-3 py-2 font-body-md text-body-md border-l-2 transition-all duration-100 cursor-pointer",
                  activeSection === section.number
                    ? "border-proletarian-red text-foreground"
                    : "border-transparent text-foreground/50 hover:text-foreground/80 hover:border-foreground/20",
                )}
              >
                <span className="font-label-caps text-label-caps shrink-0">
{`${section.number}`.padStart(2, "0")}
                </span>
                <span>{t(section.title, lang)}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
