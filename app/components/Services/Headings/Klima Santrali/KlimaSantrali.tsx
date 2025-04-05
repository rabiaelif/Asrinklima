import React from "react";
import IssueCard from "../../IssueCard";
import { FaShieldAlt, FaSnowflake, FaTools } from "react-icons/fa";
import Image from "next/image";

const KlimaSantrali = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-5xl">
          <p>
            Klima santrali, büyük binalarda havalandırma ve iklimlendirme sistemlerinin temel parçalarından biridir. Bu sistemler, iç mekanların hava kalitesini ve sıcaklık seviyelerini kontrol etmek için kritik bir rol oynar. Klima santrallerinin düzgün çalışması, enerji verimliliğini artırmak, kullanıcı konforunu sağlamak ve mekanların hijyenini korumak için son derece önemlidir.
          </p>
        </div>
      </section>


      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Klima Santrali Bakımının Önemi</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <IssueCard
            title="Enerji Verimliliği"
            content="Düzenli bakım, klima santralinin verimli çalışmasını sağlar. Filtrelerin tıkanması, soğutma sistemindeki eksiklikler veya hatalı fanlar gibi sorunlar, enerji tüketimini artırabilir. Periyodik bakım, bu tür sorunları önler ve enerji verimliliğini maksimize eder. Bu da işletme maliyetlerinin düşmesine yardımcı olur. "
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Uzun Ömür ve Dayanıklılık"
            content="Zamanla, klima santrallerinin iç bileşenlerinde aşınma meydana gelir. Bu bileşenlerin düzenli kontrolü ve bakımı, cihazın ömrünü uzatır. Erken tespit edilen sorunlar, büyük arızaların önüne geçer ve sistemin ömrünü uzatarak yatırımın karşılığını verir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Hava Kalitesinin Korunması"
            content="Klima santrali, havalandırma sistemlerinin düzgün çalışması için kritik öneme sahiptir. Düzenli bakım, hava filtrelerinin temizlenmesini ve sistemdeki kirleticilerin temizlenmesini sağlar. Bu, iç mekan havasının temiz ve sağlıklı olmasına katkı sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Sistem Performansının Artırılması"
            content="Bakım sırasında yapılan kontroller, sistemin performansını artırabilir. Soğutma kapasitesinin, hava debisinin ve sıcaklık kontrolünün düzgün çalışması sağlanır. Performans düşüklüğü, çalışanların konforunu etkileyebilir, dolayısıyla sistemin yüksek verimle çalışması büyük önem taşır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

        </div>
      </section>
      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Klima Santrali Bakımının Gerekliliği</h2>
          </div>
        </div>
        <p className="mb-4">Duvar tipi klimaların uzun ömürlü ve verimli çalışması için düzenli bakım ve onarım hizmetleri şarttır. </p>

        <div className="space-y-6">
          <IssueCard
            title="Yasal Yükümlülükler"
            content="Birçok ülkede, ticari binalarda klima ve havalandırma sistemlerinin periyodik bakım ve onarımının yapılması yasal bir gerekliliktir. Bu bakım işlemleri, hem kullanıcıların sağlığını korumak hem de çevre dostu işletme koşullarını sağlamak amacıyla önemlidir."
            className=" hover:shadow-md transition-shadow"

          />

          <IssueCard

            title="İleri Düzey Teknolojik Donanım"
            content="Modern klima santralleri, gelişmiş teknolojilere sahiptir. Bu cihazların verimli çalışabilmesi için uzman kişiler tarafından yapılacak bakım ve onarım gereklidir. Bu, cihazların yüksek verimle çalışmasını ve arızaların hızlıca tespit edilip çözülmesini sağlar."
            className=" hover:shadow-md transition-shadow"

          />
          <IssueCard
            title="Güvenlik"
            content="Arızalı veya bakımsız çalışan bir klima santrali, yangın riski gibi güvenlik sorunlarına yol açabilir. Elektriksel problemler veya fan motorundaki aşınmalar, ciddi güvenlik riskleri oluşturabilir. Bu nedenle, düzenli bakım hem güvenlik hem de verimlilik açısından gereklidir."
            className=" hover:shadow-md transition-shadow"

          />

        </div>
      </section>
      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4">
          <h2 className="text-2xl font-semibold text-blue-800 ">Klima Santrali Onarım ve Yedek Parça Kullanımı</h2>
        </div>
        <ul className="list-disc px-5 pt-5 pl-10 space-y-3 text-black/90">
          <p>Klima santrallerinde onarım süreçleri, arızanın türüne ve boyutuna göre değişir. Ancak, onarım sırasında orijinal yedek parça kullanımı büyük önem taşır. Orijinal yedek parçalar, sistemin performansını korur ve uzun ömürlü olmasını sağlar. İşte yedek parça kullanımının avantajları:</p>
          <li itemProp="itemListElement"><strong>Uyumluluk:</strong> Orijinal yedek parçalar, sistemle tam uyumlu çalışır.</li>
          <li itemProp="itemListElement"><strong>Güvenilirlik:</strong> Kaliteli yedek parçalar, sistemin güvenilirliğini artırır.</li>
        </ul>
      </section>

      <section className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Sık Karşılaşılan Sorunlar ve Çözümleri</h2>
        </div>
        <div className="space-y-4">
          <IssueCard
            title="Fan Gürültüsü ve Titreşim"
            cause="Fan motorundaki aşınma veya fan pervanesinin dengesiz olması."
            solution="Fanın motoru kontrol edilip gerekirse değiştirilir, fan pervanesinin dengesi sağlanır ve sistemin düzgün çalışması sağlanır."
          />

          <IssueCard
            title="Hava Akışı Sorunları"
            cause="Hava filtrelerinin tıkanması, fan motorunun arızalanması veya borularda tıkanıklık olması."
            solution="Filtreler temizlenir veya değiştirilir, boru hattı kontrol edilir ve fan motoru onarılır ya da değiştirilir."
          />

          <IssueCard
            title="Elektriksel Sorunlar"
            cause="Elektrik bağlantılarında gevşeklik, sigorta arızası, kart problemleri."
            solution="Elektrik bağlantıları sıkılaştırılır, sigortalar kontrol edilir ve değiştirilir, kartlar incelenir ve gerekirse onarılır."
          />

          <IssueCard
            title="Su Sızıntısı"
            cause="Drenaj borularının tıkanması, yoğuşma suyu hattında birikintiler."
            solution="Drenaj boruları temizlenir ve tıkanıklıklar giderilir. Boruların izolasyonu kontrol edilerek su sızıntılarının önüne geçilir."
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

      <section className="p-5">
        <div className="prose prose-lg text-black/90">
          <p className="leading-relaxed">
            Klima santralleri, büyük binaların iklimlendirme ihtiyaçlarını karşılamak için ideal çözümlerdir. Ancak, bu sistemlerin uzun ömürlü ve verimli çalışması için <strong>düzenli bakım, doğru onarım </strong> ve <strong>orijinal yedek parça </strong> kullanımı şarttır. Sık karşılaşılan sorunların erken tespiti ve çözümü, sistemin ömrünü uzatır ve işletme maliyetlerini düşürür.
          </p>
        </div>
      </section>
    </div>
  );
};

export default KlimaSantrali;