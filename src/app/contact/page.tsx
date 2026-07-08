import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionLabel, SiteFooter, SiteHeader } from "@/components/home/home-page";
import {
  EMAIL_ADDRESS,
  EMAIL_URL,
  WHATSAPP_LABEL,
  WHATSAPP_URL,
} from "@/lib/contact";
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
        url: "/assets/figma/contact-hero-bg.png",
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
    images: ["/assets/figma/contact-hero-bg.png"],
  },
};

const helpCards = [
  ["Activity help", "Quick reply for trip enquiries", "Best for direct activity asks, route fit, timing and pickup details."],
  ["Contact options", "Send a trip enquiry, ask about pickup areas, or check availability for shared and private activities."],
  ["Helpful details", "Include your travel date, hotel area, group size, preferred activity and whether you want a private option."],
  ["Direct booking help", "Use this route for direct trip questions, private group enquiries, pickup details and activity recommendations."],
];

const steps = [
  ["Enquiry received", "Share your activity interest, dates, guest count and pickup area."],
  ["Activity match", "NUR ZANZIBAR TOURS recommends the right short activity and checks guest fit."],
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
    <span className="grid size-[58px] shrink-0 place-items-center rounded-full border border-[#e3d7c6] bg-[#f4faf6] text-[#006c67]">
      <svg width="30" height="30" viewBox="0 0 20 20" fill="none" aria-hidden>
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
      <section className="relative min-h-[556px] overflow-hidden px-5 pt-[118px] sm:px-8 lg:px-0">
        <Image
          src="/assets/figma/contact-hero-bg.png"
          alt="Aerial Zanzibar coast and turquoise water"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_47%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(76deg,rgba(17,62,60,0.95)_4%,rgba(17,62,60,0.52)_45%,rgba(17,62,60,0)_87%)]" />
        <div className="relative mx-auto max-w-[1248px]">
          <SectionLabel>Contact NUR Zanzibar</SectionLabel>
          <h1 className="mt-[31px] max-w-[611px] text-[42px] font-extrabold leading-[50px] text-white sm:text-[52px] sm:leading-[60px]">
            Plan a Zanzibar activity or ask a question
          </h1>
          <p className="mt-[31px] max-w-[724px] text-[18px] leading-[31px] text-white/90 sm:text-[20px]">
            For direct guests, families, private groups and travel partners who
            want clear activity options, pickup details and availability before
            booking.
          </p>
        </div>
      </section>

      <section className="relative z-10 -mt-[112px] px-5 pb-[112px] sm:px-8 lg:px-0">
        <div className="relative mx-auto max-w-[1248px] lg:min-h-[686px]">
          <div className="max-w-[760px]">
            <ContactForm />
          </div>
          <aside className="mt-8 grid gap-[13px] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[442px]">
            <div className="min-h-[363px] rounded-[9px] border border-white/45 bg-[rgba(17,62,60,0.7)] p-[30px_35px] text-white shadow-[0_18px_45px_rgba(15,31,28,0.14)] backdrop-blur-[17px]">
              <SectionLabel>Activity Help</SectionLabel>
              <h2 className="mt-4 text-[26px] font-extrabold leading-[34px]">
                Quick reply for trip enquiries
              </h2>
              <p className="mt-4 max-w-[352px] text-[13px] leading-5 text-white/75">
                Share what you want to do, where you are staying, group size
                and preferred timing. NUR ZANZIBAR TOURS can suggest suitable short activities
                and next steps.
              </p>
              <div className="mt-[27px] grid grid-cols-2 gap-5">
                <div className="border-l border-coral pl-[10px]">
                  <p className="text-[25px] font-extrabold leading-[30px]">3-4h</p>
                  <p className="text-[12px] leading-[17px] text-white/75">short activity options</p>
                </div>
                <div className="border-l border-coral pl-[10px]">
                  <p className="text-[25px] font-extrabold leading-[30px]">1 day</p>
                  <p className="text-[12px] leading-[17px] text-white/75">full-day activity options</p>
                </div>
              </div>
              <div className="mt-[28px] grid gap-4 sm:grid-cols-2">
                <Button asChild className="h-12 rounded-[7px]" size="default">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {WHATSAPP_LABEL}
                  </Link>
                </Button>
                <Button
                  asChild
                  className="h-12 rounded-[7px] px-3 text-[12px]"
                  variant="secondary-dark"
                  size="default"
                >
                  <Link href={EMAIL_URL}>{EMAIL_ADDRESS}</Link>
                </Button>
              </div>
            </div>
            {helpCards.slice(1).map(([heading, body], index) => (
              <article
                key={heading}
                className="flex min-h-[152px] gap-[22px] rounded-[8px] border border-[rgba(17,62,60,0.16)] bg-white px-[22px] py-[17px] shadow-[0_2px_14px_rgba(0,0,0,0.05)]"
              >
                <SupportIcon index={index} />
                <div>
                  <h3 className="text-[22px] font-extrabold leading-7 text-teal">
                    {heading}
                  </h3>
                  <p className="mt-1 text-[16px] leading-[25px] text-muted-copy">
                    {body}
                  </p>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="bg-[linear-gradient(to_bottom,#fff_0%,#fff_52%,#113e3c_52%,#113e3c_100%)] px-5 py-[70px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1181px] text-center">
          <SectionLabel>Whats Next</SectionLabel>
          <h2 className="mt-5 text-[34px] font-extrabold leading-[42px] text-teal sm:text-[42px] sm:leading-[50px]">
            Whats our operational process
          </h2>
          <div className="relative z-10 mt-14 grid gap-[23px] md:grid-cols-3">
            {steps.map(([heading, body], index) => (
              <article
                key={heading}
                className="relative min-h-[142px] rounded-[8px] border border-[#e3d5bd] bg-white px-[31px] py-[21px] text-left shadow-[0_1px_8px_rgba(0,0,0,0.05)]"
              >
                <span className={`absolute left-[19px] top-[17px] grid size-[34px] place-items-center rounded-full ${stepColors[index]} text-[18px] font-bold text-white`}>
                  {index + 1}
                </span>
                <div className={`absolute bottom-[-1px] left-[-1px] top-[-1px] w-[6px] rounded-bl-[8px] rounded-tl-[8px] ${stepColors[index]}`} />
                <h3 className="ml-[38px] text-[22px] font-extrabold leading-[30px] text-teal">
                  {heading}
                </h3>
                <p className="mt-[14px] text-[16px] leading-[25px] text-muted-copy">
                  {body}
                </p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-[64px] max-w-[900px] text-[18px] leading-7 text-white/80">
            NUR ZANZIBAR TOURS checks availability, recommends a suitable Zanzibar activity,
            confirms pickup details and sends the next booking step.
          </p>
          <div className="mt-5 flex justify-center gap-4">
            <Button asChild>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {WHATSAPP_LABEL}
              </Link>
            </Button>
            <Button asChild variant="secondary-dark" className="px-4 text-[13px]">
              <Link href={EMAIL_URL}>{EMAIL_ADDRESS}</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
      <JsonLd data={jsonLd} />
    </main>
  );
}
