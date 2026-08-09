"use client";
import React from "react";
import { FaTools, FaShieldAlt, FaSnowflake, FaTint, FaBolt, FaFan, FaCalendarAlt, FaCheck } from "react-icons/fa";
import IssueCard from "../../IssueCard";
import Image from "next/image";

export default function Dx() {
  return (
    <div className="max-w-6xl max-lg:pt-2 px-3">
      <section className="text-start mb-10">
        <div className="text-black/90 max-w-4xl">
          <p>
            DX (Direct Expansion - Doğrudan Genleşmeli) soğutma sistemleri, enerji verimliliği ve hızlı soğutma sağlaması sayesinde birçok ticari ve endüstriyel alanda yaygın olarak kullanılmaktadır. Bu sistemlerin uzun ömürlü ve verimli çalışabilmesi için düzenli bakım ve gerekli onarım işlemlerinin aksatılmaması büyük önem taşır. DX soğutma sistemlerinde meydana gelebilecek arızalar, işletmelerde konfor kaybına, üretim süreçlerinde aksamalara ve enerji maliyetlerinin artmasına neden olabilir.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">DX Soğutma Sistemleri Nedir?</h2>
        <p className="text-black/90 max-w-5xl">
          DX Soğutma Sistemleri, soğutucu akışkanın evaporatör ünitesinde direkt genleşme prensibiyle çalışarak yüksek performans sunar. Özellikle büyük ölçekli ticari soğutma sistemlerinde enerji tasarruflu DX bakımı büyük önem taşır.
        </p>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">DX Soğutma Sistemlerinin Bakımı Neden Önemlidir?</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          <IssueCard
            title="Sistem Verimliliğini Artırma"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2 text-black/90 leading-relaxed">
                  <p>DX sistemleri, hava veya su kaynaklı soğutma prensibiyle çalıştığından, zamanla kirlenme ve verim kaybı yaşanabilir. Düzenli bakım yapılmadığında:</p>
                  <li><strong>Soğutma kapasitesi azalır</strong> ve istenilen sıcaklık seviyelerine ulaşmak daha uzun sürebilir.</li>
                  <li><strong>Enerji tüketimi artar</strong>, bu da işletme maliyetlerini yükseltir.</li>
                </ul>

              </>
            }
            solution="Periyodik bakım ile DX soğutma sistemlerinin verimli çalışması sağlanmalı ve enerji tüketimi minimize edilmelidir." className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Beklenmedik Arızaların Önüne Geçmek"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2 text-black/90 leading-relaxed">
                  <p>DX soğutma sistemleri, özellikle büyük işletmelerde sürekli çalıştığından, aniden meydana gelebilecek arızalar büyük maliyetlere neden olabilir.</p>
                  <li><strong>Gaz kaçağı yaşanabilir</strong>, sistem verimsiz çalışır ve soğutma kapasitesi düşer.</li>
                  <li><strong>Elektriksel bileşenlerde aşınma ve yanma</strong> bu da ciddi güvenlik riskleri doğurabilir.</li>
                  <li><strong>Kompresör aşırı yük altında çalışabilir</strong>, bu da cihazın tamamen bozulmasına sebep olabilir.</li>
                </ul>

              </>
            }
            solution="Düzenli kontroller ile olası arızalar erken tespit edilmeli, onarım süreçleri aksatılmamalıdır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Hava Kalitesi"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2 text-black/90 leading-relaxed">
                  <p>DX soğutma sistemleri, havanın doğrudan iç mekanlara iletilmesini sağladığından, kirli filtreler veya bakımsız evaporatörler hava kalitesini olumsuz etkileyebilir. Bu durum;</p>
                  <li><strong>Ortamda kötü kokuların oluşmasına,</strong></li>
                  <li><strong>Alerjen ve bakterilerin yayılmasına,</strong></li>
                  <li><strong>İnsan sağlığını tehdit eden mikroorganizmaların</strong> üremesine neden olabilir.</li>
                </ul>

              </>
            }
            solution="Filtrelerin düzenli olarak temizlenmesi ve değiştirilmesi, hava kalitesinin korunmasını sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>


      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">DX Soğutma Sistemlerinde Sık Karşılaşılan Arızalar</h2>
        </div>

        <div className="space-y-6">
          <IssueCard
            title="Soğutma Verimliliğinin Düşmesi"
            cause="Kirli evaporatör serpantinleri, tıkanmış filtreler veya soğutucu akışkan eksikliği."
            solution="Evaporatör serpantinleri temizlenmeli, filtreler değiştirilmelidir. Ayrıca, soğutucu gaz seviyesi kontrol edilmelidir."
          />

          <IssueCard
            title="Aşırı Enerji Tüketimi"
            cause="Sistemin sürekli tam kapasite çalışması, düşük soğutucu gaz seviyesi veya elektrik bileşenlerinde arıza."
            solution="Elektrik bağlantıları kontrol edilmeli, gaz kaçağı olup olmadığı test edilmeli ve gereksiz yükleri azaltmak için sistem ayarları optimize edilmelidir."
          />

          <IssueCard
            title="Kompresör Arızaları"
            cause="Yağ eksikliği, aşırı yüklenme veya yanlış basınç ayarları."
            solution="Kompresör yağı kontrol edilmeli, basınç seviyeleri optimize edilmeli ve yük dağılımı gözden geçirilmelidir."
          />

          <IssueCard
            title="Gaz Kaçakları"
            cause="Boru bağlantılarında gevşeme veya çatlaklar."
            solution="Gaz kaçağı testleri düzenli olarak yapılmalı ve kaçak tespit edilirse hemen onarılmalıdır."
          />
        </div>
      </section>
      <section className="mb-16 bg-blue-50 p-6 rounded-xl">
        <div className="border-l-4 border-blue-800 pl-4 mb-4">
          <h2 className="text-2xl font-bold text-blue-800">Neden Profesyonel DX Soğutma Bakımı?</h2>
        </div>
        <ul className="list-none pl-5 space-y-2 text-black/90">
          <li>
            <FaCheck className="text-green-500 inline-block mr-2" />
            <strong>Enerji verimliliği sağlanır</strong>, işletme maliyetleri düşer.
          </li>
          <li>
            <FaCheck className="text-green-500 inline-block mr-2" />
            <strong>Cihaz ömrü uzatılır</strong>, sık arıza yaşanmasının önüne geçilir.
          </li>
          <li>
            <FaCheck className="text-green-500 inline-block mr-2" />
            <strong>Hava kalitesi korunur</strong>, çalışanlar veya müşteriler için sağlıklı bir ortam sağlanır.
          </li>
          <li>
            <FaCheck className="text-green-500 inline-block mr-2" />
            <strong>Beklenmedik arızalar engellenir</strong>, iş süreçleri kesintisiz devam eder.
          </li>
        </ul>
      </section>

    </div>
  );
}
