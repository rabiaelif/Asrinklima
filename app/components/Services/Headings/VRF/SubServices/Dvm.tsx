"use client";
import React from "react";
import IssueCard from "../../../IssueCard";
import { FaShieldAlt } from "react-icons/fa";

export default function Dvm() {
  return (
    <div className="max-w-6xl max-lg:pt-6 mx-auto px-4">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-5xl">
          <p>
            Samsung'un <strong>DVM (Digital Variable Multi) VRF</strong> sistemleri, ticari ve büyük ölçekli binalarda <strong>esnek ve enerji verimli iklimlendirme çözümleri</strong> sunar. Gelişmiş teknolojilerle donatılmış bu sistemler, <strong>yüksek performans, enerji tasarrufu ve akıllı kontrol seçenekleri</strong> ile dikkat çeker.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Samsung DVM VRF Sistemleri Nedir?</h2>
        <p className="text-black/90 max-w-5xl">
          Samsung DVM (Digital Variable Multi) sistemleri, birden fazla iç ünitenin tek bir dış üniteye bağlanabildiği, yüksek verimli ve esnek bir iklimlendirme çözümüdür. Bu sistemler, hem ısıtma hem de soğutma işlevlerini aynı anda gerçekleştirebilir (ısı geri kazanımlı modellerde) ve enerji verimliliği açısından oldukça avantajlıdır.
        </p>
      </section>

      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
             <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Samsung DVM VRF Bakımı Neden Önemlidir?</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <IssueCard
            title="Enerji Verimliliği ve Performans"
            content="Düzenli bakım, sistemin optimum performansta çalışmasını sağlar. Kirli filtreler, tıkanmış borular veya yetersiz soğutucu akışkan seviyesi gibi sorunlar, enerji tüketimini artırabilir ve soğutma kapasitesini düşürebilir. Periyodik bakımlar, bu tür sorunları önleyerek enerji tasarrufu sağlar. "
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]"
          />

          <IssueCard
            title="Uzun Ömürlü Kullanım"
            content="Zamanında yapılan onarımlar ve parça değişimleri, sistemin ömrünü uzatır. Aksi takdirde, küçük arızalar büyük ve maliyetli sorunlara dönüşebilir."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Maliyet Tasarrufu"
            content="Erken tespit edilen arızalar ve kullanılan orijinal yedek parçalar, yüksek maliyetli onarımların ve erken sistem değişimlerinin önüne geçer."
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

        </div>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Samsung DVM VRF Sık Karşılaşılan Sorunlar ve Çözümleri</h2>
        <div className="space-y-4">
          <IssueCard
            title="Sistem Çalışmıyor veya Düşük Performans"
            cause="Filtrelerin tıkanması, soğutucu akışkan seviyesinin düşüklüğü, kompresör arızası.
Soğutucu gaz seviyesi eksik veya düşükse, performans kaybına yol açar. "
            solution="Filtrelerin temizlenmesi veya değiştirilmesi, soğutucu akışkan seviyesinin kontrol edilip gerekirse doldurulması, kompresörün incelenmesi ve gerekirse onarılması."
          />

          <IssueCard
            title="Aşırı Gürültü"
            cause="Fanın dengesiz çalışması, yabancı cisimler, motor arızası."
            solution="Fan dengelenmesi, motor kontrolü ve yabancı cisimlerin temizlenmesi."
          />

          <IssueCard
            title="Su Sızıntısı"
            cause="Drenaj hattı tıkanıklığı, yalıtım eksikliği."
            solution="Drenaj hattının temizlenmesi, boru yalıtımının kontrol edilip eksikliklerin giderilmesi."
          />

          <IssueCard
            title="Elektriksel Sorunlar"
            cause="Gevşek bağlantılar, sigorta arızası, kart problemleri."
            solution="Elektrik bağlantılarının sıkılaştırılması, sigortaların kontrol edilip değiştirilmesi, kartların incelenmesi ve gerekirse onarılması."
          />

          <IssueCard
            title="E4 Arızası (Dış ünite basınç koruma hatası)"
            cause="Yüksek basınç veya gaz seviyesi hatası."
            solution="Kondenser temizliği, gaz seviyesi kontrolü."
          />

          <IssueCard
            title="E6 Arızası (İç ünite iletişim hatası)"
            cause="Kablo kopukluğu veya iletişim sorunu."
            solution="Bus kablosu bağlantısı ve adres ayarları kontrol edilmeli."
          />

          <IssueCard
            title="P1/P2/P3 Hataları (Kompresör veya fan hatası)"
            cause="Elektriksel sorun, aşırı yük."
            solution="Voltaj ve fan motorları kontrol edilmeli."
          />

          <IssueCard
            title="Su Drenaj Sorunu"
            cause="Tıkanıklık veya eğim hatası."
            solution="Drenaj borularını temizlenmeli ve eğim düzeltilmeli."
          />
        </div></section>

      <section className="p-5">
        <div className="prose prose-lg text-black/90">
          <p className="leading-relaxed">
            Samsung DVM VRF sistemlerinin verimli ve uzun ömürlü çalışması için düzenli bakım, zamanında onarım ve orijinal yedek parçaların kullanımı esastır. Profesyonel hizmet almanız ve yetkili servislerle çalışmanız, sisteminizin performansını ve ömrünü artıracaktır.
          </p>
        </div>
      </section>
    </div>
  );
}
