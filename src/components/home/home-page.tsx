import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ActivityRail } from "@/components/home/activity-rail";
import { FaqAccordion } from "@/components/home/faq-accordion";
import { SiteNavLinks } from "@/components/site/site-nav-links";
import {
  EMAIL_ADDRESS,
  EMAIL_URL,
  WHATSAPP_LABEL,
  WHATSAPP_URL,
} from "@/lib/contact";
import { trips } from "@/lib/trips";

const stats = [
  { value: "3-4h", label: "half-day activities" },
  { value: "1 day", label: "full-day operations" },
  { value: "for partners", label: "hotels, DMCs, agents" },
  { value: "Daily ops", label: "guest-ready logistics" },
];

const partnerCards = [
  {
    title: "White-label ready",
    body: "Sell activities under your brand while NUR ZANZIBAR TOURS handles guides, pickups and local guest flow.",
    icon: "/assets/figma/partner-white-label.svg",
    alt: "White-label partner icon",
  },
  {
    title: "Private groups",
    body: "Run shared departures, private branded trips or custom group requests as needed.",
    icon: "/assets/figma/partner-private-groups.svg",
    alt: "Private group activity icon",
  },
  {
    title: "Local ops desk",
    body: "Fast WhatsApp and email support for allocation checks, timings and activity questions.",
    icon: "/assets/figma/partner-ops-desk.svg",
    alt: "Local operations desk icon",
  },
  {
    title: "STO partner rates",
    body: "Net rates, repeat-volume terms and seasonal agreements for active travel sellers.",
    icon: "/assets/figma/partner-sto-rates.svg",
    alt: "STO partner rates icon",
  },
];

const checklist = [
  "Half-day and full-day slots",
  "Marine, culture and nature routes",
  "Partner-ready descriptions and facts",
  "Clear enquiry flow for groups",
];

const partnerLogos = [
  {
    src: "/assets/figma/partner-logo-wish.jpg",
    alt: "WISH partner logo",
    width: 130,
    height: 61,
  },
  {
    src: "/assets/figma/partner-logo-breakthrough.png",
    alt: "Breakthrough ACTION partner logo",
    width: 133,
    height: 44,
  },
  {
    src: "/assets/figma/partner-logo-unicef.png",
    alt: "UNICEF partner logo",
    width: 155,
    height: 45,
  },
  {
    src: "/assets/figma/partner-logo-dtree.png",
    alt: "D-tree partner logo",
    width: 124,
    height: 64,
  },
  {
    src: "/assets/partners/logo-dhow.avif",
    alt: "Dhow partner logo",
    width: 176,
    height: 172,
  },
  {
    src: "/assets/partners/logo-white-sand.svg",
    alt: "White Sand Luxury Villas and Spa partner logo",
    width: 304,
    height: 177,
  },
  {
    src: "/assets/partners/our-zanzibar.png",
    alt: "Our Zanzibar partner logo",
    width: 256,
    height: 256,
  },
  {
    src: "/assets/partners/hotel-verde.png",
    alt: "Hotel Verde Zanzibar partner logo",
    width: 2597,
    height: 823,
  },
  {
    src: "/assets/partners/zuri-zanzibar.png",
    alt: "Zuri Zanzibar Hotel and Resort partner logo",
    width: 1280,
    height: 1280,
  },
  {
    src: "/assets/partners/zanzibar-boutique-hotels.png",
    alt: "Zanzibar Boutique Hotels partner logo",
    width: 1463,
    height: 761,
  },
];

const tripadvisorUrl =
  "https://www.tripadvisor.com/Attraction_Review-g482884-d27100250-Reviews-Nurzanzi_Tours_Safaris-Zanzibar_Island_Zanzibar_Archipelago.html";

const reviews = [
  {
    id: 0,
    quote:
      "Amazing experience with a friendly team, smooth pickup and a beautiful day exploring Zanzibar.",
    author: "TripAdvisor guest",
    details: "Reviewed on Tripadvisor",
  },
  {
    id: 1,
    quote:
      "Well organized from start to finish, with clear communication and helpful local guidance.",
    author: "TripAdvisor guest",
    details: "Reviewed on Tripadvisor",
  },
  {
    id: 2,
    quote:
      "A memorable Zanzibar trip with professional service, great timing and a team that cared.",
    author: "TripAdvisor guest",
    details: "Reviewed on Tripadvisor",
  },
];

