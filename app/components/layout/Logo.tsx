import Link from "next/link";
import React from "react";

type LogoProps = {
  isMenuOpen: boolean;
};

const Logo: React.FC<LogoProps> = ({ isMenuOpen }) => {
  return (
    <div className="logo text-3xl flex gap-3 font-bold">
      <Link href="/" passHref>
        <div>
          <span className="text-red">ASRIN</span>
          <span className={` text-white ${isMenuOpen ? "max-lg:text-black" : "text-white"}`}>
            KLİMA
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;