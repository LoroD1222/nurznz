import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ActivityRail } from "@/components/home/activity-rail";
import { FaqAccordion } from "@/components/home/faq-accordion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Trips", href: "/experience" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const stats = [
  { value: "3-4h", label: "half-day activities" },
  { value: "1 day", label: "full-day operations" },
  { value: "for B2B", label: "hotels, DMCs, agents" },
  { value: "Daily ops", label: "guest-ready logistics" },
];

const activities = [
  {
    title: "Mnemba snorkelling",
    category: "Marine",
    duration: "3-4h",
    durationClass: "bg-coral text-white",
    image: "/assets/figma/activity-fish.jpg",
    alt: "Tropical fish in clear water during a Mnemba snorkelling activity",
  },
  {
    title: "Mnemba snorkelling",
    category: "Marine",
    duration: "4h",
    durationClass: "bg-[#153b3a] text-white",
    image: "/assets/figma/activity-monkey.jpg",
    alt: "Monkey in a Zanzibar forest visited during nature routes",
  },
  {
    title: "Mnemba snorkelling",
    category: "Marine",
    duration: "1 day",
    durationClass: "bg-[#fffaf3] text-teal-deep",
    image: "/assets/figma/activity-lagoon.jpg",
    alt: "Zanzibar coastal lodge and turquoise water on a marine activity route",
  },
  {
    title: "Mnemba snorkelling",
    category: "Marine",
    duration: "Full day",
    durationClass: "bg-coral text-teal-deep",
    image: "/assets/figma/activity-elephant.jpg",
    alt: "Elephants in a green safari landscape connected to activity planning",
  },
];

const partnerCards = [
  {
    title: "White-label ready",
    body: "Sell activities under your brand while NUR handles guides, pickups and local guest flow.",
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
];

const reviews = [
  {
    id: 0,
    quote:
      "NUR made our Zanzibar short trips easier to sell because timings, pickup notes and guest support were clear from the start.",
    author: "Amina Salim",
    details: "Hotel experiences desk",
  },
  {
    id: 1,
    quote:
      "The team understands how agents work. Rates, route notes and operational answers arrive quickly.",
    author: "Jonas Weber",
    details: "DMC product manager",
  },
  {
    id: 2,
    quote:
      "Private group requests are handled with practical local detail, from pickup windows to guest-ready confirmations.",
    author: "Mariam Said",
    details: "Private group planner",
  },
];

const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Trips", href: "/experience" },
      { label: "Partners", href: "/partners" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Activities",
    links: [
      { label: "Mnemba snorkelling", href: "/experience#mnemba" },
      { label: "Stone Town walk", href: "/experience#stone-town" },
      { label: "Spice farm visit", href: "/experience#spice-farm" },
      { label: "Safari Blue day", href: "/experience#safari-blue" },
    ],
  },
  {
    heading: "Partner supply",
    links: [
      { label: "Partner rates", href: "/partners#rates" },
      { label: "STO rates", href: "/partners#rates" },
      { label: "White-label options", href: "/partners#white-label" },
      { label: "Private groups", href: "/partners#groups" },
    ],
  },
];

