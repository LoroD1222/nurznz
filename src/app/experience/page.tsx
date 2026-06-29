import type { Metadata } from "next";
import Image from "next/image";
import { CardGrid, CtaBand, InnerPageShell } from "@/components/site/inner-page";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionLabel } from "@/components/home/home-page";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Zanzibar Experiences | NUR Zanzibar";
const description =
  "Browse short Zanzibar activities for partner sales, including marine, nature, culture and full-day group experiences.";

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
    images: [{ url: "/assets/figma/activity-lagoon.jpg", width: 1200, height: 630, alt: "Zanzibar lagoon activity route" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/figma/activity-lagoon.jpg"] },
};

const cards = [
  {
    id: "mnemba",
    title: "Mnemba snorkelling",
    eyebrow: "Marine",
    body: "A clear half-day marine route for guests who want reef time, simple logistics and a dependable pickup flow.",
    image: "/assets/figma/activity-fish.jpg",
    alt: "Tropical fish in clear water near Mnemba",
  },
  {
    id: "stone-town",
    title: "Stone Town walk",
    eyebrow: "Culture",
    body: "A compact guided route through Zanzibar history, markets and streets for hotel guests with limited time.",
    image: "/assets/figma/cta-sunset.png",
    alt: "Warm Zanzibar evening scene connected to culture experiences",
  },
  {
    id: "spice-farm",
    title: "Spice farm visit",
    eyebrow: "Nature",
    body: "A sensory short trip for families, groups and agent itineraries that need a softer inland activity.",
    image: "/assets/figma/activity-monkey.jpg",
    alt: "Zanzibar forest wildlife near nature activity routes",
  },
  {
    id: "safari-blue",
    title: "Safari Blue day",
    eyebrow: "Coast",
    body: "A full-day coastal experience with partner-ready route notes, timings and guest communication.",
    image: "/assets/figma/activity-lagoon.jpg",
    alt: "Turquoise Zanzibar coastal lagoon",
  },
];

export default function ExperiencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${SITE_URL}/experience`,
    hasPart: cards.map((card) => ({
      "@type": "TouristTrip",
      name: card.title,
      description: card.body,
      image: `${SITE_URL}${card.image}`,
    })),
  };

  return (
    <>
      <InnerPageShell
        overline="Zanzibar Activity & Snorkelling"
        title="Mnemba Reef Snorkelling"
        description="Half-day and full-day island experiences operated for hotels, DMCs, agents and travel partners who need dependable local activity supply."
        image="/assets/figma/activity-fish.jpg"
        imageAlt="Tropical fish at Mnemba reef in Zanzibar"
      >
      <section className="px-5 py-[54px] sm:px-8 lg:px-0">
        <div className="mx-auto grid max-w-[1136px] gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <SectionLabel>Trip</SectionLabel>
            <h2 className="type-h2 mt-5 text-teal">What to know before you book</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Pickup and timing", "Swim level", "Reef and privacy", "Guide, towels, gear"].map((item) => (
                <div key={item} className="rounded-[8px] border border-[#e3d7c6] bg-cream p-4 text-[15px] font-bold text-teal">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[360px] overflow-hidden rounded-[12px]">
            <Image
              src="/assets/figma/activity-fish.jpg"
              alt="Bright tropical fish in clear Zanzibar water"
              fill
              sizes="(min-width: 768px) 620px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-5 py-[66px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <SectionLabel>Activity Catalogue</SectionLabel>
          <h2 className="type-h2 mt-5 mb-8 text-teal">Other Exciting Zanzibar Activities We Offer</h2>
          <CardGrid cards={cards} />
        </div>
      </section>
      <CtaBand
        title="Need a route matched to guest timing?"
        body="Send the pickup area, group size and preferred activity style. NUR will confirm suitable options and operational notes."
      />
      </InnerPageShell>
      <JsonLd data={jsonLd} />
    </>
  );
}
