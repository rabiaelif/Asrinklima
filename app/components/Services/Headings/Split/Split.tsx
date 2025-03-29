'use client'

import { FaTools, FaExclamationTriangle, FaShieldAlt, FaBolt, FaTemperatureLow } from 'react-icons/fa';
import IssueCard from "../../IssueCard";
import ElektronikKartArizalari from "../../ElektoronikKart";


const Split = () => {

  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="text-start mb-10">
        <p className="text-lg text-black/80 max-w-4xl">
          Split klimalar, hem evlerde hem de iş yerlerinde yaygın olarak kullanılan etkili iklimlendirme sistemleridir. Bu cihazların uzun ömürlü ve verimli çalışabilmesi için düzenli bakım ve onarım hizmetleri büyük önem taşır.
        </p>
      </section>

      <section className="mb-16 bg-blue-50 rounded-xl p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <FaShieldAlt className="text-blue-600 text-2xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-800">Düzenli Bakımın Önemi</h2>
        </div>
        <div className="space-y-4 text-black/80">
          <p>
            Split klimaların düzenli bakımı, cihazın performansını ve ömrünü doğrudan etkiler. Bakımı ihmal edilen klimalarda, iç ünitede bakteri ve mikroorganizmaların üreme riski artar.
          </p>
          <p>
            Bu durum, hava kalitesini olumsuz etkileyerek sağlık sorunlarına yol açabilir. Ayrıca, filtrelerin tıkanması ve gaz seviyelerinin düşmesi, enerji tüketimini artırarak maliyetleri yükseltir.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center mb-6">
          <FaExclamationTriangle className="text-red text-2xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-800">Sık Karşılaşılan Split Klima Sorunları ve Çözümleri</h2>
        </div>
        <div className="space-y-6">

        <IssueCard
          title="Soğutma Performansında Azalma"
          cause="Bu durum genellikle kirli hava filtreleri, düşük soğutucu gaz seviyesi veya tıkanmış hava kanallarından kaynaklanır. Split klima iç ünite fanının pervane kanalları dolduğunda, hava akışı yetersiz hale gelir."
          solution="Öncelikle, hava filtrelerini düzenli olarak temizlemek veya gerektiğinde değiştirmek önemlidir. Soğutucu gaz seviyesinin kontrol edilmesi ve eksikse gaz dolumu yapılması gerekir. Ayrıca, hava kanallarının tıkanıklık açısından incelenmesi ve temizlenmesi, cihazın verimli çalışmasını sağlar."
        />


        <IssueCard
          title="Kompresör Arızaları"
          cause=" Aşırı ısınma, elektriksel sorunlar veya yetersiz yağlama, kompresörün arızalanmasına neden olabilir."
          solution="Kompresör arızaları ciddi sorunlardır ve profesyonel müdahale gerektirir. Uzman bir teknisyen tarafından kompresörün detaylı bir şekilde incelenmesi, gerekli onarımların yapılması veya gerektiğinde kompresörün değiştirilmesi önerilir."
        />
        <IssueCard
          title="Su Sızıntıları"
          cause="Tıkalı drenaj hatları veya hasarlı drenaj tavası, su sızıntılarına yol açabilir."
          solution=" Drenaj hattının tıkanıklık açısından kontrol edilerek temizlenmesi, drenaj tavasının hasar durumunun incelenmesi ve gerekirse onarılması veya değiştirilmesi gereklidir. Bu işlemler, su sızıntılarının önlenmesine yardımcı olur."
        /></div>

        <ElektronikKartArizalari />
      </section>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className=" font-medium text-red-800">Önemli Uyarı</h3>
            <div className="mt-2 text-red-700">
              <p>
                Klimanın elektriksel beslemesi ve elektriksel bağlantılarındaki düzeltmeler mutlaka uzman ve yetkili bir kişi tarafından yapılmalıdır. Kurulumdan sonra klima sigortası bölümü, kolay erişilebilecek bir şekilde ayarlanmalıdır. Ayrıca, split klima montajı sırasında, cihazın bina çıkışlarına, koridorlara, merdivenlere veya açık alanlara yerleştirilmemesi gerekir. Montaj sırasında, dış ünitenin yerden yaklaşık 2-2.5 metre yükseğe monte edilmesine özen gösterilmelidir; çocukların güvenliği açısından bu madde önem teşkil etmektedir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-6 p-6 bg-gradient-to-br  bg-red rounded-xl shadow-2xl text-whiteB">  <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Split Klima Çözümlerinde Uzman Destek</h3>
        <p className="text-lg mb-6 !text-whiteB" >
          Eğer Split Klimalarınız için bakım, onarım veya yedek parça ihtiyacınız varsa, bizimle iletişime geçebilirsiniz.
          <span className="block mt-2">Size özel çözümlerimizle, sistemlerinizin performansını artırmak ve enerji tasarrufu sağlamak için buradayız!</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="tel:+905555555555"
            className="border-2 border-white hover:bg-white hover:text-red font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0538 822 55 49
            </span>
          </a>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Split;
