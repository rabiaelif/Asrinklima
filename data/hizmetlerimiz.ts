
import Chiller from "@/app/components/Services/Headings/Chiller/Chiller";
import Split from "@/app/components/Services/Headings/Split/Split";
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

interface SubCategory {
  title: string;
  slug: string;
  component: React.ComponentType;
}

interface Service {
  title: string;
  img: string;
  slug: string;
  component: React.ComponentType;
  subCategories?: SubCategory[];
}

export const hizmetlerimiz: Service[] = [
  {
    title: "Split Klima Bakım, Onarım ve Yedek Parça",
    img: "/vrfklima.jpg",
    component: Split,
    subCategories: [
      { title: "Salon Tipi Klima", component: Split },
      { title: "Duvar Tipi Klima", component: Split },
      { title: "Yer Tavan Klima", component: Split },
      { title: "Kaset Tipi Klima", component: Split },
      { title: "Kanallı Klima", component: Split },
      { title: "Multi Klima", component: Split },
    ],
  },
  {
    title: "Chiller Revizyon ve Onarım",
    img: "/chiller.jpg",
    component: Chiller,
    subCategories: [
      { title: "Fan Coil Sistemleri", component: Chiller },
      { title: "Su Soğutmalı Chiller", component: Chiller },
      { title: "Hava Soğutmalı Chiller", component: Chiller },
    ],
  },
  {
    title: "Rooftop Klima Arıza, Bakım ve Onarım",
    img: "/rooftop.jpg",
    component: Split,
  },
  {
    title: "VRF Klima Sistemleri",
    img: "/vrfklima.jpg",
    component: Split,
    subCategories: [
      { title: "VRF Alt Yapı Borulama Hazırlığı", component: Split },
      { title: "DVM Samsung VRF Sistemleri", component: Split },
    ],
  },
  {
    title: "Klima Santrali Bakım ve Onarım",
    img: "/klimasantrali.jpg",
    component: Split,
  },
  {
    title: "İklimlendirme Hizmetleri",
    img: "/iklimlendirme.jpg",
    component: Split,
    subCategories: [
      { title: "Soğuk Oda İmalat ve Onarım", component: Split },
      { title: "Havuz Nem Alma Cihazları", component: Split },
      { title: "Kanal Temizliği", component: Split },
      { title: "Yeniden Kurulum", component: Split },
    ],
  },
  {
    title: "Hastane Hijyenik Klima Bakımı ve Onarımı",
    img: "/hastane.jpg",
    component: Split,
  },
  {
    title: "DX Soğutma Sistemleri Bakım ve Onarım",
    img: "/dxsogutma.jpg",
    component: Split,
  },
  {
    title: "Hassas Klima Bakım ve Onarım ve Yedek Parça",
    img: "/hassasklima.jpg",
    component: Split,
    subCategories: [
      { title: "Veri Merkezi Soğutma", component: Split },
      { title: "Laboratuvar Klimaları", component: Split },
    ],
  },
  {
    title: "Klima Kiralama Hizmeti",
    img: "/diger.jpg",
    component: Split,
  },
].map((service) => ({
  ...service,
  slug: titleToSlug(service.title),
  subCategories: service.subCategories?.map((sub) => ({
    ...sub,
    slug: titleToSlug(sub.title),
  })),
}));
