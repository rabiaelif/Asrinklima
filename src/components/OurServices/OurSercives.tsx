"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const services = [
  { title: "Split Klima Bakım, Onarım", img: "/vrfklima.jpg" },
  { title: "Chiller Revizyon Onarım", img: "/vrfklima.jpg" },
  { title: "Rooftop Klima Arıza, Bakım", img: "/vrfklima.jpg" },
  { title: "VRF Klima Sistemleri", img: "/vrfklima.jpg" },
  { title: "Merkezi Klima Sistemleri", img: "/vrfklima.jpg" },
  { title: "Soğutma Üniteleri", img: "/vrfklima.jpg" },
  { title: "Klima Gaz Dolumu", img: "/vrfklima.jpg" },
  { title: "Kombi Bakım & Onarım", img: "/vrfklima.jpg" },
  { title: "Endüstriyel Soğutma", img: "/images/industrial.jpg" },
  { title: "Havalandırma Sistemleri", img: "/images/ventilation.jpg" },
  { title: "Otel Klima Sistemleri", img: "/images/hotel.jpg" },
  { title: "Fabrika Klima Bakımı", img: "/images/factory.jpg" },
  { title: "Araç Klima Servisi", img: "/images/car.jpg" },
  { title: "Özel Klima Çözümleri", img: "/images/custom.jpg" },
];

export default function OurServices() {
  const [slides, setSlides] = useState(4); // Varsayılan olarak 4 kart
  const [progress, setProgress] = useState(0); // Progress bar için state ekledik

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) setSlides(5);
      else if (window.innerWidth > 1024) setSlides(4);
      else if (window.innerWidth > 768) setSlides(3);
      else setSlides(2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (swiper: any) => {
    const progressValue = ((swiper.realIndex + 1) / services.length) * 100;
    setProgress(progressValue);
  };

  return (
    <section className="h-[700px] w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={250} // Kartlar arasındaki boşluk
            slidesPerView={slides} // Ekran genişliğine göre değişken
            centeredSlides={true}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-14 overflow-visible"
            onSlideChange={handleSlideChange} // Slide değiştiğinde handleSlideChange fonksiyonunu çağırıyoruz
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="bg-[#F6F6F6] h-[330px] w-[330px] flex flex-col justify-end items-center rounded-[30px] p-4 text-black relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="rounded-3xl h-[245px] w-full object-cover"
                  />
                  <h3 className="text-start mt-2 text-xl font-regular text-black absolute top-4 left-4">
                    {service.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigasyon Butonları */}
          <div className="absolute bottom-0 right-0 flex items-center space-x-2 p-4 z-10">
            <button className="prev-btn p-3 bg-white shadow-lg rounded-full">
              <ArrowLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button className="next-btn p-3 bg-white shadow-lg rounded-full">
              <ArrowRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 h-0.5 rounded-full dark:bg-[#EBEBED] swiper-pagination-progressbar swiper-pagination-horizontal">
            <span
              className="swiper-pagination-progressbar-fill block h-full bg-yellow"
              style={{
                width: `${progress}%`,
                backgroundColor: progress === 100 ? "yellow" : "yellow", // İlerleme %100 olduğunda yeşil, diğer durumlarda sarı
              }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}