const footerExploreLinks = [
  { label: "Home", href: "/" },
  { label: "Trips", href: "/trips" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Payment", href: "/payment" },
  { label: "Contact", href: "/contact" },
];

const footerTripLinks = trips.map((trip) => ({
  label: trip.title,
  href: trip.href,
}));

const socialLinks = [
  {
    label: "Tripadvisor",
    href: tripadvisorUrl,
    icon: "tripadvisor",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nurzanzibartours/",
    icon: "instagram",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nurzanzitour",
    icon: "tiktok",
  },
] as const;

type SocialIconName = (typeof socialLinks)[number]["icon"];

function SocialIcon({ icon }: { icon: SocialIconName }) {
  if (icon === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.6" cy="7.4" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "tiktok") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path d="M14.4 5v9.1a4 4 0 1 1-3.5-4v2.5a1.7 1.7 0 1 0 1.1 1.6V5h2.4Z" fill="currentColor" />
        <path d="M14.4 5c.6 2.2 2 3.5 4.1 3.9v2.4c-1.6-.1-3-.7-4.1-1.7V5Z" fill="currentColor" opacity="0.72" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8.8" cy="11" r="1.25" fill="currentColor" />
      <circle cx="15.2" cy="11" r="1.25" fill="currentColor" />
      <path d="M7.4 14.4c1.2 1.1 2.7 1.7 4.6 1.7s3.4-.6 4.6-1.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="m5.5 8-2-1.7M18.5 8l2-1.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="relative h-[40px] w-[156px] shrink-0 lg:h-[50px] lg:w-[198px]">
      <Image
        src="/assets/brand/nurzanzibar-logo-transparent.png"
        alt="NURZANZIBAR Tours and Safari logo"
        width={2426}
        height={612}
        priority
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-[rgba(217,217,217,0.53)] bg-white">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1234px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-0">
        <div className="flex items-center gap-8 lg:gap-[33px]">
          <Link href="/" aria-label="Go to NUR Zanzibar home">
            <Logo />
          </Link>
          <div className="hidden h-[76px] w-px bg-[rgba(217,217,217,0.3)] lg:block" />
          <SiteNavLinks className="hidden items-center gap-7 text-[14px] font-medium leading-[18px] text-teal md:flex lg:gap-10" />
        </div>
        <div className="hidden items-center gap-[10px] sm:flex sm:gap-[11px]">
          <Button asChild size="wide">
            <Link href="/trips">View Trips</Link>
          </Button>
        </div>
      </div>
      <SiteNavLinks
        mobile
        className="flex gap-6 overflow-x-auto border-t border-[rgba(217,217,217,0.35)] px-5 py-3 text-[14px] font-medium text-teal [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
      />
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="home-title">
      <div className="relative min-h-[488px]">
        <Image
          src="/assets/figma/hero-beach.png"
          alt="Zanzibar beach with turquoise water and boats for guest activities"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,62,60,0.72)_0%,rgba(17,62,60,0.46)_48%,rgba(17,62,60,0.16)_100%)]" />
        <div className="relative mx-auto flex min-h-[488px] max-w-[1234px] items-center px-5 py-16 sm:px-8 lg:px-0">
          <div className="max-w-[760px]">
            <p className="text-[15px] font-black uppercase leading-[19px] tracking-[2px] text-coral-bright sm:text-[18px]">
              Zanzibar Activity Provider
            </p>
            <h1
              id="home-title"
              className="mt-5 max-w-[730px] text-[42px] font-extrabold leading-[50px] text-white sm:text-[58px] sm:leading-[68px]"
            >
              Reliable Zanzibar activities for your guests
            </h1>
            <p className="mt-5 max-w-[654px] text-[18px] font-medium leading-8 text-white/80 sm:text-[20px]">
              Half-day and full-day island experiences operated for hotels,
              DMCs, agents and travel partners who need dependable local
              activity supply.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-[17px]">
              <Button asChild size="wide">
                <Link href="/trips">View All Trips</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/assets/figma/map-coral-hero.svg"
            alt="Coral silhouette map of Zanzibar"
            width={270}
            height={530}
            priority
            className="pointer-events-none absolute bottom-[-30px] right-[5%] hidden w-[180px] md:block lg:right-[40px] lg:w-[200px]"
          />
        </div>
      </div>
      <div className="bg-cream">
        <div className="mx-auto grid max-w-[1234px] grid-cols-2 gap-y-5 px-5 py-7 sm:px-8 md:grid-cols-4 lg:px-0">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="border-l border-[rgba(17,62,60,0.09)] pl-[14px]"
            >
              <p className="text-[24px] font-bold leading-[34px] text-[#025f5e]">
                {stat.value}
              </p>
              <p className="text-[13px] font-medium leading-5 text-[rgba(17,62,60,0.45)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: string; dark?: boolean }) {
  return <p className="type-overline">{children}</p>;
}

