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

const stepColors = ["bg-teal", "bg-[#37c6c7]", "bg-coral"];

function SupportIcon({ index }: { index: number }) {
  const paths = [
    "M5 5.5h10v7H8l-3 2v-9Zm2.5 2h5M7.5 10h4",
    "M4 6.2 10 10l6-3.8M4 6h12v8H4V6Z",
    "M10 3.8a4.2 4.2 0 0 0-4.2 4.2v1.3A3.2 3.2 0 0 0 9 12.5h2a3.2 3.2 0 0 0 3.2-3.2V8A4.2 4.2 0 0 0 10 3.8Zm-2 10.4h4",
  ];

  return (
    <span className="grid size-[46px] shrink-0 place-items-center rounded-full border border-[#e3d7c6] bg-[#f4faf6] text-[#006c67]">
      <svg width="23" height="23" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d={paths[index] ?? paths[0]}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  );
}

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
      <section className="relative min-h-[300px] overflow-hidden px-5 pb-[58px] pt-[58px] sm:px-8 lg:px-0">
        <Image
          src="/assets/figma/hero-beach.png"
          alt="Aerial Zanzibar coast and turquoise water"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_72%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,62,60,0.68)_0%,rgba(17,62,60,0.38)_50%,rgba(17,62,60,0.12)_100%)]" />
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
        <div className="mx-auto grid max-w-[1136px] gap-6 lg:grid-cols-[1fr_360px]">
          <ContactForm />
          <aside className="grid gap-4">
            <div className="rounded-[8px] bg-[rgba(17,62,60,0.94)] p-5 text-white shadow-[0_18px_45px_rgba(15,31,28,0.14)] backdrop-blur">
              <SectionLabel>Activity Help</SectionLabel>
              <h2 className="mt-3 text-[21px] font-extrabold leading-[27px]">
                Quick reply for trip enquiries
              </h2>
              <p className="mt-3 text-[13px] leading-5 text-white/72">
                Share what you want to do, where you are staying, group size
                and preferred timing. NUR can suggest suitable short activities
                and next steps.
              </p>
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
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button asChild size="compact">
                  <Link href="tel:+255555144222">+255 555 144 222</Link>
                </Button>
                <Button asChild variant="secondary-dark" size="compact">
                  <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                </Button>
              </div>
            </div>
            {helpCards.slice(1).map(([heading, body], index) => (
              <article
                key={heading}
                className="flex gap-4 rounded-[8px] border border-[#e9dfd2] bg-white p-5 shadow-[0_8px_28px_rgba(15,31,28,0.06)]"
              >
                <SupportIcon index={index} />
                <div>
                  <h3 className="text-[16px] font-extrabold text-teal">
                    {heading}
                  </h3>
                  <p className="mt-2 text-[13px] leading-5 text-muted-copy">
                    {body}
                  </p>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="bg-[linear-gradient(to_bottom,#fff_0%,#fff_54%,#153b3a_54%,#153b3a_100%)] px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px] text-center">
          <SectionLabel>Whats Next</SectionLabel>
          <h2 className="mt-4 text-[34px] font-extrabold leading-[42px] text-teal sm:text-[42px] sm:leading-[50px]">
            Whats our operational process
          </h2>
          <div className="relative z-10 mt-9 grid gap-4 md:grid-cols-3">
            {steps.map(([heading, body], index) => (
              <article
                key={heading}
                className="rounded-[6px] border border-[#e5dbcf] bg-white p-5 text-left shadow-[0_8px_22px_rgba(15,31,28,0.04)]"
              >
                <span className={`grid size-7 place-items-center rounded-full ${stepColors[index]} text-[13px] font-bold text-white`}>
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
          <p className="mx-auto mt-[54px] max-w-[720px] text-[14px] leading-6 text-white/70">
            NUR checks availability, recommends a suitable Zanzibar activity,
            confirms pickup details and sends the next booking step.
          </p>
          <div className="mt-5 flex justify-center gap-4">
            <Button asChild>
              <Link href="tel:+255555144222">+255 555 144 222</Link>
            </Button>
            <Button asChild variant="secondary-dark">
              <Link href="mailto:info@gmail.com">info@gmail.com</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
      <JsonLd data={jsonLd} />
    </main>
  );
}
