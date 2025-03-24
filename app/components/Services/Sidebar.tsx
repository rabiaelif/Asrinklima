"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const pathname = usePathname();
  const [openService, setOpenService] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const activeService = hizmetlerimiz.find((service) =>
      pathname.startsWith(`/hizmetlerimiz/${service.slug}`)
    );
    if (activeService) {
      setOpenService(activeService.slug);
    }
  }, [pathname]);


  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [openService]);
  

  const toggleService = (slug: string) => {
    setOpenService(openService === slug ? null : slug);
  };

  return (
    <aside
      ref={sidebarRef}
      className={`pb-8 w-76 h-services min-h-[calc(100vh-5rem)] max-h-screen overflow-y-auto ${
        isSticky ? "fixed top-20 left-0 bottom-0 pr-2" : "relative pr-4"
      }`}
    >
      {hizmetlerimiz.map((service) => {
        const isActive = pathname === `/hizmetlerimiz/${service.slug}`;

        return (
          <div key={service.slug} ref={isActive ? activeItemRef : null} className="flex flex-col flex-grow">
            <Link href={`/hizmetlerimiz/${service.slug}`}>
              <button
                className={`w-full p-2 py-3 text-black/80 rounded-none hover:rounded-e-2xl text-start cursor-pointer flex items-center justify-between pl-5 text-base font-semibold text-primary dark:text-primary-dark
                ${isActive ? "bg-red/25 rounded-e-2xl text-red" : "hover:bg-gray-100 hover:text-red"}`}
                onClick={() => toggleService(service.slug)}
              >
                {service.title}
                {service.subCategories && (
                  <span
                    className={`transition-transform p-2 text-black/60 duration-300 ease-in-out ${
                      openService === service.slug ? "rotate-90 text-red" : "rotate-0"
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
                        className={`block font-medium mr-8 p-2 py-2 text-sm rounded-none hover:rounded-e-xl ${
                          isSubActive
                            ? "bg-red/25 rounded-e-xl text-red"
                            : "hover:bg-[#F6F6F6] hover:text-red"
                        }`}
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
      })}
    </aside>
  );
};

export default Sidebar;
