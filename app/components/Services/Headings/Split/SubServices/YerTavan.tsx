'use client'
import React from "react";
import { FaTools, FaShieldAlt, FaSnowflake, FaBolt, FaFan } from "react-icons/fa";
import IssueCard from "../../../IssueCard";
import Image from "next/image";

const YerTavan = () => {
  return (
    <div className="max-w-6xl  max-lg:pt-6 px-3">
      <section className="text-start mb-10">
        <div className="text-black/90 max-w-4xl">
          <p>
            Yer tavan tipi klimalar, özellikle geniş mekanlar için ideal iklimlendirme çözümleri sunar. Bu sistemlerin düzenli bakımı, onarımı ve gerektiğinde kaliteli yedek parça kullanımı, cihazın ömrünü ve performansını doğrudan etkiler.
          </p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
             <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Yer Tavan Split Klima Bakımı Neden Önemli?</h2>
          </div>    </div>

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
            title="Arıza Önleme"
            content="Düzenli kontrol ve bakım, olası arızaları erken tespit eder ve büyük maliyetli onarımların önüne geçer."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Performans Artışı"
            content="Sistem bakımı, klimanızın soğutma ve ısıtma kapasitesini en üst düzeye çıkarır."
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

        <p className="mb-6 text-black/80 leading-relaxed">
          Yer tavan tipi klimalarda karşılaşılabilecek arızalar, uzman teknisyenler tarafından hızlı ve etkili bir şekilde çözülmelidir. Profesyonel onarım hizmetleri şunları içerir:
        </p>
        <div className="space-y-6">
          <IssueCard
            icon={FaSnowflake}
            title="Kompresör Arızaları"
            content="Kompresörün düzgün çalışması, klimanızın temel işlevselliği için kritiktir. Arızalandığında, uzman teknisyenler tarafından orijinal yedek parçalarla değiştirilmesi veya onarılması gerekir."
            className=" hover:shadow-md transition-shadow"
          />
          <IssueCard
            icon={FaBolt}
            title="Elektronik Kart Sorunları"
            content="Elektronik kart arızaları, klimanızın kontrol sistemini etkileyebilir. Bu tür sorunlar, yetkili servisler tarafından profesyonelce çözülmelidir."
            className=" hover:shadow-md transition-shadow"
          />
          <IssueCard
            icon={FaFan}
            title="Fan ve Motor Bakımı"
            content="Fan motorları, hava sirkülasyonunda hayati rol oynar. Periyodik bakım ve gerektiğinde motor değişimi, sistem verimliliğini artırır."
            className=" hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={<Image unoptimized src="/icon/refrigerantgas1.png"
              alt="Refrigerant" width={24} height={24} />} title="Soğutucu Gaz Kontrolü ve Dolumu"
            content="Soğutucu gaz seviyesi eksik veya düşükse, performans kaybına yol açar. Gaz dolumu yapılmadan önce, gaz kaçağının tespiti için azot testi uygulanmalı ve kaçağın giderilmesinin ardından gaz seviyesi tamamlanmalıdır."
            className=" hover:shadow-md transition-shadow"
          />
        </div>
      </section>


      <section className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Sık Karşılaşılan Sorunlar ve Çözümleri</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Soğutma veya Isıtma Performansının Düşmesi</h3>
            <div className="space-y-4">
              <IssueCard
                title="Kirli veya Tıkalı Hava Filtreleri"
                solution="Filtreleri düzenli olarak temizlemek veya gerekiyorsa değiştirmek, hava akışını iyileştirir. "
                content="Filtrelerin tıkanması, hava akışını engeller ve cihazın verimli çalışmasını azaltır. "
              />
              <IssueCard
                title="Soğutucu Gaz Seviyesinin Düşüklüğü"
                solution=" Soğutucu gaz seviyesi kontrol edilmeli ve eksiklik durumunda dolum yapılmalıdır."
                content="Yetersiz gaz seviyesi, cihazın istenilen sıcaklığı sağlamasını zorlaştırır."
              />
              <IssueCard
                title="Elektriksel Bağlantı Sorunları"
                solution=" Elektriksel bağlantılar uzman teknisyenler tarafından incelenmeli ve gerekirse düzeltilmelidir."
                content="Gevşek veya hatalı elektrik bağlantıları, cihazın düzgün çalışmasını engelleyebilir."
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Anormal Sesler ve Titreşimler</h3>
            <div className="space-y-4">
              <IssueCard
                title="Fan Motoru Sorunları"
                content="Dengesiz veya arızalı fan motorları, ses ve titreşime yol açabilir."
                solution="Fan motoru incelenmeli, gerekirse temizlenmeli veya değiştirilmelidir."
              />
              <IssueCard
                title="Geçmişte Yapılmamış Bakım"
                content="Uzun süre bakım yapılmayan cihazlarda, gevşek parçalar ve birikintiler ses yapabilir."
                solution="Periyodik Bakım, cihazın düzenli bakımı, ses ve titreşim sorunlarını önler."
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Su Sızıntıları</h3>
            <div className="space-y-4">
              <IssueCard
                title="Tıkalı Drenaj Kanalları"
                content="Drenaj yollarının tıkanması, suyun birikmesine ve sızmasına neden olabilir."
                solution=" Tüm drenaj yolları temizlenmeli ve tıkanıklıklar giderilmelidir."
              />
              <IssueCard
                title="Hasarlı Drenaj Pompaları:"
                content="Drenaj pompasının arızalanması, suyun tahliye edilmesini engeller."
                solution="Drenaj pompası kontrol edilmeli, arızalıysa onarılmalı veya değiştirilmelidir"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Elektronik Kart Arızaları</h3>
            <div className="space-y-4">
              <IssueCard
                title="Güç Dalgalanmaları"
                content="Elektriksel dalgalanmalar, elektronik kartlarda hasara yol açabilir."
                solution="Cihazları, voltaj dalgalanmalarına karşı koruyan regülatörler kullanılmalıdır."
              />
              <IssueCard
                title="Yaşlanma ve Aşınma"
                content="Zamanla, elektronik bileşenler eskir ve arızalanabilir."
                solution="Elektronik kart arızalarında, uzman teknisyenlerden destek alınmalıdır."
              />
            </div>
          </div>
        </div>
      </section>


      <section className="p-5">
        <div className="prose prose-lg text-black/90">
          <p className="leading-relaxed">
            Düzenli bakım ve onarım hizmetleri almak, yer tavan tipi klimanızın verimli, güvenilir ve uzun ömürlü çalışmasını sağlar. Yetkili servisler tarafından gerçekleştirilen profesyonel bakım, cihazınızın performansını artırır ve olası sorunları önler.
          </p>
        </div>
      </section>

    </div>
  )
}

export default YerTavan