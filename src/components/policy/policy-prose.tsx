import { cn } from "@/lib/utils";

type PolicyProseProps = {
  text: string;
  className?: string;
};

export function PolicyProse({ text, className }: PolicyProseProps) {
  return (
    <div
      className={cn(
        "whitespace-pre-wrap font-body-md text-body-md text-foreground/80",
        className,
      )}
    >
      {text}
    </div>
  );
}
