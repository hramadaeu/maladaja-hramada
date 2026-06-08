import QRCode from "qrcode";

import { getSiteLinks } from "@/config/site-links";
import { cryptoWallets } from "@/lib/dictionaries/donate";

import { DonateSectionClient } from "./donate-client";

type DonateSectionProps = {
  lang: string;
};

export async function DonateSection({ lang }: DonateSectionProps) {
  const links = getSiteLinks();

  // Pre-generate QR code SVGs server-side for each wallet.
  // The bare address is encoded; modern wallets auto-detect the network from
  // the address format (bc1… → BTC, 0x… → ETH, T… → TRC20).
  const qrCodes: Record<string, string> = {};
  for (const wallet of cryptoWallets) {
    const address = links.donationWallets[wallet.id];
    if (!address) {
      continue;
    }
    try {
      qrCodes[wallet.id] = await QRCode.toString(address, {
        type: "svg",
        margin: 1,
        errorCorrectionLevel: "M",
        color: { dark: "#1e1e1c", light: "#ffffff" },
      });
    } catch {
      qrCodes[wallet.id] = "";
    }
  }

  return <DonateSectionClient lang={lang} links={links} qrCodes={qrCodes} />;
}
