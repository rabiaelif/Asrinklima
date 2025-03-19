"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderButtonProps {
  text: string;
  href: string;
  setIsMenuOpen?: (isOpen: boolean) => void;
  className?: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, href, setIsMenuOpen, className }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault(); 

      if (pathname !== "/") {
        router.push(`/#${href.slice(1)}`);
      } else {
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }
    } else {
      router.push(href);
    }

    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      <span className="font-medium transition-colors bg-transparent border-hidden text-base hover:text-yellow text-black">
        {text}
      </span>
    </Link>
  );
};

export default HeaderButton;
