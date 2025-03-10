import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
    return (
        <div className="bg-blue text-gray-300 py-10">
            <div className=" h-auto px-6 mx-auto container">
            <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-7 gap-6 sm:gap-4 md:gap-0 lg:gap-6">
                <div className="md:col-span-2">
                    <h2 className="mb-2 text-yellow">Hızlı Bağlantılar</h2>
                    <ul className="space-y-1">
                        <li><a href="/" className="hover:text-[#ffffff]">Anasayfa</a></li>
                        <li><a href="/hizmetlerimiz" className="hover:text-[#ffffff]">Hizmetlerimiz</a></li>
                        <li><a href="/kiralama" className="hover:text-[#ffffff]">Kiralama</a></li>
                        <li><a href="/hakkimizda" className="hover:text-[#ffffff]">Hakkımızda</a></li>
                        <li><a href="/iletisim" className="hover:text-[#ffffff]">İletişim</a></li>
                    </ul>
                </div>

                <div className="xl:col-span-2 sm:col-span-4 lg:col-span-3">
                    <h2 className="mb-2 text-yellow">Hizmetler</h2>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-[#ffffff]">Split Klima Bakım Onarım ve Yedek Parça</a></li>
                        <li><a href="#" className="hover:text-[#ffffff]">Chiller Revizyon ve Onarım</a></li>
                        <li><a href="#" className="hover:text-[#ffffff]">Rooftop Klima Arıza, Bakım ve Onarım</a></li>
                        <li><a href="#" className="hover:text-[#ffffff]">VRF Klima Sistemleri</a></li>
                        <li><a href="#" className="hover:text-[#ffffff]">Klima Kiralama</a></li>
                        <li><a href="#" className="hover:text-[#ffffff]">Klima Santrali Bakım ve Onarım</a></li>
                        <li><a href="#" className="hover:text-[#ffffff]">İklimlendirme Hizmetleri</a></li>
                        <li><a href="#" className="hover:text-[#ffffff]">Hastane Hijyenik Klima Bakımı ve Onarımı</a></li>
                        <li><a href="#" className="hover:text-[#ffffff]">DX Soğutma Sistemleri Bakım ve Onarım</a></li>
                        <li><a href="#" className="hover:text-[#ffffff]">Hassas Klima Bakım ve Onarım ve Yedek Parça</a></li>
                    </ul>
                </div>

                <div className="flex gap-5 lg:gap-46 2xl:gap-72 max-xl:grid max-xl:grid-row-2 max-xl:justify-between max-xl:h-full">
                    <div className="lg:col-span-1 col-span-2">
                        <h2 className="mb-2 text-yellow">İletişim</h2>
                        <div className="flex items-center gap-3 mb-2">
                            <PhoneIcon className="h-5 w-5 text-white" />
                            <a href="tel:+5388225559" className="hover:underline hover:text-[#ffffff]">+538 822 5559</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <EnvelopeIcon className="h-5 w-5 text-white" />
                            <a href="mailto:info.aspar@gmail.com" className="hover:underline hover:text-[#ffffff]">info.aspar@gmail.com</a>
                        </div>
                    </div>
                    <div className="pr-4">
                        <div className="flex gap-4">
                            <div className="p-2 bg-white rounded-full">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-yellow">
                                    <FaFacebookF size={20} />
                                </a>
                            </div>
                            <div className="p-2 bg-white rounded-full">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-yellow">
                                    <FaInstagram size={20} />
                                </a>
                            </div>
                            <div className="p-2 bg-white rounded-full">
                                <a href="https://wa.me/5388225559" target="_blank" rel="noopener noreferrer" className=" text-blue hover:text-yellow">
                                    <IoLogoWhatsapp
                                        size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 mt-12">
                <div className="bottom-0 text-sm text-gray-300">© 2025 ASRINKLİMA. Tüm Hakları Saklıdır.</div>
            </div>
            </div>
        </div>
    );
};

export default Footer;
