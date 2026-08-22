import { Handshake } from "lucide-react";
import ImgButton from "./ImgButton";
import Image from "next/image";

const AboutPage = () => {
    return (
        <section id="hakkimizda" className="relative flex items-center lg:pt-24 lg:pb-20 pt-16 pb-8 xl:py-28 overflow-hidden">
            <div className="container w-full mx-auto px-4 relative z-10">
                <div className="container mx-auto items-center lg:items-stretch grid lg:grid-cols-2 gap-8 lg:gap-24 2xl:gap-0">
                    <div className="relative items-start lg:justify-start justify-center flex lg:h-full">
                        <Image
                            alt="Klima uzaktan kumandasıyla 22 derece sıcaklık ayarı yapılırken"
                            width={501}
                            height={488}
                            loading="lazy"
                            src="/image3.webp"
                            unoptimized
                            className="object-cover flex justify-center items-center rounded-2xl shadow-yellow/70 lg:shadow-[0_0_150px_8px] shadow-[0_0_70px_3px] w-full md:w-4/5 lg:w-[560px] h-auto lg:h-full min-[540px]:h-auto lg:translate-x-[37px]"
                        />

                        <div className="absolute transform translate-y-[-25px] lg:translate-x-[37px] 2xl:translate-x-[-37px] inset-0 flex justify-center items-start">
                            <ImgButton text="7/24 ULAŞILABİLİR" />
                        </div>
                        <div className="absolute px-2 bottom-0 lg:left-0 transform w-[313px] translate-y-[20px]">
                            <ImgButton text="ÇOK CAZİP FİYATLAR ve UYGUN ÖDEME KOŞULLARIYLA" />
                        </div>
                    </div>
                    <div className="pl-2 min-lg:pt-4 2xl:translate-x-[-50px] lg:translate-x-[-30px] ">
                        <div className="lg:border-l-3 border-blue h-17 lg:h-18 lg:pb-4 pb-2 flex items-end lg:pl-3">
                            <h2 className="section-heading">Hakkımızda</h2>
                        </div>
                        <p className="max-w-[610px] text-base lg:text-lg my-4 lg:pb-4 text-black">Klima bakımı, farklı klima türleri ve modelleri için özelleştirilmiş işlemler gerektirir. Her bir klima türü, farklı bir motor mekanizmasıyla donatılmıştır ve bu nedenle bakım ihtiyaçları da değişiklik gösterir. Profesyonel bakım hizmeti, klimanın verimliliğini artırır ve uzun ömürlü olmasını sağlar, böylece kullanıcıya daha konforlu bir ortam sunar.</p>
                        <p className="max-w-[610px] text-base lg:text-lg my-4 lg:pb-4 text-black">20 yılı aşkın süredir Türkiye genelinde konut, ofis, hastane ve endüstriyel tesislerde split klima, VRF sistemleri, chiller, rooftop klima ve soğuk oda projeleri yürütüyoruz. Ekibimiz; thermotron bakımından pano klima onarımına, klima santrali revizyonundan veri merkezi soğutma sistemlerine kadar geniş bir uygulama alanında teknik uzmanlık sunar. Her proje, üreticilerin teknik şartnamelerine ve sektör standartlarına uygun şekilde planlanır ve uygulanır.</p>
                        <div className="flex items-center gap-4 lg:gap-6">
                            <div className="w-8 h-8 justify-center flex items-center rounded-lg shrink-0">
                                <Handshake className="size-6 text-blue" />
                            </div>
                            <span className="text-black text-sm lg:pr-32">20 Yıllık tecrübemizle müşteri memnuyetini ön planda tutuyoruz.</span>
                        </div>
                
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;