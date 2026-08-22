import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";
import { serviceComponents } from "@/app/hizmetlerimiz/serviceComponents";

type ServiceData = (typeof hizmetlerimiz)[number];

const hizmetlerimizMap: Record<string, ServiceData> = hizmetlerimiz.reduce(
  (acc, service) => {
    acc[service.slug] = service;
    return acc;
  },
  {} as Record<string, ServiceData>
);

const serviceSeo: Record<string, { title: string; description: string }> = {
  "split-klima-bakim-onarim-ve-yedek-parca": {
    title: "Split Klima Bakımı ve Onarımı",
    description:
      "Split klima bakımı, onarımı, arıza tespiti ve yedek parça hizmetleri. Periyodik bakım ile verim ve uzun ömür.",
  },
  "chiller-revizyon-ve-onarim": {
    title: "Chiller Bakımı, Revizyonu ve Onarımı",
    description:
      "Chiller bakımı, revizyon ve onarım hizmetleri. Sistem performansını korumak için periyodik kontroller ve hızlı servis.",
  },
  "thermotron-bakim-ve-onarim": {
    title: "Thermotron Bakımı ve Onarımı",
    description:
      "Thermotron bakımı, kalibrasyon ve onarım. Test süreçlerinde güvenilirlik için periyodik bakım ve arıza tespiti.",
  },
  "rooftop-klima-ariza-bakim-ve-onarim": {
    title: "Rooftop Klima Bakımı ve Onarımı",
    description:
      "Rooftop bakımı ve onarımı, arıza tespiti ve periyodik servis. Hızlı müdahale ile verimli ve güvenli çalışma.",
  },
  "vrf-klima-sistemleri": {
    title: "VRF Klima Sistemleri Bakım ve Onarım",
    description:
      "VRF klima sistemleri bakım, onarım ve servis hizmetleri. Enerji verimliliği ve sistem performansı için uzman destek.",
  },
  "klima-santrali-bakim-ve-onarim": {
    title: "Klima Santrali Bakımı ve Onarımı",
    description:
      "Klima santrali bakımı, onarımı ve arıza tespiti. Periyodik bakım ile hava kalitesi ve verimlilik artar.",
  },
  "pano-klima-bakim-ve-onarim": {
    title: "Pano Klima Bakımı ve Onarımı",
    description:
      "Pano klima bakımı ve onarımı, arıza tespiti ve servis. Elektronik ekipman güvenliği için düzenli bakım.",
  },
  "iklimlendirme-hizmetleri": {
    title: "İklimlendirme Hizmetleri",
    description:
      "İklimlendirme hizmetleri: soğuk oda, havuz nem alma, kanal temizliği ve yeniden kurulum çözümleri.",
  },
  "hastane-hijyenik-klima-bakimi-ve-onarimi": {
    title: "Hastane Hijyenik Klima Bakımı",
    description:
      "Hastane hijyenik klima bakımı ve onarımı. Hijyen, hava kalitesi ve güvenlik için düzenli bakım ve servis.",
  },
  "dx-sogutma-sistemleri-bakim-ve-onarim": {
    title: "DX Soğutma Sistemleri Bakımı",
    description:
      "DX soğutma sistemleri bakımı ve onarımı, arıza tespiti ve servis. Verim ve performans için periyodik bakım.",
  },
  "hassas-klima-bakim-onarim-ve-yedek-parca": {
    title: "Hassas Klima Bakımı ve Onarımı",
    description:
      "Hassas klima bakımı, onarımı ve yedek parça hizmetleri. Veri merkezi ve laboratuvarlar için güvenilir iklim kontrolü.",
  },
  "klima-kiralama": {
    title: "Klima Kiralama Hizmeti",
    description:
      "Kısa ve uzun dönem klima kiralama hizmeti. Kurulum, bakım ve teknik destek ile esnek çözümler.",
  },
  "ariza-kodlari": {
    title: "Klima Arıza Kodları ve Çözümleri",
    description:
      "Klima arıza kodları açıklamaları ve çözüm önerileri. Sorun tespiti ve doğru müdahale için rehber.",
  },
};

