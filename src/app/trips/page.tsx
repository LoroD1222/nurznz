import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionLabel, SiteFooter, SiteHeader } from "@/components/home/home-page";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { trips } from "@/lib/trips";

const title = "Zanzibar Trips & Activities | NUR Zanzibar";
const description =
  "Browse NUR Zanzibar short trips, marine activities, culture routes and private group options for guests and travel partners.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/trips" },
  openGraph: {
    title,
    description,
    url: "/trips",
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/assets/figma/hero-beach.png",
        width: 1200,
        height: 630,
        alt: "Zanzibar beach and boats for NUR Zanzibar activity trips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/figma/hero-beach.png"],
  },
};

export default function TripsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    url: `${SITE_URL}/trips`,
    itemListElement: trips.map((trip, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristTrip",
        name: trip.title,
        description: trip.excerpt,
        image: `${SITE_URL}${trip.image}`,
        url: `${SITE_URL}${trip.href}`,
      },
    })),
  };

  return (
    <main className="bg-white">
      <SiteHeader />
      <section className="relative overflow-hidden bg-teal px-5 py-[70px] sm:px-8 lg:px-0">
        <Image
          src="/assets/figma/hero-beach.png"
          alt="Zanzibar beach with turquoise water and boats"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_48%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(82deg,rgba(17,62,60,0.94)_6%,rgba(17,62,60,0.58)_52%,rgba(17,62,60,0.1)_100%)]" />
        <div className="relative mx-auto max-w-[1234px]">
          <SectionLabel>Activity Catalogue</SectionLabel>
          <h1 className="mt-5 max-w-[720px] text-[42px] font-extrabold leading-[50px] text-white sm:text-[58px] sm:leading-[68px]">
            Zanzibar trips ready for guests and partners
          </h1>
          <p className="mt-5 max-w-[680px] text-[18px] font-medium leading-8 text-white/80 sm:text-[20px]">
            Browse short marine, culture, nature and group activities that can
            be sold directly or packaged for hotel, DMC and agent workflows.
          </p>
        </div>
      </section>

      <section className="px-5 py-[62px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1234px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {trips.map((trip) => (
              <article
                key={trip.title}
                className="rounded-[10px] border border-[rgba(17,62,60,0.1)] bg-cream p-[9px] shadow-[0_2px_26px_rgba(0,0,0,0.04)]"
              >
                <Link href={trip.href} className="block">
                  <div className="relative h-[174px] overflow-hidden rounded-[7px]">
                    <Image
                      src={trip.image}
                      alt={trip.alt}
                      fill
                      sizes="(min-width: 1280px) 285px, (min-width: 768px) 45vw, 90vw"
                      className="object-cover transition-transform duration-300 hover:scale-[1.04]"
                    />
                    <span
                      className={`absolute right-3 top-3 flex h-7 min-w-[68px] items-center justify-center rounded-full px-3 text-[12px] font-bold leading-4 ${trip.durationClass ?? "bg-coral text-white"}`}
                    >
                      {trip.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] font-bold uppercase leading-5 tracking-[3px] text-coral">
                    {trip.category}
                  </p>
                  <h2 className="mt-1 text-[23px] font-extrabold leading-[29px] text-teal-deep">
                    {trip.title}
                  </h2>
                  <p className="mt-3 min-h-[69px] text-[15px] leading-[23px] text-muted-copy">
                    {trip.excerpt}
                  </p>
                </Link>
                <Button asChild variant="secondary" className="mt-5">
                  <Link href={trip.href}>View trip</Link>
                </Button>
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