function Logo() {
  return (
    <div className="relative h-[62px] w-[156px] overflow-hidden">
      <Image
        src="/assets/figma/logo.png"
        alt="NURZANZI Tours and Safaris logo"
        width={348}
        height={232}
        priority
        className="absolute left-[-187px] top-[-19px] h-[232px] w-[348px] max-w-none object-cover"
      />
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-[rgba(217,217,217,0.53)] bg-white">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1234px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-0">
        <div className="flex items-center gap-8 lg:gap-[33px]">
          <Logo />
          <div className="hidden h-[76px] w-px bg-[rgba(217,217,217,0.3)] lg:block" />
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-[14px] font-medium leading-[18px] text-teal md:flex lg:gap-10"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={item.label === "Home" ? "font-bold text-coral" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-[10px] sm:flex sm:gap-[11px]">
          <Button asChild variant="secondary" size="compact">
            <Link href="/experience">Open Trips</Link>
          </Button>
          <Button asChild size="wide">
            <Link href="/partners#rates">Partner rates</Link>
          </Button>
        </div>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="flex gap-6 overflow-x-auto border-t border-[rgba(217,217,217,0.35)] px-5 py-3 text-[14px] font-medium text-teal md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={item.label === "Home" ? "font-bold text-coral" : "shrink-0"}
          >
            {item.label}
          </Link>
        ))}
      </nav>
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
        <div className="absolute inset-0 bg-[rgba(17,62,60,0.62)]" />
        <div className="relative mx-auto flex min-h-[488px] max-w-[1234px] items-center px-5 py-16 sm:px-8 lg:px-0">
          <div className="max-w-[656px]">
            <p className="text-[15px] font-black uppercase leading-[19px] tracking-[2px] text-coral-bright sm:text-[18px]">
              B2B Zanzibar Activity Provider
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
                <Link href="/partners#rates">Partner rates</Link>
              </Button>
              <Button asChild variant="secondary-dark" size="default">
                <Link href="/experience">Open Trips</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/assets/figma/map-coral-hero.svg"
            alt="Coral silhouette map of Zanzibar"
            width={270}
            height={530}
            priority
            className="pointer-events-none absolute bottom-[-66px] right-[2%] hidden w-[230px] md:block lg:right-[-30px] lg:w-[270px]"
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
      <div className="mx-auto max-w-[1287px]">
        <SectionLabel>Activity Catalogue</SectionLabel>
        <h2
          id="activities-title"
          className="mt-[30px] text-[34px] font-extrabold leading-[42px] text-teal sm:text-[42px] sm:leading-[50px]"
        >
          Exciting Zanzibar Activities We Offer
        </h2>
        <ActivityRail activities={activities} />
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
        <div className="mx-auto mt-[62px] grid max-w-[706px] gap-x-[26px] gap-y-[56px] md:grid-cols-2">
          {partnerCards.map((card) => (
            <article
              key={card.title}
              className="relative rounded-[8px] border border-[#e3d7c6] bg-white/75 px-5 pb-6 pt-[52px]"
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
          NUR operates short Zanzibar experiences behind the scenes for hotels,
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

function SplitCta({
  image,
  map,
  imageAlt,
  title,
  copy,
  reverse = false,
}: {
  image: string;
  map: string;
  imageAlt: string;
  title: string;
  copy?: string;
  reverse?: boolean;
}) {
  return (
    <section className="px-5 py-[60px] sm:px-8 lg:px-0">
      <div className="relative mx-auto min-h-[422px] max-w-[1136px] overflow-hidden rounded-[12px] bg-teal shadow-[0_4px_17px_0_rgba(0,0,0,0.1)]">
        <div
          className={`absolute inset-y-0 hidden w-[58%] overflow-hidden md:block ${
            reverse ? "left-0" : "right-0"
          }`}
          style={{
            clipPath: reverse
              ? "polygon(0 0, 82% 0, 100% 100%, 0 100%)"
              : "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 660px, 100vw"
            className="object-cover"
          />
        </div>
        <div
          className={`relative z-10 flex min-h-[422px] max-w-[500px] flex-col justify-center px-7 py-10 sm:px-12 ${
            reverse ? "ml-auto md:mr-8" : ""
          }`}
        >
          <SectionLabel dark>Activity Catalogue</SectionLabel>
          <h2 className="mt-5 text-[34px] font-extrabold leading-[42px] text-white sm:text-[40px] sm:leading-[48px]">
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
              <Link href="/experience">Open Trips</Link>
            </Button>
          </div>
        </div>
        <Image
          src={map}
          alt="Coral silhouette map of Zanzibar"
          width={156}
          height={305}
          className={`pointer-events-none absolute top-[82px] z-10 hidden w-[156px] md:block ${
            reverse ? "left-[43%]" : "left-[38%]"
          }`}
        />
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <section
      className="px-5 pb-[76px] pt-2 sm:px-8 lg:px-0"
      aria-labelledby="agencies-title"
    >
      <div className="mx-auto max-w-[1137px] text-center">
        <h2
          id="agencies-title"
          className="text-[14px] font-black uppercase leading-[18px] tracking-[4px] text-teal-deep"
        >
          What agencies are we working with?
        </h2>
        <div className="relative mt-8 overflow-hidden">
          <div className="flex animate-[logo-roll_22s_linear_infinite] items-center gap-[46px] opacity-95">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <Image
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="shrink-0 object-contain"
                style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[150px] bg-gradient-to-r from-white to-white/0" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[150px] bg-gradient-to-l from-white to-white/0" />
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
    <section className="px-5 pb-[58px] sm:px-8 lg:px-0">
      <div className="mx-auto max-w-[1209px]">
        <div className="text-center">
          <SectionLabel>Our Reviews</SectionLabel>
          <h2 className="mt-[21px] text-[36px] font-extrabold leading-[44px] text-teal sm:text-[46px] sm:leading-[50px]">
            What they say about us?
          </h2>
        </div>
        <div className="mt-[58px] grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-[10px] border border-[rgba(17,62,60,0.16)] bg-cream p-6"
            >
              <div className="relative h-[217px] overflow-hidden rounded-[10px] bg-[#f5f7f8]">
                <Image
                  src="/assets/figma/review-group.png"
                  alt="Guests posing beside safari vehicles after a NUR Zanzibar partner activity"
                  fill
                  sizes="(min-width: 1024px) 332px, 90vw"
                  className="object-cover"
                />
              </div>
              <div
                className="mt-6 flex gap-2"
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
      question: "Can partners sell NUR activities under their own brand?",
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
        "Send an enquiry with your agency details, expected volume and activity interests. NUR will confirm STO or net rates for suitable products.",
    },
    {
      question: "Which Zanzibar activity types are available?",
      answer:
        "The catalogue covers marine, culture, nature and short safari-style extensions, including half-day and full-day options.",
    },
  ];

  return (
    <div className="mx-auto mt-[76px] max-w-[846px] text-center">
      <SectionLabel>Partner Questions</SectionLabel>
      <h2 className="mt-4 text-[34px] font-extrabold leading-[44px] text-[#2e3138] sm:text-[44px] sm:leading-[64px]">
        Frequently asked questions
      </h2>
      <p className="mx-auto mt-1 text-[20px] leading-[30px] text-[#5e6573]">
        Clear answers for hotels, DMCs, agents and travel partners.
      </p>
      <FaqAccordion faqs={faqs} />
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
        <div className="grid gap-10 lg:grid-cols-[360px_1fr_220px]">
          <div>
            <p className="text-[20px] font-bold leading-6 text-[#fff8ea]">
              NUR ZANZIBAR
            </p>
            <p className="mt-10 max-w-[360px] text-[15px] leading-6 text-teal-deep">
              Zanzibar-based activity supply for short trips, day experiences
              and partner-ready local operations.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h2 className="text-[12px] font-semibold uppercase leading-4 text-teal">
                  {column.heading}
                </h2>
                <ul className="mt-7 space-y-[10px]">
                  {column.links.map((link) => (
                    <li key={link.label}>
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
            ))}
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
          </div>
        </div>
        <div className="mt-10 border-t border-[rgba(17,62,60,0.22)] pt-[19px]">
          <p className="text-[13px] leading-[18px] text-teal-deep">
            © 2026 NUR Zanzibar. Short Zanzibar activities for guests and
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
        image="/assets/figma/cta-boat.png"
        map="/assets/figma/map-coral-cta.svg"
        imageAlt="Travel guests and a local guide smiling on a Zanzibar boat activity"
        title="Short-trip operations that are easy to sell"
      />
      <LogoStrip />
      <ReviewsAndFaq />
      <div className="bg-cream pt-[140px]">
        <SplitCta
          image="/assets/figma/cta-sunset.png"
          map="/assets/figma/map-coral-final.svg"
          imageAlt="Beach sunset with performers and warm lights in Zanzibar"
          title="Plan a short Zanzibar experience"
          copy="Ask about availability, pickup, private group options or the right short activity for your stay."
          reverse
        />
      </div>
      <SiteFooter />
    </main>
  );
}
