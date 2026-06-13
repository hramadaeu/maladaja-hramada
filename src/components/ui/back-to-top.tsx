"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: 0 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50",
        "size-12 flex items-center justify-center",
        "bg-proletarian-red text-paper-white",
        "brutal-shadow transition-all duration-200",
        "border-2 border-transparent hover:border-ink-black dark:hover:border-paper-white",
        "active:translate-x-0.5 active:translate-y-0.5",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-2",
      )}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
