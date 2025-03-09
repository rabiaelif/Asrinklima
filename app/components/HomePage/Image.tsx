import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";

const ImageWithText: React.FC = () => {
    const [objectPosition, setObjectPosition] = useState("50% center");

    useEffect(() => {
        const handleResize = () => {
            setObjectPosition(window.innerWidth >= 640 ? "50% center" : "40% center");
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative w-full min-h-[650px] h-screen overflow-hidden">
            <img
                src="/image2.jpg"
                alt="Background"
                className="w-full h-full object-cover "
                style={{ objectPosition }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-0" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center pt-45 justify-center z-10">
                <HomePage />
            </div>
        </div>
    );
};

export default ImageWithText;
