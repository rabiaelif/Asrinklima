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
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetId, setTargetId] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);

      if (pathname !== "/") {
        setIsNavigating(true);
        setTargetId(id);
        router.push(`/#${id}`);
      } else {
        scrollToElement(id);
      }
    } else {
      router.push(href);
    }

    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isNavigating && targetId) {
      const checkElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          scrollToElement(targetId);
          setIsNavigating(false);
          setTargetId(null);
        } else {
          setTimeout(checkElement, 100);
        }
      };

      setTimeout(checkElement, 300);
    }
  }, [isNavigating, targetId]);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <Link href={href} className={className}>
      <span
        onClick={handleClick}
        className={`font-medium transition-colors bg-transparent pb-1 hover:border-b border-yellow text-base hover:text-yellow cursor-pointer ${setIsMenuOpen ? "text-black" : "text-whiteB"
        } `}
      >
        {text}
      </span>
    </Link>
  );
};

export default HeaderButton;
