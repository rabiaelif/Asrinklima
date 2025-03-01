"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Pagination stilini ekle
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

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
  const [progress, setProgress] = useState(0);
  return (
    <section className="h-[700px] max-w-screen overflow-hidden">
      <div className="sm:container mx-auto sm:px-4">
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination]} // Pagination'ı modüllerimize ekliyoruz
            spaceBetween={30} // Kartlar arasındaki boşluk
            slidesPerView={"auto"} // Kart genişliğini içerik boyutuna göre ayarla
            loop={false} // Döngü kapalı
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            pagination={{
              type: "progressbar", // Progress bar tipi olarak "progressbar" seçildi
            }}
            className="pb-14 sm:!overflow-visible max-w-screen"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="flex flex-col overflow-hidden justify-start">
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
          <div className="absolute bottom-0 right-0 flex items-center space-x-2 p-4 z-50">
            <button className="prev-btn p-3 bg-white shadow-lg rounded-full">
              <ArrowLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button className="next-btn p-3 bg-white shadow-lg rounded-full">
              <ArrowRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Özel Progress Bar */}
        
        </div>
      </div>
    </section>
  );
}
