import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const images = [
    { src: "/oncesi1.webp", alt: "Bakım öncesi is ve tozla kararmış klima santrali filtreleri" },
    { src: "/sonrasi1.webp", alt: "Bakım sonrası temizlenmiş, bembeyaz klima santrali filtreleri" },
    { src: "/oncesi2.webp", alt: "Bakım öncesi kirli ve karanlık klima santrali iç bölmesi" },
    { src: "/sonrasi2.webp", alt: "Bakım sonrası temizlenmiş klima santrali damper ve filtre bölmesi" },
];

const ImageGallery = () => {
    return (
        <section className="container mx-auto">
            <div className="lg:hidden ">
                <section className="container mx-auto">
                    <div className="lg:hidden">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView="auto"
                            centeredSlides={false}
                            loop={false}
                            modules={[Navigation, Pagination]}
                    className="w-full swiper-custom"
                        >
                            {images.map((image, index) => (
                        <SwiperSlide key={index} className="!w-[170px] !h-[150px]">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={170}
                                        height={150}
                                className="object-cover w-[170px] h-[150px] rounded-2xl"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

            </div>
            <div className="hidden lg:flex justify-center lg:justify-end">

                <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-0">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-[242px] h-[183px]"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={242}
                                height={183}
                                unoptimized
                                className={`object-cover w-[242px] h-[183px] border-2 border-blue ${index === 0 ? "rounded-tl-3xl" : ""
                                    } ${index === 1 ? "rounded-tr-3xl" : ""} ${index === 2 ? "rounded-bl-3xl" : ""
                                    } ${index === 3 ? "rounded-br-3xl" : ""}`}
                            />
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default ImageGallery;