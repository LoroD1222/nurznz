import type { MetadataRoute } from "next";
import { experiences } from "@/lib/experiences";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-29");
  const routes = [
    { path: "", priority: 1 },
    { path: "/trips", priority: 0.9 },
    ...experiences.map((experience) => ({
      path: `/trips/${experience.slug}`,
      priority: 0.9,
    })),
    { path: "/partners", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/payment", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
