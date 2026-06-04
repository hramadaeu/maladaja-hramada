import { getSiteLinks } from "@/config/site-links";

import { DonateSectionClient } from "./donate-client";

type DonateSectionProps = {
  lang: string;
};

export function DonateSection({ lang }: DonateSectionProps) {
  return <DonateSectionClient lang={lang} links={getSiteLinks()} />;
}
