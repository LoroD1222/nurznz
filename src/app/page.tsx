import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const pageTitle = "NUR Zanzibar | B2B Zanzibar Activity Provider";
const pageDescription =
  "Reliable half-day and full-day Zanzibar activities for hotels, DMCs, agents and travel partners, with partner rates, white-label options and local operations support.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: "/",
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/assets/figma/hero-beach.png",
          width: 1200,
          height: 630,
          alt: "Turquoise Zanzibar beach and boats used for NUR Zanzibar partner activities",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/assets/figma/hero-beach.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "TravelAgency"],
    name: SITE_NAME,
    alternateName: "NURZANZI Tours and Safaris",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/figma/logo.png`,
    description: SITE_DESCRIPTION,
    areaServed: {
      "@type": "Place",
      name: "Zanzibar, Tanzania",
    },
    knowsAbout: [
      "Zanzibar activities",
      "Partner rates",
      "White-label travel experiences",
      "Hotel and DMC activity operations",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "B2B Zanzibar activity supply",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: "Zanzibar, Tanzania",
    },
    serviceType: "Short Zanzibar activities for travel partners",
    description:
      "Half-day and full-day island experiences operated for hotels, DMCs, agents and travel partners who need dependable local activity supply.",
  },
];

export default function Page() {
  return (
    <>
      <HomePage />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
