"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderButtonProps {
  text: string;
  href: string;
  title?: string;
  setIsMenuOpen?: (isOpen: boolean) => void;
  className?: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, href, title, setIsMenuOpen, className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetId, setTargetId] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (href.includes("#")) {
      e.preventDefault();
      const [path, id] = href.split("#");
      const targetPath = path || "/";

      if (pathname !== targetPath) {
        setIsNavigating(true);
        setTargetId(id);
        router.push(`${targetPath}#${id}`);
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
      let offset = 80;
      if (id === "hakkimizda") {
        offset = 40;
      } const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <Link href={href} title={title ?? text} className={`min-w-0 break-words ${className}`}>
      <span
        onClick={handleClick}
        className={`font-medium transition-colors bg-transparent pb-1 cursor-pointer ${setIsMenuOpen ? "text-black text-sm sm:text-base font-medium transition-all" : "text-whiteB hover:border-b border-yellow text-base hover:text-yellow "
          } `}
      >
        {text}
      </span>
    </Link>
  );
};

export default HeaderButton;
