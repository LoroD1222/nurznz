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
  ["Duration and pickup window", "Share hotel area and preferred timing before availability is confirmed."],
  ["Guest suitability", "Best for guests who are comfortable in open water with guided support."],
  ["Inclusions and exclusions", "Route timing depends on sea state, tide and conservation-area rules."],
  ["Private or shared options", "Swimwear, sun protection, towel and a dry change for the return."],
];

const activities = [
  ["/assets/figma/activity-fish.jpg", "Marine", "Mnemba snorkelling", "3-4h", "Tropical fish at Mnemba Reef"],
  ["/assets/figma/activity-monkey.jpg", "Nature", "Jozani forest walk", "4h", "Zanzibar forest wildlife"],
  ["/assets/figma/cta-sunset.png", "Culture", "Stone Town route", "3h", "Warm Zanzibar cultural evening"],
  ["/assets/figma/activity-elephant.jpg", "Wildlife", "Safari extension", "1 day", "Safari wildlife extension"],
];

function FactIcon({ index }: { index: number }) {
  const icons = [
    <path key="pickup" d="M5 15h10l1.5-4.5H3.5L5 15Zm1.2 0a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm7.6 0a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM5.5 10.5V6h7.8l2.3 4.5" />,
    <path key="time" d="M10 3.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 3.2V10l2.4 1.6" />,
    <path key="swim" d="M3 12.5c1.4-1.1 2.7-1.1 4.1 0s2.7 1.1 4.1 0 2.7-1.1 4.1 0M5 8.5l3-3 4.5 4.5M12.5 5.5a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z" />,
    <path key="guide" d="M10 3.2 4.5 5.4v4.2c0 3.3 2.2 6.3 5.5 7.2 3.3-.9 5.5-3.9 5.5-7.2V5.4L10 3.2Zm-2.4 7 1.5 1.5 3.3-3.4" />,
  ];

  return (
    <span className="grid size-[36px] shrink-0 place-items-center rounded-full bg-[#e6f4ef] text-[#006c67]">
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        >
          {icons[index] ?? icons[0]}
        </g>
      </svg>
    </span>
  );
}

function CircleArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      type="button"
      className="grid size-[36px] place-items-center rounded-full bg-coral text-white shadow-[0_8px_16px_rgba(15,31,28,0.12)]"
      aria-label={`Gallery ${direction} arrow`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d={direction === "left" ? "M11 4 6 9l5 5M6.8 9H14" : "m7 4 5 5-5 5M11.2 9H4"}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}

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
              {highlights.map(([heading, body], index) => (
                <div
                  key={heading}
                  className="flex gap-3 rounded-[8px] border border-[#eadfce] bg-cream p-4"
                >
                  <FactIcon index={index} />
                  <div>
                    <h2 className="text-[14px] font-extrabold text-teal">
                      {heading}
                    </h2>
                    <p className="mt-1 text-[13px] leading-5 text-muted-copy">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Ask about this trip</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="tel:+255000000000">+255 555 144 222</Link>
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
              <div className="absolute bottom-4 right-4 flex gap-3">
                <CircleArrow direction="left" />
                <CircleArrow direction="right" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["/assets/figma/activity-fish.jpg", "/assets/figma/activity-fish.jpg", "/assets/figma/activity-fish.jpg"].map((src, index) => (
                <div key={`${src}-${index}`} className="relative h-[92px] overflow-hidden rounded-[6px]">
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
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-coral text-white">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path
                        d="M2.2 5.1 4 6.8 7.8 3"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </span>
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
          <div className="mt-2 flex justify-end gap-3">
            <CircleArrow direction="left" />
            <CircleArrow direction="right" />
          </div>
        </div>
      </section>
      <SiteFooter />
      <JsonLd data={jsonLd} />
    </main>
  );
}
