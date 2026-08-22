"use client";
import React from "react";
import { FaTools, FaShieldAlt, FaSnowflake, FaWater, FaBolt, FaFan, FaThermometerHalf, FaFilter } from "react-icons/fa";
import IssueCard from "../../../IssueCard";
import Image from "next/image";

export default function SuSoğutmalı() {
  return (
    <div className="max-w-6xl mx-auto max-lg:pt-6 px-4">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-4xl">
          <p itemProp="description">
            Su soğutmalı chiller'lar, soğutma ihtiyacını karşılamak için suyu soğutan ve bu soğutulmuş suyu proses veya iklimlendirme sistemlerine gönderen cihazlardır.
            Bu sistemler, genellikle büyük ölçekli tesislerde (fabrikalar, alışveriş merkezleri, hastaneler vb.) kullanılır ve yüksek soğutma kapasitesi sunar.
          </p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
             <FaShieldAlt className="text-blue-800 hidden lg:flex lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Su Soğutmalı Chiller'da Bakım ve Onarım Neden Önemlidir?</h2>
          </div>
        </div>

        <div className="space-y-6">
          <IssueCard
            title="Kondenser Temizliği"
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
            content={
              <>
                <p>
                  Su soğutmalı chiller sistemlerinde, <strong>kondenser</strong> soğutma sürecinin verimliliği üzerinde büyük bir etkiye sahiptir.
                  Zamanla kirlenen ve tıkanan bu tüpler, sistemin performansını ciddi şekilde düşürebilir.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Soğutma işlemi sırasında, kondenser sıvı soğutucu gazın sıcaklığını düşürerek sıvıyı gaz haline getirir.</li>
                  <li>Kondenser düzenli olarak temizlenmesi, ısı transferinin etkin olmasını sağlar.</li>
                  <li>Bakır, alüminyum veya çelik gibi malzemelerden üretilen kondenser uzun ömürlü olması için doğru bakım yapılmalıdır.</li>
                </ul>
              </>
            }
          />

          <IssueCard
            title="Su Soğutma Kulesi Bakımı"
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
            content={
              <>
                <p>
                  Su soğutma kulesi, soğutma sistemlerinin temel bir parçasıdır ve düzgün çalışabilmesi için sürekli bakım gerektirir:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li><strong>Su Kalitesi Kontrolü:</strong> Kuledeki suyun pH seviyesi, kireç ve yosun birikintileri düzenli olarak kontrol edilmelidir.</li>
                  <li><strong>Kondanser fanı Bakımı:</strong> Fanların düzgün çalışıp çalışmadığı ve motorların verimli olup olmadığı kontrol edilmelidir.</li>
                </ul>
                <p className="mt-3">
                  Su soğutma kulesindeki tıkanıklıklar ve verimsizlik, yüksek enerji tüketimine ve sistem arızalarına yol açabilir.
                </p>
              </>
            }
          />

          <IssueCard
            title="Soğutucu Gaz Seviyesi ve Basınç Kontrolü"
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
            content={
              <>
                <p>
                  Chiller sistemleri, <strong>soğutucu gaz</strong> ile çalışır. Düşük gaz seviyesi, düşük soğutma performansına neden olabilir.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Sistemdeki soğutucu gaz seviyelerinin düzenli olarak kontrol edilmesi gerekir.</li>
                  <li>Gaz kaçağı olasılığına karşı sistemde testler yapılmalıdır.</li>
                </ul>
              </>
            }
          />

          <IssueCard
            title="Kompresör Bakımı"
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
            content={
              <>
                <p>
                  Kompresörler, chiller sistemlerinin kalbidir. Düzenli bakım, bu bileşenin verimli çalışmasını sağlar:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li><strong>Yağ seviyesi ve performans kontrolü</strong> yapılmalıdır. Yetersiz yağ seviyeleri, kompresörün aşırı ısınmasına ve zarar görmesine yol açabilir.</li>
                  <li><strong>Elektriksel bağlantıların gözden geçirilmesi</strong> gereklidir. Kompresördeki elektriksel arızalar, tüm sistemin düzgün çalışmasını engelleyebilir.</li>
                </ul>
              </>
            }
          />

          <IssueCard
            title="Filtre Temizliği"
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
            content={
              <>
                <p>
                  Su filtreleri, sistemdeki kirleri ve yabancı maddeleri tutarak suyun temiz kalmasını sağlar.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Filtreler düzenli olarak temizlenmeli veya değiştirilmelidir.</li>
                  <li>Tıkanmış filtreler, su akışını engelleyerek sistem verimliliğini düşürür.</li>
                </ul>
              </>
            }
          />
        </div>
      </section>
      <section itemScope itemType="https://schema.org/FAQPage" className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Su Soğutmalı Chiller'da Yaygın Sorunlar ve Çözümleri</h2>
        </div>
        <div className="space-y-6">
          <IssueCard
            title="Su Kaçakları"
            cause="Boru bağlantılarında veya ekipmanlarda oluşan çatlaklar."
            solution="Kaçaklar tespit edilerek onarılmalı ve gerekirse parçalar değiştirilmelidir."
            className="hover:shadow-md transition-shadow"

          />

          <IssueCard
            title="Yüksek Basınç Alarmı"
            cause="Kondenserin su soğutmalı olması nedeniyle kireçlenme, tortu birikmesi veya soğutma kulesinin yetersiz performansı."
            solution="Kondenser periyodik olarak temizlenmeli ve soğutma kulesinin verimli çalıştığı kontrol edilmelidir."
            className="hover:shadow-md transition-shadow"

          />

          <IssueCard
            title="Düşük Soğutma Performansı"
            cause="Soğutucu gaz seviyesinin düşük olması."
            solution="Gaz dolumu yapılmadan önce, gaz kaçağının tespiti için azot testi uygulanmalı ve kaçağın giderilmesinin ardından gaz seviyesi tamamlanmalıdır."
            className="hover:shadow-md transition-shadow"

          />

          <IssueCard
            title="Elektriksel Arızalar"
            cause="Kompresör veya fan motorlarında oluşan arızalar. Hasarlı veya yıpranmış kablolar, elektriksel bağlantıları bozabilir."
            solution="Elektriksel bağlantılar kontrol edilmeli ve arızalı parçalar değiştirilmelidir."
            className="hover:shadow-md transition-shadow"

          />
        </div>
      </section>

      <section className="pb-4 text-black/80 p-5">
        <p className="text-black/90">
          Su soğutmalı chiller'lar, büyük ölçekli tesislerin soğutma ihtiyaçlarını karşılamak için ideal çözümlerdir.
          Düzenli bakım, doğru yedek parça kullanımı ve profesyonel destek ile bu sistemlerin ömrünü uzatabilir ve enerji verimliliğini artırabilirsiniz.
        </p>
      </section>
    </div>
  );
}