import { defaultExperience, experiences, type GalleryImage } from "@/lib/experiences";

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

export type { GalleryImage };

export const trips: Trip[] = experiences.map((experience) => ({
  title: experience.title,
  category: experience.category,
  duration: experience.duration,
  image: experience.image,
  alt: experience.alt,
  excerpt: experience.excerpt,
  href: `/experience/${experience.slug}`,
  durationClass: experience.durationClass,
}));

export const experienceGalleryImages: GalleryImage[] = defaultExperience.gallery;