const siteUrl = "https://www.asrinklima.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceTitle: string }>;
}): Promise<Metadata> {
  const { serviceTitle } = await params;
  const service = hizmetlerimizMap[serviceTitle];

  if (!service) {
    return {
      title: "Hizmet Bulunamadı",
      description: "Aradığınız hizmet bulunamadı.",
    };
  }

  const defaultTitle = service.title;
  const defaultDescription = `${service.title} hizmetlerinde bakım, onarım ve arıza tespiti için uzman destek.`;
  const seo = serviceSeo[service.slug];
  const title = seo?.title ?? defaultTitle;
  const description = seo?.description ?? defaultDescription;
  const canonical = `${siteUrl}/hizmetlerimiz/${service.slug}`;

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

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ serviceTitle: string }>;
}) {
  const { serviceTitle } = await params;

  const service = hizmetlerimizMap[serviceTitle];

  if (!service) {
    return notFound();
  }

  function toPossessiveFromSlug(slug: string): string {
    const possessiveMap: Record<string, string> = {
      "split-klima-bakim-onarim-ve-yedek-parca": "Split Klimalarınız",
      "chiller-revizyon-ve-onarim": "Chillerlarınız",
      "rooftop-klima-ariza-bakim-ve-onarim": "Rooftoplarınız",
      "vrf-klima-sistemleri": "VRF Sistemleriniz",
      "klima-santrali-bakim-ve-onarim": "Klima Santralleriniz",
      "pano-klima-bakim-ve-onarim": "Pano Klimalarınız",
      "iklimlendirme-hizmetleri": "İklimlendirme Hizmetleriniz",
      "hastane-hijyenik-klima-bakimi-ve-onarimi": "Hastane Hijyenik Klimalarınız",
      "dx-sogutma-sistemleri-bakim-ve-onarim": "DX Soğutma Sistemleriniz",
      "hassas-klima-bakim-onarim-ve-yedek-parca": "Hassas Klimalaranız",
      "thermotron-bakim-ve-onarim": "Thermotron",
    };

    return possessiveMap[slug] || slug;
  }

  function toPossessiveTopFrom(slug: string): string {
    const possessiveMap: Record<string, string> = {
      "split-klima-bakim-onarim-ve-yedek-parca": "Split Klima",
      "chiller-revizyon-ve-onarim": "Chiller",
      "rooftop-klima-ariza-bakim-ve-onarim": "Rooftop",
      "vrf-klima-sistemleri": "VRF",
      "klima-santrali-bakim-ve-onarim": "Klima Santrali",
      "pano-klima-bakim-ve-onarim": "Pano Klima",
      "iklimlendirme-hizmetleri": "İklimlendirme",
      "hastane-hijyenik-klima-bakimi-ve-onarimi": "Hastane Hijyenik Klima",
      "dx-sogutma-sistemleri-bakim-ve-onarim": "DX Soğutma Sistemleri",
      "hassas-klima-bakim-onarim-ve-yedek-parca": "Hassas Klima",
      "thermotron-bakim-ve-onarim": "Thermotron",
    };

    return possessiveMap[slug] || slug;
  }

  const possessiveTitle = toPossessiveFromSlug(service.slug);
  const possessiveTopTitle = toPossessiveTopFrom(service.slug);

  const ServiceComponent = serviceComponents[service.slug];

  if (!ServiceComponent) {
    return notFound();
  }

  const isKlimaKiralama = serviceTitle === "klima-kiralama" || serviceTitle === "ariza-kodlari";
  const isErrorCodesPage = serviceTitle === "ariza-kodlari";

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    url: `${siteUrl}/hizmetlerimiz/${service.slug}`,
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Anasayfa",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hizmetlerimiz",
        item: `${siteUrl}/#hizmetlerimiz`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/hizmetlerimiz/${service.slug}`,
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {!isErrorCodesPage && (
        <h1 className="service-page-title mb-4">
          {service.title.endsWith("Hizmetleri") ? service.title : `${service.title} Hizmetleri`}
        </h1>
      )}

      {Array.isArray(service.subCategories) && service.subCategories.length > 0 && (
        <div className="mx-4 mt-8 lg:hidden bg-white rounded-3xl">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-2xl font-bold text-blue">Alt Kategoriler</h3>
            <span className="text-sm text-gray-400">{service.subCategories.length} seçenek</span>
          </div>
          <div className="w-10 h-1 bg-red rounded-full mb-6" />
          <div className="grid grid-cols-2 gap-3">
            {service.subCategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/hizmetlerimiz/${service.slug}/${sub.slug}`}
                title={sub.title}
                className="flex items-center justify-between gap-2 rounded-2xl border border-gray-200 px-4 py-4 hover:border-red/40 hover:bg-red/5 transition-colors"
              >
                <span className="font-semibold text-blue text-sm">{sub.title}</span>
                <ChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      )}

      <ServiceComponent />

      {!isKlimaKiralama && (
        <div className="mt-10 mb-6 mx-4 p-6 bg-gradient-to-br bg-red rounded-xl shadow-2xl text-whiteB">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              {possessiveTopTitle} Çözümlerinde Uzman Destek
            </h3>
            <p className="text-lg mb-6 !text-whiteB">
              {possessiveTitle} için bakım, onarım veya yedek parça
              ihtiyacınız varsa, bizimle iletişime geçebilirsiniz.
              <span className="block mt-2">
                Size özel çözümlerimizle, sistemlerinizin performansını artırmak
                ve enerji tasarrufu sağlamak için buradayız!
              </span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05388225559"
                title="Bizi Arayın: 0538 822 55 59"
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

export async function generateStaticParams() {
  const params = [];

  for (const service of hizmetlerimiz) {
    if (service.subCategories && service.subCategories.length > 0) {
      for (const sub of service.subCategories) {
        params.push({
          serviceTitle: service.slug,
          subCategory: sub.slug,
        });
      }
    } else {
      params.push({
        serviceTitle: service.slug,
      });
    }
  }

  return params;
}
