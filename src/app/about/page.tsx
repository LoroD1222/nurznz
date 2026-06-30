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
        image="/assets/figma/about-hero-bg.png"
        imageAlt="Local Zanzibar guide operation with coastal activity background"
        proofs={["10+ years experience", "2,400+ guests hosted", "3-4h and day trips", "Zanzibar-based team"]}
        aside={
          <div className="relative h-[383px] overflow-hidden rounded-[10px] border border-white/20 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <Image
              src="/assets/figma/about-hero-card.png"
              alt="Local guide and guest activity handoff"
              fill
              priority
              sizes="412px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(17,62,60,0.82)]" />
            <div className="absolute bottom-6 left-7 right-7 text-white">
              <SectionLabel>Partner-ready operations</SectionLabel>
              <h2 className="mt-2 text-[24px] font-extrabold leading-[28px]">
                Local guide and guest handoff
              </h2>
              <p className="mt-2 text-[13px] leading-5 text-white/80">
                Clear pickup windows, local guide coordination and same-day
                activity support.
              </p>
            </div>
          </div>
        }
      >
      <section className="bg-cream px-5 py-[72px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <div className="relative mx-auto grid max-w-[1052px] items-center gap-4 md:grid-cols-[0.8fr_1.2fr_0.8fr]">
            <div className="relative h-[298px] overflow-hidden rounded-[10px] md:translate-y-10">
              <Image
                src="/assets/figma/about-collage-left.png"
                alt="Zanzibar local activity guest moment"
                fill
                sizes="360px"
                className="object-cover"
              />
            </div>
            <div className="relative z-10 h-[365px] overflow-hidden rounded-[10px] shadow-[0_16px_38px_rgba(15,31,28,0.14)]">
              <Image
                src="/assets/figma/about-collage-main.png"
                alt="Guests and local team during Zanzibar operations"
                fill
                sizes="540px"
                className="object-cover"
              />
            </div>
            <div className="relative h-[298px] overflow-hidden rounded-[10px] md:translate-y-10">
              <Image
                src="/assets/figma/about-collage-right.png"
                alt="Zanzibar activity support and beach operations"
                fill
                sizes="360px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mx-auto mt-14 max-w-[858px] text-center">
            <h2 className="mx-auto max-w-[620px] text-[38px] font-extrabold leading-[46px] text-teal sm:text-[44px]">
              Built from local guiding, coordination and partner trust
            </h2>
            <p className="mt-[26px] text-[16px] leading-[26px] text-muted-copy">
              NUR grew from hands-on Zanzibar operations: Stone Town walks,
              spice farms, marine trips, hotel pickups, guest handling and
              guide coordination. The offer today packages that local knowledge
              for partners who need dependable 3-4 hour activities and day
              trips that are easy to sell and simple to operate.
            </p>
            <p className="mx-auto mt-[26px] max-w-[799px] text-[15px] leading-6 text-muted-copy">
              The tone stays warm and local, but the service model is
              trade-ready: clear timings, responsive communication and reliable
              guest handoffs from enquiry through pickup.
            </p>
            <div className="mx-auto mt-[26px] grid max-w-[590px] grid-cols-2 rounded-[8px] border border-[rgba(0,108,103,0.1)] bg-white/80 px-5 py-3 sm:grid-cols-4">
              {[
                ["10+", "years"],
                ["2,400+", "guests"],
                ["18", "destinations"],
                ["3-4h", "trips"],
              ].map(([value, label]) => (
                <div key={value} className="text-left">
                  <p className="text-[21px] font-bold leading-[26px] text-[#006c67]">
                    {value}
                  </p>
                  <p className="text-[12px] font-medium leading-4 text-muted-copy">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px] text-center">
          <h2 className="text-[40px] font-extrabold leading-[40px] text-teal">
            Why partners trust NUR?
          </h2>
          <div className="mt-[63px] grid gap-3 md:grid-cols-4">
            {[
              ["Local Zanzibar knowledge", "Guides and coordinators who know Stone Town, spice farms, reefs and hotel pickup realities."],
              ["Short activities easy to sell", "Clear pickup details, guide names and partner communication before guests move."],
              ["Reliable guest handoff", "Half-day and day-trip formats that fit concierge desks, agents and in-destination upsell."],
              ["Partner-ready operations", "Rates, private options, white-label support and practical availability handling."],
            ].map(([heading, body]) => (
              <article key={heading} className="min-h-[152px] rounded-[8px] border border-[rgba(0,108,103,0.1)] bg-white p-6 text-left shadow-[0_10px_12px_rgba(10,33,32,0.08)]">
                <h3 className="text-[18px] font-bold leading-[23px] text-teal">{heading}</h3>
                <p className="mt-3 text-[14px] leading-[21px] text-muted-copy">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-[42px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px] text-center">
          <h2 className="text-[13px] font-black uppercase leading-[18px] tracking-[4px] text-teal-deep">
            What agencies are we working with?
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-9">
            {[
              ["/assets/figma/partner-logo-wish.jpg", "WISH partner logo"],
              ["/assets/figma/partner-logo-breakthrough.png", "Breakthrough ACTION partner logo"],
              ["/assets/figma/partner-logo-unicef.png", "UNICEF partner logo"],
              ["/assets/figma/partner-logo-dtree.png", "D-tree partner logo"],
            ].map(([src, alt]) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={138}
                height={58}
                className="max-h-[58px] w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <SectionLabel>Past trip proof</SectionLabel>
          <h2 className="type-h2 mt-5 text-teal">Proof from past Zanzibar experiences</h2>
          <p className="mt-4 max-w-[620px] text-[16px] leading-[25px] text-muted-copy">
            Use the existing depth of the activity archive as credibility
            without turning the About page into a long image dump.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {["Marine", "Culture", "Spice", "Groups"].map((item, index) => (
              <span
                key={item}
                className={`rounded-full px-5 py-2 text-[13px] font-semibold ${
                  index === 0
                    ? "bg-[#006c67] text-white"
                    : "border border-[rgba(0,108,103,0.2)] bg-white/80 text-[#006c67]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-[600px_1fr]">
            <div className="relative min-h-[300px] overflow-hidden rounded-[10px]">
              <Image
                src="/assets/figma/proof-marine.png"
                alt="Marine, culture and group operations"
                fill
                sizes="600px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[rgba(21,59,58,0.45)] px-7 py-5 text-[17px] font-semibold leading-[26px] text-white">
                Marine, culture and group operations
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-2">
              {[
                ["/assets/figma/proof-stone-town.png", "Stone Town"],
                ["/assets/figma/proof-spice.png", "Spice farm"],
                ["/assets/figma/proof-sandbank.png", "Prison island"],
                ["/assets/figma/proof-group-pickup.png", "Group pickup"],
                ["/assets/figma/proof-snorkling.png", "Snorkling"],
              ].map(([src, alt]) => (
                <div key={src} className="relative min-h-[140px] overflow-hidden rounded-[10px]">
                  <Image src={src} alt={alt} fill sizes="240px" className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(17,62,60,0.82)] to-transparent px-4 py-3 text-[13px] font-semibold text-white">
                    {alt}
                  </div>
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
        body="Hotels, DMCs, STOs and agents can discuss partner rates, white-label options and activity agreements with the NUR partner desk."
        image="/assets/figma/cta-boat.png"
        imageAlt="Guests on a Zanzibar boat activity with local guide"
      />
      </InnerPageShell>
      <JsonLd data={jsonLd} />
    </>
  );
}
