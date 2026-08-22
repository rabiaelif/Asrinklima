import Image from "next/image";
import HomePage from "./HomePage";

const ImageWithText: React.FC = () => {
    return (
        <section id="anasayfa" className="relative w-full min-h-[650px] h-screen overflow-hidden">
            <Image
                src="/image2.webp"
                alt="Modern bir oturma odasında duvara monte edilmiş beyaz split klima"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[40%_center] sm:object-[50%_center]"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-0" />

            <div className="absolute top-0 left-0 w-full h-full flex items-center pt-45 justify-center z-10">
                <HomePage />
            </div>
        </section>
    );
};

export default ImageWithText;
