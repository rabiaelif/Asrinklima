"use client";
import React from "react";
import { FaTools, FaShieldAlt, FaSnowflake, FaTint, FaBolt, FaGasPump, FaFan, FaCalendarAlt, FaWind, FaPiggyBank, FaThermometerHalf, FaCogs, FaIndustry } from "react-icons/fa";
import IssueCard from "../../../IssueCard";
import Image from "next/image";

export default function Multi() {
  return (
    <div className="max-w-6xl  max-lg:pt-6 px-3">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-4xl">
          <p itemProp="description">
            Multi klimalar, bir dış üniteye birden fazla iç ünite bağlanarak aynı anda farklı alanları iklimlendirme yeteneğine sahip sistemlerdir. Hem ticari hem de konut alanlarında verimli bir klima çözümü sunan multi klimalar, düzenli bakım, onarım ve kaliteli yedek parça kullanımıyla maksimum verimle çalışabilir.
          </p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Multi Klima Bakımının Önemi</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            title="Enerji Verimliliği"
            content="Düzenli bakım, enerji tüketimini optimize eder ve elektrik faturalarının düşmesini sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="İç Hava Kalitesi"
            content="Filtreler düzenli olarak temizlendiğinde, iç mekan havası daha sağlıklı hale gelir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Performans Optimizasyonu"
            content="Her iç ünitenin verimli çalışması için doğru bakım şarttır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Uzun Ömür"
            content="Küçük arızaların erken tespiti, sistem ömrünü uzatır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-6">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Multi Klima Profesyonel Bakım Hizmetleri</h2>
          </div>

        </div>
        <p className="mb-8">Profesyonel bakım, multi klima sisteminin verimli çalışmasını sağlayan önemli bir adımdır. Aşağıda, multi klima bakım hizmetlerinin kapsamı belirtilmiştir:</p>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            icon={FaSnowflake}
            title="Filtre Temizliği ve Değişimi"
            content="Kirli filtreler, hava akışını engeller ve sistemin verimliliğini düşürür. Filtrelerin düzenli olarak temizlenmesi veya değiştirilmesi gereklidir."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={<Image src="/icon/refrigerantgas1.png" alt="Soğutucu gaz ikonu" width={24} height={24} />}
            title="Soğutucu Gaz Kontrolü"
            content="Soğutucu gazın seviyesi düştüğünde, sistemin soğutma kapasitesi azalır. Profesyonel bakım sırasında gaz seviyesi kontrol edilir ve gerekiyorsa yeniden doldurulur."
            className="hover:shadow-md transition-shadow"
          />
          <IssueCard
            icon={FaIndustry}
            title="Dış Ünite Temizliği ve Kontrolü"
            content="Dış ünite, toz, kir ve yapraklar gibi dış etkenlerden etkilenebilir. Dış ünite temizliği, sistemin verimli çalışmasını sağlar."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaFan}
            title="Fan Motoru Kontrolü"
            content="Fan motoru, sistemi çalıştıran önemli bir bileşendir. Fan motoru kontrol edilir, aşınma veya gürültü durumlarına bakılır."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaBolt}
            title="Elektronik Kart ve Termostat Kontrolü"
            content="Elektronik kartın düzgün çalışması, klimanın sorunsuz çalışması için kritik öneme sahiptir. Termostat kontrolü ile doğru sıcaklık değerlerine ulaşılması sağlanır."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaTint}
            title="Drenaj Sistemi Temizliği"
            content="Drenaj hattı tıkanırsa, su sızıntıları oluşabilir. Bu da klimanın verimli çalışmasını engeller. Drenaj hattı düzenli olarak temizlenmelidir."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaCogs}
            title="Sistem Genel Kontrolü"
            content="Sistemdeki tüm bileşenler gözden geçirilir, elektriksel bağlantılar, sensörler ve diğer mekanik parçalar kontrol edilir."
            className="hover:shadow-md transition-shadow"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Multi Klima Sık Arızalar ve Çözümleri</h2>
        </div>
        <div className="space-y-6">
          <IssueCard
            title="Soğutma/Isıtma Performansı Düşüklüğü"
            cause="Kirli filtreler, düşük gaz seviyesi veya fan motoru arızası."
            solution="Filtrelerin temizlenmesi veya değiştirilmesi, gaz seviyesinin kontrol edilmesi ve fan motorunun bakımı."
          />

          <IssueCard
            title="Anormal Sesler"
            cause="Gevşek parçalar, fan motoru veya kompresör arızası."
            solution=" Parçaların sıkılaştırılması, fan motoru bakımı ve gerekirse değişimi, kompresör kontrolü."
          />

          <IssueCard
            title="Su Sızıntıları"
            cause="Drenaj hattı tıkanıklığı veya drenaj sisteminde hasar."
            solution="Drenaj hattının temizlenmesi ve hasar tespitinin yapılması."
          />

          <IssueCard
            title="Klimanın Çalışmaması"
            cause="Elektrik beslemesi sorunu, sigorta atması, elektronik kart arızası."
            solution="Elektrik bağlantılarının kontrolü, sigorta değişimi, elektronik kartın onarılması veya değiştirilmesi."
          />

          <IssueCard
            title="Elektronik Kart Arızası"
            cause="Elektriksel dalgalanmalar, aşırı ısınma veya yaşlanma."
            solution="Kartın test edilmesi ve gerekirse değiştirilmesi"
          />
        </div>
      </section>
      <section className="mb-8" itemScope itemType="https://schema.org/HowTo">
        <div className="border-l-4 border-blue-800 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-blue-800" itemProp="name">Kanallı Klima Bakım Periyotları</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <div className=" p-4">
            <h4 className="font-bold text-md mb-2">Aylık Bakım</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Filtre temizliği</li>
              <li>Temel sistem kontrolü</li>
              <li>Hava akışı testi</li>
            </ul>
          </div>
          <div className=" p-4">
            <h4 className="font-bold text-md mb-2">3 Aylık Bakım</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gaz seviyesi kontrolü</li>
              <li>Dış ünite temizliği</li>
              <li>Elektrik bağlantıları</li>
            </ul>
          </div>
          <div className=" p-4">
            <h4 className="font-bold text-md mb-2">Yıllık Bakım</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Detaylı sistem kontrolü</li>
              <li>Kompresör bakımı</li>
              <li>Profesyonel gaz dolumu</li>
            </ul>
          </div>
        </div>
      </section>



      <section className="p-5">
        <div className="prose prose-lg text-black/90">
          <p className="leading-relaxed">
            Multi klimanın düzenli bakımı, uzun ömürlü ve verimli çalışmasını sağlamak için gereklidir. Yedek parça değişimi ve profesyonel onarım hizmetleri ile sisteminizin performansını koruyabilirsiniz. Düzenli bakım, enerji verimliliği sağlarken, arızaların önüne geçer ve iç mekan havasının kalitesini artırır.
          </p>
        </div>
      </section>
    </div>
  );
}