"use client";
import React from "react";
import { FaTools, FaShieldAlt, FaSnowflake, FaTemperatureLow, FaTint, FaBolt, FaGasPump, FaFan, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import Image from "next/image";
import IssueCard from "../../IssueCard";
import Link from "next/link";

export default function Chiller() {
  return (
    <div className="max-w-6xl  max-lg:pt-6 px-3">
      <section className="text-start mb-10">
        <div className="space-y-4 text-black/90 max-w-4xl">
          <p itemProp="description">
            Chiller sistemleri, endüstriyel ve ticari uygulamalarda kullanılan, su veya hava soğutmalı soğutma üniteleridir. Bu sistemler, özellikle büyük binalarda, fabrikalarda ve alışveriş merkezlerinde iklimlendirme ve proses soğutması için tercih edilir. Chiller bakımı ve düzenli bakım planları, performansın korunması için kritik rol oynar.
          </p>
          <p>Zamanla, kullanım koşullarına bağlı olarak performanslarında düşüşler meydana gelebilir; bu nedenle chiller revizyon ve onarım hizmetleri büyük önem taşır.</p>
        </div>
      </section>
      <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <div className="flex items-center gap-3">
             <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
            <h2 className="text-2xl font-bold text-blue-800">Chiller Revizyon ve Onarım Neden Önemlidir?</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <IssueCard
            title="Kış Bakımı"
            content={
              <>
                <p className="text-sm text-black/90 leading-relaxed">
                  Kış aylarında soğutucu (chiller) sistemleri kapalıyken, eğer antifriz kullanılmazsa, sistemdeki su donabilir.
                  Bu da boruların veya eşanjörlerin çatlamasına yol açabilir.
                </p>
                <h4 className="font-semibold mt-3 text-blue-700">Önerilen Önlemler:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-black/90 leading-relaxed">
                  <li>Soğuk havalarda <strong>antifriz</strong> kullanın.</li>
                  <li>Gerekirse <strong>su hatlarını boşaltın</strong>.</li>
                  <li>Donmaya karşı sistemlerinizi <strong>düzenli kontrol edin</strong>.</li>
                </ul>

                {/* Gerçek Örnek Bölümü */}
                <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-4 rounded-lg">
                  <h4 className="text-red-700 font-semibold">Gerçek Bir Örnek 📸</h4>
                  <p className="text-sm text-black/90 leading-relaxed">
                    Geçtiğimiz kış aylarında bakım yapılmayan bir chiller'da boru hattı donarak ciddi hasar oluşturdu.
                    Soğutma sistemi tamamen çalışmaz hale geldi ve acil müdahale gerektirdi.
                  </p>
                  <div className="mt-3">
                    <Link href="https://www.facebook.com/share/v/1FZiWTTuKb/" target="_blank">İlgili Videoyu İzlemek için Tıklayın</Link>
                  </div>
                </div>
              </>
            }
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />


          <IssueCard
            title="Yaz Hazırlığı"
            content={
              <>
                <p className="text-sm text-black/90 leading-relaxed">
                  Yaz aylarında chiller sistemleri yoğun çalışır. Kusursuz çalışmasını sağlamak için, yaz öncesinde kapsamlı bir bakım yapılması kritik öneme sahiptir.
                </p>
                <h4 className="font-semibold mt-3 text-blue-700">Bakımda Kontrol Edilmesi Gerekenler:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-black/90 leading-relaxed">
                  <li><strong>Soğutucu gaz seviyeleri</strong> kontrol edilmelidir.</li>
                  <li><strong>Isı eşanjörleri</strong> temizlenmelidir.</li>
                  <li><strong>Filtreler</strong> değiştirilmeli.</li>
                  <li><strong>Elektrik bağlantıları</strong> gözden geçirilmelidir.</li>
                  <li><strong>Kompresör yağ seviyeleri</strong> ve sistem basınçları kontrol edilmelidir.</li>
                </ul>
                <p className="mt-3 text-sm text-black/90 leading-relaxed">
                  Bu bakımlar sayesinde <strong>verimlilik artar</strong>, <strong>enerji tasarrufu sağlanır</strong> ve beklenmeyen arızalar önlenir.
                </p>
              </>
            }
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Verimlilik Artışı"
            content={
              <p className="text-sm text-black/90 leading-relaxed">
                Zamanla aşınan veya kirlenen bileşenler, sistemin verimliliğini düşürebilir.
                Düzenli revizyon ve bakım işlemleri, chiller sisteminizin ilk günkü performansa yakın çalışmasını sağlar.
              </p>
            }
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />

          <IssueCard
            title="Enerji Tasarrufu"
            content={
              <p className="text-sm text-black/90 leading-relaxed">
                Verimli çalışan bir chiller, daha az enerji tüketir. Bu da işletme maliyetlerini düşürür ve çevresel etkileri azaltır.
              </p>
            }
            className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />
        </div>
      </section>
      {/*antifiriz*/}
      <section className="mb-16 ">
        <h2 className="text-3xl border-l-4 border-blue-800 pl-4 font-semibold text-blue-800 mb-8">
          Chiller Sistemlerinde Kapanış ve Antifriz
        </h2>

        <p className=" text-black/90">
          Antifriz, suyun donmasını önlemek için kullanılan bir kimyasaldır. Chiller sistemlerinde,
          özellikle düşük sıcaklıkta çalışan veya kışın donma riski olan bölgelerde, sistem suyuna antifriz
          eklenmesi gerekir. Bu, boruların ve ısı eşanjörlerinin donarak hasar görmesini önler.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800 mb-4 mt-8">
          Chiller Sistemlerinde Kapanış ve Antifriz Kullanımı
        </h3>

        <div className="space-y-6 ml-4">
          <div>
            <h4 className="text-xl font-semibold text-black/80 mb-2">
              1. Sezon Sonu Kapanış İşlemi
            </h4>
            <ul className="list-disc space-y-1 pl-5 text-black/90">
              <li>
                Chiller uzun süre kullanılmayacaksa, sistemin içindeki su tamamen boşaltılmalı veya uygun
                oranda antifriz eklenmelidir.
              </li>
              <li>
                Kondenser içindeki suyun donmasını önlemek için tahliye vanaları açılarak su boşaltılmalıdır.
              </li>
              <li>
                Pompa ve borular da kontrol edilmeli, içinde su kalmadığından emin olunmalıdır.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-black/80 mb-2">2. Antifriz Kullanımı</h4>
            <ul className="list-disc space-y-1 pl-5 text-black/90">
              <li>
                Eğer chiller düşük sıcaklıklarda kapatılacaksa veya açık havada depolanacaksa, suya antifriz
                eklenmelidir.
              </li>
              <li>
                Kullanılacak antifriz türü ve oranı, ortam sıcaklığına göre belirlenmelidir.
              </li>
              <li>
                Antifriz eklenen suyun pH dengesi ve korozyon önleyici özellikleri de düzenli olarak kontrol
                edilmelidir.
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">
          Chiller Sistemlerinde Kapanış ve Antifrizin Önemi
        </h3>

        <p className="text-black/90">
          Chiller sistemlerinin verimli ve uzun ömürlü çalışabilmesi için düzenli bakım ve doğru kapanış
          işlemleri büyük önem taşır. Özellikle soğuk havalarda, sistem içindeki suyun donmasını önlemek ve
          ekipmanların zarar görmesini engellemek için antifriz kullanımı kritik bir rol oynar. Sezon sonunda
          chiller’in doğru şekilde kapatılması, kondenserde suyun bırakılmaması, pompa ve boruların kontrol
          edilmesi, olası arızaların ve maliyetli onarımların önüne geçer. Antifriz eklenerek yapılan koruyucu
          önlemler, sisteminizin her mevsimde güvenle çalışmasını sağlar ve verimliliğini artırır.
        </p>

        <p className="mt-4 text-black/90">
          Profesyonel bakım hizmetimizle, chiller sistemlerinizin her zaman en iyi performansta çalışmasını
          sağlamak için yanınızdayız.
        </p>
      </section>

      <section className="mb-8">
        <div className="border-l-4 border-blue-800 pl-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-800">Sık Karşılaşılan Chiller Arızaları ve Çözümleri</h2>
        </div>
        <div className="space-y-6">
          <IssueCard
            title="Soğutma Performansı Düşüklüğü"
            cause="Kirli filtreler veya düşük soğutucu gaz seviyesi nedeniyle oluşabilir."
            solution="Tesisat pislik tutucusu temizlenmeli veya değiştirilmelidir. Gaz dolumu yapılmadan önce, azot testi ile kaçak kontrolü sağlanmalı, varsa kaçak giderilmeli ve ardından gaz seviyesi tamamlanmalıdır."
            className="hover:shadow-md transition-shadow"

          />

          <IssueCard
            title="Anormal Sesler ve Titreşimler"
            cause="Kondanser fanı arızası veya dengeleme sorunlarından kaynaklanabilir."
            solution="Fan ve motorun kontrol edilmesi, gevşek parçaların sıkılaştırılması ve gerekirse onarım yapılması."
            className="hover:shadow-md transition-shadow"

          />

          <IssueCard
            title="Elektronik Kart Arızaları"
            cause="Elektriksel dalgalanmalar veya yaşlanma nedeniyle oluşabilir."
            solution="Elektronik kartın incelenmesi, onarımı veya gerekirse değiştirilmesi."
            className="hover:shadow-md transition-shadow"

          />

          <IssueCard
            title="Soğutucu Gaz Kaçağı"
            cause="Aşınma ve yıpranma nedeniyle soğutucu gaz seviyesi düşebilir."
            solution="Sistem düzenli olarak kaçaklar için kontrol edilmeli, tespit edilen kaçaklar onarılmalı ve sistem uygun miktarda soğutucu gaz ile yeniden doldurulmalıdır."
            className="hover:shadow-md transition-shadow"

          />
          <IssueCard
            title="Tıkanmış Isı Eşanjörleri"
            cause="Tortu veya kireç birikimi, ısı transferini engelleyebilir."
            solution="Isı eşanjörleri periyodik olarak temizlenmeli, kimyasal ilaç ile temizliği yapılmalı ve verimli ısı transferi sağlanmalıdır."
            className="hover:shadow-md transition-shadow"

          />
          <IssueCard
            title="Arızalı Sensörler"
            cause="Arızalı sensörler, yanlış okumalara neden olarak sistem performansını olumsuz etkileyebilir."
            solution="Sensörler düzenli olarak test edilmeli, kalibre edilmeli veya gerektiğinde değiştirilmelidir."
            className="hover:shadow-md transition-shadow"

          />
          <IssueCard
            title="Kompresör Arızaları"
            cause=" Aşırı ısınma, elektriksel sorunlar veya mekanik aşınma kompresör arızalarına yol açabilir."
            solution="Kompresör performansı izlenmeli, uygun yağlama sağlanmalı ve elektriksel sorunlar derhal giderilmelidir."
            className="hover:shadow-md transition-shadow"

          />
          <IssueCard
            title="Tutarsız Soğutma Performansı"
            cause="Düşük soğutucu gaz seviyesi, hava akışı kısıtlamaları veya bileşen arızaları dengesiz soğutmaya neden olabilir."
            solution="Tutarsız soğutmanın altında yatan nedenleri belirlemek ve gidermek için kapsamlı sistem kontrolleri yapılmalıdır."
            className="hover:shadow-md transition-shadow"
          />
        </div>
      </section>

      <section className="pb-4 text-black/80 p-5">
        <p>Chiller istemlerinin düzenli bakımı ve olası sorunların erken tespiti, hem enerji tasarrufu sağlar hem de sistem ömrünü uzatır. Bu sayede işletmeler, beklenmeyen arızaların önüne geçerek süreklilik ve verimlilik sağlayabilir.</p>
      </section>
    </div>
  );
}
