import type { ComponentType } from "react";
import { titleToSlug } from "@/data/hizmetlerimiz";
import ArızaKodları from "@/app/components/Services/Headings/ArızaKodları/ArızaKodları";
import Chiller from "@/app/components/Services/Headings/Chiller/Chiller";
import FanCoil from "@/app/components/Services/Headings/Chiller/SubServices/FanCoil";
import HavaSoğutmalı from "@/app/components/Services/Headings/Chiller/SubServices/HavaSoğutmalı";
import SuSoğutmalı from "@/app/components/Services/Headings/Chiller/SubServices/SuSoğutmalı";
import Dx from "@/app/components/Services/Headings/DX/Dx";
import HassasKlima from "@/app/components/Services/Headings/Hassas Klima/HassasKlima";
import Laboratuvar from "@/app/components/Services/Headings/Hassas Klima/SubServices/Laboratuvar";
import VeriMerkezi from "@/app/components/Services/Headings/Hassas Klima/SubServices/VeriMerkezi";
import HastaneHijyenik from "@/app/components/Services/Headings/Hastane Hijyenik/HastaneHijyenik";
import ThermotronOdasi from "@/app/components/Services/Headings/Thermotron Odasi/ThermotronOdasi";
import Iklimlendirme from "@/app/components/Services/Headings/İklimlendirme/Iklimlendirme";
import HavuzNem from "@/app/components/Services/Headings/İklimlendirme/SubServices/HavuzNem";
import KanalTemizliği from "@/app/components/Services/Headings/İklimlendirme/SubServices/KanalTemizliği";
import SoğukOda from "@/app/components/Services/Headings/İklimlendirme/SubServices/SoğukOda";
import YenidenKurulum from "@/app/components/Services/Headings/İklimlendirme/SubServices/YenidenKurulum";
import KlimaKiralama from "@/app/components/Services/Headings/Klima Kiralama/KlimaKiralama";
import KlimaSantrali from "@/app/components/Services/Headings/Klima Santrali/KlimaSantrali";
import PanoKlima from "@/app/components/Services/Headings/Pano Klima/PanoKlima";
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

const serviceComponentEntries: Array<{ title: string; component: ComponentType }> = [
  { title: "Split Klima Bakım, Onarım ve Yedek Parça", component: Split },
  { title: "Chiller Revizyon ve Onarım", component: Chiller },
  { title: "Rooftop Klima Arıza, Bakım ve Onarım", component: Rooftop },
  { title: "VRF Klima Sistemleri", component: Vrf },
  { title: "Klima Santrali Bakım ve Onarım", component: KlimaSantrali },
  { title: "Pano Klima Bakım ve Onarım", component: PanoKlima },
  { title: "İklimlendirme Hizmetleri", component: Iklimlendirme },
  { title: "Hastane Hijyenik Klima Bakımı ve Onarımı", component: HastaneHijyenik },
  { title: "DX Soğutma Sistemleri Bakım ve Onarım", component: Dx },
  { title: "Hassas Klima Bakım, Onarım ve Yedek Parça", component: HassasKlima },
  { title: "Thermotron Bakım ve Onarım", component: ThermotronOdasi },
  { title: "Klima Kiralama", component: KlimaKiralama },
  { title: "Arıza Kodları", component: ArızaKodları },
];

export const serviceComponents = serviceComponentEntries.reduce<Record<string, ComponentType>>(
  (acc, { title, component }) => {
    acc[titleToSlug(title)] = component;
    return acc;
  },
  {}
);

const subCategoryComponentEntries: Record<
  string,
  Array<{ title: string; component: ComponentType }>
> = {
  "Split Klima Bakım, Onarım ve Yedek Parça": [
    { title: "Salon Tipi Klima", component: SalonTipi },
    { title: "Duvar Tipi Klima", component: DuvarTipi },
    { title: "Yer Tavan Klima", component: YerTavan },
    { title: "Kaset Tipi Klima", component: KasetTipi },
    { title: "Kanallı Klima", component: Kanallı },
    { title: "Multi Klima", component: Multi },
  ],
  "Chiller Revizyon ve Onarım": [
    { title: "Fan Coil Sistemleri", component: FanCoil },
    { title: "Su Soğutmalı Chiller", component: SuSoğutmalı },
    { title: "Hava Soğutmalı Chiller", component: HavaSoğutmalı },
  ],
  "VRF Klima Sistemleri": [
    { title: "VRF Alt Yapı Borulama Hazırlığı", component: VrfAltYapı },
    { title: "DVM Samsung VRF Sistemleri", component: Dvm },
  ],
  "İklimlendirme Hizmetleri": [
    { title: "Soğuk Oda İmalat ve Onarım", component: SoğukOda },
    { title: "Havuz Nem Alma Cihazı", component: HavuzNem },
    { title: "Kanal Temizliği", component: KanalTemizliği },
    { title: "Yeniden Kurulum", component: YenidenKurulum },
  ],
  "Hassas Klima Bakım, Onarım ve Yedek Parça": [
    { title: "Veri Merkezi Soğutma", component: VeriMerkezi },
    { title: "Laboratuvar Klimaları", component: Laboratuvar },
  ],
};

export const subCategoryComponents = Object.entries(
  subCategoryComponentEntries
).reduce<Record<string, Record<string, ComponentType>>>(
  (acc, [serviceTitle, subEntries]) => {
    acc[titleToSlug(serviceTitle)] = subEntries.reduce<Record<string, ComponentType>>(
      (subAcc, { title, component }) => {
        subAcc[titleToSlug(title)] = component;
        return subAcc;
      },
      {}
    );
    return acc;
  },
  {}
);
