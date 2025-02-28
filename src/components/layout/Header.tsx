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

/*
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
    <nav className="fixed w-full bg-transparent">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center min-h-16">
        <a href="/" className="flex items-center p-2">
          <svg className="w-12 h-auto text-light" viewBox="0 0 130 150" xmlns="http://www.w3.org/2000/svg">
            <g>
              <polygon fill="dark" points="128.3,38.5 65,1.9 1.7,38.5 1.7,111.5 65,148.1 128.3,111.5"></polygon>
              <path fill="primary" d="M65,149.5L0.5,112.2V37.8L65,0.5l64.5,37.2v74.5l-0.6,0.3L65,149.5z"></path>
            </g>
          </svg>
        </a>
        <div className="hidden xl:flex items-center justify-center flex-grow">
          <div className="flex space-x-2 justify-center w-full items-center">
            <a href="/#about" className="text-light hover:text-primary px-3">Over ons</a>
            <button className="text-light hover:text-primary px-3">Wat we doen</button>
            <a href="/#klussen" className="text-light hover:text-primary px-3">Onze klussen</a>
            <a href="/#kastopmaat" className="text-light hover:text-primary px-3">Kast op maat</a>
            <a href="/#contact" className="text-light hover:text-primary px-3">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Header;
*/