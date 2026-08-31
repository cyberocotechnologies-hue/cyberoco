import type { MetadataRoute } from "next";
import { ROUTES, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: new URL(route.path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.path === "/" ? 1 : 0.7,
  }));
}