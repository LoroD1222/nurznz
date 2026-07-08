import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceDetailPage } from "@/components/experience/experience-detail-page";
import { experiences, getExperienceBySlug } from "@/lib/experiences";
import { SITE_NAME } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return {
      title: `Trip Not Found | ${SITE_NAME}`,
    };
  }

  const title = `${experience.title} | NUR Zanzibar`;
  const url = `/trips/${experience.slug}`;

  return {
    title,
    description: experience.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: experience.excerpt,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: experience.image,
          width: 1200,
          height: 630,
          alt: experience.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: experience.excerpt,
      images: [experience.image],
    },
  };
}

export default async function TripSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetailPage experience={experience} />;
}
