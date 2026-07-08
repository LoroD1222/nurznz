import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionLabel, SiteFooter, SiteHeader } from "@/components/home/home-page";
import { Button } from "@/components/ui/button";
import { PESAPAL_PAYMENT_URL, SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Online Payment | NUR Zanzibar";
const description =
  "Pay NUR Zanzibar online through the official PesaPal payment link for confirmed Zanzibar activity bookings and deposits.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/payment" },
  openGraph: {
    title,
    description,
    url: "/payment",
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/assets/figma/cta-image-home-clean.webp",
        width: 1200,
        height: 630,
        alt: "Guests and a local guide on a Zanzibar boat activity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/figma/cta-image-home-clean.webp"],
  },
};

const paymentNotes = [
  "Use this link after your trip, date, pickup area and total amount have been confirmed.",
  "Keep your booking name or WhatsApp contact available when completing payment.",
  "Send the payment confirmation back to NUR ZANZIBAR TOURS so the team can match it to your activity booking.",
];

export default function PaymentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}/payment`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <main className="bg-white">
      <SiteHeader />
      <section className="relative overflow-hidden bg-teal px-5 py-[76px] sm:px-8 lg:px-0">
        <Image
          src="/assets/figma/cta-image-home-clean.webp"
          alt="Zanzibar guests preparing for a local activity"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(82deg,rgba(17,62,60,0.96)_8%,rgba(17,62,60,0.72)_55%,rgba(17,62,60,0.2)_100%)]" />
        <div className="relative mx-auto grid max-w-[1136px] gap-8 lg:grid-cols-[1fr_390px] lg:items-center">
          <div>
            <SectionLabel>Secure Payment</SectionLabel>
            <h1 className="type-display mt-5 max-w-[690px] text-white">
              Pay NUR Zanzibar online
            </h1>
            <p className="mt-5 max-w-[650px] text-[18px] font-medium leading-8 text-white/82 sm:text-[20px]">
              Use the official NUR Zanzibar PesaPal store link for confirmed
              activity payments, deposits and booking balances.
            </p>
            <div className="mt-7 flex flex-wrap gap-[17px]">
              <Button asChild size="wide">
                <Link
                  href={PESAPAL_PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay with PesaPal
                </Link>
              </Button>
              <Button asChild variant="secondary-dark">
                <Link href="/contact">Ask before paying</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[10px] border border-white/20 bg-white/95 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
            <p className="text-[13px] font-bold uppercase leading-5 tracking-[3px] text-coral">
              Official payment link
            </p>
            <h2 className="mt-3 text-[28px] font-extrabold leading-[34px] text-teal">
              PesaPal store
            </h2>
            <p className="mt-4 text-[15px] leading-6 text-muted-copy">
              This button opens the NUR Zanzibar payment page on PesaPal in a
              new tab.
            </p>
            <Link
              href={PESAPAL_PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block break-words text-[14px] font-semibold leading-6 text-teal"
            >
              store.pesapal.com/nurzanzitours
            </Link>
            <Button asChild className="mt-6 h-12 w-full rounded-[7px]">
              <Link
                href={PESAPAL_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue to payment
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <SectionLabel>Before You Pay</SectionLabel>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {paymentNotes.map((note, index) => (
              <article
                key={note}
                className="min-h-[146px] rounded-[8px] border border-[rgba(17,62,60,0.12)] bg-cream p-6"
              >
                <span className="grid size-9 place-items-center rounded-full bg-coral text-[16px] font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-5 text-[16px] leading-[25px] text-teal-deep">
                  {note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
      <JsonLd data={jsonLd} />
    </main>
  );
}
