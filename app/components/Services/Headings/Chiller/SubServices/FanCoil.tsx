"use client";
import React from "react";
import { FaTools, FaShieldAlt, FaSnowflake, FaTemperatureLow, FaTint, FaBolt, FaGasPump, FaFan, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import IssueCard from "../../../IssueCard";

export default function FanCoil() {
  return (
    <div className="max-w-6xl  max-lg:pt-6 px-3">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-4xl">
          <p itemProp="description">
            Fan coil sistemleri, bir oda veya mekandaki sıcaklığı kontrol etmek için kullanılan, içinde fan ve ısı eşanjörü bulunan cihazlardır.
          </p>
          <p> Bu sistemler, merkezi bir ısıtma-soğutma kaynağından örneğin chiller gelen suyu kullanarak ortamı ısıtır veya soğutur. Fan coil üniteleri, genellikle tavan altına, duvara veya zemine monte edilir ve bireysel kontrol imkanı sunar.</p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
             <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Fan Coil Sistemlerinin Bakımı Neden Önemlidir?</h2>
          </div>
        </div>
        <p className="mb-8">Fan coil ünitelerinin (FCU) düzenli bakımı, aşağıdaki nedenlerle büyük önem taşır:</p>


        <div className="grid lg:grid-cols-3 gap-6">
          <IssueCard
            title="Verimliliğin Artırılması"
            content={
              <p className="text-sm text-black/90 leading-relaxed">
                Düzenli bakım yapılan fan coil üniteleri, daha verimli çalışır ve enerji tüketimini azaltırken optimal ısıtma ve soğutma performansı sağlar.
              </p>
            }
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Ömrün Uzatılması"
            content={
              <p className="text-sm text-black/90 leading-relaxed">
                Rutin kontroller ve servis hizmetleri, sistem arızalarına yol açabilecek potansiyel sorunları önceden tespit ederek ünitelerin ömrünü uzatır.
              </p>
            }
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Hava Kalitesinin İyileştirilmesi"
            content={
              <p className="text-sm text-black/90 leading-relaxed">
                Filtrelerin ve serpantinlerin temizlenmesi, toz ve kir birikimini önleyerek daha iyi iç mekan hava kalitesi ve konfor sağlar.
              </p>
            }
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">
            Fan Coil Sistemlerinde Sık Değiştirilen Yedek Parçalar
          </h2>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-black/90 ">
          <li><strong>Hava Filtreleri:</strong> Düzenli olarak değiştirilmesi gereken filtreler, hava kalitesini ve sistem verimliliğini korur.</li>
          <li><strong>Fan Motorları:</strong> Fan motorları, sistemin hava akışını sağlayan kritik bileşenlerdir. Aşınma veya arıza durumunda değiştirilmelidir.</li>
          <li><strong>Serpantinler (Isı Eşanjörleri):</strong> Zamanla kirlenen veya hasar gören serpantinler, sistem performansını düşürür. Temizlenemeyen durumlarda değiştirilmesi gerekir.</li>
          <li><strong>Termostatlar:</strong> Arızalı termostatlar, sıcaklık kontrolünü olumsuz etkiler. Doğru ölçüm için kalibre edilmeli veya değiştirilmelidir.</li>
          <li><strong>Tahliye Hatları ve Pompalar:</strong> Yoğuşma suyunun tahliyesini sağlayan bu bileşenler, tıkanma veya arıza durumunda değiştirilmelidir.</li>
          <li><strong>Pislik Tutucular:</strong> Pislik tutucular, suyun içinde biriken tortuların ve yabancı maddelerin sistemde dolaşmasını önleyerek suyun sağlıklı ve verimli bir şekilde çalışmasını sağlar. Bu bileşenin düzenli temizlenmesi ve gerektiğinde değiştirilmesi, sistemin tıkanmasını ve pompaların zarar görmesini önler.</li>
        </ul>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Fan Coil Sistemlerinde Bakım ve Onarım Süreçleri</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <IssueCard
            icon={FaTools}
            title="Önleyici Bakım"
            iconColor="text-blue-500"
            className="bg-white border border-blue-200 shadow-sm"
            content={
              <ul className="list-disc pl-5 space-y-2 text-black/90">
                <li>Filtre temizliği veya değişimi</li>
                <li>Serpantinlerin temizlenmesi</li>
                <li>Fan ve motorların kontrolü</li>
                <li>Elektriksel bağlantıların gözden geçirilmesi</li>
                <li>Pislik tutucuların temizlenmesi</li>
              </ul>
            }
          />

          <IssueCard
            icon={FaBolt}
            title="Arıza Onarımı"
            iconColor="text-yellow-500"
            className="bg-white border border-blue-200 shadow-sm"
            content={
              <ul className="list-disc pl-5 space-y-2 text-black/90">
                <li>Sistem performansının izlenmesi</li>
                <li>Arızalı bileşenlerin değiştirilmesi</li>
                <li>Su kaçaklarının giderilmesi</li>
                <li>Termostat ve sensörlerin kalibrasyonu</li>
              </ul>
            }
          />

          <IssueCard
            icon={FaShieldAlt}
            title="Yedek Parça"
            iconColor="text-green-500"
            className="bg-white border border-blue-200 shadow-sm"
            content={
              <ul className="list-disc pl-5 space-y-2 text-black/90">
                <li>Orijinal yedek parça kullanımı</li>
                <li>Doğru montaj teknikleri</li>
                <li>Sistem testi ve çalıştırma</li>
                <li>Garanti süreçleri</li>
              </ul>
            }
          />
        </div>
      </section>
      <section itemScope itemType="https://schema.org/FAQPage" className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Yaygın Sorunlar ve Çözümleri</h2>
        </div>
        <div className="space-y-6">
          <IssueCard
            title="Hava Akışının Azalması"
            cause="Tıkanmış hava filtreleri veya engellenmiş hava dönüş ızgaraları, hava akışını kısıtlayabilir."
            solution="Hava filtrelerini düzenli olarak temizleyin veya değiştirin ve hava dönüş ızgaralarının engellenmediğinden emin olun."
          />

          <IssueCard
            title="Olağandışı Sesler"
            cause="Gevşek bileşenler, dengesiz fan kanatları veya aşınmış motor yatakları gürültüye neden olabilir."
            solution="Tüm bileşenleri sıkıca sabitleyin, fan kanatlarını dengeleyin ve motor yataklarını yağlayın veya değiştirin."
          />

          <IssueCard
            title="Tutarsız Sıcaklık Kontrolü"
            cause="Arızalı termostatlar veya ısıtma/soğutma serpantinindeki sorunlar, sıcaklık tutarsızlıklarına yol açabilir."
            solution="Arızalı termostatları kalibre edin veya değiştirin ve serpantinlerin temiz ve engelsiz olduğundan emin olun."
          />

          <IssueCard
            title="Su Sızıntısı"
            cause="Tıkanmış yoğuşma tahliye hatları veya yanlış yalıtılmış borular, su sızıntısına neden olabilir."
            solution="Tahliye hatlarını düzenli olarak kontrol edin ve temizleyin; boruların doğru şekilde yalıtıldığından emin olun."
          />
        </div>
      </section>

      <section className="pb-4 text-black/80 p-5">
        <p>Fan coil sistemleri, iç mekan iklimlendirmesinin vazgeçilmez bir parçasıdır. Düzenli bakım ve doğru kullanım ile bu sistemler, uzun ömürlü ve verimli bir şekilde çalışabilir. Bakımın önemi ve yaygın sorunların çözümleri hakkında bilgi sahibi olmak, sistemlerinizin performansını artırırken enerji tasarrufu ve konfor sağlar.</p>
      </section>
    </div>
  );
}
