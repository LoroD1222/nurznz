export type GalleryImage = {
  src: string;
  alt: string;
};

export type ExperienceFact = readonly [heading: string, body: string];

export type Experience = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  durationClass?: string;
  image: string;
  alt: string;
  excerpt: string;
  overline: string;
  description: string;
  highlights: ExperienceFact[];
  infoItems: string[];
  ctaCopy: string;
  gallery: GalleryImage[];
};

const driveAsset = (slug: string, index: number) =>
  `/assets/drive/${slug}/${slug}-${String(index).padStart(2, "0")}.webp`;

const driveGallery = (
  slug: string,
  title: string,
  count: number,
): GalleryImage[] =>
  Array.from({ length: count }, (_, index) => ({
    src: driveAsset(slug, index + 1),
    alt: `${title} Zanzibar trip photo ${index + 1}`,
  }));

const dayTripSafariGallery = driveGallery("day-trip-safari", "Day Trip Safari", 6);
const jozaniForestGallery = driveGallery("jozani-forest", "Jozani Forest", 7);
const mnembaSnorkelingGallery = driveGallery("mnemba-snorkeling", "Mnemba Snorkeling", 6);
const mtendeBeachGallery = driveGallery("mtende-beach", "Mtende Beach", 5);
const prisonIslandGallery = driveGallery("prison-island", "Prison Island", 6);
const salaamCaveGallery = driveGallery("salaam-cave", "Salaam Cave", 6);
const safariBlueGallery = driveGallery("safari-blue", "Safari Blue", 7);
const snorkelingAtMnembaGallery = driveGallery(
  "snorkeling-at-mnemba",
  "Snorkeling at Mnemba",
  6,
);
const spiceTourGallery = driveGallery("spice-tour", "Spice Tour", 6);
const stoneTownGallery = driveGallery("stone-town", "Stone Town", 7);
const sunsetAtMichamviGallery = driveGallery(
  "sunset-at-michamvi",
  "Sunset at Michamvi",
  7,
);

const dayTripSafari = dayTripSafariGallery[0];
const jozaniForest = jozaniForestGallery[0];
const mnembaSnorkeling = mnembaSnorkelingGallery[0];
const mtendeBeach = mtendeBeachGallery[4] ?? mtendeBeachGallery[0];
const prisonIsland = prisonIslandGallery[0];
const salaamCave = salaamCaveGallery[2] ?? salaamCaveGallery[0];
const safariBlue = safariBlueGallery[2] ?? safariBlueGallery[0];
const snorkelingAtMnemba = snorkelingAtMnembaGallery[0];
const spiceTour = spiceTourGallery[0];
const stoneTown = stoneTownGallery[0];
const sunsetAtMichamvi = sunsetAtMichamviGallery[4] ?? sunsetAtMichamviGallery[0];

