import React from "react";
import IssueCard from "../../../IssueCard";
import { FaShieldAlt } from "react-icons/fa";

const SoğukOda = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="text-start mb-10">
        <div className="text-black/90 max-w-5xl">
          <p>
            Soğuk oda sistemleri, özellikle gıda, ilaç ve kimyasal sektörlerinde kritik öneme sahiptir.
            Soğuk odalar, belirli bir sıcaklık aralığında malzemelerin saklanmasını sağlayarak, bozulmalarını engeller.
            Soğuk odaların kurulumu ve bakımında uzman olan teknisyenler, tüm sistemin verimli çalışmasını sağlamak için gerekli tüm işlemleri titizlikle gerçekleştirir.
          </p>
        </div>
      </section>
      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-800 text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Soğuk Odaların Önemi</h2>
          </div>
        </div>
        <div className="gap-6 grid">
          <IssueCard
            title=""
            content="Soğuk odalar, gıda, ilaç ve kimyasal sektörlerinde ürünlerin tazeliğini ve kalitesini korumak için hayati öneme sahiptir. Doğru tasarım ve kurulum, soğuk odaların verimli çalışmasını sağlar."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)] pb-2" />
          <div className="grid grid-cols-3 gap-6">
            <IssueCard
              title="Ürün Güvenliği"
              content="Bakım, ürünlerin tazeliğini ve kalitesini korur."
              className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)] pb-2" />
            <IssueCard
              title="Enerji Verimliliği"
              content="Bakımı yapılmış sistemler, daha az enerji tüketir."
              className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)] pb-2" />
            <IssueCard
              title="Sistem Ömrü"
              content="Düzenli bakım, sistem ömrünü uzatır."
              className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)] pb-2" />
          </div>
        </div>
      </section>

      <section className="space-y-8 mb-16">
        <div className="border-l-4 border-blue-800 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Soğuk Oda İmalatı</h2>
        </div>
        <p>İklimlendirme sektöründe, soğuk oda imalatı, doğru ölçülerde, dayanıklı malzemelerle ve en yeni teknolojilerle yapılmalıdır. Soğuk oda sistemleri, yalıtım, soğutma ünitesi, hava sirkülasyonu ve kontrollü sıcaklık gibi faktörler göz önünde bulundurularak projelendirilir.</p>

        <div className="border-l-4 border-blue-800 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Soğuk Oda Onarımı</h2>
        </div>
        <p>Soğuk oda sistemlerinde karşılaşılan yaygın arızalar arasında, soğutma sistemindeki sorunlar, izolasyon hataları ve hava sirkülasyonu problemleri bulunur. Bu tür sorunlar, uzman teknisyenler tarafından tespit edilip, hızlı bir şekilde onarılır. Soğuk oda sistemlerinin düzenli bakımı, verimli çalışmasını sağlamak için son derece önemlidir.</p>
      </section>


      <section className="">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Sık Karşılaşılan Sorunlar ve Çözümleri</h2>
        </div>
        <div className="space-y-4">
          <IssueCard
            title="Sıcaklık Dalgalanmaları"
            cause="Arızalı termostatlar, yetersiz yalıtım."
            solution="Termostatları kontrol edilmeli ve  yalıtımı iyileştirilmeli."
          />
          <IssueCard
            title="Yüksek Enerji Tüketimi"
            cause="Bakımsız sistemler, eski ekipmanlar."
            solution="Düzenli bakım yaptırın, enerji verimli sistemlere geçin."
          />
          <IssueCard
            title="Su Sızıntısı"
            cause="Tıkanmış tahliye hatları, hasarlı borular."
            solution="Tahliye hatlarını temizliği ve boruların düzenli kontrolü çok önemlidir."
          />
        </div>
      </section>
    </div>
  );
};

export default SoğukOda;
