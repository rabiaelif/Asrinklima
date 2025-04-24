'use client'

import { FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';
import IssueCard from "../../IssueCard";
import ElektronikKartArizalari from "../../ElektoronikKart";


const Split = () => {

  return (
    <div className="max-w-6xl max-lg:pt-8 px-3">
      <section className="text-start mb-10">
        <p className="text-black/90 max-w-4xl">
          Split klimalar, hem evlerde hem de iş yerlerinde yaygın olarak kullanılan etkili iklimlendirme sistemleridir. Bu cihazların uzun ömürlü ve verimli çalışabilmesi için düzenli bakım ve onarım hizmetleri büyük önem taşır.
        </p>
      </section>

      <section className="mb-16 bg-blue-50 rounded-xl p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <FaShieldAlt className="text-blue-600 text-4xl lg:text-2xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-800">Split Klima Bakımı Neden Önemlidir?</h2>
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
        <div className="flex items-center mb-6 max-lg:ml-2">
          <FaExclamationTriangle className="text-red text-4xl lg:text-2xl mr-3" />
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
    </div>
  );
};

export default Split;
