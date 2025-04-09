import { FaExclamationTriangle, FaShieldAlt, FaTools } from "react-icons/fa";
import IssueCard from "../../IssueCard";

export default function Iklimlendirme() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-5xl">
          <p>
            İklimlendirme hizmetleri, modern yaşamın vazgeçilmez bir parçasıdır. Evlerimizde, ofislerimizde, alışveriş merkezlerinde ve endüstriyel tesislerde iç mekan havasının kontrol edilmesi ve düzenlenmesi amacıyla sunulan hizmetlerdir.
          </p>
          <p>
            Bu hizmetler, sıcaklık, nem, hava akışı, hava kalitesi gibi faktörleri kontrol altında tutarak kullanıcıların konforlu bir ortamda yaşamalarını sağlar. Sadece kurulumla sınırlı kalmaz, aynı zamanda bakım, onarım, yedek parça temini ve sistem iyileştirmeleri gibi hizmetleri de kapsar.
          </p>
        </div>
      </section>


      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">İklimlendirme Hizmetleri Neden Önemlidir?</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          <IssueCard
            title="Konforlu Yaşam Alanları"
            content="İklimlendirme sistemleri, özellikle yazın sıcaklıkların yüksek olduğu yerlerde, iç mekanlarda rahat bir ortam sağlamak için büyük önem taşır. Bu, ev sahiplerinin ve çalışanların daha verimli olmasını ve günlük yaşamda daha rahat hissetmelerini sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Sağlık ve Hijyen"
            content="İyi bir havalandırma ve klima sistemi, iç mekan havasının temizlenmesini ve yenilenmesini sağlar. Kirli hava, alerjik reaksiyonlara, solunum yolu hastalıklarına ve diğer sağlık sorunlarına yol açabilir. Bu nedenle, iklimlendirme sistemlerinin düzenli bakımı, sağlıklı bir ortam için gereklidir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Enerji Verimliliği"
            content="Enerji verimli iklimlendirme sistemleri, düşük enerji tüketimi ile yüksek performans sağlar. Verimli bir HVAC sistemi, hem işletme maliyetlerini düşürür hem de çevreye olan olumsuz etkileri azaltır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Uzun Ömürlü Ekipmanlar"
            content="İklimlendirme sistemlerinin düzenli bakımı, sistemlerin daha uzun süre verimli çalışmasını sağlar. Bu da daha az arıza, daha düşük onarım maliyetleri ve daha uzun ömürlü ekipmanlar anlamına gelir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Çevre Dostu"
            content="Günümüzün modern iklimlendirme sistemleri, çevre dostu soğutucu akışkanlar ve enerji verimliliği odaklı tasarımlar kullanır. Bu, karbon salınımını azaltarak çevreye duyarlı bir çözüm sunar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

        </div>
      </section>
      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">İklimlendirme Hizmetlerinin Temel Alanları</h2>
          </div>
        </div>

        <div className="space-y-6">
          <IssueCard
            title="Isıtma, Soğutma ve Havalandırma Sistemleri (HVAC)"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2 text-black/90 leading-relaxed">
                  <li>HVAC sistemleri, ısıtma, soğutma ve havalandırma işlemlerini bir arada gerçekleştiren sistemlerdir. Bu sistemler, binaların iç ortamını düzenler ve çeşitli iklim koşullarına uygun bir iç ortam havası sağlar.</li>
                  <li>Isıtma, özellikle kış aylarında iç mekanların sıcaklığını yükseltirken, soğutma sistemleri yaz aylarında ortamın serin tutulmasını sağlar. Havalandırma ise havanın yenilenmesi ve iç mekandaki kirli havanın dışarı atılması işlevini görür.</li>
                </ul>

              </>
            }
            className=" hover:shadow-md transition-shadow"

          />

          <IssueCard

            title="Klima Sistemleri"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2 text-black/90 leading-relaxed">
                  <li>Klima sistemleri, iç mekanların soğutulması ve nem seviyelerinin kontrol edilmesini sağlar. Özellikle yaz aylarında yüksek sıcaklıklar ve nem oranı, klima sistemlerinin önemini artırır.</li>
                  <li>Ayrıca, klima sistemleri, iç mekanın havalandırılmasını ve sağlıklı hava kalitesinin korunmasını da sağlar.</li>
                </ul>

              </>
            }
            className=" hover:shadow-md transition-shadow"

          />
          <IssueCard
            title="Hava Temizleme ve Filtreleme"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2 text-black/90 leading-relaxed">
                  <li>Hava temizleme sistemleri, iç mekan havasındaki toz, polen, mikroplar ve diğer kirleticileri temizlemek için kullanılır. Bu sistemler, özellikle alerjik reaksiyonlar yaşayan kişiler için önemlidir.</li>
                  <li>Yüksek verimli partikül hava (HEPA) filtreleri, havadaki zararlı maddeleri filtreleyerek, hava kalitesini artırır.</li>
                </ul>

              </>
            }
            className=" hover:shadow-md transition-shadow"

          />
          <IssueCard
            title="Soğutma Sistemleri"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2 text-black/90 leading-relaxed">
                  <li>Soğutma sistemleri, endüstriyel alanlarda, ofislerde, alışveriş merkezlerinde ve diğer ticari yapılarda büyük önem taşır. Bu sistemler, cihazların soğutulması, gıda ve ilaç sektörlerinde sıcaklık kontrolü gibi işlevler için kullanılır.</li>
                  <li>Soğutma sistemlerinin bakımı, verimli çalışmaları ve arızaların önlenmesi açısından son derece önemlidir.</li>
                </ul>

              </>
            }
            className=" hover:shadow-md transition-shadow"

          />

        </div>
      </section>

      <section className="mb-12">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Sık Karşılaşılan Sorunlar ve Çözümleri</h2>
        </div>
        <div className="space-y-4">
          <IssueCard
            title="Sistem Çalışmıyor veya Yetersiz Soğutma"
            cause="Sistem gazı azalmış, hava filtresi tıkanmış veya kompresör arızalanmış olabilir."
            solution="Soğutucu gaz seviyesini kontrol edin ve gerekiyorsa yenileyin. Filtreyi temizleyin veya değiştirin. Kompresör kontrol edilip gerekiyorsa tamir edilmelidir."
          />

          <IssueCard
            title="Yüksek Enerji Tüketimi"
            cause="Kirli filtreler, yanlış ayarlanmış sıcaklık, arızalı fan motoru veya izolasyon eksiklikleri."
            solution="Filtrelerin temizlenmesi, sıcaklık ayarlarının doğru yapıldığından emin olunması ve sistemdeki izolasyonun güçlendirilmesi gereklidir."
          />

          <IssueCard
            title="Gürültü ve Titreşim"
            cause="Fan motorunun aşınması, borularda tıkanıklık veya denge sorunları."
            solution="Fan motoru kontrol edilip gerekirse değiştirilmelidir. Boru hattındaki tıkanıklıklar temizlenmeli ve borular düzgün bir şekilde yerleştirilmelidir."
          />

          <IssueCard
            title="Hava Akışı Sorunları"
            cause="Tıkanmış hava filtresi, fan arızası veya boru hattı tıkanıklığı."
            solution="Hava filtrelerinin temizlenmesi ve gerekirse değiştirilmesi, fan motorunun bakımının yapılması veya boru hattının temizlenmesi gereklidir."
          />

          <IssueCard
            title="Yüksek Enerji Tüketimi"
            cause="Cihazın verimsiz çalışması, tıkanmış filtreler, hatalı pislik tutucu tıkanması."
            solution="Filtreler düzenli olarak temizlenir, pislik tutucu kontrol edilip tıkanıklıklar giderilir, kompresör kontrol edilip gerekirse değiştirilir, cihazın çalışma verimliliği artırılır."
          />

          <IssueCard
            title="Rulman ve V Kayış Kopması"
            cause="Fan motoru rulmanlarının aşınması, V kayışının gevşemesi veya kopması.Bu durum, sistemin düzgün çalışmasını engeller ve aşırı gürültüye yol açar."
            solution="Rulmanlar kontrol edilip gerekirse değiştirilir, V kayışı gerilir veya yenisiyle değiştirilir. Sistem çalışmaya başlamadan önce tüm parçalar düzgün bir şekilde çalışır hale getirilmelidir."
          />
        </div></section>

      <div className=" mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <FaExclamationTriangle className="h-5 w-5 text-red-500" />
          </div>
          <div className="ml-3">
            <h3 className=" font-medium text-red-800">Dikkat!</h3>
            <div className="mt-2  text-red-700">
              <p>
                İklimlendirme sistemleri, yalnızca yaz aylarında serinlik sağlamakla kalmaz; aynı zamanda kış aylarında ısıtma, nem alma ve havalandırma işlevlerini de yerine getirir. Bu nedenle, iklimlendirme sistemlerinin verimli çalışması, yaşam kalitesini ve iş verimliliğini doğrudan etkiler.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="p-5">
        <div className="prose prose-lg text-black/90">
          <p className="leading-relaxed">
            İklimlendirme sistemlerinin bakımını yapmak, arızaların önüne geçer, cihazların ömrünü uzatır ve enerji verimliliğini artırır. Düzenli bakım yapılmayan sistemler, daha fazla enerji tüketir ve sıklıkla arıza yapar. Bu nedenle, uzman bir teknisyen tarafından yapılan bakım ve onarım hizmetleri, sistemlerin uzun süre verimli çalışmasını sağlar.
          </p>
        </div>
      </section>
    </div>
  );
}
