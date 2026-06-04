/** Public URLs and payment details from environment variables. */
export function getSiteLinks() {
  return {
    joinFormUrl: process.env.JOIN_FORM_URL ?? "",
    donationIban: process.env.DONATION_IBAN ?? "",
    donationStripeUrl: process.env.DONATION_STRIPE_URL ?? "",
    donationBuyMeACoffeeUrl: process.env.DONATION_BUYMEACOFFEE_URL ?? "",
    donationPaypalUrl: process.env.DONATION_PAYPAL_URL ?? "",
  };
}

export type SiteLinks = ReturnType<typeof getSiteLinks>;
