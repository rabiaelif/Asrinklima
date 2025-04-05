"use client";
import React from "react";
import {
  FaTools, FaShieldAlt, FaSnowflake, FaFan, FaBolt, FaThermometerHalf,
  FaExclamationTriangle, FaWrench, FaCog
} from "react-icons/fa";
import IssueCard from "../../IssueCard";

export default function Rooftop() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="text-start mb-10">
        <div className="space-y-1 text-black/90 max-w-4xl">
          <p itemProp="description">
            Rooftop klima sistemleri, özellikle ticari binalar, alışveriş merkezleri, oteller ve endüstriyel tesislerde yaygın olarak kullanılan, çatı üstüne monte edilen paket tipi klima sistemleridir. </p>
          <p>Bu sistemler, hem ısıtma hem de soğutma ihtiyaçlarını karşılar. Bu sistemlerin verimli ve uzun ömürlü olabilmesi için düzenli bakım ve onarımları büyük önem taşır.</p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Rooftop'da Bakım ve Onarımın Önemi</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <IssueCard
            title="Enerji Verimliliği"
            content="Düzenli bakım, sistemin optimum verimlilikte çalışmasını sağlar, böylece enerji tüketimi düşer ve maliyetler azalır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Arıza Önleme"
            content="Periyodik kontroller, olası arızaların erken tespit edilmesine olanak tanır ve büyük maliyetli onarımların önüne geçer."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Uzun Ömür"
            content="Sistem bileşenlerinin düzenli bakımı, cihazın ömrünü uzatarak daha uzun süre güvenilir hizmet sunmasını sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />
        </div>
      </section>

      <section className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Yaygın Sorunlar ve Çözümleri</h2>
        </div>
        <div className="space-y-8">
          {/* 1. Yetersiz Soğutma Kapasitesi */}
          <div>
            <h3 className="text-xl font-semibold text-black/90 mb-4">1. Soğutma veya Isıtma Performansında Düşüş</h3>
            <div className="space-y-6">
              <IssueCard
                title="Kirli Filtreler"
                solution="Hava filtreleri, düzenli olarak temizlenmeli veya değiştirilmelidir. Kirli filtreler, hava akışını engelleyerek sistem verimliliğini düşürür."
                content="Hava akışını kısıtlayarak performans kaybına yol açar."
              />
              <IssueCard
                title="Düşük Soğutucu Gaz Seviyesi"
                solution="Soğutucu gaz seviyesi düzenli olarak kontrol edilmeli, düşükse sistem yeniden şarj edilmelidir. Soğutucu gaz seviyesi eksik veya düşükse, performans kaybına yol açar. Gaz dolumu yapılmadan önce, gaz kaçağının tespiti için azot testi uygulanmalı ve kaçağın giderilmesinin ardından gaz seviyesi tamamlanmalıdır."
                content="Yetersiz gaz seviyesi, ısı transferini olumsuz etkiler."
              />
            </div>
          </div>

          {/* 2. Yüksek Kompresör Basıncı */}
          <div>
            <h3 className="text-xl font-semibold text-black/90 mb-4">2. Elektriksel Sorunlar</h3>
            <IssueCard
              title="Gevşek veya Aşınmış Kablolar"
              solution="Tüm elektriksel bağlantılar düzenli olarak kontrol edilmeli, yıpranmış veya hasar gören kablolar değiştirilmelidir."
              content="Elektriksel iletimde aksamalara neden olabilir."
            />
          </div>
           {/* 3. Gürültü */}
        <div>
          <h3 className="text-xl font-semibold text-black/90 mb-4">3. Kondanser Fan Motoru Problemleri</h3>
          <div className="space-y-4">
            <IssueCard
              title="Kirlenmiş veya Aşınmış Fanlar"
              solution="Fanların ve motorların dönüş hızı, kanat temizliği ve rulmanların durumu düzenli olarak kontrol edilmeli, gerekirse yağlama veya değişim yapılmalıdır."
              content="Hava akışını engelleyerek sistem verimliliğini düşürür."
            />
            <IssueCard
              title="Rulman Arızaları"
              solution="Rulmanların aşınma durumu ve yağ seviyesi kontrol edilmeli, gerekirse rulmanlar yağlanmalı veya değiştirilmelidir."
              content="Rulmanların aşınması veya sıkışması, fan motorunun düzgün çalışmasını engelleyerek performans kaybına yol açar."
            />
            <IssueCard
              title="Kayış Kopması"
              solution="Kayışların aşınma durumu düzenli olarak incelenmeli, gevşek veya kopmuş kayışlar tespit edilerek değiştirilmeli ve uygun gerginlikte ayarlanmalıdır."
              content="Motoru çalışsa bile kayış koptuğunda fan dönmez, bu da soğutma kapasitesinin düşmesine neden olur."
            />
          </div>
        </div>
        </div>

       
      </section>

      <section className="pb-4 text-black/80 p-5">
        <p className="text-black/90">
          Rooftop klima sistemleri, büyük mekanların iklimlendirme ihtiyaçlarını karşılamak için ideal çözümlerdir. Düzenli bakım, doğru yedek parça kullanımı ve profesyonel destek ile bu sistemlerin ömrünü uzatabilir ve enerji verimliliğini artırabilirsiniz.
        </p>
      </section>
    </div>
  );
}