'use client'
import React from "react";
import { FaTools, FaShieldAlt, FaSnowflake, FaTint, FaBolt, FaGasPump, FaFan, FaCalendarAlt, FaWind, FaPiggyBank } from "react-icons/fa";
import IssueCard from "../../../IssueCard";

const KasetTipi = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Kaset Tipi Klima Bakım, Onarım ve Yedek Parça Hizmetleri</h1>
        <div className="prose prose-lg text-gray-700">
          <p className="leading-relaxed">
            Kaset tipi klimalar, özellikle geniş ticari alanlarda ve ofislerde tercih edilen, tavana monte edilen iklimlendirme sistemleridir. Bu sistemlerin sürekli ve verimli çalışması için düzenli bakım, gerektiğinde onarım ve kaliteli yedek parça kullanımı büyük önem taşır.
          </p>
        </div>
      </section>

      <section className="mb-16 bg-blue-50 rounded-xl p-8 shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Bakım ve Onarımın Önemi</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            icon={FaPiggyBank}
            title="Enerji Tasarrufu"
            content="Düzenli bakım, enerji tüketimini optimize ederek işletme maliyetlerini düşürür."
            iconColor="text-green-500"
            className="bg-white border border-blue-100 shadow-md hover:shadow-lg transition-shadow"
          />

          <IssueCard
            icon={FaWind}
            title="İç Hava Kalitesi"
            content="Temiz filtreler ve düzenli bakım, sağlıklı bir iç hava ortamı sağlar."
            iconColor="text-blue-400"
            className="bg-white border border-blue-100 shadow-md hover:shadow-lg transition-shadow"
          />

          <IssueCard
            icon={FaBolt}
            title="Sistem Performansı"
            content="Bakımlı cihazlar, yüksek performansla çalışır ve beklenmedik arızaların önüne geçer."
            iconColor="text-yellow-500"
            className="bg-white border border-blue-100 shadow-md hover:shadow-lg transition-shadow"
          />

          <IssueCard
            icon={FaCalendarAlt}
            title="İş Sürekliliği"
            content="Ticari ortamlarda klimanın arızalanması iş süreçlerini aksatabilir. Düzenli bakım bu riski minimize eder."
            iconColor="text-red-500"
            className="bg-white border border-blue-100 shadow-md hover:shadow-lg transition-shadow"
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
        
        <p className="mb-6 text-gray-700 leading-relaxed">
          Kaset tipi klimaların periyodik bakımı, cihazın ömrünü uzatır, enerji verimliliğini artırır ve beklenmedik arızaların önüne geçer. Özellikle ticari ortamlarda klimanın arızalanması, iş süreçlerini aksatabilir.
        </p>

        <div className="space-y-6">
          <IssueCard
            icon={FaSnowflake}
            title="Filtre Temizliği ve Değişimi"
            content="Kirli hava filtreleri sistem verimliliğini düşürür. Düzenli filtre bakımı iç hava kalitesini artırır."
            iconColor="text-cyan-500"
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaGasPump}
            title="Soğutucu Gaz Kontrolü"
            content="Gaz seviyesinin kontrolü ve gerekirse dolum yapılması, soğutma performansını optimize eder."
            iconColor="text-blue-400"
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaFan}
            title="Fan ve Motor Bakımı"
            content="Fan motorlarının periyodik kontrolü ve bakımı, sistemin sessiz çalışmasını sağlar."
            iconColor="text-orange-500"
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaTint}
            title="Drenaj Sistemi Kontrolü"
            content="Drenaj hattının temizlenmesi ve kontrolü, su sızıntılarını önler."
            iconColor="text-purple-500"
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Sık Karşılaşılan Sorunlar ve Çözümleri</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Soğutma veya Isıtma Performansının Düşmesi</h3>
            <div className="space-y-4">
              <IssueCard
                title="Kirli Hava Filtreleri"
                cause="Filtrelerin tıkanması hava akışını engeller"
                solution="Filtrelerin temizlenmesi veya değiştirilmesi"
                className="bg-gray-50 border border-gray-200"
              />
              <IssueCard
                title="Soğutucu Gaz Eksikliği"
                cause="Gaz kaçağı veya yetersiz dolum"
                solution="Gaz seviyesinin kontrolü ve gerekirse dolum yapılması"
                className="bg-gray-50 border border-gray-200"
              />
              <IssueCard
                title="Sensör Arızası"
                cause="Sensörlerin kirlenmesi veya arızalanması"
                solution="Sensörlerin kontrolü ve onarımı"
                className="bg-gray-50 border border-gray-200"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Su Sızıntıları</h3>
            <div className="space-y-4">
              <IssueCard
                title="Tıkalı Drenaj Hattı"
                cause="Bakteri veya pislik birikimi"
                solution="Drenaj hattının temizlenmesi"
                className="bg-gray-50 border border-gray-200"
              />
              <IssueCard
                title="Hatalı Montaj Açısı"
                cause="Yanlış kurulum"
                solution="Montaj açısının düzeltilmesi"
                className="bg-gray-50 border border-gray-200"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Anormal Sesler ve Titreşimler</h3>
            <div className="space-y-4">
              <IssueCard
                title="Gevşek Parçalar"
                cause="Titreşime bağlı sıkıştırma kaybı"
                solution="Parçaların sıkılaştırılması"
                className="bg-gray-50 border border-gray-200"
              />
              <IssueCard
                title="Fan Motoru Sorunları"
                cause="Bilya aşınması veya dengeleme bozukluğu"
                solution="Fan motorunun bakımı veya değişimi"
                className="bg-gray-50 border border-gray-200"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Klimanın Çalışmaması</h3>
            <div className="space-y-4">
              <IssueCard
                title="Elektrik Besleme Sorunları"
                cause="Kablo kopukluğu veya bağlantı hatası"
                solution="Elektrik bağlantılarının kontrolü"
                className="bg-gray-50 border border-gray-200"
              />
              <IssueCard
                title="Kontrol Kartı Arızası"
                cause="Elektronik bileşen arızası"
                solution="Kontrol kartının incelenmesi ve onarımı"
                className="bg-gray-50 border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-blue-50 rounded-xl p-6">
        <div className="border-l-4 border-blue-800 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Bakım ve Onarımda Dikkat Edilmesi Gerekenler</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            icon={FaTools}
            title="Uzman Servis Hizmeti"
            content="Bakım ve onarımları, konusunda uzman ekiplere yaptırmak cihazın uzun ömürlü olmasını sağlar."
            iconColor="text-blue-600"
            className="bg-white"
          />

          <IssueCard
            icon={FaShieldAlt}
            title="Orijinal Yedek Parçalar"
            content="Cihazın performansını ve garantisini korumak için orijinal yedek parçaların kullanımı esastır."
            iconColor="text-green-600"
            className="bg-white"
          />

          <IssueCard
            icon={FaCalendarAlt}
            title="Periyodik Bakım Planı"
            content="Belirli aralıklarla bakım planları oluşturmak, cihazın verimli çalışmasını sürdürülebilir kılar."
            iconColor="text-purple-600"
            className="bg-white"
          />

          <IssueCard
            icon={FaBolt}
            title="Zamanında Müdahale"
            content="Arızalarda hızlı ve profesyonel müdahale, daha büyük sorunların önüne geçer."
            iconColor="text-red-600"
            className="bg-white"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Önerilen Bakım Periyotları</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Aylık</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Filtre temizliği</li>
              <li>Genel kontrol</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Üç Aylık</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Detaylı sistem bakımı</li>
              <li>Kontrol ve ayar</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Altı Aylık</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Derinlemesine bakım</li>
              <li>Parça kontrolü</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Yıllık</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Kapsamlı bakım</li>
              <li>Yedek parça değişimi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-xl p-6">
        <div className="prose prose-lg text-gray-700">
          <p className="leading-relaxed">
            Düzenli bakım, profesyonel onarım ve kaliteli yedek parça kullanımı, kaset tipi klimanızın uzun yıllar sorunsuz çalışmasını sağlayacaktır. Herhangi bir sorun durumunda, uzman teknik ekibimizle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>
    </div>
  )
}

export default KasetTipi