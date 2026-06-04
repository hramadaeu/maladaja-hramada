import { cn } from "@/lib/utils";

type PolicyProseProps = {
  text: string;
  className?: string;
};

/** Renders policy body text; preserves line breaks from content files. */
export function PolicyProse({ text, className }: PolicyProseProps) {
  return (
    <div
      className={cn(
        "prose-policy whitespace-pre-wrap text-base leading-relaxed text-foreground/90",
        className,
      )}
    >
      {text}
    </div>
  );
}
