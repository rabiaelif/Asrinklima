"use client";
import React from "react";
import IssueCard from "../../../IssueCard";
import { FaTools } from "react-icons/fa";

export default function VrfAltYapı() {
  return (
    <div className="max-w-6xl max-lg:pt-6 mx-auto px-4">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-4xl">
          <p itemProp="description">
            VRF (Değişken Soğutucu Akışkan Debisi) sistemlerinin verimli ve uzun ömürlü çalışabilmesi için doğru altyapı ve borulama tasarımı büyük önem taşır.
          </p>
        </div>
      </section>

      <section className="mb-8 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">
              VRF Sistemlerinde Borulama ve Altyapı Uygulamaları
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          <IssueCard
            title="Kullanılan Boru Türleri ve Özellikleri"
            className="bg-white border border-blue-500"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>VRF sistemlerinde <strong>oksijensiz bakır borular</strong> kullanılır.</li>
                  <li>İç yüzeyi temiz, pürüzsüz ve basınca dayanıklı <strong>sert çekilmiş</strong> olmalıdır.</li>
                  <li><strong>Kapalı hücreli elastomerik kauçuk</strong> ile izolasyon sağlanmalıdır.</li>
                </ul>
              </>
            }
          />

          <IssueCard
            title="Boru Montajı ve Kaynak İşlemleri"
            className="bg-white border border-blue-500"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Borular <strong>sert lehimleme</strong> yöntemiyle birleştirilmelidir.</li>
                  <li>Bakır boru kaynak işlemlerinde <strong>bakır tel</strong> kullanılır.</li>
                  <li>Kaynak sırasında <strong>azot gazı üflenerek</strong> iç oksitlenme önlenmelidir.</li>
                  <li>Kaynak sonrası <strong>azot testleri</strong> ile sızdırmazlık kontrolü yapılmalıdır.</li>
                </ul>
              </>
            }
          />

          <IssueCard
            title="Drenaj ve Kondens Hattı Hazırlığı"
            className="bg-white border border-blue-500"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Drenaj hattı en az <strong>%1 eğimle</strong> döşenmelidir.</li>
                  <li>Yoğuşma suyu tahliyesi <strong>doğal eğimle</strong> veya <strong>pompalı sistemle</strong> yapılabilir.</li>
                  <li>Drenaj boruları <strong>yoğuşma ve kaçakları önlemek</strong> için izole edilmelidir.</li>
                </ul>
              </>
            }
          />

          <IssueCard
            title="Elektrik ve Kontrol Altyapısı"
            className="bg-white border border-blue-500"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Uygun <strong>elektrik besleme hatları ve sigorta korumaları</strong> yapılmalıdır.</li>
                  <li>İç ve dış üniteler <strong>iletişim (bus) kabloları</strong> ile bağlanmalıdır.</li>
                  <li><strong>Kablolu veya kablosuz kumanda</strong> sistem kontrolü için kullanılmalıdır.</li>
                </ul>
              </>
            }
          />

          <IssueCard
            title="Test ve Devreye Alma İşlemleri"
            className="bg-white border border-blue-500"
            content={
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Vakumlama</strong> ile boru hattındaki hava ve nem uzaklaştırılmalıdır.</li>
                  <li><strong>Azot testi</strong> ile sızdırmazlık sağlanmalıdır.</li>
                  <li><strong>Soğutucu akışkan şarjı</strong> üretici talimatlarına göre yapılmalıdır.</li>
                  <li><strong>Sistem performansı</strong> test edilerek devreye alınmalıdır.</li>
                </ul>
              </>
            }
          />
        </div>
      </section>

      <section className="pb-4 p-5">
        <p className="text-black/90">
          VRF sistemlerinin borulama işlemleri, uzmanlık ve titizlik gerektiren bir süreçtir. Doğru malzeme seçimi, hassas montaj ve detaylı testler, sistemin uzun ömürlü ve verimli çalışmasını sağlar. Bu nedenle, montaj işlemlerinin yetkili ve deneyimli teknisyenler tarafından gerçekleştirilmesi önerilir.
        </p>
      </section>
    </div>
  );
}
