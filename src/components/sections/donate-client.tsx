"use client";

import Link from "next/link";

import type { SiteLinks } from "@/config/site-links";
import { CopyButton } from "@/components/ui/copy-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cryptoWallets, donateCopy } from "@/lib/dictionaries/donate";
import { t } from "@/lib/translate";

import { Button } from "@/components/ui/button";

type DonateSectionClientProps = {
  lang: string;
  links: SiteLinks;
  /** Pre-rendered QR code SVGs keyed by wallet id (e.g. "btc" → "<svg>…</svg>"). */
  qrCodes: Record<string, string>;
};

export function DonateSectionClient({
  lang,
  links,
  qrCodes,
}: DonateSectionClientProps) {
  const { donationIbanPln, donationIbanEur, donationBuyMeACoffeeUrl } = links;

  return (
    <section id="donate" className="pt-10 pb-16 md:pt-10 md:pb-16">
      <div className="mx-auto max-w-container-max px-4 md:px-16">
        {/* Section header */}
        <div className="mx-auto mb-8 md:mb-10">
          <h2 className="font-headline text-headline-lg uppercase text-foreground">
            {t(donateCopy.title, lang)}
          </h2>
          <p className="mt-3 font-body text-body-md text-foreground/80">
            {t(donateCopy.subtitle, lang)}
          </p>
        </div>

        {/* Primary: Direct bank transfer (full width, prominent) */}
        <article className="brutal-border bg-background mb-8 border-l-8 border-l-proletarian-red p-6 md:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <h3 className="font-headline text-headline-md uppercase text-foreground">
              {t(donateCopy.bankTitle, lang)}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-foreground px-2 py-1 font-label-caps text-label-caps text-background">
                {t(donateCopy.oneTime, lang)}
              </span>
              <span className="bg-proletarian-red px-2 py-1 font-label-caps text-label-caps text-paper-white">
                {t(donateCopy.regular, lang)}
              </span>
            </div>
          </div>
          <p className="mb-6 max-w-2xl font-body text-body-md text-foreground/80">
            {t(donateCopy.bankDescription, lang)}
          </p>
          {/* PLN + EUR side by side */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* PLN */}
            <div className="rounded-lg border-2 border-dashed border-border bg-muted p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="bg-foreground px-2 py-0.5 font-label-caps text-label-caps text-background">
                  PLN
                </span>
                <CopyButton
                  value={donationIbanPln}
                  label={t(donateCopy.copy, lang)}
                  copiedLabel={t(donateCopy.copied, lang)}
                />
              </div>
              <p className="break-all font-mono text-sm leading-relaxed text-foreground sm:text-base">
                {donationIbanPln}
              </p>
            </div>
            {/* EUR */}
            <div className="rounded-lg border-2 border-dashed border-border bg-muted p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="bg-foreground px-2 py-0.5 font-label-caps text-label-caps text-background">
                  EUR
                </span>
                <CopyButton
                  value={donationIbanEur}
                  label={t(donateCopy.copy, lang)}
                  copiedLabel={t(donateCopy.copied, lang)}
                />
              </div>
              <p className="break-all font-mono text-sm leading-relaxed text-foreground sm:text-base">
                {donationIbanEur}
              </p>
            </div>
          </div>
        </article>

        {/* Secondary: BMC + Crypto in 2 columns */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Buy Me a Coffee card */}
          <article className="brutal-border bg-background flex flex-col p-6 md:p-8">
            <h3 className="mb-3 font-headline text-headline-md uppercase text-foreground">
              {t(donateCopy.bmcTitle, lang)}
            </h3>
            <p className="mb-6 flex-grow font-body text-body-md text-foreground/80">
              {t(donateCopy.bmcDescription, lang)}
            </p>
            <Button
              nativeButton={false}
              variant="default"
              disabled={!donationBuyMeACoffeeUrl}
              className="h-12 w-full font-button text-button uppercase"
              render={
                <Link
                  href={donationBuyMeACoffeeUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {t(donateCopy.bmcCta, lang)}
            </Button>
          </article>

          {/* Crypto card */}
          <article className="brutal-border bg-background flex flex-col p-6 md:p-8">
            <h3 className="mb-3 font-headline text-headline-md uppercase text-foreground">
              {t(donateCopy.cryptoTitle, lang)}
            </h3>
            <p className="mb-6 flex-grow font-body text-body-md text-foreground/80">
              {t(donateCopy.cryptoDialogDesc, lang)}
            </p>
            <Dialog>
              <DialogTrigger
                render={
                  <Button
                    nativeButton
                    variant="outline"
                    className="h-12 w-full font-button text-button uppercase border-2 border-border text-foreground hover:bg-muted"
                  >
                    {t(donateCopy.cryptoCta, lang)}
                  </Button>
                }
              />
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>{t(donateCopy.cryptoDialogTitle, lang)}</DialogTitle>
                  <DialogDescription>
                    {t(donateCopy.cryptoDialogDesc, lang)}
                  </DialogDescription>
                </DialogHeader>
                <ul className="grid gap-6 sm:grid-cols-3">
                  {cryptoWallets.map((wallet) => {
                    const address = links.donationWallets[wallet.id];
                    return (
                      <li
                        key={wallet.id}
                        className="flex flex-col items-center gap-3 text-center"
                      >
                        <div
                          className="size-28 sm:size-32 [&>svg]:size-full [&>svg]:rounded-lg [&>svg]:border-2 [&>svg]:border-ink-black [&>svg]:bg-paper-white"
                          // The SVG comes from the trusted `qrcode` library
                          // (server-rendered), so this is safe to inject.
                          dangerouslySetInnerHTML={{
                            __html: qrCodes[wallet.id] ?? "",
                          }}
                          role="img"
                          aria-label={`${wallet.label} wallet address QR code`}
                        />
                        <p className="text-xs font-medium text-foreground">
                          {wallet.label}
                        </p>
                        {address ? (
                          <>
                            <p
                              className="w-full font-mono text-[10px] text-foreground/70 break-all"
                              title={address}
                            >
                              {address}
                            </p>
                            <CopyButton
                              value={address}
                              label={t(donateCopy.copy, lang)}
                              copiedLabel={t(donateCopy.copied, lang)}
                              className="w-full"
                            />
                          </>
                        ) : (
                          <p className="font-mono text-[10px] text-foreground/40">
                            —
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </DialogContent>
            </Dialog>
          </article>
        </div>
      </div>
    </section>
  );
}
