import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { InnerPageShell } from "@/components/site/inner-page";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionLabel } from "@/components/home/home-page";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Partner Rates & White-Label Supply | NUR Zanzibar";
const description =
  "Request Zanzibar activity partner rates, STO terms, white-label options and private group operations from NUR Zanzibar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/partners" },
  openGraph: {
    title,
    description,
    url: "/partners",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/assets/figma/partner-logo-breakthrough.png", width: 1200, height: 630, alt: "NUR Zanzibar partner supply page" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/figma/hero-beach.png"] },
};

const partnerFeatures = [
  ["white-label", "White-Label Delivery", "Descriptions, route notes and guest flow can sit behind your own sales brand.", "#006c67"],
  ["groups", "Ready-to-Sell Activity Catalogue", "Custom group requests, shared departures and adjusted pickup windows are supported.", "#37c6c7"],
  ["rates", "STO partner rates", "Net rates and seasonal terms are available for active travel sellers.", "#e96855"],
];

const benefitCards = [
  ["/assets/figma/partner-white-label.svg", "White-Label Delivery", "Activities can be sold under the partner brand while NUR handles local guides, logistics and guest delivery."],
  ["/assets/figma/partner-ops-desk.svg", "Ready-to-Sell Activity Catalogue", "Concise product copy, inclusions, durations, images and partner notes for quick sales enablement."],
  ["/assets/figma/partner-sto-rates.svg", "Special Partner / STO Rates", "Net rates, repeat-volume terms and seasonal agreement options for hotels, DMCs, agents and STOs."],
  ["/assets/figma/partner-private-groups.svg", "Reliable Zanzibar Operations", "Pickup windows, timing checks, guide communication and fast same-day WhatsApp/email support."],
];

