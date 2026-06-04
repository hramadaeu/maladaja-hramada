"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Smooth-scroll to #donate when landing on the homepage with that hash. */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash !== "#donate") {
      return;
    }

    const id = window.setTimeout(() => {
      document.getElementById("donate")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
