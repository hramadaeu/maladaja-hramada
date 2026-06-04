import { readFileSync } from "node:fs";
import { join } from "node:path";

import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

/** Inline logo from `src/assets/svg/logo.svg` so `currentColor` inherits brand red. */
export function LogoMark({ className }: LogoMarkProps) {
  const svg = readFileSync(
    join(process.cwd(), "src/assets/svg/logo.svg"),
    "utf8",
  ).replace("<svg", '<svg class="h-full w-full" focusable="false"');

  return (
    <span
      className={cn("inline-flex size-full text-brand", className)}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