function ActivityCatalogue() {
  return (
    <section
      id="trips"
      className="relative border-b border-[rgba(17,62,60,0.09)] px-5 py-[62px] sm:px-8 lg:px-0"
      aria-labelledby="activities-title"
    >
      <div className="mx-auto max-w-[1234px]">
        <SectionLabel>Activity Catalogue</SectionLabel>
        <h2
          id="activities-title"
          className="mt-[30px] text-[34px] font-extrabold leading-[42px] text-teal sm:text-[42px] sm:leading-[50px]"
        >
          Exciting Zanzibar Activities We Offer
        </h2>
        <ActivityRail activities={trips} />
      </div>
    </section>
  );
}

function PartnerSection() {
  return (
    <section
      id="partners"
      className="bg-cream px-5 py-[66px] sm:px-8 lg:px-0"
      aria-labelledby="partners-title"
    >
      <div className="mx-auto max-w-[1136px] text-center">
        <SectionLabel>Activity Catalogue</SectionLabel>
        <h2
          id="partners-title"
          className="mx-auto mt-8 max-w-[909px] text-[34px] font-extrabold leading-[42px] text-teal sm:text-[42px] sm:leading-[50px]"
        >
          White-label Zanzibar activities
          <br className="hidden sm:block" /> for travel partners
        </h2>
        <div className="mx-auto mt-[62px] grid max-w-[1115px] gap-x-[14px] gap-y-[56px] sm:grid-cols-2 md:grid-cols-4">
          {partnerCards.map((card) => (
            <article
              key={card.title}
              className="relative min-h-[167px] rounded-[8px] border border-[#e3d7c6] bg-white/75 px-4 pb-6 pt-[52px]"
            >
              <Image
                src={card.icon}
                alt={card.alt}
                width={64}
                height={64}
                className="absolute left-1/2 top-[-29px] size-[58px] -translate-x-1/2"
              />
              <h3 className="text-[19px] font-bold leading-[27px] text-teal">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[22px] text-muted-copy">
                {card.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-[43px] max-w-[928px] text-[17px] leading-6 text-muted-copy">
          NUR ZANZIBAR TOURS operates short Zanzibar experiences behind the scenes for hotels,
          DMCs, agents and STOs. Partners can sell under their own brand,
          request STO rates and rely on local pickup, guides and guest support.
        </p>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      aria-hidden="true"
      className="mt-[2px] shrink-0"
    >
      <circle cx="9.5" cy="9.5" r="9.2" fill="#E96855" />
      <path
        d="M5.6 9.6 8.2 12.1 13.7 6.8"
        stroke="#153B3A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SplitCta({
  image,
  map,
  imageAlt,
  title,
  copy,
  reverse = false,
  compactTop = false,
}: {
  image: string;
  map: string;
  imageAlt: string;
  title: string;
  copy?: string;
  reverse?: boolean;
  compactTop?: boolean;
}) {
  const imagePanel = (
    <div
      className={`relative min-h-[238px] overflow-hidden md:min-h-[422px] ${
        reverse ? "md:order-1" : "md:order-2"
      } ${
        reverse
          ? "md:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]"
          : "md:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 660px, 100vw"
        loading="eager"
        className="object-cover"
      />
    </div>
  );

  return (
    <section
      className={`px-5 pb-[60px] sm:px-8 lg:px-0 ${
        compactTop ? "pt-8 sm:pt-[60px]" : "pt-[60px]"
      }`}
    >
      <div
        className={`relative mx-auto grid max-w-[1170px] overflow-hidden rounded-[12px] bg-teal shadow-[0_4px_17px_0_rgba(0,0,0,0.1)] md:grid-cols-2 ${
          reverse ? "lg:grid-cols-[663px_1fr]" : "lg:grid-cols-[507px_1fr]"
        }`}
      >
        {reverse ? imagePanel : null}
        <div
          className={`relative z-10 flex min-h-[360px] flex-col justify-center px-7 py-10 sm:px-12 md:min-h-[422px] ${
            reverse ? "md:order-2 md:pl-16 md:pr-10" : "md:order-1"
          }`}
        >
          <SectionLabel dark>Activity Catalogue</SectionLabel>
          <h2 className="mt-5 max-w-[420px] text-[34px] font-extrabold leading-[42px] text-white sm:text-[40px] sm:leading-[48px]">
            {title}
          </h2>
          {copy ? (
            <p className="mt-[22px] max-w-[384px] text-[16px] leading-[25px] text-[#d7f4ee]">
              {copy}
            </p>
          ) : (
            <ul className="mt-5 space-y-[10px]">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-[7px] text-[15px] font-medium leading-[22px] text-white/70"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-[30px] flex flex-wrap gap-[17px]">
            <Button asChild size="wide">
              <Link href="/partners#rates">Partner rates</Link>
            </Button>
            <Button asChild variant="secondary-dark" size="default">
              <Link href="/trips">Open Trips</Link>
            </Button>
          </div>
        </div>
        {reverse ? null : imagePanel}
        <Image
          src={map}
          alt="Coral silhouette map of Zanzibar"
          width={156}
          height={305}
          loading="eager"
          className={`pointer-events-none absolute z-20 hidden w-[156px] md:block ${
            reverse ? "left-[43%] top-[62px]" : "left-[42%] top-[78px]"
          }`}
        />
      </div>
    </section>
  );
}

export function LogoStrip() {
  return (
    <section
      className="px-5 pb-[96px] pt-4 sm:px-8 lg:px-0"
      aria-labelledby="agencies-title"
    >
      <div className="mx-auto max-w-[1137px] text-center">
        <h2
          id="agencies-title"
          className="text-[14px] font-black uppercase leading-[18px] tracking-[4px] text-teal-deep"
        >
          Partners we work with
        </h2>
        <div className="relative mt-8 sm:overflow-hidden">
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-5 gap-y-7 sm:hidden">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading="eager"
                className="max-h-[56px] w-auto max-w-[128px] object-contain"
              />
            ))}
          </div>
          <div className="hidden grid-cols-5 items-center justify-items-center gap-x-10 gap-y-8 opacity-100 sm:grid">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading="eager"
                className="max-h-[70px] w-auto max-w-[170px] object-contain"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[150px] bg-gradient-to-r from-white to-white/0 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[150px] bg-gradient-to-l from-white to-white/0 sm:block" />
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="m10 1.7 2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.6-5 2.6 1-5.6-4.1-4 5.6-.8L10 1.7Z"
        fill="#E96855"
      />
    </svg>
  );
}

function ReviewsAndFaq() {
  return (
    <section className="relative z-[100] px-5 pb-[58px] pt-[12px] sm:px-8 lg:px-0">
      <div className="mx-auto max-w-[1209px]">
        <div className="text-center">
          <SectionLabel>Our Reviews</SectionLabel>
          <h2 className="mt-[21px] text-[36px] font-extrabold leading-[44px] text-teal sm:text-[46px] sm:leading-[50px]">
            What they say about us?
          </h2>
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href={tripadvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(17,62,60,0.18)] bg-cream px-4 py-2 text-[13px] font-bold uppercase tracking-[1.4px] text-teal-deep"
          >
            <SocialIcon icon="tripadvisor" />
            Verified by Tripadvisor
          </Link>
        </div>
        <div className="mt-[34px] grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-[10px] border border-[rgba(17,62,60,0.16)] bg-cream p-7"
            >
              <div
                className="flex gap-2"
                aria-label="Five star testimonial rating"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <p className="mt-6 text-[18px] font-medium leading-[27px] text-[#2e3138]">
                {review.quote}
              </p>
              <p className="mt-6 text-[18px] font-bold leading-[27px] text-[#2e3138]">
                {review.author}
              </p>
              <p className="mt-1 text-[16px] leading-6 text-[#5e6573]">
                {review.details}
              </p>
              <Link
                href={tripadvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-[13px] font-bold uppercase tracking-[1.2px] text-teal"
              >
                Read on Tripadvisor
              </Link>
            </article>
          ))}
        </div>
        <FaqSection />
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: "Can partners sell NUR ZANZIBAR TOURS activities under their own brand?",
      answer:
        "Yes. Hotels, DMCs and travel sellers can request white-label descriptions, pickup notes and operational support for guest-facing sales.",
    },
    {
      question: "Do you support private groups and custom timings?",
      answer:
        "Yes. Shared departures, private groups and adjusted pickup windows can be arranged based on availability and route requirements.",
    },
    {
      question: "How do partner rates work?",
      answer:
        "Send an enquiry with your agency details, expected volume and activity interests. NUR ZANZIBAR TOURS will confirm STO or net rates for suitable products.",
    },
    {
      question: "Which Zanzibar activity types are available?",
      answer:
        "The catalogue covers marine, culture, nature and short safari-style extensions, including half-day and full-day options.",
    },
  ];

  return (
    <div className="relative z-[100] mx-auto mt-[76px] max-w-[846px] text-center">
      <SectionLabel>Partner Questions</SectionLabel>
      <h2 className="mt-4 text-[34px] font-extrabold leading-[44px] text-[#2e3138] sm:text-[44px] sm:leading-[64px]">
        Frequently asked questions
      </h2>
      <p className="mx-auto mt-1 text-[20px] leading-[30px] text-[#5e6573]">
        Clear answers for hotels, DMCs, agents and travel partners.
      </p>
      <FaqAccordion faqs={faqs} />
      <p className="mx-auto mt-8 max-w-[680px] text-[16px] leading-7 text-[#5e6573]">
        For more questions you can contact us on{" "}
        <Link href={EMAIL_URL} className="font-semibold text-teal">
          {EMAIL_ADDRESS}
        </Link>{" "}
        or{" "}
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-teal"
        >
          {WHATSAPP_LABEL}
        </Link>
        .
      </p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="bg-cream px-5 pb-[18px] pt-[52px] sm:px-8 lg:px-0"
    >
      <div className="mx-auto max-w-[1248px]">
        <div className="grid gap-10 lg:grid-cols-[330px_1fr_220px]">
          <div>
            <Link href="/" aria-label="Go to NUR Zanzibar home">
              <Logo />
            </Link>
            <p className="mt-10 max-w-[360px] text-[15px] leading-6 text-teal-deep">
              Zanzibar-based activity supply for short trips, day experiences
              and partner-ready local operations.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-[150px_1fr]">
            <div>
              <h2 className="text-[12px] font-semibold uppercase leading-4 text-teal">
                Explore
              </h2>
              <ul className="mt-7 space-y-[10px]">
                {footerExploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] font-medium leading-[22px] text-[#61716e]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[12px] font-semibold uppercase leading-4 text-teal">
                Trips
              </h2>
              <ul className="mt-7 grid gap-x-7 gap-y-[10px] sm:grid-cols-2 xl:grid-cols-3">
                {footerTripLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] font-medium leading-[22px] text-[rgba(17,62,60,0.49)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-[12px] font-semibold uppercase leading-4 text-teal">
              Enquiries
            </h2>
            <p className="mt-7 text-[14px] leading-[22px] text-teal-deep">
              Trip questions, pickup areas, partner rates and white-label
              options.
            </p>
            <Button asChild variant="footer" className="mt-[18px]">
              <Link href="/contact">Send enquiry</Link>
            </Button>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(17,62,60,0.26)] text-teal-deep transition hover:border-teal hover:bg-[rgba(17,62,60,0.08)] hover:text-teal"
                >
                  <SocialIcon icon={link.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[rgba(17,62,60,0.22)] pt-[19px]">
          <p className="text-[13px] leading-[18px] text-teal-deep">
            &copy; 2026 NUR Zanzibar. Short Zanzibar activities for guests and
            travel partners.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <main className="bg-white">
      <SiteHeader />
      <HeroSection />
      <ActivityCatalogue />
      <PartnerSection />
      <SplitCta
        image="/assets/figma/cta-image-home-clean.webp"
        map="/assets/figma/map-coral-cta.svg"
        imageAlt="Travel guests and a local guide smiling on a Zanzibar boat activity"
        title="Short-trip operations that are easy to sell"
      />
      <LogoStrip />
      <ReviewsAndFaq />
      <div className="relative z-0 bg-cream">
        <SplitCta
          image="/assets/figma/cta-image-footer-clean.webp"
          map="/assets/figma/map-coral-final.svg"
          imageAlt="Beach sunset with performers and warm lights in Zanzibar"
          title="Plan a short Zanzibar experience"
          copy="Ask about availability, pickup, private group options or the right short activity for your stay."
          reverse
          compactTop
        />
      </div>
      <SiteFooter />
    </main>
  );
}