export default function PartnersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "White-label Zanzibar activity supply",
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Zanzibar",
    url: `${SITE_URL}/partners`,
  };

  return (
    <>
      <InnerPageShell
        overline="Wholesale & Group Partners"
        title="White-label Zanzibar activity partner for B2B travel sales"
        description="NUR operates reliable half-day and full-day activity supply for hotels, DMCs, agents, STOs and receptive brands."
        image="/assets/figma/hero-beach.png"
        imageAlt="Zanzibar beach used for partner activity supply"
        proofs={["3-4h & day trips", "STO rates", "White-label ready", "Zanzibar-based operations"]}
        aside={
          <div className="rounded-[10px] bg-[rgba(17,62,60,0.92)] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <SectionLabel>Partner Layer</SectionLabel>
            <h2 className="mt-4 text-[24px] font-extrabold leading-[30px]">
              Behind-the-scenes delivery for partner brands
            </h2>
            <p className="mt-3 text-[14px] leading-6 text-white/75">
              For hotels and agencies that want local activity supply without
              carrying the operational load.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-[13px] font-bold">
              <span className="rounded-[6px] bg-white/10 p-3">Net / STO rates</span>
              <span className="rounded-[6px] bg-white/10 p-3">White-label ops</span>
            </div>
            <Button asChild className="mt-5 w-full" size="wide">
              <Link href="#partner-enquiry">Request partner rates</Link>
            </Button>
          </div>
        }
      >
      <section className="relative bg-cream px-5 pb-[66px] pt-0 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <div className="relative z-10 -mt-[42px] mb-14 grid gap-4 md:grid-cols-2">
            {benefitCards.map(([icon, heading, body]) => (
              <article
                key={heading}
                className="flex gap-4 rounded-[8px] border border-[#e3d7c6] bg-white p-5 shadow-[0_10px_30px_rgba(15,31,28,0.08)]"
              >
                <Image src={icon} alt="" width={58} height={58} className="size-[58px] shrink-0" />
                <div>
                  <h2 className="text-[18px] font-extrabold leading-[24px] text-teal">
                    {heading}
                  </h2>
                  <p className="mt-2 text-[14px] leading-[22px] text-muted-copy">
                    {body}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mb-12 grid gap-5 md:grid-cols-[0.72fr_1fr]">
            <article className="rounded-[10px] bg-white p-7 shadow-[0_10px_30px_rgba(15,31,28,0.06)]">
              <SectionLabel>Contact NUR Zanzibar</SectionLabel>
              <h2 className="type-h2 mt-4 text-teal">Partner benefits</h2>
              <p className="mt-3 text-[16px] leading-[25px] text-muted-copy">
                Commercial terms, white-label delivery and local operations
                support for partners selling short Zanzibar activities.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="tel:+255555144222">+255 555 144 222</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                </Button>
              </div>
            </article>
            {["Behind-the-scenes delivery for partner brands", "Partner benefits"].map((heading, index) => (
              <article key={heading} className="rounded-[10px] bg-white p-7 shadow-[0_10px_30px_rgba(15,31,28,0.06)]">
                <SectionLabel>{index === 0 ? "Why it helps" : "Contract NUR Zanzibar"}</SectionLabel>
                <h2 className="type-h3 mt-4 text-teal">{heading}</h2>
                <p className="mt-3 text-[16px] leading-[25px] text-muted-copy">
                  {index === 0
                    ? "Your brand keeps the guest relationship while NUR handles routing, allocation, pickup timing and local supplier communication."
                    : "Commercial terms, activity descriptions and repeatable logistics are prepared for partner sales teams."}
                </p>
              </article>
            ))}
          </div>
          <SectionLabel>Partnership options</SectionLabel>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {partnerFeatures.map(([id, heading, body, color]) => (
              <article
                key={id}
                id={id}
                className="rounded-[8px] border border-[#e3d7c6] bg-white/75 p-6"
                style={{ borderLeft: `4px solid ${color}` }}
              >
                <h2 className="text-[24px] font-extrabold leading-[30px] text-teal">
                  {heading}
                </h2>
                <p className="mt-4 text-[16px] leading-[25px] text-muted-copy">
                  {body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
            {[
              ["/assets/figma/partner-logo-wish.jpg", "WISH partner logo"],
              ["/assets/figma/partner-logo-breakthrough.png", "Breakthrough ACTION partner logo"],
              ["/assets/figma/partner-logo-unicef.png", "UNICEF partner logo"],
              ["/assets/figma/partner-logo-dtree.png", "D-tree partner logo"],
              ["/assets/figma/partner-logo-unicef.png", "UNICEF partner logo"],
              ["/assets/figma/partner-logo-dtree.png", "D-tree partner logo"],
              ["/assets/figma/partner-logo-breakthrough.png", "Breakthrough ACTION partner logo"],
            ].map(([src, alt], index) => (
              <Image key={`${src}-${index}`} src={src} alt={alt} width={142} height={62} loading="eager" className="max-h-[62px] w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(to_bottom,#fff_0%,#fff_70%,#153b3a_70%,#153b3a_100%)] px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="type-h2 mt-5 text-teal">What is our operational process</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {["Talk with NUR", "Agree rates & terms", "Choose activities", "Sell, NUR operates"].map((heading, index) => (
              <article key={heading} className="border-l-4 border-coral bg-cream p-5">
                <span className="text-[13px] font-black text-coral">0{index + 1}</span>
                <h3 className="mt-2 text-[18px] font-bold text-teal">{heading}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-teal px-5 pb-[58px] pt-0 sm:px-8 lg:px-0">
        <div className="relative mx-auto grid max-w-[1136px] overflow-hidden rounded-[12px] bg-teal shadow-[0_4px_17px_rgba(0,0,0,0.1)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative z-10 p-8 sm:p-12">
            <SectionLabel>Agreements and availability</SectionLabel>
            <h2 className="type-h2 mt-5 text-white">
              Agreements and availability
            </h2>
            <p className="mt-5 text-[16px] leading-[26px] text-white/70">
              For recurring partners, NUR can discuss STO terms, seasonal
              availability, group request handling and repeatable activity
              supply.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Agreement opportunities", "Private groups and white-label"].map((item) => (
                <div key={item} className="rounded-[8px] border border-white/15 bg-white/5 p-4 text-[15px] font-bold text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative min-h-[276px] overflow-hidden lg:min-h-[360px]"
            style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              src="/assets/figma/activity-fish.jpg"
              alt="Snorkelling guests in turquoise Zanzibar water"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <Image
            src="/assets/figma/map-coral-cta.svg"
            alt="Coral silhouette map of Zanzibar"
            width={156}
            height={305}
            className="pointer-events-none absolute left-[43%] top-[52px] z-10 hidden w-[156px] md:block"
          />
        </div>
      </section>
      <section id="partner-enquiry" className="bg-teal px-5 pb-[66px] pt-8 sm:px-8 lg:px-0">
        <div className="mx-auto grid max-w-[1136px] gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionLabel>Partner Enquiry</SectionLabel>
            <h2 className="mt-5 text-[34px] font-extrabold leading-[42px] text-white sm:text-[42px] sm:leading-[50px]">
              Start a partner enquiry
            </h2>
            <p className="mt-5 max-w-[520px] text-[17px] leading-[28px] text-white/70">
              Share your company, guest profile and likely activity needs. The
              same validated enquiry form is used for partner and contact
              requests.
            </p>
            <div className="mt-8">
              <ContactForm variant="partner" />
            </div>
          </div>
          <aside className="space-y-4 self-end">
            {[
              ["Partner desk channels", "WhatsApp for urgent operations, email for rates, contracts and clear handoff notes for confirmed activities."],
              ["What to include", "Partner type, guest profile, expected volume, preferred pickup areas, white-label needs and language requirements."],
              ["Operational fit", "Best suited to hotels, DMCs, agents and STOs selling short Zanzibar activities alongside beach stays or island itineraries."],
            ].map(([heading, body], index) => (
              <article
                key={heading}
                className="rounded-[8px] border border-white/10 bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
                style={{ borderLeft: `4px solid ${["#37c6c7", "#e96855", "#ffd166"][index]}` }}
              >
                <h3 className="text-[18px] font-extrabold text-teal">{heading}</h3>
                <p className="mt-2 text-[14px] leading-[22px] text-muted-copy">{body}</p>
              </article>
            ))}
          </aside>
        </div>
      </section>
      </InnerPageShell>
      <JsonLd data={jsonLd} />
    </>
  );
}
