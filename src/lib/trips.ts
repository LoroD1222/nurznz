export type Trip = {
  title: string;
  category: string;
  duration: string;
  image: string;
  alt: string;
  excerpt: string;
  href: string;
  durationClass?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export const trips: Trip[] = [
  {
    title: "Mnemba snorkelling",
    category: "Marine",
    duration: "3-4h",
    image: "/assets/figma/activity-fish.jpg",
    alt: "Tropical fish in clear water during a Mnemba snorkelling activity",
    excerpt:
      "A clear-water reef morning with boat support, gear and local guidance for guests who want an easy marine trip.",
    href: "/experience",
  },
  {
    title: "Jozani forest walk",
    category: "Nature",
    duration: "4h",
    image: "/assets/figma/activity-monkey.jpg",
    alt: "Monkey in a Zanzibar forest visited during nature routes",
    excerpt:
      "Forest paths, wildlife moments and practical pickup timing for guests looking beyond the beach.",
    href: "/experience",
  },
  {
    title: "Blue lagoon coast",
    category: "Marine",
    duration: "Half day",
    image: "/assets/figma/activity-lagoon.jpg",
    alt: "Zanzibar coastal lodge and turquoise water on a marine activity route",
    excerpt:
      "A calm coastal route for swimming, photos and an easy half-day Zanzibar sea experience.",
    href: "/experience",
  },
  {
    title: "Nature day trip",
    category: "Nature",
    duration: "Full day",
    image: "/assets/figma/activity-elephant.jpg",
    alt: "Elephants in a green safari landscape connected to activity planning",
    excerpt:
      "A longer nature-led day option for partners packaging Zanzibar with broader regional experiences.",
    href: "/experience",
  },
  {
    title: "Stone Town walk",
    category: "Culture",
    duration: "3h",
    image: "/assets/figma/proof-stone-town.png",
    alt: "Stone Town street and local culture route in Zanzibar",
    excerpt:
      "A compact heritage walk through Stone Town with local context, simple routing and guest-ready timing.",
    href: "/experience",
  },
  {
    title: "Spice farm visit",
    category: "Culture",
    duration: "3h",
    image: "/assets/figma/proof-spice.png",
    alt: "Spice farm visit and local Zanzibar activity proof",
    excerpt:
      "A sensory farm visit for guests who want a short, easy cultural activity between beach days.",
    href: "/experience",
  },
  {
    title: "Prison Island sandbank",
    category: "Marine",
    duration: "4h",
    image: "/assets/figma/proof-sandbank.png",
    alt: "Boat and sandbank activity near Prison Island",
    excerpt:
      "Boat time, island views and sandbank stops arranged around tide, weather and pickup practicalities.",
    href: "/experience",
  },
  {
    title: "Private group pickup",
    category: "Groups",
    duration: "Custom",
    image: "/assets/figma/proof-group-pickup.png",
    alt: "Group pickup coordination for Zanzibar activity guests",
    excerpt:
      "Private handling for groups that need coordinated pickup windows, guide names and clear handoff notes.",
    href: "/experience",
  },
  {
    title: "Marine reef day",
    category: "Marine",
    duration: "Half day",
    image: "/assets/figma/proof-marine.png",
    alt: "Marine, culture and group operations activity proof",
    excerpt:
      "A flexible reef-focused option for partners that want one dependable marine product in the catalogue.",
    href: "/experience",
  },
  {
    title: "Snorkelling boat trip",
    category: "Marine",
    duration: "3-4h",
    image: "/assets/figma/proof-snorkling.png",
    alt: "Guests snorkelling during a Zanzibar marine activity",
    excerpt:
      "Boat, guide and swim support for a short snorkelling trip with clear inclusions and guest expectations.",
    href: "/experience",
  },
  {
    title: "Dolphin ocean morning",
    category: "Marine",
    duration: "3-4h",
    image: "/assets/figma/experience-ocean-dolphins.png",
    alt: "Dolphins swimming in clear blue ocean water near Zanzibar",
    excerpt:
      "An early marine outing planned around ocean conditions, guest comfort and responsible local guidance.",
    href: "/experience",
  },
  {
    title: "Sunset beach plan",
    category: "Coast",
    duration: "Evening",
    image: "/assets/figma/cta-sunset.png",
    alt: "Beach sunset with performers and warm lights in Zanzibar",
    excerpt:
      "A relaxed evening beach plan for guests who want a lighter activity after a day on the island.",
    href: "/experience",
  },
  {
    title: "Boat activity day",
    category: "Marine",
    duration: "Half day",
    image: "/assets/figma/cta-boat.png",
    alt: "Travel guests and a local guide smiling on a Zanzibar boat activity",
    excerpt:
      "A partner-ready boat activity format with simple pickup notes, guide coordination and guest support.",
    href: "/experience",
  },
  {
    title: "Partner group activity",
    category: "Groups",
    duration: "Custom",
    image: "/assets/figma/review-group.png",
    alt: "Guests posing beside safari vehicles after a NUR Zanzibar partner activity",
    excerpt:
      "Group activity handling for agencies, hotels and DMCs that need dependable local operations.",
    href: "/experience",
  },
];

export const experienceGalleryImages: GalleryImage[] = trips
  .slice(0, 10)
  .map((trip) => ({
    src: trip.image,
    alt: trip.alt,
  }));
