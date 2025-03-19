import TrsButton from "../layout/TransparentButton";
import { CalendarIcon, PhoneIcon, } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="container w-full mx-auto lg:px-8 px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                <div className="lg:col-span-9 xl:col-span-7 2xl:col-span-6 text-white space-y-5">
                    <div className="flex gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <ClockIcon className="size-5 text-yellow" />
                            <span>24/7 Ulaşılabilir</span></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        ISITMA, SOĞUTMA VE HAVALANDIRMA HİZMETLERİ
                    </h2>
                    <p className="text-lg max-w-xl !text-white font-regular">

                        Ev, ofis ve fabrika klimalarının tamir, bakım, onarım ve kiralama hizmetlerini sunmaktayız.</p>
                    <Link href="/hizmetlerimiz/split-klima-bakim-onarim-ve-yedek-parca" passHref>
                        <button className="relative flex justify-between rounded-lg bg-white text-blue px-8 py-2.5 cursor-pointer text-base font-semibold w-[200px] transition-all duration-300 hover:text-blue hover:before:absolute hover:before:inset-0 hover:before:bg-black hover:before:opacity-10 hover:before:rounded-lg hover:before:content-[''] active:before:opacity-20">
                            Detaylı İncele
                            <ArrowUpRight />


                        </button>
                    </Link>
                    <div className="grid min-[400px]:grid-cols-2 grid-cols-1 gap-4 w-full justify-start sm:pt-6 pt-6 gap-x-4 lg:mr-10">

                        <div className="bg-[#EDF9FF]/5 backdrop-blur-md rounded-lg p-4 flex justify-center w-full sm:w-[300px] max-h-[105px] hover:bg-white/10 transition-colors">
                            <div className="flex text-center items-center justify-center gap-4 sm:gap-12">
                                <PhoneIcon className="h-6 w-6 text-yellow " />
                                <div className="flex flex-col gap-2.5">
                                    <h3 className=" font-semibold text-center">Hakan Şahin</h3>
                                    <a href="tel:+5380610334" className="hover:underline font-regular text-center">+5388225559</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#EDF9FF]/5 backdrop-blur-md rounded-lg p-4 gap-4 sm:gap-12 flex items-center justify-center w-full sm:w-[300px] max-h-[105px] hover:bg-white/10 transition-colors">
                            <CalendarIcon className="h-6 w-6 text-yellow stroke-3" />
                            <div className="flex flex-col gap-2.5">
                                <h3 className=" font-semibold text-center">Pzt-Cmt</h3>
                                <a className=" font-regular ">8.30-18.00</a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default HomePage;
