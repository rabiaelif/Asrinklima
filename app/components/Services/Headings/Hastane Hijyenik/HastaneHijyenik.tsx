import { FaShieldAlt } from "react-icons/fa";
import IssueCard from "../../IssueCard";

export default function HastaneHijyenik() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="text-start mb-10">
        <div className="text-black/90 max-w-5xl">
          <p>
            Hastane ortamları, yüksek hijyen standartlarının sağlanması gereken yerlerdir. Bu ortamda kullanılan klimaların da hijyenik bakımı ve düzenli onarımı büyük bir öneme sahiptir. Çünkü hastaneler, hasta sağlığı ve güvenliği için kritik yerlerdir ve hava kalitesinin her zaman en üst seviyede olması gerekir. Klima sistemlerinin bakım ve onarımı, hava akışının düzgün ve sağlıklı bir şekilde sağlanmasını, mikroorganizmaların yayılmasını engellemeyi hedefler.
          </p>
        </div>
      </section>
      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Hijyenik Klima Sistemlerinin Önemi</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <IssueCard
            title="Hava Kalitesinin İyileştirilmesi"
            content="Kirli hava filtreleri veya tıkalı hava yolları, bakteri ve virüslerin yayılmasına neden olabilir. Bu durum, özellikle bağışıklık sistemi zayıf olan hastalar için büyük risk oluşturur."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Mikroorganizma Büyümesinin Engellenmesi"
            content="Klima iç ünitelerindeki nem ve kir, bakteri, mantar ve küf oluşumuna neden olabilir. Düzenli temizlik ile bu risk ortadan kaldırılır."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Enerji Verimliliği Sağlanması"
            content="Bakımı yapılmış klima sistemleri daha verimli çalışır, bu da enerji maliyetlerinin düşmesini sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />
        </div>
      </section>

      <section className="mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Yaygın Arızalar ve Çözümleri</h2>
        </div>
        <div className="space-y-4">
          <IssueCard
            title="Kötü Hava Akışı"
            cause="Hava akışının zayıf olması, klima sistemlerinde tıkanmış filtrelerden veya hava yollarındaki engellerden kaynaklanabilir."
            solution="Filtrelerin düzenli olarak temizlenmesi veya değiştirilmesi ve hava yollarının açılması gerekir." />

          <IssueCard
            title="Yüksek Enerji Tüketimi"
            cause="Klima sistemlerinin verimli çalışmaması, enerji tüketiminin artmasına neden olabilir."
            solution="Klima sistemlerinin yılda en az bir kez bakımdan geçirilmesi, enerji verimliliği sağlanmasına yardımcı olur." />

          <IssueCard
            title="Kötü Hava Kalitesi ve Koku"
            cause="Klima sistemlerinde kötü koku, kirli hava filtresi, yoğuşma birikintisi veya sistemin yanlış çalışması gibi nedenlerle ortaya çıkabilir."
            solution="Hava filtrelerinin temizlenmesi, yoğuşma hatlarının kontrol edilmesi ve iç ünite bakımının yapılması gerekir." />

          <IssueCard
            title="Kondens Su Birikmesi"
            cause="Klimadan suyun düzgün bir şekilde tahliye edilmemesi, tıkanmış drenaj hattı veya düşük sistem basıncı nedeniyle su birikmesine yol açabilir."
            solution="Drenaj hattı temizlenmeli ve suyun tahliyesi düzgün bir şekilde sağlanmalıdır." />

          <IssueCard
            title="Termostat ve Sensör Arızaları"
            cause="Klima sisteminde sıcaklık ayarları düzgün çalışmadığında, ortam sıcaklığı kontrol edilemez ve hastane içinde uygun hava koşulları sağlanamaz."
            solution="Termostat ve sensörlerin düzenli olarak kontrol edilmesi ve gerekirse değiştirilmesi gerekir." />
        </div>
      </section>
      <section className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Hastane Klima Bakımının Düzenli Yapılmasının Önemi</h2>
        </div>
        <div className="grid-cols-2 grid gap-6">
          <IssueCard
            title="Hasta Güvenliği"
            content="Hijyenik ve verimli klima sistemleri hasta ve personel sağlığını korur."
            className=" hover:shadow-md transition-shadow"
          />
          <IssueCard
            title="Mikroorganizmalara Karşı Koruma"
            content="Bakteri, virüs, mantar gibi zararlıların yayılması düzenli bakım ile önlenir."
            className=" hover:shadow-md transition-shadow"
          />
          <IssueCard
            title="Verimli Çalışma"
            content="Bakımlı sistemler daha az enerji harcar, bütçeye katkı sağlar."
            className=" hover:shadow-md transition-shadow"
          />
          <IssueCard
            title="Hava Kalitesinin Sürekli İzlenmesi"
            content="Filtre temizliği, hava kalitesinin iyileştirilmesi ve hastalar için sağlıklı bir ortam oluşturulması için büyük önem taşır."
            className=" hover:shadow-md transition-shadow"
          />
        </div>
      </section>
      <div className="pb-4 text-black/80 p-5"><p> <strong>Sonuç olarak:</strong> Hastane hijyenik klima bakımı ve onarımı, hasta sağlığı ve güvenliği için kritik bir öneme sahiptir. Klimaların düzenli bakımı, enfeksiyon riskini azaltır, hava kalitesini artırır ve enerji verimliliği sağlar.</p></div>
    </div>
  );
}
