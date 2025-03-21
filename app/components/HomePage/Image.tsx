'use client'
import React, { useState, useEffect, useRef } from "react";
import HomePage from "./HomePage";
import LoadingHome from "./Loding";

const ImageWithText: React.FC = () => {
    const [objectPosition, setObjectPosition] = useState("50% center");
    const [isImageReady, setIsImageReady] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
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

    const checkAlignment = () => {
        if (imgRef.current) {
            const img = imgRef.current;
            const imgWidth = img.clientWidth;
            const imgHeight = img.clientHeight;
            const containerWidth = img.parentElement?.clientWidth || 0;
            const containerHeight = img.parentElement?.clientHeight || 0;


            const isAligned =
                imgWidth === containerWidth &&
                imgHeight === containerHeight &&
                img.style.objectPosition === objectPosition;

            if (isAligned) {
                setIsImageReady(true);
            } else {
                requestAnimationFrame(checkAlignment);
            }
        }
    };

    const handleImageLoad = () => {
        if (imgRef.current) {
            imgRef.current.classList.add("image-loaded");
            setIsImageLoaded(true);
        }
    };

    useEffect(() => {
        if (isImageLoaded) {
            setTimeout(() => {
                checkAlignment();
            }, 200);
        }
    }, [isImageLoaded]);

    return (
        <section id="anasayfa" className="relative w-full min-h-[650px] h-screen overflow-hidden">
            <LoadingHome />

            <img
                ref={imgRef}
                src="/image2.jpg"
                alt="Background"
                className="w-full h-full object-cover"
                style={{ objectPosition }}
                onLoad={handleImageLoad}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-0" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center pt-45 justify-center z-10">
                <HomePage />
            </div>
        </section>
    );
};

export default ImageWithText;