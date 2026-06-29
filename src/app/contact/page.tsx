import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { InnerPageShell } from "@/components/site/inner-page";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionLabel } from "@/components/home/home-page";
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
    images: [{ url: "/assets/figma/cta-sunset.png", width: 1200, height: 630, alt: "Zanzibar sunset activity enquiry" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/figma/cta-sunset.png"] },
};

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
    <>
      <InnerPageShell
        overline="Contact NUR Zanzibar"
        title="Plan a Zanzibar activity or ask a question"
        description="For direct guests, hotels, private groups and agency partners looking for local activity options, pickup details and availability."
        image="/assets/figma/hero-beach.png"
        imageAlt="Aerial Zanzibar beach and turquoise water"
        aside={
          <div className="rounded-[10px] bg-[rgba(17,62,60,0.9)] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <SectionLabel>Activity Help</SectionLabel>
            <h2 className="mt-4 text-[24px] font-extrabold leading-[30px]">
              Quick reply for trip enquiries
            </h2>
            <div className="mt-5 grid gap-3">
              {[
                ["Response window", "Same-day availability replies where possible."],
                ["Best details", "Dates, pickup area, group size and activity style."],
                ["Direct booking help", "Clear route fit, timing and next-step confirmation."],
              ].map(([heading, body]) => (
                <div key={heading} className="rounded-[8px] bg-white/95 p-4 text-teal">
                  <h3 className="text-[15px] font-bold">{heading}</h3>
                  <p className="mt-1 text-[13px] leading-5 text-muted-copy">{body}</p>
                </div>
              ))}
            </div>
          </div>
        }
      >
      <section className="bg-cream px-5 py-[66px] sm:px-8 lg:px-0">
        <div className="mx-auto grid max-w-[1136px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Enquiry Desk</SectionLabel>
            <h2 className="mt-5 text-[34px] font-extrabold leading-[42px] text-teal sm:text-[42px] sm:leading-[50px]">
              Send the details and we will confirm next steps
            </h2>
            <p className="mt-5 text-[17px] leading-[28px] text-muted-copy">
              Include preferred dates, pickup area, group size and whether this
              is a guest, agency, hotel or DMC request.
            </p>
            <dl className="mt-8 space-y-4 text-[16px] leading-6 text-teal">
              <div>
                <dt className="font-bold">Best for</dt>
                <dd className="text-muted-copy">Availability, partner terms and private group planning.</dd>
              </div>
              <div>
                <dt className="font-bold">Response focus</dt>
                <dd className="text-muted-copy">Route fit, timings, pickup logic and rate next steps.</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="px-5 py-[58px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1136px] text-center">
          <SectionLabel>Whats Next</SectionLabel>
          <h2 className="type-h2 mt-5 text-teal">What is our operational process</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[
              ["Enquiry received", "Share dates, pickup area, group size and activity style."],
              ["Activity match", "NUR recommends the right route and confirms fit."],
              ["Confirm details", "Pickup time, inclusions, private options and final rate are confirmed."],
            ].map(([heading, body], index) => (
              <article key={heading} className="rounded-[8px] border border-[#d9d2c8] bg-white p-5 text-left">
                <span className="grid size-7 place-items-center rounded-full bg-teal text-[13px] font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-[18px] font-bold text-teal">{heading}</h3>
                <p className="mt-2 text-[15px] leading-[23px] text-muted-copy">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </InnerPageShell>
      <JsonLd data={jsonLd} />
    </>
  );
}
