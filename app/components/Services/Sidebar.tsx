"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = React.memo(() => {
  const pathname = usePathname();
  const [openService, setOpenService] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const activeService = hizmetlerimiz.find((service) =>
      pathname.startsWith(`/hizmetlerimiz/${service.slug}`)
    );
    setOpenService(activeService?.slug ?? null);
  }, [pathname]);

  const scrollToActiveItem = useCallback(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, []);


  useEffect(() => {
    scrollToActiveItem();
  }, [openService, scrollToActiveItem]);

  const toggleService = useCallback((slug: string) => {
    setOpenService((prev) => (prev !== slug ? slug : prev));
  }, []);
  

  const scrollToTop = () => {
    const topElement = document.getElementById("top");
    if (topElement) {
      const headerHeight = 100;
      const elementPosition = topElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerHeight, behavior: "smooth" });
    }
  };


  const renderService = useCallback(
    (service: typeof hizmetlerimiz[number]) => {
      const isActive = pathname === `/hizmetlerimiz/${service.slug}`;

      return (
        <div
          key={service.slug}
          ref={isActive ? activeItemRef : null}
          className="flex flex-col flex-grow"
        >
          <Link href={`/hizmetlerimiz/${service.slug}`} passHref>
            <button
              className={`w-full p-2 py-3 text-black/80 rounded-none hover:rounded-e-2xl text-start cursor-pointer flex items-center justify-between pl-5 text-base font-semibold text-primary dark:text-primary-dark
              ${isActive
                  ? "bg-red/25 rounded-e-2xl text-red"
                  : "hover:bg-gray-100 hover:text-red"
                }`}
              onClick={() => {
                toggleService(service.slug);
                scrollToTop();
                scrollToActiveItem();
              }}
            >
              {service.title}
              {service.subCategories && (
                <span
                  className={`transition-transform p-2 text-black/60 duration-300 ease-in-out ${openService === service.slug ? "rotate-90 text-red" : "rotate-0"
                    }`}
                >
                  <IoIosArrowForward />
                </span>
              )}
            </button>
          </Link>

          {openService === service.slug && service.subCategories && (
            <div className="border-l-2 border-red/25 ml-6 flex-grow">
              {service.subCategories.map((subCategory) => {
                const isSubActive =
                  pathname === `/hizmetlerimiz/${service.slug}/${subCategory.slug}`;

                return (
                  <div key={subCategory.slug} className="flex-grow">
                    <Link
                      href={`/hizmetlerimiz/${service.slug}/${subCategory.slug}`}
                      className={`block font-medium mr-8 p-2 py-2 text-sm rounded-none hover:rounded-e-xl ${isSubActive
                          ? "bg-red/25 rounded-e-xl text-red"
                          : "hover:bg-[#F6F6F6] hover:text-red"
                        }`}
                      passHref
                      onClick={scrollToTop}
                    >
                      {subCategory.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    },
    [pathname, openService, toggleService]
  );

  return (
    <aside
      ref={sidebarRef}
      className={`pb-20 w-76 h-services pr-2 h-[calc(100vh-5rem)] max-h-screen overflow-y-auto fixed ${isSticky ? " top-24 left-0 bottom-0" : "relative "

        }`}
    >
      {hizmetlerimiz.map(renderService)}
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
