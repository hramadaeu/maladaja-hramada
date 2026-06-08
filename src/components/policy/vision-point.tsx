import Link from "next/link";
import { ArrowRight } from "lucide-react";

type VisionPointProps = {
  number: number;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function VisionPoint({ number, title, body, ctaLabel, ctaHref }: VisionPointProps) {
  return (
    <div className="flex gap-4 py-4 border-b border-border/20 last:border-b-0">
      <span className="font-label-caps text-label-caps text-proletarian-red w-8 shrink-0 pt-0.5">
        {number}
      </span>
      <div className="border-l-2 border-proletarian-red pl-4">
        <p className="font-button text-button uppercase text-foreground">{title}</p>
        <p className="font-body-md text-body-md text-foreground/80 mt-1">{body}</p>
        {ctaLabel && ctaHref ? (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-1.5 mt-3 font-button text-button uppercase text-proletarian-red hover:underline decoration-2 underline-offset-4"
          >
            {ctaLabel}
            <ArrowRight className="size-3.5" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
