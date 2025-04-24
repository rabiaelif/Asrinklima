import { FaShieldAlt } from "react-icons/fa";
import IssueCard from "../../IssueCard";

export default function Vrf() {
  return (
    <div className="max-w-6xl max-lg:pt-6 mx-auto px-4">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-5xl">
          <p>
            VRF (Değişken Soğutucu Akışlı) klima sistemleri, soğutucu akışkanın debisini ihtiyaca göre ayarlayabilen bir teknolojiye sahiptir. Bu sayede, sistem tam olarak gereken kapasiteyi sağlayarak enerji tasarrufu ve yüksek verimlilik sunar. VRF sistemleri, çevreye duyarlı R-410A soğutucu akışkan ve akıllı inverter teknolojisini kullanarak hem performans hem de çevre dostu bir çözüm sunar.
            <br /><br />
            Tek bir dış üniteye birden fazla iç ünite bağlanabilmesi, bu sistemleri özellikle büyük binalar, ofisler, oteller ve alışveriş merkezleri gibi çoklu zonlu uygulamalar için ideal hale getirir. Ayrıca, VRF sistemleri gelişmiş ısı geri kazanım özelliği sayesinde aynı anda hem ısıtma hem de soğutma yapabilir, bu da enerji verimliliğini artırır ve işletme maliyetlerini düşürür. Bunun yanı sıra, bölgesel iklimlendirme kontrolü ile her bir alanın sıcaklığı bağımsız olarak ayarlanabilir, böylece kullanıcılar kendi konfor seviyelerini kişiselleştirebilir.
          </p>
        </div>
      </section>

      <section className="mb-8 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
             <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">VRF Sistemlerinde Bakım ve Onarım Neden Önemlidir?</h2>
          </div>
        </div>

        <div className="space-y-6">
          <IssueCard
            title="Enerji Verimliliğinin Korunması"
            content={
              <>
                <p>
                  VRF sistemleri, yüksek enerji verimliliği sunar. Ancak, düzenli bakım yapılmadığında sistem verimliliği düşer ve enerji tüketimi artar.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Kirlilik nedeniyle serpantinler hava akışını engelleyerek sistemin daha fazla enerji harcamasına neden olur.</li>
                  <li>Filtrelerin temizlenmesi, ısı transferini artırarak enerji tüketimini azaltır.</li>
                </ul>
              </>
            } className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Sistem Ömrünün Uzatılması"
            content={
              <>
                <p>Düzenli bakım, VRF sistemlerinin ömrünü uzatır. Küçük sorunlar, bakım sırasında tespit edilip çözüldüğünde, büyük arızaların önüne geçilir.</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Soğutucu gaz kaçaklarının erken tespiti, pahalı bileşenlerin korunmasını sağlar.</li>
                  <li>Elektrik bileşenlerinin düzenli kontrolü, beklenmeyen arızaların önüne geçer.</li>
                </ul>
              </>
            } className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
          <IssueCard
            title="Kesintisiz Çalışma ve Konfor"
            content={
              <>
                <p>VRF sistemleri, genellikle büyük binalarda kullanılır ve kesintisiz çalışması büyük önem taşır. Düzenli bakım, beklenmeyen arızaları önleyerek sistemin sürekli çalışmasını sağlar.</p>
                <ul className="list-disc pl-5 mt-3">
                  <li>Fan motorlarının düzenli kontrolü, ani arızaları önler ve konforu korur.</li>
                </ul>
              </>
            } className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Hava Kalitesinin İyileştirilmesi"
            content={
              <>
                <p>
                VRF sistemleri, iç mekan hava kalitesini iyileştirmek için filtreler ve temiz hava akışı sağlar. Düzenli bakım, filtrelerin temizlenmesini ve hava kalitesinin korunmasını sağlar.</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Filtrelerin temizlenmesi, toz ve alerjenlerin yayılmasını önler.</li>
                </ul>
              </>
            } className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />
           <IssueCard
            title="Maliyet Tasarrufu"
            content={
              <>
                <p>
                Düzenli bakım, büyük arızaların ve pahalı onarımların önüne geçer. Ayrıca, enerji verimliliğini koruyarak elektrik faturalarını düşürür.</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Temizlenmeyen serpantinler, sistemin daha fazla enerji harcamasına neden olur ve maliyetleri artırır.</li>
                </ul>
              </>
            } className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          /> 
        </div>
      </section>

  

      <section className="pb-4 text-black/80 p-5">
        <p className="text-black/90">
          VRF sistemleri karmaşık yapıya sahip olduğundan, herhangi bir sorunla karşılaşıldığında yetkili ve deneyimli servislerden profesyonel destek almak önemlidir. Düzenli bakım ve periyodik kontroller, bu tür sorunların önlenmesinde ve sistemin uzun ömürlü olmasında kritik rol oynar.
        </p>
      </section>
    </div>
  );
}
