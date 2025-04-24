"use client";
import React from "react";
import { FaTools, FaShieldAlt, FaSnowflake, FaTint, FaBolt, FaFan } from "react-icons/fa";
import IssueCard from "../../../IssueCard";
import Image from "next/image";


export default function SalonTipi() {
  return (
    <div className="max-w-6xl  max-lg:pt-6 px-3">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-4xl">
          <p>
            Salon tipi split klimalar, geniş ve yüksek tavanlı mekânlar için tasarlanmış yüksek kapasiteli iklimlendirme sistemleridir. Bu sistemlerin sürdürülebilir performansı için düzenli bakım, gerektiğinde onarım ve kaliteli yedek parça kullanımı kritik önem taşır.
          </p>
          <p>
            Güçlü fan sistemleri sayesinde hava akışını geniş bir alana dağıtarak ortamın her köşesini homojen bir şekilde soğutur veya ısıtırlar. Ayrıca, ek ısıtıcılarla donatılmış olmaları, ısı pompası sistemini destekler ve düşük dış sıcaklıklarda bile güvenilir bir performans sağlar.
          </p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Salon Tipi Split Klima Bakımı Neden Önemli?
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            title="Enerji Verimliliği"
            content="Düzenli bakım, klimanızın enerji tüketimini optimize eder ve elektrik faturalarınızı düşürür."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Sistem Ömrü"
            content="Periyodik bakım ve zamanında onarımlar, cihazınızın ömrünü uzatarak uzun vadeli kullanım sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="İç Hava Kalitesi"
            content="Temiz filtreler ve düzgün çalışan sistemler, hava kalitesini artırır ve sağlıklı bir ortam sunar."
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

        <p className="mb-4">Salon tipi klimalar için önerilen periyodik bakım işlemleri:</p>

        <div className="space-y-6">
          <IssueCard
            icon={FaSnowflake}
            title="Filtre Temizliği ve Değişimi"
            content="Kirli veya tıkalı filtreler, hava akışını engeller ve enerji verimliliğini düşürür. Filtre temizliği sırasında gerektiğinde evaporatör temizliği de yapılmalıdır."
            className="hover:shadow-md transition-shadow"

          />

          <IssueCard
            icon={<Image unoptimized src="/icon/refrigerantgas1.png"
              alt="Refrigerant" width={24} height={24} />} title="Soğutucu Gaz Kontrolü ve Dolumu"
            content="Soğutucu gaz seviyesi eksik veya düşükse, performans kaybına yol açar. Gaz dolumu yapılmadan önce, gaz kaçağının tespiti için azot testi uygulanmalı ve kaçağın giderilmesinin ardından gaz seviyesi tamamlanmalıdır."
            className="hover:shadow-md transition-shadow"

          />
          <IssueCard
            icon={FaBolt}
            title="Elektrik Bağlantılarının Kontrolü"
            content="Gevşek veya hasarlı elektrik bağlantıları, cihazın güvenliğini ve verimliliğini etkiler."
            className="hover:shadow-md transition-shadow"

          />
          <IssueCard
            icon={FaFan}
            title="Fan ve Motor Bakımı"
            content="Düzenli fan ve motor bakımı, cihazın sessiz ve verimli çalışmasını sağlar."
            className="hover:shadow-md transition-shadow"

          />

          <IssueCard
            icon={FaTint}
            title="Drenaj Sistemi Temizliği"
            content="Tıkalı drenaj sistemleri su sızıntılarına ve cihaz arızalarına neden olabilir. Düzenli temizlik önemlidir."
            className="hover:shadow-md transition-shadow"

          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">
            Orijinal Yedek Parça Kullanımı        </h2>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-black/90 ">
          <li><strong>Performansın Korunması:</strong> Orijinal parçalar, cihazın tasarlandığı şekilde çalışmasını garantiler.</li>
          <li><strong>Arıza Riskinin Azaltılması:</strong> Kaliteli parçalar, sistemin güvenilirliğini artırır ve arıza olasılığını düşürür.</li>
          <li><strong>Enerji Verimliliği:</strong> Orijinal parçalar, enerji tüketimini optimize eder.</li>
          <li><strong>Garanti Kapsamı:</strong> Orijinal parçalar kullanmak, cihaz garantisinin devamını sağlar.</li>
        </ul>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Sık Karşılaşılan Sorunlar ve Çözümleri</h2>
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
        </div>
      </section>


    </div>
  );
}