export const experiences: Experience[] = [
  {
    slug: "day-trip-safari",
    title: "Day Trip Safari",
    category: "Nature",
    duration: "1 day",
    image: dayTripSafari.src,
    alt: dayTripSafari.alt,
    excerpt:
      "A full-day safari-style nature route for guests who want a bigger land-based experience from Zanzibar.",
    overline: "Zanzibar Safari Extension",
    description:
      "A full-day nature-led trip planned around practical transfer timing, clear pickup notes and a guided safari-style experience for guests who want more than a beach day.",
    highlights: [
      ["Pickup", "Hotel or agreed meeting point"],
      ["Duration", "Full-day routing"],
      ["Guest fit", "Best for nature lovers"],
      ["Guide", "Local support and timing checks"],
    ],
    infoItems: [
      "Transfer and pickup timing",
      "Safari-style route notes",
      "Guest comfort requirements",
      "Private group options",
    ],
    ctaCopy:
      "Confirm the travel date, pickup area and guest count so NUR can check the most practical safari-style day route and timings.",
    gallery: dayTripSafariGallery,
  },
  {
    slug: "jozani-forest",
    title: "Jozani Forest",
    category: "Nature",
    duration: "4h",
    image: jozaniForest.src,
    alt: jozaniForest.alt,
    excerpt:
      "A guided forest walk for red colobus sightings, mangrove paths and easy nature time away from the beach.",
    overline: "Zanzibar Forest Walk",
    description:
      "A compact nature experience through Jozani Forest with wildlife moments, shaded walking paths and clear pickup timing for guests who want an easy half-day activity.",
    highlights: [
      ["Pickup", "Hotel area pickup available"],
      ["Duration", "About 4 hours"],
      ["Walk level", "Easy guided paths"],
      ["Guide", "Local nature guidance"],
    ],
    infoItems: [
      "Pickup area and walking pace",
      "Wildlife viewing expectations",
      "Comfortable shoes and sun cover",
      "Private or shared handling",
    ],
    ctaCopy:
      "Share the guest count, hotel area and preferred half-day window so the forest route can be planned around pickup and walking comfort.",
    gallery: jozaniForestGallery,
  },
  {
    slug: "mnemba-snorkeling",
    title: "Mnemba Snorkeling",
    category: "Marine",
    duration: "3-4h",
    image: mnembaSnorkeling.src,
    alt: mnembaSnorkeling.alt,
    excerpt:
      "A clear-water reef morning with boat support, gear and local guidance near Mnemba.",
    overline: "Zanzibar Activity & Snorkeling",
    description:
      "A reef-focused half-day trip near Mnemba with boat support, snorkeling gear and local guidance for guests who want a dependable marine experience.",
    highlights: [
      ["Pickup", "Hotel or meeting point"],
      ["Duration", "Half-day slots"],
      ["Swim level", "Suitable for beginners"],
      ["Guide", "Local boat, towels, gear"],
    ],
    infoItems: [
      "Duration and pickup window",
      "Guest suitability",
      "Inclusions and exclusions",
      "Private or shared options",
    ],
    ctaCopy:
      "Check the practical details before choosing a trip: duration, pickup options, inclusions, guest suitability and private or shared formats.",
    gallery: mnembaSnorkelingGallery,
  },
  {
    slug: "mtende-beach",
    title: "Mtende Beach",
    category: "Coast",
    duration: "Half day",
    image: mtendeBeach.src,
    alt: mtendeBeach.alt,
    excerpt:
      "A scenic southern coast route for beach time, photos and an easy half-day Zanzibar escape.",
    overline: "Southern Zanzibar Coast",
    description:
      "A relaxed coastal trip to Mtende Beach for guests who want striking scenery, swimming time and a simple half-day route with clear pickup coordination.",
    highlights: [
      ["Pickup", "Hotel area pickup available"],
      ["Duration", "Half-day route"],
      ["Best for", "Photos and beach time"],
      ["Guide", "Local route support"],
    ],
    infoItems: [
      "Tide and beach conditions",
      "Pickup distance from hotel",
      "Swimming comfort",
      "Private timing options",
    ],
    ctaCopy:
      "Ask about tide timing, pickup distance and the best half-day window for a smooth Mtende Beach visit.",
    gallery: mtendeBeachGallery,
  },
  {
    slug: "prison-island",
    title: "Prison Island",
    category: "Marine",
    duration: "4h",
    image: prisonIsland.src,
    alt: prisonIsland.alt,
    excerpt:
      "A short boat trip with island views, historic context and optional beach or sandbank time.",
    overline: "Stone Town Boat Trip",
    description:
      "A practical half-day boat route from Stone Town to Prison Island, planned around weather, tide and guest timing.",
    highlights: [
      ["Pickup", "Hotel or Stone Town meet"],
      ["Duration", "About 4 hours"],
      ["Boat", "Short island crossing"],
      ["Guide", "Local island context"],
    ],
    infoItems: [
      "Boat timing and weather",
      "Island visit expectations",
      "Beach or sandbank options",
      "Group size and pickup plan",
    ],
    ctaCopy:
      "Confirm pickup area, preferred timing and whether guests want a simple island visit or extra beach time.",
    gallery: prisonIslandGallery,
  },
  {
    slug: "salaam-cave",
    title: "Salaam Cave",
    category: "Nature",
    duration: "3-4h",
    image: salaamCave.src,
    alt: salaamCave.alt,
    excerpt:
      "A short cave-swim style activity for guests who want a cooler inland stop between beach days.",
    overline: "Zanzibar Cave Swim",
    description:
      "A compact cave and swim experience with easy routing, practical guest guidance and flexible timing for a lighter Zanzibar activity.",
    highlights: [
      ["Pickup", "Hotel area pickup available"],
      ["Duration", "3-4 hour option"],
      ["Guest fit", "Comfortable swimmers"],
      ["Guide", "Local activity support"],
    ],
    infoItems: [
      "Swim comfort and footwear",
      "Pickup and drive timing",
      "What to bring",
      "Private group handling",
    ],
    ctaCopy:
      "Share guest swim comfort, hotel area and preferred time so NUR can recommend the right cave visit window.",
    gallery: salaamCaveGallery,
  },
  {
    slug: "safari-blue",
    title: "Safari Blue",
    category: "Marine",
    duration: "1 day",
    image: safariBlue.src,
    alt: safariBlue.alt,
    excerpt:
      "A full-day boat experience with island stops, swimming time and a classic Zanzibar marine route.",
    overline: "Zanzibar Boat Day",
    description:
      "A full-day marine route with boat support, swimming stops and island scenery for guests who want a classic Zanzibar day on the water.",
    highlights: [
      ["Pickup", "Hotel or meeting point"],
      ["Duration", "Full-day boat route"],
      ["Water level", "Comfortable swimmers"],
      ["Guide", "Boat crew and local support"],
    ],
    infoItems: [
      "Weather and tide checks",
      "Marine route inclusions",
      "Lunch and boat timing",
      "Private boat options",
    ],
    ctaCopy:
      "Check availability, weather suitability and whether guests need shared or private boat handling for Safari Blue.",
    gallery: safariBlueGallery,
  },
  {
    slug: "snorkeling-at-mnemba",
    title: "Snorkeling at Mnemba",
    category: "Marine",
    duration: "3-4h",
    image: snorkelingAtMnemba.src,
    alt: snorkelingAtMnemba.alt,
    excerpt:
      "A partner-ready Mnemba snorkeling option with clear inclusions, pickup notes and local boat support.",
    overline: "Mnemba Marine Activity",
    description:
      "A clear-water snorkeling trip at Mnemba arranged with practical pickup notes, guest suitability checks and local boat coordination.",
    highlights: [
      ["Pickup", "Hotel or meeting point"],
      ["Duration", "3-4 hour marine slot"],
      ["Swim level", "Open-water comfort helpful"],
      ["Guide", "Boat, gear and local crew"],
    ],
    infoItems: [
      "Sea conditions and pickup window",
      "Gear and towel expectations",
      "Guest swim comfort",
      "Private or shared boat",
    ],
    ctaCopy:
      "Send the hotel area, guest count and preferred morning window so the Mnemba snorkeling plan can be checked.",
    gallery: snorkelingAtMnembaGallery,
  },
  {
    slug: "spice-tour",
    title: "Spice Tour",
    category: "Culture",
    duration: "3h",
    image: spiceTour.src,
    alt: spiceTour.alt,
    excerpt:
      "A sensory spice farm visit for guests who want a short cultural activity between beach days.",
    overline: "Zanzibar Spice Farm",
    description:
      "A guided spice farm visit with local context, tasting moments and simple pickup timing for guests who want an easy cultural route.",
    highlights: [
      ["Pickup", "Hotel area pickup available"],
      ["Duration", "About 3 hours"],
      ["Guest fit", "Easy walking"],
      ["Guide", "Local farm guidance"],
    ],
    infoItems: [
      "Farm route and tasting notes",
      "Pickup area and timing",
      "Comfortable walking shoes",
      "Private group options",
    ],
    ctaCopy:
      "Share hotel area, travel date and guest count so NUR can check the best spice farm timing.",
    gallery: spiceTourGallery,
  },
  {
    slug: "stone-town",
    title: "Stone Town",
    category: "Culture",
    duration: "3h",
    image: stoneTown.src,
    alt: stoneTown.alt,
    excerpt:
      "A compact heritage walk through Stone Town with local context, simple routing and guest-ready timing.",
    overline: "Zanzibar Heritage Walk",
    description:
      "A guided Stone Town route for guests who want local stories, historic lanes and practical timing that fits around beach stays or transfers.",
    highlights: [
      ["Pickup", "Hotel or Stone Town meet"],
      ["Duration", "About 3 hours"],
      ["Walk level", "Easy urban route"],
      ["Guide", "Local culture guide"],
    ],
    infoItems: [
      "Meeting point and route length",
      "Heat and walking comfort",
      "Market or heritage focus",
      "Private guide options",
    ],
    ctaCopy:
      "Confirm hotel area, preferred walking time and any market or heritage priorities for the Stone Town route.",
    gallery: stoneTownGallery,
  },
  {
    slug: "sunset-at-michamvi",
    title: "Sunset at Michamvi",
    category: "Coast",
    duration: "Evening",
    image: sunsetAtMichamvi.src,
    alt: sunsetAtMichamvi.alt,
    excerpt:
      "A relaxed evening beach plan for sunset views, coastal atmosphere and easy guest coordination.",
    overline: "Zanzibar Sunset Plan",
    description:
      "A lighter evening activity around Michamvi sunset timing, planned for guests who want a relaxed coastal finish to the day.",
    highlights: [
      ["Pickup", "Hotel area pickup available"],
      ["Duration", "Evening timing"],
      ["Best for", "Sunset and beach time"],
      ["Guide", "Local timing support"],
    ],
    infoItems: [
      "Sunset and pickup timing",
      "Beach conditions",
      "Dinner or drinks add-ons",
      "Private group options",
    ],
    ctaCopy:
      "Ask about sunset timing, pickup distance and whether the evening should include dinner, drinks or simple beach time.",
    gallery: sunsetAtMichamviGallery,
  },
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export const defaultExperience = experiences[2];
