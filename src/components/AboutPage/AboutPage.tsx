import { Handshake } from "lucide-react";
import ImgButton from "./ImgButton";

const AboutPage = () => {
    return (
    <section id="about" className="relative flex items-center py-20 lg:py-32 overflow-hidden">
        <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="container mx-auto items-start grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative items-start justify-start flex" >
                <img
                    src="/image3.png"
                    className="object-center flex justify-center items-center h-[488px] 3xl:h-full w-[501px] 3xl:w-full  shadow-yellow/80 shadow-[0_0_100px_18px] rounded-2xl"
                />
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
        </div>
        </section>
    );
}

export default AboutPage;
/*
<section id="about" className="relative flex items-center py-20 lg:py-32 overflow-hidden">
    <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center container mx-auto">
            <div className="relative h-[400px] lg:h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-r rounded-lg opacity-20 blur-3xl">
                    </div>
                    <div className="absolute inset-0 right-8 bottom-8 z-10 rounded-3xl overflow-hidden">
                        </div>
                        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 z-20">
                      <div className="absolute left-4 bottom-4">
                            <p className="text-white text-sm font-semibold drop-shadow-md">Vakmanschap in detail</p>
                            </div>
                            </div>
                            </div>
                            <div className="lg:pl-8 text-[var(--color-dark)] dark:text-[var(--color-light)] space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Over Ons</h2>
                                    <p className="text-[var(--color-dark)]/70 dark:text-[var(--color-light)]/70 text-sm">Expertise in bouw &amp; renovatie</p>
                                    </div>
                                    <div className="space-y-6 text-[var(--color-dark)]/80 dark:text-[var(--color-light)]/80"><p>Met meer dan 15 jaar ervaring in de bouw- en renovatiesector, bieden wij een unieke combinatie van vakmanschap en betrouwbaarheid.</p><p>Ons team bestaat uit gecertificeerde vakmensen die elk project met de grootste zorg en aandacht uitvoeren. Of het nu gaat om een kleine reparatie of een complete verbouwing, wij staan garant voor kwaliteit.</p>
                                    </div></div></div></div></section>*/
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