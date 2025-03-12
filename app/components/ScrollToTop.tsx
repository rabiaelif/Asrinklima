'use client'
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`fixed bottom-8 z-60 right-8 p-4 bg-red cursor-pointer text-white rounded-full shadow-lg transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />

    </button>
  );
};

export default ScrollToTopButton;