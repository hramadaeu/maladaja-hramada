"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisionPoint } from "./vision-point";
import { t } from "@/lib/translate";
import type { CommonVisionSection } from "@/content/policy/common-vision/types";

type VisionSectionProps = {
  section: CommonVisionSection;
  startNumber: number;
  isOpen: boolean;
  onToggle: () => void;
  lang: string;
};

export function VisionSection({
  section,
  startNumber,
  isOpen,
  onToggle,
  lang,
}: VisionSectionProps) {
  const sectionId = `section-${section.number}`;

  return (
    <div id={sectionId} className="brutal-border bg-paper-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-concrete-gray transition-colors duration-100"
      >
        <div className="flex items-center gap-4">
          <span className="font-headline text-headline-xl text-foreground/10 leading-none shrink-0">
            {`${section.number}`.padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-headline text-headline-md uppercase text-foreground">
              {t(section.title, lang)}
            </h3>
            <span className="font-label-caps text-label-caps text-foreground/60 mt-1 block">
              {section.points.length}
            </span>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "size-5 text-foreground/40 transition-transform duration-100 shrink-0 ml-4",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-5 border-t-2 border-border/20">
          {section.points.map((point, idx) => (
            <VisionPoint
              key={idx}
              number={startNumber + idx}
              title={t(point.title, lang)}
              body={t(point.body, lang)}
              ctaLabel={point.cta ? t(point.cta.label, lang) : undefined}
              ctaHref={point.cta ? `/${lang}${point.cta.href}` : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
