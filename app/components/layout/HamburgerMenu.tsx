"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";
import Link from "next/link";

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerMenu({ isMenuOpen, setIsMenuOpen }: HamburgerMenuProps) {
  const pathname = usePathname();
  const isServicesPage = pathname?.includes("/hizmetlerimiz");
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (windowWidth >= 1024) {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      return;
    }

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isMenuOpen, windowWidth]);

  const isHizmetlerPage = pathname?.includes("/hizmetlerimiz");

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(true)}
        className={`relative z-[100] rounded-md p-1 text-whiteB hover:bg-black/20 cursor-pointer hover:text-yellow focus:outline-none focus:ring-2 focus:ring-yellow ${isMenuOpen ? "hidden" : "block"
          }`}
      >
        <Bars3Icon className="size-6 transition-all duration-300" />
      </button>

      <div
        className={`fixed inset-0 z-[9998] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed bg-[#f6f6f6] inset-y-4 right-4 left-4 z-[9999] flex flex-col rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-[100vw]"} menu-content`}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <div className="w-full flex border-b-2 border-gray-200 justify-between items-center gap-3 pb-4 p-6">
            <div className="px-3 py-1 font-bold min-w-0">
              <Logo isMenuOpen={isMenuOpen} />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex-shrink-0 text-black bg-yellow hover:bg-[#CFD787] transition-all rounded-md p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
            >
              <XMarkIcon className="size-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 flex justify-center">
            <nav className={`space-y-4 w-full text-black flex flex-col items-center ${isServicesPage ? "" : "mt-8 pl-6"} `}>
              <div className={`justify-center px-6 w-full text-black ${isServicesPage ? "md:space-y-4  space-y-3 gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5" : "flex flex-col space-y-4"}`}>
                {[
                  { href: "/", text: "ANASAYFA", title: "Asrın Klima Anasayfa" },
                  { href: "/#hizmetlerimiz", text: "HİZMETLERİMİZ", title: "Sunduğumuz Isıtma, Soğutma ve Havalandırma Hizmetleri" },
                  { href: "/hizmetlerimiz/klima-kiralama", text: "KİRALAMA", title: "Klima Kiralama Hizmetleri" },
                  { href: "/#hakkimizda", text: "HAKKIMIZDA", title: "Asrın Klima Hakkımızda" },
                  { href: "/#iletisim", text: "İLETİŞİM", title: "Bize Ulaşın - İletişim Bilgileri" },
                ].map((item, index, items) => {
                  const isLastOdd = isHizmetlerPage && items.length % 2 === 1 && index === items.length - 1;
                  return (
                    <HeaderButton
                      key={index.toString()}
                      href={item.href}
                      text={item.text}
                      title={item.title}
                      setIsMenuOpen={setIsMenuOpen}
                      className={`font-medium transition-all ${isHizmetlerPage ? 'text-center' : ''} ${isLastOdd ? 'col-span-2' : ''}`}
                    />
                  );
                })}
              </div>

              {hizmetlerimiz.map((service) => {
                const isSubCategoryActive = service.subCategories?.some(subCategory =>
                  pathname.startsWith(`/hizmetlerimiz/${service.slug}/${subCategory.slug}`)
                );

                const isActive = !isSubCategoryActive && pathname.startsWith(`/hizmetlerimiz/${service.slug}`);

                return (
                  <div key={service.slug} className="w-full pr-6">
                    {isServicesPage && (
                      <>
                        <Link
                          href={`/hizmetlerimiz/${service.slug}`}
                          title={service.title}
                          onClick={(e) => {
                            setIsMenuOpen(false);
                            document.body.style.position = "";
                            document.body.style.top = "";
                            document.body.style.width = "";
                          }}
                          className={`w-full p-2 py-2 text-black/80 rounded-none hover:rounded-e-2xl text-start cursor-pointer flex items-center justify-between pl-5 text-base font-semibold text-primary dark:text-primary-dark
              ${isActive ? "bg-red/25 rounded-e-2xl text-red" : "hover:bg-gray-100 hover:text-red"}`}
                        >
                          {service.title}
                        </Link>

                        {service.slug && service.subCategories && (
                          <div className="mt-2 space-y-2">
                            {service.subCategories.map((sub) => {
                              const isSubActive =
                                pathname.startsWith(`/hizmetlerimiz/${service.slug}/${sub.slug}`);
                              return (
                                <div key={sub.slug}>
                                  <Link
                                    href={`/hizmetlerimiz/${service.slug}/${sub.slug}`}
                                    title={sub.title}
                                    onClick={(e) => {
                                      setIsMenuOpen(false);
                                      document.body.style.position = "";
                                      document.body.style.top = "";
                                      document.body.style.width = "";
                                    }}
                                    className={`block font-medium pl-12 mr-8 p-2 py-2 text-sm rounded-none hover:rounded-e-xl ${isSubActive
                                        ? "bg-red/25 rounded-e-xl text-red"
                                        : "hover:bg-[#F6F6F6] hover:text-red"
                                      }`}
                                  >
                                    {sub.title}
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}

            </nav>
          </div>

          <div className="w-full flex flex-col items-center space-y-4 p-6">
            <div className="flex items-center gap-2 text-black">
              <span className="text-xl">📞</span>
              <a href="tel:05388225559" title="Bizi Arayın: 0538 822 55 59">0538 822 55 59</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}