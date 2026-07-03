import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { InnerPageShell } from "@/components/site/inner-page";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionLabel } from "@/components/home/home-page";
import {
  EMAIL_ADDRESS,
  EMAIL_URL,
  WHATSAPP_LABEL,
  WHATSAPP_URL,
} from "@/lib/contact";
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
    images: [{ url: "/assets/figma/partners-hero-bg.png", width: 1200, height: 630, alt: "Aerial Zanzibar coast for partner activity supply" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/figma/partners-hero-bg.png"] },
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
        title="Whitelabel Zanzibar activity partner for B2B travel sales"
        description="NUR operates reliable half-day, 3-4 hour and single-day activities across Zanzibar for hotels, DMCs, agents, STOs and travel partners, with white-label delivery available when partners sell under their own brand."
        image="/assets/figma/partners-hero-bg.png"
        imageAlt="Bright aerial Zanzibar beach and palms used for partner activity supply"
        heroClassName="pb-[110px] pt-[65px] lg:min-h-[610px]"
        imageClassName="object-[center_48%] scale-[1.12]"
        overlayClassName="bg-[linear-gradient(80deg,rgba(17,62,60,0.95)_4%,rgba(17,62,60,0.58)_47%,rgba(17,62,60,0.06)_99%)]"
        contentClassName="max-w-[1226px] lg:grid-cols-[730px_442px] lg:items-start lg:gap-[57px]"
        descriptionClassName="max-w-[720px] text-white/90"
        proofs={["3-4h & day trips", "STO rates", "White-label ready", "Zanzibar-based operations"]}
        aside={
          <div className="relative flex min-h-[440px] flex-col rounded-[9px] border border-white/40 bg-[linear-gradient(241deg,rgba(17,62,60,0.41)_8%,rgba(17,62,60,0.8)_98%)] p-[34px] text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-[9.5px]">
            <SectionLabel>White-label ground partner</SectionLabel>
            <h2 className="mt-4 text-[28px] font-extrabold leading-[30px]">
              Behind-the-scenes delivery for partner brands
            </h2>
            <div className="mt-4 h-px bg-white/20" />
            <p className="mt-5 max-w-[352px] text-[15px] leading-[23px] text-white">
              NUR supplies and operates local Zanzibar activities while your
              team sells under agreed partner terms.
            </p>
            <div className="mt-auto grid grid-cols-2 gap-4 border-t border-white/20 pt-[26px] text-[13px] font-bold">
              <span className="border-l border-coral pl-3">
                Net / STO rates
                <span className="mt-1 block text-[11px] font-medium text-white/55">
                  partner terms
                </span>
              </span>
              <span className="border-l border-coral pl-3">
                White-label ops
                <span className="mt-1 block text-[11px] font-medium text-white/55">
                  delivery + support
                </span>
              </span>
            </div>
            <Button asChild className="mt-[26px] h-12 w-full rounded-[8px]" size="wide">
              <Link href="#partner-enquiry">Request partner rates</Link>
            </Button>
          </div>
        }
      >
      <section className="relative bg-cream px-5 pb-[66px] pt-0 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1226px]">
          <div className="relative z-[100] -mt-[60px] mb-[88px] grid gap-10 lg:grid-cols-[643px_533px] lg:items-start lg:gap-[77px]">
            <div className="space-y-[22px] pt-[50px]">
              {benefitCards.map(([id, icon, heading, body]) => (
                <article
                  id={id}
                  key={heading}
                  className="flex min-h-[131px] gap-[22px] rounded-[8px] border border-[rgba(17,62,60,0.16)] bg-white px-[22px] py-[17px] shadow-[0_2px_14px_rgba(0,0,0,0.05)]"
                >
                  <Image src={icon} alt="" width={58} height={58} className="size-[58px] shrink-0" />
                  <div>
                    <h2 className="text-[22px] font-extrabold leading-7 text-teal">
                      {heading}
                    </h2>
                    <p className="mt-1 text-[16px] leading-6 text-muted-copy">
                      {body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <article className="pt-[50px] lg:self-center">
              <SectionLabel>Contact NUR Zanzibar</SectionLabel>
              <h2 className="type-h2 mt-4 text-teal">Partner benefits</h2>
              <p className="mt-4 text-[18px] leading-7 text-muted-copy">
                Commercial terms, white-label delivery and local operations
                support for partners selling short Zanzibar activities.
              </p>
              <div className="mt-[22px] flex flex-wrap gap-4">
                <Button asChild>
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {WHATSAPP_LABEL}
                  </Link>
                </Button>
                <Button asChild variant="secondary" className="px-4 text-[13px]">
                  <Link href={EMAIL_URL}>{EMAIL_ADDRESS}</Link>
                </Button>
              </div>
            </article>
          </div>
          <div className="grid gap-5 lg:grid-cols-[520px_542px] lg:items-end lg:gap-[131px]">
            <div>
              <SectionLabel>Contact NUR Zanzibar</SectionLabel>
              <h2 className="type-h2 mt-4 text-teal">Partnership options</h2>
            </div>
            <p className="text-right text-[18px] leading-7 text-muted-copy">
              A compact model for different B2B sellers, from guest desks to
              international operators.
            </p>
          </div>
          <div className="mt-9 grid gap-[22px] md:grid-cols-3">
            {partnerOptions.map(([id, heading, body, color]) => (
              <article
                key={id}
                id={id}
                className="min-h-[138px] rounded-[8px] border border-[#e4d6bf] bg-white py-5 pl-6 pr-5 shadow-[0_12px_14px_rgba(0,0,0,0.05)]"
                style={{ borderLeft: `6px solid ${color}` }}
              >
                <h2 className="text-[22px] font-extrabold leading-7 text-teal">
                  {heading}
                </h2>
                <p className="mt-2 text-[16px] leading-6 text-muted-copy">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(to_bottom,#fffaf3_0%,#fffaf3_51%,#113e3c_51%,#113e3c_100%)] px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1207px]">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="type-h2 mt-5 text-teal">Whats our operational process</h2>
          <div className="relative z-10 mt-9 grid gap-4 md:grid-cols-4">
            {processSteps.map(([heading, body], index) => (
              <article
                key={heading}
                className="min-h-[112px] rounded-[6px] border border-[#e5dbcf] bg-white p-5 shadow-[0_8px_22px_rgba(15,31,28,0.04)]"
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
      <section className="bg-[#113e3c] px-5 pb-[70px] pt-[42px] sm:px-8 lg:px-0">
        <div className="relative mx-auto grid max-w-[1170px] overflow-hidden rounded-[12px] border border-white/30 bg-white/20 shadow-[0_4px_17px_rgba(0,0,0,0.1)] backdrop-blur-[9.5px] md:grid-cols-[507px_1fr]">
          <div className="relative z-10 flex min-h-[360px] flex-col justify-center px-7 py-10 sm:px-12 md:min-h-[422px]">
            <h2 className="max-w-[420px] text-[34px] font-extrabold leading-[42px] text-white sm:text-[40px] sm:leading-[48px]">
              Agreements and availability
            </h2>
            <p className="mt-[22px] max-w-[452px] text-[15px] leading-[24px] text-white/75">
              For recurring partners, NUR can discuss STO terms, seasonal
              availability, group requests, private departures, priority
              support and custom activity planning across Zanzibar.
            </p>
            <div className="mt-[22px] grid gap-4 sm:grid-cols-2">
              {[
                ["Agreement opportunities", "Rates, allocations and seasonal terms for trusted trade partners."],
                ["Private groups and white-label", "Custom timings, branded delivery and operational notes for special requests."],
              ].map(([item, body]) => (
                <div key={item} className="border-l-[3px] border-coral pl-3">
                  <h3 className="text-[16px] font-extrabold leading-[22px] text-white">
                    {item}
                  </h3>
                  <p className="mt-1 text-[15px] leading-[22px] text-white/75">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[238px] overflow-hidden md:min-h-[422px] md:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
            <Image
              src="/assets/figma/partners-agreements-snorkel-clean.webp"
              alt="Guests snorkeling during a Zanzibar marine partner activity"
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
            loading="eager"
            className="pointer-events-none absolute left-[42%] top-[78px] z-10 hidden w-[156px] md:block"
          />
        </div>
      </section>
      <section id="partner-enquiry" className="bg-[#113e3c] px-5 pb-[92px] pt-0 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1207px]">
          <div className="grid gap-6 md:grid-cols-[760px_1fr] md:items-end">
            <div>
              <SectionLabel>How it works</SectionLabel>
              <h2 className="mt-5 text-[34px] font-extrabold leading-[42px] text-white sm:text-[42px] sm:leading-[50px]">
                Start a partner enquiry
              </h2>
            </div>
            <p className="max-w-[430px] text-[15px] leading-6 text-white/70 md:text-right">
              For hotels, DMCs, agencies, STOs and partner brands: share your
              activity supply needs, white-label requirements and expected
              guest volumes.
            </p>
          </div>
          <div className="mt-[27px] grid gap-[30px] lg:grid-cols-[760px_417px] lg:items-stretch">
            <div className="h-full [&>form]:h-full">
              <ContactForm variant="partner" />
            </div>
            <aside className="flex h-full flex-col gap-8">
            {[
              ["Partner desk channels", "WhatsApp for urgent operations, email for rates, contracts and clear handoff notes for confirmed activities."],
              ["What to include", "Partner type, guest profile, expected volume, preferred pickup areas, white-label needs and language requirements."],
              ["Operational fit", "Best suited to hotels, DMCs, agents and STOs selling short Zanzibar activities alongside beach stays or island itineraries."],
            ].map(([heading, body], index) => (
              <article
                key={heading}
                className="flex min-h-[190px] flex-1 gap-[22px] rounded-[8px] border border-[#e3d5bd] bg-white px-[28px] py-[27px] shadow-[0_12px_14px_rgba(0,0,0,0.05)]"
                style={{ borderLeft: `6px solid ${["#17a7a6", "#e96855", "#f4c35b"][index]}` }}
              >
                <Image
                  src={[
                    "/assets/figma/partner-ops-desk.svg",
                    "/assets/figma/partner-sto-rates.svg",
                    "/assets/figma/partner-private-groups.svg",
                  ][index]}
                  alt=""
                  width={58}
                  height={58}
                  className="size-[58px] shrink-0"
                />
                <div>
                  <h3 className="text-[22px] font-extrabold leading-7 text-teal">{heading}</h3>
                  <p className="mt-2 text-[16px] leading-[25px] text-muted-copy">{body}</p>
                </div>
              </article>
            ))}
            </aside>
          </div>
        </div>
      </section>
      </InnerPageShell>
      <JsonLd data={jsonLd} />
    </>
  );
}
