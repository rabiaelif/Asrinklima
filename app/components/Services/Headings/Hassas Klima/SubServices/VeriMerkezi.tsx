"use client";
import React from "react";
import { FaServer, FaThermometerHalf, FaFan, FaSnowflake, FaTools, FaTemperatureLow, FaWater, FaBolt } from "react-icons/fa";
import IssueCard from "../../../IssueCard";
import { GiHeatHaze } from "react-icons/gi";
import { MdOutlineGridView } from "react-icons/md";

export default function VeriMerkezi() {
  return (
    <div className="max-w-6xl max-lg:pt-6 px-3">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-5xl">
          <p>
            Modern dijital dünyada <strong>veri merkezleri</strong>, büyük miktarda bilgi işlemenin gerçekleştiği kritik altyapılardır. Sunucular, ağ cihazları ve depolama üniteleri gibi yüksek güçlü bileşenler, sürekli çalıştıkları için büyük miktarda ısı üretirler.
          </p>
          <p>
            Profesyonel <strong>veri merkezi soğutma çözümleri</strong> cihazların performansını ve ömrünü korumak, enerji verimliliğini artırmak ve olası arızaları önlemek için hayati öneme sahiptir.
          </p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaServer className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Veri Merkezi Soğutma Neden Önemlidir?</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            title="Cihaz Ömrünü Uzatır"
            content="Aşırı ısınan sunucular donanımsal arızalara yol açabilir. Doğru soğutma ile donanımların kullanım ömrü uzatılır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Kesintisiz Çalışma"
            content="Isı yönetimi sağlanmazsa sistemde aşırı ısınma, performans düşüşü ve veri kaybı gibi sorunlar yaşanabilir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Enerji Verimliliği"
            content="Etkili soğutma sistemleri, enerji tüketimini optimize eder ve elektrik maliyetlerini düşürür."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Çevresel Etki"
            content="Düşük karbon ayak izi ve sürdürülebilir enerji kullanımı sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Veri Merkezi Soğutma Yöntemleri</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <IssueCard
            icon={FaFan}
            title="CRAC/CRAH Üniteleri"
            content="Geleneksel yöntemlerden biri olan CRAC ve CRAH üniteleri, sunucuların ürettiği ısıyı soğuk hava ile dengeleyerek ortam sıcaklığını korur."
            className="hover:shadow-md transition-shadow"
          />
          <IssueCard
            icon={MdOutlineGridView}
            title="Sıcak/Soğuk Koridor"
            content="Sunucu dizilimleri, sıcak ve soğuk hava akışını düzenlemek için özel olarak yerleştirilir."
            className="hover:shadow-md transition-shadow"
          />
          <IssueCard
            icon={FaWater}
            title="Sıvı Soğutma"
            content="Hava soğutmaya göre daha verimli olan bu sistemler, soğutucu sıvılar kullanarak ısıyı doğrudan uzaklaştırır."
            className="hover:shadow-md transition-shadow"
          />
          <IssueCard
            icon={FaTemperatureLow}
            title="Serbest Soğutma"
            content="Dış ortam havasını kullanarak enerji tasarrufu sağlayan bir yöntemdir."
            className="hover:shadow-md transition-shadow"
          />
          <IssueCard
            icon={GiHeatHaze}
            title="Isı Bölgeleme"
            content="Sıcak ve soğuk hava akışlarını ayırarak soğutma verimliliğini artırır. Bu teknik, enerji tasarrufu sağlar ve ekipmanların daha verimli çalışmasına olanak tanır."
            className="hover:shadow-md transition-shadow"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-6">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Bakım ve Kontrol Süreçleri</h2>
          </div>
        </div>
        <p className="mb-8">Veri merkezleri için <strong>soğutma sistemlerinin düzenli bakımı</strong>, olası arızaları önlemek ve sistem verimliliğini artırmak için gereklidir.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            icon={FaSnowflake}
            title="Hava Filtre Temizliği"
            content="Tıkalı filtreler, hava akışını engelleyerek cihazların aşırı ısınmasına neden olabilir. Düzenli filtre değişimi sistem verimliliğini korur."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaThermometerHalf}
            title="Soğutucu Gaz Kontrolü"
            content="CRAC ve CRAH ünitelerinde gaz seviyesinin düşük olması soğutma verimliliğini düşürür. Periyodik gaz kontrolü ve dolumu gereklidir."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaFan}
            title="Hava Akışı Optimizasyonu"
            content="Sunucuların konumlandırılması ve hava akışının düzenli kontrolü sistem verimliliğini artırır. Sıcak/soğuk koridor düzenlemesi yapılmalıdır."
            className="hover:shadow-md transition-shadow"
          />

          <IssueCard
            icon={FaBolt}
            title="Elektrik Sistemleri Kontrolü"
            content="Elektriksel bağlantıların ve güç dağıtım ünitelerinin düzenli kontrolü, enerji verimliliğini artırır ve arıza riskini azaltır."
            className="hover:shadow-md transition-shadow"
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Uzman Olduğumuz Markalar</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {['Vertiv', 'Emerson', 'Hiross', 'Stulz', 'Airsys', 'Denco', 'Uniflair', 'Canovate', 'Schneider'].map((brand) => (
            <div key={brand} className="bg-white p-4 rounded-lg shadow-sm text-center">
              {brand}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}