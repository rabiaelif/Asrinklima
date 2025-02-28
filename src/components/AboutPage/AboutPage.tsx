import { Handshake } from "lucide-react";
import ImgButton from "./ImgButton";

const AboutPage = () => {
    return (
        <section id="about" className="relative flex items-center py-20 lg:py-32 overflow-hidden">
            <div className="container w-full mx-auto lg:px-8 px-4 relative z-10">
                <div className="container mx-auto justify-start items-start grid lg:grid-cols-2 gap-8  lg:gap-12">
                    <div className="relative items-start lg:justify-start justify-center flex" >
                        <img
                            src="/image3.png"
                            className="object-cover flex justify-center items-center h-[250px] 3xl:h-full w-[768px] lg:h-[400px]   shadow-yellow/80 lg:shadow-[0_0_150px_8px] shadow-[0_0_70px_3px] rounded-2xl"
                        />
                    </div>

                    <div className="pl-2 space-y-6 xl:pt-8 pt-4">
                        <div className="lg:border-l-3 border-blue h-18 pb-4 flex items-end pl-3">
                            <h1>HAKKIMIZDA</h1>
                        </div>
                        <p className=" max-w-[610px] text-black">Klima bakımı, farklı klima türleri ve modelleri için özelleştirilmiş işlemler gerektirir. Her bir klima türü, farklı bir motor mekanizmasıyla donatılmıştır ve bu nedenle bakım ihtiyaçları da değişiklik gösterir. Profesyonel bakım hizmeti, klimanın verimliliğini artırır ve uzun ömürlü olmasını sağlar, böylece kullanıcıya daha konforlu bir ortam sunar.</p>
                        <div className="flex items-center gap-6">
                            <div className=" w-8 h-8 justify-center flex items-center rounded-lg shrink-0">
                                <Handshake className="size-6 text-yellow" />
                            </div>
                            <span className="text-black text-sm pr-32">20 Yıllık tecrübemizle müşteri memnuyetini ön planda tutuyoruz.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;
/*

<section id="about" className="relative flex items-center py-20 lg:py-32 overflow-hidden">
<div className="container mx-auto 2xl:px-40 xl:px-20 px-10  justify-center  items-start grid lg:grid-cols-2 gap-8 lg:gap-12">
    <div className="relative items-center justify-center flex" >
        <img
            src="/image3.png"
            className="object-center flex justify-center items-center h-[488px] w-[501px] 3xl:w-full  shadow-yellow/80 shadow-[0_0_100px_18px] rounded-2xl"
        />
        <div className="absolute transform translate-y-[-25px] inset-0 flex justify-center items-start">
            <ImgButton text="7/24 ULAŞILABİLİR" />
        </div>
    </div>

    <div className="lg:pl-8 space-y-6 pt-8">
        <div className="border-l-3 border-blue h-18 pb-4 flex items-end pl-3">
            <h1>HAKKIMIZDA</h1>
        </div>
        <p className=" max-w-[610px] text-black">Klima bakımı, farklı klima türleri ve modelleri için özelleştirilmiş işlemler gerektirir. Her bir klima türü, farklı bir motor mekanizmasıyla donatılmıştır ve bu nedenle bakım ihtiyaçları da değişiklik gösterir. Profesyonel bakım hizmeti, klimanın verimliliğini artırır ve uzun ömürlü olmasını sağlar, böylece kullanıcıya daha konforlu bir ortam sunar.</p>
        <div className="flex items-center gap-6">
            <div className=" w-8 h-8 justify-center flex items-center rounded-lg shrink-0">
                <Handshake className="size-6 text-yellow" />
            </div>
            <span className="text-black text-sm pr-32">20 Yıllık tecrübemizle müşteri memnuyetini ön planda tutuyoruz.</span>
        </div>
    </div>
</div>
</section>*/