'use client'
import React from "react";
import { FaTools, FaShieldAlt, FaSnowflake, FaTint, FaBolt, FaFan } from "react-icons/fa";
import IssueCard from "../../../IssueCard";
import Image from "next/image";

const DuvarTipi = () => {
  return (
    <div className="max-w-6xl  max-lg:pt-6 px-3">
      <section className="text-start mb-10">
        <div className="text-black/90 max-w-4xl">
          <p>
            Duvar tipi klimalar, ev ve ofis ortamlarında yaygın olarak tercih edilen iklimlendirme çözümleridir. Bu klimalar, duvara monte edilen iç ünite ve dış üniteden oluşan split sistem prensibine göre çalışır.
          </p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Duvar Tipi Split Klima Bakımı Neden Önemli?</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            title="Enerji Verimliliği"
            content="Düzenli bakım yapılan klimalar, daha az enerji tüketerek yüksek performans gösterir. Bu da elektrik faturalarının düşmesine ve enerji tasarrufunun sağlanmasına yardımcı olur."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Uzun Cihaz Ömrü"
            content="Periyodik bakım, klimanın bileşenlerinin düzenli kontrol edilmesini ve temizlenmesini içerir. Bu, cihazın ömrünü uzatır ve erken arızaların önlenmesine katkıda bulunur."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="İç Hava Kalitesi"
            content="Klima filtrelerinin temizlenmesi veya değiştirilmesi, havadaki toz, kir ve alerjenlerin filtrelenmesini sağlar. Bu sayede solunum yolu hastalıklarının önüne geçilir ve iç mekan hava kalitesi korunur."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Maliyet Tasarrufu"
            content="Bakım ve onarımlar, büyük arızaların önüne geçer ve beklenmedik masrafları azaltır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>
      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Profesyonel Bakım Hizmetleri</h2>
          </div>
        </div>
        <p className="mb-4">Duvar tipi klimaların uzun ömürlü ve verimli çalışması için düzenli bakım ve onarım hizmetleri şarttır. </p>

        <div className="space-y-6">
          <IssueCard
            icon={FaSnowflake}
            title="Filtre Temizliği ve Değişimi"
            content="Kirli veya tıkalı filtreler, hava akışını engeller ve enerji verimliliğini düşürür. Filtre temizliği sırasında gerektiğinde evaporatör temizliği de yapılmalıdır."
            className=" hover:shadow-md transition-shadow"

          />

          <IssueCard
            icon={<Image src="/icon/refrigerantgas1.png"
              alt="Refrigerant" width={24} height={24} />}
            title="Soğutucu Gaz Kontrolü ve Dolumu"
            content="Soğutucu gaz seviyesi eksik veya düşükse, performans kaybına yol açar. Gaz dolumu yapılmadan önce, gaz kaçağının tespiti için azot testi uygulanmalı ve kaçağın giderilmesinin ardından gaz seviyesi tamamlanmalıdır."
            className=" hover:shadow-md transition-shadow"

          />
          <IssueCard
            icon={FaBolt}
            title="Elektrik Bağlantılarının Kontrolü"
            content="Gevşek veya hasarlı elektrik bağlantıları, cihazın güvenliğini ve verimliliğini etkiler."
            className=" hover:shadow-md transition-shadow"

          />
          <IssueCard
            icon={FaFan}
            title="Fan ve Motor Bakımı"
            content="Düzenli fan ve motor bakımı, cihazın sessiz ve verimli çalışmasını sağlar."
            className=" hover:shadow-md transition-shadow"

          />

          <IssueCard
            icon={FaTint}
            title="Drenaj Sistemi Temizliği"
            content="Tıkalı drenaj sistemleri su sızıntılarına ve cihaz arızalarına neden olabilir. Düzenli temizlik önemlidir."
            className=" hover:shadow-md transition-shadow"

          />
        </div>
      </section>

      <section className="mb-16  rounded-xl ">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Orijinal Yedek Parça Kullanımı</h2>
        </div>
        <p>Klimanızın performansını ve güvenliğini korumak için orijinal yedek parçaların kullanımı esastır. Orijinal parçalar, cihazınızın tasarımına ve teknik özelliklerine tam uyum sağlar, böylece:</p>
        <ul className="list-disc px-5 pt-5 pl-10 space-y-2 text-gray-700">
          <li><strong>Sistem Performansın Korunması:</strong> Orijinal parçalar, klimanın tasarlandığı şekilde çalışmasını sağlar ve performans kaybını önler.</li>
          <li><strong>Güvenilirlik ve Dayanıklılık:</strong> Orijinal yedek parçalar, daha uzun ömürlüdür ve daha az arıza yapar.</li>
          <li><strong>Enerji Verimliliği:</strong> Kaliteli parçalar, klimanın enerji tüketimini optimize eder ve tasarruf sağlar.</li>
        </ul>
      </section>

      <section className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Yaygın Arızalar ve Çözümleri</h2>
        </div>
        <p className="pb-4">Duvar tipi klimalarda sıkça karşılaşılan sorunlar ve olası çözümleri şunlardır:</p>
        <div className="space-y-6">
          <IssueCard
            title="Soğutma Performansında Azalma"
            cause="Kirli filtreler veya düşük soğutucu gaz seviyesi nedeniyle oluşabilir."
            solution="Filtrelerin temizlenmesi veya değiştirilmesi ve gaz seviyesinin kontrol edilmesi."
          />

          <IssueCard
            title="Anormal Sesler ve Titreşimler"
            cause="Fan motoru arızası veya dengeleme sorunlarından kaynaklanabilir."
            solution="Profesyonel teknisyenler tarafından fan ve motorun incelenmesi ve gerekirse onarılması veya değiştirilmesi."
          />

          <IssueCard
            title="Su Sızıntıları"
            cause="Su Sızıntıları: Tıkalı drenaj hatları veya hasarlı drenaj tavası nedeniyle meydana gelebilir."
            solution="Drenaj sisteminin temizlenmesi ve tavanın onarılması."
          />
          <IssueCard
            title="Elektronik Kart Arızaları"
            cause="Sistemin kontrolünde aksamalara yol açabilir."
            solution="Elektronik kartın uzman kişiler tarafından kontrol edilmesi ve gerekirse yenisiyle değiştirilmesi."
          />
        </div>
      </section>
      <div className="pb-4 text-black/80 p-5"><p>Düzenli bakım ve onarım hizmetleri almak, duvar tipi klimanızın verimli, güvenilir ve uzun ömürlü çalışmasını sağlar. Yetkili servisler tarafından gerçekleştirilen profesyonel bakım, cihazınızın performansını artırır ve olası sorunları önler.</p></div>

    </div>
  )
}

export default DuvarTipi