const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nurznz.com";

export const SITE_URL = rawSiteUrl.replace(/\/$/, "");
export const SITE_NAME = "NUR Zanzibar";
export const SITE_DESCRIPTION =
  "Zanzibar-based activity supply for short trips, day experiences and partner-ready local operations.";
export const PESAPAL_PAYMENT_URL = "https://store.pesapal.com/nurzanzitours";
