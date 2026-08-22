'use client'
import { usePathname } from "next/navigation";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { hizmetlerimiz } from "@/data/hizmetlerimiz";
const HomeFooter = () => {
    const pathname = usePathname();

    const isServicesPage = pathname?.includes("/hizmetlerimiz");

    if (isServicesPage) return null;

    return (
        <div className="bg-blue text-gray-300 py-10">
            <div className=" h-auto px-6 mx-auto container">
                <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-7 gap-6 sm:gap-4 md:gap-0 lg:gap-6">
                    <div className="md:col-span-2">
                        <h2 className="text-yellow sm:text-base mb-2">Hızlı Bağlantılar</h2>
                        <ul className="space-y-1">
                            <li><a href="/" title="Asrın Klima Anasayfa" className="hover:text-[#ffffff]">Anasayfa</a></li>
                            <li><a href="/#hizmetlerimiz" title="Sunduğumuz Isıtma, Soğutma ve Havalandırma Hizmetleri" className="hover:text-[#ffffff]">Hizmetlerimiz</a></li>
                            <li><a href="/hizmetlerimiz/klima-kiralama" title="Klima Kiralama Hizmetleri" className="hover:text-[#ffffff]">Kiralama</a></li>
                            <li><a href="/#hakkimizda" title="Asrın Klima Hakkımızda" className="hover:text-[#ffffff]">Hakkımızda</a></li>
                            <li><a href="/#iletisim" title="Bize Ulaşın - İletişim Bilgileri" className="hover:text-[#ffffff]">İletişim</a></li>
                        </ul>
                    </div>

                    <div className="xl:col-span-2 sm:col-span-4 lg:col-span-3">
                        <h2 className="text-yellow sm:text-base mb-2">Hizmetler</h2>
                        <ul className="space-y-1">
                            {hizmetlerimiz.map((service) => (
                                <li key={service.slug}>
                                    <a href={`/hizmetlerimiz/${service.slug}`} title={service.title} className="hover:text-[#ffffff]">{service.title}</a>
                                    {service.subCategories && service.subCategories.length > 0 && (
                                        <ul className="pl-4 mt-1 space-y-1">
                                            {service.subCategories.map((sub) => (
                                                <li key={sub.slug}>
                                                    <a href={`/hizmetlerimiz/${service.slug}/${sub.slug}`} title={sub.title} className="text-xs text-gray-400 hover:text-[#ffffff]">{sub.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-5 lg:gap-46 2xl:gap-72 max-xl:grid max-xl:grid-row-2 max-xl:justify-between max-xl:h-full">
                        <div className="lg:col-span-1 col-span-2">
                            <h2 className="text-yellow sm:text-base mb-2">İletişim</h2>
                            <div className="flex items-center gap-3 mb-2">
                                <PhoneIcon className="h-5 w-5 text-whiteB" />
                                <a href="tel:05388225559" title="Bizi Arayın: 0538 822 55 59" className="hover:underline hover:text-[#ffffff]">0538 822 55 59</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <EnvelopeIcon className="h-5 w-5 text-whiteB" />
                                <a href="mailto:info@asrinklima.com" title="Bize E-posta Gönderin" className="hover:underline hover:text-[#ffffff]">info@asrinklima.com</a>
                            </div>
                        </div>
                        <div className="pr-4">
                            <div className="flex gap-4">
                                <div className="p-2 bg-white rounded-full">
                                    <a href="https://www.facebook.com/hakansahin84" target="_blank" rel="nofollow noopener noreferrer" title="Asrın Klima Facebook Sayfası" className="text-blue hover:text-yellow">
                                        <FaFacebookF size={20} />
                                    </a>
                                </div>
                                <div className="p-2 bg-white rounded-full">
                                    <a href="https://www.instagram.com/asrlnklima/" target="_blank" rel="nofollow noopener noreferrer" title="Asrın Klima Instagram Sayfası" className="text-blue hover:text-yellow">
                                        <FaInstagram size={20} />
                                    </a>
                                </div>
                                <div className="p-2 bg-white rounded-full">
                                    <a href="https://wa.me/05388225559" target="_blank" rel="nofollow noopener noreferrer" title="WhatsApp ile Bize Ulaşın" className=" text-blue hover:text-yellow">
                                        <IoLogoWhatsapp
                                            size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-12 flex flex-col gap-2 text-sm text-gray-300 sm:flex-row sm:items-center sm:justify-between">
                    <div className="bottom-0">© 2026 ASRINKLİMA. Tüm Hakları Saklıdır.</div>
                    <a href="mailto:rabiaelf@gmail.com" title="Web Sitesi Tasarım ve Geliştirme İletişimi" className="hover:underline sm:text-right pr-4">
                        Tasarım ve Geliştirme:{" "}
                        <span className="font-semibold text-lg text-red">elf</span>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default HomeFooter;
