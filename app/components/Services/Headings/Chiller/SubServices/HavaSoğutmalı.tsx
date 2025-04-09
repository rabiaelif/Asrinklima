"use client";
import React from "react";
import {
  FaTools, FaShieldAlt, FaSnowflake, FaFan, FaBolt, FaThermometerHalf,
  FaExclamationTriangle, FaWrench, FaCog
} from "react-icons/fa";
import IssueCard from "../../../IssueCard";

export default function HavaSoğutmalı() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="text-start mb-10">
        <div className="space-y-1 text-black/90 max-w-4xl">
          <p itemProp="description">
            Hava soğutmalı chiller'lar, soğutma ihtiyacını karşılamak için havayı bir ısı transfer ortamı olarak kullanan sistemlerdir.  </p>
          <p>Bu sistemler, soğutucu gazın kondenserinde ısıyı havaya atarak çalışır ve su soğutmalı sistemlere göre daha basit bir kurulum sunar.</p>
          <p>Genellikle küçük ve orta ölçekli tesislerde, ofis binalarında, alışveriş merkezlerinde ve endüstriyel uygulamalarda kullanılır.   </p>
        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Hava Soğutmalı Chiller'da Bakım ve Onarım Neden Önemlidir?</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            title="Kondenser Temizliği"
            content="Kondenser serpantinleri, zamanla toz ve kir birikimi nedeniyle verimliliğini kaybeder. Düzenli temizlik yapılmalıdır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Kondanser Fanı Bakımı"
            content="Fanlar, düzenli olarak kontrol edilmeli ve yağlanmalıdır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Soğutucu Gaz Kontrolü"
            content="Soğutucu gaz seviyesi eksik veya düşükse, performans kaybına yol açar. Gaz dolumu yapılmadan önce, gaz kaçağının tespiti için azot testi uygulanmalı ve kaçağın giderilmesinin ardından gaz seviyesi tamamlanmalıdır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Elektriksel Bağlantılar"
            content="Elektriksel bağlantılar ve kompresör performansı düzenli kontrol edilmelidir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />
        </div>
      </section>

      <section className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Hava Soğutmalı Chiller'da Yaygın Sorunlar ve Çözümleri</h2>
        </div>
        <div className="space-y-8">
          {/* 1. Yetersiz Soğutma Kapasitesi */}
          <div>
            <h3 className="text-xl font-semibold text-black/90 mb-4">1. Yetersiz Soğutma Kapasitesi</h3>
            <div className="space-y-6">
              <IssueCard
                title="Kirli Kondenser Serpantinleri"
                solution="Kondenser serpantinleri üzerinde biriken toz, kir ve yabancı maddeler, düzenli olarak temizlenmelidir. Bu, ısı transfer verimliliğini artırır ve sistemin soğutma kapasitesini optimize eder."
                content="Kondenser serpantinleri üzerinde biriken toz, kir ve yabancı maddeler, ısı transfer verimliliğini düşürür. Bu, sistemin soğutma kapasitesini azaltır."
              />
              <IssueCard
                title="Düşük Soğutucu Gaz Seviyesi"
                solution="Soğutucu gaz seviyesi düzenli olarak kontrol edilmeli ve düşük olması durumunda sistem yeniden şarj edilmelidir. Gaz dolumundan önce, olası kaçakları tespit etmek için azot testi uygulanmalı ve tespit edilen kaçaklar giderildikten sonra gaz seviyesi tamamlanmalıdır."
                content="Soğutucu gaz seviyesinin düşük olması, sistemin ısıyı emme ve dağıtma yeteneğini zayıflatır."
              />
              <IssueCard
                title="Yetersiz Hava Akışı"
                solution="Fanların dönüş hızı, kanatların temizliği ve motor performansı kontrol edilmeli, gerekirse fanların ayarı yapılmalı veya değiştirilmelidir. Hava giriş-çıkışlarının tıkanıklıkları da ortadan kaldırılmalıdır."
                content="Fanların yetersiz çalışması veya hava giriş-çıkışlarının tıkanması, hava akışını kısıtlayarak soğutma performansını olumsuz etkiler."
              />
            </div>
          </div>

          {/* 2. Yüksek Kompresör Basıncı */}
          <div>
            <h3 className="text-xl font-semibold text-black/90 mb-4">2. Yüksek Kompresör Basıncı</h3>
            <div className="space-y-4">
              <IssueCard
                title="Kirli Kondenser Serpantinleri"
                solution="Kondenser serpantinleri üzerindeki kir, toz ve yabancı maddeler düzenli olarak temizlenmelidir. Bu, ısı transfer verimliliğini artırır ve kompresör basıncını düşürür."
                content="Kondenser serpantinlerinin kirlenmesi, ısının havaya verimli bir şekilde atılmasını engeller ve kompresör basıncının yükselmesine neden olur."
              />
              <IssueCard
                title="Yüksek Çevre Sıcaklıkları"
                solution="Chiller'ın bulunduğu ortamın sıcaklığı kontrol edilmeli, gerekirse chiller daha serin bir yere taşınmalı veya ortam havalandırması iyileştirilmelidir."
                content="Chiller'ın bulunduğu ortamın sıcaklığı yüksekse, kondenser ısıyı yeterince dağıtamaz ve bu da kompresör basıncını artırır."
              />
              <IssueCard
                title="Kondenser Fanı Arızası"
                solution={
                  <>
                    <p>Fanların düzgün çalıştığından emin olunmalı, pervane kırıkları veya rulman arızaları varsa gerekli onarım veya değişim yapılmalıdır.</p>
                    <div className="mt-3">
                      <h4 className="font-bold text-black/90 mb-2">Rulman Bakımı ve Değişimi:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Yağlama:</strong> Rulmanların düzenli olarak uygun yağ ile yağlanması, sürtünmeyi azaltarak fanın rahat çalışmasını sağlar.</li>
                        <li><strong>Değişim:</strong> Eğer rulman sıkışmış, aşınmış veya kitlenmişse, yenisiyle değiştirilmelidir.</li>
                        <li><strong>Temizlik:</strong> Rulman yuvaları ve çevresi temizlenmeli, yabancı maddelerden arındırılmalıdır.</li>
                      </ul>
                    </div>
                  </>
                }
                content={
                  <>
                    <p>Kondenser fanlarının çalışmaması veya yetersiz çalışması, ısının dış ortama atılmasını zorlaştırarak basıncı artırabilir. Fan arızalarının yaygın nedenleri:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>Fan Pervanesinin Kırılması:</strong> Hava akışını engelleyerek kondenserin soğutma kapasitesini düşürür.</li>
                      <li><strong>Rulmanların Kitlenmesi:</strong> Fanın dönmesini engelleyerek kondenserin aşırı ısınmasına sebep olur.</li>
                      <li><strong>Rulman Yağsız Kalması:</strong> Yetersiz yağlama sürtünmeyi artırır ve fanın dönmesini zorlaştırır.</li>
                    </ul>
                  </>
                }
              />
            </div>
          </div>

          {/* 3. Gürültü */}
          <div>
            <h3 className="text-xl font-semibold text-black/90 mb-4">3. Gürültü</h3>
            <div className="space-y-4">
              <IssueCard
                title="Kondanser fanı Motoru"
                solution="Fanların ve motorların dönüş hızı, kanatların temizliği kontrol edilmeli, gerekirse rulmanlar yağlanmalı veya değiştirilmelidir."
                content="Fanların veya motorların aşınması, dengesiz çalışması veya arızalanması, gürültüye neden olabilir."
              />
              <IssueCard
                title="Fan Rulmanlarının Aşınması veya Kilitlenmesi"
                solution="Rulmanların aşınma durumu ve yağ seviyesi kontrol edilmeli, gerekirse rulmanlar yağlanmalı veya değiştirilmelidir."
                content="Rulmanlarda aşınma veya sıkışma meydana geldiğinde fan dengeli dönemez, bu da titreşim ve yüksek sesli çalışma sorunlarına yol açar."
              />
              <IssueCard
                title="Gevşek Bileşenler"
                solution="Chiller’ın içindeki ve dışındaki tüm bileşenler kontrol edilmeli, gevşek olanlar sıkılmalıdır. Bu, titreşim ve gürültüyü azaltır."
                content="Chiller'ın içindeki veya dışındaki bileşenlerin gevşemesi, titreşim ve gürültüye yol açabilir."
              />
            </div>
          </div>

          {/* 4. Elektriksel Arızalar */}
          <div>
            <h3 className="text-xl font-semibold text-black/90 mb-4">4. Elektriksel Arızalar</h3>
            <div className="space-y-4">
              <IssueCard
                title="Arızalı Kablolama"
                solution="Tüm elektriksel bağlantılar düzenli olarak kontrol edilmeli, yıpranmış veya hasar gören kablolar değiştirilmelidir."
                content="Zamanla yıpranan veya hasar gören kablolar, elektriksel bağlantıları bozabilir ve sistemin çalışmasını engelleyebilir."
              />
              <IssueCard
                title="Elektriksel Bileşen Arızaları"
                solution="Arızalı kontaktörler, röleler veya diğer elektriksel bileşenler tespit edilip değiştirilmelidir. Bu, sistemin güvenilir çalışmasını sağlar."
                content="Kontaktörler, röleler veya diğer elektriksel bileşenlerin arızalanması, sistemin çalışmasını olumsuz etkileyebilir."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4 text-black/80 p-5">
        <p className="text-black/90">
         Hava soğutmalı chiller'lar, özellikle su kaynaklarının kısıtlı olduğu veya su soğutma kulesi kullanımının uygun olmadığı durumlarda ideal bir çözümdür. Düzenli bakım, doğru yedek parça kullanımı ve profesyonel destek ile bu sistemlerin ömrünü uzatabilir ve enerji verimliliğini artırabilirsiniz.
        </p>
      </section>
    </div>
  );
}