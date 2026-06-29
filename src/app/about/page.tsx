import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, InnerPageShell } from "@/components/site/inner-page";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionLabel } from "@/components/home/home-page";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "About NUR Zanzibar | Local Activity Operations";
const description =
  "Learn about NUR Zanzibar, a local activity supply partner for hotels, DMCs, travel agents and guest experience teams.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/assets/figma/cta-boat.png", width: 1200, height: 630, alt: "NUR Zanzibar guests and local guide on a boat" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/figma/cta-boat.png"] },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: title,
    description,
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <InnerPageShell
        overline="About NUR Zanzibar"
        title="Local Zanzibar operators behind partner-ready activities"
        description="For direct travellers, hotels, DMCs and agencies, NUR supports short Zanzibar activity supply with clear coordination and guest-ready operations."
        image="/assets/figma/cta-boat.png"
        imageAlt="Guests and a local guide during a Zanzibar boat activity"
        aside={
          <div className="space-y-4">
            <div className="relative h-[210px] overflow-hidden rounded-[10px] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
              <Image
                src="/assets/figma/hero-beach.png"
                alt="Zanzibar sea route used by local activity operators"
                fill
                sizes="360px"
                className="object-cover"
              />
            </div>
            <div className="rounded-[10px] bg-[rgba(17,62,60,0.9)] p-5 text-white">
              <SectionLabel>Partner-ready operations</SectionLabel>
              <h2 className="mt-3 text-[21px] font-extrabold leading-[28px]">
                Local guide and guest handoff
              </h2>
              <p className="mt-2 text-[13px] leading-5 text-white/70">
                The whole experience runs with practical local support, route
                timing and pickup coordination.
              </p>
            </div>
          </div>
        }
      >
      <section className="bg-cream px-5 py-[66px] sm:px-8 lg:px-0">
        <div className="mx-auto grid max-w-[1136px] gap-10 md:grid-cols-[1fr_420px] md:items-center">
          <div>
            <SectionLabel>Local Supply</SectionLabel>
            <h2 className="mt-5 text-[34px] font-extrabold leading-[42px] text-teal sm:text-[42px] sm:leading-[50px]">
              Built for agencies, hotels and DMC teams
            </h2>
            <p className="mt-5 text-[17px] leading-[28px] text-muted-copy">
              The operation focuses on dependable Zanzibar short trips:
              marine routes, forest and spice experiences, culture walks and
              private group activity support. Partner teams get clear
              descriptions, timings, pickup notes and local answers before
              guests commit.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Daily ops", "Partner rates", "Private groups"].map((item) => (
                <div key={item} className="rounded-[8px] bg-white p-5 text-[18px] font-bold text-teal">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[12px]">
            <Image
              src="/assets/figma/activity-lagoon.jpg"
              alt="Zanzibar coastal water used for guest activity planning"
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px] text-center">
          <SectionLabel>Built from local guiding</SectionLabel>
          <h2 className="type-h2 mx-auto mt-5 max-w-[720px] text-teal">
            Built from local guiding, coordination and partner trust
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-[28px] text-muted-copy">
            NUR grew from hands-on Zanzibar operations: route timing, supplier
            handling, guest briefings and partner coordination. The offer today
            packages that local knowledge for teams who need dependable short
            activities.
          </p>
          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {["Local Zanzibar knowledge", "Short activities easy to sell", "Reliable guest handoff", "Partner-ready operations"].map((item) => (
              <article key={item} className="rounded-[8px] bg-cream p-5 text-left text-[16px] font-bold text-teal">
                {item}
              </article>
            ))}
          </div>
          <h3 className="mt-12 text-[24px] font-extrabold leading-[30px] text-teal">
            Why partners trust NUR?
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              "Local Zanzibar knowledge",
              "Short activities easy to sell",
              "Reliable guest handoff",
              "Partner-ready operations",
            ].map((item) => (
              <article key={`trust-${item}`} className="rounded-[8px] bg-white p-5 text-left text-[15px] font-bold text-teal shadow-[0_8px_24px_rgba(15,31,28,0.05)]">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <SectionLabel>Past trip proof</SectionLabel>
          <h2 className="type-h2 mt-5 text-teal">Proof from past Zanzibar experiences</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[320px] overflow-hidden rounded-[12px]">
              <Image
                src="/assets/figma/activity-lagoon.jpg"
                alt="Past Zanzibar coastal group experience"
                fill
                sizes="(min-width: 768px) 650px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["/assets/figma/cta-boat.png", "Guests on a Zanzibar boat activity"],
                ["/assets/figma/activity-monkey.jpg", "Forest activity wildlife in Zanzibar"],
                ["/assets/figma/activity-fish.jpg", "Snorkelling reef fish in Zanzibar"],
                ["/assets/figma/cta-sunset.png", "Zanzibar sunset experience"],
              ].map(([src, alt]) => (
                <div key={src} className="relative min-h-[148px] overflow-hidden rounded-[8px]">
                  <Image src={src} alt={alt} fill sizes="240px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <SectionLabel>Operational values</SectionLabel>
          <h2 className="type-h2 mt-5 text-teal">
            Simple behaviours partners can rely on
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Close timing", "Pickup windows, trip duration and day plans are shaped around the partner or guest flow."],
              ["Flexible local guides", "Local routing knowledge supports last-minute coordination and practical guest handling."],
              ["Partner communication", "Clear answers keep product teams, hotel desks and guests aligned."],
            ].map(([heading, body]) => (
              <article key={heading} className="border-l-4 border-coral bg-cream p-5">
                <h3 className="text-[18px] font-bold text-teal">{heading}</h3>
                <p className="mt-2 text-[15px] leading-[23px] text-muted-copy">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Looking for a dependable Zanzibar activity partner?"
        body="Ask about activity supply, route notes, seasonal operations and partner terms."
      />
      </InnerPageShell>
      <JsonLd data={jsonLd} />
    </>
  );
}
