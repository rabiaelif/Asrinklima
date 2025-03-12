import SplitKlima from "@/app/components/Services/SplitKlima";
import React from "react";


function titleToSlug(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

interface Service {
  title: string;
  img: string;
  slug: string;
  component: React.ComponentType;
}

export const hizmetlerimiz: Service[] = [
  {
    title: "Split Klima Bakım, Onarım ve Yedek Parça",
    img: "/vrfklima.jpg",
    component: SplitKlima,
  },
].map((service) => ({
  ...service,
  slug: titleToSlug(service.title),
}));