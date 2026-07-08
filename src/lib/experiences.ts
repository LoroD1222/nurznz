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
  included: string[];
  excluded: string[];
  ctaCopy: string;
  gallery: GalleryImage[];
};

type ExperienceInput = Omit<Experience, "image" | "alt" | "gallery"> & {
  imageCount: number;
  primaryImage?: GalleryImage;
};

const activityAsset = (slug: string, index: number) =>
  `/assets/activities/${slug}/${slug}-${String(index).padStart(2, "0")}.webp`;

const activityGallery = (
  slug: string,
  title: string,
  count: number,
): GalleryImage[] =>
  Array.from({ length: count }, (_, index) => ({
    src: activityAsset(slug, index + 1),
    alt: `${title} Zanzibar trip photo ${index + 1}`,
  }));

function createExperience(input: ExperienceInput): Experience {
  const { primaryImage: preferredImage, ...experienceInput } = input;
  const gallery = [
    ...(preferredImage ? [preferredImage] : []),
    ...activityGallery(experienceInput.slug, experienceInput.title, experienceInput.imageCount),
  ];
  const primaryImage = gallery[0];

  return {
    ...experienceInput,
    image: primaryImage.src,
    alt: primaryImage.alt,
    gallery,
  };
}

export const experiences: Experience[] = [
  createExperience({
    slug: "day-trip-safari",
    title: "Selous/Nyerere Day Safari",
    category: "Safari",
    duration: "1 day",
    overline: "Tanzania Safari Extension",
    excerpt:
      "A full-day flight safari from Zanzibar into Nyerere National Park with a guided game drive.",
    description:
      "A Selous, now Nyerere National Park, day trip from Zanzibar starts early with hotel transfer, a short domestic flight and a guided 4x4 game drive through one of Africa's largest protected wildlife areas.",
    highlights: [
      ["Pickup", "Early hotel transfer"],
      ["Duration", "Full-day safari"],
      ["Wildlife", "Elephants, lions, giraffes"],
      ["Guide", "Professional safari guide"],
    ],
    infoItems: [
      "Domestic flight timing",
      "Full-day game drive",
      "Picnic lunch planning",
      "Early start required",
    ],
    included: [
      "Hotel transfer to and from Zanzibar airport",
      "Domestic flight coordination",
      "Professional safari guide",
      "Full-day 4x4 game drive",
      "Picnic lunch inside the park",
    ],
    excluded: ["Personal expenses", "Optional gratuities", "Items not confirmed in the safari quote"],
    ctaCopy:
      "Share the travel date, pickup area and guest names so NUR ZANZIBAR TOURS can confirm practical flight timing, availability and safari routing.",
    imageCount: 3,
  }),
  createExperience({
    slug: "private-airport-vip-transfers",
    title: "Private Airport VIP Transfers",
    category: "Airport VIP",
    duration: "24/7",
    overline: "Private Zanzibar Transport",
    excerpt:
      "Private airport VIP transfers, island point-to-point transport and car rental support with vehicles matched to each client.",
    description:
      "Private Airport VIP Transfers are arranged for Zanzibar airport arrivals, departures, hotels, villas and island routes with 24/7 availability. Vehicle selection depends on the client, group size, luggage, route and requested comfort level, with car rental available on request.",
    highlights: [
      ["Pickup", "Airport, hotel or villa"],
      ["Availability", "Private 24/7 service"],
      ["Fleet", "Matched to each client"],
      ["Rental", "Car rental on request"],
    ],
    infoItems: [
      "Private airport pickup",
      "24/7 availability",
      "Vehicle matched by client",
      "Car rental requests",
    ],
    included: [
      "Private vehicle and driver for confirmed transfers",
      "Airport, hotel or villa pickup coordination",
      "Flight-time and arrival/departure timing checks",
      "Vehicle matching by guest count, luggage and route",
      "Car rental availability check when requested",
    ],
    excluded: [
      "Self-drive fuel unless confirmed",
      "Extra waiting time not confirmed in advance",
      "Route changes or additional stops not agreed before travel",
      "Personal expenses",
    ],
    ctaCopy:
      "Send the flight number, arrival or departure time, pickup and drop-off points, guest count and luggage notes so NUR ZANZIBAR TOURS can match the right vehicle and driver.",
    imageCount: 3,
  }),
  createExperience({
    slug: "stone-town",
    title: "Stone Town Tour",
    category: "Culture",
    duration: "2h",
    overline: "Zanzibar Heritage Walk",
    excerpt:
      "A guided UNESCO heritage walk through Stone Town's narrow streets, architecture and layered history.",
    description:
      "Stone Town was once the capital of Oman and is now a UNESCO World Heritage Site. This walking tour explores its African, Arab, Indian and European influences through historic streets, architecture and daily town life.",
    highlights: [
      ["Pickup", "Go and return"],
      ["Duration", "About 2 hours"],
      ["Walk level", "Easy urban route"],
      ["Guide", "English-speaking guide"],
    ],
    infoItems: [
      "UNESCO heritage area",
      "Historic town route",
      "Architecture and culture",
      "Entry fee included",
    ],
    included: ["Professional English-speaking guide", "Entry fee", "Go and return transfer"],
    excluded: ["Food and beverages", "Personal shopping", "Souvenirs"],
    ctaCopy:
      "Confirm the preferred walking time and pickup point so the Stone Town route can be planned around heat, traffic and guest pace.",
    primaryImage: {
      src: "/assets/activities/stone-town/stone-town-main.png",
      alt: "Stone Town memorial statues in a garden courtyard in Zanzibar",
    },
    imageCount: 3,
  }),
  createExperience({
    slug: "prison-island",
    title: "Prison Island",
    category: "Marine",
    duration: "2h",
    overline: "Changuu Island Boat Trip",
    excerpt:
      "A short boat trip to Changuu Island for history, giant tortoises and turquoise ocean views.",
    description:
      "Prison Island, originally Changuu Island, was planned as a 19th-century prison and later used as a quarantine station. Today it is known for Aldabra giant tortoises, island history and clear Indian Ocean views.",
    highlights: [
      ["Pickup", "Return transfers"],
      ["Duration", "About 2 hours"],
      ["Boat", "Island crossing"],
      ["Guide", "Local island context"],
    ],
    infoItems: [
      "Boat transportation",
      "Tortoise viewing",
      "Island history",
      "Government fees",
    ],
    included: [
      "Professional English-speaking guide",
      "Return transfers",
      "Boat transportation",
      "Entry fees",
      "Government fees",
    ],
    excluded: ["Personal shopping", "Food and beverages", "Optional gratuities"],
    ctaCopy:
      "Confirm pickup area, guest count and preferred timing so the island visit can be matched to boat and weather conditions.",
    primaryImage: {
      src: "/assets/activities/prison-island/prison-island-main.png",
      alt: "Close view of an Aldabra giant tortoise on Prison Island in Zanzibar",
    },
    imageCount: 3,
  }),
  createExperience({
    slug: "spice-tour",
    title: "Spice Tour",
    category: "Culture",
    duration: "2-3h",
    overline: "Zanzibar Spice Farm",
    excerpt:
      "A sensory spice farm visit with tropical fruits, local farming stories and Spice Island flavors.",
    description:
      "Explore a local spice farm and discover why Zanzibar is known as the Spice Island. Guests see, smell and taste cloves, cinnamon, nutmeg, vanilla, black pepper, cardamom and seasonal tropical fruits.",
    highlights: [
      ["Pickup", "Hotel area pickup"],
      ["Duration", "2-3 hours"],
      ["Taste", "Spices and fruits"],
      ["Guide", "Farm guide"],
    ],
    infoItems: [
      "Fresh spice tasting",
      "Tropical fruits",
      "Spice trade history",
      "Local products available",
    ],
    included: ["Professional guide", "Entrance fees", "Government taxes"],
    excluded: ["Personal expenses", "Gratuities", "Optional purchases"],
    ctaCopy:
      "Share the hotel area, date and guest count so NUR ZANZIBAR TOURS can confirm a practical spice farm visit window.",
    imageCount: 3,
  }),
  createExperience({
    slug: "jozani-forest",
    title: "Jozani Forest",
    category: "Nature",
    duration: "2h",
    overline: "Zanzibar Forest Walk",
    excerpt:
      "A guided walk through Zanzibar's national park for red colobus monkeys, forest and mangroves.",
    description:
      "Jozani Chwaka Bay National Park is Zanzibar's largest protected forest and the island's only national park. It is home to the rare endemic Zanzibar Red Colobus monkey, plus mangroves, birds, butterflies and native forest life.",
    highlights: [
      ["Pickup", "Transfers included"],
      ["Duration", "About 2 hours"],
      ["Walk level", "Easy guided paths"],
      ["Guide", "English-speaking guide"],
    ],
    infoItems: [
      "Red colobus sightings",
      "Mangrove boardwalk",
      "Biodiversity walk",
      "Comfortable shoes helpful",
    ],
    included: ["Professional English-speaking guide", "Entrance fees", "Transfers"],
    excluded: ["Personal expenses", "Gratuities", "Food and beverages"],
    ctaCopy:
      "Share the guest count, hotel area and preferred half-day window so NUR ZANZIBAR TOURS can plan pickup and forest timing.",
    primaryImage: {
      src: "/assets/activities/jozani-forest/jozani-forest-main.png",
      alt: "Guest photographing a red colobus monkey in Jozani Forest Zanzibar",
    },
    imageCount: 4,
  }),
  createExperience({
    slug: "safari-blue",
    title: "Safari Blue",
    category: "Marine",
    duration: "6-8h",
    overline: "Zanzibar Boat Day",
    excerpt:
      "A full-day Menai Bay sea adventure with dhow sailing, snorkeling, sandbanks and seafood lunch.",
    description:
      "Safari Blue is a full-day sea adventure in Menai Bay Conservation Area. Guests sail on a traditional wooden dhow, snorkel over coral reefs, relax on white sandbanks, swim in a natural lagoon and enjoy a seafood barbecue lunch.",
    highlights: [
      ["Pickup", "Hotel transfers"],
      ["Duration", "Full day"],
      ["Water", "Snorkeling and lagoon"],
      ["Meal", "Seafood lunch"],
    ],
    infoItems: [
      "Traditional dhow sailing",
      "Snorkeling equipment",
      "Sandbank relaxation",
      "Dolphins possible",
    ],
    included: [
      "Hotel transfers",
      "Traditional dhow boat",
      "Snorkeling equipment",
      "Professional guide",
      "Seafood lunch",
      "Tropical fruits and soft drinks",
      "Entrance fees and government taxes",
    ],
    excluded: ["Personal expenses", "Gratuities", "Items not listed as included"],
    ctaCopy:
      "Check availability and sea conditions before choosing the Safari Blue date, especially for private groups.",
    imageCount: 3,
  }),
  createExperience({
    slug: "snorkeling-at-mnemba",
    title: "Mnemba Island Snorkeling",
    category: "Marine",
    duration: "4-5h",
    overline: "Mnemba Marine Activity",
    excerpt:
      "A clear-water snorkeling trip near Mnemba Island with coral reefs, tropical fish and boat support.",
    description:
      "Mnemba Island is one of Zanzibar's famous marine conservation areas, known for turquoise water, white sand and excellent snorkeling. The tour explores reefs around Mnemba with tropical fish and possible dolphin sightings when conditions are favorable.",
    highlights: [
      ["Pickup", "Boat and transfer"],
      ["Duration", "4-5 hours"],
      ["Snorkel", "Coral reef ecosystem"],
      ["Guide", "Boat crew and guide"],
    ],
    infoItems: [
      "Snorkeling equipment",
      "Tropical refreshments",
      "Dolphins possible",
      "Private island access excluded",
    ],
    included: [
      "Boat",
      "Transfer",
      "Snorkeling equipment",
      "Professional guide",
      "Tropical fruits",
      "Bottled water",
      "Government taxes",
    ],
    excluded: ["Personal expenses", "Gratuities", "Access to the private island itself"],
    ctaCopy:
      "Send the hotel area, guest count and preferred morning window so the Mnemba plan can be checked against sea conditions.",
    imageCount: 3,
  }),
  createExperience({
    slug: "blue-lagoon",
    title: "Blue Lagoon Tour",
    category: "Marine",
    duration: "2-3h",
    overline: "Michamvi Snorkeling",
    excerpt:
      "A southeast-coast snorkeling trip near Michamvi with shallow turquoise water and coral gardens.",
    description:
      "Blue Lagoon is one of Zanzibar's best snorkeling spots near Michamvi. Calm, shallow turquoise water, coral gardens and tropical fish make it suitable for beginners and experienced snorkelers.",
    highlights: [
      ["Pickup", "Local transfer check"],
      ["Duration", "2-3 hours"],
      ["Snorkel", "Coral gardens"],
      ["Level", "All snorkeling levels"],
    ],
    infoItems: [
      "Crystal-clear water",
      "Tropical fish",
      "Michamvi coastline",
      "Boat trip included",
    ],
    included: [
      "Boat trip",
      "Snorkeling equipment",
      "Professional guide",
      "Bottled water",
      "Entrance fees",
      "Government taxes",
    ],
    excluded: ["Personal expenses", "Gratuities", "Food and beverages"],
    ctaCopy:
      "Confirm guest swim comfort, hotel area and preferred time so NUR ZANZIBAR TOURS can check the best lagoon conditions.",
    imageCount: 3,
  }),
  createExperience({
    slug: "sailing-trip",
    title: "Sailing Trip",
    category: "Coast",
    duration: "2-3h",
    overline: "Paje Dhow Sailing",
    excerpt:
      "A relaxed Paje sailing experience on a traditional dhow with coastal views and sea breeze.",
    description:
      "The Paje Sailing Boat Tour is a peaceful ocean experience aboard a traditional dhow. Guests enjoy coastal views, sea breeze, crystal-clear water and Zanzibar maritime culture, with snorkeling possible depending on conditions.",
    highlights: [
      ["Pickup", "Paje area routing"],
      ["Duration", "2-3 hours"],
      ["Boat", "Traditional dhow"],
      ["Best for", "Couples and groups"],
    ],
    infoItems: [
      "Dhow sailing",
      "Coastal views",
      "Snorkeling if possible",
      "Seasonal fruits",
    ],
    included: ["Traditional dhow boat", "Professional local guide or captain", "Bottled water", "Seasonal fruits", "Government taxes"],
    excluded: ["Personal expenses", "Gratuities", "Food and beverages"],
    ctaCopy:
      "Ask about wind, tide and timing so the Paje sailing trip can be planned for comfortable conditions.",
    imageCount: 1,
  }),
  createExperience({
    slug: "salaam-cave",
    title: "Salaam Cave",
    category: "Nature",
    duration: "1-2h",
    overline: "Zanzibar Cave Swim",
    excerpt:
      "A natural limestone cave in Kizimkazi with clear freshwater swimming and a peaceful setting.",
    description:
      "Salaam Cave is a natural limestone cave in Kizimkazi on Zanzibar's southern coast. Guests can swim in a clear freshwater pool, explore rock formations and enjoy a refreshing nature stop.",
    highlights: [
      ["Pickup", "Transfers included"],
      ["Duration", "1-2 hours"],
      ["Swim", "Freshwater cave pool"],
      ["Guide", "Local cave support"],
    ],
    infoItems: [
      "Natural cave swim",
      "Rock formations",
      "Photo opportunity",
      "Swim comfort helpful",
    ],
    included: ["Entrance fee", "Professional guide", "Transfers"],
    excluded: ["Personal expenses", "Gratuities", "Food and beverages"],
    ctaCopy:
      "Share guest swim comfort, hotel area and preferred timing so NUR ZANZIBAR TOURS can recommend the right cave visit window.",
    imageCount: 1,
  }),
  createExperience({
    slug: "sunset-at-kae-funk",
    title: "Sunset at Kae Funk",
    category: "Coast",
    duration: "Evening",
    overline: "Michamvi Sunset Plan",
    excerpt:
      "An evening visit to Kae Funk for sunset views, beach atmosphere, music and local performances.",
    description:
      "Kae Funk Sunset Beach Bar in Michamvi is one of Zanzibar's popular sunset spots, known for ocean views, white sand, relaxed beach atmosphere, music, fire shows, local performances and drinks after sunset.",
    highlights: [
      ["Pickup", "Hotel area pickup"],
      ["Duration", "Evening timing"],
      ["Best for", "Sunset photos"],
      ["Mood", "Beach bar atmosphere"],
    ],
    infoItems: [
      "Sunset window",
      "Beach cocktails",
      "Music and DJ vibes",
      "Group-friendly stop",
    ],
    included: ["Pickup coordination", "Local timing support", "Return transfer when arranged"],
    excluded: ["Meals and drinks", "Personal expenses", "Optional gratuities"],
    ctaCopy:
      "Ask about sunset timing, pickup distance and whether the evening should include dinner, drinks or simple beach time.",
    imageCount: 1,
  }),
  createExperience({
    slug: "pungume-sandbank",
    title: "Pungume Sandbank",
    category: "Marine",
    duration: "6-8h",
    overline: "Menai Bay Sandbank",
    excerpt:
      "A full-day Menai Bay sailing, snorkeling and sandbank escape with marine life and seafood lunch.",
    description:
      "Pungume Sandbank combines traditional sailing, snorkeling, wildlife and relaxation in Menai Bay. Guests may see dolphins, snorkel colorful coral reefs and enjoy the changing tidal landscape of one of Zanzibar's memorable marine areas.",
    highlights: [
      ["Pickup", "Hotel transfers"],
      ["Duration", "Full day"],
      ["Snorkel", "Pungume reefs"],
      ["Boat", "Traditional dhow"],
    ],
    infoItems: [
      "Sandbank stop",
      "Dolphins possible",
      "Seafood lunch",
      "Tropical fruits",
    ],
    included: [
      "Hotel transfers",
      "Traditional dhow boat",
      "Snorkeling equipment",
      "Professional guide",
      "Seafood lunch",
      "Tropical fruits and soft drinks",
      "Entrance fees and government taxes",
    ],
    excluded: ["Personal expenses", "Gratuities", "Items not listed as included"],
    ctaCopy:
      "Confirm the travel date and pickup area so NUR ZANZIBAR TOURS can check sea conditions and the best sandbank timing.",
    imageCount: 3,
  }),
  createExperience({
    slug: "mtende-beach",
    title: "Mtende Beach",
    category: "Coast",
    duration: "Half day",
    overline: "Southern Zanzibar Coast",
    excerpt:
      "A hidden southern beach escape with cliffs, turquoise water, quiet scenery and photo stops.",
    description:
      "Mtende Beach is a southern-coast hidden gem surrounded by dramatic limestone cliffs, turquoise water and untouched natural beauty. It is a peaceful escape for travelers who want a quieter, authentic beach setting.",
    highlights: [
      ["Pickup", "Hotel area pickup"],
      ["Duration", "Half-day or full-day"],
      ["Best for", "Photos and beach time"],
      ["Guide", "Local route support"],
    ],
    infoItems: [
      "Rock formations",
      "Quiet beach setting",
      "Tide conditions",
      "Sunset photo spots",
    ],
    included: ["Pickup coordination", "Local route support", "Return transfer when arranged"],
    excluded: ["Meals and drinks", "Personal expenses", "Optional gratuities"],
    ctaCopy:
      "Ask about tide timing, pickup distance and the best visit window for a smooth Mtende Beach route.",
    imageCount: 1,
  }),
  createExperience({
    slug: "the-rock-restaurant",
    title: "The Rock Restaurant",
    category: "Coast",
    duration: "3-4h",
    overline: "Zanzibar Dining Experience",
    excerpt:
      "A visit to Zanzibar's famous ocean restaurant with views, seafood and a memorable setting.",
    description:
      "The Rock Restaurant sits on a rock in the Indian Ocean and is one of Zanzibar's most famous dining experiences. Depending on the tide, guests either walk across the beach or take a traditional boat ride to reach the restaurant.",
    highlights: [
      ["Pickup", "Transfers included"],
      ["Duration", "3-4 hours"],
      ["Best for", "Lunch and photos"],
      ["Guide", "Driver/guide"],
    ],
    infoItems: [
      "Ocean restaurant",
      "Tide-dependent access",
      "Seafood dining",
      "Photo opportunity",
    ],
    included: ["Transfers", "English-speaking driver/guide"],
    excluded: ["Meals", "Drinks", "Personal expenses"],
    ctaCopy:
      "Share the preferred meal time and guest count so NUR ZANZIBAR TOURS can coordinate transfer timing around the tide and restaurant booking needs.",
    imageCount: 1,
  }),
  createExperience({
    slug: "clear-kayak",
    title: "Clear Kayak",
    category: "Water Sport",
    duration: "By request",
    overline: "Transparent Kayak Activity",
    excerpt:
      "A photo-friendly clear kayak activity in shallow turquoise water, arranged around tide and weather.",
    description:
      "Clear kayak is a light coastal activity for guests who want a relaxed water experience and strong photo moments. NUR ZANZIBAR TOURS can confirm the most suitable beach, tide window and availability before the visit.",
    highlights: [
      ["Pickup", "Area confirmed by request"],
      ["Duration", "By request"],
      ["Best for", "Photos and shallow water"],
      ["Guide", "Local activity support"],
    ],
    infoItems: [
      "Tide-dependent timing",
      "Clear kayak photos",
      "Beach conditions",
      "Availability check",
    ],
    included: ["Availability check", "Local coordination", "Pickup guidance when arranged"],
    excluded: ["Meals and drinks", "Personal expenses", "Optional extras"],
    ctaCopy:
      "Send the hotel area, guest count and preferred day so NUR ZANZIBAR TOURS can confirm whether clear kayak is available and practical.",
    imageCount: 3,
  }),
  createExperience({
    slug: "horse-riding",
    title: "Horse Riding",
    category: "Coast",
    duration: "By request",
    overline: "Beach Riding Experience",
    excerpt:
      "A guided Zanzibar horse riding experience arranged around rider comfort, tide and beach conditions.",
    description:
      "Horse riding can be arranged as a scenic coastal activity for guests who want a guided beach experience. Timing, route and suitability should be confirmed based on rider experience and tide conditions.",
    highlights: [
      ["Pickup", "Area confirmed by request"],
      ["Duration", "By request"],
      ["Guest fit", "Rider comfort checked"],
      ["Guide", "Local stable support"],
    ],
    infoItems: [
      "Rider experience",
      "Tide conditions",
      "Beach route",
      "Availability check",
    ],
    included: ["Availability check", "Local coordination", "Pickup guidance when arranged"],
    excluded: ["Meals and drinks", "Personal expenses", "Optional extras"],
    ctaCopy:
      "Share rider count, experience level and preferred date so NUR ZANZIBAR TOURS can confirm the safest and most practical horse riding option.",
    imageCount: 1,
  }),
  createExperience({
    slug: "jet-car",
    title: "Jet Car",
    category: "Water Sport",
    duration: "By request",
    overline: "Zanzibar Water Sport",
    excerpt:
      "A high-energy water activity arranged by availability, safety briefing and sea conditions.",
    description:
      "Jet Car is a by-request water sport option for guests who want a fast, memorable activity on the water. NUR ZANZIBAR TOURS should confirm operator availability, safety requirements and weather suitability before booking.",
    highlights: [
      ["Pickup", "Area confirmed by request"],
      ["Duration", "By request"],
      ["Energy", "Fast water activity"],
      ["Safety", "Operator briefing"],
    ],
    infoItems: [
      "Operator availability",
      "Weather conditions",
      "Safety briefing",
      "Guest suitability",
    ],
    included: ["Availability check", "Local coordination", "Pickup guidance when arranged"],
    excluded: ["Meals and drinks", "Personal expenses", "Optional extras"],
    ctaCopy:
      "Send the preferred day, guest count and hotel area so NUR ZANZIBAR TOURS can check whether Jet Car is available and suitable.",
    imageCount: 1,
  }),
  createExperience({
    slug: "dolphins-tour",
    title: "Dolphins Tour",
    category: "Marine",
    duration: "By request",
    overline: "Dolphin Watching Trip",
    excerpt:
      "A marine trip focused on dolphin watching, with sightings dependent on conditions and wildlife movement.",
    description:
      "Dolphin watching can be arranged as a marine activity when conditions are suitable. Sightings are never guaranteed, but the trip is planned around local knowledge, sea conditions and respectful wildlife viewing.",
    highlights: [
      ["Pickup", "Hotel or meeting point"],
      ["Duration", "By request"],
      ["Wildlife", "Dolphins possible"],
      ["Guide", "Local boat support"],
    ],
    infoItems: [
      "Sea conditions",
      "Wildlife movement",
      "Boat coordination",
      "Respectful viewing",
    ],
    included: ["Availability check", "Boat coordination", "Pickup guidance when arranged"],
    excluded: ["Meals and drinks", "Personal expenses", "Optional extras"],
    ctaCopy:
      "Share the hotel area, date and guest count so NUR ZANZIBAR TOURS can check the most practical dolphin watching option.",
    imageCount: 3,
  }),
  createExperience({
    slug: "nakupenda-sandbank",
    title: "Nakupenda Sandbank",
    category: "Marine",
    duration: "By request",
    overline: "Zanzibar Sandbank Escape",
    excerpt:
      "A sandbank-style boat escape for swimming, relaxing and clear-water photos, arranged by tide.",
    description:
      "Nakupenda Sandbank can be arranged as a relaxed marine escape with swimming, white sand and clear-water photo time. Timing depends on tide, weather and boat availability.",
    highlights: [
      ["Pickup", "Hotel or Stone Town meet"],
      ["Duration", "By request"],
      ["Best for", "Sandbank and swimming"],
      ["Boat", "Local boat support"],
    ],
    infoItems: [
      "Tide-dependent timing",
      "Sandbank relaxation",
      "Swimming comfort",
      "Boat availability",
    ],
    included: ["Availability check", "Boat coordination", "Pickup guidance when arranged"],
    excluded: ["Meals and drinks", "Personal expenses", "Optional extras"],
    ctaCopy:
      "Send the travel date, guest count and pickup area so NUR ZANZIBAR TOURS can confirm whether Nakupenda timing is practical.",
    primaryImage: {
      src: "/assets/activities/nakupenda-sandbank/nakupenda-sandbank-main.png",
      alt: "Guests standing in clear shallow water at Nakupenda Sandbank in Zanzibar",
    },
    imageCount: 3,
  }),
  createExperience({
    slug: "sunset-cruise",
    title: "Sunset Cruise",
    category: "Coast",
    duration: "By request",
    overline: "Evening Dhow Cruise",
    excerpt:
      "A relaxed evening cruise option for sunset views, sea breeze and a coastal finish to the day.",
    description:
      "Sunset Cruise can be arranged as a calm evening sea experience for guests who want coastal views and a relaxed finish to the day. Timing, boat style and pickup are confirmed by availability and weather.",
    highlights: [
      ["Pickup", "Area confirmed by request"],
      ["Duration", "Evening timing"],
      ["Best for", "Sunset views"],
      ["Boat", "Local cruise support"],
    ],
    infoItems: [
      "Sunset timing",
      "Weather conditions",
      "Boat availability",
      "Group-friendly option",
    ],
    included: ["Availability check", "Boat coordination", "Pickup guidance when arranged"],
    excluded: ["Meals and drinks", "Personal expenses", "Optional extras"],
    ctaCopy:
      "Share preferred date, pickup area and guest count so NUR ZANZIBAR TOURS can check the most practical sunset cruise option.",
    imageCount: 1,
  }),
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export const defaultExperience =
  getExperienceBySlug("snorkeling-at-mnemba") ?? experiences[0];
