import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  img: string;
}

const services: Service[] = [
  { title: "Split Klima Bakım, Onarım ve Yedek Parça", img: "/images/split_klima.jpg" },
  { title: "Chiller Revizyon Onarım", img: "/images/chiller.jpg" },
  { title: "Rooftop Klima Arıza, Bakım ve Onarım", img: "/images/rooftop.jpg" },
  { title: "VRF Klima Sistemleri", img: "/images/vrf.jpg" },
  { title: "Klima Santrali Bakım ve Onarım", img: "/images/klima_santrali.jpg" },
  { title: "Pano Klima Bakım ve Onarım", img: "/images/pano.png" },
  { title: "Soğuk Oda İmalat Ve Onarım", img: "/images/soğuk_oda.png" },
  { title: "Havuz Nem Alma Cihazı", img: "/images/havuz_nem_alma_cihazlari.jpg" },
  { title: "Hastane Hijyenik Klima Bakımı Ve Onarımı", img: "/images/hastane_hijyenik_klima.jpg" },
  { title: "DX Soğutma Sistemleri", img: "/images/dx_soğutma_sistemleri.jpeg" },
  { title: "Kanal Temizliği", img: "/images/dx_soğutma_sistemleri.jpeg" },
  { title: "Klima Cihaz Kiralama", img: "/images/klima_kiralama.jpg" },
  { title: "Veri Merkezi ", img: "/images/veri_merkezi.jpg" },
];

export default function OurServices() {
  const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
  const [isLastSlide, setIsLastSlide] = useState<boolean>(false);

  const handleReachEnd = () => {
    setIsLastSlide(true);
    setIsFirstSlide(false);
  };

  const handleReachBeginning = () => {
    setIsFirstSlide(true);
    setIsLastSlide(false);
  };

  const handleSlideChange = (swiper: any) => {
    const isFirst = swiper.isBeginning;
    const isLast = swiper.isEnd;
    setIsFirstSlide(isFirst);
    setIsLastSlide(isLast);
  };

  return (
    <section className="px-4 max-w-screen pb-10 lg:pb-16 overflow-x-hidden">
      <div className="sm:container mx-auto sm:px-4 ">
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={"auto"}
            loop={false}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            pagination={{
              type: "progressbar",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
            }}
            onSlideChange={handleSlideChange}
            onReachBeginning={handleReachBeginning}
            onReachEnd={handleReachEnd}
            className="sm:!overflow-visible max-w-full h-auto mx-auto"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="flex overflow-hidden justify-start">
                <div className="bg-[#F6F6F6] h-[330px] w-[330px] flex flex-col justify-between gap-4 items-start rounded-[30px] px-3.5 pt-3.5 pb-3 text-black relative">
                  <div className="flex pl-2 justify-between items-center w-full">
                    <h3 className="text-lg w-[235px] font-regular leading-tight text-black">{service.title}</h3>
                    <Link href={`/services/${service.title}`} passHref>
                      <div className="p-3 bg-[#ffffff] rounded-full">
                        <ArrowUpRight className="size-4 text-black" />
                      </div>
                    </Link>
                  </div>
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={330}
                    height={245}
                    className="rounded-3xl w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-between z-50 -mt-6 sticky ">
            <div className="flex-grow relative">
              <div className="swiper-pagination swiper-pagination-progressbar"></div>
            </div>

            <div className="flex items-center space-x-3 ml-4">
              <button
                className={`prev-btn p-3 rounded-full ${isFirstSlide ? "bg-[#F7F7F7]" : "bg-blue cursor-pointer"
                  }`}
                disabled={isFirstSlide}
              >
                <ArrowLeft
                  className={`h-6 w-6 ${isFirstSlide ? "text-[#B6B6B6]" : "text-white cursor-pointer"
                    }`}
                />
              </button>
              <button
                className={`next-btn p-3 rounded-full ${isLastSlide ? "bg-[#F7F7F7]" : "bg-blue cursor-pointer "
                  }`}
                disabled={isLastSlide}
              >
                <ArrowRight
                  className={`h-6 w-6 ${isLastSlide ? "text-[#B6B6B6]" : "text-white cursor-pointer"
                    }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}