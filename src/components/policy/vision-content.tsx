"use client";

import { useCallback, useMemo, useState, useEffect, useRef } from "react";
import { VisionSection } from "./vision-section";
import { VisionTOC } from "./vision-toc";
import type { CommonVisionSection } from "@/content/policy/common-vision/types";

type VisionContentProps = {
  sections: CommonVisionSection[];
  lang: string;
};

export function VisionContent({ sections, lang }: VisionContentProps) {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());
  const [activeSection, setActiveSection] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const startNumbers = useMemo(() => {
    const map = new Map<number, number>();
    let acc = 1;
    for (const section of sections) {
      map.set(section.number, acc);
      acc += section.points.length;
    }
    return map;
  }, [sections]);

  const toggleSection = useCallback((num: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(num)) {
        next.delete(num);
      } else {
        next.add(num);
      }
      return next;
    });
  }, []);

  const scrollToSection = useCallback((num: number) => {
    const el = document.getElementById(`section-${num}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleSectionClick = useCallback(
    (num: number) => {
      setOpenSections((prev) => {
        const next = new Set(prev);
        next.add(num);
        return next;
      });
      scrollToSection(num);
    },
    [scrollToSection],
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const num = Number(entry.target.id.replace("section-", ""));
            if (!isNaN(num)) {
              setActiveSection(num);
            }
          }
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 },
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;

    for (const section of sections) {
      const el = document.getElementById(`section-${section.number}`);
      if (el) observer.observe(el);
    }

    return () => {
      if (observer) {
        for (const section of sections) {
          const el = document.getElementById(`section-${section.number}`);
          if (el) observer.unobserve(el);
        }
      }
    };
  }, [sections]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 lg:gap-10 items-start">
      <VisionTOC
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        lang={lang}
      />

      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <VisionSection
            key={section.number}
            section={section}
            startNumber={startNumbers.get(section.number) ?? 1}
            isOpen={openSections.has(section.number)}
            onToggle={() => toggleSection(section.number)}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
