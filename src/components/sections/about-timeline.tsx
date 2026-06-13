import { t as translate } from "@/lib/translate";
import { Reveal } from "@/components/ui/reveal";

type Milestone = {
  key: string;
  date: string;
  title: Record<string, string>;
  description: Record<string, string>;
};

type AboutTimelineProps = {
  milestones: readonly Milestone[];
  lang: string;
};

export function AboutTimeline({ milestones, lang }: AboutTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] md:left-[159px] top-0 bottom-0 w-0.5 bg-proletarian-red" />

      {milestones.map((m, index) => (
        <Reveal key={m.key} delay={index * 150}>
          <div className="relative pb-12 last:pb-0">
            <div className="md:absolute md:left-0 md:top-0 md:w-[140px] md:text-right mb-2 md:mb-0">
              <span className="font-headline text-headline-lg text-proletarian-red">
                {m.date}
              </span>
            </div>

            <div className="absolute left-[13px] md:left-[153px] top-1 size-3 rounded-full bg-proletarian-red border-2 border-background z-10" />

            <div className="pl-10 md:pl-[180px]">
              <h3 className="font-headline text-headline-md uppercase text-foreground mb-2">
                {translate(m.title, lang)}
              </h3>
              <p className="font-body-md text-body-md text-foreground/80">
                {translate(m.description, lang)}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
