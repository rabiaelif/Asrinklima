import { CheckCircle } from "lucide-react";
import { FaCalendarCheck, FaClock, FaFireAlt, FaHandshake, FaMoneyBillAlt, FaSnowflake, FaTools, FaWarehouse } from "react-icons/fa";
import IssueCard from "../../IssueCard";


const KlimaKiralama = () => {

  return (
      <div>
        <div className="max-w-6xl px-3 mb-12 max-lg:pt-2">
          <section className="mb-12">
            <p className="text-black/90 max-w-4xl mb-3">
              İklimlendirme ihtiyaçlarınız için <strong>klima kiralama hizmeti</strong>, hem bireysel hem de ticari müşterilere <strong>esnek ve maliyet avantajı sağlayan</strong> bir çözümdür. Özellikle kısa vadeli projeler, organizasyonlar, sezonluk ihtiyaçlar veya acil durumlar için <strong>klima satın almak yerine kiralamak</strong>, birçok avantaj sunar. Kiralama süresince bakım ve cihazların bakımı tarafımızdan takip edilir.
            </p>
          </section>

          <section className="mb-16">
            <div className="border-l-4 border-blue-800 pl-4 mb-6">
              <div className="flex items-center gap-3">
                <FaHandshake className="text-blue-800 text-4xl lg:text-2xl" />
                <h2 className="text-2xl font-bold text-blue-800">Neden Klima Kiralama Tercih Edilmeli?</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <IssueCard
                icon={FaMoneyBillAlt}
                iconColor="text-blue-800"
                title="Maliyet Avantajı"
                content="Yüksek satın alma maliyetlerinden kaçınarak, sadece kullanım süresi kadar ödeme yapabilirsiniz."
              />
              <IssueCard
                icon={FaClock}
                iconColor="text-blue-800"
                title="Esneklik ve Kolaylık"
                content="Kısa veya uzun vadeli ihtiyaçlarınıza göre istediğiniz süre boyunca klima kiralayabilirsiniz."
              />
              <IssueCard
                icon={FaTools}
                iconColor="text-blue-800"
                title="Bakım ve Teknik Destek"
                content="Kiralık klimalarımız bakımlı, güvenilir ve tam performanslıdır. Ayrıca, kullanım süresi boyunca teknik destek sağlıyoruz."
              />
              <IssueCard
                icon={FaCalendarCheck}
                iconColor="text-blue-800"
                title="Farklı İhtiyaçlara Uygun Çözümler"
                content="Ofisler, etkinlikler, düğünler, fabrikalar, hastaneler, veri merkezleri gibi farklı alanlar için özel çözümler sunuyoruz."
              />
            </div>
          </section>

          <section className="mb-16">
            <div className="border-l-4 border-blue-800 pl-4 mb-6">
              <h2 className="text-2xl font-bold text-blue-800">Hangi Durumlarda Klima Kiralama Gerekir?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <IssueCard
                icon={FaWarehouse}
                iconColor="text-blue-800"
                title="Geçici İşyerleri ve Şantiyeler"
                content="İnşaat sahaları, geçici ofisler veya projeler için satın almak yerine kiralama daha ekonomiktir."
              />
              <IssueCard
                icon={FaCalendarCheck}
                iconColor="text-blue-800"
                title="Etkinlikler ve Organizasyonlar"
                content="Düğün, konser, toplantı, fuar gibi büyük organizasyonlar için kısa süreli serinletme veya ısıtma ihtiyacı oluşabilir."
              />
              <IssueCard
                icon={FaFireAlt}
                iconColor="text-blue-800"
                title="Acil Durumlar ve Arızalar"
                content="Mevcut klimanız bozulduğunda, onarım sürecinde işlerinizin aksamaması için geçici klima kiralama çözüm sunar."
              />
              <IssueCard
                icon={FaSnowflake}
                iconColor="text-blue-800"
                title="Mevsimsel Kullanımlar"
                content="Yaz aylarında serinleme ihtiyacı olan evler veya işletmeler için sezonluk klima kiralama iyi bir alternatiftir."
              />
            </div>
          </section>

          <section className="mb-16 bg-blue-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Klima Kiralama Süreci Nasıl İşler?</h2>
            <ol className="list-decimal list-inside space-y-2 text-black/90">
              <li><strong>İhtiyaç Analizi:</strong> Alan büyüklüğü, klima türü ve süre belirlenir.</li>
              <li><strong>Uygun Cihaz Seçimi:</strong> Mobil, split veya endüstriyel klima seçilir.</li>
              <li><strong>Kurulum ve Teslimat:</strong> Hızlı ve profesyonel kurulum sağlanır.</li>
              <li><strong>Kullanım ve Teknik Destek:</strong> Kullanım süresi boyunca teknik destek sağlanır.</li>
              <li><strong>Süre Bitiminde Teslim:</strong> Süre bitiminde klima güvenli şekilde sökülür.</li>
            </ol>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-3">Neden Bizi Tercih Etmelisiniz?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="text-green-600 mt-1" size={18} /> Farklı kapasite ve modellere sahip geniş cihaz yelpazesi</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-green-600 mt-1" size={18} /> Uygun fiyatlı ve esnek kiralama süreleri</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-green-600 mt-1" size={18} /> Hızlı teslimat ve profesyonel kurulum</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-green-600 mt-1" size={18} /> 7/24 teknik destek ve bakım garantisi</li>
            </ul>
          </section>
        </div>

        <div className=" mb-6 mx-4 p-6 bg-gradient-to-br bg-red rounded-xl shadow-2xl text-whiteB">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Klima Kiralama Çözümlerinde Uzman Destek
            </h3>
            <p className="text-lg mb-6 !text-whiteB">
              Siz de klima kiralama hizmetimiz hakkında detaylı bilgi almak  veya teklif istemek için bizimle iletişime geçebilirsiniz!            <span className="block mt-2">
                Size özel çözümlerimizle, sistemlerinizin performansını artırmak
                ve enerji tasarrufu sağlamak için buradayız!
              </span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05388225559"
                className="border-2 border-white hover:bg-white hover:text-red font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0538 822 55 59
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

  );
};

export default KlimaKiralama;
