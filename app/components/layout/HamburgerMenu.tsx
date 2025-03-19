"use client";
import { useState, useLayoutEffect, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerMenu({ isMenuOpen, setIsMenuOpen }: HamburgerMenuProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const scrollYRef = useRef<number>(0);

  const isServicesPage = pathname?.includes("/hizmetlerimiz");
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(true)}
        className={`relative z-[100] rounded-md p-1 text-white hover:bg-black/20 cursor-pointer hover:text-yellow focus:outline-none focus:ring-2 focus:ring-yellow ${isMenuOpen ? "hidden" : "block"
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
          className={`fixed bg-[#f6f6f6] inset-y-4 right-4 left-4 z-[9999] flex flex-col rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-[100vw]"
            } menu-content`}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <div className="w-full flex border-b-2 border-gray-200 justify-between items-center pb-4 p-6">
            <div className="px-3 py-1 font-bold">
              <Logo isMenuOpen={isMenuOpen} />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-black bg-yellow hover:bg-[#CFD787] transition-all rounded-md p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
            >
              <XMarkIcon className="size-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-4 w-full text-black flex flex-col items-center">
              <div className={`justify-center px-6 w-full text-black ${isServicesPage ? "md:space-y-4 space-y-3 gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5" : "flex flex-col space-y-4"}`}>
                {[
                  { href: "#anasayfa", text: "ANASAYFA" },
                  { href: "#hizmetlerimiz", text: "HİZMETLERİMİZ" },
                  { href: "#kiralama", text: "KİRALAMA" },
                  { href: "#hakkımızda", text: "HAKKIMIZDA" },
                  { href: "#iletişim", text: "İLETİŞİM" },
                ].map((item, index) => (
                  <HeaderButton
                    key={index.toString()}
                    href={item.href}
                    text={item.text}
                    setIsMenuOpen={setIsMenuOpen}

                    className="text-lg font-medium hover:text-yellow text-center transition-all"
                   
                  />

                ))}
              </div>



              {hizmetlerimiz.map((service) => {
                const isActive = pathname === `/hizmetlerimiz/${service.slug}`;

                return (
                  <div key={service.slug} className="w-full pr-6">
                    {isServicesPage && (
                      <>
                        <Link
                          href={`/hizmetlerimiz/${service.slug}`}
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
                          <div className=" mt-2 space-y-2">
                            {service.subCategories.map((sub) => {
                              const isSubActive =
                                pathname === `/hizmetlerimiz/${service.slug}/${sub.slug}`;

                              return (
                                <div className="" key={sub.slug}>
                                  <Link
                                    href={`/hizmetlerimiz/${service.slug}/${sub.slug}`}
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
                )
              })}

            </nav>
          </div>

          <div className="w-full flex flex-col items-center space-y-4 p-6">
            <div className="flex items-center gap-2 text-black">
              <span className="text-xl">📞</span>
              <a href="tel:+90 5555555555">+90 5555555555</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}