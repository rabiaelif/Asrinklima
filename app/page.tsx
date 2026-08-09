import type { Metadata } from "next";
import HomePageClient from "@/app/components/HomePage/HomePageClient";

const siteUrl = "https://www.asrinklima.com";
const title = "Asrın Klima Isıtma, Soğutma ve Havalandırma Sistemleri";
const description =
  "Asrın Klima, klima montajı, bakımı ve tamiri ile birlikte ısıtma-soğutma sistemlerinde profesyonel çözümler sunar. Kaliteli hizmet, uygun fiyat!";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Asrın Klima",
    locale: "tr_TR",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Asrın Klima",
  image: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: "05388225559",
  email: "info@asrinklima.com",
  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: [
    "https://www.facebook.com/hakansahin84",
    "https://www.instagram.com/asrlnklima/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
