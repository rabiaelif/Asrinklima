'use client'
import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import IssueCard from "../../../IssueCard";
import Image from "next/image";

const Kanallı = () => {
  return (
    <div className="max-w-6xl  max-lg:pt-6 px-3">
      <section className="mb-10">
        <div className="text-black/90 max-w-4xl">
          <p className="leading-relaxed">
            Kanallı klimalar, geniş alanlarda eşit hava dağılımı sağlayarak estetik açıdan mekânlarla uyum içinde çalışır. Bu nedenle, kanallı klimanın uzun ömürlü ve verimli çalışabilmesi için düzenli bakım, zamanında onarım ve kaliteli yedek parça kullanımı son derece önemlidir.
          </p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-4">
          <div className="flex items-center gap-3">
             <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Kaset Tipi Split Klima Bakımı Neden Önemli?</h2>
          </div>
        </div>
        <p className="mb-8">Kanallı klimanın periyodik bakımı, cihazın ömrünü uzatır, enerji verimliliğini artırır ve beklenmedik arızaların önüne geçer. Ayrıca, temiz filtreler sayesinde iç hava kalitesi yükselir.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard title="Enerji Verimliliği" content="Düzenli bakım, klimanın enerji tüketimini azaltarak işletme maliyetlerini düşürür." className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
          <IssueCard title="Uzun Ömür" content="Bakımlı bir klima, arızalara karşı daha dirençlidir ve daha uzun süre sorunsuz çalışır." className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
          <IssueCard title="İç Hava Kalitesi" content="Düzenli filtre temizliği ve bakım, ortam havasını sağlıklı ve temiz tutar." className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
          <IssueCard title="Arıza Riskini Azaltma" content="Önleyici bakım, büyük onarımlar gerektirebilecek sorunları erken aşamada tespit eder." className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Sık Karşılaşılan Sorunlar ve Çözümleri</h2>
        </div>
        <div className="space-y-8">
          <IssueCard title="Soğutma Performansı Düşüklüğü" cause="Kirli filtreler veya düşük soğutucu gaz seviyesi nedeniyle oluşabilir." solution="Filtrelerin temizlenmesi veya değiştirilmesi ve gaz seviyesinin kontrol edilmesi." className="hover:shadow-md transition-shadow" />
          <IssueCard title="Su Sızıntısı" cause="Tıkalı drenaj hatları veya yanlış montaj açısı su sızıntısına neden olabilir." solution="Drenaj hattının temizlenmesi ve montaj açısının düzeltilmesi." className="hover:shadow-md transition-shadow" />
          <IssueCard title="Anormal Sesler ve Titreşimler" cause="Fan motoru arızası veya gevşek vidalar nedeniyle olabilir." solution="Fan motorunun ve vidaların kontrol edilerek sıkılması veya değiştirilmesi." className="hover:shadow-md transition-shadow" />
          <IssueCard title="Klimanın Çalışmaması" cause="Elektrik bağlantı sorunları veya kontrol kartı arızası nedeniyle olabilir." solution="Elektrik bağlantılarının ve kontrol kartının incelenmesi, gerekiyorsa değiştirilmesi." className="hover:shadow-md transition-shadow" />
        </div>
      </section>

      <section className="mb-8" itemScope itemType="https://schema.org/HowTo">
        <div className="border-l-4 border-blue-800 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-blue-800" itemProp="name">Kanallı Klima Bakım Periyotları</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <IssueCard title="Aylık" content="Filtre temizliği ve genel kontrol." className="bg-white border border-blue-100 p-4 rounded-lg" />
          <IssueCard title="Üç Aylık" content="Detaylı sistem bakımı ve kontrol ayarları." className="bg-white border border-blue-100 p-4 rounded-lg" />
          <IssueCard title="Altı Aylık" content="Derinlemesine bakım ve parça kontrolü." className="bg-white border border-blue-100 p-4 rounded-lg" />
          <IssueCard title="Yıllık" content="Kapsamlı bakım ve yedek parça değişimi." className="bg-white border border-blue-100 p-4 rounded-lg" />
        </div>
      </section>

      <section className="p-5">
        <div className="prose prose-lg text-black/90">
          <p className="leading-relaxed">
            Düzenli bakım, profesyonel onarım ve kaliteli yedek parça kullanımı, kanallı klimanızın uzun yıllar sorunsuz çalışmasını sağlayacaktır. Herhangi bir sorun durumunda, uzman teknik ekibimizle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Kanallı;