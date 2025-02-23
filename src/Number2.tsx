import { Handshake } from "lucide-react";
import ImgButton from "./imgbutton";

const Number2 = () => {
    return (
        <div className="h-[698px] container mx-auto 2xl:px-40 xl:px-20 px-10 flex justify-center gap-17 items-center">
            <div className="relative"> {/* Relative konumlandırma ekledik */}
                <img
                    src="/image3.png"
                    className="object-center h-[488px] w-[501px] shadow-yellow/80 shadow-[0_0_100px_18px] rounded-2xl"
                />
                <div className="absolute transform translate-y-[-25px] inset-0 flex justify-center items-start"> {/* Button'ı ortalamak için bu div'i kullandık */}
                    <ImgButton text="7/24 ULAŞILABİLİR" />
                </div>
            </div>

            <div>
                <div className="border-l-3 border-blue h-18 pb-4 flex items-end pl-3">
                    <h1>HAKKIMIZDA</h1>
                </div>
                <p className="text-black max-w-[610px]">Klima bakımı, farklı klima türleri ve modelleri için özelleştirilmiş işlemler gerektirir. Her bir klima türü, farklı bir motor mekanizmasıyla donatılmıştır ve bu nedenle bakım ihtiyaçları da değişiklik gösterir. Profesyonel bakım hizmeti, klimanın verimliliğini artırır ve uzun ömürlü olmasını sağlar, böylece kullanıcıya daha konforlu bir ortam sunar.</p>
                <div className="flex items-center gap-6">
                    <div className="bg-blue w-10 h-10 justify-center flex items-center rounded-lg shrink-0">
                        <Handshake className="size-6 text-white" />
                    </div>
                    <p className="text-black pr-32">20 Yıllık tecrübemizle müşteri memnuyetini ön planda tutuyoruz.</p>
                </div>
            </div>
        </div>
    );
}

export default Number2;
