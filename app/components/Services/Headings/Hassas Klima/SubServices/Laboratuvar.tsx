"use client";
import React from "react";
import { FaFlask, FaTemperatureLow, FaFilter, FaTools, FaShieldAlt } from "react-icons/fa";
import IssueCard from "../../../IssueCard";

export default function Laboratuvar() {
  return (
    <div className="max-w-6xl max-lg:pt-6 px-3">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-4xl">
          <p>
            Laboratuvar ortamlarında hassas sıcaklık ve nem kontrolü hayati önem taşır. Kimyasal reaksiyonlar, biyolojik numuneler ve hassas ölçümler için <strong>sabit iklim koşullarının korunması</strong> gerekir.
          </p>
          <p>
            Laboratuvar klimaları, standart iklimlendirme sistemlerinden farklı olarak daha <strong>keskin sıcaklık ve nem kontrolüne</strong> sahip olmalıdır.
          </p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-4">
          <div className="flex items-center gap-3">
             <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Laboratuvar Klimalarının Bakımı Neden Önemlidir?</h2>
          </div>
        </div>
        <p className="mb-8">Laboratuvar klimalarının düzenli bakımı, sistemin verimli ve doğru çalışmasını sağlamak, numunelerin ve cihazların korunmasını garanti altına almak için gereklidir. Bakımı yapılmayan sistemlerde:</p>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            icon={FaTemperatureLow}
            iconColor="text-blue-800"
            title="Sıcaklık/Nem Kontrolü"
            content="Yanlış sıcaklık ve nem seviyeleri, hassas deneylerin doğruluğunu etkileyebilir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            icon={FaFilter}
            iconColor="text-blue-800"
            title="Hava Kalitesi"
            content=" Havadaki partiküller sistemin içine girebilir, bu da hava kalitesini düşürerek numuneleri olumsuz etkileyebilir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            icon={FaTools}
            iconColor="text-blue-800"
            title="Sistem Ömrü"
            content="Düzenli bakım yapılmazsa, klima içindeki mekanik ve elektronik parçalar zamanla aşınarak beklenmedik arızalara yol açabilir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            icon={FaFlask}
            iconColor="text-blue-800"
            title="Numune Güvenliği"
            content="Kimyasal ve biyolojik numunelerin korunması"
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Laboratuvar Klimalarında Sık Karşılaşılan Sorunlar</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <IssueCard
            title="Sıcaklık Dalgalanmaları"
            solution="Sensörlerin kalibrasyonunu düzenli olarak kontrol edin, termostat ayarlarını gözden geçirin ve soğutucu akışkan seviyesini kontrol ettirin."
            className="hover:shadow-md transition-shadow border border-gray-200"
          />

          <IssueCard
            title="Nem Kontrol Problemleri"
            solution="Nem sensörleri düzenli olarak temizlenmeli ve gerektiğinde değiştirilmelidir. Nem kontrolü için klima sistemine uygun ek bileşenler eklenmelidir."
            className="hover:shadow-md transition-shadow border border-gray-200"
          />

          <IssueCard
            title="Filtre Tıkanıklıkları"
            solution="Yüksek hassasiyet gerektiren laboratuvarlarda HEPA veya ULPA filtreler kullanılarak hava kalitesi korunmalıdır. Filtreler belirli periyotlarla değiştirilmelidir."
            className="hover:shadow-md transition-shadow border border-gray-200"
          />

          <IssueCard
            title="Kompresör Arızaları"
            solution=" Soğutma sisteminin aşırı yüklenmesini önlemek için düzenli bakım ve soğutucu gaz seviyelerinin kontrolü sağlanmalıdır."
            className="hover:shadow-md transition-shadow border border-gray-200"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Uzman Olduğumuz Markalar</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {['Vertiv', 'Emerson', 'Hiross', 'Stulz', 'Airsys', 'Denco', 'Uniflair', 'Canovate', 'Schneider'].map((brand) => (
            <div key={brand} className="bg-white p-4 rounded-lg shadow-sm text-center border border-blue-400">
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-blue-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Yedek Parça Kullanımı</h2>
        <p>Laboratuvar klimaları için <strong>orijinal yedek parçalar kullanmak</strong>, sistemin uzun ömürlü ve güvenilir çalışmasını sağlar. Düşük kaliteli yedek parçalar, cihazın hassasiyetini bozarak laboratuvar ortamındaki test ve deneyleri riske atabilir.</p>
      </section>

    </div>
  );
}