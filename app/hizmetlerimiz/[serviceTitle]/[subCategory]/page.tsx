import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";
import { subCategoryComponents } from "@/app/hizmetlerimiz/serviceComponents";

const subCategorySeo: Record<string, { title: string; description: string }> = {
  "salon-tipi-klima": {
    title: "Salon Tipi Klima Bakımı ve Onarımı | Asrın Klima",
    description:
      "Salon tipi klima bakımı, onarımı ve arıza tespiti. Periyodik servis ile yüksek performans ve güvenilir çalışma.",
  },
  "duvar-tipi-klima": {
    title: "Duvar Tipi Klima Bakımı ve Onarımı | Asrın Klima",
    description:
      "Duvar tipi klima bakımı, onarımı ve periyodik servis. Verimli çalışma için uzman destek ve hızlı çözüm.",
  },
  "yer-tavan-klima": {
    title: "Yer Tavan Klima Bakımı ve Onarımı | Asrın Klima",
    description:
      "Yer tavan klima bakımı ve onarımı. Arıza tespiti, periyodik bakım ve güvenilir servis çözümleri.",
  },
  "kaset-tipi-klima": {
    title: "Kaset Tipi Klima Bakımı ve Onarımı | Asrın Klima",
    description:
      "Kaset tipi klima bakımı, onarımı ve periyodik bakım hizmetleri. Konfor ve verim için profesyonel destek.",
  },
  "kanalli-klima": {
    title: "Kanallı Klima Bakımı ve Onarımı | Asrın Klima",
    description:
      "Kanallı klima bakımı, onarımı ve arıza tespiti. Hava kalitesi ve sistem verimliliği için düzenli bakım.",
  },
  "multi-klima": {
    title: "Multi Klima Bakımı ve Onarımı | Asrın Klima",
    description:
      "Multi klima bakımı, onarımı ve periyodik servis hizmetleri. Performans ve enerji verimliliği için uzman ekip.",
  },
  "fan-coil-sistemleri": {
    title: "Fan Coil Sistemleri Bakımı ve Onarımı | Asrın Klima",
    description:
      "Fan coil sistemleri bakımı ve onarımı. Filtre, fan ve serpantin kontrolleri ile verimli çalışma.",
  },
  "su-sogutmali-chiller": {
    title: "Su Soğutmalı Chiller Bakımı | Asrın Klima",
    description:
      "Su soğutmalı chiller bakımı ve onarımı. Periyodik kontrol, performans testi ve arıza tespiti.",
  },
  "hava-sogutmali-chiller": {
    title: "Hava Soğutmalı Chiller Bakımı | Asrın Klima",
    description:
      "Hava soğutmalı chiller bakımı ve onarımı. Verimlilik için düzenli bakım ve hızlı servis.",
  },
  "soguk-oda-imalat-ve-onarim": {
    title: "Soğuk Oda İmalat ve Onarım | Asrın Klima",
    description:
      "Soğuk oda imalatı, montajı ve onarımı. İzolasyon, soğutma sistemi ve performans kontrolleri.",
  },
  "havuz-nem-alma-cihazi": {
    title: "Havuz Nem Alma Cihazı Bakımı | Asrın Klima",
    description:
      "Havuz nem alma cihazı bakımı ve onarımı. Nem kontrolü ve verim için düzenli servis.",
  },
  "kanal-temizligi": {
    title: "Kanal Temizliği Hizmeti | Asrın Klima",
    description:
      "Kanal temizliği hizmeti ile hijyen, hava kalitesi ve verimli hava akışı sağlayın. Profesyonel temizlik çözümleri.",
  },
  "yeniden-kurulum": {
    title: "Yeniden Kurulum Hizmeti | Asrın Klima",
    description:
      "Yeniden kurulum, söküm ve montaj hizmetleri. Taşıma ve yeniden devreye alma için uzman destek.",
  },
  "vrf-alt-yapi-borulama-hazirligi": {
    title: "VRF Alt Yapı Borulama Hazırlığı | Asrın Klima",
    description:
      "VRF alt yapı borulama hazırlığı, bakır boru, izolasyon ve sızdırmazlık çözümleri. Güvenli altyapı kurulumu.",
  },
  "dvm-samsung-vrf-sistemleri": {
    title: "DVM Samsung VRF Sistemleri | Asrın Klima",
    description:
      "DVM Samsung VRF sistemleri bakım ve onarım hizmetleri. Performans ve enerji verimliliği için uzman servis.",
  },
  "veri-merkezi-sogutma": {
    title: "Veri Merkezi Soğutma Hizmetleri | Asrın Klima",
    description:
      "Veri merkezi soğutma çözümleri, bakım ve servis hizmetleri. Kesintisiz çalışma için güvenilir iklim kontrolü.",
  },
  "laboratuvar-klimalari": {
    title: "Laboratuvar Klimaları Bakımı | Asrın Klima",
    description:
      "Laboratuvar klimaları bakımı ve onarımı. Hassas sıcaklık ve nem kontrolü için profesyonel destek.",
  },
};

