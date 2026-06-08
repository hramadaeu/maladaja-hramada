/** Public URLs, payment details, and crypto wallet addresses from environment variables. */
export function getSiteLinks() {
  return {
    joinFormUrl: process.env.JOIN_FORM_URL ?? "",
    donationIban: process.env.DONATION_IBAN ?? "",
    donationBuyMeACoffeeUrl: process.env.DONATION_BUYMEACOFFEE_URL ?? "",
    donationWallets: {
      btc: process.env.DONATION_BTC_ADDRESS ?? "",
      eth: process.env.DONATION_ETH_ADDRESS ?? "",
      usdt: process.env.DONATION_USDT_TRC20_ADDRESS ?? "",
    },
  };
}

export type SiteLinks = ReturnType<typeof getSiteLinks>;
