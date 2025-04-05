"use client";
import React from "react";
import { FaTools, FaShieldAlt, FaSnowflake, FaTint, FaBolt, FaGasPump, FaFan, FaCalendarAlt, FaWind, FaPiggyBank, FaWater, FaMicrochip, FaExternalLinkAlt, FaFilter, FaAirFreshener, FaCogs, FaIndustry } from "react-icons/fa";
import IssueCard from "../../../IssueCard";
import Image from "next/image";

export default function Kanallı() {
  return (
    <div className="max-w-6xl  max-lg:pt-6 px-3">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-4xl">
          <p itemProp="description">
            Kanallı klimalar, geniş alanlarda eşit hava dağılımı sağlayarak estetik açıdan mekânlarla uyum içinde çalışır. Bu nedenle, kanallı klimanın uzun ömürlü ve verimli çalışabilmesi için düzenli bakım, zamanında onarım ve kaliteli yedek parça kullanımı son derece önemlidir.
          </p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Kanallı Klima Bakımının Önemi</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <IssueCard
            title="Enerji Verimliliği"
            content="Düzenli bakım, klimanın daha verimli çalışmasını sağlar. Bu da daha düşük enerji tüketimi ve dolayısıyla tasarruf anlamına gelir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Uzun Ömür"
            content="Periyodik bakım, klimanın ömrünü uzatarak erken arızaların önüne geçer ve cihazınızdan maksimum verim almanızı sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Hava Kalitesi"
            content="Temizlenmiş filtreler, sağlıklı bir iç ortam havası oluşturur, böylece kullanıcıların daha rahat ve sağlıklı bir ortamda bulunmalarını sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Kanallı Klima Bakım Hizmetleri</h2>
          </div>
        </div>

        <div className="space-y-6">
          <IssueCard
            icon={FaSnowflake}
            title="Filtre Temizliği ve Değişimi"
            content="Filtrelerin kirli olması, hava akışını engeller ve enerji tüketimini artırır. Profesyonel bakımda, filtreler temizlenir veya değiştirilir."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={<Image src="/icon/refrigerantgas1.png" alt="Soğutucu gaz ikonu" width={24} height={24} />}
            title="Soğutucu Gaz Kontrolü"
            content="Gaz seviyesinin düşük olması, soğutma performansını etkileyebilir. Bakım sırasında gaz seviyesi kontrol edilir ve gerekiyorsa yeniden doldurulur."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaIndustry}
            title="Dış Ünite Temizliği ve Kontrolü"
            content="Dış ünite, havalandırma kanalları ve bobinler temizlenir. Ayrıca, dış ünitenin etrafında engeller olup olmadığı kontrol edilir."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaFan}
            title="Fan Motoru ve Kompresör Kontrolü"
            content="Fan motoru ve kompresör, klimanın verimli çalışabilmesi için kritik bileşenlerdir. Bu parçaların durumu kontrol edilir, herhangi bir ses ya da titreşim olup olmadığına bakılır."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaBolt}
            title="Elektronik Kart ve Termostat Kontrolü"
            content="Elektronik kart ve termostatın düzgün çalışıp çalışmadığı kontrol edilir. Elektronik arızalar erken tespit edilerek önlenir."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaTint}
            title="Drenaj Sistemi Temizliği"
            content="Tıkalı drenaj hatları, su sızıntılarına neden olabilir. Drenaj hattı temizlenerek bu tür sorunların önüne geçilir."
            className="hover:shadow-md transition-shadow"
          />
        </div>

      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 ">Kanallı Klima Orijinal Yedek Parça Kullanımı</h2>
        <ul className="list-disc px-5 pt-5 pl-10 space-y-2 text-gray-700">
          <li itemProp="itemListElement"><strong>Performansın Korunması:</strong> Orijinal parçalar, cihazın tasarlandığı şekilde çalışmasını garantiler.</li>
          <li itemProp="itemListElement"><strong>Arıza Riskinin Azaltılması:</strong> Kaliteli parçalar, sistemin güvenilirliğini artırır ve arıza olasılığını düşürür.</li>
          <li itemProp="itemListElement"><strong>Enerji Verimliliği:</strong> Orijinal parçalar, enerji tüketimini optimize eder.</li>
          <li itemProp="itemListElement"><strong>Garanti Kapsamı:</strong> Orijinal parçalar kullanmak, cihaz garantisinin devamını sağlar.</li>
        </ul>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Kanallı Klima Sık Arızalar ve Çözümleri</h2>
        </div>
        <div className="space-y-6">
          <IssueCard
            title="Soğutma Performansı Düşüklüğü"
            cause="Kirli filtreler veya düşük soğutucu gaz seviyesi nedeniyle oluşabilir."
            solution="Filtrelerin temizlenmesi veya değiştirilmesi ve gaz seviyesinin kontrol edilmesi."
          />

          <IssueCard
            title="Anormal Sesler ve Titreşimler"
            cause="Fan motoru arızası veya dengeleme sorunlarından kaynaklanabilir."
            solution="Profesyonel teknisyenler tarafından fan ve motor kontrolü ve gerekirse onarımı."
          />

          <IssueCard
            title="Su Sızıntıları"
            cause="Tıkalı drenaj hatları veya hasarlı drenaj tavası nedeniyle meydana gelebilir."
            solution="Drenaj sisteminin temizlenmesi ve tavanın onarılması."
          />
          <IssueCard
            title="Elektronik Kart Arızaları"
            cause="Elektriksel dalgalanmalar veya yaşlanma nedeniyle oluşabilir."
            solution="Elektronik kartın incelenmesi, onarımı veya gerekirse değiştirilmesi."
          />

          <IssueCard
            title="Klimanın Çalışmaması"
            cause="Elektriksel bağlantı sorunları veya kontrol kartı arızası nedeniyle olabilir."
            solution="Elektrik bağlantılarının kontrol edilmesi ve gerekirse elektronik kartın onarılması."
          />

          <IssueCard
            title="Klimanın İstediğiniz Sıcaklığa Ulaşmaması"
            cause="Termostat arızası veya sensör sorunları kaynaklı olabilir."
            solution="Termostatın kontrol edilmesi, sensörlerin değişimi veya onarımı."
          />

          <IssueCard
            title="Dış Ünite Buzlanması"
            cause="Soğutucu gaz eksikliği veya hava akışının engellenmesi nedeniyle oluşabilir."
            solution="Gaz seviyesinin kontrol edilmesi ve dış ünite etrafındaki engellerin kaldırılması."
          />
        </div>
      </section>

      <section className="mb-16 bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Kanallı Klima Bakım Periyotları</h3>
        <p className="mb-2">Kanallı klimanızın verimli çalışmasını sağlamak ve ömrünü uzatmak için önerilen bakım periyotları:</p>
        <ul className="list-disc px-5 pl-10 space-y-2 text-gray-700">
          <li><strong>Mevsimsel Bakım:</strong> Her mevsim başında, klima sisteminin genel durumu kontrol edilmeli, filtreler temizlenmeli ve soğutma/ısıtma performansı test edilmelidir.</li>
          <li><strong>Filtre Temizliği:</strong> Ayda bir, hava akışının verimli olabilmesi için filtrelerin temizlenmesi, tıkanıklıkların önüne geçilmesi gerekir.</li>
          <li><strong>Detaylı Bakım:</strong> Yılda en az bir kez, uzman teknisyenler tarafından yapılan kapsamlı bakım, sistemin verimliliğini artırır, gizli sorunları erken tespit eder.</li>
        </ul>
      </section>

    </div>
  );
}