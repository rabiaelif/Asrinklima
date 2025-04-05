"use client";
import { useState, useEffect } from "react";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      setIsScrolled(window.scrollY > 10);
    };


    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${isMenuOpen && isScrolled
        ? "lg:bg-blue"
        : isMenuOpen
          ? "bg-transparent"
          : isScrolled
            ? "bg-blue shadow-md "
            : "bg-transparent"
        }`}
    >
      <nav className="mx-auto w-full  flex justify-between items-center lg:px-6 px-4 py-2 container">
        <div className={`flex-shrink-0 ${isMenuOpen ? "max-lg:hidden" : "flex"}`}>
          <Logo isMenuOpen={isMenuOpen} />
        </div>

        <div className="space-x-4 xl:mr-40 lg:space-x-8 hidden text-whiteB lg:flex justify-center w-full items-center h-full">
          <HeaderButton href="#anasayfa" text="ANASAYFA" />
          <HeaderButton href="#hizmetlerimiz" text="HİZMETLERİMİZ" />
          <HeaderButton href="#kiralama" text="KİRALAMA" />
          <HeaderButton href="#hakkımızda" text="HAKKIMIZDA" />
          <HeaderButton href="#iletişim" text="İLETİŞİM" />
        </div>

        <div className="lg:hidden">
          <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </nav>
    </header>

  );
};

export default Header;
