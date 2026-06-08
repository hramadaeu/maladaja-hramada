"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { t } from "@/lib/translate";
import type { YouthPolicySection } from "@/content/policy/youth-policy/types";

type YouthPolicyTabsProps = {
  sections: YouthPolicySection[];
  lang: string;
};

export function YouthPolicyTabs({ sections, lang }: YouthPolicyTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (sections.length === 0) return null;

  const activeSection = sections[activeTab];

  return (
    <div>
      <div className="flex flex-wrap gap-x-1 gap-y-1 border-b-2 border-border mb-8">
        {sections.map((section, idx) => (
          <button
            key={section.number}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "px-3 py-2.5 font-button text-button uppercase text-left transition-colors duration-100 leading-tight",
              activeTab === idx
                ? "text-proletarian-red border-b-2 border-proletarian-red -mb-[2px]"
                : "text-foreground/50 hover:text-foreground hover:border-b-2 hover:border-foreground/20 -mb-[2px]",
            )}
          >
            <span className="font-label-caps text-label-caps text-foreground/30 mr-1.5">
              {`${section.number}`.padStart(2, "0")}
            </span>
            {t(section.title, lang)}
          </button>
        ))}
      </div>

      <div>
        <div className="inline-block bg-foreground text-background font-label-caps text-label-caps px-2 py-1 mb-6">
          {`${activeSection.number}`.padStart(2, "0")} — {t(activeSection.title, lang)}
        </div>

        {activeSection.proposals.map((proposal, idx) => (
          <div
            key={idx}
            className="py-4 border-b border-border/20 last:border-b-0"
          >
            <div className="flex gap-4">
              <span className="font-label-caps text-label-caps text-proletarian-red w-8 shrink-0 pt-0.5">
                {`${idx + 1}`.padStart(2, "0")}
              </span>
              <div className="border-l-2 border-proletarian-red pl-4">
                <p className="font-button text-button uppercase text-foreground">
                  {t(proposal.title, lang)}
                </p>
                <p className="font-body-md text-body-md text-foreground/80 mt-1">
                  {t(proposal.body, lang)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
