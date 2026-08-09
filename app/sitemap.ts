import type { MetadataRoute } from "next";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";

export const dynamic = "force-static";

const siteUrl = "https://www.asrinklima.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  for (const service of hizmetlerimiz) {
    entries.push({
      url: `${siteUrl}/hizmetlerimiz/${service.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    });

    for (const sub of service.subCategories ?? []) {
      entries.push({
        url: `${siteUrl}/hizmetlerimiz/${service.slug}/${sub.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
