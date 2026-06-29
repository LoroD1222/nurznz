import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionLabel, SiteFooter, SiteHeader } from "@/components/home/home-page";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Contact NUR Zanzibar | Activity Enquiries";
const description =
  "Contact NUR Zanzibar for activity availability, pickup areas, partner rates, white-label options and private group enquiries.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/assets/figma/hero-beach.png",
        width: 1200,
        height: 630,
        alt: "Aerial Zanzibar coast for activity enquiries",
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

const helpCards = [
  ["Activity help", "Quick reply for trip enquiries", "Best for direct activity asks, route fit, timing and pickup details."],
  ["Contact options", "Send a reply with phone, email or WhatsApp so the local team can follow up."],
  ["Helpful details", "Include preferred date, group size, hotel area and private/shared preference."],
  ["Direct booking help", "Use this route for direct trip questions, pickup notes and availability checks."],
];

const steps = [
  ["Enquiry received", "Share your activity interest, dates, guest count and pickup area."],
  ["Activity match", "NUR recommends the right short activity and checks guest fit."],
  ["Confirm details", "Agree timing, inclusions, private or shared format and final booking notes."],
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    description,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <main className="bg-white">
      <SiteHeader />
      <section className="relative min-h-[374px] overflow-hidden px-5 pb-[148px] pt-[74px] sm:px-8 lg:px-0">
        <Image
          src="/assets/figma/hero-beach.png"
          alt="Aerial Zanzibar coast and turquoise water"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(17,62,60,0.58)]" />
        <div className="relative mx-auto max-w-[1136px]">
          <SectionLabel>Contact NUR Zanzibar</SectionLabel>
          <h1 className="mt-5 max-w-[680px] text-[42px] font-extrabold leading-[50px] text-white sm:text-[56px] sm:leading-[62px]">
            Plan a Zanzibar activity or ask a question
          </h1>
          <p className="mt-5 max-w-[620px] text-[18px] leading-8 text-white/78">
            For direct guests, hotels, private groups and agency partners
            looking for local activity options, pickup details and availability.
          </p>
        </div>
      </section>

      <section className="relative z-10 -mt-[112px] px-5 pb-[62px] sm:px-8 lg:px-0">
        <div className="mx-auto grid max-w-[1136px] gap-6 lg:grid-cols-[1fr_318px]">
          <ContactForm />
          <aside className="grid gap-4">
            <div className="rounded-[8px] bg-teal p-5 text-white shadow-[0_18px_45px_rgba(15,31,28,0.14)]">
              <SectionLabel>Activity Help</SectionLabel>
              <h2 className="mt-3 text-[21px] font-extrabold leading-[27px]">
                Quick reply for trip enquiries
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-[6px] bg-coral p-3">
                  <p className="text-[22px] font-extrabold leading-6">3-4h</p>
                  <p className="text-[12px] text-white/75">half-day trips</p>
                </div>
                <div className="rounded-[6px] bg-white/10 p-3">
                  <p className="text-[22px] font-extrabold leading-6">1 day</p>
                  <p className="text-[12px] text-white/75">full-day options</p>
                </div>
              </div>
            </div>
            {helpCards.slice(1).map(([heading, body]) => (
              <article
                key={heading}
                className="rounded-[8px] border border-[#e9dfd2] bg-white p-5 shadow-[0_8px_28px_rgba(15,31,28,0.06)]"
              >
                <h3 className="text-[16px] font-extrabold text-teal">
                  {heading}
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-muted-copy">
                  {body}
                </p>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px] text-center">
          <SectionLabel>Whats Next</SectionLabel>
          <h2 className="mt-4 text-[34px] font-extrabold leading-[42px] text-teal sm:text-[42px] sm:leading-[50px]">
            What is our operational process
          </h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {steps.map(([heading, body], index) => (
              <article
                key={heading}
                className="rounded-[6px] border border-[#e5dbcf] bg-white p-5 text-left shadow-[0_8px_22px_rgba(15,31,28,0.04)]"
              >
                <span className="grid size-7 place-items-center rounded-full bg-teal text-[13px] font-bold text-white">
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

      <section className="bg-teal px-5 py-[36px] text-center sm:px-8 lg:px-0">
        <p className="mx-auto max-w-[720px] text-[14px] leading-6 text-white/70">
          NUR checks availability, recommends a suitable Zanzibar activity,
          confirms pickup details and sends the next booking step.
        </p>
        <div className="mt-5 flex justify-center gap-4">
          <Button asChild>
            <Link href="/contact">+255 000 000 000</Link>
          </Button>
          <Button asChild variant="secondary-dark">
            <Link href="/partners">info@nurznz.com</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
      <JsonLd data={jsonLd} />
    </main>
  );
}