const siteUrl = "https://www.asrinklima.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceTitle: string; subCategory: string }>;
}): Promise<Metadata> {
  const { serviceTitle, subCategory } = await params;
  const service = hizmetlerimiz.find((s) => s.slug === serviceTitle);

  if (!service || !service.subCategories) {
    return {
      title: "Hizmet Bulunamadı | Asrın Klima",
      description: "Aradığınız hizmet bulunamadı.",
    };
  }

  const subCategoryItem = service.subCategories.find(
    (sub) => sub.slug === subCategory
  );

  if (!subCategoryItem) {
    return {
      title: "Hizmet Bulunamadı | Asrın Klima",
      description: "Aradığınız hizmet bulunamadı.",
    };
  }

  const seo = subCategorySeo[subCategoryItem.slug];
  const defaultTitle = `${subCategoryItem.title} Bakımı ve Onarımı | Asrın Klima`;
  const defaultDescription = `${subCategoryItem.title} bakımı ve onarımı, periyodik bakım ve arıza tespiti için uzman destek.`;
  const title = seo?.title ?? defaultTitle;
  const description = seo?.description ?? defaultDescription;
  const canonical = `${siteUrl}/hizmetlerimiz/${service.slug}/${subCategoryItem.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Asrın Klima",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const params = [];

  for (const service of hizmetlerimiz) {
    if (service.subCategories?.length) {
      for (const sub of service.subCategories) {
        params.push({
          serviceTitle: service.slug,
          subCategory: sub.slug,
        });
      }
    }
  }

  return params;
}
export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ serviceTitle: string; subCategory: string }>;
}) {
  const { serviceTitle, subCategory } = await params;

  const service = hizmetlerimiz.find((s) => s.slug === serviceTitle);

  if (!service || !service.subCategories) {
    return notFound();
  }

  const subCategoryItem = service.subCategories.find(
    (sub) => sub.slug === subCategory
  );

  if (!subCategoryItem) {
    return notFound();
  }

  const SubCategoryComponent =
    subCategoryComponents[service.slug]?.[subCategoryItem.slug];

  if (!SubCategoryComponent) {
    return notFound();
  }

  function toPossessive(title: string, isSpecial: boolean = false): string {
    if (isSpecial) {
      return title;
    }

    const vowels = ["a", "ı", "o", "u", "e", "i", "ö", "ü"];
    const reversed = [...title].reverse();

    const lastVowel = reversed.find((char) => vowels.includes(char.toLowerCase()));
    const suffix = ["a", "ı", "o", "u"].includes(lastVowel!) ? "larınız" : "niz";

    return `${title}${suffix}`;
  }

  const normalizedMap: Record<string, string> = {
    "soguk-oda-imalat-ve-onarim": "Soğuk Odalarınız",
    "havuz-nem-alma-cihazi": "Havuz Nem Alma Cihazlarınız",
    "havalandirma-sistemleri": "Havalandırma Sistemleri",
    "yeniden-kurulum": "Yeniden Kurulum",
    "su-sogutmali-chiller": "Su Soğutmalı Chillerlarınız",
    "hava-sogutmali-chiller": "Hava Soğutmalı Chillerlarınız",
    "vrf-alt-yapi-borulama-hazirligi": "VRF Alt Yapı Borulama Hazırlıklarınız",
    "laboratuvar-klimalari": "Laboratuvar Klimalarınız",
  };

  const possessiveTitle = normalizedMap[subCategoryItem.slug]
    ? toPossessive(normalizedMap[subCategoryItem.slug], true)
    : toPossessive(subCategoryItem.title);

  const isKlimaKiralama = subCategory === "yeniden-kurulum";

  const subCategoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: subCategoryItem.title,
    name: subCategoryItem.title,
    url: `${siteUrl}/hizmetlerimiz/${service.slug}/${subCategoryItem.slug}`,
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    provider: {
      "@type": "HVACBusiness",
      name: "Asrın Klima",
      telephone: "05388225559",
      url: siteUrl,
    },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subCategoryJsonLd) }}
      />
      <h1 className="text-3xl md:text-4xl font-bold no-before text-blue-800 mb-5">
        {subCategoryItem.title} Bakım, Onarım ve Yedek Parça Hizmetleri
      </h1>

      <div className="space-y-4 mx-4 lg:hidden flex flex-col">
        <h3 className="text-xl font-semibold text-black">Diğer Kategoriler</h3>
        <ul className="space-y-1 flex flex-col">
          {service.subCategories.map((sub) => (
            <Link
              key={sub.title}
              href={`/hizmetlerimiz/${service.slug}/${sub.slug}`}
              className={`cursor-pointer w-64 p-2 rounded-lg hover:bg-gray-200 ${
                sub.slug === subCategory ? "bg-gray-300" : ""
              }`}
            >
              {sub.title}
            </Link>
          ))}
        </ul>
      </div>

      <SubCategoryComponent />
      {!isKlimaKiralama && (
        <div className="mt-10 mb-6 mx-4 p-6 bg-gradient-to-br bg-red rounded-xl shadow-2xl text-whiteB">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              {subCategoryItem.title} Çözümlerinde Uzman Destek
            </h3>
            <p className="text-lg mb-6 !text-whiteB">
              {possessiveTitle} için bakım, onarım veya yedek parça ihtiyacınız varsa, bizimle iletişime geçebilirsiniz.
              <span className="block mt-2">
                Size özel çözümlerimizle, sistemlerinizin performansını artırmak ve enerji tasarrufu sağlamak için buradayız!
              </span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05388225559"
                className="border-2 border-white hover:bg-white hover:text-red font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0538 822 55 59
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
