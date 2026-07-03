import Image from "next/image";
import Link from "next/link";
import { ActivityRail } from "@/components/home/activity-rail";
import { ExperienceGallery } from "@/components/experience/experience-gallery";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { SectionLabel, SiteFooter, SiteHeader } from "@/components/home/home-page";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/contact";
import type { Experience } from "@/lib/experiences";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { trips } from "@/lib/trips";

function FactIcon({ index }: { index: number }) {
  const icons = [
    <path
      key="pickup"
      d="M5 15h10l1.5-4.5H3.5L5 15Zm1.2 0a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm7.6 0a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM5.5 10.5V6h7.8l2.3 4.5"
    />,
    <path
      key="time"
      d="M10 3.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 3.2V10l2.4 1.6"
    />,
    <path
      key="swim"
      d="M3 12.5c1.4-1.1 2.7-1.1 4.1 0s2.7 1.1 4.1 0 2.7-1.1 4.1 0M5 8.5l3-3 4.5 4.5M12.5 5.5a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"
    />,
    <path
      key="guide"
      d="M10 3.2 4.5 5.4v4.2c0 3.3 2.2 6.3 5.5 7.2 3.3-.9 5.5-3.9 5.5-7.2V5.4L10 3.2Zm-2.4 7 1.5 1.5 3.3-3.4"
    />,
  ];

  return (
    <span className="grid size-[36px] shrink-0 place-items-center rounded-full bg-[#e6f4ef] text-[#006c67]">
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        >
          {icons[index] ?? icons[0]}
        </g>
      </svg>
    </span>
  );
}

export function ExperienceDetailPage({
  experience,
}: {
  experience: Experience;
}) {
  const relatedTrips = trips.filter(
    (trip) => trip.href !== `/experience/${experience.slug}`,
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: experience.title,
    description: experience.description,
    image: `${SITE_URL}${experience.image}`,
    url: `${SITE_URL}/experience/${experience.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <main className="bg-white">
      <SiteHeader />
      <section className="px-5 py-[54px] sm:px-8 lg:px-0">
        <div className="mx-auto grid max-w-[1136px] gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-stretch">
          <div className="pt-2">
            <SectionLabel>{experience.overline}</SectionLabel>
            <h1 className="mt-4 max-w-[520px] text-[42px] font-extrabold leading-[46px] text-teal-deep sm:text-[56px] sm:leading-[60px]">
              {experience.title}
            </h1>
            <p className="mt-5 max-w-[492px] text-[17px] leading-[27px] text-muted-copy">
              {experience.description}
            </p>
            <div className="mt-7 grid max-w-[430px] grid-cols-2 gap-3">
              {experience.highlights.map(([heading, body], index) => (
                <div
                  key={heading}
                  className="flex gap-3 rounded-[8px] border border-[#eadfce] bg-cream p-4"
                >
                  <FactIcon index={index} />
                  <div>
                    <h2 className="text-[14px] font-extrabold text-teal">
                      {heading}
                    </h2>
                    <p className="mt-1 text-[13px] leading-5 text-muted-copy">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Ask about this trip</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {WHATSAPP_LABEL}
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:min-h-full">
            <ExperienceGallery images={experience.gallery} />
          </div>
        </div>
      </section>

      <section className="px-5 py-[54px] sm:px-8 lg:px-0">
        <div className="relative mx-auto grid min-h-[286px] max-w-[1170px] overflow-hidden rounded-[12px] bg-teal shadow-[0_4px_17px_rgba(0,0,0,0.1)] lg:min-h-[422px] lg:grid-cols-[507px_1fr]">
          <div className="relative z-10 p-8 lg:px-[46px] lg:py-[46px]">
            <SectionLabel>Must have information</SectionLabel>
            <h2 className="mt-4 max-w-[388px] text-[34px] font-extrabold leading-[40px] text-white sm:text-[40px] sm:leading-[48px]">
              What to know before you book
            </h2>
            <div className="mt-5 grid max-w-[452px] gap-x-[14px] gap-y-[9px] sm:grid-cols-2">
              {experience.infoItems.map((heading) => (
                <article
                  key={heading}
                  className="flex items-center gap-[7px] text-[14px] font-medium leading-5 text-white/75"
                >
                  <span className="grid size-[18px] shrink-0 place-items-center rounded-full bg-coral text-white">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M2.2 5.1 4 6.8 7.8 3"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </span>
                  <h3 className="sm:whitespace-nowrap">{heading}</h3>
                </article>
              ))}
            </div>
            <p className="mt-[18px] max-w-[452px] text-[13px] leading-[22px] text-white/85">
              {experience.ctaCopy}
            </p>
            <div className="mt-[23px] flex flex-wrap gap-[17px]">
              <Button asChild>
                <Link href="/partners#rates">Partner rates</Link>
              </Button>
              <Button asChild variant="secondary-dark">
                <Link href="/trips">Open Trips</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden lg:min-h-[422px] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
            <Image
              src="/assets/figma/experience-ocean-dolphins-clean.webp"
              alt="Dolphins swimming in clear blue ocean water near Zanzibar"
              fill
              sizes="(min-width: 1024px) 663px, 100vw"
              className="object-cover object-center"
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

      <section className="px-5 py-[54px] sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1234px]">
          <SectionLabel>Activity Catalogue</SectionLabel>
          <h2 className="mt-4 text-[36px] font-extrabold leading-[44px] text-teal">
            Other Exciting Zanzibar Activities We Offer
          </h2>
          <ActivityRail activities={relatedTrips} intro={null} />
        </div>
      </section>
      <SiteFooter />
      <JsonLd data={jsonLd} />
    </main>
  );
}
