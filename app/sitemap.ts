import type { MetadataRoute } from "next";
import { AESTHETIC_LIST } from "@/data/aesthetics";

const BASE_URL = "https://vibe-palette-taupe.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const aestheticUrls = AESTHETIC_LIST.map((a) => ({
    url: `${BASE_URL}/result/${a.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/quiz`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...aestheticUrls,
  ];
}
