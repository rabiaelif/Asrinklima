"use client";
import React from "react";
import { FaTools, FaShieldAlt } from "react-icons/fa";
import IssueCard from "../../IssueCard";

export default function PanoKlima() {
    return (
        <div className="max-w-6xl max-lg:pt-2 px-3">
            <section className="text-start mb-10">
                <div className="space-y-4 text-black/90 max-w-4xl">
                    <p>
                        <strong>Pano klimalar</strong>, elektrik panoları, otomasyon sistemleri ve kontrol kabinleri gibi hassas elektronik ekipmanların aşırı ısınmasını önlemek için kullanılan özel iklimlendirme cihazlarıdır.
                    </p>
                    <p>
                        Bu sistemler, donanımın güvenli ve verimli çalışmasını sağlamak için <strong>kabin içi sıcaklığı sabit tutar</strong>. Endüstriyel tesislerde, data merkezlerinde ve üretim hatlarında kritik öneme sahiptir.
                    </p>
                </div>
            </section>

            <section className="mb-16 lg:bg-blue-50 lg:rounded-xl lg:p-6 lg:shadow-sm">
                <div className="border-l-4 border-blue-800 pl-4 mb-6">
                    <div className="flex items-center gap-3">
                         <FaShieldAlt className="text-blue-800 text-4xl lg:text-2xl" />
                        <h2 className="text-2xl font-bold text-blue-800">Pano Klima Bakımı Neden Önemlidir?
                        </h2>
                    </div>
                </div>
                <p className="mb-8">
                    Elektrik panoları gibi hassas donanımların bulunduğu sistemlerde kullanılan pano klimalarının bakımı, iş sürekliliği ve ekipman güvenliği açısından kritik öneme sahiptir. Aşağıdaki nedenlerle düzenli bakım mutlaka yapılmalıdır:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <IssueCard
                        iconColor="text-blue-800"
                        title="Aşırı Isınmayı Önler"
                        content="Filtre tıkanıklığı veya fan arızası gibi sorunlar pano içi sıcaklığın yükselmesine yol açabilir. Düzenli temizlik ve bakım, aşırı ısınmayı engeller."
                        className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />
                    <IssueCard
                        iconColor="text-blue-800"
                        title="Yangın Riskini Azaltır"
                        content="Aşırı sıcaklık, kablo izolasyonlarının erimesine ve yangına neden olabilir. Bakımı yapılan bir klima, bu riski en aza indirir."
                        className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />
                    <IssueCard
                        iconColor="text-blue-800"
                        title="Enerji Verimliliği Sağlar"
                        content="Temiz filtreler ve verimli bileşenlerle çalışan klimalar, daha az enerji tüketir ve verimli soğutma sağlar."
                        className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />
                    <IssueCard
                        iconColor="text-blue-800"
                        title="Cihaz Ömrünü Uzatır"
                        content="Periyodik kontrol ile fanlar, kompresör ve sensörler uzun ömürlü çalışır; ani arızalar minimize edilir."
                        className="bg-white border border-blue-500 hover:shadow-[0_0_8px_0_rgba(0,0,0,0.1)] transition-shadow shadow-blue-500 shadow-[0_0_4px_0_rgba(0,0,0,0.1)]" />
                </div>
            </section>

            <section className="mb-16">
                <div className="border-l-4 border-blue-800 pl-4 mb-8">
                    <div className="flex items-center gap-3">
                        <FaTools className="text-blue-800 lg:flex hidden text-2xl" />
                        <h2 className="text-2xl font-bold text-blue-800">Pano Klimalarda Sık Görülen Arızalar ve Çözüm Yolları
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <IssueCard
                        title="Soğutmada Yetersizlik"
                        cause="Soğutma performansında azalma, genellikle filtre tıkanıklığı veya düşük gaz seviyesi nedeniyle oluşur."
                        solution="Filtrelerin temizliği ve soğutucu gaz seviyesinin kontrol edilmesi gerekir. Gerekirse gaz şarjı yapılmalıdır."
                    />

                    <IssueCard
                        title="Fan Arızaları"
                        cause="Fan motorlarında biriken tozlar veya rulman aşınması, fanın durmasına ya da sesli çalışmasına neden olabilir."
                        solution="Fan pervaneleri ve motor temizlenmeli, gerekirse rulmanlar yenilenmelidir." />

                    <IssueCard
                        title="Yoğuşma Sorunları"
                        cause="Drenaj hattındaki tıkanıklık veya eğim hataları, klimanın içinde su birikmesine yol açabilir."
                        solution="Drenaj hattı kontrol edilmeli, gerekirse temizlenmeli veya eğimi düzeltilmelidir." />

                    <IssueCard
                        title="Sık Arıza ve Durmalar"
                        cause="Termostat veya sensör arızaları, sistemin kendini sık sık kapatmasına neden olabilir."
                        solution="Sensör ve termostat kontrolleri yapılmalı, arızalı parçalar yenilenmelidir." />
                </div>
            </section>


            <section className="mb-16 bg-slate-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Düzenli Bakımın Faydaları</h2>
                <p>
                    Pano klimalarında <strong>düzenli bakım</strong>, ekipman güvenliği açısından kritik öneme sahiptir. Toz birikimi, filtre tıkanıklığı veya fan problemleri, pano içi ekipmanlara zarar verebilir. Periyodik bakım ile hem arızaların önüne geçilir hem de enerji verimliliği sağlanır.
                </p>
            </section>
        </div>
    );
}
