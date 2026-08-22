"use client";
import React from "react";
import { FaShieldAlt, FaTools } from "react-icons/fa";
import IssueCard from "../../IssueCard";
import { CheckCircle } from "lucide-react";

export default function HassasKlima() {
  return (
    <div className="max-w-6xl max-lg:pt-6 px-3">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-4xl">
          <p>
            Hassas klimalar; özellikle <strong>veri merkezleri, laboratuvarlar, hastaneler ve telekomünikasyon odaları</strong> gibi sıcaklık ve nem kontrolünün kritik olduğu alanlarda kullanılan özel iklimlendirme sistemleridir. Standart klimalara göre çok daha hassas toleranslarla çalıştıkları için, bu sistemlerde <strong>hassas klima bakımı</strong>, periyodik kontroller ve <strong>doğru yedek parça kullanımı</strong> büyük önem taşır.
          </p>
          <p>
            Eğer bakım ve onarım süreçleri aksatılırsa, hassas klima sistemlerinde verim düşüşü yaşanabilir ve bu durum cihazlara zarar verebilir. Örneğin, bir veri merkezinde <strong>klima arızası</strong> yaşanırsa, sunucular aşırı ısınarak sistem çökmesine neden olabilir.
          </p>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Hassas Klima Sistemleri Nedir?</h2>
        <p className="text-black/90 max-w-5xl">
          Hassas klima sistemleri, ortamın sıcaklık ve nem değerlerini çok dar bir aralıkta tutabilen, yüksek hassasiyet gerektiren iklimlendirme sistemleridir. Bu sistemler, sürekli çalışma ve yüksek güvenilirlik gerektiren ortamlarda kullanılır.
        </p>
      </section>


      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Hassas Klimaların Bakımı Neden Önemlidir?</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          <IssueCard
            title="Sürekli ve Kararlı Çalışmayı Sağlar"
            content={
              <>
                <ul className="list-none pl-5 space-y-1 text-black/90 leading-relaxed">
                  <p>Hassas klimalar, 7/24 çalışması gereken sistemlerdir. Eğer düzenli bakım yapılmazsa;</p>
                  <li><strong>Soğutma kapasitesi azalabilir,</strong></li>
                  <li><strong>Hava akışı dengesizleşebilir,</strong></li>
                  <li><strong>Sistem aşırı yük altında çalışarak ömrü kısalabilir.</strong></li>
                </ul>

              </>
            }
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Enerji Verimliliğini Artırır"
            content="Bakımı yapılmayan hassas klimalar zamanla daha fazla enerji tüketmeye başlar. Özellikle kirli filtreler, eskiyen fan motorları ve tıkanmış serpantinler, sistemin aşırı yükte çalışmasına neden olur."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
          <IssueCard
            title="Cihaz Ömrünü Uzatır"
            content="Hassas klima sistemleri, yüksek maliyetli cihazlardır ve uzun yıllar sorunsuz çalışması beklenir. Ancak ihmal edilen küçük arızalar, ilerleyen süreçte büyük hasarlara neden olabilir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Hassas Klimaların Sık Karşılaşılan Sorunlar ve Çözümleri</h2>
          </div>
        </div>

        <div className="space-y-6">
          <IssueCard
            title="Yetersiz Soğutma veya Aşırı Isınma"
            cause="Kirli filtreler, düşük gaz seviyesi veya tıkalı serpantinler"
            solution="Filtrelerin temizlenmesi, soğutucu gaz seviyesinin kontrol edilmesi ve serpantinlerin periyodik olarak temizlenmesi gerekir."
          />

          <IssueCard
            title="Nem Kontrol Problemleri"
            cause="Nem sensörlerinde arıza, drenaj hattı tıkanıklığı veya hatalı nem ayarları."
            solution="Nem sensörleri ve drenaj sistemi kontrol edilerek, sistemin doğru nem seviyesinde çalışması sağlanmalıdır."
          />

          <IssueCard
            title="Fan Arızaları"
            cause="Aşınmış motorlar, gevşek kayışlar veya elektrik bağlantı problemleri."
            solution="Motor düzenli olarak kontrol edilmeli ve aşınmış parçalar değiştirilmelidir."
          />

          <IssueCard
            title="Elektriksel Arızalar"
            cause="Voltaj dalgalanmaları, yanmış sigortalar veya aşırı yüklenme."
            solution="Elektrik bağlantıları düzenli olarak gözden geçirilmeli, sigortalar ve röleler kontrol edilmelidir."
          />
        </div>
      </section>


      <section className="mb-16 bg-blue-50 p-6 rounded-xl">
        <div className="border-l-4 border-blue-800 pl-4 mb-4">
          <h2 className="text-2xl font-bold text-blue-800">Hassas Klima Yedek Parça Kullanımı: Neden Önemli?</h2>
        </div>
        <p>

          Hassas klima sistemlerinde <strong>yanlış yedek parça kullanımı</strong>, sistemin dengesini bozabilir ve arızalara yol açabilir. Orijinal olmayan parçalar, uyumsuzluk nedeniyle kısa sürede bozulabilir ve cihazın garanti sürecini de etkileyebilir.
        </p>
        <div className="grid gap-3 mt-4">
          {[
            {
              title: "Orijinal filtreler",
              desc: "Hava akışını korur ve sistemin aşırı yüklenmesini engeller.",
            },
            {
              title: "Fan motorları",
              desc: "Sessiz ve verimli çalışmasını sağlar.",
            },
            {
              title: "Nem sensörleri",
              desc: "Ortamın doğru nem seviyesinde tutulmasına yardımcı olur.",
            },
            {
              title: "Elektrik bileşenleri",
              desc: "Voltaj dalgalanmalarına karşı sistemi korur.",
            },
            {
              title: "Soğutucu gazlar",
              desc: "Doğru basınç değerlerinde soğutma sağlar.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start sm:items-center gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 w-5 h-5 mt-1 sm:mt-0" />
              <span className="">
                <strong>{item.title}</strong> – {item.desc}
              </span>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
