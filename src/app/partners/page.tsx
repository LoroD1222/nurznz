import type { Metadata } from "next";
import Image from "next/image";
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
  ["white-label", "White-label ready", "Descriptions, route notes and guest flow can sit behind your own sales brand."],
  ["groups", "Private groups", "Custom group requests, shared departures and adjusted pickup windows are supported."],
  ["rates", "STO partner rates", "Net rates and seasonal terms are available for active travel sellers."],
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
          </div>
        }
      >
      <section className="bg-cream px-5 py-[66px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px]">
          <div className="mb-12 grid gap-5 md:grid-cols-2">
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
          <SectionLabel>Partner Options</SectionLabel>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {partnerFeatures.map(([id, heading, body]) => (
              <article key={id} id={id} className="rounded-[8px] border border-[#e3d7c6] bg-white/75 p-6">
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
            ].map(([src, alt]) => (
              <Image key={src} src={src} alt={alt} width={142} height={62} className="max-h-[62px] w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-[58px] sm:px-8 lg:px-0">
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
      <section className="bg-teal px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto grid max-w-[1136px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
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
          <div className="relative min-h-[276px] overflow-hidden rounded-[12px]">
            <Image
              src="/assets/figma/activity-fish.jpg"
              alt="Snorkelling guests in turquoise Zanzibar water"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-5 py-[66px] sm:px-8 lg:px-0">
        <div className="mx-auto grid max-w-[1136px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Partner Enquiry</SectionLabel>
            <h2 className="mt-5 text-[34px] font-extrabold leading-[42px] text-teal sm:text-[42px] sm:leading-[50px]">
              Start a partner enquiry
            </h2>
            <p className="mt-5 text-[17px] leading-[28px] text-muted-copy">
              Share your company, guest profile and likely activity needs. The
              same validated enquiry form is used for partner and contact
              requests.
            </p>
          </div>
          <ContactForm title="Partner enquiry" />
        </div>
      </section>
      </InnerPageShell>
      <JsonLd data={jsonLd} />
    </>
  );
}
