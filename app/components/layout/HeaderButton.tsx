"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderButtonProps {
  text: string;
  isScrolled: boolean;
  href: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, isScrolled, href }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      if (pathname !== "/") {
        setIsNavigating(true);
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
  };

  useEffect(() => {
    if (isNavigating) {
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
      setIsNavigating(false);
    }
  }, [isNavigating, href]);

  return (
    <a
      href={href}
      onClick={handleClick}
    >
      <span
        className={`font-medium transition-colors bg-transparent border-hidden text-base hover:text-yellow ${
          isScrolled ? "text-white" : "text-white"
        }`}
      >
        {text}
      </span>
    </a>
  );
};

export default HeaderButton;