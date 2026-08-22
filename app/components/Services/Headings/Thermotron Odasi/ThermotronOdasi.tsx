import Image from "next/image";
import { FaShieldAlt, FaTools } from "react-icons/fa";
import IssueCard from "../../IssueCard";

const ThermotronOdasi = () => {
  return (
    <div className="max-w-6xl max-lg:pt-2 px-3">
      <section className="mb-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
          <div className="space-y-3 text-black/90 flex-1 max-w-lg">
            <div className="space-y-4 text-black/90 max-w-4xl">
              <p>
                <strong>Thermotron</strong>, sıcaklık ve nem gibi çevresel
                koşulların hassas şekilde kontrol edildiği test alanlarıdır. Bu
                sistemler; laboratuvarlar, Ar-Ge merkezleri ve üretim tesislerinde
                ürün doğrulama süreçlerinde kritik rol oynar. Thermotron
                bakımı ve düzenli bakım uygulamaları, bu süreçlerin
                güvenilirliğini artırır.
              </p>
              <p>
                Düzenli bakım ve doğru kalibrasyon, testlerin güvenilirliğini
                artırır ve cihazların uzun ömürlü çalışmasını sağlar.
              </p>
            </div>
            <p>
              Firmamız, thermotron için periyodik bakım, arıza tespiti ve
              onarım hizmetleri sunmaktadır. Bakım sırasında sistemin tüm mekanik
              ve elektronik parçaları detaylı olarak kontrol edilir, gerekli
              temizlik ve ayarlamalar yapılır.
            </p>
            <p>
              Tespit edilen sorunlar giderilerek cihazın verimli, dengeli ve güvenli
              çalışması sağlanır. Düzenli bakım sayesinde sistemin kullanım ömrü
              uzatılır ve test süreçlerinde oluşabilecek riskler azaltılır.
            </p>
          </div>
          <div className="space-y-2 w-full max-w-sm shrink-0">
            <Image
              src="/images/termotron.webp"
              alt="Thermotron bakım çalışmasından görüntü"
              width={560}
              height={420}
              unoptimized
              className="w-full rounded-xl object-cover"
            />
            <p className="text-xs text-black/60">
              Sahada yaptığımız bakım çalışmasından görüntü.
            </p>
          </div>

        </div>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-6">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">
              Thermotron Bakımı Neden Önemlidir?
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            iconColor="text-blue-800"
            title="Doğru Test Sonuçları"
            content="Sensör ve kontrol sistemlerinin düzenli kalibrasyonu, testlerin güvenilirliğini ve tekrarlanabilirliğini artırır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
          <IssueCard
            iconColor="text-blue-800"
            title="Enerji Verimliliği"
            content="Bakımı yapılan fan, kompresör ve izolasyon elemanları daha verimli çalışır; enerji tüketimi düşer."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
          <IssueCard
            iconColor="text-blue-800"
            title="Arıza Riskini Azaltır"
            content="Periyodik kontroller, kritik bileşenlerde oluşabilecek arızaları erken tespit eder."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
          <IssueCard
            iconColor="text-blue-800"
            title="Uzun Ömür"
            content="Düzenli bakım sayesinde sistem bileşenleri daha uzun süre güvenli çalışır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-800 lg:flex hidden text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">
              Sık Görülen Sorunlar ve Çözüm Önerileri
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <IssueCard
            title="Sıcaklık/Nem Dalgalanması"
            cause="Sensör arızaları, kalibrasyon bozukluğu veya hava sızdırmazlık problemleri dalgalanmalara yol açabilir."
            solution="Sensör kalibrasyonu yapılmalı, izolasyon ve kapı contaları kontrol edilmelidir."
          />
          <IssueCard
            title="Yetersiz Soğutma/Isıtma"
            cause="Soğutucu gaz eksikliği, tıkalı filtreler veya fan arızaları performansı düşürür."
            solution="Filtre temizliği, gaz seviyesi kontrolü ve fan bakımı yapılmalıdır."
          />
          <IssueCard
            title="Kompresör veya Fan Arızaları"
            cause="Aşırı yük, kirlenme ve elektriksel sorunlar bileşen arızalarına neden olabilir."
            solution="Elektriksel bağlantılar kontrol edilmeli, aşınan parçalar değiştirilmelidir."
          />
        </div>
      </section>

      <section className="mb-6 bg-slate-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Bakım Kapsamımız</h2>
        <ul className="list-disc list-inside space-y-2 text-black/80">
          <li>Isı ve nem sensörlerinin kontrolü, kalibrasyonu</li>
          <li>Filtre, fan ve drenaj hattı temizlikleri</li>
          <li>Soğutucu gaz seviyesi kontrolü ve kaçak testleri</li>
          <li>Elektriksel bağlantı ve kontrol paneli kontrolleri</li>
        </ul>
      </section>
    </div>
  );
};

export default ThermotronOdasi;
