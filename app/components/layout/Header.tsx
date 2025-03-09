"use client";
import { useState, useEffect } from "react";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[9999] ${isScrolled ? "bg-blue shadow-lg" : "bg-transparent"} transition-all duration-300`}
      style={{ willChange: "auto", transform: "none" }}>
      <nav className="mx-auto w-full flex md:justify-center justify-start items-center max-lg:gap-6 lg:px-6 px-4 py-4 container">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <div className=" space-x-4 lg:space-x-8 hidden md:flex justify-center w-full items-center h-full">
          <HeaderButton href="/" text="ANASAYFA" isScrolled={isScrolled} />
          <HeaderButton href="/" text="HİZMETLERİMİZ" isScrolled={isScrolled} />
          <HeaderButton href="/" text="KİRALAMA" isScrolled={isScrolled} />
          <HeaderButton href="/" text="HAKKIMIZDA" isScrolled={isScrolled} />
          <HeaderButton href="/" text="İLETİŞİM" isScrolled={isScrolled} />
        </div>
      </nav>
    </header>
  );
};

export default Header;