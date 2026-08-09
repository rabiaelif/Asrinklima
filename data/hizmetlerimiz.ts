export function titleToSlug(title: string): string {
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

interface SubCategorySeed {
  title: string;
}

interface ServiceSeed {
  title: string;
  subCategories?: SubCategorySeed[];
}

export interface SubCategoryData {
  title: string;
  slug: string;
}

export interface ServiceData {
  title: string;
  slug: string;
  subCategories?: SubCategoryData[];
}

const serviceSeeds: ServiceSeed[] = [
  {
    title: "Split Klima Bakım, Onarım ve Yedek Parça",
    subCategories: [
      { title: "Salon Tipi Klima" },
      { title: "Duvar Tipi Klima" },
      { title: "Yer Tavan Klima" },
      { title: "Kaset Tipi Klima" },
      { title: "Kanallı Klima" },
      { title: "Multi Klima" },
    ],
  },
  {
    title: "Chiller Revizyon ve Onarım",
    subCategories: [
      { title: "Fan Coil Sistemleri" },
      { title: "Su Soğutmalı Chiller" },
      { title: "Hava Soğutmalı Chiller" },
    ],
  },
  {
    title: "Thermotron Bakım ve Onarım",
  },
  {
    title: "Rooftop Klima Arıza, Bakım ve Onarım",
  },
  {
    title: "VRF Klima Sistemleri",
    subCategories: [
      { title: "VRF Alt Yapı Borulama Hazırlığı" },
      { title: "DVM Samsung VRF Sistemleri" },
    ],
  },
  {
    title: "Klima Santrali Bakım ve Onarım",
  },
  {
    title: "Pano Klima Bakım ve Onarım",
  },
  {
    title: "İklimlendirme Hizmetleri",
    subCategories: [
      { title: "Soğuk Oda İmalat ve Onarım" },
      { title: "Havuz Nem Alma Cihazı" },
      { title: "Kanal Temizliği" },
      { title: "Yeniden Kurulum" },
    ],
  },
  {
    title: "Hastane Hijyenik Klima Bakımı ve Onarımı",
  },
  {
    title: "DX Soğutma Sistemleri Bakım ve Onarım",
  },
  {
    title: "Hassas Klima Bakım, Onarım ve Yedek Parça",
    subCategories: [
      { title: "Veri Merkezi Soğutma" },
      { title: "Laboratuvar Klimaları" },
    ],
  },

  {
    title: "Klima Kiralama",
  },
  {
    title: "Arıza Kodları",
  },
];

export const hizmetlerimiz: ServiceData[] = serviceSeeds.map((service) => ({
  ...service,
  slug: titleToSlug(service.title),
  subCategories: service.subCategories?.map((sub) => ({
    ...sub,
    slug: titleToSlug(sub.title),
  })),
}));
