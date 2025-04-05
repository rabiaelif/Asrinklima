
import Chiller from "@/app/components/Services/Headings/Chiller/Chiller";
import FanCoil from "@/app/components/Services/Headings/Chiller/SubServices/FanCoil";
import HavaSoğutmalı from "@/app/components/Services/Headings/Chiller/SubServices/HavaSoğutmalı";
import SuSoğutmalı from "@/app/components/Services/Headings/Chiller/SubServices/SuSoğutmalı";
import Dx from "@/app/components/Services/Headings/DX/Dx";
import HassasKlima from "@/app/components/Services/Headings/Hassas Klima/HassasKlima";
import Laboratuvar from "@/app/components/Services/Headings/Hassas Klima/SubServices/Laboratuvar";
import VeriMerkezi from "@/app/components/Services/Headings/Hassas Klima/SubServices/VeriMerkezi";
import HastaneHijyenik from "@/app/components/Services/Headings/Hastane Hijyenik/HastaneHijyenik";
import Iklimlendirme from "@/app/components/Services/Headings/İklimlendirme/Iklimlendirme";
import HavuzNem from "@/app/components/Services/Headings/İklimlendirme/SubServices/HavuzNem";
import KanalTemizliği from "@/app/components/Services/Headings/İklimlendirme/SubServices/KanalTemizliği";
import SoğukOda from "@/app/components/Services/Headings/İklimlendirme/SubServices/SoğukOda";
import YenidenKurulum from "@/app/components/Services/Headings/İklimlendirme/SubServices/YenidenKurulum";
import KlimaKiralama from "@/app/components/Services/Headings/Klima Kiralama/KlimaKiralama";
import KlimaSantrali from "@/app/components/Services/Headings/Klima Santrali/KlimaSantrali";
import Rooftop from "@/app/components/Services/Headings/Rooftop/Rooftop";
import Split from "@/app/components/Services/Headings/Split/Split";
import DuvarTipi from "@/app/components/Services/Headings/Split/SubServices/DuvarTipi";
import Kanallı from "@/app/components/Services/Headings/Split/SubServices/Kanallı";
import KasetTipi from "@/app/components/Services/Headings/Split/SubServices/KasetTipi";
import Multi from "@/app/components/Services/Headings/Split/SubServices/Multi";
import SalonTipi from "@/app/components/Services/Headings/Split/SubServices/SalonTipi";
import YerTavan from "@/app/components/Services/Headings/Split/SubServices/YerTavan";
import Dvm from "@/app/components/Services/Headings/VRF/SubServices/Dvm";
import VrfAltYapı from "@/app/components/Services/Headings/VRF/SubServices/VrfAltYapı";
import Vrf from "@/app/components/Services/Headings/VRF/Vrf";
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
      { title: "Salon Tipi Klima", component: SalonTipi },
      { title: "Duvar Tipi Klima", component: DuvarTipi },
      { title: "Yer Tavan Klima", component: YerTavan },
      { title: "Kaset Tipi Klima", component: KasetTipi },
      { title: "Kanallı Klima", component: Kanallı },
      { title: "Multi Klima", component: Multi },
    ],
  },
  {
    title: "Chiller Revizyon ve Onarım",
    img: "/chiller.jpg",
    component: Chiller,
    subCategories: [
      { title: "Fan Coil Sistemleri", component: FanCoil },
      { title: "Su Soğutmalı Chiller", component: SuSoğutmalı },
      { title: "Hava Soğutmalı Chiller", component: HavaSoğutmalı },
    ],
  },
  {
    title: "Rooftop Klima Arıza, Bakım ve Onarım",
    img: "/rooftop.jpg",
    component: Rooftop,
  },
  {
    title: "VRF Klima Sistemleri",
    img: "/vrfklima.jpg",
    component: Vrf,
    subCategories: [
      { title: "VRF Alt Yapı Borulama Hazırlığı", component: VrfAltYapı },
      { title: "DVM Samsung VRF Sistemleri", component: Dvm },
    ],
  },
  {
    title: "Klima Santrali Bakım ve Onarım",
    img: "/klimasantrali.jpg",
    component: KlimaSantrali,
  },
  {
    title: "İklimlendirme Hizmetleri",
    img: "/iklimlendirme.jpg",
    component:Iklimlendirme ,
    subCategories: [
      { title: "Soğuk Oda İmalat ve Onarım", component: SoğukOda },
      { title: "Havuz Nem Alma Cihazı", component: HavuzNem },
      { title: "Kanal Temizliği", component: KanalTemizliği },
      { title: "Yeniden Kurulum", component: YenidenKurulum },
    ],
  },
  {
    title: "Hastane Hijyenik Klima Bakımı ve Onarımı",
    img: "/hastane.jpg",
    component: HastaneHijyenik,
  },
  {
    title: "DX Soğutma Sistemleri Bakım ve Onarım",
    img: "/dxsogutma.jpg",
    component: Dx,
  },
  {
    title: "Hassas Klima Bakım, Onarım ve Yedek Parça",
    img: "/hassasklima.jpg",
    component: HassasKlima,
    subCategories: [
      { title: "Veri Merkezi Soğutma", component: VeriMerkezi },
      { title: "Laboratuvar Klimaları", component: Laboratuvar },
    ],
  },
  {
    title: "Klima Kiralama",
    img: "/diger.jpg",
    component: KlimaKiralama,
  },
].map((service) => ({
  ...service,
  slug: titleToSlug(service.title),
  subCategories: service.subCategories?.map((sub) => ({
    ...sub,
    slug: titleToSlug(sub.title),
  })),
}));
