'use client'
import React, { useState, useEffect, useRef } from "react";
import HomePage from "./HomePage";

const ImageWithText: React.FC = () => {
    const [objectPosition, setObjectPosition] = useState("50% center");
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleResize = () => {
            const newPosition = window.innerWidth >= 640 ? "50% center" : "40% center";
            setObjectPosition(newPosition);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="anasayfa" className="relative w-full min-h-[650px] h-screen overflow-hidden">
            <img
                ref={imgRef}
                src="/image2.jpg"
                alt="Background"
                fetchPriority="high"
                className="w-full h-full object-cover sm:hidden"
                style={{ objectPosition: "40% center" }}
            />

            <img
                src="/image2.jpg"
                alt="Background"
                fetchPriority="high"
                className="w-full h-full object-cover hidden sm:block"
                style={{ objectPosition: "50% center" }}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-0" />

            <div className="absolute top-0 left-0 w-full h-full flex items-center pt-45 justify-center z-10">
                <HomePage />
            </div>
        </section>
    );
};

export default ImageWithText;