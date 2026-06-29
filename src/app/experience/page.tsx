import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionLabel, SiteFooter, SiteHeader } from "@/components/home/home-page";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Mnemba Reef Snorkelling | NUR Zanzibar";
const description =
  "Mnemba Reef snorkelling and other short Zanzibar activities for hotels, DMCs, agents and direct activity enquiries.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/experience" },
  openGraph: {
    title,
    description,
    url: "/experience",
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/assets/figma/activity-fish.jpg",
        width: 1200,
        height: 630,
        alt: "Tropical fish at Mnemba Reef in Zanzibar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/figma/activity-fish.jpg"],
  },
};

const highlights = [
  ["Pickup", "Hotel or meeting point"],
  ["Duration", "Half-day slots"],
  ["Swim level", "Suitable for beginners"],
  ["Guide", "Local boat, towels, gear"],
];

const infoItems = [
  ["Number and pickup window", "Share hotel area and preferred timing before availability is confirmed."],
  ["Swim suitability", "Best for guests who are comfortable in open water with guided support."],
  ["Reef visibility", "Route timing depends on sea state, tide and conservation-area rules."],
  ["What to bring", "Swimwear, sun protection, towel and a dry change for the return."],
];

const activities = [
  ["/assets/figma/activity-fish.jpg", "Marine", "Mnemba snorkelling", "3-4h", "Tropical fish at Mnemba Reef"],
  ["/assets/figma/activity-monkey.jpg", "Nature", "Jozani forest walk", "4h", "Zanzibar forest wildlife"],
  ["/assets/figma/cta-sunset.png", "Culture", "Stone Town route", "3h", "Warm Zanzibar cultural evening"],
  ["/assets/figma/activity-elephant.jpg", "Wildlife", "Safari extension", "1 day", "Safari wildlife extension"],
];

export default function ExperiencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Mnemba Reef Snorkelling",
    description,
    image: `${SITE_URL}/assets/figma/activity-fish.jpg`,
    url: `${SITE_URL}/experience`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <main className="bg-white">
      <SiteHeader />
      <section className="px-5 py-[54px] sm:px-8 lg:px-0">
        <div className="mx-auto grid max-w-[1136px] gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-start">
          <div className="pt-2">
            <SectionLabel>Zanzibar Activity & Snorkelling</SectionLabel>
            <h1 className="mt-4 max-w-[470px] text-[42px] font-extrabold leading-[46px] text-teal-deep sm:text-[56px] sm:leading-[60px]">
              Mnemba Reef Snorkelling
            </h1>
            <p className="mt-5 max-w-[472px] text-[17px] leading-[27px] text-muted-copy">
              Half-day and full-day island experiences operated for hotels,
              DMCs, agents and travel partners who need dependable local
              activity supply.
            </p>
            <div className="mt-7 grid max-w-[430px] grid-cols-2 gap-3">
              {highlights.map(([heading, body]) => (
                <div
                  key={heading}
                  className="rounded-[8px] border border-[#eadfce] bg-cream p-4"
                >
                  <h2 className="text-[14px] font-extrabold text-teal">
                    {heading}
                  </h2>
                  <p className="mt-1 text-[13px] leading-5 text-muted-copy">
                    {body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Ask about this trip</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/partners#rates">Agent STO terms</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="relative h-[310px] overflow-hidden rounded-[8px]">
              <Image
                src="/assets/figma/activity-fish.jpg"
                alt="Tropical fish in clear water at Mnemba Reef"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["/assets/figma/activity-fish.jpg", "/assets/figma/activity-lagoon.jpg", "/assets/figma/hero-beach.png"].map((src, index) => (
                <div key={src} className="relative h-[92px] overflow-hidden rounded-[6px]">
                  <Image
                    src={src}
                    alt={`Mnemba snorkelling gallery image ${index + 1}`}
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-[54px] sm:px-8 lg:px-0">
        <div className="relative mx-auto grid min-h-[286px] max-w-[1136px] overflow-hidden rounded-[10px] bg-teal lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 p-8 sm:p-12">
            <SectionLabel>Must have information</SectionLabel>
            <h2 className="mt-4 max-w-[420px] text-[34px] font-extrabold leading-[40px] text-white">
              What to know before you book
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {infoItems.map(([heading, body]) => (
                <article key={heading} className="flex gap-3 text-white">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-coral" />
                  <div>
                    <h3 className="text-[15px] font-bold">{heading}</h3>
                    <p className="mt-1 text-[13px] leading-5 text-white/65">
                      {body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Partner rates</Link>
              </Button>
              <Button asChild variant="secondary-dark">
                <Link href="/experience">Open Trips</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[260px]">
            <Image
              src="/assets/figma/activity-lagoon.jpg"
              alt="Blue Zanzibar water and reef activity conditions"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
            />
            <Image
              src="/assets/figma/map-coral-cta.svg"
              alt="Coral silhouette map of Zanzibar"
              width={156}
              height={305}
              className="absolute bottom-[-30px] left-[-60px] w-[150px]"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-[54px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <SectionLabel>Activity Catalogue</SectionLabel>
          <h2 className="mt-4 text-[36px] font-extrabold leading-[44px] text-teal">
            Other Exciting Zanzibar Activities We Offer
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {activities.map(([src, category, cardTitle, duration, alt]) => (
              <article
                key={cardTitle}
                className="rounded-[9px] border border-[rgba(17,62,60,0.08)] bg-cream p-2 shadow-[0_2px_22px_rgba(0,0,0,0.04)]"
              >
                <div className="relative h-[154px] overflow-hidden rounded-[6px]">
                  <Image src={src} alt={alt} fill sizes="260px" className="object-cover" />
                  <span className="absolute right-2 top-2 rounded-full bg-coral px-3 py-1 text-[12px] font-bold text-white">
                    {duration}
                  </span>
                </div>
                <p className="mt-2 text-[12px] font-black uppercase tracking-[3px] text-coral">
                  {category}
                </p>
                <h3 className="mt-1 text-[20px] font-extrabold leading-[25px] text-teal">
                  {cardTitle}
                </h3>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-[720px] text-[15px] leading-6 text-muted-copy">
            The Home page should show breadth quickly. This rail can scroll
            horizontally and expose more products without making the section
            feel heavy.
          </p>
        </div>
      </section>
      <SiteFooter />
      <JsonLd data={jsonLd} />
    </main>
  );
}
