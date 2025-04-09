import React from "react";
import IssueCard from "../../../IssueCard";

const HavuzNem = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-5xl">
          <p>
            Havuz nem alma cihazları, özellikle kapalı alanlarda bulunan yüzme havuzlarında, nem oranını kontrol altında tutmak için kullanılır.
            Bu cihazlar, havuzun etrafındaki ortamın nem oranını düşürerek, hem kullanıcıların konforunu artırır hem de havuz çevresindeki yapıların zarar görmesini engeller.
          </p>
          <p>
            Havuzlarda yüksek nem oranı, küf ve rutubet gibi sorunlara yol açabilir ve bu da hem yapıların bozulmasına hem de kullanıcı sağlığına olumsuz etkiler yapabilir.
            Nem alma cihazları, havuzun çevresindeki hava kalitesini iyileştirir, korozyon risklerini azaltır ve havuzun bakımını kolaylaştırır.
          </p>
          <p>
            Bu cihazların düzenli bakımı, cihazın ömrünü uzatır ve verimli çalışmasını sağlar.
            Cihazların filtrelerinin temizlenmesi, gaz seviyelerinin kontrol edilmesi ve hava akışının düzgün sağlanması gibi işlemler, uzman teknisyenler tarafından yapılmalıdır.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">
          Havuz Nem Alma Cihazlarında Sık Karşılaşılan Sorunlar ve Çözümleri
          </h2>
        </div>
        <div className="space-y-4">
          <IssueCard
            title="Cihazın Çalışmaması veya Düşük Performans"
            cause="Elektriksel bağlantı sorunları, gaz seviyesi eksikliği, iç ünite tıkanıklığı."
            solution="Elektrik bağlantıları kontrol edilir, gaz seviyesi kontrol edilip eksikse tamamlanır, cihazın iç ünitesi temizlenir ve tıkanıklıklar giderilir."
          />
          <IssueCard
            title="Aşırı Gürültü"
            cause="Fan motoru aşınması, gevşek bileşenler, fan paletinde dengesizlik."
            solution="Fan motoru kontrol edilip gerekirse değiştirilir, gevşek bileşenler sıkılır, fan paleti dengelenir."
          />
          <IssueCard
            title="Nem Alma Verimliliğinin Düşmesi"
            cause="Hava filtresinin tıkanması, ısı eşanjörünün kirlenmesi, kompresör arızası."
            solution="Filtre ve eşanjör temizlenir, kompresör kontrol edilir ve gerekirse değiştirilir."
          />
          <IssueCard
            title="Su Sızıntısı"
            cause="Tahliye hattı tıkanıklığı, bağlantı sızdırmazlık problemleri."
            solution="Tahliye hattı temizlenir, bağlantılar kontrol edilip sızdırmazlık sağlanır."
          />
          <IssueCard
            title="Enerji Tüketiminde Artış"
            cause="Verimsiz çalışma, tıkalı pislik tutucu, kirli filtreler."
            solution="Pislik tutucu ve filtreler temizlenir, cihaz verimliliği optimize edilir."
          />
          <IssueCard
            title="Düşük Hava Akışı"
            cause="Fan motoru arızası, tıkalı hava kanalları, kirli filtre."
            solution="Fan motoru kontrol edilir, hava kanalları temizlenir, filtreler yenilenir."
          />
          <IssueCard
            title="Aşırı Isınma"
            cause="Soğutma sistemi arızaları, hava akışı engellenmesi, aşırı yükleme."
            solution="Çözüm: Soğutma sistemi kontrol edilip onarılır, hava akışı sağlanır, cihaz yükü optimize edilir."
          />
          <div>
            <h3 className="text-lg font-semibold text-black/90 p-4">Fan Motoru</h3>
            <div className="space-y-4">
              <IssueCard
                title="Kirlenmiş veya Aşınmış Fanlar"
                cause="Hava akışını engelleyerek sistem verimliliğini düşürür."
                solution="Fanların ve motorların dönüş hızı, kanat temizliği ve rulmanların durumu düzenli olarak kontrol edilmeli, gerekirse yağlama veya değişim yapılmalıdır."
              />
              <IssueCard
                title="Rulman Arızaları"
                cause="Rulmanların aşınması veya sıkışması, fan motorunun düzgün çalışmasını engelleyerek performans kaybına yol açar."
                solution="Aşınmış veya sıkışmış rulmanlar tespit edilerek değiştirilmelidir."
              />
              <IssueCard
                title="Kayış Kopması"
                cause="Motor çalışsa bile kayış koptuğunda fan dönmez, bu da soğutma kapasitesinin düşmesine neden olur."
                solution="Kayışların aşınma durumu düzenli olarak incelenmeli, gevşek veya kopmuş kayışlar tespit edilerek değiştirilmeli ve uygun gerginlikte ayarlanmalıdır."
              /></div>
          </div>

        </div>
      </section>

      <section className="p-5">
        <div className="prose prose-lg text-black/90">
          <p className="leading-relaxed">
            Bu tür sorunlar, havuz nem alma cihazlarının verimli çalışmasını engelleyebilir. Bu nedenle, cihazların düzenli bakımı ve zamanında müdahale edilmesi büyük önem taşır.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HavuzNem;
