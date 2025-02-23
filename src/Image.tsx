import React, { useState, useEffect } from "react";
import Number1 from "./Number1";

const ImageWithText: React.FC = () => {
    const [objectPosition, setObjectPosition] = useState("50% center"); // Varsayılan pozisyon

    useEffect(() => {
        const handleResize = () => {
            setObjectPosition(window.innerWidth >= 640 ? "50% center" : "40% center");
        };

        handleResize(); // İlk yüklemede çalıştır
        window.addEventListener("resize", handleResize); // Pencere boyutu değiştiğinde çalıştır

        return () => window.removeEventListener("resize", handleResize); // Temizleme fonksiyonu
    }, []);

    return (
        <div className="relative w-full h-screen">
            <img
                src="/image2.jpg"
                alt="Background"
                className="w-full h-full object-cover"
                style={{ objectPosition }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center pt-45 justify-center z-10">
                <Number1 />
            </div>
        </div>
    );
};

export default ImageWithText;
