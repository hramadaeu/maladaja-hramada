"use client";

import Link from "next/link";
import { CreditCardIcon, WalletIcon } from "lucide-react";

import type { SiteLinks } from "@/config/site-links";
import { BuyMeACoffeeButton } from "@/components/donate/buy-me-a-coffee-button";
import { CopyButton } from "@/components/ui/copy-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

type DonateSectionClientProps = {
  lang: string;
  links: SiteLinks;
};

function MockQrCode({ walletId }: { walletId: string }) {
  const cells = Array.from({ length: 64 }, (_, i) => {
    const hash = (walletId.charCodeAt(0) + i * 7) % 3;
    return hash > 0;
  });

  return (
    <div
      className="grid size-28 grid-cols-8 gap-0.5 rounded-lg border border-border bg-background p-2 sm:size-32"
      aria-hidden
    >
      {cells.map((filled, index) => (
        <div
          key={`${walletId}-${index}`}
          className={filled ? "rounded-sm bg-foreground" : "rounded-sm bg-muted"}
        />
      ))}
    </div>
  );
}

export function DonateSectionClient({ lang, links }: DonateSectionClientProps) {
  const { donationIban, donationStripeUrl, donationBuyMeACoffeeUrl, donationPaypalUrl } =
    links;

  return (
    <section id="donate" className="bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t(donateCopy.title, lang)}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t(donateCopy.subtitle, lang)}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">{t(donateCopy.bankTitle, lang)}</CardTitle>
              <CardDescription>{t(donateCopy.bankHint, lang)}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="rounded-lg border border-dashed border-border bg-muted/50 p-4">
                <p className="font-mono text-sm leading-relaxed break-all text-foreground sm:text-base">
                  {donationIban}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {t(donateCopy.oneTime, lang)}
                </span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {t(donateCopy.regular, lang)}
                </span>
              </div>
              <CopyButton
                value={donationIban}
                label={t(donateCopy.copy, lang)}
                copiedLabel={t(donateCopy.copied, lang)}
              />
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">{t(donateCopy.onlineTitle, lang)}</CardTitle>
              <CardDescription>{t(donateCopy.subtitle, lang)}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Button
                nativeButton={false}
                variant="outline"
                className="h-11 w-full justify-start gap-3"
                disabled={!donationStripeUrl}
                render={
                  <Link
                    href={donationStripeUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <CreditCardIcon className="size-4 text-primary" />
                Stripe
              </Button>

              {donationBuyMeACoffeeUrl ? (
                <div className="flex justify-center rounded-lg border border-border bg-background py-3">
                  <BuyMeACoffeeButton href={donationBuyMeACoffeeUrl} />
                </div>
              ) : null}

              <Button
                nativeButton={false}
                variant="outline"
                className="h-11 w-full justify-start gap-3"
                disabled={!donationPaypalUrl}
                render={
                  <Link
                    href={donationPaypalUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <WalletIcon className="size-4 text-primary" />
                PayPal
              </Button>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">{t(donateCopy.cryptoTitle, lang)}</CardTitle>
              <CardDescription>{t(donateCopy.cryptoDialogDesc, lang)}</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger
                  render={
                    <Button variant="default" className="h-11 w-full">
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
                    {cryptoWallets.map((wallet) => (
                      <li key={wallet.id} className="flex flex-col items-center gap-3 text-center">
                        <MockQrCode walletId={wallet.id} />
                        <p className="text-xs font-medium text-foreground">{wallet.label}</p>
                        <p className="font-mono text-[10px] text-muted-foreground break-all">
                          {wallet.id}…mock-address
                        </p>
                      </li>
                    ))}
                  </ul>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
