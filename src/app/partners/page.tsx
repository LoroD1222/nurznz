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

const benefitCards = [
  ["white-label", "/assets/figma/partner-white-label.svg", "White-Label Delivery", "Activities can be sold under the partner brand while NUR handles local guides, logistics and guest delivery."],
  ["groups", "/assets/figma/partner-ops-desk.svg", "Ready-to-Sell Activity Catalogue", "Concise product copy, inclusions, durations, images and partner notes for quick sales enablement."],
  ["rates", "/assets/figma/partner-sto-rates.svg", "Special Partner / STO Rates", "Net rates, repeat-volume terms and seasonal agreement options for hotels, DMCs, agents and STOs."],
  ["operations", "/assets/figma/partner-private-groups.svg", "Reliable Zanzibar Operations", "Pickup windows, timing checks, guide communication and fast same-day WhatsApp/email support."],
];

const partnerOptions = [
  ["hotels-resorts", "Hotels & Resorts", "Concierge desks, guest activity desks and repeat half-day sales for beach-stay guests.", "#006c67"],
  ["dmcs", "DMCs & Travel Agents", "Add Zanzibar activities to itineraries, cruise calls, incentives and beach extensions.", "#37c6c7"],
  ["tour-operators", "STOs / Tour Operators", "Agreement-based rates, allocations, white-label handling and private custom groups.", "#e96855"],
];

const processSteps = [
  ["Talk with NUR", "Share partner type, guest profile and expected activity volume."],
  ["Agree rates & terms", "Set STO or partner rates, inclusions, seasonality and cancellation rules."],
  ["Choose activities", "Use ready-made options or configure white-label/private group handling."],
  ["Sell, NUR operates", "Your team sells to guests while NUR delivers locally in Zanzibar."],
];

const agencyLogos = [
  { src: "/assets/figma/partner-logo-wish.jpg", alt: "WISH partner logo", width: 130, height: 61 },
  { src: "/assets/figma/partner-logo-breakthrough.png", alt: "Breakthrough ACTION partner logo", width: 133, height: 44 },
  { src: "/assets/figma/partner-logo-unicef.png", alt: "UNICEF partner logo", width: 155, height: 45 },
  { src: "/assets/figma/partner-logo-dtree.png", alt: "D-tree partner logo", width: 124, height: 64 },
  { src: "/assets/figma/partner-logo-unicef.png", alt: "UNICEF partner logo", width: 154, height: 45 },
  { src: "/assets/figma/partner-logo-dtree.png", alt: "D-tree partner logo", width: 124, height: 64 },
  { src: "/assets/figma/partner-logo-breakthrough.png", alt: "Breakthrough ACTION partner logo", width: 134, height: 44 },
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
        overline="Contact NUR Zanzibar"
        title="White-label Zanzibar activity partner for B2B travel sales"
        description="NUR operates reliable half-day and full-day activity supply for hotels, DMCs, agents, STOs and receptive brands."
        image="/assets/figma/hero-beach.png"
        imageAlt="Zanzibar beach used for partner activity supply"
        proofs={["3-4h & day trips", "STO rates", "White-label ready", "Zanzibar-based operations"]}
        aside={
          <div className="rounded-[10px] bg-[rgba(17,62,60,0.92)] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <SectionLabel>White-label group partner</SectionLabel>
            <h2 className="mt-4 text-[24px] font-extrabold leading-[30px]">
              Behind-the-scenes delivery for partner brands
            </h2>
            <p className="mt-3 text-[14px] leading-6 text-white/75">
              For hotels and agencies that want local activity supply without
              carrying the operational load.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-[13px] font-bold">
              <span className="rounded-[6px] bg-white/10 p-3">
                Net / STO rates
                <span className="mt-1 block text-[11px] font-medium text-white/55">
                  partner terms
                </span>
              </span>
              <span className="rounded-[6px] bg-white/10 p-3">
                White-label ops
                <span className="mt-1 block text-[11px] font-medium text-white/55">
                  delivery + support
                </span>
              </span>
            </div>
            <Button asChild className="mt-5 w-full" size="wide">
              <Link href="#partner-enquiry">Request partner rates</Link>
            </Button>
          </div>
        }
      >
      <section className="relative bg-cream px-5 pb-[66px] pt-0 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <div className="relative z-10 -mt-[42px] mb-16 grid gap-7 lg:grid-cols-[0.53fr_0.47fr] lg:items-start">
            <div className="space-y-4">
              {benefitCards.map(([id, icon, heading, body]) => (
                <article
                  id={id}
                  key={heading}
                  className="flex min-h-[112px] gap-4 rounded-[8px] border border-[#e3d7c6] bg-white p-5 shadow-[0_10px_30px_rgba(15,31,28,0.08)]"
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
            <article className="rounded-[10px] bg-white p-7 shadow-[0_10px_30px_rgba(15,31,28,0.06)] lg:mt-[58px]">
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
          </div>
          <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <SectionLabel>Contact NUR Zanzibar</SectionLabel>
              <h2 className="type-h2 mt-4 text-teal">Partnership options</h2>
            </div>
            <p className="text-[15px] leading-6 text-muted-copy">
              A compact model for different B2B sellers, from guest desks to
              international operators.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {partnerOptions.map(([id, heading, body, color]) => (
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
            {agencyLogos.map((logo, index) => (
              <Image
                key={`${logo.src}-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading="eager"
                className="shrink-0 object-contain"
                style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(to_bottom,#fff_0%,#fff_55%,#153b3a_55%,#153b3a_100%)] px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="type-h2 mt-5 text-teal">Whats our operational process</h2>
          <div className="relative z-10 mt-9 grid gap-4 md:grid-cols-4">
            {processSteps.map(([heading, body], index) => (
              <article
                key={heading}
                className="rounded-[6px] border border-[#e5dbcf] bg-white p-5 shadow-[0_8px_22px_rgba(15,31,28,0.04)]"
              >
                <span
                  className={`grid size-7 place-items-center rounded-full text-[13px] font-bold text-white ${
                    index === 1 ? "bg-[#37c6c7]" : index === 3 ? "bg-coral" : "bg-teal"
                  }`}
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 text-[17px] font-extrabold text-teal">
                  {heading}
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-muted-copy">
                  {body}
                </p>
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
              src="/assets/figma/proof-snorkling.png"
              alt="Snorkelling guests in turquoise Zanzibar water"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover object-[center_36%]"
            />
          </div>
          <Image
            src="/assets/figma/map-coral-cta.svg"
            alt="Coral silhouette map of Zanzibar"
            width={156}
            height={305}
            loading="eager"
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
